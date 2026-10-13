// Ink and watercolour drawings, all original and drawn here as SVG.
// Each drawing has two layers: i = the ink lines, p = the paint underneath.
// Add data-art="name" to any element and the drawing appears inside it.

const SHADOW = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#b4bfc8" opacity="0.75"/>`;

const ART = {
  // ---------- the menu
  board: {
    i: '<path d="M12 54c0-8 6-11 14-11h62c8 0 12 4 12 12v28c0 8-4 12-12 12H26c-8 0-14-4-14-11z"/><path d="M100 62h9a7 7 0 0 1 0 14h-9"/><circle cx="108" cy="69" r="2"/>'
      + '<path d="M20 86l18-30 11 30z"/><path d="M38 56l6-3 10 29-5 4"/><circle cx="33" cy="76" r="2"/><circle cx="39" cy="68" r="1.5"/>'
      + '<circle cx="62" cy="57" r="8"/><circle cx="73" cy="61" r="8"/><circle cx="84" cy="57" r="8"/><path d="M60 55l1 1M65 59l1 1M71 59l1 1M76 63l1 1M82 55l1 1M87 59l1 1"/>'
      + '<circle cx="63" cy="78" r="4"/><circle cx="71" cy="76" r="4"/><circle cx="79" cy="78" r="4"/><circle cx="67" cy="85" r="4"/><circle cx="75" cy="85" r="4"/><circle cx="71" cy="91" r="3.5"/><path d="M71 73c1-6 5-8 10-7"/>'
      + '<path d="M22 48l8-1 1 8-8 1zM33 47l8 1-1 8-8-1z"/><circle cx="91" cy="78" r="3.5"/><circle cx="92" cy="87" r="3.5"/>'
      + '<path d="M46 48l14-3M49 47l-1-3M53 46l-1-3M57 46l-1-3M50 48l1 3M55 47l1 3"/>',
    p: SHADOW(60, 100, 50, 7)
      + '<path d="M12 54c0-8 6-11 14-11h62c8 0 12 4 12 12v28c0 8-4 12-12 12H26c-8 0-14-4-14-11z" fill="#cfa16a"/><path d="M100 62h9a7 7 0 0 1 0 14h-9z" fill="#cfa16a"/>'
      + '<path d="M20 86l18-30 11 30z" fill="#f4d66e"/><path d="M38 56l6-3 10 29-5 4z" fill="#e0b84c"/>'
      + '<circle cx="62" cy="57" r="8" fill="#c8655a"/><circle cx="73" cy="61" r="8" fill="#d0766a"/><circle cx="84" cy="57" r="8" fill="#c8655a"/>'
      + '<circle cx="63" cy="78" r="4" fill="#84639f"/><circle cx="71" cy="76" r="4" fill="#84639f"/><circle cx="79" cy="78" r="4" fill="#84639f"/><circle cx="67" cy="85" r="4" fill="#84639f"/><circle cx="75" cy="85" r="4" fill="#84639f"/><circle cx="71" cy="91" r="3.5" fill="#84639f"/>'
      + '<path d="M22 48l8-1 1 8-8 1zM33 47l8 1-1 8-8-1z" fill="#ecd29b"/><circle cx="91" cy="78" r="3.5" fill="#7f9654"/><circle cx="92" cy="87" r="3.5" fill="#7f9654"/>',
  },
  loaf: {
    i: '<path d="M30 84V56c0-13 7-20 16-20s16 7 16 20v28z"/><path d="M46 36l40-6c10 0 16 8 16 18v26L62 84"/><path d="M62 56l40-8"/>'
      + '<path d="M54 39c12-6 28-7 42-3"/><path d="M36 60l2 1M44 68l2 1M52 58l2 1M40 76l2 1M50 78l2-1M46 50l2 1"/>'
      + '<path d="M70 62l1 1M82 58l1 1M92 62l1 1M76 72l1 1M90 72l1 1"/>'
      + '<path d="M6 96c0-8 9-12 20-12s20 4 20 12c-12 5-28 5-40 0z"/><path d="M6 96l1 5c11 4 27 4 38 0l1-5"/><path d="M16 92l2 1M26 90l2 1M34 94l2 1"/>'
      + '<circle cx="98" cy="96" r="7"/><circle cx="98" cy="96" r="2"/><circle cx="110" cy="90" r="6"/><circle cx="110" cy="90" r="1.5"/>',
    p: SHADOW(58, 104, 54, 7)
      + '<path d="M46 36l40-6c10 0 16 8 16 18v26L62 84V56c0-13-7-20-16-20z" fill="#b57a42"/><path d="M62 56l40-8v26L62 84z" fill="#9c6535"/>'
      + '<path d="M30 84V56c0-13 7-20 16-20s16 7 16 20v28z" fill="#ebcc92"/>'
      + '<path d="M6 96c0-8 9-12 20-12s20 4 20 12c-12 5-28 5-40 0z" fill="#ebcc92"/><path d="M6 96l1 5c11 4 27 4 38 0l1-5c-12 5-28 5-40 0z" fill="#b57a42"/>'
      + '<circle cx="98" cy="96" r="7" fill="#f6e2a0"/><circle cx="110" cy="90" r="6" fill="#f6e2a0"/>',
  },
  lemonloaf: {
    i: '<path d="M58 84V56c0-13 7-20 16-20s16 7 16 20v28z"/><path d="M74 36l-40-6c-10 0-16 8-16 18v26l40 10"/><path d="M58 56l-40-8"/>'
      + '<path d="M18 48c2 7 5 7 6 1 2 9 6 9 7 2 2 6 5 6 6 1 2 9 6 9 8 2 1 6 5 7 6 2 1 5 4 6 7 4"/>'
      + '<path d="M58 56c2 7 5 8 7 2 2 8 6 8 7 0 2 6 5 7 7 1 2 7 6 6 7 0 1 3 3 4 4-1"/>'
      + '<circle cx="68" cy="70" r="3"/><circle cx="80" cy="66" r="3"/><circle cx="74" cy="78" r="3"/><circle cx="84" cy="78" r="2.5"/><circle cx="64" cy="80" r="2.5"/>'
      + '<circle cx="104" cy="92" r="12"/><circle cx="104" cy="92" r="9"/><path d="M104 83v18M95 92h18M98 86l12 12M110 86L98 98"/>'
      + '<circle cx="22" cy="96" r="4.5"/><circle cx="32" cy="100" r="4.5"/><circle cx="14" cy="102" r="4"/><path d="M20 94l2 2 2-2M30 98l2 2 2-2"/>',
    p: SHADOW(60, 106, 54, 6)
      + '<path d="M74 36l-40-6c-10 0-16 8-16 18v26l40 10V56c0-13 7-20 16-20z" fill="#e2bf74"/><path d="M58 56l-40-8v26l40 10z" fill="#d4ab5c"/>'
      + '<path d="M58 84V56c0-13 7-20 16-20s16 7 16 20v28z" fill="#f6e6b4"/>'
      + '<path d="M74 36l-40-6c-10 0-16 8-16 18 2 7 5 7 6 1 2 9 6 9 7 2 2 6 5 6 6 1 2 9 6 9 8 2 1 6 5 7 6 2 1 5 4 6 7 4 2 7 5 8 7 2 2 8 6 8 7 0 2 6 5 7 7 1 2 7 6 6 7 0 1 3 3 4 4-1 0-13-7-20-16-20z" fill="#fffdf6"/>'
      + '<circle cx="68" cy="70" r="3" fill="#5f6fb5"/><circle cx="80" cy="66" r="3" fill="#5f6fb5"/><circle cx="74" cy="78" r="3" fill="#5f6fb5"/><circle cx="84" cy="78" r="2.5" fill="#5f6fb5"/><circle cx="64" cy="80" r="2.5" fill="#5f6fb5"/>'
      + '<circle cx="104" cy="92" r="12" fill="#f7d94e"/><circle cx="104" cy="92" r="9" fill="#fdf0a8"/>'
      + '<circle cx="22" cy="96" r="4.5" fill="#5f6fb5"/><circle cx="32" cy="100" r="4.5" fill="#6f7fc0"/><circle cx="14" cy="102" r="4" fill="#5f6fb5"/>',
  },
  cheesecake: {
    i: '<ellipse cx="58" cy="88" rx="50" ry="15"/><ellipse cx="58" cy="87" rx="40" ry="10"/>'
      + '<path d="M22 62l64-22 10 18z"/><path d="M22 62v20l74-8V58"/><path d="M22 76l74-8"/><path d="M26 79l1 1M36 78l1 1M48 77l1 1M60 76l1 1M72 74l1 1M84 73l1 1"/>'
      + '<circle cx="66" cy="48" r="5"/><circle cx="76" cy="46" r="4.5"/><circle cx="71" cy="54" r="4.5"/><path d="M64 46l2 2 2-2"/>'
      + '<path d="M78 42c2-6 7-8 12-6-2 6-6 8-12 6z"/><path d="M60 52c-4 2-6 6-4 10M82 54c2 3 2 6 0 8"/>'
      + '<path d="M112 100L86 92"/><path d="M86 92l-10-1M86 92l-9-4M86 92l-8-7"/>',
    p: SHADOW(60, 100, 50, 8)
      + '<ellipse cx="58" cy="88" rx="50" ry="15" fill="#f3eee4"/><path d="M10 92c12 14 84 14 96 0 2 18-98 18-96 0z" fill="#cfd8de"/>'
      + '<path d="M22 62l64-22 10 18z" fill="#fdf3d2"/><path d="M22 62v14l74-8V58z" fill="#f4dd9c"/><path d="M22 76v6l74-8v-6z" fill="#c2905a"/>'
      + '<path d="M58 50c6-6 22-8 28-2-2 8-6 12-14 12s-13-4-14-10z" fill="#e59aa0"/>'
      + '<circle cx="66" cy="48" r="5" fill="#c9414d"/><circle cx="76" cy="46" r="4.5" fill="#5f6fb5"/><circle cx="71" cy="54" r="4.5" fill="#c9414d"/><path d="M78 42c2-6 7-8 12-6-2 6-6 8-12 6z" fill="#7fa35a"/>',
  },
  cookie: {
    i: '<path d="M72 30c17-1 30 11 30 28 0 17-12 29-29 29-8 0-15-3-20-8"/><path d="M82 44l4 3M92 60l3 4M78 74l4 2"/>'
      + '<path d="M44 40c18-2 33 11 33 29s-13 31-31 31-32-13-32-31c0-16 12-28 30-29z"/>'
      + '<path d="M30 58c2-4 8-4 10 0s-2 8-6 7-5-4-4-7zM52 54c3-3 8-2 9 2s-3 6-7 5-4-5-2-7zM58 74c3-3 8-2 9 2s-3 7-7 5-4-5-2-7zM36 78c3-3 8-1 8 3s-4 6-7 4-3-5-1-7zM46 66l3 2"/>'
      + '<path d="M24 70l2 2M50 88l2 1M66 62l2 1M40 48l2 1"/>'
      + '<path d="M96 96l3 2M104 90l2 3M90 102l4 0"/><circle cx="106" cy="100" r="2"/>',
    p: SHADOW(60, 104, 48, 6)
      + '<path d="M72 30c17-1 30 11 30 28 0 17-12 29-29 29-8 0-15-3-20-8z" fill="#c9965a"/>'
      + '<path d="M44 40c18-2 33 11 33 29s-13 31-31 31-32-13-32-31c0-16 12-28 30-29z" fill="#deb074"/><path d="M60 94c12-6 18-18 16-32 4 18-4 32-16 32z" fill="#bd8648"/>'
      + '<path d="M30 58c2-4 8-4 10 0s-2 8-6 7-5-4-4-7zM52 54c3-3 8-2 9 2s-3 6-7 5-4-5-2-7zM58 74c3-3 8-2 9 2s-3 7-7 5-4-5-2-7zM36 78c3-3 8-1 8 3s-4 6-7 4-3-5-1-7z" fill="#5d3f2c"/>'
      + '<path d="M80 42l6 5-4 3zM90 58l5 6-5 1z" fill="#5d3f2c"/>',
  },

  // ---------- coffee things
  moka: {
    i: '<path d="M42 32h36l5 28H37z"/><path d="M40 32c4-9 36-9 40 0"/><circle cx="60" cy="20" r="4.5"/><path d="M42 34l-10-4 6 12"/>'
      + '<path d="M37 60h46v7H37z"/><path d="M38 67l-7 34h58l-7-34"/>'
      + '<path d="M52 32l-3 28M60 32v28M68 32l3 28M49 67l-4 34M60 67v34M71 67l4 34"/>'
      + '<path d="M83 36h9c6 0 8 3 8 8v12c0 4-3 6-7 6h-6"/>',
    p: SHADOW(60, 104, 34, 6)
      + '<path d="M42 32h36l5 28H37zM40 32c4-9 36-9 40 0z" fill="url(#g-metal)"/><path d="M37 60h46v7H37z" fill="#9aa2a8"/><path d="M38 67l-7 34h58l-7-34z" fill="url(#g-metal)"/>'
      + '<circle cx="60" cy="20" r="4.5" fill="#3f382f"/><path d="M83 36h9c6 0 8 3 8 8v12c0 4-3 6-7 6h-6z" fill="#5a5148"/>',
  },
  beans: {
    i: '<ellipse cx="38" cy="44" rx="13" ry="9" transform="rotate(-30 38 44)"/><path d="M28 50c6-2 6-8 10-9s6-5 10-6"/>'
      + '<ellipse cx="76" cy="38" rx="13" ry="9" transform="rotate(25 76 38)"/><path d="M65 33c5 4 9 2 12 5s7 3 10 5"/>'
      + '<ellipse cx="56" cy="72" rx="13" ry="9" transform="rotate(-10 56 72)"/><path d="M44 74c6-1 8-5 12-4s8-2 12-2"/>'
      + '<ellipse cx="90" cy="76" rx="12" ry="8" transform="rotate(50 90 76)"/><path d="M83 67c2 6 6 6 7 10s4 5 6 8"/>'
      + '<ellipse cx="26" cy="84" rx="11" ry="7.5" transform="rotate(35 26 84)"/><path d="M18 78c4 4 7 3 9 6s5 4 8 6"/>',
    p: '<ellipse cx="38" cy="44" rx="13" ry="9" transform="rotate(-30 38 44)" fill="#7a5236"/><ellipse cx="76" cy="38" rx="13" ry="9" transform="rotate(25 76 38)" fill="#8c6242"/>'
      + '<ellipse cx="56" cy="72" rx="13" ry="9" transform="rotate(-10 56 72)" fill="#6b4630"/><ellipse cx="90" cy="76" rx="12" ry="8" transform="rotate(50 90 76)" fill="#7a5236"/><ellipse cx="26" cy="84" rx="11" ry="7.5" transform="rotate(35 26 84)" fill="#8c6242"/>',
  },

  // ---------- small symbols
  sun: {
    i: '<circle cx="60" cy="60" r="16"/><path d="M60 30v-10M60 100v-10M30 60H20M100 60H90M39 39l-7-7M88 88l-7-7M81 39l7-7M32 88l7-7"/><path d="M52 54c3-4 8-5 12-3"/>',
    p: '<circle cx="60" cy="60" r="30" fill="#fbe7a6"/><circle cx="60" cy="60" r="19" fill="#f5c64f"/>',
  },
  olive: {
    i: '<path d="M22 94C44 74 70 52 100 32"/><path d="M42 76c-11-1-18-8-19-18 11 1 18 8 19 18zM58 62c-11-2-17-10-17-20 11 2 17 9 17 20zM76 49c-10-3-15-11-14-21 10 3 15 11 14 21zM50 72c2 11 10 17 20 17-2-10-9-17-20-17zM68 57c3 10 11 15 21 14-3-10-11-15-21-14z"/><path d="M42 76l-12-11M58 62l-10-12M76 49l-8-13M50 72l12 10M68 57l13 8"/><ellipse cx="90" cy="50" rx="6" ry="8" transform="rotate(35 90 50)"/><ellipse cx="80" cy="76" rx="5" ry="7" transform="rotate(-20 80 76)"/>',
    p: '<path d="M42 76c-11-1-18-8-19-18 11 1 18 8 19 18zM58 62c-11-2-17-10-17-20 11 2 17 9 17 20zM76 49c-10-3-15-11-14-21 10 3 15 11 14 21zM50 72c2 11 10 17 20 17-2-10-9-17-20-17zM68 57c3 10 11 15 21 14-3-10-11-15-21-14z" fill="#a3bb80"/><ellipse cx="90" cy="50" rx="6" ry="8" transform="rotate(35 90 50)" fill="#5f6f44"/><ellipse cx="80" cy="76" rx="5" ry="7" transform="rotate(-20 80 76)" fill="#6f8050"/>',
  },
  kiosk: {
    i: '<path d="M12 98h98"/><path d="M28 98V54h62v44"/><path d="M22 54l37-26 37 26z"/><path d="M28 54q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0"/>'
      + '<path d="M36 68h28v16H36zM50 68v16M34 84h32"/><path d="M72 68h12v30"/><circle cx="59" cy="40" r="4"/>'
      + '<path d="M96 98v-10h12v10"/><path d="M102 88c-8-8-7-16 0-22 7 6 8 14 0 22zM102 88c-10-2-14-7-14-13 7 1 12 5 14 13zM102 88c10-2 14-7 14-13-7 1-12 5-14 13z"/>'
      + '<path d="M38 66c3-4 6-4 8 0M52 66c3-4 6-4 8 0"/><path d="M14 98c0-6 3-9 7-9s6 3 6 9"/>',
    p: SHADOW(60, 102, 52, 5)
      + '<path d="M28 98V54h62v44z" fill="#c9dcb8"/><path d="M22 54l37-26 37 26z" fill="#e3ad92"/><path d="M28 54q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0q5 9 10.3 0z" fill="#fbf1d3"/>'
      + '<path d="M36 68h28v16H36z" fill="#fbf7ee"/><path d="M72 68h12v30H72z" fill="#9fb98a"/><path d="M96 98v-10h12v10z" fill="#d99a76"/>'
      + '<path d="M102 88c-8-8-7-16 0-22 7 6 8 14 0 22zM102 88c-10-2-14-7-14-13 7 1 12 5 14 13zM102 88c10-2 14-7 14-13-7 1-12 5-14 13z" fill="#86aa62"/><path d="M14 98c0-6 3-9 7-9s6 3 6 9z" fill="#86aa62"/>',
  },
  // Anja loves this one as it is, so it keeps the first, simpler drawing style.
  letter: {
    classic: true,
    i: '<path d="M26 44h68v46H26z"/><path d="M26 44l34 27 34-27"/><path d="M26 90l25-25M94 90L69 65"/>',
    p: '<path d="M26 44h68v46H26z" fill="#fbf1d3"/>',
  },
  lily: {
    i: '<path d="M60 104c-24 0-42-5-42-12s18-12 42-12 42 5 42 12-18 12-42 12z"/><path d="M60 92l22 10"/>'
      + '<path d="M60 86c-9-13-9-28 0-42 9 14 9 29 0 42z"/><path d="M58 87c-17-5-26-17-27-31 15 3 24 14 27 31zM62 87c17-5 26-17 27-31-15 3-24 14-27 31z"/><path d="M52 90c-14 1-26-4-33-14 13-3 26 3 33 14zM68 90c14 1 26-4 33-14-13-3-26 3-33 14z"/><path d="M60 80v-20M56 82l-12-14M64 82l12-14"/>',
    p: '<path d="M60 104c-24 0-42-5-42-12s18-12 42-12 42 5 42 12-18 12-42 12z" fill="#9cc08c"/><path d="M52 90c-14 1-26-4-33-14 13-3 26 3 33 14zM68 90c14 1 26-4 33-14-13-3-26 3-33 14z" fill="#eeb2c6"/><path d="M60 86c-9-13-9-28 0-42 9 14 9 29 0 42zM58 87c-17-5-26-17-27-31 15 3 24 14 27 31zM62 87c17-5 26-17 27-31-15 3-24 14-27 31z" fill="#f6cbd8"/>',
  },
  blueberry: {
    i: '<path d="M24 28c20 10 40 26 50 48"/><path d="M38 36c2-11 10-17 21-17-1 11-9 18-21 17zM52 48c-11 2-18 10-18 21 11-2 18-9 18-21z"/><path d="M38 36l14-11M52 48L40 62"/>'
      + '<circle cx="68" cy="74" r="10"/><circle cx="88" cy="82" r="10"/><circle cx="74" cy="96" r="10"/><path d="M65 71l3 3 3-3M85 79l3 3 3-3M71 93l3 3 3-3"/><path d="M62 78c1 3 3 5 6 6M82 86c1 3 3 5 6 6"/>',
    p: '<path d="M38 36c2-11 10-17 21-17-1 11-9 18-21 17zM52 48c-11 2-18 10-18 21 11-2 18-9 18-21z" fill="#a3bb80"/><circle cx="68" cy="74" r="10" fill="#6b7bc0"/><circle cx="88" cy="82" r="10" fill="#5a69b0"/><circle cx="74" cy="96" r="10" fill="#7786c8"/>',
  },
};

