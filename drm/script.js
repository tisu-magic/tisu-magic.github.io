function sendDecryption() {
    var pssh = document.getElementById("index_pssh").value;
    var licenseUrl = document.getElementById("license_url").value;
    var proxy = document.getElementById("proxy").value;
    var headers = JSON.parse(document.getElementById("headers").value);
    var jsonData = document.getElementById("json").value;
    var cookies = document.getElementById("cookies").value;
    var data = document.getElementById("data").value;

    var requestData = {
        'PSSH': pssh,
        'License URL': licenseUrl,
        'Headers': headers,
        'JSON': jsonData,
        'Cookies': cookies,
        'Data': data,
        'Proxy': proxy
    };

    fetch('https://cdrm-project.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("decrypt_results").textContent = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("decrypt_results").textContent = 'Error: ' + error.message;
    });
}
