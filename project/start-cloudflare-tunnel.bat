@echo off
REM Cloudflare Tunnel Startup Script (Batch version)
echo === Cloudflare Tunnel Setup ===
echo.

REM Check if cloudflared is installed
echo [1/3] Checking for cloudflared...
cloudflared --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] cloudflared is not installed or not in PATH
    echo.
    echo Please install cloudflared first:
    echo   winget install --id Cloudflare.cloudflared
    echo.
    echo Or download from: https://github.com/cloudflare/cloudflared/releases
    pause
    exit /b 1
)
echo [OK] cloudflared is installed
echo.

REM Check if dev server is running
echo [2/3] Checking if dev server is running on port 5173...
netstat -an | findstr ":5173" >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Dev server is not running on port 5173
    echo Please start it manually in another terminal with: npm run dev
    echo.
    echo Press any key to continue anyway, or Ctrl+C to cancel...
    pause >nul
)
echo [OK] Dev server check complete
echo.

REM Start Cloudflare tunnel
echo [3/3] Starting Cloudflare tunnel...
echo This will create a public URL for your localhost:5173
echo Press Ctrl+C to stop the tunnel
echo.
cloudflared tunnel --url http://localhost:5173

