# haneconfig unified sync script
param (
    [switch]$Pull
)

$geminiConfigDir = "$env:USERPROFILE\.gemini\config\skills"
$claudeConfigDir = "$env:USERPROFILE\.claude\skills"
$repoSkillsDir   = "$PSScriptRoot\skills"

if ($Pull) {
    Write-Host "Drar hem (Pull) skills från Gemini till haneconfig-repot..." -ForegroundColor Yellow
    if (Test-Path $geminiConfigDir) {
        New-Item -ItemType Directory -Force -Path $repoSkillsDir | Out-Null
        Copy-Item -Path "$geminiConfigDir\*" -Destination $repoSkillsDir -Recurse -Force
        Write-Host "[√] Skills hämtade till $repoSkillsDir" -ForegroundColor Green
    }
} else {
    Write-Host "Synkar haneconfig skills till Gemini och Claude Code (Push)..." -ForegroundColor Cyan
    
    if (Test-Path $repoSkillsDir) {
        # Sync to Gemini
        New-Item -ItemType Directory -Force -Path $geminiConfigDir | Out-Null
        Copy-Item -Path "$repoSkillsDir\*" -Destination $geminiConfigDir -Recurse -Force
        Write-Host "[√] Synkade skills till $geminiConfigDir" -ForegroundColor Green

        # Sync to Claude Code
        New-Item -ItemType Directory -Force -Path $claudeConfigDir | Out-Null
        Copy-Item -Path "$repoSkillsDir\*" -Destination $claudeConfigDir -Recurse -Force
        Write-Host "[√] Synkade skills till $claudeConfigDir" -ForegroundColor Green

        # Backward compatibility sync inside repo
        if (Test-Path "$PSScriptRoot\gemini\skills") {
            Copy-Item -Path "$repoSkillsDir\*" -Destination "$PSScriptRoot\gemini\skills" -Recurse -Force | Out-Null
        }
        if (Test-Path "$PSScriptRoot\claude\skills") {
            Copy-Item -Path "$repoSkillsDir\*" -Destination "$PSScriptRoot\claude\skills" -Recurse -Force | Out-Null
        }
    }
}

# Ensure Stitch MCP is registered in ~/.claude.json using gcloud ADC / system gcloud
$stitchKey = $env:STITCH_API_KEY
if (-not $stitchKey) {
    $stitchKey = [System.Environment]::GetEnvironmentVariable('STITCH_API_KEY', 'User')
}

if ($stitchKey) {
    npx -y @anthropic-ai/claude-code mcp add -s user stitch -e STITCH_API_KEY=$stitchKey -e STITCH_USE_SYSTEM_GCLOUD=1 -- npx -y @_davideast/stitch-mcp proxy | Out-Null
    Write-Host "[√] Stitch MCP verifierad i Claude Code (med gcloud ADC & API-nyckel)" -ForegroundColor Green
} else {
    npx -y @anthropic-ai/claude-code mcp add -s user stitch -e STITCH_USE_SYSTEM_GCLOUD=1 -- npx -y @_davideast/stitch-mcp proxy | Out-Null
    Write-Host "[√] Stitch MCP verifierad i Claude Code (gcloud ADC mode)" -ForegroundColor Green
}

Write-Host "Synkronisering slutförd!" -ForegroundColor Cyan
