// Ink and watercolour drawings, all original and drawn here as SVG.
// Each drawing has two layers: i = the ink lines, p = the paint underneath.
// Add data-art="name" to any element and the drawing appears inside it.

const SHADOW = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#b4bfc8" opacity="0.75"/>`;

const ART = {
  // ---------- the menu
  toast: {
    i: '<ellipse cx="60" cy="78" rx="52" ry="24"/><ellipse cx="60" cy="77" rx="42" ry="18"/>'
      + '<path d="M29 66c-3-12 8-17 21-15l33-5c11-1 16 7 12 16l-2 16c-21 9-45 9-61 2z"/><path d="M32 80l1 6c18 7 40 6 60-2l0-6"/>'
      + '<path d="M36 68c5-9 13-11 20-7M37 74c6-8 13-9 19-6M40 79c5-6 11-7 16-5"/>'
      + '<path d="M54 60c-3-11 12-16 23-10 11 5 11 19 0 23-10 4-21-2-23-13z"/><circle cx="67" cy="61" r="6.5"/><path d="M63 59c1-2 3-3 5-3"/>'
      + '<circle cx="42" cy="59" r="5"/><path d="M40 57l4 4M44 57l-4 4"/><circle cx="85" cy="72" r="5"/><path d="M83 70l4 4M87 70l-4 4"/>'
      + '<path d="M78 49c2-6 7-8 12-6-2 5-6 8-12 6z"/><path d="M48 84l.5.5M58 86l.5.5M72 82l.5.5M64 76l.5.5"/>',
    p: SHADOW(62, 96, 50, 9)
      + '<ellipse cx="60" cy="78" rx="52" ry="24" fill="#f3eee4"/><path d="M12 82c10 18 86 18 96 0 2 22-98 22-96 0z" fill="#cfd8de"/>'
      + '<path d="M29 66c-3-12 8-17 21-15l33-5c11-1 16 7 12 16l-2 16c-21 9-45 9-61 2z" fill="#d8ab6c"/><path d="M32 80l1 6c18 7 40 6 60-2l0-6c-21 9-45 9-61 2z" fill="#b98548"/>'
      + '<path d="M33 64c8-12 20-12 26-4l-2 20c-9 3-18 2-25-2z" fill="#b3cc7a"/>'
      + '<path d="M54 60c-3-11 12-16 23-10 11 5 11 19 0 23-10 4-21-2-23-13z" fill="#fffdf6"/><circle cx="67" cy="61" r="6.5" fill="#f2a431"/>'
      + '<circle cx="42" cy="59" r="5" fill="#dc5641"/><circle cx="85" cy="72" r="5" fill="#dc5641"/><path d="M78 49c2-6 7-8 12-6-2 5-6 8-12 6z" fill="#7fa35a"/>',
  },
  sandwich: {
    i: '<ellipse cx="60" cy="88" rx="50" ry="13"/>'
      + '<path d="M22 54c14-15 60-18 76-6l0 8-76 4z"/><path d="M22 60q7 6 13 0t13-1 13 0 13-1 12 0 12-2"/>'
      + '<path d="M26 66h18a3 3 0 0 1 0 6H26zM50 65h18a3 3 0 0 1 0 6H50zM74 64h18a3 3 0 0 1 0 6H74z"/>'
      + '<path d="M22 74l76-4"/><path d="M22 74l0 8c16 8 58 7 76-3l0-9"/>'
      + '<path d="M60 44V16"/><ellipse cx="60" cy="24" rx="5" ry="6.5"/><path d="M60 21v2"/>'
      + '<path d="M30 50l1 1M44 46l1 1M58 44l1 1M74 45l1 1M86 49l1 1"/>'
      + '<path d="M100 84c4-7 10-8 15-5-3 6-8 8-15 5zM98 90c6-2 11 0 13 5-6 2-10 0-13-5z"/>',
    p: SHADOW(62, 98, 50, 8)
      + '<ellipse cx="60" cy="88" rx="50" ry="13" fill="#f3eee4"/>'
      + '<path d="M22 54c14-15 60-18 76-6l0 8-76 4z" fill="#d6a868"/><path d="M22 58l76-4 0 6-76 4z" fill="#8fb25a"/>'
      + '<path d="M22 64l76-4 0 10-76 4z" fill="#fff8e4"/>'
      + '<path d="M26 66h18a3 3 0 0 1 0 6H26zM50 65h18a3 3 0 0 1 0 6H50zM74 64h18a3 3 0 0 1 0 6H74z" fill="#dc5641"/>'
      + '<path d="M22 74l76-4 0 9c-18 10-60 11-76 3z" fill="#d6a868"/>'
      + '<ellipse cx="60" cy="24" rx="5" ry="6.5" fill="#6f8050"/><path d="M100 84c4-7 10-8 15-5-3 6-8 8-15 5zM98 90c6-2 11 0 13 5-6 2-10 0-13-5z" fill="#86aa62"/>',
  },
  bowl: {
    i: '<ellipse cx="58" cy="54" rx="42" ry="15"/><path d="M16 54c1 28 18 44 42 44s41-16 42-44"/><path d="M44 98c2 4 26 4 28 0"/>'
      + '<path d="M26 56c9-7 18 3 27-3s18-4 28 2"/>'
      + '<circle cx="42" cy="50" r="6"/><circle cx="42" cy="50" r="1.5"/><circle cx="54" cy="46" r="6"/><circle cx="54" cy="46" r="1.5"/>'
      + '<circle cx="70" cy="47" r="4.5"/><circle cx="79" cy="52" r="4.5"/><circle cx="68" cy="56" r="4.5"/><path d="M68 45l2 2 2-2M77 50l2 2 2-2"/>'
      + '<path d="M60 40c1-7 6-10 12-9-1 6-5 10-12 9z"/><path d="M30 50l3-1M34 60l3 1M84 60l3-1M56 60l3 1M48 58l2-2"/>'
      + '<path d="M24 70c2 8 6 14 12 18"/><path d="M96 104l16-10"/><ellipse cx="92" cy="106" rx="7" ry="4" transform="rotate(-30 92 106)"/>',
    p: SHADOW(60, 102, 44, 8)
      + '<path d="M16 54c1 28 18 44 42 44s41-16 42-44c-10 14-74 14-84 0z" fill="#b9cddd"/><path d="M70 96c14-4 24-16 28-34-2 20-12 32-28 34z" fill="#8fa9bf"/>'
      + '<ellipse cx="58" cy="54" rx="42" ry="15" fill="#fffdf6"/>'
      + '<circle cx="42" cy="50" r="6" fill="#f6e2a0"/><circle cx="54" cy="46" r="6" fill="#f6e2a0"/>'
      + '<circle cx="70" cy="47" r="4.5" fill="#5f6fb5"/><circle cx="79" cy="52" r="4.5" fill="#dc5641"/><circle cx="68" cy="56" r="4.5" fill="#5f6fb5"/>'
      + '<path d="M60 40c1-7 6-10 12-9-1 6-5 10-12 9z" fill="#7fa35a"/><ellipse cx="92" cy="106" rx="7" ry="4" transform="rotate(-30 92 106)" fill="#d6a868"/>',
  },
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
  juice: {
    i: '<ellipse cx="56" cy="34" rx="22" ry="6"/><path d="M34 34l5 62c0 5 34 5 34 0l5-62"/><ellipse cx="56" cy="46" rx="20" ry="5"/>'
      + '<path d="M42 56l10-2 2 10-10 2zM58 62l10-1 1 10-10 1zM46 76l9-2 2 9-9 2zM62 80l8 0 0 8-8 0z"/>'
      + '<circle cx="80" cy="36" r="13"/><circle cx="80" cy="36" r="10"/><path d="M80 26v20M70 36h20M73 29l14 14M87 29L73 43"/>'
      + '<path d="M50 34L42 8"/><path d="M58 30c0-9 5-14 12-14 0 8-4 13-12 14zM54 28c-6-5-7-11-3-17 6 4 7 10 3 17z"/>'
      + '<path d="M40 60c1 12 2 22 3 30"/>',
    p: SHADOW(58, 102, 30, 6)
      + '<path d="M36 46l4 50c0 5 32 5 32 0l4-50c-6 6-34 6-40 0z" fill="url(#g-juice)"/><ellipse cx="56" cy="46" rx="20" ry="5" fill="#fbe08a"/>'
      + '<path d="M42 56l10-2 2 10-10 2zM58 62l10-1 1 10-10 1zM46 76l9-2 2 9-9 2zM62 80l8 0 0 8-8 0z" fill="#fff6d8"/>'
      + '<circle cx="80" cy="36" r="13" fill="#f5a623"/><circle cx="80" cy="36" r="10" fill="#fbd27a"/>'
      + '<path d="M58 30c0-9 5-14 12-14 0 8-4 13-12 14zM54 28c-6-5-7-11-3-17 6 4 7 10 3 17z" fill="#7fa35a"/>',
  },
  smoothie: {
    i: '<path d="M38 30c-2 0-2 6 0 6h36c2 0 2-6 0-6z"/><path d="M40 36c-6 8-6 14-4 22l4 38c0 5 32 5 32 0l4-38c2-8 2-14-4-22"/>'
      + '<path d="M37 54c8 4 30 4 38 0"/><path d="M44 66c3-3 6 3 9 0M58 78c3-3 6 3 9 0M46 88c3-3 6 3 9 0"/>'
      + '<path d="M62 30l10-22"/><path d="M40 62c1 10 2 20 3 30"/>'
      + '<path d="M94 82c8-2 14 4 13 12-1 7-7 11-13 11s-12-4-13-11c-1-8 5-14 13-12z"/><path d="M94 82c-3-5-8-6-12-4 3 4 7 6 12 4zM94 82c3-5 8-6 12-4-3 4-7 6-12 4zM94 82v-6"/><path d="M88 92l1 1M96 90l1 1M92 98l1 1M100 96l1 1"/>',
    p: SHADOW(62, 106, 44, 6)
      + '<path d="M37 54l3 42c0 5 32 5 32 0l3-42c-8 4-30 4-38 0z" fill="url(#g-smoothie)"/><path d="M40 36c-6 8-6 14-3 18 8 4 30 4 38 0 3-4 3-10-3-18z" fill="#fbe6e4"/>'
      + '<path d="M94 82c8-2 14 4 13 12-1 7-7 11-13 11s-12-4-13-11c-1-8 5-14 13-12z" fill="#dc5641"/><path d="M94 82c-3-5-8-6-12-4 3 4 7 6 12 4zM94 82c3-5 8-6 12-4-3 4-7 6-12 4z" fill="#7fa35a"/>',
  },

  // ---------- coffee things
  cup: {
    i: '<ellipse cx="56" cy="88" rx="46" ry="13"/><ellipse cx="56" cy="87" rx="30" ry="7"/>'
      + '<ellipse cx="56" cy="52" rx="30" ry="10"/><path d="M26 52c0 22 12 36 30 36s30-14 30-36"/><path d="M85 58c12-4 20 2 18 11-2 8-12 12-22 10"/><path d="M86 64c6-2 11 0 10 5-1 4-6 6-12 5"/>'
      + '<path d="M56 46c-8 0-14 4-14 7 4 3 10 4 14 2 4 2 10 1 14-2 0-3-6-7-14-7z"/><path d="M56 48v8M50 51l6 2 6-2"/>'
      + '<path d="M44 34c-4-7 4-9 0-16M56 32c-4-7 4-9 0-16M68 34c-4-7 4-9 0-16"/>',
    p: SHADOW(58, 98, 46, 7)
      + '<ellipse cx="56" cy="88" rx="46" ry="13" fill="#f3eee4"/><path d="M26 52c0 22 12 36 30 36s30-14 30-36c-8 12-52 12-60 0z" fill="#fbf7ee"/><path d="M66 86c12-4 18-16 20-32-1 20-8 30-20 32z" fill="#cfd8de"/>'
      + '<ellipse cx="56" cy="52" rx="28" ry="9" fill="#b9814f"/><path d="M56 46c-8 0-14 4-14 7 4 3 10 4 14 2 4 2 10 1 14-2 0-3-6-7-14-7z" fill="#f6e6cc"/>',
  },
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
    i: '<path d="M12 98h98"/><path d="M28 98V54h62v44"/><path d="M22 54l37-26 37 26z"/><path d="M28 54q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0"/>'
      + '<path d="M36 68h28v16H36zM50 68v16M34 84h32"/><path d="M72 68h12v30"/><circle cx="59" cy="40" r="4"/>'
      + '<path d="M96 98v-10h12v10"/><path d="M102 88c-8-8-7-16 0-22 7 6 8 14 0 22zM102 88c-10-2-14-7-14-13 7 1 12 5 14 13zM102 88c10-2 14-7 14-13-7 1-12 5-14 13z"/>'
      + '<path d="M38 66c3-4 6-4 8 0M52 66c3-4 6-4 8 0"/><path d="M14 98c0-6 3-9 7-9s6 3 6 9"/>',
    p: SHADOW(60, 102, 52, 5)
      + '<path d="M28 98V54h62v44z" fill="#c9dcb8"/><path d="M22 54l37-26 37 26z" fill="#e3ad92"/><path d="M28 54q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0q5 9 10.300 0z" fill="#fbf1d3"/>'
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

const WASHES = [
  ['#cfdcc0', '#f3e6b8'], // lily pad green and morning light
  ['#d9cfe6', '#c9dcea'], // lilac and water
  ['#f0cfd2', '#f4d6bd'], // blossom and peach
  ['#c9dcea', '#cfdcc0'], // water and reeds
];

// Paint first, then the ink drawn twice a little apart, the way a quick pen sketch doubles its lines.
const icon = name => {
  const a = ART[name] || { i: '', p: '' };
  if (a.classic) return `<svg class="ink ink-classic" viewBox="0 0 120 120" aria-hidden="true"><g class="paint" filter="url(#paint-soft)">${a.p}</g><g filter="url(#wobble)">${a.i}</g></svg>`;
  return `<svg class="ink" viewBox="0 0 120 120" aria-hidden="true"><g class="paint" filter="url(#paint)">${a.p}</g><g filter="url(#wobble)">${a.i}</g><g class="ink-2" filter="url(#wobble2)">${a.i}</g></svg>`;
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
    <g transform="translate(48 70) scale(0.56)">${ART.cup.i}</g>
    <path d="M40 136c7-9 13-9 20 0s13 9 20 0 13-9 20 0 13 9 20 0"/>
    <path d="M54 146c6-8 12-8 18 0s12 8 18 0 12-8 18 0"/>
  </g>
  <text x="80" y="66" class="crest-name">MORE</text>
  <text class="crest-small"><textPath href="#crest-arc" startOffset="50%">CAFÉ &amp; BRUNCH · MARCELLUS · KASTAV</textPath></text>
</svg>`;

document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="g-juice" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe08a"/><stop offset="1" stop-color="#f29a1f"/></linearGradient>
  <linearGradient id="g-smoothie" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c1bd"/><stop offset="1" stop-color="#e0787c"/></linearGradient>
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