// ---------- builders: one way to draw a hot cup and one way to draw a cold glass,
// so the whole drinks menu looks like a set.

// art: 'heart' or 'leaf' poured into the top. cup: the colour of the cup itself.
const hotCup = ({ surface, art, cup, shade, small, extras = { i: '', p: '' } }) => {
  const shapes = {
    heart: 'M60 61c-10-5-14-9-10-12 3-2 8 0 10 3 2-3 7-5 10-3 4 3 0 7-10 12z',
    leaf: 'M60 46c9 2 14 6 11 10-3 3-8 4-11 7-3-3-8-4-11-7-3-4 2-8 11-10z',
    dot: 'M60 49c6 0 10 2 10 5s-4 5-10 5-10-2-10-5 4-5 10-5z',
  };
  const pour = shapes[art] || '';
  const veins = art === 'leaf' ? '<path d="M60 48v13M53 52q7 4 14 0M54 56q6 3 12 0"/>' : '';
  // An espresso cup is the same drawing, just smaller.
  const wrap = s => (small ? `<g transform="translate(20 34) scale(0.66)">${s}</g>` : s);
  return {
    i: wrap('<ellipse cx="60" cy="93" rx="47" ry="12"/><path d="M32 92c6 6 50 6 56 0"/>'
      + '<ellipse cx="60" cy="54" rx="33" ry="11"/><path d="M27 54c0 25 12 39 33 39s33-14 33-39"/>'
      + '<path d="M91 60c14-5 23 2 21 12-2 9-14 13-24 10"/><path d="M92 67c7-2 12 0 11 5-1 4-7 6-13 5"/>'
      + `<ellipse cx="60" cy="54" rx="28" ry="8.5"/>${pour ? `<path d="${pour}"/>` : '<path d="M42 55c6 3 14 4 22 3"/>'}${veins}`
      + '<path d="M46 34c-4-7 4-9 0-16M60 32c-4-7 4-9 0-16M74 34c-4-7 4-9 0-16"/>') + extras.i,
    p: wrap(SHADOW(62, 103, 46, 7)
      + '<ellipse cx="60" cy="93" rx="47" ry="12" fill="#f6f1e7"/><path d="M13 93c8 14 86 14 94 0 2 16-96 16-94 0z" fill="#c9d3da"/>'
      + `<path d="M27 54c0 25 12 39 33 39s33-14 33-39c-8 13-58 13-66 0z" fill="${cup}"/><path d="M70 91c14-5 21-18 23-37-1 23-9 34-23 37z" fill="${shade}"/>`
      + `<path d="M91 60c14-5 23 2 21 12-2 9-14 13-24 10l2-5c6 1 12-1 13-5 1-5-4-7-11-5z" fill="${cup}"/>`
      + `<ellipse cx="60" cy="54" rx="33" ry="11" fill="${cup}"/><ellipse cx="60" cy="54" rx="28" ry="8.5" fill="${surface}"/>${pour ? `<path d="${pour}" fill="#fff8ea"/>` : '<ellipse cx="60" cy="54" rx="28" ry="8.5" fill="none" stroke="#c9925a" stroke-width="3"/>'}`) + extras.p,
    h: wrap('<path d="M35 62c1 10 5 18 11 24" stroke-width="3.5"/><path d="M40 51c5-3 11-4 16-4" stroke-width="1.5"/>'),
  };
};

