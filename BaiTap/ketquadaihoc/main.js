function ketquadaihoc() {
    // Lấy giá trị từ các ô input
    const toan = parseFloat(document.getElementById("toan").value);
    const ly = parseFloat(document.getElementById("ly").value);
    const hoa = parseFloat(document.getElementById("hoa").value);
    
    const diemTong = (toan + ly + hoa);

 

    let ketquathi; 
    if(diemTong >= 20){
        ketquathi = 'Đậu'
    }
    else{
        ketquathi = "Trượt";
    }
    document.getElementById("tongDiem").value = diemTong;
    document.getElementById("ketQuaThi").value = ketquathi;
} 