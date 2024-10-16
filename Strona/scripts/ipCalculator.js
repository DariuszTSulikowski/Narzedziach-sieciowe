document.getElementById('calculateIp').addEventListener('click', () => {
    const ip = document.getElementById('ipAddress').value;
    const subnetMask = document.getElementById('subnetMask').value;
    const resultDiv = document.getElementById('ipResult');

    // Obliczanie podstawowych informacji
    const networkAddress = calculateNetworkAddress(ip, subnetMask);
    const broadcastAddress = calculateBroadcastAddress(ip, subnetMask);
    const numberOfHosts = calculateNumberOfHosts(subnetMask);
    const firstHost = calculateFirstHost(networkAddress);
    const lastHost = calculateLastHost(broadcastAddress);
    const ipClass = getIpClass(ip);
    const cidrNotation = calculateCIDRNotation(subnetMask);

    resultDiv.innerHTML = `
        <p><strong>Adres sieci:</strong> ${networkAddress}</p>
        <p><strong>Adres rozgłoszeniowy:</strong> ${broadcastAddress}</p>
        <p><strong>Liczba dostępnych hostów:</strong> ${numberOfHosts}</p>
        <p><strong>Pierwszy host:</strong> ${firstHost}</p>
        <p><strong>Ostatni host:</strong> ${lastHost}</p>
        <p><strong>Klasa adresu IP:</strong> ${ipClass}</p>
        <p><strong>Notacja CIDR:</strong> ${cidrNotation}</p>
    `;
});

// Obliczanie adresu sieci
function calculateNetworkAddress(ip, subnetMask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = subnetMask.split('.').map(Number);
    const networkParts = ipParts.map((part, i) => part & maskParts[i]);
    return networkParts.join('.');
}

// Obliczanie adresu rozgłoszeniowego
function calculateBroadcastAddress(ip, subnetMask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = subnetMask.split('.').map(Number);
    const invertedMaskParts = maskParts.map(part => 255 - part);
    const broadcastParts = ipParts.map((part, i) => part | invertedMaskParts[i]);
    return broadcastParts.join('.');
}

// Obliczanie liczby dostępnych hostów
function calculateNumberOfHosts(subnetMask) {
    const maskParts = subnetMask.split('.').map(Number);
    const binaryMask = maskParts.map(part => part.toString(2).padStart(8, '0')).join('');
    const numberOfZeroes = binaryMask.split('0').length - 1;
    return Math.pow(2, numberOfZeroes) - 2;  // Odjęcie adresu sieci i rozgłoszeniowego
}

// Obliczanie pierwszego hosta (adres sieci + 1)
function calculateFirstHost(networkAddress) {
    const parts = networkAddress.split('.').map(Number);
    parts[3] += 1;  // Dodajemy 1 do ostatniego oktetu
    return parts.join('.');
}

// Obliczanie ostatniego hosta (adres rozgłoszeniowy - 1)
function calculateLastHost(broadcastAddress) {
    const parts = broadcastAddress.split('.').map(Number);
    parts[3] -= 1;  // Odejmujemy 1 od ostatniego oktetu
    return parts.join('.');
}

// Określanie klasy adresu IP
function getIpClass(ip) {
    const firstOctet = parseInt(ip.split('.')[0], 10);
    if (firstOctet >= 0 && firstOctet <= 127) {
        return 'A';
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        return 'B';
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        return 'C';
    } else if (firstOctet >= 224 && firstOctet <= 239) {
        return 'D (Multicast)';
    } else {
        return 'E (Experimental)';
    }
}

// Obliczanie notacji CIDR z maski podsieci
function calculateCIDRNotation(subnetMask) {
    const maskParts = subnetMask.split('.').map(Number);
    const binaryMask = maskParts.map(part => part.toString(2).padStart(8, '0')).join('');
    const numberOfOnes = binaryMask.split('1').length - 1;
    return `/${numberOfOnes}`;
}
