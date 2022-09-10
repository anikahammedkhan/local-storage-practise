const deleteFunction = (key) => {
    localStorage.removeItem(key);
}
const sendFunction = (id, key) => {
    let inputField = document.getElementById(id);
    let inputValue = inputField.value;
    localStorage.setItem(key, inputValue);
    inputField.value = '';
}

const reset = () => {
    localStorage.clear();
}

const sendAll = () => {
    let data = {};
    const namefield = document.getElementById('input-name-field');
    const nameValue = namefield.value;
    const emailField = document.getElementById('input-email-field');
    const emailValue = emailField.value;
    const messageField = document.getElementById('input-message-field');
    const messageValue = messageField.value;
    data.Name = nameValue;
    data.Email = emailValue;
    data.Message = messageValue;
    const dataString = JSON.stringify(data);
    localStorage.setItem('data', dataString);
    namefield.value = '';
    emailField.value = '';
    messageField.value = '';
}