// A little pumpkin and a falling leaf, for the coffee that changes with the season.
const SEASON = {
  i: '<path d="M100 88c8-2 14 3 14 10s-6 11-14 11-14-4-14-11 6-12 14-10z"/><path d="M100 88c-4 5-4 16 0 21M100 88c4 5 4 16 0 21"/><path d="M100 88c0-4 2-6 5-7"/>'
    + '<path d="M14 30c2-9 9-13 17-11-1 9-7 13-17 11z"/><path d="M14 30l12-7"/>',
  p: '<path d="M100 88c8-2 14 3 14 10s-6 11-14 11-14-4-14-11 6-12 14-10z" fill="#ee9a3c"/><path d="M14 30c2-9 9-13 17-11-1 9-7 13-17 11z" fill="#d9763a"/>',
};

// stops: the liquid's colours from top to bottom. extras: the garnish, drawn as { i, p }.
const coldGlass = (id, stops, extras = { i: '', p: '' }) => ({
  defs: `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>`,
  i: '<ellipse cx="58" cy="32" rx="25" ry="6.5"/><path d="M33 32l5 66c0 6 40 6 40 0l5-66"/><ellipse cx="58" cy="44" rx="23.5" ry="5.5"/>'
    + '<path d="M42 52l11-2 2 11-11 2zM58 55l11-1 1 11-11 1zM47 68l10-2 2 10-10 2z"/><path d="M41 96c5 4 29 4 34 0"/>'
    + extras.i,
  p: SHADOW(60, 106, 32, 6)
    + `<path d="M34.5 44l3.5 54c0 6 40 6 40 0l3.5-54c-8 5-39 5-47 0z" fill="url(#${id})"/><ellipse cx="58" cy="44" rx="23.5" ry="5.5" fill="${stops[0][1]}"/>`
    + '<path d="M42 52l11-2 2 11-11 2zM58 55l11-1 1 11-11 1zM47 68l10-2 2 10-10 2z" fill="#ffffff" opacity="0.55"/>'
    + extras.p,
  h: '<path d="M40 50l3.5 42" stroke-width="3.5"/><path d="M73 60l-1.5 22" stroke-width="1.5"/>',
});

