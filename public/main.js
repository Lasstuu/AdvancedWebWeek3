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

const getUserButton = document.getElementById('getUsers');
getUserButton.addEventListener('click', async function() {
    const userData = await fetch('/users')
    const userJson = await userData.json();
    const userList = document.getElementById('userList'); 
    for (let i = 0; i < userJson.users.length; i++) {
        const user = userJson.users[i];
        const userListChild = document.createElement('li');
        userListChild.innerHTML = user.name + ' - ' + user.email;
        userList.appendChild(userListChild);
    }

})



