let aku = "saya"
let bool = true
let ud = undefined
let bioData = {
    name : "Reihan",
    age : "16",
    birth: {
        date: "16 Desember 2005",
        city: "Palu",
    }
}

console.log("Ini Tipe Data " + typeof aku)
console.log("Ini Tipe Data " + typeof bool)
console.log("Ini Tipe Data " + typeof ud)
console.log("Ini Tipe Data " + typeof bioData)
 
console.log("==============")

let salam = ["Hello", "Assalamualaikum", "Selamat Datang", "Semangat!!"]

for (i = 0; i < salam.length; i++){
    console.log(salam[i])
    console.log(salam[i].length)
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
        diniyyah : "8",
        IT : "A",
        Inggris : "B"
    }
}

console.log(`Nama Lengkap: ${dataRio.nama} ${dataRio.namaAKhir} \n Kelas: ${dataRio.kelas} \n kompetensi keahlian ${dataRio.jurunsa} \nAsal Kota ${dataRio.alamat.kabupaten} \n Nilai Diniyyah ${dataRio.nilai.diniyyah} IT(${dataRio.nilai.IT}, Bahasa Inggris(${dataRio.nilai.Inggris})`)
 console.log("=========")
let nama = "John"
let kelas = 10
let jurusan = "RPL"

console.log(`Halo nama saya ${nama}, Saya Berasal dari kelas ${kelas} Jurusan ${jurusan}`)