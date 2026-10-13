document.querySelectorAll('[data-name]').forEach(el => { el.textContent = CAFE_NAME; });
document.querySelectorAll('[data-kind]').forEach(el => { el.textContent = CAFE_KIND; });
document.title = `${CAFE_NAME} ${CAFE_KIND}`;

const card = (item, i) => `
  <article class="card">
    <div class="card-img${item.img ? '' : ' card-art'}">
      ${item.img ? `<img loading="lazy" src="${item.img}" alt="${item.name}">` : wash(i) + icon(item.art)}
      <div class="tags">${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="card-head"><h3>${item.name}</h3>${item.price ? `<span class="price">${item.price}</span>` : ''}</div>
    <p>${item.note}</p>
  </article>`;

document.querySelectorAll('.scroller').forEach(scroller => {
  scroller.innerHTML = MENU[scroller.dataset.row].map(card).join('');

  const thumb = scroller.parentElement.querySelector('.progress span');
  const update = () => {
    const visible = scroller.clientWidth / scroller.scrollWidth;
    const max = scroller.scrollWidth - scroller.clientWidth;
    thumb.style.width = `${Math.min(visible, 1) * 100}%`;
    thumb.style.left = `${max > 0 ? (scroller.scrollLeft / max) * (1 - visible) * 100 : 0}%`;
  };
  scroller.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Close' : 'Menu';
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A' && nav.classList.contains('open')) toggle.click();
});

const sheetItem = item => `
  <div class="sheet-item">
    <div class="sheet-pic">${icon(item.art)}</div>
    <div class="sheet-text">
      ${ARROW}
      <h3 class="hand">${item.name}${item.price ? ` <span>${item.price}</span>` : ''}</h3>
      <p>${item.note}</p>
      ${item.scribble ? `<em class="hand">${item.scribble}</em>` : ''}
    </div>
  </div>`;

document.querySelectorAll('[data-sheet]').forEach(group => {
  group.innerHTML = `<h3 class="sheet-title">${group.dataset.title}</h3><div class="sheet-items">${MENU[group.dataset.sheet].map(sheetItem).join('')}</div>`;
});

// Sections drift in gently as you reach them.
const reveal = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('seen'); reveal.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('main > section:not(.hero), .doodle').forEach(el => {
  // Anything already on screen when the page opens is simply shown.
  if (el.getBoundingClientRect().top < window.innerHeight) return;
  el.classList.add('slow');
  reveal.observe(el);
});
