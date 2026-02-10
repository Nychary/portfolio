Add-Type -AssemblyName System.Drawing
$images = Get-ChildItem -Path ".\public\images\Gr*.jpg"
foreach ($imgFile in $images) {
    $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
    Write-Output "$($imgFile.Name): $($img.Width)x$($img.Height)"
    $img.Dispose()
}
