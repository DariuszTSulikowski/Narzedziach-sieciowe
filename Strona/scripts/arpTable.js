document.getElementById('showArpTable').addEventListener('click', () => {
    const resultDiv = document.getElementById('arpTableResult');
    
    const arpTable = [
        { ip: '192.168.1.1', mac: '00:0a:95:9d:68:16' },
        { ip: '192.168.1.2', mac: '00:0a:95:9d:68:17' },
        { ip: '192.168.1.3', mac: '00:0a:95:9d:68:18' }
    ];

    resultDiv.innerHTML = '<table border="1"><tr><th>Adres IP</th><th>Adres MAC</th></tr>';
    arpTable.forEach(entry => {
        resultDiv.innerHTML += `<tr><td>${entry.ip}</td><td>${entry.mac}</td></tr>`;
    });
    resultDiv.innerHTML += '</table>';
});
