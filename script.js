// =========================
// STOA — SCRIPT
// =========================




// =========================
// ELEMENTOS DEL HTML
// =========================

const quoteElement =
  document.getElementById("quote");

const authorElement =
  document.getElementById("author");

const generateButton =
  document.getElementById("generateButton");

const favoriteButton =
  document.getElementById("favoriteButton");

const shareButton =
  document.getElementById("shareButton");

const dateElement =
  document.getElementById("date");

const reflectionElement =
  document.querySelector(".reflection p");

const needButtons =
  document.querySelectorAll(".need-button");


// =========================
// ESTADO
// =========================

let currentQuoteIndex = 0;

let selectedCategory = null;


// =========================
// FECHA
// =========================

function showDate() {

  const today = new Date();

  const formattedDate = today
    .toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short"
    })
    .replace(".", "")
    .toUpperCase();

  dateElement.textContent = formattedDate;
}


// =========================
// MOSTRAR FRASE
// =========================

function showQuote(index) {

  const quote = quotes[index];

  quoteElement.textContent =
    `“${quote.text}”`;

  authorElement.textContent =
    `— ${quote.author}`;

  reflectionElement.textContent =
    quote.reflection;

  updateFavoriteButton();
}


// =========================
// TRANSICIÓN
// =========================

function changeQuote(index) {

  quoteElement.style.opacity = "0";
  authorElement.style.opacity = "0";
  reflectionElement.style.opacity = "0";


  setTimeout(() => {

    currentQuoteIndex = index;

    showQuote(currentQuoteIndex);

    quoteElement.style.opacity = "1";
    authorElement.style.opacity = "1";
    reflectionElement.style.opacity = "1";

  }, 220);
}


// =========================
// OBTENER FRASES DISPONIBLES
// =========================

function getAvailableQuotes() {

  if (!selectedCategory) {

    return quotes.map(
      (_, index) => index
    );
  }


  return quotes
    .map((quote, index) => ({
      quote,
      index
    }))
    .filter(
      item =>
        item.quote.category === selectedCategory
    )
    .map(
      item => item.index
    );
}


// =========================
// GENERAR NUEVA FRASE
// =========================

function generateQuote() {

  const availableQuotes =
    getAvailableQuotes();


  if (availableQuotes.length === 0) {
    return;
  }


  // Si solamente hay una frase
  if (availableQuotes.length === 1) {

    changeQuote(
      availableQuotes[0]
    );

    return;
  }


  let newIndex;


  do {

    const randomPosition =
      Math.floor(
        Math.random() *
        availableQuotes.length
      );

    newIndex =
      availableQuotes[randomPosition];

  } while (
    newIndex === currentQuoteIndex
  );


  changeQuote(newIndex);
}


// =========================
// SELECCIONAR CATEGORÍA
// =========================

function selectCategory(event) {

  const button = event.currentTarget;

  const category =
    button.dataset.category;


  // Si toca nuevamente la categoría activa,
  // volvemos al modo general.

  if (selectedCategory === category) {

    selectedCategory = null;

    needButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    generateButton.textContent =
      "Otra perspectiva";

    generateQuote();

    return;
  }


  // Nueva categoría

  selectedCategory = category;


  // Sacamos selección anterior

  needButtons.forEach(btn => {
    btn.classList.remove("active");
  });


  // Marcamos el seleccionado

  button.classList.add("active");


  // Cambiamos el texto del botón principal

  generateButton.textContent =
    `Otra de ${button.textContent.trim()}`;


  // Mostramos inmediatamente
  // una frase de esa categoría

  generateQuote();
}


// =========================
// FAVORITOS
// =========================

function getFavorites() {

  const favorites =
    localStorage.getItem(
      "stoa-favorites"
    );


  return favorites
    ? JSON.parse(favorites)
    : [];
}


function getQuoteID(quote) {

  return `${quote.author}-${quote.text}`;
}


function toggleFavorite() {

  const favorites =
    getFavorites();

  const quote =
    quotes[currentQuoteIndex];

  const quoteID =
    getQuoteID(quote);

  const existingIndex =
    favorites.indexOf(quoteID);


  if (existingIndex >= 0) {

    favorites.splice(
      existingIndex,
      1
    );

  } else {

    favorites.push(
      quoteID
    );
  }


  localStorage.setItem(
    "stoa-favorites",
    JSON.stringify(favorites)
  );


  updateFavoriteButton();
}


function updateFavoriteButton() {

  const favorites =
    getFavorites();

  const quote =
    quotes[currentQuoteIndex];

  const quoteID =
    getQuoteID(quote);


  if (
    favorites.includes(quoteID)
  ) {

    favoriteButton.textContent =
      "♥";

    favoriteButton.setAttribute(
      "aria-label",
      "Quitar de favoritos"
    );

  } else {

    favoriteButton.textContent =
      "♡";

    favoriteButton.setAttribute(
      "aria-label",
      "Guardar frase"
    );
  }
}


// =========================
// COMPARTIR
// =========================

async function shareQuote() {

  const quote =
    quotes[currentQuoteIndex];


  const text =
    `“${quote.text}”\n` +
    `— ${quote.author}\n\n` +
    `STOA`;


  // Compartir nativo
  // principalmente en celular

  if (navigator.share) {

    try {

      await navigator.share({
        title: "STOA",
        text: text
      });

    } catch (error) {

      console.log(
        "Compartir cancelado"
      );
    }

  } else {

    // Si no existe compartir,
    // copiamos al portapapeles

    try {

      await navigator.clipboard
        .writeText(text);


      shareButton.textContent =
        "✓";


      setTimeout(() => {

        shareButton.textContent =
          "↗";

      }, 1200);


    } catch (error) {

      console.error(
        "No se pudo copiar la frase.",
        error
      );
    }
  }
}


// =========================
// TRANSICIONES
// =========================

quoteElement.style.transition =
  "opacity 0.22s ease";

authorElement.style.transition =
  "opacity 0.22s ease";

reflectionElement.style.transition =
  "opacity 0.22s ease";


// =========================
// EVENTOS
// =========================

generateButton.addEventListener(
  "click",
  generateQuote
);


favoriteButton.addEventListener(
  "click",
  toggleFavorite
);


shareButton.addEventListener(
  "click",
  shareQuote
);


needButtons.forEach(button => {

  button.addEventListener(
    "click",
    selectCategory
  );

});


// =========================
// INICIO
// =========================

showDate();


currentQuoteIndex =
  Math.floor(
    Math.random() *
    quotes.length
  );


showQuote(
  currentQuoteIndex
);


// =========================
// SERVICE WORKER
// =========================

if ("serviceWorker" in navigator) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register(
          "./service-worker.js"
        )
        .then(() => {

          console.log(
            "STOA Service Worker registrado"
          );

        })
        .catch((error) => {

          console.error(
            "Error registrando Service Worker:",
            error
          );

        });

    }
  );
}