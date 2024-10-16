document.getElementById('startTraceroute').addEventListener('click', () => {
    const address = document.getElementById('tracerouteAddress').value;
    const resultDiv = document.getElementById('tracerouteResult');
    
    // Symulacja węzłów w traceroute
    const hops = [
        '192.168.1.1',
        '172.16.0.1',
        '10.0.0.1',
        'example.com'
    ];
    
    resultDiv.innerHTML = '';
    
    hops.forEach((hop, index) => {
        setTimeout(() => {
            const time = Math.floor(Math.random() * 100) + 20;
            resultDiv.innerHTML += `Hop ${index + 1}: ${hop} czas = ${time}ms<br>`;
        }, index * 1000);
    });
});
