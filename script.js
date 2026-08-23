// با کلیک روی هر دسته، فقط بخش مربوط به همون دسته نمایش داده می‌شه
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.menu-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.target;

    // غیرفعال کردن همه‌ی تب‌ها و فعال کردن تب کلیک‌شده
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // مخفی کردن همه‌ی بخش‌ها و نمایش بخش مربوطه
    sections.forEach(section => {
      section.classList.toggle('active', section.id === targetId);
    });
  });
});

// ---------- About modal ----------
const aboutOpenBtn = document.getElementById('aboutOpen');
const aboutCloseBtn = document.getElementById('aboutClose');
const aboutOverlay = document.getElementById('aboutOverlay');
const aboutModal = document.getElementById('aboutModal');

function openAboutModal() {
  aboutOverlay.hidden = false;
  aboutModal.hidden = false;
  // یک فریم صبر می‌کنیم تا انیمیشن fade/scale درست اجرا بشه
  requestAnimationFrame(() => {
    aboutOverlay.classList.add('show');
    aboutModal.classList.add('show');
  });
  document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
  aboutOverlay.classList.remove('show');
  aboutModal.classList.remove('show');
  document.body.style.overflow = '';
  setTimeout(() => {
    aboutOverlay.hidden = true;
    aboutModal.hidden = true;
  }, 250);
}

aboutOpenBtn.addEventListener('click', openAboutModal);
aboutCloseBtn.addEventListener('click', closeAboutModal);
aboutOverlay.addEventListener('click', closeAboutModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !aboutModal.hidden) closeAboutModal();
});
