//<!-- ví dụ trang 228 -->
document.getElementById("btn")
.addEventListener("click",function(){
    alert("Sự kiện click đã xảy ra!");
});

//-------------------------------
// <!-- ví dụ trang 230 -->
document.getElementById("hoverBtn")
.addEventListener("mouseover",function(){
    this.style.backgroundColor="yellow";
});

//----------------------------
// <!-- ví dụ trang 231 -->
document.getElementById("inputBox")
.addEventListener("keydown",function(event){
    console.log("Bạn vừa nhấn phím", event.key);
});

//-----------------------
// <!-- ví dụ trang 233 -->
document.getElementById("myForm")
    .addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if(name ===""){
        alert("vui lòng nhập tên");
        event.preventDefault();
    }
});

//---------------------------
// <!-- ví dụ trang 240 -->
setTimeout(()=>{
    console.log("Chạy sau 3 giây!");
},3000);
setInterval(()=>{
    console.log("Chạy mỗi 2 giây!");
},20000);

//------------------------
// <!-- ví dụ trang 247 -->
// 1. Khai báo chuỗi
let text = "JavaScript là một ngôn ngữ lập trình tuyệt vời!";
// 2. Lấy độ dài chuỗi
console.log("Độ dài chuỗi:", text.length);
// 3. Lấy ký tự trong chuỗi
console.log("Ký tự đầu tiên:", text.charAt(0));
console.log("Mã ASCII của ký tự đầu:", text.charCodeAt(0));
console.log("Dùng cú pháp []:", text[0]);
// 4. Cắt chuỗi
console.log("slice(2, 10):", text.slice(2, 10));
console.log("substring(2, 10):", text.substring(2, 10));
console.log("substr(2, 10):", text.substr(2, 10));
// 5. Chuyển đổi chữ hoa, chữ thường
console.log("Viết hoa:", text.toUpperCase());
console.log("Viết thường:", text.toLowerCase());
// 6. Nỗi chuỗi
let str1 = "Xin chào";
let str2 = "JavaScript";
console.log("Nỗi bằng concat():", str1.concat("", str2));
console.log("Nõi bằng dấu + ", str1 + + str2);
// 7. Loại bỏ khoảng trắng
console.log("Chuỗi sau khi trim():", text.trim());
console.log("Chuỗi sau khi trimStart():", text.trimStart());
console.log("Chuỗi sau khi trimEnd():", text.trimEnd());
// 8. Kiểm tra chuỗi
console.log("Chuỗi có chứa 'JavaScript'?", text.includes ("JavaScript"));
console.log("Chuỗi có bắt đầu bằng 'Javascript'?", text.startsWith("JavaScript"));
console.log("Chuỗi có kết thúc bằng 'vời!'?", text.endsWith("vời!"));
// 9. Tìm kiếm chuỗi
console.log("Vị trí đầu tiên của 'a':", text.indexOf("a"));
console.log("Vị trí cuối cùng của 'a':", text.lastIndexOf("a"));
console.log("Vị trí của lập trình:", text.search("lập trình"));
// 10. Thay thế chuỗi
console.log("Thay thế 'JavaScript' thành 'JS':", text.replace("JavaScript", "35"));
console.log("Thay thế tất cả 'a' bằng 'A':", text.replaceAll("a", "A"));
// 11. Tách chuỗi
let words = "HTML, CSS, JavaScript, React";
console.log("Tách chuỗi thành màng:", words.split(", "));
// 12. Sử dụng Template Literals
let name = "Trung";
let age= 20;
let message = 'Tên: $(name), Tuổi: ${age}, đang học ${str2)';
console.log("Template Literals:", message);
// 13. Chuỗi nhiều dòng với Template Literals
let multiline = `
Dòng 1 
Dòng 2 
Dòng 3`;
console.log("Chuỗi nhiều dòng:\n", multiline);

