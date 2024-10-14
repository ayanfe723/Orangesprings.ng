document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (replace with actual authentication)
    if (username === '1122' && password === 'pwd') {
        document.getElementById('portal-content').style.display = 'block';
        document.getElementById('student-name').textContent = "EXCELITE";
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert('ACESS DENIED !');
        // display('ACESS DENIED !');
    }
});
document.getElementById('refreshButton').addEventListener('click', function () {
    location.reload();
});
document.getElementById('logoutButton').addEventListener('click', function () {
    // Perform logout operation
    alert('You have been logged out.');
    // Redirect to login page or home page
    window.location.href = 'home.html';
});


