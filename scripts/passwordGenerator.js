document.getElementById('generatePassword').addEventListener('click', () => {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const resultDiv = document.getElementById('passwordResult');

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}<>?,.';

    let charSet = lowerChars;
    if (includeUppercase) charSet += upperChars;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    resultDiv.innerHTML = `<p>Wygenerowane hasło: ${password}</p>`;
});
