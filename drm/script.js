function sendRequest() {
    // Ambil nilai dari setiap input
    var psshValue = document.getElementById("pssh").value;
    var licenseUrlValue = document.getElementById("licenseUrl").value;
    var proxyValue = document.getElementById("proxy").value;
    var headersValue = document.getElementById("headers").value;
    var jsonValue = document.getElementById("json").value;
    var cookiesValue = document.getElementById("cookies").value;
    var dataValue = document.getElementById("data").value;

    // Buat objek data yang akan dikirimkan
    var requestData = {
        PSSH: psshValue,
        "License URL": licenseUrlValue,
        Headers: JSON.parse(headersValue),
        JSON: JSON.parse(jsonValue),
        Cookies: JSON.parse(cookiesValue),
        Data: JSON.parse(dataValue),
        Proxy: proxyValue
    };

    // Kirim permintaan POST menggunakan fetch API
    fetch('https://cdrm-project.com/', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Tampilkan respons dari server
        document.getElementById("response").innerHTML = JSON.stringify(data);
    })
    .catch(error => {
        // Tangani kesalahan
        console.error('Error:', error);
        document.getElementById("response").innerHTML = "Error: " + error;
    });
}
