# Install and Run Cloudflare Tunnel

## Step 1: Install Cloudflared

Open PowerShell as Administrator and run:

```powershell
winget install --id Cloudflare.cloudflared
```

**OR** download manually:
1. Go to: https://github.com/cloudflare/cloudflared/releases
2. Download `cloudflared-windows-amd64.exe`
3. Rename it to `cloudflared.exe`
4. Place it in a folder (e.g., `C:\cloudflared\`)
5. Add that folder to your system PATH

## Step 2: Verify Installation

Close and reopen your terminal, then run:
```powershell
cloudflared --version
```

## Step 3: Start Your App and Tunnel

### Method A: Using the Script (After Installation)

1. **Start your dev server** (Terminal 1):
   ```powershell
   cd "C:\Users\faisa\OneDrive\Desktop\Faisal New\Downloads\Aqsa Tech\project"
   npm run dev
   ```

2. **Start the tunnel** (Terminal 2):
   ```powershell
   cd "C:\Users\faisa\OneDrive\Desktop\Faisal New\Downloads\Aqsa Tech\project"
   .\start-cloudflare-tunnel.ps1
   ```

### Method B: Manual Command

1. **Start your dev server** (Terminal 1):
   ```powershell
   cd "C:\Users\faisa\OneDrive\Desktop\Faisal New\Downloads\Aqsa Tech\project"
   npm run dev
   ```

2. **Start the tunnel** (Terminal 2):
   ```powershell
   cloudflared tunnel --url http://localhost:5173
   ```

3. **Copy the URL** that appears (e.g., `https://xxxx-xxxx-xxxx.trycloudflare.com`)

## That's It!

Your localhost is now accessible via the Cloudflare URL. Share it with anyone!

**Note:** The tunnel will stop when you close the terminal or press Ctrl+C.

