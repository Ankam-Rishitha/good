function appendText(text) {
    document.getElementById('textField').value += text;
}
function clearText() {
    document.getElementById('textField').value = '';
}
function evaluateText() {
    try {
        const textField = document.getElementById('textField');
        const result = eval(textField.value);
        textField.value=result; 
    } catch(e) {
        alert('Invalid expression');
    }
}