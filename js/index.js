var data = [
    'Agya',
    'Calya',
    'Avanza',
    'Xenia',
    'Sigra',
    'Rush',
    'Terios',
    'Kijang Innova',
    'Fortuner',
    'Hilux',
    'Land Cruiser',
    'Alphard',
    'Vellfire',
    'Camry'
]

console.log('INI DATA LOCAL: ', data)
var dataString = 'Hello World!!!'
var dataNumber = 1124124351532
var dataBoolean = true

// TIPE DATA
console.log(dataString)
console.log(dataNumber)
console.log(dataBoolean)

// PERHITUNGAN
var a = 5
var b = 10
var countKali = a * b
var countTambah = a + b
var countKurang = a - b
var countBagi = a/b
var countSisaBagi = a % b

console.log('PERKALIAN', countKali)
console.log('PENJUMLAHAN', countTambah)
console.log('PENGURANGAN', countKurang)
console.log('PEMBAGIAN', countBagi)
console.log('SISA BAGI', countSisaBagi)

// PERBANDINGAN
var resultTipeData = a === b //Ngecek tipe data
// var resultTipeData = a == b //ngga ngecek tipe data
console.log('PERBANDINGAN', resultTipeData)

var resultKurangDari = a < b
console.log(resultKurangDari)

var resultLebihDari = a > b
console.log(resultLebihDari)

// LOGIKA
const nilaiUjian = 80
const nilaiAbsensi = 100

const lulusUjian = nilaiUjian >= 75
const lulusAbsensi = nilaiAbsensi >= 85

const fullCertificate = lulusUjian && lulusAbsensi
const partialCertificate = lulusUjian || lulusAbsensi
const noCertificate = !lulusUjian && !lulusAbsensi

console.log('FULL CERTIFICATE', fullCertificate)
console.log('PARTIAL CERTIFICATE', partialCertificate)
console.log('NO CERTIFICATE', noCertificate)