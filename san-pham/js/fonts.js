function confirmAndRedirect() {
    var result = confirm("Bạn có muốn mua sản phẩm này không? \n Sẽ chuyển đến Messenger");
    if (result) {
      // Thay thế "your_facebook_page_url_here" bằng đường dẫn đến trang Facebook của bạn
      window.location.href = "https://m.me/thecuong0602";
    }
  }
      