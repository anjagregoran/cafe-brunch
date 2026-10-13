// Hand-drawn line art and watercolour washes, all drawn here as SVG.
// Add data-art="name" to any element and the drawing appears inside it.

const ICONS = {
  cup: '<path d="M36 58h44v10a22 22 0 0 1-44 0z"/><path d="M80 62h5a8 8 0 0 1 0 16h-7"/><path d="M30 96h56"/><path d="M48 46c-4-6 4-8 0-14M58 46c-4-6 4-8 0-14M68 46c-4-6 4-8 0-14"/>',
  sun: '<circle cx="60" cy="60" r="15"/><path d="M60 30v-9M60 99v-9M30 60h-9M99 60h-9M39 39l-6-6M87 87l-6-6M81 39l6-6M33 87l6-6"/>',
  olive: '<path d="M22 94C44 74 70 52 100 32"/><path d="M42 76c-11-1-18-8-19-18 11 1 18 8 19 18zM58 62c-11-2-17-10-17-20 11 2 17 9 17 20zM76 49c-10-3-15-11-14-21 10 3 15 11 14 21zM50 72c2 11 10 17 20 17-2-10-9-17-20-17zM68 57c3 10 11 15 21 14-3-10-11-15-21-14z"/><ellipse cx="88" cy="50" rx="6" ry="8" transform="rotate(35 88 50)"/>',
  kiosk: '<path d="M16 94h94"/><path d="M30 94V52h60v42"/><path d="M24 52l36-24 36 24"/><path d="M30 52q5 9 10 0q5 9 10 0q5 9 10 0q5 9 10 0q5 9 10 0q5 9 10 0"/><path d="M40 66h24v15H40zM52 66v15"/><path d="M72 66h12v28"/><path d="M97 94v-9h11v9"/><path d="M102 85c-7-8-6-15 0-20 7 5 7 12 0 20z"/>',
  letter: '<path d="M26 44h68v46H26z"/><path d="M26 44l34 27 34-27"/><path d="M26 90l25-25M94 90L69 65"/>',
  lily: '<ellipse cx="60" cy="92" rx="40" ry="11"/><path d="M60 86c-9-13-9-28 0-42 9 14 9 29 0 42z"/><path d="M58 87c-17-5-26-17-27-31 15 3 24 14 27 31zM62 87c17-5 26-17 27-31-15 3-24 14-27 31z"/><path d="M52 90c-14 1-26-4-33-14 13-3 26 3 33 14zM68 90c14 1 26-4 33-14-13-3-26 3-33 14z"/>',
  blueberry: '<path d="M26 30c20 10 38 26 48 48"/><path d="M40 38c2-11 10-17 21-17-1 11-9 18-21 17zM54 50c-11 2-18 10-18 21 11-2 18-9 18-21z"/><circle cx="68" cy="74" r="9"/><circle cx="86" cy="82" r="9"/><circle cx="74" cy="94" r="9"/><path d="M65 71l3 3 3-3M83 79l3 3 3-3M71 91l3 3 3-3"/>',
  smoothie: '<path d="M40 36h40l-6 60H46z"/><path d="M42 52h36"/><path d="M66 36l8-24"/><path d="M52 66c3-3 6 3 9 0M58 80c3-3 6 3 9 0"/><circle cx="84" cy="34" r="9"/><path d="M84 25v18M75 34h18"/>',
  toast: '<path d="M30 46c-8-14 14-20 30-18 16-2 38 4 30 18v48H30z"/><path d="M45 64c-2-12 15-17 26-10 11 7 8 25-7 26-10 1-18-6-19-16z"/><circle cx="60" cy="65" r="7"/><circle cx="78" cy="84" r="5"/><circle cx="68" cy="88" r="4"/><path d="M38 80c4-6 10-6 14 0M38 86c4-6 10-6 14 0"/>',
  sandwich: '<path d="M22 78l38-44 38 44z"/><path d="M34 72l26-30 26 30"/><path d="M22 84q6 7 12 0t12 0 12 0 12 0 12 0 12 0"/><path d="M22 92c2 6 74 6 76 0"/><path d="M60 24c-6-7-5-13 0-17 6 4 6 10 0 17z"/>',
  bowl: '<path d="M20 58h80c0 24-16 38-40 38S20 82 20 58z"/><path d="M27 58c8-15 58-15 66 0"/><circle cx="48" cy="52" r="5"/><circle cx="60" cy="48" r="5"/><circle cx="72" cy="53" r="5"/><path d="M82 46l18-22"/><path d="M40 100h40"/>',
  board: '<path d="M20 48h64a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8z"/><path d="M92 64h14a5 5 0 0 1 0 10H92"/><path d="M22 80l16-22 10 22z"/><circle cx="60" cy="62" r="7"/><circle cx="72" cy="70" r="7"/><circle cx="60" cy="78" r="7"/><circle cx="34" cy="64" r="1.5"/><ellipse cx="80" cy="56" rx="3" ry="4"/><path d="M52 40c6-8 16-8 22 0"/>',
  loaf: '<path d="M20 86V60c0-13 11-20 22-20h38c12 0 20 8 20 20v26z"/><path d="M36 50c14-5 32-5 48 1"/><path d="M72 41v45M86 44v42"/><path d="M28 70c3-3 6 3 9 0M44 76c3-3 6 3 9 0"/><path d="M14 92h92"/>',
  lemonloaf: '<path d="M16 86V60c0-13 11-20 22-20h30c12 0 20 8 20 20v26z"/><path d="M30 50c12-5 28-5 42 1"/><circle cx="34" cy="68" r="3.5"/><circle cx="50" cy="74" r="3.5"/><circle cx="64" cy="64" r="3.5"/><circle cx="74" cy="76" r="3.5"/><circle cx="98" cy="76" r="13"/><path d="M98 63v26M85 76h26M89 67l18 18M107 67L89 85"/><path d="M10 92h100"/>',
  cheesecake: '<path d="M20 64l74-22 6 16z"/><path d="M20 64v22l80-6V58"/><path d="M20 78l80-6"/><circle cx="64" cy="46" r="6"/><path d="M66 40c3-6 8-7 12-5-2 5-6 7-12 5z"/><path d="M14 94h92"/>',
  juice: '<path d="M41 42h38l-5 54H46z"/><path d="M43 58h34"/><circle cx="82" cy="42" r="11"/><path d="M82 31v22M71 42h22M74 34l16 16M90 34L74 50"/><path d="M52 30c2-9 9-13 17-12-2 8-8 13-17 12z"/><path d="M52 72c3-3 6 3 9 0M58 84c3-3 6 3 9 0"/>',
  cookie: '<path d="M60 28c20-1 35 14 34 34 1 20-14 35-34 34-20 1-35-14-34-34-1-20 14-35 34-34z"/><ellipse cx="46" cy="50" rx="6" ry="5"/><ellipse cx="70" cy="46" rx="5" ry="4"/><ellipse cx="78" cy="66" rx="6" ry="5"/><ellipse cx="54" cy="74" rx="6" ry="5"/><ellipse cx="68" cy="82" rx="4" ry="3"/><path d="M40 66l3 2M60 60l3 1M84 52l2 2"/>',
};

