param(
  [Parameter(Mandatory = $true)]
  [string]$UserName,

  [Parameter(Mandatory = $true)]
  [string]$UserEmail,

  [string]$RemoteHostAlias,

  [string]$RemotePath
)

$null = git rev-parse --show-toplevel 2>$null
if ($LASTEXITCODE -ne 0) {
  throw "This command must run inside a Git repository."
}

git config user.name $UserName
git config user.email $UserEmail

if ($RemoteHostAlias -and $RemotePath) {
  git remote set-url origin ("git@{0}:{1}" -f $RemoteHostAlias, $RemotePath)
}

Write-Host "Git identity configured for this repository:"
Write-Host ("  user.name  = {0}" -f (git config user.name))
Write-Host ("  user.email = {0}" -f (git config user.email))

if ($RemoteHostAlias -and $RemotePath) {
  Write-Host ("  origin     = {0}" -f (git remote get-url origin))
}
