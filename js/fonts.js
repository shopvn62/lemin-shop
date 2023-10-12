function confirmAndRedirect() {
    var result = confirm("Bạn có muốn mua sản phẩm này không? \n Sẽ chuyển đến Messenger");
    if (result) {
      // Thay thế "your_facebook_page_url_here" bằng đường dẫn đến trang Facebook của bạn
      window.location.href = "https://m.me/lemin62";
    }
  }
	// messenger live 
	var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "2374897302799565");
      chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
	
      // text code lemin.vn 
document.addEventListener("DOMContentLoaded", function() {
    var options = {
      strings: ['When You Write The Story of Your Life', 'Don"t Let Anyone else Hold The Pen', 'Live A Life You Will Remember.', 'Cường ReLover'],
      typeSpeed: 80,
      backSpeed: 25,
      loop: true
    };
    var typed = new Typed("#lemin-text", options);
 });