const STRAW = '<path d="M64 40L74 6"/><path d="M68 41L78 7"/>';
const CITRUS = (cx, cy) => ({
  i: `<circle cx="${cx}" cy="${cy}" r="14"/><circle cx="${cx}" cy="${cy}" r="10.5"/><path d="M${cx} ${cy - 10}v20M${cx - 10} ${cy}h20M${cx - 7} ${cy - 7}l14 14M${cx + 7} ${cy - 7}l-14 14"/>`,
  p: `<circle cx="${cx}" cy="${cy}" r="14" fill="#f29a1f"/><circle cx="${cx}" cy="${cy}" r="10.5" fill="#fcd581"/>`,
});
const MINT = '<path d="M52 30c0-10 5-15 13-15 0 9-5 14-13 15zM48 28c-7-5-8-12-4-18 7 4 8 11 4 18z"/>';
const MINT_P = '<path d="M52 30c0-10 5-15 13-15 0 9-5 14-13 15zM48 28c-7-5-8-12-4-18 7 4 8 11 4 18z" fill="#7fa35a"/>';
const BERRY = '<path d="M86 30c9-3 16 3 15 12-1 8-8 13-15 13s-14-5-15-13c-1-9 6-15 15-12z"/><path d="M86 30c-3-6-9-7-13-4 3 4 8 6 13 4zM86 30c3-6 9-7 13-4-3 4-8 6-13 4zM86 30v-7"/><path d="M80 40l1 1M88 38l1 1M84 47l1 1M92 45l1 1"/>';
const BERRY_P = '<path d="M86 30c9-3 16 3 15 12-1 8-8 13-15 13s-14-5-15-13c-1-9 6-15 15-12z" fill="#dc4f3f"/><path d="M86 30c-3-6-9-7-13-4 3 4 8 6 13 4zM86 30c3-6 9-7 13-4-3 4-8 6-13 4z" fill="#7fa35a"/>';
const citrus = CITRUS(84, 34);

