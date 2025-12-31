# Cloudflare Tunnel Startup Script
# This script starts your localhost on Cloudflare Tunnel

Write-Host "=== Cloudflare Tunnel Setup ===" -ForegroundColor Cyan

# Check if cloudflared is installed
Write-Host "`n[1/3] Checking for cloudflared..." -ForegroundColor Yellow
try {
    $cloudflaredVersion = cloudflared --version 2>&1
    Write-Host "✓ cloudflared is installed: $cloudflaredVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ cloudflared is not installed or not in PATH" -ForegroundColor Red
    Write-Host "`nPlease install cloudflared first:" -ForegroundColor Yellow
    Write-Host "  winget install --id Cloudflare.cloudflared" -ForegroundColor White
    Write-Host "`nOr download from: https://github.com/cloudflare/cloudflared/releases" -ForegroundColor White
    exit 1
}

# Check if dev server is running on port 5173
Write-Host "`n[2/3] Checking if dev server is running on port 5173..." -ForegroundColor Yellow
$portCheck = Test-NetConnection -ComputerName localhost -Port 5173 -WarningAction SilentlyContinue
if ($portCheck.TcpTestSucceeded) {
    Write-Host "✓ Dev server is already running on port 5173" -ForegroundColor Green
} else {
    Write-Host "⚠ Dev server is not running on port 5173" -ForegroundColor Yellow
    Write-Host "Starting dev server in background..." -ForegroundColor Yellow
    
    # Start dev server in background
    $devServerJob = Start-Job -ScriptBlock {
        Set-Location $using:PWD
        npm run dev
    }
    
    Write-Host "Waiting for dev server to start..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    
    # Check again
    $portCheck = Test-NetConnection -ComputerName localhost -Port 5173 -WarningAction SilentlyContinue
    if ($portCheck.TcpTestSucceeded) {
        Write-Host "✓ Dev server started successfully" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to start dev server. Please run 'npm run dev' manually in another terminal." -ForegroundColor Red
        exit 1
    }
}

# Start Cloudflare tunnel
Write-Host "`n[3/3] Starting Cloudflare tunnel..." -ForegroundColor Yellow
Write-Host "This will create a public URL for your localhost:5173" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the tunnel`n" -ForegroundColor Yellow

# Start the tunnel
cloudflared tunnel --url http://localhost:5173

