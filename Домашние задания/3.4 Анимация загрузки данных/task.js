const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
  const valutes = Object.values(xhr.response.response.Valute);
  showExchangeRate(valutes);
});

function showExchangeRate(valutes) {
  document.querySelector('.loader').classList.remove('loader_active');

  for (let i = 0; i < valutes.length; i++) {
    document.querySelector('#items').innerHTML += `
      <div class="item">
        <div class="item__code">
          ${valutes[i].CharCode}
        </div>
        <div class="item__value">
          ${valutes[i].Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>`;
  }
}