// The yellow blossom vine that climbs over the cafe roof.
const VINE = [[60, 118, 4], [70, 110, 5], [80, 106, 3.5], [88, 98, 5], [99, 94, 4], [108, 86, 5], [118, 82, 3.5], [127, 74, 5], [138, 70, 4], [148, 62, 4.5], [64, 128, 4], [58, 138, 4.5], [66, 148, 3.5], [60, 160, 4.5], [68, 172, 3.5], [94, 108, 3.5], [114, 94, 3.5], [134, 80, 3.5], [158, 58, 3.5], [76, 120, 3.5]];
const vineInk = VINE.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')
  + VINE.filter((_, n) => n % 2 === 0).map(([x, y, r]) => `<path d="M${x + r} ${y + r}c4 0 7 2 8 6-4 0-7-2-8-6z"/>`).join('');
const vinePaint = VINE.map(([x, y, r], n) => `<circle cx="${x}" cy="${y}" r="${r + 1}" fill="${n % 3 ? '#f5c64f' : '#f9dc86'}"/>`).join('')
  + VINE.filter((_, n) => n % 2 === 0).map(([x, y, r]) => `<path d="M${x + r} ${y + r}c4 0 7 2 8 6-4 0-7-2-8-6z" fill="#86aa62"/>`).join('');

