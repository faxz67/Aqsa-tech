# Guide de Configuration Cloudflare Tunnel

Ce guide vous aidera à partager votre site web localement avec vos amis via Cloudflare Tunnel.

## Étape 1 : Installer Cloudflared

### Windows (PowerShell en tant qu'administrateur)
```powershell
# Télécharger et installer cloudflared
winget install --id Cloudflare.cloudflared
```

### Alternative : Téléchargement manuel
1. Allez sur https://github.com/cloudflare/cloudflared/releases
2. Téléchargez `cloudflared-windows-amd64.exe`
3. Renommez-le en `cloudflared.exe`
4. Placez-le dans un dossier accessible (ex: `C:\cloudflared\`)
5. Ajoutez ce dossier à votre PATH

## Étape 2 : Vérifier l'installation

Ouvrez PowerShell ou CMD et exécutez :
```bash
cloudflared --version
```

## Étape 3 : Démarrer le serveur de développement

Dans un terminal, naviguez vers le dossier du projet et lancez :
```bash
npm run dev
```

Le serveur devrait démarrer sur `http://localhost:5173`

## Étape 4 : Créer un tunnel Cloudflare

Dans un **nouveau terminal**, exécutez :

```bash
cloudflared tunnel --url http://localhost:5173
```

Cloudflare va générer une URL temporaire qui ressemble à :
```
https://xxxx-xxxx-xxxx.trycloudflare.com
```

## Étape 5 : Partager l'URL

Copiez l'URL générée et partagez-la avec votre ami. Cette URL fonctionnera tant que :
- Le terminal avec `cloudflared` reste ouvert
- Le serveur de développement (`npm run dev`) reste actif

## Option : Tunnel permanent (recommandé)

Pour un tunnel permanent qui ne change pas d'URL :

1. **Créer un tunnel nommé** :
```bash
cloudflared tunnel create aqsa-tech
```

2. **Créer un fichier de configuration** (`config.yml`) :
```yaml
tunnel: <TUNNEL_ID>
credentials-file: C:\Users\faisa\.cloudflared\<TUNNEL_ID>.json

ingress:
  - hostname: aqsa-tech.yourdomain.com
    service: http://localhost:5173
  - service: http_status:404
```

3. **Lancer le tunnel** :
```bash
cloudflared tunnel run aqsa-tech
```

## Script automatique

Utilisez le script `start-tunnel.ps1` pour automatiser le processus.

