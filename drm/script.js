// script.js

function sendRequest() {
    // Tangkap nilai dari input form
    const pssh = document.getElementById('pssh').value;
    const licenseUrl = document.getElementById('licenseUrl').value;
    const userAgent = document.getElementById('userAgent').value;
    const jsonData = document.getElementById('jsonData').value;
    const cookies = document.getElementById('cookies').value;
    const requestData = document.getElementById('requestData').value;
    const proxy = document.getElementById('proxy').value;

    // Buat objek data untuk dikirim ke API
    const jsonRequestData = {
        'PSSH': pssh,
        'License URL': licenseUrl,
        'Headers': {
            'User-Agent': userAgent
        },
        'JSON': jsonData,
        "Cookies": cookies,
        'Data': requestData,
        'Proxy': proxy
    };

    // Kirim permintaan ke API menggunakan fetch
    fetch('https://cdrm-project.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonRequestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Tampilkan respons dari API
        document.getElementById('response').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => {
        // Tangani kesalahan jika terjadi
        document.getElementById('response').textContent = 'Error: ' + error;
    });
}