const NEW_ART = {
  // ---------- the cafe itself, for the top of the home page
  cafe: {
    vb: '0 0 360 300',
    i: '<path d="M8 264h344"/><path d="M72 264V120h216v144"/><path d="M58 122L180 46l122 76z"/><path d="M82 116l98-60 98 60"/>'
      + '<path d="M120 100l6-4M150 82l6-4M204 78l6 4M234 96l6 4M176 66l8 0"/>'
      + '<path d="M236 82V56h18v37"/><path d="M232 56h26"/>'
      + '<path d="M245 44c-3-5-10-1-6 4l6 6 6-6c4-5-3-9-6-4z"/><path d="M258 26c-2-3-6-1-4 3l4 4 4-4c2-4-2-6-4-3z"/>'
      + '<path d="M144 80h72v24h-72z"/>'
      + '<path d="M84 130h124l8 22H76z"/><path d="M100 130l-4 22M116 130l-3 22M132 130l-2 22M146 130v22M160 130l2 22M176 130l3 22M192 130l4 22"/>'
      + '<path d="M76 152q8 9 15.5 0t15.5 0 15.5 0 15.5 0 15.5 0 15.5 0 15.5 0 15.5 0 15.5 0"/>'
      + '<path d="M92 160h108v62H92z"/><path d="M146 160v62M92 188h108"/>'
      + '<path d="M98 178h42"/><path d="M102 178v-7h7v7M114 178v-7h7v7M126 178v-10h7v10"/><path d="M173 160v9"/><path d="M164 178c0-8 18-8 18 0z"/>'
      + '<path d="M154 222v-22h32v22M160 208h10M178 208v8"/>'
      + '<path d="M112 222v-12"/><path d="M112 212c-7-4-9-11-4-17 5 4 7 11 4 17zM112 212c7-4 9-11 4-17-5 4-7 11-4 17z"/>'
      + '<path d="M86 222h120v7H86z"/><path d="M122 222v-9h11v9M133 215h4v4h-4"/>'
      + '<path d="M184 222v-9h9v9"/><path d="M188.5 213v-11"/><circle cx="188.5" cy="199" r="3.5"/><circle cx="182" cy="204" r="3"/><circle cx="195" cy="204" r="3"/>'
      + '<path d="M100 229v35M116 229v35M132 229v35M148 229v35M164 229v35M180 229v35M196 229v35"/>'
      + '<path d="M226 264v-88c0-14 10-22 23-22s23 8 23 22v88"/><path d="M234 206v-28c0-9 6-14 15-14s15 5 15 14v28z"/><path d="M249 164v42"/>'
      + '<path d="M234 216h30v40h-30z"/><circle cx="265" cy="224" r="2.2"/><path d="M218 264h62"/>'
      + '<path d="M214 150v8"/><path d="M208 166c0-9 12-9 12 0z"/>'
      + '<path d="M288 138h20M305 138v5"/><circle cx="305" cy="155" r="12"/><path d="M299 152h10v4a5 5 0 0 1-10 0zM309 153h2v3h-2"/>'
      + '<path d="M26 264l-3-24h34l-3 24z"/><path d="M20 240h40"/>'
      + '<path d="M40 240c-2-18-14-27-27-29 0 16 9 27 27 29zM40 240c2-22 13-33 28-35-2 18-11 31-28 35zM40 240c-7-24-2-40 9-49 7 16 4 33-9 49z"/><path d="M40 240l-18-20M40 240l19-24M40 240l5-34"/>'
      + '<ellipse cx="324" cy="228" rx="23" ry="5.5"/><path d="M324 233v31M312 264h24"/><path d="M318 228v-9h10v9M328 221h3v4h-3"/>'
      + '<path d="M286 264v-24h14v24M286 240v-22q7-5 14 0v22"/>'
      + '<path d="M340 264l-2-12h16l-2 12z"/><path d="M346 252c-6-6-6-13 0-18 6 5 6 12 0 18z"/>'
      + '<path d="M58 122c-4 14-4 34 2 52"/>' + vineInk
      + '<path d="M300 50l5 4 5-4M318 40l4 3 4-3"/><path d="M92 264c0-5 2-7 4-7M206 264c0-4 2-6 4-6"/>',
    p: '<ellipse cx="180" cy="270" rx="172" ry="12" fill="#b4bfc8" opacity="0.7"/>'
      + '<path d="M72 264V120h216v144z" fill="#cfe0c0"/><path d="M86 229h120v35H86z" fill="#b3cba1"/>'
      + '<path d="M58 122L180 46l122 76z" fill="#e8b199"/><path d="M82 116l98-60 98 60z" fill="#f0c4ae"/>'
      + '<path d="M236 82V56h18v37z" fill="#d99a76"/>'
      + '<path d="M245 44c-3-5-10-1-6 4l6 6 6-6c4-5-3-9-6-4z" fill="#e58a8a"/><path d="M258 26c-2-3-6-1-4 3l4 4 4-4c2-4-2-6-4-3z" fill="#f0b0ac"/>'
      + '<path d="M144 80h72v24h-72z" fill="#fffaf0"/>'
      + '<path d="M84 130h124l8 22H76z" fill="#fbf1d3"/><path d="M84 130h16l-4 22H76zM116 130h16l-2 22h-17zM146 130h14l2 22h-16zM176 130h16l4 22h-17z" fill="#f0b4aa"/>'
      + '<path d="M92 160h108v62H92z" fill="#dcebf0"/><path d="M92 160h54v28H92z" fill="#f6ecd6"/><path d="M154 200h32v22h-32z" fill="#b9c2c8"/><path d="M164 178c0-8 18-8 18 0z" fill="#f5c64f"/>'
      + '<path d="M102 171h7v7h-7zM114 171h7v7h-7z" fill="#fffdf8"/><path d="M126 168h7v10h-7z" fill="#e8b199"/>'
      + '<path d="M112 212c-7-4-9-11-4-17 5 4 7 11 4 17zM112 212c7-4 9-11 4-17-5 4-7 11-4 17z" fill="#86aa62"/>'
      + '<path d="M86 222h120v7H86z" fill="#d6a868"/><path d="M122 213h11v9h-11z" fill="#fffdf8"/><path d="M184 213h9v9h-9z" fill="#b9cddd"/>'
      + '<circle cx="188.5" cy="199" r="4" fill="#f0b0ac"/><circle cx="182" cy="204" r="3.5" fill="#f5c64f"/><circle cx="195" cy="204" r="3.5" fill="#d9cfe6"/>'
      + '<path d="M226 264v-88c0-14 10-22 23-22s23 8 23 22v88z" fill="#f1cf6b"/><path d="M234 206v-28c0-9 6-14 15-14s15 5 15 14v28z" fill="#dcebf0"/><path d="M234 216h30v40h-30z" fill="#e6bd4c"/>'
      + '<path d="M208 166c0-9 12-9 12 0z" fill="#f5c64f"/><circle cx="305" cy="155" r="12" fill="#fffaf0"/><path d="M299 152h10v4a5 5 0 0 1-10 0z" fill="#b9814f"/>'
      + '<path d="M26 264l-3-24h34l-3 24z" fill="#d99a76"/><path d="M40 240c-2-18-14-27-27-29 0 16 9 27 27 29zM40 240c2-22 13-33 28-35-2 18-11 31-28 35z" fill="#86aa62"/><path d="M40 240c-7-24-2-40 9-49 7 16 4 33-9 49z" fill="#6f9552"/>'
      + '<ellipse cx="324" cy="228" rx="23" ry="5.5" fill="#fffaf0"/><path d="M318 219h10v9h-10z" fill="#f0cfd2"/><path d="M286 240h14v24h-14zM286 218q7-5 14 0v22h-14z" fill="#b9cddd"/>'
      + '<path d="M340 264l-2-12h16l-2 12z" fill="#d99a76"/><path d="M346 252c-6-6-6-13 0-18 6 5 6 12 0 18z" fill="#86aa62"/>'
      + vinePaint,
    h: '<path d="M158 166l-8 14M168 166l-12 20M100 196l10-8" stroke-width="2"/><path d="M240 172l6-5" stroke-width="2"/>',
    t: '<text x="180" y="98" class="sign-text">MORE</text>',
  },
  garden: {
    i: '<path d="M12 46C22 18 98 18 108 46z"/><path d="M12 46q8 8 16 0t16 0 16 0 16 0 16 0 16 0"/><path d="M60 25L36 46M60 25v22M60 25l24 21"/><circle cx="60" cy="22" r="2.5"/>'
      + '<path d="M60 48v24M60 84v22M50 106h20"/><ellipse cx="60" cy="78" rx="27" ry="6.5"/><path d="M33 78c0 6 54 6 54 0"/>'
      + '<path d="M48 76v-9h8v9"/><path d="M68 76v-8h7v8"/><path d="M71.5 68v-8"/><circle cx="71.5" cy="57" r="3"/><circle cx="66" cy="61" r="2.5"/><circle cx="77" cy="61" r="2.5"/>'
      + '<path d="M14 106V78h3v14h14v14M17 92v14"/><path d="M106 106V78h-3v14H89v14M103 92v14"/>'
      + '<path d="M2 106h116"/>',
    p: SHADOW(60, 110, 56, 6)
      + '<path d="M12 46C22 18 98 18 108 46z" fill="#fbf1d3"/><path d="M12 46C16 34 26 26 38 23L36 46zM60 21c8 0 16 1 23 4l1 21H60zM108 46c-2-8-6-13-12-17l-2 17z" fill="#f0b4aa"/>'
      + '<ellipse cx="60" cy="78" rx="27" ry="6.5" fill="#fffaf0"/><path d="M33 78c0 6 54 6 54 0v4c0 6-54 6-54 0z" fill="#dfe6ea"/>'
      + '<path d="M48 67h8v9h-8z" fill="#fbd27a"/><path d="M68 68h7v8h-7z" fill="#b9cddd"/><circle cx="71.5" cy="57" r="3.5" fill="#f0b0ac"/><circle cx="66" cy="61" r="3" fill="#f5c64f"/><circle cx="77" cy="61" r="3" fill="#d9cfe6"/>'
      + '<path d="M14 78h3v14h14v4H14zM106 78h-3v14H89v4h17z" fill="#a9c79a"/>',
  },

  // ---------- the menu, redrawn
  toast: {
    i: '<path d="M27 38c-9-13 11-20 33-18 22-2 42 5 33 18l2 54c0 7-4 9-11 9H36c-7 0-11-2-11-9z"/><path d="M34 42c-5-8 10-13 26-12 16-1 31 4 26 12l2 46c0 4-2 5-6 5H38c-4 0-6-1-6-5z"/>'
      + '<path d="M43 60c-4-13 11-24 26-20 13 3 21 16 15 28-5 11-19 15-30 11-8-3-10-10-11-19z"/><circle cx="64" cy="60" r="11.5"/>'
      + '<path d="M33 76c2-10 10-16 20-17-4 9-10 15-20 17zM37 85c4-9 12-14 22-14-5 8-12 13-22 14zM46 91c5-7 12-10 20-9-5 6-11 9-20 9z"/>'
      + '<circle cx="84" cy="84" r="7.5"/><path d="M80 82l3 2M86 80l-1 3M84 87l1-3"/><circle cx="41" cy="50" r="6"/><path d="M38 49l3 1M43 47l-1 3"/>'
      + '<path d="M74 34c3-6 9-8 14-5-3 6-8 8-14 5z"/><path d="M52 40l1 1M78 70l1 1M70 82l1 1M48 68l1 1M88 62l1 1"/>',
    p: SHADOW(62, 104, 44, 6)
      + '<path d="M27 38c-9-13 11-20 33-18 22-2 42 5 33 18l2 54c0 7-4 9-11 9H36c-7 0-11-2-11-9z" fill="#bd8442"/><path d="M34 42c-5-8 10-13 26-12 16-1 31 4 26 12l2 46c0 4-2 5-6 5H38c-4 0-6-1-6-5z" fill="#efd09a"/>'
      + '<path d="M33 76c2-10 10-16 20-17-4 9-10 15-20 17zM37 85c4-9 12-14 22-14-5 8-12 13-22 14zM46 91c5-7 12-10 20-9-5 6-11 9-20 9z" fill="#a8c868"/>'
      + '<path d="M43 60c-4-13 11-24 26-20 13 3 21 16 15 28-5 11-19 15-30 11-8-3-10-10-11-19z" fill="#fffdf8"/><circle cx="64" cy="60" r="11.5" fill="url(#g-yolk)"/>'
      + '<circle cx="84" cy="84" r="7.5" fill="#e0533d"/><circle cx="41" cy="50" r="6" fill="#e0533d"/><path d="M74 34c3-6 9-8 14-5-3 6-8 8-14 5z" fill="#7fa35a"/>',
    h: '<path d="M57 55c2-4 6-6 10-5" stroke-width="2.5"/><path d="M80 80l2-1" stroke-width="2"/>',
  },
  sandwich: {
    i: '<path d="M20 60c2-24 22-36 40-36s38 12 40 36z"/><path d="M44 34l3 2M60 30l3 1M76 36l3 2M52 44l3 1M70 46l3 1"/>'
      + '<path d="M16 62q6 9 11 0t11 0 11 0 11 0 11 0 11 0 11 0 11 0"/>'
      + '<path d="M22 70h22a3.5 3.5 0 0 1 0 7H22zM49 70h22a3.5 3.5 0 0 1 0 7H49zM76 70h22a3.5 3.5 0 0 1 0 7H76z"/>'
      + '<path d="M18 79c8-3 14 3 22 0s14 3 22 0 14 3 22 0 12 2 18 0v6H18z"/>'
      + '<path d="M20 86h80c0 12-10 17-40 17s-40-5-40-17z"/>'
      + '<path d="M60 28V6"/><ellipse cx="60" cy="13" rx="5" ry="6.5"/><circle cx="60" cy="11" r="1.3"/>',
    p: SHADOW(60, 106, 46, 6)
      + '<path d="M20 60c2-24 22-36 40-36s38 12 40 36z" fill="url(#g-bun)"/>'
      + '<path d="M16 62q6 9 11 0t11 0 11 0 11 0 11 0 11 0 11 0 11 0v6H16z" fill="#8fb85a"/>'
      + '<path d="M22 70h22a3.5 3.5 0 0 1 0 7H22zM49 70h22a3.5 3.5 0 0 1 0 7H49zM76 70h22a3.5 3.5 0 0 1 0 7H76z" fill="#e0533d"/>'
      + '<path d="M18 79c8-3 14 3 22 0s14 3 22 0 14 3 22 0 12 2 18 0v6H18z" fill="#fffdf4"/>'
      + '<path d="M20 86h80c0 12-10 17-40 17s-40-5-40-17z" fill="#d9a961"/>'
      + '<ellipse cx="60" cy="13" rx="5" ry="6.5" fill="#6f8050"/>',
    h: '<path d="M32 46c6-9 14-13 22-14" stroke-width="3"/>',
  },
  bowl: {
    i: '<path d="M16 62h88c0 27-18 42-44 42S16 89 16 62z"/><path d="M19 74c20 6 62 6 82 0"/><path d="M44 104c3 4 29 4 32 0"/>'
      + '<path d="M20 62c4-18 20-28 40-28s36 10 40 28"/>'
      + '<ellipse cx="38" cy="54" rx="8" ry="6" transform="rotate(-20 38 54)"/><ellipse cx="50" cy="46" rx="8" ry="6" transform="rotate(-10 50 46)"/><ellipse cx="63" cy="43" rx="8" ry="6"/>'
      + '<circle cx="38" cy="54" r="1.5"/><circle cx="50" cy="46" r="1.5"/><circle cx="63" cy="43" r="1.5"/>'
      + '<circle cx="78" cy="48" r="6"/><circle cx="88" cy="56" r="6"/><circle cx="75" cy="58" r="5.5"/><path d="M76 46l2 2 2-2M86 54l2 2 2-2"/>'
      + '<path d="M56 34c-1-9 4-14 12-15 1 8-4 13-12 15zM56 34c-7-5-9-11-6-17 6 3 9 9 6 17z"/>'
      + '<path d="M30 60l3-1M46 58l3 1M58 56l3-1M64 60l3 1M52 62l2-2"/>',
    p: SHADOW(60, 108, 44, 6)
      + '<path d="M20 62c4-18 20-28 40-28s36 10 40 28z" fill="#fffdf8"/>'
      + '<path d="M16 62h88c0 27-18 42-44 42S16 89 16 62z" fill="#f0c6cb"/><path d="M19 74c20 6 62 6 82 0l-1 6c-20 6-60 6-80 0z" fill="#fffaf2"/><path d="M72 102c16-5 28-18 32-40-2 26-14 37-32 40z" fill="#dba1aa"/>'
      + '<ellipse cx="38" cy="54" rx="8" ry="6" transform="rotate(-20 38 54)" fill="#f8e39a"/><ellipse cx="50" cy="46" rx="8" ry="6" transform="rotate(-10 50 46)" fill="#f8e39a"/><ellipse cx="63" cy="43" rx="8" ry="6" fill="#f8e39a"/>'
      + '<circle cx="78" cy="48" r="6" fill="#5868b4"/><circle cx="88" cy="56" r="6" fill="#6b7bc4"/><circle cx="75" cy="58" r="5.5" fill="#d9475a"/>'
      + '<path d="M56 34c-1-9 4-14 12-15 1 8-4 13-12 15zM56 34c-7-5-9-11-6-17 6 3 9 9 6 17z" fill="#7fa35a"/>',
    h: '<path d="M24 70c2 12 8 20 16 26" stroke-width="3"/>',
  },

  muffin: {
    i: '<path d="M34 66l7 38h38l7-38z"/><path d="M45 67l4 37M55 67l2 37M65 67l-1 37M75 67l-4 37"/>'
      + '<path d="M30 66c-7-10-1-23 11-25 3-11 15-16 25-12 11-4 23 4 23 15 9 5 10 16 1 22z"/>'
      + '<circle cx="46" cy="52" r="5"/><circle cx="62" cy="43" r="5"/><circle cx="77" cy="54" r="5"/><circle cx="60" cy="58" r="4"/><path d="M44 50l2 2 2-2M60 41l2 2 2-2M75 52l2 2 2-2"/>'
      + '<path d="M38 60l2 1M70 62l2-1M52 38l2 1M82 46l1 2"/>'
      + '<circle cx="100" cy="98" r="5"/><circle cx="110" cy="103" r="4.5"/><path d="M98 96l2 2 2-2"/>',
    p: SHADOW(62, 108, 42, 6)
      + '<path d="M34 66l7 38h38l7-38z" fill="#f3cfd3"/><path d="M66 66h20l-7 38H64z" fill="#dba1aa"/>'
      + '<path d="M30 66c-7-10-1-23 11-25 3-11 15-16 25-12 11-4 23 4 23 15 9 5 10 16 1 22z" fill="url(#g-bun)"/>'
      + '<circle cx="46" cy="52" r="5" fill="#5868b4"/><circle cx="62" cy="43" r="5" fill="#6b7bc4"/><circle cx="77" cy="54" r="5" fill="#5868b4"/><circle cx="60" cy="58" r="4" fill="#6b7bc4"/>'
      + '<circle cx="100" cy="98" r="5" fill="#5868b4"/><circle cx="110" cy="103" r="4.5" fill="#6b7bc4"/>',
    h: '<path d="M40 48c3-5 8-8 13-9" stroke-width="3"/>',
  },

  // ---------- drinks
  espresso: hotCup({ surface: '#5a3622', cup: '#fbf7ee', shade: '#d3dbe0', small: true }),
  macchiato: hotCup({ surface: '#6a4129', art: 'dot', cup: '#eab79e', shade: '#cf8f74', small: true }),
  americano: hotCup({ surface: '#3d2a1e', cup: '#c9dcea', shade: '#a3bccd' }),
  latte: hotCup({ surface: '#c99866', art: 'leaf', cup: '#f3e6b8', shade: '#dcc98a' }),
  mocha: hotCup({ surface: '#6b4630', art: 'heart', cup: '#d9cfe6', shade: '#b9a9cf' }),
  seasonal: hotCup({ surface: '#c98a4e', art: 'leaf', cup: '#f3bd86', shade: '#d8935a', extras: SEASON }),
  cappuccino: hotCup({ surface: '#b9814f', art: 'heart', cup: '#fbf7ee', shade: '#d3dbe0' }),
  flatwhite: hotCup({ surface: '#a8713f', art: 'leaf', cup: '#cfe0c0', shade: '#a3bd90' }),
  matcha: hotCup({ surface: '#9dbb5e', art: 'heart', cup: '#f3cfd3', shade: '#dba1aa' }),
  icedlatte: coldGlass('g-icedlatte', [[0, '#5e3923'], [0.45, '#b98658'], [1, '#f7ecd9']], { i: STRAW, p: '' }),
  icedmatcha: coldGlass('g-icedmatcha', [[0, '#7fa348'], [0.5, '#b7cf86'], [1, '#f8f4e6']], { i: STRAW, p: '' }),
  juice: coldGlass('g-orange', [[0, '#fde59a'], [1, '#f2941a']], { i: citrus.i + MINT, p: citrus.p + MINT_P }),
  smoothie: coldGlass('g-berry', [[0, '#f9d3d0'], [1, '#df6a78']], { i: BERRY + '<path d="M54 40L46 6"/><path d="M58 40L50 6"/>', p: BERRY_P }),
};

