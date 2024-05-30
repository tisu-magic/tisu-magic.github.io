function sendRequest() {
    const pssh = document.getElementById('pssh').value;
    const licenseUrl = document.getElementById('licenseUrl').value;
    const proxy = document.getElementById('proxy').value;
    const headers = JSON.parse(document.getElementById('headers').value);
    const json = document.getElementById('json').value;
    const cookies = document.getElementById('cookies').value;
    const data = document.getElementById('data').value;

    const jsonRequestData = {
        'PSSH': pssh,
        'License URL': licenseUrl,
        'Headers': headers,
        'JSON': json,
        "Cookies": cookies,
        'Data': data,
        'Proxy': proxy
    };

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
        document.getElementById('response').innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error: ' + error;
    });
}
