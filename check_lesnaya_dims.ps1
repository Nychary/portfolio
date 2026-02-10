Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem -Path ".\public\images\lesnaya\*.*"
foreach ($imgFile in $images) {
    try {
        $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
        Write-Output "$($imgFile.Name): $($img.Width)x$($img.Height)"
        $img.Dispose()
    } catch {
        Write-Output "Error reading $($imgFile.Name)"
    }
}