// Loose colour that sits under the ink lines, like paint on an illustrated menu.
const PAINT = {
  cup: '<path d="M36 58h44v10a22 22 0 0 1-44 0z" fill="#fbf6ea"/><ellipse cx="58" cy="60" rx="20" ry="4" fill="#b98a5e"/>',
  sun: '<circle cx="60" cy="60" r="17" fill="#f5c64f"/>',
  olive: '<path d="M42 76c-11-1-18-8-19-18 11 1 18 8 19 18zM58 62c-11-2-17-10-17-20 11 2 17 9 17 20zM76 49c-10-3-15-11-14-21 10 3 15 11 14 21zM50 72c2 11 10 17 20 17-2-10-9-17-20-17zM68 57c3 10 11 15 21 14-3-10-11-15-21-14z" fill="#a9c088"/><ellipse cx="88" cy="50" rx="6" ry="8" transform="rotate(35 88 50)" fill="#6f8050"/>',
  kiosk: '<path d="M30 94V52h60v42z" fill="#cfe0c0"/><path d="M24 52l36-24 36 24z" fill="#e9b9a0"/><path d="M40 66h24v15H40z" fill="#fbf6ea"/><path d="M102 85c-7-8-6-15 0-20 7 5 7 12 0 20z" fill="#9db57a"/>',
  letter: '<path d="M26 44h68v46H26z" fill="#fbf1d3"/>',
  lily: '<ellipse cx="60" cy="92" rx="40" ry="11" fill="#a9c79a"/><path d="M60 86c-9-13-9-28 0-42 9 14 9 29 0 42zM58 87c-17-5-26-17-27-31 15 3 24 14 27 31zM62 87c17-5 26-17 27-31-15 3-24 14-27 31zM52 90c-14 1-26-4-33-14 13-3 26 3 33 14zM68 90c14 1 26-4 33-14-13-3-26 3-33 14z" fill="#f4c6d4"/>',
  blueberry: '<path d="M40 38c2-11 10-17 21-17-1 11-9 18-21 17zM54 50c-11 2-18 10-18 21 11-2 18-9 18-21z" fill="#a9c088"/><circle cx="68" cy="74" r="9" fill="#7483c4"/><circle cx="86" cy="82" r="9" fill="#6373b8"/><circle cx="74" cy="94" r="9" fill="#7f8dcc"/>',
  smoothie: '<path d="M42 52h36l-4 44H46z" fill="#f0a8a4"/><path d="M40 36h40l-2 16H42z" fill="#fbe3e0"/><circle cx="84" cy="34" r="9" fill="#f6c453"/>',
  juice: '<path d="M43 58h34l-3 38H46z" fill="#f7b64a"/><path d="M41 42h38l-2 16H43z" fill="#fde7b5"/><circle cx="82" cy="42" r="11" fill="#f9d25c"/><path d="M52 30c2-9 9-13 17-12-2 8-8 13-17 12z" fill="#9db57a"/>',
  toast: '<path d="M30 46c-8-14 14-20 30-18 16-2 38 4 30 18v48H30z" fill="#e6c594"/><path d="M36 76c6-10 16-10 20 4l-2 10H36z" fill="#b5cc86"/><path d="M45 64c-2-12 15-17 26-10 11 7 8 25-7 26-10 1-18-6-19-16z" fill="#fffdf6"/><circle cx="60" cy="65" r="7" fill="#f5b53c"/><circle cx="78" cy="84" r="5" fill="#e4614d"/><circle cx="68" cy="88" r="4" fill="#e4614d"/>',
  sandwich: '<path d="M22 78l38-44 38 44z" fill="#ecd2a0"/><path d="M34 72l26-30 26 30z" fill="#f8ecd0"/><path d="M22 80h76v8H22z" fill="#a9c77c"/><path d="M22 90c2 8 74 8 76 0z" fill="#e0bd84"/><path d="M60 24c-6-7-5-13 0-17 6 4 6 10 0 17z" fill="#86aa62"/>',
  bowl: '<path d="M20 58h80c0 24-16 38-40 38S20 82 20 58z" fill="#d8cfe8"/><path d="M27 58c8-15 58-15 66 0z" fill="#fffaf0"/><circle cx="48" cy="52" r="5" fill="#6f7fc0"/><circle cx="60" cy="48" r="5" fill="#e4614d"/><circle cx="72" cy="53" r="5" fill="#6f7fc0"/>',
  board: '<path d="M20 48h64a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8z" fill="#dcbb8a"/><path d="M92 64h14a5 5 0 0 1 0 10H92z" fill="#dcbb8a"/><path d="M22 80l16-22 10 22z" fill="#f6d778"/><circle cx="60" cy="62" r="7" fill="#d97a6c"/><circle cx="72" cy="70" r="7" fill="#d97a6c"/><circle cx="60" cy="78" r="7" fill="#d97a6c"/><ellipse cx="80" cy="56" rx="3" ry="4" fill="#7f9654"/>',
  loaf: '<path d="M20 86V60c0-13 11-20 22-20h38c12 0 20 8 20 20v26z" fill="#d6a468"/><path d="M72 41h8c12 0 20 8 20 20v25H72z" fill="#f1d7a6"/>',
  lemonloaf: '<path d="M16 86V60c0-13 11-20 22-20h30c12 0 20 8 20 20v26z" fill="#efd596"/><circle cx="34" cy="68" r="3.5" fill="#5f6fb5"/><circle cx="50" cy="74" r="3.5" fill="#5f6fb5"/><circle cx="64" cy="64" r="3.5" fill="#5f6fb5"/><circle cx="74" cy="76" r="3.5" fill="#5f6fb5"/><circle cx="98" cy="76" r="13" fill="#f8dd5c"/>',
  cheesecake: '<path d="M20 64l74-22 6 16z" fill="#fdf4d8"/><path d="M20 64v14l80-6V58z" fill="#f6e2ac"/><path d="M20 78v8l80-6v-8z" fill="#cc9c60"/><circle cx="64" cy="46" r="6" fill="#d9534f"/><path d="M66 40c3-6 8-7 12-5-2 5-6 7-12 5z" fill="#86aa62"/>',
  cookie: '<path d="M60 28c20-1 35 14 34 34 1 20-14 35-34 34-20 1-35-14-34-34-1-20 14-35 34-34z" fill="#dcae72"/><ellipse cx="46" cy="50" rx="6" ry="5" fill="#6b4a35"/><ellipse cx="70" cy="46" rx="5" ry="4" fill="#6b4a35"/><ellipse cx="78" cy="66" rx="6" ry="5" fill="#6b4a35"/><ellipse cx="54" cy="74" rx="6" ry="5" fill="#6b4a35"/><ellipse cx="68" cy="82" rx="4" ry="3" fill="#6b4a35"/>',
};