// ----------------------------------
// <!-- ví dụ trang 249 -->
// 1. Tạo đối tượng ngày giờ mới
let myDate = new Date();
console.log("Thời gian hiện tại:", myDate);
// 2. Lấy năm, tháng, ngày
console.log("Năm:", myDate.getFullYear());
console.log("Tháng:", myDate.getMonth() + 1); // Tháng bắt đầu từ 0
console.log("Ngày:", myDate.getDate());
// 3. Lấy giờ, phút, giây
console.log("Giờ:", myDate.getHours());
console.log("Phút:", myDate.getMinutes());
console.log("Giây:", myDate.getSeconds());
// 4. Chỉnh sửa ngày tháng
myDate.setFullYear(2025);
myDate.setMonth(11); // Tháng 12
myDate.setDate(9);
console.log("Sau khi chỉnh sửa:", myDate);
// 5. Định dạng ngày giờ
console.log("Chuỗi ngày đơn giản:", myDate.toDateString());
console.log("ISO format:", myDate.toISOString());
console.log("Định dạng theo ngôn ngữ:", myDate.toLocaleDateString('vi-VN'));
// 6. Lãy timestamp
console.log("Timestamp:", myDate.getTime());
// 7. Tính khoảng cách giữa hai ngày
let startDate = new Date("2025-12-09");
let endDate = new Date("2025-12-20");
let diffTime = endDate - startDate;
let diffDays = diffTime / (1000 * 60 * 60 * 24);
console.log(`Khoảng cách giữa ${startDate.toDateString()} và ${endDate.toDateString()} là: ${diffDays} ngày`);
// 8. Cộng trừ ngày tháng
let newDate = new Date();
newDate.setDate(newDate.getDate() + 7); // Cộng thêm 7 ngày
console.log("7 ngày sau:", newDate);
newDate.setDate(newDate.getDate() - 14); // Trừ đi 14 ngày
console.log("14 ngày trước:", new Date);

//-------------------------------
// <!-- ví dụ trang 251 -->
// 1. Các hằng số toán học
console.log("Số PI:", Math.PI);
console.log("Sõ Euler (e):", Math.E);
console.log("Căn bậc hai của 2:", Math.SQRT2);
// 2. Giá trị tuyệt đối
console.log("Giá trị tuyệt đối của -10:", Math.abs(-10));
// 3. Làm tròn số
console.log("Làm tròn xuống 4.7:", Math.floor(4.7));
console.log("Làm tròn lên 4.3:", Math.ceil(4.3));
console.log("Làm tròn gần nhất 4.5:", Math.round(4.5));
// 4. Lũy thừa và căn bậc hai
console.log("2^3 =", Math.pow(2, 3));
console.log("Căn bậc hai của 16:", Math.sqrt(16));
// 5. Tìm số lớn nhất, nhỏ nhất
console.log("Số lớn nhất trong (10, 20, 5, 40):", Math.max(10, 20, 5, 40));
console.log("Số nhỏ nhất trong (10, 20, 5, 40):", Math.min(10, 20, 5, 40));
// 6. Hàm lượng giác
console.log("Sin(90 độ):", Math.sin(90* Math.PI / 180));
console.log("Cos(0 độ):", Math.cos (0* Math.PI/ 180));
// 7. Sinh số ngẫu nhiên
console.log("Số ngẫu nhiên từ 0 đến 1:", Math.random());
console.log("Số ngẫu nhiên từ 1 đến 100:", Math.floor(Math.random() * 100) + 1);
// 8. Logarit
console.log("Logarit tự nhiên của 10:", Math.log(10));
console.log("Logarit cơ số 10 của 100:", Math.log10(100));

