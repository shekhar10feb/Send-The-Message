const form = document.querySelector('.message-form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const input = document.querySelector('.input');

    const messageContent = document.querySelector('.message-content');

    if(input.value === ''){

        messageContent.innerHTML = `<span>Please enter message!</span>`;

    } else {

        messageContent.textContent = input.value;
        input.value = '';

    }

})