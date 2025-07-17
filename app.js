async function askAI() {
    const input = document.getElementById('userInput').value;
    document.getElementById('response').innerText = 'Ожидание ответа...';
    try {
        const answer = await puter.ai.chat(input);
        document.getElementById('response').innerText = answer;
    } catch (err) {
        document.getElementById('response').innerText = 'Ошибка: ' + err;
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('themeBtn').innerText = isDark ? "Светлая тема" : "Темная тема";
}
