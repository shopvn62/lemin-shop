function changePrice(newPrice) {
            var priceElement = document.getElementById("price");
            priceElement.innerHTML = newPrice + ",000 ₫"; // Thay đổi giá trị văn bản
            priceElement.classList.add("highlight"); // Thêm class để định dạng nếu cần
        }