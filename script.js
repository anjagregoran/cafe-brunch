document.querySelectorAll('[data-name]').forEach(el => { el.textContent = CAFE_NAME; });
document.title = `${CAFE_NAME} | Café And Brunch`;

const card = item => `
  <article class="card">
    <div class="card-img">
      <img loading="lazy" src="${item.img}" alt="${item.name}">
      <div class="tags">${item.tags.map((t, i) => `<span class="tag${i === 0 && t === 'New' ? ' tag-solid' : ''}">${t}</span>`).join('')}</div>
    </div>
    <div class="card-head"><h3>${item.name}</h3><span class="price">${item.price}</span></div>
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
