Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public/images/047A1124.jpg")
Write-Output "$($img.Width)x$($img.Height)"
$img.Dispose()
