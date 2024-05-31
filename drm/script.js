async function fetchData() {
    const URL = document.getElementById('url').value;
    const USER_AGENT = document.getElementById('user-agent').value;

    if (!URL || !USER_AGENT) {
        alert('URL dan User-Agent harus diisi!');
        return;
    }

    document.getElementById('response-content').textContent = 'Memuat...';

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'User-Agent': USER_AGENT
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        document.getElementById('response-content').textContent = data;
    } catch (error) {
        document.getElementById('response-content').textContent = `Terjadi kesalahan: ${error.message}`;
    }
}
