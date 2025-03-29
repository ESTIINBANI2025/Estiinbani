function toggleNavMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// Funcție pentru a prelua textul din bara de căutare
function handleSearch(query) {
  console.log("Se caută:", query); // Log pentru verificare
  const searchResults = document.querySelectorAll('.firma'); // Selectează toate firmele

  // Ascunde sau afișează firmele în funcție de căutare
  searchResults.forEach(firma => {
      const firmName = firma.textContent.toLowerCase();
      if (firmName.includes(query.toLowerCase())) {
          firma.style.display = "flex"; // Afișează dacă corespunde
      } else {
          firma.style.display = "none"; // Ascunde altfel
      }
  });
}

// Funcție pentru trimiterea căutării
function submitSearch() {
  const query = document.getElementById('search-bar').value.trim();
  if (query) {
      alert(`Căutăm: ${query}`);
      // Aici poți implementa funcționalități suplimentare, cum ar fi un redirect sau apel API
  } else {
      alert("Introduceți un termen de căutare.");
  }
}
function calculateAdvancedBudget() {
  // Preluăm valorile introduse, tratând câmpurile goale ca fiind 0
  const income = parseFloat(document.getElementById('income').value) || 0;
  const housing = parseFloat(document.getElementById('housing').value) || 0;
  const food = parseFloat(document.getElementById('food').value) || 0;
  const transport = parseFloat(document.getElementById('transport').value) || 0;
  const others = parseFloat(document.getElementById('others').value) || 0;
  const resultDiv = document.getElementById('result');
  resultDiv.removeAttribute('style');

  // Calculăm totalul cheltuielilor și bugetul disponibil
  const totalExpenses = housing + food + transport + others;
  const balance = income - totalExpenses;

  // Salvăm bugetul disponibil într-o variabilă globală pentru utilizare ulterioară
  window.availableBudget = balance;
  
  resultDiv.innerHTML = `
    <p>Venituri totale: <strong><span id="total-income">${income} RON</span></strong></p>
    <p>Buget disponibil: <strong>${balance} RON</strong></p>
    <p>Cheltuieli totale: <strong>${totalExpenses} RON</strong></p>
  `;
}

function canAffordProduct() {
  const productPrice = parseFloat(document.getElementById('product-price').value) || 0;
  const resultDiv = document.getElementById('result');
  
  if(availableBudget === 0) {
    resultDiv.innerHTML = '<p style="color: red;">Te rog să calculezi mai întâi bugetul disponibil!</p>';
  }

  // Verificăm dacă bugetul disponibil acoperă prețul produsului
  if (productPrice <= window.availableBudget) {
    resultDiv.innerHTML = `
      <p style="color: green;">Felicitări! Îți permiți acest produs.</p>
    `;
  } else {
    const deficit = (productPrice - window.availableBudget).toFixed(2);
    resultDiv.innerHTML = `
      <p style="color: red;">Din păcate, nu îți permiți acest produs. Ai nevoie de încă <strong>${deficit} RON</strong>.</p>
    `;
  }
}

