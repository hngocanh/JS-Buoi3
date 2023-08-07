// Bài 1 Tính tiền lương

var btnTinhTienLuong = document.getElementById('btnTinhTienLuong');

btnTinhTienLuong.onclick = function () {
    var soNgayLam = document.getElementById('soNgayLamViec').value;
    var luong1Ngay = document.getElementById('luong1Ngay').value;

    var tienLuong = 0;
    tienLuong = soNgayLam * luong1Ngay;

    document.getElementById('tienLuong').innerHTML = tienLuong.toLocaleString();

}

// Bài 2 Tính giá trị trung bình

var btnTinhTrungBinh = document.getElementById('btnTinhTrungBinh');

btnTinhTrungBinh.addEventListener("click", tinhTrungBinh);

function tinhTrungBinh() {
    var number1 = +document.getElementById('number1').value;
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);
    var number4 = parseFloat(document.getElementById('number4').value);
    var number5 = parseFloat(document.getElementById('number5').value);
    var ketQuaTrungBinh = 0;
    ketQuaTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
    document.getElementById('ketQuaTrungBinh').innerHTML = ketQuaTrungBinh;
}

// Bài 3 Quy đổi tiền

var btnConvert = document.getElementById('btnConvert');

btnConvert.onclick = function () {
    var exchangeRate = +document.getElementById('exchangeRate').value;
    var usd = +document.getElementById('usd').value;

    var vnd = 0;
    vnd = exchangeRate * usd;

    document.getElementById('vnd').innerHTML = vnd.toLocaleString();
}

// Bài 4 Tính Chu Vi, Diện Tích

var btnCalculate = document.getElementById('btnCalculate');

btnCalculate.onclick = function () {
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;

    var area = 0;
    var perimeter = 0;

    area = length * width;
    perimeter = (length + width) * 2;

    document.getElementById('area').innerHTML = area;
    document.getElementById('perimeter').innerHTML = perimeter;
}

// Bài 5 Tính tổng 2 ký số

var btnCalculateSum = document.getElementById('btnCalcSum');

btnCalculateSum.onclick = function () {
    var number = document.getElementById('number').value.split('');

    var sum = 0;

    if (number.length >= 3) {
        throw alert('Mời nhập lại');
    } else if (number.length == 2) {
        sum = parseInt(number[0]) + parseInt(number[1]);
    }

    document.getElementById('sum').innerHTML = sum;
}

