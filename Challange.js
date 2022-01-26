/**
 * ================= Challenges ========================================================================
 * 
 * 
 *
 * Buatlah cek tipe data dengan output :
 * 
 * ini tipe data string
 * ini tipe data boolean
 * ini tipe data undifined 
 * ini tipe data object
 * 
 * buatlah looping dari kata berikut dan tentukan jumlah karakternya nya  : 
 * 
 * - Hello
 * - Assalamualaikum
 * - Selamat Datang
 * - semangat!!
 * 
 * buatlah object dengan nama siswa dari properti : 
 * 
 * nama depan : almerio
 * nama belakang : setiawan
 * kelas : 10
 * kompetensi keahlian : Rekayasa Perangkat Lunak 
 * alamat : -   jalan : jalan raya dayeuh
 *              kecamatan: jonggol
 *              kabupaten : bogor
 * sekolah : IDN Boarding School
 * nilai :  - diniyah : B+
 *          - IT : A
 *            bahasa inggris : B
 * 
 * buatlah output dengan memanggil : 
 * 
 * data siswa:
 * nama lengkap : almerio setiawan
 * kelas : 10
 * kompetensi keahlian : rekayasa perangkat lunak
 * asal kota : bogor
 * nilai : diniyah (B+), IT (A), Bahasa Inggris (B)
 * 
 * 
 * let nama = john kelas = 10 jurusan = RPL 
 * buatlah output menggunakan template literal
 * hallo nama saya john, saya berasal dari kelas 10 jurusan RPL.
 * 
 * 
 * =============================================================================================================
 */


let aku = "saya"
let bool = true
let ud
let bioData = null

console.log("Ini Tipe Data " + typeof aku)
console.log("Ini Tipe Data " + typeof bool)
console.log("Ini Tipe Data " + typeof ud)
console.log("Ini Tipe Data " + typeof bioData)
 
console.log("==============")

let salam = ["Hello", "Assalamualaikum", "Selamat Datang", "Semangat!!"]

for (i = 0; i < salam.length; i++){
    console.log(salam[i])
    console.log("Jumlah Character" + salam[i].length)
}

console.log("==============")

let dataRio = {
    nama : "Almerio",
    namaAKhir : "Seiawan",
    kelas : "10",
    jurunsa: "Rekayasa Perangkat Lunak",
    alamat: {
        jalan : "jalan raya dayeuh",
        kecamatan : "jonggol",
        kabupaten : "bogor"
    },
    sekolah : "IDN Boarding School",
    nilai : {
        diniyyah : "B+",
        IT : "A",
        Inggris : "B"
    }
}

console.log(`Nama Lengkap: ${dataRio.nama} ${dataRio.namaAKhir} \nKelas: ${dataRio.kelas} \nkompetensi keahlian ${dataRio.jurunsa} \nAsal Kota ${dataRio.alamat.kabupaten} \nNilai Diniyyah (${dataRio.nilai.diniyyah}), IT(${dataRio.nilai.IT}),Bahasa Inggris(${dataRio.nilai.Inggris})`)
 console.log("=========")
let nama = "John"
let kelas = 10
let jurusan = "RPL"

console.log(`Halo nama saya ${nama}, Saya Berasal dari kelas ${kelas} Jurusan ${jurusan}`)
