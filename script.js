document.querySelectorAll('[data-name]').forEach(el => { el.textContent = CAFE_NAME; });
document.querySelectorAll('[data-kind]').forEach(el => { el.textContent = CAFE_KIND; });
document.title = `${CAFE_NAME} ${CAFE_KIND}`;

const TINTS = ['#dfe5d2', '#f1e6c8', '#ecd9d2', '#d5e0e6'];

const card = (item, i) => `
  <article class="card">
    <div class="card-img"${item.img ? '' : ` style="background:${TINTS[i % TINTS.length]}"`}>
      ${item.img ? `<img loading="lazy" src="${item.img}" alt="${item.name}">` : `<span class="card-word">${item.name}</span>`}
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
