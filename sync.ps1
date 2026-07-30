# haneconfig sync script
Write-Host "Synkar haneconfig skills för Gemini och Claude..." -ForegroundColor Cyan

$geminiConfigDir = "$env:USERPROFILE\.gemini\config\skills"
$claudeConfigDir = "$env:USERPROFILE\.claude\skills"

# Copy Gemini Skills
if (Test-Path ".\gemini\skills") {
    New-Item -ItemType Directory -Force -Path $geminiConfigDir | Out-Null
    Copy-Item -Path ".\gemini\skills\*" -Destination $geminiConfigDir -Recurse -Force
    Write-Host "[√] Synkade Gemini skills till $geminiConfigDir" -ForegroundColor Green
}

# Copy Claude Skills
if (Test-Path ".\claude\skills") {
    New-Item -ItemType Directory -Force -Path $claudeConfigDir | Out-Null
    Copy-Item -Path ".\claude\skills\*" -Destination $claudeConfigDir -Recurse -Force
    Write-Host "[√] Synkade Claude skills till $claudeConfigDir" -ForegroundColor Green
}

# Ensure Stitch MCP is registered in ~/.claude.json
if ($env:STITCH_API_KEY) {
    npx -y @anthropic-ai/claude-code mcp add -s user stitch -e STITCH_API_KEY=$env:STITCH_API_KEY -- npx -y @_davideast/stitch-mcp proxy | Out-Null
    Write-Host "[√] Stitch MCP verifierad i Claude Code" -ForegroundColor Green
} else {
    Write-Host "[!] Obs: STITCH_API_KEY saknas i miljövariabler" -ForegroundColor Yellow
}

Write-Host "Synkronisering slutförd!" -ForegroundColor Cyan
