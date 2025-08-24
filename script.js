
document.getElementById('regnoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const regno = document.getElementById('regno').value.trim().toLowerCase();
    if (regno.includes('bcs')) {
        window.location.href = 'home.html';
    } else {
        alert('Sorry, you are not a student or staff member of our department.');
    }
});