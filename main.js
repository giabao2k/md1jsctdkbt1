let nam = parseInt(prompt('Nhap nam: '));
if((nam % 4 == 0) && (nam % 100 !=0)){
    document.write(nam + ' ' + ' la nam nhuan');
}
else if((nam % 100 == 0) && (nam % 400 == 0)){
    document.write(nam + ' ' + 'la nam nhuan');
}
else{
    document.write(nam + ' ' + 'khong phai la nam nhuan' );
}