document.getElementById('pingTest').addEventListener('click', () => {
    const address = document.getElementById('pingAddress').value;
    const resultDiv = document.getElementById('pingResult');

    // Symulacja losowego czasu odpowiedzi ping
    let result = '';
    for (let i = 0; i < 4; i++) {
        const pingTime = Math.floor(Math.random() * 100) + 20;
        result += `Odpowiedź z ${address}: czas = ${pingTime}ms<br>`;
    }
    resultDiv.innerHTML = result;
});
