let choice;
let str = "";

do {
    console.log("\nMENU:");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự trong chuỗi");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");

    choice = +prompt("Mời nhập lựa chọn của bạn:");

    switch (choice) {
        case 1:
            str = prompt("Nhập vào chuỗi:");
            console.log("Chuỗi đã nhập:", str);
            break;

        case 2:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                console.log("Chuỗi hiện tại:", str);
            }
            break;

        case 3:
            console.log("Độ dài của chuỗi:", str.length);
            break;

        case 4:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let charToFind = prompt("Nhập ký tự cần đếm:");
                let count = 0;
                for (let char of str) {
                    if (char === charToFind) count++;
                }
                console.log(`Số lần xuất hiện của '${charToFind}' trong chuỗi: ${count}`);
            }
            break;

        case 5:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let reve = str.split("").reverse().join("");
                if (str === reve) {
                    console.log("Chuỗi là chuỗi đối xứng.");
                } else {
                    console.log("Chuỗi không phải là chuỗi đối xứng.");
                }
            }
            break;

        case 6:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let words = str.split(" ");
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
                str = words.join(" ");
                console.log("Chuỗi sau khi chuyển đổi:", str);
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }
} while (choice !== 7);