//--------------------------------------
// <!-- ví dụ trang 253 + 255 -->
let fruits1 = ["Táo", "Chuối", "Cam", "Dâu"];
console.log("Mảng ban đầu:", fruits1);
// 1. length - Lấy độ dài mảng
console.log("Độ dài của mảng:", fruits.length);
// 2. push() -Thêm phần tử vào cuối màng
fruits1.push("Xoài");
console.log("Sau khi thêm Xoài:", fruits1);
// 3. pop() Xóa phần tử cuối cùng
fruits1.pop();
console.log("Sau khi xóa phần tử cuối:", fruits1);
// 4. unshift() -Thêm phần tử vào đầu mảng
fruits1.unshift("Nho");
console.log("Sau khi thêm Nho vào đầu:", fruits1);
// 5. shift() Xóa phần tử đầu tiên
fruits1.shift();
console.log("Sau khi xóa phần tử đầu tiên:", fruits1);
// 6. slice() -Cắt một phần của mảng
let citrus = fruits1.slice(1, 3);
console.log("Mảng citrus (cất từ index 1 đến 2):", citrus);
// 7. concat() Nối hai mảng
let moreFruits = fruits1.concat(["Xoài", "Dưa hấu"]);
console.log("Mảng sau khi nối:", moreFruits);
// 8. indexOf() -Tìm vị trí phần tử
console.log("Vị trí của 'Cam':", fruits1.indexOf("Cam"));
// 9. includes() -Kiểm tra phần tử có trong mảng không
console.log("Dưa hấu' có trong mảng không?", fruits1.includes ("Dưa hấu"));
// 10. sort() Sắp xếp mảng
fruits.sort();
console.log("Mảng sau khi sắp xếp:", fruits);
// 11. reverse() Đảo ngược mảng
fruits.reverse();
console.log("Mảng sau khi đảo ngược:", fruits);
// 12. forEach() Lặp qua từng phần tử
console.log("Duyệt mảng bằng forEach:");
fruits.forEach(fruit => console.log(fruit));
// 13. map() Tạo mảng mới từ mảng cũ
let upperCaseFruits = fruits1.map(fruit => fruit.toUpperCase());
console.log("Mảng chữ in hoa:", upperCaseFruits);
// 14. filter() Lọc phần tử theo điều kiện
let shortNames = fruits1.filter (fruit => fruit.length <= 3);
console.log("Tên trái cây có 3 ký tự trở xuống:", shortNames);
// 15. reduce() Tính toán tổng hợp trên màng
let numbers = [10, 20, 30, 40];
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Tổng các số trong mảng:", total);

//-----------------------------------------
// <!-- ví dụ trang 261 -->
let title = document.getElementById("title");
title.style.color = "blue";

// Truy xuất bằng TagName
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "20px";

// Truy xuất bằng Class
let descriptions = document.getElementsByClassName("description");
descriptions[1].style.fontWeight = "bold";

// Truy xuất bằng CSS Selector
let firstItem = document.querySelector("#list li");
firstItem.style.backgroundColor = "yellow";

let allItems = document.querySelectorAll("#list li");
allItems.forEach(item => {
    item.style.margin = "10px";
});

// Hàm thay đổi nội dung khi click button
function changeText() {
    title.textContent = "Nội dung đã thay đổi!";
    descriptions[0].classList.add("highlight");
}

//---------------------------------
//<!-- ví dụ trang 262 -->
function replaceElement() {
    // Lấy phần tử ảnh cần thay thế
    let img = document.getElementById("image");

    // Tạo phần tử mới (đoạn văn)
    let newElement = document.createElement("p");
    newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
    newElement.style.fontSize = "18px";
    newElement.style.fontWeight = "bold";
    newElement.style.color = "red";

    // Lấy phần tử cha của ảnh
    let parent = img.parentNode;

    // Thay thế ảnh bằng đoạn văn
    parent.replaceChild(newElement, img);
}

//----------------------------------------
//<!-- ví dụ trang 263 -->
function getStyle() {
    let element = document.getElementById("text");
    let style = window.getComputedStyle(element);

    let color = style.color;
    let fontSize = style.fontSize;
    let fontWeight = style.fontWeight;

    document.getElementById("result").innerHTML =
        `Màu chữ: ${color} <br> Kích thước chữ: ${fontSize} <br> Độ đậm: ${fontWeight}`;
    }

function setStyle() {
    let element = document.getElementById("text");

    element.style.color = "red"; 
    element.style.fontSize = "25px"; 
    element.style.fontWeight = "normal"; 
    element.style.backgroundColor = "yellow"; 
}




