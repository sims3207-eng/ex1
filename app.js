/**
 * Dangjin Tourist Guide - Application Logic
 */

let currentLang = 'en';
let currentCategory = 'all';
let searchQuery = '';
let currentTab = 'daytrip';
let favorites = JSON.parse(localStorage.getItem('dangjin_favorites') || '[]');

// DOM Elements
const langSelect = document.getElementById('langSelect');
const destinationsContainer = document.getElementById('destinationsGrid');
const foodContainer = document.getElementById('foodGrid');
const phrasesContainer = document.getElementById('phrasesGrid');
const transitContainer = document.getElementById('transitGrid');
const itineraryTimeline = document.getElementById('itineraryTimeline');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const modalBackdrop = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const toastEl = document.getElementById('toast');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Check browser language or saved preference
  const savedLang = localStorage.getItem('dangjin_lang');
  if (savedLang && ['en', 'ko', 'ja', 'zh'].includes(savedLang)) {
    currentLang = savedLang;
    langSelect.value = savedLang;
  }

  setupEventListeners();
  renderAll();
});

// Setup Events
function setupEventListeners() {
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('dangjin_lang', currentLang);
    renderAll();
    showToast(`Language set to ${langSelect.options[langSelect.selectedIndex].text}`);
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCategory = e.currentTarget.dataset.category;
      renderDestinations();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderDestinations();
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentTab = e.currentTarget.dataset.tab;
      renderItinerary();
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

// Render All Components
function renderAll() {
  updateUITranslations();
  renderDestinations();
  renderItinerary();
  renderFood();
  renderPhrases();
  renderTransit();
}

// Update UI Static Texts
function updateUITranslations() {
  const t = UI_TEXTS[currentLang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
  }
}

// Render Destinations
function renderDestinations() {
  const t = UI_TEXTS[currentLang];
  const items = APP_DATA.destinations.filter(item => {
    const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
    
    const localizedTitle = (item.title[currentLang] || item.title.en).toLowerCase();
    const localizedDesc = (item.description[currentLang] || item.description.en).toLowerCase();
    const koName = item.title.ko.toLowerCase();
    const tags = item.tags.join(' ').toLowerCase();

    const matchesSearch = !searchQuery || 
      localizedTitle.includes(searchQuery) || 
      localizedDesc.includes(searchQuery) || 
      koName.includes(searchQuery) ||
      tags.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  if (items.length === 0) {
    destinationsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-compass" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>No attractions found matching your search.</p>
      </div>
    `;
    return;
  }

  destinationsContainer.innerHTML = items.map(dest => {
    const isSaved = favorites.includes(dest.id);
    const title = dest.title[currentLang] || dest.title.en;
    const desc = dest.description[currentLang] || dest.description.en;

    return `
      <article class="dest-card" id="card-${dest.id}">
        <div class="dest-image-wrap">
          <img class="dest-img" src="${dest.image}" alt="${title}" loading="lazy" onerror="if(this.src!=='${dest.fallbackImage || ''}'){this.src='${dest.fallbackImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'}';}">
          <div class="dest-badge">
            <i class="fa-solid fa-location-dot"></i>
            <span>${dest.category.toUpperCase()}</span>
          </div>
          <button class="dest-favorite-btn ${isSaved ? 'saved' : ''}" 
                  onclick="toggleFavorite('${dest.id}')" 
                  aria-label="Add to favorites"
                  title="Favorite">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        
        <div class="dest-content">
          <div class="dest-korean-name">${dest.title.ko}</div>
          <h3 class="dest-title">${title}</h3>
          <p class="dest-desc">${desc}</p>
          
          <div class="dest-meta">
            <div class="dest-meta-item">
              <i class="fa-solid fa-map-pin"></i>
              <span>${dest.addressKo}</span>
            </div>
          </div>

          <div class="dest-actions">
            <button class="btn-secondary" onclick="copyToClipboard('${dest.addressKo}')">
              <i class="fa-regular fa-copy"></i>
              <span>${t.copyAddress}</span>
            </button>
            <button class="btn-primary" onclick="openDetails('${dest.id}')">
              <i class="fa-solid fa-circle-info"></i>
              <span>${t.viewDetails}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Render Itineraries
function renderItinerary() {
  const steps = APP_DATA.itineraries[currentTab] || [];
  itineraryTimeline.innerHTML = steps.map(step => {
    const title = step.title[currentLang] || step.title.en;
    const desc = step.desc[currentLang] || step.desc.en;

    return `
      <div class="timeline-step">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${step.time}</div>
        <h4 class="timeline-title">${title}</h4>
        <p class="timeline-desc">${desc}</p>
      </div>
    `;
  }).join('');
}

// Render Food & Culinary
function renderFood() {
  foodContainer.innerHTML = APP_DATA.foods.map(item => {
    const name = item.name[currentLang] || item.name.en;
    const desc = item.desc[currentLang] || item.desc.en;

    return `
      <article class="food-card">
        <div class="food-thumb">
          <img src="${item.image}" alt="${name}" loading="lazy">
        </div>
        <div class="food-content">
          <div class="food-tag" style="color: ${item.badgeColor}">${item.tag}</div>
          <h3 style="font-size: 1.15rem; margin: 6px 0 8px; color: #fff;">${name}</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">${desc}</p>
        </div>
      </article>
    `;
  }).join('');
}

// Render Travel Korean Phrases
function renderPhrases() {
  phrasesContainer.innerHTML = APP_DATA.phrases.map(p => `
    <div class="phrase-card">
      <button class="phrase-copy-btn" onclick="copyToClipboard('${p.korean}')" title="Copy Phrase">
        <i class="fa-regular fa-copy"></i>
      </button>
      <div class="phrase-korean">${p.korean}</div>
      <div class="phrase-pronun">[${p.pronun}]</div>
      <div class="phrase-eng">${p.eng}</div>
    </div>
  `).join('');
}

// Render Transportation Guide
function renderTransit() {
  transitContainer.innerHTML = APP_DATA.transportTips.map(item => {
    const title = item.title[currentLang] || item.title.en;

    return `
      <div class="transport-card">
        <div class="transport-icon">${item.icon}</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #fff;">${title}</h3>
        <ul class="transport-step-list">
          ${item.steps.map((s, idx) => `
            <li class="transport-step">
              <span class="transport-step-num">${idx + 1}</span>
              <span>${s[currentLang] || s.en}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

// Toggle Favorites
function toggleFavorite(id) {
  const t = UI_TEXTS[currentLang];
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(t.favoriteRemoved);
  } else {
    favorites.push(id);
    showToast(t.favoriteAdded);
  }
  localStorage.setItem('dangjin_favorites', JSON.stringify(favorites));
  renderDestinations();
}

// Open Detail Modal
function openDetails(id) {
  const dest = APP_DATA.destinations.find(d => d.id === id);
  if (!dest) return;

  const title = dest.title[currentLang] || dest.title.en;
  const desc = dest.description[currentLang] || dest.description.en;
  const tips = dest.tips[currentLang] || dest.tips.en;

  // External Navigation links
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(dest.addressKo)}`;
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(dest.addressKo)}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${dest.coords.lat},${dest.coords.lng}`;

  modalBody.innerHTML = `
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; max-height: 260px;">
      <img src="${dest.image}" alt="${title}" style="width: 100%; height: 260px; object-fit: cover;" onerror="if(this.src!=='${dest.fallbackImage || ''}'){this.src='${dest.fallbackImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'}';}">
    </div>
    
    <div style="font-size: 0.85rem; color: var(--accent-orange); font-weight: 700; margin-bottom: 4px;">
      ${dest.title.ko}
    </div>
    <h2 style="font-size: 1.6rem; color: #fff; margin-bottom: 1rem; font-weight: 800;">
      ${title}
    </h2>

    <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 6px;">
      ${dest.tags.map(tag => `
        <span style="font-size: 0.75rem; padding: 3px 10px; border-radius: var(--radius-full); background: rgba(249, 115, 22, 0.12); color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.3);">
          #${tag}
        </span>
      `).join('')}
    </div>

    <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.65; margin-bottom: 1.5rem;">
      ${desc}
    </p>

    <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-amber); padding: 1rem; border-radius: 4px; margin-bottom: 1.5rem;">
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-amber); text-transform: uppercase; margin-bottom: 4px;">
        💡 Insider Traveler Tip
      </div>
      <div style="font-size: 0.9rem; color: #e2e8f0;">${tips}</div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
      <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 4px;">Address for Taxi / GPS:</div>
      <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 6px;">${dest.addressKo}</div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">${dest.address}</div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px;">
      <a href="${googleMapUrl}" target="_blank" rel="noopener" class="btn-secondary">
        <i class="fa-brands fa-google"></i> Google Maps
      </a>
      <a href="${kakaoMapUrl}" target="_blank" rel="noopener" class="btn-secondary">
        <i class="fa-solid fa-map-location-dot"></i> Kakao Map
      </a>
      <a href="${naverMapUrl}" target="_blank" rel="noopener" class="btn-secondary">
        <i class="fa-solid fa-n"></i> Naver Map
      </a>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Copy to Clipboard
function copyToClipboard(text) {
  const t = UI_TEXTS[currentLang];
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${t.copied} ("${text}")`);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const t = UI_TEXTS[currentLang];
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${t.copied} ("${text}")`);
  } catch (err) {
    showToast("Failed to copy");
  }
  document.body.removeChild(textArea);
}

// Show Toast
let toastTimeout;
function showToast(message) {
  const toastMsg = document.getElementById('toastMsg');
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}
