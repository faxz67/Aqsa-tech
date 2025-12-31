# Solution pour l'erreur 502 Bad Gateway

## Problème
L'erreur 502 signifie que Cloudflare Tunnel ne peut pas atteindre votre serveur local.

## Solution étape par étape

### 1. Arrêter tous les processus en cours
- Fermez tous les terminaux qui exécutent `npm run dev` ou `cloudflared`
- Appuyez sur `Ctrl+C` dans chaque terminal

### 2. Redémarrer le serveur de développement

**Terminal 1** - Naviguez vers le dossier du projet :
```powershell
cd "C:\Users\faisa\Downloads\Aqsa Tech\project"
```

**Terminal 1** - Démarrez le serveur Vite :
```powershell
npm run dev
```

Attendez de voir ce message :
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://0.0.0.0:5173/
```

**IMPORTANT** : Ne fermez pas ce terminal ! Laissez-le ouvert.

### 3. Vérifier que le serveur fonctionne localement

Ouvrez votre navigateur et allez sur : `http://localhost:5173`

Si le site s'affiche, passez à l'étape 4.

### 4. Démarrer Cloudflare Tunnel

**Terminal 2** (nouveau terminal) - Exécutez :
```powershell
cloudflared tunnel --url http://localhost:5173
```

Vous devriez voir quelque chose comme :
```
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://xxxx-xxxx-xxxx.trycloudflare.com                                                 |
+--------------------------------------------------------------------------------------------+
```

### 5. Vérifier l'URL

Copiez l'URL générée (qui commence par `https://`) et testez-la dans votre navigateur.

## Vérifications importantes

### ✅ Le serveur Vite doit être démarré AVANT le tunnel
1. D'abord : `npm run dev` (Terminal 1)
2. Ensuite : `cloudflared tunnel --url http://localhost:5173` (Terminal 2)

### ✅ Les deux terminaux doivent rester ouverts
- Terminal 1 : Serveur de développement
- Terminal 2 : Tunnel Cloudflare

### ✅ Vérifier le port
Assurez-vous que le serveur écoute sur le port **5173**. Si Vite utilise un autre port, modifiez la commande cloudflared :
```powershell
cloudflared tunnel --url http://localhost:XXXX
```
(Remplacez XXXX par le port affiché par Vite)

## Si le problème persiste

### Option 1 : Utiliser un port différent
Si le port 5173 est occupé, Vite utilisera automatiquement le port suivant (5174, 5175, etc.). Utilisez ce port dans cloudflared.

### Option 2 : Vérifier le firewall Windows
```powershell
# Autoriser le port dans le firewall
New-NetFirewallRule -DisplayName "Vite Dev Server" -Direction Inbound -LocalPort 5173 -Protocol TCP -Action Allow
```

### Option 3 : Tester avec curl
```powershell
curl http://localhost:5173
```
Si cela fonctionne, le problème vient de la configuration cloudflared.

## Commandes rapides

**Démarrer le serveur :**
```powershell
npm run dev
```

**Démarrer le tunnel :**
```powershell
cloudflared tunnel --url http://localhost:5173
```

**Arrêter tout :**
- Appuyez sur `Ctrl+C` dans chaque terminal

