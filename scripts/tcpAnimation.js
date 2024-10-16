document.getElementById('startTcpAnimation').addEventListener('click', () => {
    const resultDiv = document.getElementById('tcpAnimationResult');
    resultDiv.innerHTML = '';

    const steps = [
        'Warstwa aplikacji: HTTP/S, FTP',
        'Warstwa transportowa: TCP/UDP',
        'Warstwa sieciowa: IP',
        'Warstwa łącza danych: Ethernet',
        'Warstwa fizyczna: Kabel, sygnał'
    ];

    steps.forEach((step, index) => {
        setTimeout(() => {
            resultDiv.innerHTML += `<p>${step}</p>`;
        }, index * 1000);
    });
});
