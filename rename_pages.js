import fs from 'fs';
import path from 'path';

function renameAndFix() {
    if (fs.existsSync('src/pages')) {
        fs.renameSync('src/pages', 'src/views');
        console.log('Renamed src/pages to src/views');
    }

    function getAllFiles(dirPath, arrayOfFiles) {
        const files = fs.readdirSync(dirPath);
        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function (file) {
            if (fs.statSync(dirPath + '/' + file).isDirectory()) {
                arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
            } else {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        });
        return arrayOfFiles;
    }

    const files = getAllFiles('src').filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // replace /pages/ with /views/
        if (content.includes('/pages/')) {
            content = content.replace(/\/pages\//g, '/views/');
            changed = true;
        }

        // replace '../pages' with '../views'
        if (content.includes('../pages')) {
            content = content.replace(/\.\.\/pages/g, '../views');
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log('Updated imports in:', file);
        }
    });

    console.log('done fixing views');
}

renameAndFix();
