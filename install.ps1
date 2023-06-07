$dirname = "lib"

# Pre-clean
Remove-Item -Force $dirname -Recurse | out-null
New-Item -Force -ItemType Directory -Path $dirname | out-null

# Download
(New-Object System.Net.WebClient).DownloadFile("https://github.com/thqby/AutoHotkey_H/releases/download/v2.0.2/v2.0.2.7z", ".\$($dirname)\v2.0.2.7z")

# Decompress
& ${env:ProgramFiles}\7-Zip\7z.exe x ".\$($dirname)\v2.0.2.7z" "-o$($dirname)" -y  | out-null

# Clean-up
Remove-Item -Force ".\$($dirname)\v2.0.2.7z" | out-null
