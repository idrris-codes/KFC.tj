<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KFC Tajikistan — Demo Landing</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="noise"></div>

<div class="language-screen" id="languageScreen">
  <div class="language-card">
    <div class="mini-kfc">KFC</div>
    <p class="red-label">KFC Tajikistan</p>
    <h1>Choose language</h1>
    <p data-ru="Выберите язык сайта. После выбора откроется полный лендинг." data-en="Choose the website language. After selection, the full landing page will open.">
      Выберите язык сайта. После выбора откроется полный лендинг.
    </p>
    <div class="lang-actions">
      <button onclick="setLanguage('ru')">Русский</button>
      <button onclick="setLanguage('en')">English</button>
    </div>
  </div>
</div>

<header class="header">
  <a href="#home" class="brand">
    <div class="stripes"><span></span><span></span><span></span></div>
    <strong>KFC</strong>
  </a>

  <nav class="nav">
    <a href="https://www.kfc.tj/menu" target="_blank" data-ru="Меню" data-en="Menu">Меню</a>
    <a href="#delivery" data-ru="Доставка" data-en="Delivery">Доставка</a>
    <a href="https://www.kfc.tj/stores" target="_blank" data-ru="Рестораны" data-en="Restaurants">Рестораны</a>
    <a href="https://www.instagram.com/kfcintajikistan/" target="_blank">Instagram</a>
  </nav>

  <button class="language-btn" onclick="openLanguage()">🌐 <span id="currentLang">RU</span></button>
</header>

