function tinhDiemTrungBinhVaXepLoai() {
    // Lấy giá trị từ các ô input
    const diemHK1 = parseFloat(document.getElementById("diemHK1").value);
    const diemHK2 = parseFloat(document.getElementById("diemHK2").value);
    // Tính điểm trung bình
    const diemTrungBinh = (diemHK1 + diemHK2) / 2;

    // Xếp loại học lực
    let xepLoai = '';
    if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
        xepLoai = 'Trung bình';
    } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
        xepLoai = 'Khá';
    } else if (diemTrungBinh >= 8) {
        xepLoai = 'Giỏi';
    } else {
        xepLoai = 'Yếu';
    }
    let ketQua = '';
    if(diemTrungBinh >= 5 ){
        ketQua = 'Lên lớp';
    }
    else if(diemTrungBinh <= 5){
        ketQua = 'Không đủ điều kiện lên lớp';
    }
    // Hiển thị kết quả
    document.getElementById("diemTrungBinh").value = diemTrungBinh.toFixed(2);
    document.getElementById("xepLoai").value = xepLoai;
    document.getElementById("ketQua").value = ketQua;
}
