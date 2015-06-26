makecert.exe ^
-n "CN=dev.mymemorysucks.local" ^
-iv MyMemorySucksRootCA.pvk ^
-ic MyMemorySucksRootCA.cer ^
-pe ^
-a sha512 ^
-len 4096 ^
-b 01/01/2014 ^
-e 01/01/2016 ^
-sky exchange ^
-eku 1.3.6.1.5.5.7.3.1 ^
-sv dev.mymemorysucks.local.pvk ^
dev.mymemorysucks.local.cer

pvk2pfx.exe ^
-pvk dev.mymemorysucks.local.pvk ^
-spc dev.mymemorysucks.local.cer ^
-pfx dev.mymemorysucks.local.pfx ^
-po thisismypassphrase

openssl.exe pkcs12 -in .\dev.mymemorysucks.local.pfx -out .\dev.mymemorysucks.local.pem
openssl.exe x509 -in .\dev.mymemorysucks.local.pem -out .\dev.mymemorysucks.local.cert