<main>
  <section class="hero" id="home">
    <div class="hero-left reveal">
      <div class="line-label">
        <span></span>
        <p data-ru="KFC ТАДЖИКИСТАН" data-en="KFC TAJIKISTAN">KFC ТАДЖИКИСТАН</p>
        <span></span>
      </div>

      <h1 data-ru="НАСТОЯЩИЙ ВКУС.<br><em>НАСТОЯЩИЙ KFC.</em>" data-en="REAL TASTE.<br><em>REAL KFC.</em>">
        НАСТОЯЩИЙ ВКУС.<br><em>НАСТОЯЩИЙ KFC.</em>
      </h1>

      <p class="hero-text" data-ru="Хрустящая курочка по оригинальному рецепту Полковника Сандерса с 11 травами и специями. Готовим горячо. Доставляем быстро. Заказать можно прямо из официального меню KFC Tajikistan." data-en="Crispy chicken made with Colonel Sanders’ original recipe of 11 herbs and spices. Cooked hot. Delivered fast. Order directly from the official KFC Tajikistan menu.">
        Хрустящая курочка по оригинальному рецепту Полковника Сандерса с 11 травами и специями. Готовим горячо. Доставляем быстро. Заказать можно прямо из официального меню KFC Tajikistan.
      </p>

      <a href="https://www.kfc.tj/menu" target="_blank" class="order-main">
        <span class="scooter">🛵</span>
        <span data-ru="Открыть меню KFC" data-en="Open KFC menu">Открыть меню KFC</span>
        <b>›</b>
      </a>
    </div>

    <div class="hero-right reveal">
      <img src="assets/kfc-hero-style.png" alt="KFC Tajikistan hero">
    </div>

    <div class="delivery-panel reveal" id="delivery">
      <a class="phone-icon" href="tel:1400">☎</a>
      <div class="delivery-text">
        <p data-ru="Для доставки звоните:" data-en="For delivery call:">Для доставки звоните:</p>
        <div class="numbers">
          <a href="tel:1400">1400</a>
          <span></span>
          <a href="tel:1212">1212</a>
        </div>
      </div>
    </div>

    <div class="action-buttons reveal">
      <a href="tel:1400" class="action-card">
        <i>☎</i>
        <div>
          <h3 data-ru="Позвонить 1400" data-en="Call 1400">Позвонить 1400</h3>
          <p data-ru="Быстрый звонок для доставки" data-en="Quick delivery call">Быстрый звонок для доставки</p>
        </div>
      </a>

      <a href="tel:1212" class="action-card">
        <i>📞</i>
        <div>
          <h3 data-ru="Позвонить 1212" data-en="Call 1212">Позвонить 1212</h3>
          <p data-ru="Второй номер доставки KFC" data-en="Second KFC delivery number">Второй номер доставки KFC</p>
        </div>
      </a>

      <a href="https://www.kfc.tj/stores" target="_blank" class="action-card">
        <i>📍</i>
        <div>
          <h3 data-ru="Рестораны рядом" data-en="Nearby restaurants">Рестораны рядом</h3>
          <p data-ru="Открыть официальную карту ресторанов" data-en="Open official restaurant list">Открыть официальную карту ресторанов</p>
        </div>
      </a>

      <a href="https://www.instagram.com/kfcintajikistan/" target="_blank" class="action-card">
        <i>◎</i>
        <div>
          <h3>Instagram</h3>
          <p data-ru="Официальный аккаунт KFC Tajikistan" data-en="Official KFC Tajikistan account">Официальный аккаунт KFC Tajikistan</p>
        </div>
      </a>
    </div>
  </section>

  <section class="section photo-section" id="menu">
    <div class="section-head reveal">
      <p class="red-label" data-ru="KFC фото" data-en="KFC photos">KFC фото</p>
      <h2 data-ru="Все изображения на сайте связаны с KFC." data-en="All images on the site are related to KFC.">Все изображения на сайте связаны с KFC.</h2>
      <p data-ru="Вместо случайных фото используются изображения KFC-ресторанов и KFC-визуал в красно-чёрном стиле." data-en="Instead of random photos, the website uses KFC restaurant images and KFC-style red-black visuals.">
        Вместо случайных фото используются изображения KFC-ресторанов и KFC-визуал в красно-чёрном стиле.
      </p>
    </div>

    <div class="photo-grid">
      <article class="photo-card reveal">
        <img src="https://www.kfc.tj/admin/files/4004.jpg" alt="KFC Tajikistan restaurant">
        <div>
          <h3>KFC Оперка</h3>
          <p data-ru="Проспект Рудаки 33а, Душанбе" data-en="Rudaki Avenue 33a, Dushanbe">Проспект Рудаки 33а, Душанбе</p>
        </div>
      </article>

      <article class="photo-card reveal">
        <img src="https://www.kfc.tj/admin/files/4005.jpg" alt="KFC Tajikistan counter">
        <div>
          <h3>KFC Ашан</h3>
          <p data-ru="Официальное фото ресторана KFC Tajikistan" data-en="Official KFC Tajikistan restaurant photo">Официальное фото ресторана KFC Tajikistan</p>
        </div>
      </article>

      <article class="photo-card reveal">
        <img src="https://www.kfc.tj/admin/files/4162.jpeg" alt="KFC Tajikistan building">
        <div>
          <h3>KFC 82</h3>
          <p data-ru="Официальное фото ресторана KFC Tajikistan" data-en="Official KFC Tajikistan restaurant photo">Официальное фото ресторана KFC Tajikistan</p>
        </div>
      </article>
    </div>
  </section>

  <section class="split">
    <div class="split-img reveal">
      <img src="assets/kfc-hero-style.png" alt="KFC visual banner">
    </div>
    <div class="split-text reveal">
      <p class="red-label" data-ru="Заказ без лишних шагов" data-en="Order without extra steps">Заказ без лишних шагов</p>
      <h2 data-ru="Точные ссылки вместо пустых кнопок." data-en="Exact links instead of empty buttons.">Точные ссылки вместо пустых кнопок.</h2>
      <p data-ru="На сайте оставлены только полезные действия: открыть официальное меню, позвонить на доставку, найти ресторан и перейти в официальный Instagram. Всё остальное убрано, чтобы не путать пользователя." data-en="Only useful actions remain: open the official menu, call delivery, find a restaurant and go to the official Instagram. Everything else is removed to avoid confusing the user.">
        На сайте оставлены только полезные действия: открыть официальное меню, позвонить на доставку, найти ресторан и перейти в официальный Instagram. Всё остальное убрано, чтобы не путать пользователя.
      </p>
      <a href="https://www.kfc.tj/menu" target="_blank" class="order-main small">
        <span data-ru="Открыть официальное меню" data-en="Open official menu">Открыть официальное меню</span>
        <b>›</b>
      </a>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-box reveal">
      <p class="red-label">KFC Tajikistan</p>
      <h2 data-ru="Закажите через официальное меню или позвоните на доставку." data-en="Order through the official menu or call delivery.">Закажите через официальное меню или позвоните на доставку.</h2>
      <div class="contact-links">
        <a href="https://www.kfc.tj/menu" target="_blank">Menu</a>
        <a href="tel:1400">Call 1400</a>
        <a href="tel:1212">Call 1212</a>
        <a href="https://www.kfc.tj/stores" target="_blank">Stores</a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div>KFC Tajikistan · Demo landing page</div>
  <div class="footer-socials">
    <a href="https://www.instagram.com/kfcintajikistan/" target="_blank">Instagram KFC</a>
    <a href="https://www.kfc.tj/menu" target="_blank">Menu</a>
    <a href="https://www.kfc.tj/stores" target="_blank">Stores</a>
  </div>
  <div class="developer">
    <span data-ru="Разработчик:" data-en="Developer:">Разработчик:</span>
    <a href="https://www.instagram.com/idris.codes/" target="_blank">Sharipov Idris · @idris.codes</a>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>
