let choice;
let str = "";

do {
    console.log("\nMENU:");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi");
    console.log("4. Đảo ngược chuỗi ký tự");
    console.log("5. Đếm số lượng từ trong chuỗi");
    console.log("6. Tìm kiếm và thay thế ký tự trong chuỗi");
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
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                str = str.trim();
                console.log("Chuỗi sau khi loại bỏ khoảng trắng thừa:", str);
            }
            break;

        case 4:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let reversedStr = str.split("").reverse().join("");
                console.log("Chuỗi sau khi đảo ngược:", reversedStr);
            }
            break;

        case 5:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let wordCount = str.trim().split(/\s+/).length;
                console.log("Số lượng từ trong chuỗi:", wordCount);
            }
            break;

        case 6:
            if (str === "") {
                console.log("Chưa có chuỗi! Hãy nhập chuỗi trước.");
            } else {
                let findChar = prompt("Nhập ký tự cần tìm:");
                if (str.includes(findChar)) {
                    let replaceChar = prompt(`Nhập ký tự thay thế cho '${findChar}':`);
                    str = str.split(findChar).join(replaceChar);
                    console.log("Chuỗi sau khi thay thế:", str);
                } else {
                    console.log(`Không tìm thấy ký tự '${findChar}' trong chuỗi.`);
                }
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }
} while (choice !== 7);
