document.addEventListener("DOMContentLoaded", () => {
  // ========== ОТКРЫТИЕ МОДАЛЬНЫХ ОКОН В МАРКЕТПЛЕЙСЕ ==========
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const closeModalBtn = document.querySelector(".close");

  function openProductModal(productType) {
      if (!modal) return;

      const productData = {
        wine: {
          title: "Соковиті настоянки",
          img: "./Images/openmodal1.jpg",
          desc: `
            <ul>
              <li>- вишня</li>
              <li>- журавлина</li>
              <li>- чорноплідна горобина</li>
              <li>- перець з медом</li>
              <li>- трав’яна</li>
              <li>- чаполоч</li>
            </ul>
            <p><strong>Вартість: 510 грн.</strong></p>
            <p>(Ручне вироблення набору, обробка замовлення та пакування - 510 грн. Подарунковий набір - 0 грн)</p>
          `,
        },
        whiskey: {
          title: "Фруктовий фітокомплекс",
          img: "./Images/openmodal2.jpg",
          desc: `
            <ul>
              <li>- абрикотин</li>
              <li>- слив'янка</li>
              <li>- чорна смородина</li>
              <li>- малина</li>
              <li>- диня</li>
              <li>- яблуко</li>
            </ul>
            <p><strong>Вартість: 510 грн.</strong></p>
            <p>(Ручне вироблення набору, обробка замовлення та пакування - 510 грн. Подарунковий набір - 0 грн)</p>
          `,
        },
        champagne: {
          title: "Насіння, коріння та злаки",
          img: "./Images/openmodal3.jpg",
          desc: `
            <ul>
              <li>- копчений ячмінь</li>
              <li>- витримана кукурудза</li>
              <li>- цукрова тростина</li>
              <li>- ароматна тростина</li>
              <li>- ялівець, полин та спеції</li>
              <li>- полин, бедренець, фенхель, м’ята</li>
            </ul>
            <p><strong>Вартість: 600 грн.</strong></p>
            <p>(Ручне вироблення набору, обробка замовлення та пакування - 600 грн. Подарунковий набір - 0 грн)</p>
          `,
        },
        kognag: {
          title: "Корисні рослини",
          img: "./Images/openmodal4.jpg",
          desc: `
            <ul>
              <li>- пшениця</li>
              <li>- кокосовий горіх</li>
              <li>- банан</li>
              <li>- копчений ячмінь </li>
              <li>- полин, бедренець, фенхель, м’ята</li>
            </ul>
            <p><strong>Вартість: 600 грн.</strong></p>
            <p>(Ручне вироблення набору, обробка замовлення та пакування - 600 грн. Подарунковий набір - 0 грн)</p>
          `,
        },
      };
    
      const product = productData[productType];
      if (product) {
          modalTitle.innerHTML = product.title;
          modalDesc.innerHTML = product.desc;
          modalImg.src = product.img;
          modal.style.display = "flex";
      }
  }

  document.querySelectorAll(".product").forEach((product) => {
      product.addEventListener("click", () => {
          const productType = product.getAttribute("data-product");
          openProductModal(productType);
      });
  });

  closeModalBtn?.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          modal.style.display = "none";
      }
  });

  // ========== ГАЛЕРЕЯ ==========
  const galleryModal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  const closeGalleryModal = document.querySelector("#galleryModal .close");
  const prevBtn = document.getElementById("prevImage");
  const nextBtn = document.getElementById("nextImage");

  if (!galleryModal || !galleryImage) {
      console.error("Ошибка: Не найден элемент модалки!");
      return;
  }

  // Блок для текста под картинкой
  let galleryTextContainer = document.getElementById("galleryText");
  if (!galleryTextContainer) {
      galleryTextContainer = document.createElement("div");
      galleryTextContainer.id = "galleryText";
      galleryTextContainer.style.textAlign = "center";
      galleryTextContainer.style.marginTop = "10px";
      galleryTextContainer.style.fontSize = "18px";
      galleryTextContainer.style.fontWeight = "bold";
      galleryModal.querySelector(".modal-content").appendChild(galleryTextContainer);
  }

  // Массив с изображениями и текстом
  const galleryItems = [
      { src: "./Images/batkavslape.jpg", text: "Батька відпочиває" },
      { src: "./Images/Batya.png", text: "Справжній авторитет" },
      { src: "./Images/batyazloy.jpg", text: "Батька сердитий" },
      { src: "./Images/batyavkostume.jpg", text: "Елегантний стиль" }
  ];

  let currentIndex = 0;

  function updateGallery() {
      galleryImage.src = galleryItems[currentIndex].src;
      galleryTextContainer.textContent = galleryItems[currentIndex].text;
  }

  const introImage = document.querySelector(".intro-image img");
  if (introImage) {
      introImage.addEventListener("click", () => {
          console.log("Клик работает! Открываем модалку.");
          currentIndex = 0;
          updateGallery();
          galleryModal.style.display = "flex";
      });
  } else {
      console.error("Ошибка: Элемент .intro-image img не найден!");
  }

  closeGalleryModal?.addEventListener("click", () => {
      galleryModal.style.display = "none";
  });

  prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateGallery();
  });

  nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateGallery();
  });

  window.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
          galleryModal.style.display = "none";
      }
  });

  // ========== Исправление перехода по ссылкам ==========
  document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (event) {
          if (this.classList.contains("no-modal") || this.classList.contains("btn")) {
              return;
          }
          event.preventDefault();
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryModal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");
  const closeGalleryModal = document.querySelector("#galleryModal .close");
  const prevBtn = document.getElementById("prevImage");
  const nextBtn = document.getElementById("nextImage");

  if (!galleryModal || !galleryImage) {
      console.error("Ошибка: Не найден элемент модалки!");
      return;
  }

  // Создаём блок для текста под картинкой, если его нет
  let galleryTextContainer = document.getElementById("galleryText");
  if (!galleryTextContainer) {
      galleryTextContainer = document.createElement("div");
      galleryTextContainer.id = "galleryText";
      galleryTextContainer.style.textAlign = "center";
      galleryTextContainer.style.marginTop = "10px";
      galleryTextContainer.style.fontSize = "18px";
      galleryTextContainer.style.fontWeight = "bold";
      galleryModal.querySelector(".modal-content").appendChild(galleryTextContainer);
  }

  // Массив с изображениями и текстом
  const galleryItems = [
      { src: "./Images/batkavslape.jpg", text: "В молодості я взяв собі за правило не пити жодної краплі спиртного до обіду. Тепер, коли я вже немолодий, я тримаюся правила не пити ні краплі спиртного до сніданку." },
      { src: "./Images/Batya.png", text: "Справжній авторитет" },
      { src: "./Images/batyazloy.jpg", text: "Батька сердитий" },
      { src: "./Images/batyavkostume.jpg", text: "Елегантний стиль" }
  ];

  let currentIndex = 0;

  function updateGallery() {
      galleryImage.src = galleryItems[currentIndex].src;
      galleryTextContainer.textContent = galleryItems[currentIndex].text;
  }

  function openGalleryModal() {
      console.log("Клик сработал! Открываем модалку.");
      currentIndex = 0;
      updateGallery();
      galleryModal.style.display = "flex";
  }

  // Открытие модалки по клику на картинку, текст и цитату
  const introImage = document.querySelector(".intro-image img");
  const introText = document.querySelector(".intro-text");
  const introQuote = document.querySelector(".intro-image p");

  if (introImage) {
      introImage.addEventListener("click", openGalleryModal);
  } else {
      console.error("Ошибка: Элемент .intro-image img не найден!");
  }

  if (introText) {
      introText.addEventListener("click", openGalleryModal);
  } else {
      console.error("Ошибка: Элемент .intro-text не найден!");
  }

  if (introQuote) {
      introQuote.addEventListener("click", openGalleryModal);
  } else {
      console.error("Ошибка: Элемент .intro-image p не найден!");
  }

  closeGalleryModal?.addEventListener("click", () => {
      galleryModal.style.display = "none";
  });

  prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateGallery();
  });

  nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateGallery();
  });

  window.addEventListener("click", (event) => {
      if (event.target === galleryModal) {
          galleryModal.style.display = "none";
      }
  });
});
