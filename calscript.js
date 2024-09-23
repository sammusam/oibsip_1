function appendCharacter(character) {
    document.getElementById('result').value += character;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Invalid Expression');
    }
}
