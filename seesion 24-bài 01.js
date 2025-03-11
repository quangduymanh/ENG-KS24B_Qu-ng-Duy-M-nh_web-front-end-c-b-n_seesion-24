let choice;
let array = [];

do {
    console.log("\nMENU:");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");

    choice = +prompt("Mời nhập lựa chọn của bạn:");

    switch (choice) {
        case 1:
            let length = +prompt("Nhập số phần tử của mảng:");
            array = [];
            for (let i = 0; i < length; i++) {
                let num;
                do {
                    num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
                    if (Number.isNaN(num)) {
                        console.log("Giá trị không hợp lệ. Hãy nhập lại số.");
                    }
                } while (Number.isNaN(num));
                array.push(num);
            }
            console.log("Mảng đã nhập:", array);
            break;

        case 2:
            console.log(array.length > 0 ? `Mảng hiện tại: ${array.join(", ")}` : "Mảng rỗng! Hãy nhập mảng trước.");
            break;

        case 3:
            if (array.length === 0) {
                console.log("Mảng rỗng! Không thể tìm phần tử lớn nhất và nhỏ nhất.");
            } else {
                let max = array[0];
                let min = array[0];
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > max) max = array[i];
                    if (array[i] < min) min = array[i];
                }
                console.log(`Phần tử lớn nhất: ${max}, phần tử nhỏ nhất: ${min}`);
            }
            break;

        case 4:
            if (array.length === 0) {
                console.log("Mảng rỗng! Không thể tính tổng.");
            } else {
                let sum = array.reduce((acc, num) => acc + num, 0);
                console.log(`Tổng các phần tử trong mảng: ${sum}`);
            }
            break;

        case 5:
            if (array.length === 0) {
                console.log("Mảng rỗng! Không thể tìm số lần xuất hiện.");
            } else {
                let element = +prompt("Nhập phần tử cần tìm số lần xuất hiện:");
                let count = array.filter(num => num === element).length;
                console.log(`Số lần xuất hiện của ${element} trong mảng: ${count}`);
            }
            break;

        case 6:
            if (array.length === 0) {
                console.log("Mảng rỗng! Không thể sắp xếp.");
            } else {
                array.sort((a, b) => a - b);
                console.log("Mảng sau khi sắp xếp tăng dần:", array.join(", "));
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }
} while (choice !== 7);
