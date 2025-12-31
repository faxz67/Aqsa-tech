# Quick Start: Cloudflare Tunnel

This guide will help you expose your localhost to the internet using Cloudflare Tunnel.

## Prerequisites

1. **Install Cloudflared** (if not already installed):
   ```powershell
   winget install --id Cloudflare.cloudflared
   ```
   
   Or download manually from: https://github.com/cloudflare/cloudflared/releases

2. **Verify installation**:
   ```bash
   cloudflared --version
   ```

## Quick Start (Easiest Method)

### Option 1: Using the PowerShell Script (Recommended)
```powershell
cd project
.\start-cloudflare-tunnel.ps1
```

### Option 2: Using the Batch Script
```cmd
cd project
start-cloudflare-tunnel.bat
```

### Option 3: Manual Method

1. **Start your dev server** (in one terminal):
   ```bash
   npm run dev
   ```
   Your app should be running on `http://localhost:5173`

2. **Start Cloudflare tunnel** (in another terminal):
   ```bash
   cloudflared tunnel --url http://localhost:5173
   ```

3. **Copy the URL** that appears (it will look like `https://xxxx-xxxx-xxxx.trycloudflare.com`)

4. **Share the URL** with anyone - it will work as long as:
   - The tunnel terminal stays open
   - Your dev server stays running

## Notes

- The URL is temporary and will change each time you restart the tunnel
- The tunnel only works while both processes are running
- For a permanent URL, you'll need to set up a named tunnel with a custom domain (see `CLOUDFLARE_TUNNEL_SETUP.md`)

## Troubleshooting

- **"cloudflared not found"**: Make sure cloudflared is installed and in your PATH
- **"Connection refused"**: Make sure your dev server is running on port 5173
- **Port already in use**: Change the port in `vite.config.ts` or stop the process using port 5173

