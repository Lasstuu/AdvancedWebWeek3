const submitFormBtn = document.getElementById('submitBtn');
submitFormBtn.addEventListener('click', async function() {
    const form = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    console.log(name);
    console.log(form);
    const formData = await fetch('/users', {
        method: 'post',
        
        body: JSON.stringify({ name: name, email: form })
    });

});