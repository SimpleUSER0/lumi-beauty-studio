const toggle = document.querySelector('.toggle');
const nav = document.querySelector('#navigation');
function closeNav() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'მენიუს გახსნა'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'მენიუს დახურვა' : 'მენიუს გახსნა'); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeNav(); toggle.focus(); } });
matchMedia('(min-width: 1000px)').addEventListener('change', e => { if (e.matches) closeNav(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); }); document.querySelectorAll('[data-category]').forEach(a => { a.hidden = button.dataset.filter !== 'all' && a.dataset.category !== button.dataset.filter; }); }));
const dialog = document.querySelector('#lightbox');
document.querySelectorAll('[data-photo]').forEach(b => b.addEventListener('click', () => { const image = document.querySelector('#large-photo'); image.src = b.dataset.photo; image.alt = b.querySelector('img').alt; document.querySelector('#caption').textContent = b.dataset.caption; dialog.showModal(); }));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { const r = dialog.getBoundingClientRect(); if(e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
