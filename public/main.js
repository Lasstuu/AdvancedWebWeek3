const form = document.getElementById('userForm');
form.addEventListener('submit', async function() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    console.log(name);
    await fetch('/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
    });
});