Object.assign(ART, NEW_ART);

const WASHES = [
  ['#cfdcc0', '#f3e6b8'], // lily pad green and morning light
  ['#d9cfe6', '#c9dcea'], // lilac and water
  ['#f0cfd2', '#f4d6bd'], // blossom and peach
  ['#c9dcea', '#cfdcc0'], // water and reeds
];

// Paint first, then the ink drawn twice a little apart, the way a quick pen sketch doubles its lines.
const icon = name => {
  const a = ART[name] || { i: '', p: '' };
  const box = a.vb || '0 0 120 120';
  if (a.classic) return `<svg class="ink ink-classic" viewBox="${box}" aria-hidden="true"><g class="paint" filter="url(#paint-soft)">${a.p}</g><g filter="url(#wobble)">${a.i}</g></svg>`;
  return `<svg class="ink" viewBox="${box}" aria-hidden="true">${a.defs ? `<defs>${a.defs}</defs>` : ''}<g class="paint" filter="url(#paint)">${a.p}</g><g class="hl" filter="url(#wobble2)">${a.h || ''}</g><g filter="url(#wobble)">${a.i}</g><g class="ink-2" filter="url(#wobble2)">${a.i}</g>${a.t || ''}</svg>`;
};

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

// Our own badge: a roped oval, a cup of coffee, and the sea underneath.
const CREST = `<svg class="ink crest" viewBox="0 0 160 200" aria-hidden="true">
  <defs><path id="crest-arc" d="M27 122A54 62 0 0 0 133 122"/></defs>
  <g filter="url(#wobble)">
    <ellipse cx="80" cy="100" rx="74" ry="94"/>
    <ellipse cx="80" cy="100" rx="66" ry="86"/>
    <ellipse cx="80" cy="100" rx="70" ry="90" stroke-width="5" stroke-dasharray="0.9 3.8"/>
    <g transform="translate(48 70) scale(0.56)">${ART.cappuccino.i}</g>
    <path d="M40 136c7-9 13-9 20 0s13 9 20 0 13-9 20 0 13 9 20 0"/>
    <path d="M54 146c6-8 12-8 18 0s12 8 18 0 12-8 18 0"/>
  </g>
  <text x="80" y="66" class="crest-name">MORE</text>
  <text class="crest-small"><textPath href="#crest-arc" startOffset="50%">CAFÉ &amp; BRUNCH · MARCELLUS · KASTAV</textPath></text>
</svg>`;

