// script.js
function sendRequest() {
    // Tangkap nilai dari input form
    const pssh = document.getElementById('pssh').value;
    const licenseUrl = document.getElementById('licenseUrl').value;
    const userAgent = document.getElementById('userAgent').value;

    // Buat objek data untuk dikirim ke API
    const jsonData = {
        'PSSH': pssh,
        'License URL': licenseUrl,
        'Headers': {
            'User-Agent': userAgent
        },
        'JSON': "{}",
        'Cookies': "{}",
        'Data': "{}",
        'Proxy': ""
    };

    // Kirim permintaan ke API menggunakan fetch
    fetch('https://cdrm-project.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
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
