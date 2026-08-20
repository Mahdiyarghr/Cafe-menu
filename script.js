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
