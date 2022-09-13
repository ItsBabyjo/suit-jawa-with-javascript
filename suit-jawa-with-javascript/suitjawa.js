
var tanya=true;
while(tanya){


//   menangkap pilihan player
var p= prompt('pilih gajah,semut,orang?');


// menangkap pilihan computer
var comp= Math.random();

if( comp < 0.34 ){
    comp='gajah'
}else if ( comp >= 0.34 && comp < 0.67){
    comp='orang'
}else{
    comp='semut'
}


// menentukan rules permainan
var hasil=''
if(p==comp){
    hasil='seri!!'
}else if (p=='gajah'){
    hasil = ( comp=='orang' ) ? 'menang!!' : 'kalah!!';
}else if( p=='orang' ){
    hasil = ( comp=='semut' ) ? 'menang!!' : 'kalah!!'
}else if( p=='semut'){
    hasil =(comp=='gajah') ? 'menang!!' : 'kalah!!'
} else{
    hasil = 'memasukan pilihan yang salah'
}


// tsmpilksn hasil
alert('kamu memilih ' + p +' dan komputer memilih ' + comp + '\n maka kamu ' + hasil);

tanya=confirm('main lagi??')
}
alert('terimakasih sudah bermain')