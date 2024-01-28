```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    updatePriceChart();
    updateCarousel();
    updateOption();
});

function updatePriceChart() {
    const priceChart = document.getElementById('price-chart');
    const tradingViewIframe = document.createElement('iframe');
    tradingViewIframe.src = 'https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT';
    tradingViewIframe.style.width = '100%';
    tradingViewIframe.style.height = '100%';
    priceChart.appendChild(tradingViewIframe);
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    fetch('/api/altlayer.js')
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                carouselItem.textContent = item.name;
                if (index % 5 === 0) {
                    carouselItem.classList.add('disabled');
                }
                carousel.appendChild(carouselItem);
            });
        });
}

function updateOption() {
    const optionLong = document.getElementById('option-long');
    const optionShort = document.getElementById('option-short');
    optionLong.addEventListener('click', () => {
        alert('You have chosen to go long');
    });
    optionShort.addEventListener('click', () => {
        alert('You have chosen to go short');
    });
}
```