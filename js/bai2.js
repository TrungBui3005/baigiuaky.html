document.addEventListener('DOMContentLoaded', function() {   
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

function displayMessage(text, isError) {
    messageDiv.className = '';
        
    if (isError) {
        messageDiv.classList.add('error-message');
    } else {        
         messageDiv.classList.add('success-message');
    }
        
    messageDiv.textContent = text;
       
    messageDiv.style.display = 'block'; 
}

form.addEventListener('submit', function(event) {
       
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        displayMessage(
            'Lỗi: Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu.', 
            true 
        );
    } else {
        displayMessage(
           `Validate thành công! Chào mừng ${username} đến với hệ thống.`, 
            false 
        );
    }
});
});