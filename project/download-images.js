import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des dossiers
const baseDir = path.join(__dirname, 'public', 'images');
const iconsDir = path.join(baseDir, 'icons');
const photosDir = path.join(baseDir, 'photos');
const flagsDir = path.join(baseDir, 'flags');

// Créer les dossiers s'ils n'existent pas
[iconsDir, photosDir, flagsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Fonction pour télécharger une image
function downloadImage(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Suivre les redirections
        return downloadImage(response.headers.location, destination)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Téléchargé: ${path.basename(destination)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {});
      reject(err);
    });
  });
}

// Liste de toutes les images à télécharger
const imagesToDownload = [
  // Icons8 - Icônes de services
  {
    url: 'https://img.icons8.com/3d-fluency/512/wallpaper.png',
    dest: path.join(iconsDir, 'wallpaper.png'),
    name: 'wallpaper.png'
  },
  {
    url: 'https://img.icons8.com/color/512/tile.png',
    dest: path.join(iconsDir, 'tile.png'),
    name: 'tile.png'
  },
  {
    url: 'https://img.icons8.com/color/512/brick-wall.png',
    dest: path.join(iconsDir, 'brick-wall.png'),
    name: 'brick-wall.png'
  },
  {
    url: 'https://img.icons8.com/color/512/saw.png',
    dest: path.join(iconsDir, 'saw.png'),
    name: 'saw.png'
  },
  {
    url: 'https://img.icons8.com/color/512/diamond.png',
    dest: path.join(iconsDir, 'diamond.png'),
    name: 'diamond.png'
  },
  {
    url: 'https://img.icons8.com/color/512/paint-palette.png',
    dest: path.join(iconsDir, 'paint-palette.png'),
    name: 'paint-palette.png'
  },
  {
    url: 'https://img.icons8.com/color/512/air-conditioner.png',
    dest: path.join(iconsDir, 'air-conditioner.png'),
    name: 'air-conditioner.png'
  },
  {
    url: 'https://img.icons8.com/color/512/fan.png',
    dest: path.join(iconsDir, 'fan.png'),
    name: 'fan.png'
  },
  {
    url: 'https://img.icons8.com/color/512/electronics.png',
    dest: path.join(iconsDir, 'electronics.png'),
    name: 'electronics.png'
  },
  {
    url: 'https://img.icons8.com/color/512/ceiling.png',
    dest: path.join(iconsDir, 'ceiling.png'),
    name: 'ceiling.png'
  },
  {
    url: 'https://img.icons8.com/color/512/plumbing.png',
    dest: path.join(iconsDir, 'plumbing.png'),
    name: 'plumbing.png'
  },
  
  // Unsplash - Photos pour galeries de services
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-1.jpg'),
    name: 'wallpaper-gallery-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1631889993950-87ccb4b8d3c0?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-2.jpg'),
    name: 'wallpaper-gallery-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-3.jpg'),
    name: 'wallpaper-gallery-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-4.jpg'),
    name: 'wallpaper-gallery-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-5.jpg'),
    name: 'wallpaper-gallery-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'wallpaper-gallery-6.jpg'),
    name: 'wallpaper-gallery-6.jpg'
  },
  
  // Unsplash - Photos pour About
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop&auto=format&q=85',
    dest: path.join(photosDir, 'about-main.jpg'),
    name: 'about-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&h=400&fit=crop&auto=format&q=80',
    dest: path.join(photosDir, 'about-detail.jpg'),
    name: 'about-detail.jpg'
  },
  
  // Unsplash - Photos pour ExploreOurServices
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-building.jpg'),
    name: 'explore-building.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-property.jpg'),
    name: 'explore-property.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-renovation.jpg'),
    name: 'explore-renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-mep.jpg'),
    name: 'explore-mep.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-maintenance.jpg'),
    name: 'explore-maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'explore-design.jpg'),
    name: 'explore-design.jpg'
  },
  
  // Unsplash - Photos pour CustomerTestimonials
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-1.jpg'),
    name: 'testimonial-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-2.jpg'),
    name: 'testimonial-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-3.jpg'),
    name: 'testimonial-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-4.jpg'),
    name: 'testimonial-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-5.jpg'),
    name: 'testimonial-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'testimonial-6.jpg'),
    name: 'testimonial-6.jpg'
  },
  
  // Unsplash - Photos pour blogPosts (les plus importantes)
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-1.jpg'),
    name: 'blog-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-2.jpg'),
    name: 'blog-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-3.jpg'),
    name: 'blog-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-4.jpg'),
    name: 'blog-4.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-5.jpg'),
    name: 'blog-5.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-6.jpg'),
    name: 'blog-6.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=800&fit=crop&auto=format&q=90',
    dest: path.join(photosDir, 'blog-7.jpg'),
    name: 'blog-7.jpg'
  },
  
  // Flagcdn - Drapeaux
  {
    url: 'https://flagcdn.com/w40/gb.png',
    dest: path.join(flagsDir, 'gb.png'),
    name: 'gb.png'
  },
  {
    url: 'https://flagcdn.com/w40/ae.png',
    dest: path.join(flagsDir, 'ae.png'),
    name: 'ae.png'
  },
];

// Télécharger toutes les images
async function downloadAllImages() {
  console.log('🚀 Début du téléchargement des images...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const image of imagesToDownload) {
    try {
      // Vérifier si le fichier existe déjà
      if (fs.existsSync(image.dest)) {
        console.log(`⊘ Déjà présent: ${image.name}`);
        successCount++;
        continue;
      }
      
      await downloadImage(image.url, image.dest);
      successCount++;
    } catch (error) {
      console.error(`✗ Erreur pour ${image.name}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n✅ Téléchargement terminé!`);
  console.log(`   ✓ Réussis: ${successCount}`);
  console.log(`   ✗ Erreurs: ${errorCount}`);
}

// Exécuter le script
downloadAllImages().catch(console.error);