document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="g-juice" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe08a"/><stop offset="1" stop-color="#f29a1f"/></linearGradient>
  <linearGradient id="g-smoothie" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c1bd"/><stop offset="1" stop-color="#e0787c"/></linearGradient>
  <radialGradient id="g-yolk" cx="0.4" cy="0.35" r="0.7"><stop offset="0" stop-color="#fbc54a"/><stop offset="1" stop-color="#ee8f1f"/></radialGradient>
  <linearGradient id="g-bun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9c078"/><stop offset="1" stop-color="#c98f47"/></linearGradient>
  <linearGradient id="g-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e6e9eb"/><stop offset="1" stop-color="#a9b1b7"/></linearGradient>
  <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4"/>
    <feDisplacementMap in="SourceGraphic" scale="2.4"/>
  </filter>
  <filter id="wobble2" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="19"/>
    <feDisplacementMap in="SourceGraphic" scale="3.6"/>
  </filter>
  <filter id="paint-soft" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="8" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="7"/>
    <feGaussianBlur stdDeviation="0.5"/>
  </filter>
  <filter id="paint" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="8" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" result="moved"/>
    <feGaussianBlur in="moved" stdDeviation="0.6" result="soft"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="3" seed="23" result="grain"/>
    <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.2 1.42" result="pool"/>
    <feComposite in="soft" in2="pool" operator="in" result="mottled"/>
    <feMorphology in="soft" operator="erode" radius="1.3" result="inner"/>
    <feComposite in="soft" in2="inner" operator="out" result="rim"/>
    <feComponentTransfer in="rim" result="edge"><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
    <feMerge><feMergeNode in="mottled"/><feMergeNode in="edge"/></feMerge>
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
