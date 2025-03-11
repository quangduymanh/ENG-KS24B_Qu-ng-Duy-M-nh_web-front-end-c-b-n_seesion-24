let choice;
let matrix = [];

do {
    console.log("\nMENU:");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");

    choice = +prompt("Mời nhập lựa chọn của bạn:");

    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            matrix = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(+prompt(`Nhập phần tử tại [${i}][${j}]:`));
                }
                matrix.push(row);
            }
            console.log("Mảng 2 chiều đã nhập:", matrix);
            break;

        case 2:
            if (matrix.length === 0) {
                console.log("Mảng đang rỗng.");
            } else {
                console.log("Mảng 2 chiều:");
                for (let row of matrix) {
                    console.log(row.join(" "));
                }
            }
            break;

        case 3:
            if (matrix.length === 0) {
                console.log("Mảng rỗng! Không thể tính tổng.");
            } else {
                let sum = 0;
                for (let row of matrix) {
                    for (let num of row) {
                        sum += num;
                    }
                }
                console.log(`Tổng các phần tử trong mảng: ${sum}`);
            }
            break;

        case 4:
            if (matrix.length === 0) {
                console.log("Mảng rỗng! Không thể tìm phần tử lớn nhất.");
            } else {
                let max = matrix[0][0];
                let maxRow = 0, maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất là ${max} tại vị trí [${maxRow}][${maxCol}]`);
            }
            break;

        case 5:
            if (matrix.length === 0) {
                console.log("Mảng rỗng! Không thể tính trung bình.");
            } else {
                let rowIndex = +prompt("Nhập số hàng muốn tính trung bình:");
                if (rowIndex < 0 || rowIndex >= matrix.length) {
                    console.log("Hàng không hợp lệ.");
                } else {
                    let sum = 0;
                    for (let num of matrix[rowIndex]) {
                        sum += num;
                    }
                    let avg = sum / matrix[rowIndex].length;
                    console.log(`Trung bình cộng của hàng ${rowIndex}: ${avg.toFixed(2)}`);
                }
            }
            break;

        case 6:
            if (matrix.length === 0) {
                console.log("Mảng rỗng! Không thể đảo ngược.");
            } else {
                matrix.reverse();
                console.log("Mảng sau khi đảo ngược các hàng:");
                for (let row of matrix) {
                    console.log(row.join(" "));
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