const WASHES = [
  ['#cfdcc0', '#f3e6b8'], // lily pad green and morning light
  ['#d9cfe6', '#c9dcea'], // lilac and water
  ['#f0cfd2', '#f4d6bd'], // blossom and peach
  ['#c9dcea', '#cfdcc0'], // water and reeds
];

const icon = name => `<svg class="ink" viewBox="0 0 120 120" aria-hidden="true"><g class="paint" filter="url(#paint)">${PAINT[name] || ''}</g><g filter="url(#wobble)">${ICONS[name] || ''}</g></svg>`;

const ARROW = `<svg class="ink arrow" viewBox="0 0 60 30" aria-hidden="true"><g filter="url(#wobble)"><path d="M56 8C40 2 20 6 8 20"/><path d="M8 20l2-10M8 20l10-1"/></g></svg>`;

// A soft, uneven patch of colour that reads like a brush of watercolour.
const wash = i => {
  const [a, b] = WASHES[i % WASHES.length];
  const flip = i % 2 ? ' transform="scale(-1 1) translate(-200 0)"' : '';
  return `<svg class="wash" viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden="true"><g filter="url(#watercolour)"${flip}>
    <ellipse cx="92" cy="96" rx="62" ry="54" fill="${a}" opacity="0.85"/>
    <ellipse cx="124" cy="112" rx="46" ry="40" fill="${b}" opacity="0.7"/>
    <ellipse cx="78" cy="124" rx="34" ry="26" fill="${b}" opacity="0.45"/>
  </g></svg>`;
};

