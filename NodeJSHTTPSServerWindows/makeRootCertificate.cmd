makecert.exe ^
-n "CN=MyMemorySucksRootCA" ^
-r ^
-pe ^
-a sha512 ^
-len 4096 ^
-cy authority ^
-sv MyMemorySucksRootCA.pvk ^
MyMemorySucksRootCA.cer

pvk2pfx.exe ^
-pvk MyMemorySucksRootCA.pvk ^
-spc MyMemorySucksRootCA.cer ^
-pfx MyMemorySucksRootCA.pfx ^
-po thisismypassphrase