document.getElementById('colorButton').addEventListener('click', function() {
    const text = document.getElementById('text');
    const colors = ['red', 'green', 'blue', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = randomColor;

    const clickCount = document.getElementById('clickCount');
    clickCount.textContent = parseInt(clickCount.textContent) + 1;
});
