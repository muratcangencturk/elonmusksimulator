let currentLanguage = 'en';

function loadLanguage(lang) {
  const t = translations[lang] || translations['en'];
  currentLanguage = lang;
  if (document.getElementById('title')) {
    document.getElementById('title').textContent = t.title;
  }
  if (document.getElementById('subtitle')) {
    document.getElementById('subtitle').textContent = t.subtitle;
  }
  if (document.getElementById('game-over-title')) {
    document.getElementById('game-over-title').textContent = t.gameOverTitle;
  }
  if (document.getElementById('game-over-message')) {
    document.getElementById('game-over-message').textContent = t.gameOverMessage;
  }
  if (document.getElementById('restart-button')) {
    document.getElementById('restart-button').textContent = t.tryAgain;
  }
  if (document.getElementById('quit-button')) {
    document.getElementById('quit-button').textContent = t.quit;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-select');
  if (selector) {
    selector.addEventListener('change', (e) => loadLanguage(e.target.value));
  }
  loadLanguage(currentLanguage);
});