const WAVES = `<svg class="ink waves" viewBox="0 0 240 30" aria-hidden="true"><g filter="url(#wobble)">
  <path d="M8 18c9-12 19-12 28 0s19 12 28 0 19-12 28 0 19 12 28 0 19-12 28 0 19 12 28 0 19-12 28 0 19 12 28 0"/>
</g></svg>`;

const CREST = `<svg class="ink crest" viewBox="0 0 160 200" aria-hidden="true">
  <g filter="url(#wobble)">
    <ellipse cx="80" cy="100" rx="73" ry="93"/>
    <ellipse cx="80" cy="100" rx="66" ry="86"/>
    <g transform="translate(47 99) scale(0.55)">${ICONS.cup}</g>
    <path d="M36 164c7-9 15-9 22 0s15 9 22 0 15-9 22 0 15 9 22 0"/>
    <path d="M54 174c6-8 13-8 19 0s13 8 19 0 13-8 19 0"/>
  </g>
  <text x="80" y="50" class="crest-small">MARCELLUS · KASTAV</text>
  <text x="80" y="84" class="crest-name">MORE</text>
  <text x="80" y="98" class="crest-small">CAFÉ &amp; BRUNCH</text>
</svg>`;

document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4"/>
    <feDisplacementMap in="SourceGraphic" scale="2.6"/>
  </filter>
  <filter id="paint" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="8" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="7"/>
    <feGaussianBlur stdDeviation="0.5"/>
  </filter>
  <filter id="watercolour" x="-30%" y="-30%" width="160%" height="160%">
    <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="11" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" result="shape"/>
    <feGaussianBlur in="shape" stdDeviation="3.2"/>
  </filter>
</defs></svg>`);

document.querySelectorAll('[data-art]').forEach((el, i) => {
  const name = el.dataset.art;
  const drawing = name === 'crest' ? CREST : name === 'waves' ? WAVES : icon(name);
  el.insertAdjacentHTML('afterbegin', (el.hasAttribute('data-wash') ? wash(Number(el.dataset.wash) || i) : '') + drawing);
});
