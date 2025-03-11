let choice;
let arr = [];

do {
    console.log("\nMENU:");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
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
                        console.log("Giá trị không hợp lệ Hãy nhập lại số");
                    }
                } while (Number.isNaN(num));
                array.push(num);
            }
            console.log("Mảng đã nhập:", array);
            break;
        case 2:
            console.log(arr.length > 0 ? `Mảng hiện tại: ${arr.join(", ")}` : "Mảng rỗng!");
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Không thể tìm phần tử lớn nhất.");
            } else {
                let max = arr[0];
                let maxIndex = 0;
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        maxIndex = i;
                    }
                }
                console.log(`Phần tử lớn nhất là ${max} tại chỉ số ${maxIndex}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Không thể tính tổng và trung bình cộng.");
            } else {
                let sum = 0, count = 0;
                for (let num of arr) {
                    if (num > 0) {
                        sum += num;
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`Tổng các số dương: ${sum}`);
                    console.log(`Trung bình cộng của các số dương: ${(sum / count).toFixed(2)}`);
                } else {
                    console.log("Không có số dương trong mảng.");
                }
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Không thể đảo ngược.");
            } else {
                let reversedArr = [];
                for (let i = arr.length - 1; i >= 0; i--) {
                    reversedArr.push(arr[i]);
                }
                console.log("Mảng sau khi đảo ngược:", reversedArr);
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Không thể kiểm tra đối xứng.");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                console.log(isSymmetric ? "Mảng là mảng đối xứng." : "Mảng không phải là mảng đối xứng.");
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }

} while (choice !== 7);