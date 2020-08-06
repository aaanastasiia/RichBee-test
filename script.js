const input = document.getElementById('input');
const button = document.getElementById('button');

input.onclick = function (e) {
    input.value = '';
    input.style.color = 'rgba(115, 115, 141, 0.6)';
}

button.onclick = function (e) {
    if (!input.value.length) {
        input.value = 'Error! You need to write your Email.';
        input.style.color = '#e02929';
    }
    else {
        input.value = '';
    }
}



