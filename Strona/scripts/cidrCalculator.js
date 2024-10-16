document.getElementById('calculateCidr').addEventListener('click', () => {
    const cidr = document.getElementById('cidrIpAddress').value;
    const resultDiv = document.getElementById('cidrResult');

    // Symulacja obliczenia liczby podsieci i hostów
    const [ip, prefixLength] = cidr.split('/');
    const numberOfHosts = Math.pow(2, 32 - prefixLength) - 2;
    const numberOfSubnets = Math.pow(2, prefixLength);

    resultDiv.innerHTML = `
        <p>Adres IP: ${ip}</p>
        <p>Maska podsieci: ${prefixLength}</p>
        <p>Liczba dostępnych hostów: ${numberOfHosts}</p>
        <p>Liczba podsieci: ${numberOfSubnets}</p>
    `;
});
