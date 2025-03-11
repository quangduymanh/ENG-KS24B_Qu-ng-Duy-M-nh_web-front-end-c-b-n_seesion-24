let choice;
let arr = [];

do {
    console.log("\nMENU:");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
            console.log(arr.length > 0 ? `Mảng hiện tại: ${arr.join(", ")}` : "Mảng đang rỗng.");
            break;

        case 3:
            let even = arr.filter(num => num % 2 === 0);
            let odd = arr.filter(num => num % 2 !== 0);
            console.log("Số chẵn:", even.length ? even.join(", ") : "Không có số chẵn.");
            console.log("Số lẻ:", odd.length ? odd.join(", ") : "Không có số lẻ.");
            break;

        case 4:
            if (arr.length > 0) {
                let sum = arr.reduce((acc, num) => acc + num, 0);
                let avg = sum / arr.length;
                console.log("Trung bình cộng của mảng là:", avg.toFixed(2));
            } else {
                console.log("Mảng rỗng! Không thể tính trung bình cộng.");
            }
            break;
        case 6:
            if (arr.length < 2) {
                console.log("Mảng không đủ phần tử để tìm số lớn thứ hai.");
            } else {
                let max = arr[0];
                let secondMax = arr[0];
                    for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        secondMax = max;
                        max = arr[i];
                    } else if (arr[i] > secondMax && arr[i] !== max) {
                        secondMax = arr[i];
                    }
                }
    
                if (secondMax === max) {
                    console.log("Không có số lớn thứ hai vì tất cả phần tử trong mảng đều giống nhau.");
                } else {
                    console.log("Phần tử lớn thứ hai trong mảng là:", secondMax);
                }
            }
                break;

        case 5:
            let indexToDelete = +prompt("Nhập vị trí muốn xóa:");
            if (indexToDelete >= 0 && indexToDelete < arr.length) {
                let removed = arr.splice(indexToDelete, 1);
                console.log(`Đã xóa phần tử "${removed}" tại vị trí ${indexToDelete}.`);
                console.log("Mảng sau khi xóa:", arr);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;

        
        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }
} while (choice !== 7);