function canAffordProduct() {
  const productPrice = parseFloat(document.getElementById('product-price').value) || 0;
  const resultDiv = document.getElementById('result');

  if (!window.availableBudget && window.availableBudget !== 0) {
    resultDiv.className = "error";
    resultDiv.innerHTML = '<p>Te rog să calculezi mai întâi bugetul disponibil!</p>';
    return;
  }

  if (productPrice <= window.availableBudget) {
    resultDiv.className = "success"; // Efect de succes
    resultDiv.innerHTML = `
      <p>Felicitări! Îți permiți acest produs.</p>
    `;
  } else {
    const deficit = (productPrice - window.availableBudget).toFixed(2);
    resultDiv.className = "error"; // Efect de eroare
    resultDiv.innerHTML = `
      <p>Din păcate, nu îți permiți acest produs. Ai nevoie de încă <strong>${deficit} RON</strong>.</p>
    `;
  }
}
function handleSearch(query) {
  const searchResults = document.querySelectorAll('.firma');
  let found = false;

  searchResults.forEach(firma => {
      const firmName = firma.textContent.toLowerCase();
      if (firmName.includes(query.toLowerCase())) {
          firma.style.display = "flex";
          found = true;
      } else {
          firma.style.display = "none";
      }
  });

  // Afișează mesajul dacă nicio firmă nu se potrivește
  const noResults = document.getElementById('no-results');
  noResults.style.display = found ? "none" : "block";
}
const firms = {
  "regata": "regata.html",
  "spring farma": "springfarm.html",
  "flanco": "flanco.html",
  "kinder auto": "kidnerauto.html",
  "cupio": "cupio.html",
  "spy shop": "spyshop.html",
  "evomag": "evomag.html",
  "nichiduta": "nichiduta.html",
  "lensa": "lensa.html",
  "micul meserias": "miculmeseria.html",
  // Adaugă mai multe firme aici dacă este necesar
};
// Funcția de căutare care redirecționează utilizatorul
function handleSearchRedirect(event) {
  if (event.key === "Enter") {
      const query = document.getElementById('search-bar').value.trim().toLowerCase();
      
      if (firms[query]) {
          window.location.href = firms[query];
      } else {
          alert("Firma nu a fost găsită. Te rugăm să verifici denumirea!");
      }
  }
}

// Funcția de căutare pe click
function submitSearch() {
  const query = document.getElementById('search-bar').value.trim().toLowerCase();

  if (firms[query]) {
      window.location.href = firms[query];
  } else {
      alert("Firma nu a fost găsită. Te rugăm să verifici denumirea!");
  }
}

function handleSearchRedirect(event) {
  // Verificăm dacă utilizatorul apasă "Enter"
  if (event.key === "Enter") {
      const query = document.getElementById('search-bar').value.trim().toLowerCase();
      
      // Căutăm firma în maparea noastră
      if (firms[query]) {
          // Redirecționăm către pagina firmei
          window.location.href = firms[query];
      } else {
          alert("Firma nu a fost găsită. Te rugăm să verifici denumirea!");
      }
  }
}

function submitSearch() {
  const query = document.getElementById('search-bar').value.trim().toLowerCase();

  if (firms[query]) {
      window.location.href = firms[query];
  } else {
      alert("Firma nu a fost găsită. Te rugăm să verifici denumirea!");
  }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle the active class for the nav menu
  navLinks.classList.toggle('active');
}
// window.onscroll = function() {
//   var logo = document.querySelector('.logo-poza');
//   if (window.scrollY > 0) {
//       logo.classList.add('hidden');  
//   } else {
//       logo.classList.remove('hidden');  
//   }
// };

// Deschide pop-up-ul și deschide pagina Regata într-un tab nou
function openVoucherPopup(voucherCode) {
  // Afișează pop-up-ul
  document.getElementById('voucher-code').innerText = voucherCode;
  document.getElementById('voucher-popup').style.display = 'flex';
}

// Deschide pagina Regata într-un tab nou
function openRegataPage() {
  window.open('https://event.2performant.com/events/click?ad_type=quicklink&aff_code=59bcafc31&unique=93bdc07c4&redirect_to=https%253A//regata.ro/', '_blank');
}

// Închide pop-up-ul când se apasă pe "X" sau pe fundal
function closePopup(event) {
  let popup = document.getElementById('voucher-popup');
  let popupContent = document.querySelector('.popup-content');

  // Dacă s-a dat click în afara conținutului pop-up-ului, se închide
  if (!popupContent.contains(event.target)) {
      popup.style.display = 'none';
  }
}

// Atașează event listener-ul pe pop-up (nu pe document)
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('voucher-popup').addEventListener('click', closePopup);
  document.querySelector('.popup-close').addEventListener('click', function () {
      document.getElementById('voucher-popup').style.display = 'none';
  });
});
