//Bài 1:
function start() {
    alert("Xin chao");
}

//Bài 2:
function showMessage() {
    let num = parseFloat(document.getElementById("value01").value);
    num++;
    document.getElementById("result02").innerHTML = num;
}

//Bài 3:
function showMessage02() {
    let num01 = parseFloat(document.getElementById("value02").value);
    let num02 = parseFloat(document.getElementById("value03").value);
    if (num01 > num02) {
        alert("Tham số thứ nhất lớn hơn tham số thứ hai");
    } else {
        document.getElementById("result03").innerHTML = num01 + num02;
    }
}

//Bài 4:
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result);
result = addNumbers();
alert(result);

//Bài 5:
let name = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let star = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function search() {
    let input = prompt("Xin mời nhập tên bạn muốn tìm: ");
    if (name.indexOf(input) !== -1) {
        document.getElementById("result05").innerHTML = star[name.indexOf(input)];
    } else {
        document.getElementById("result05").innerHTML = "Không tìm thấy";
    }

}