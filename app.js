(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const I = n => `<i class="ic">${window.ICONS[n] || ''}</i>`;
  const B = window.BRANCHES, S = window.SIGNATURE, FM = window.FULL_MENU;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const isNV = n => /chicken|egg|prawn|kheema/i.test(n);
  const MAIN = B.find(b => b.whatsapp) || B[0];
  const waLink = (num, text) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

  // ---------- Loader ----------
  addEventListener('load', () => setTimeout(() => document.body.classList.add('ready'), 300));
  setTimeout(() => document.body.classList.add('ready'), 3000);

  // ---------- Nav ----------
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  $('#burger').onclick = () => $('#navlinks').classList.toggle('open');
  $$('#navlinks a').forEach(a => a.onclick = () => $('#navlinks').classList.remove('open'));

  // ---------- Embers ----------
  const cv = $('#embers'), cx = cv.getContext('2d');
  let W, H, ps = [];
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  addEventListener('resize', size); size();
  const spawn = () => ({ x: Math.random() * W, y: H + 10, r: .8 + Math.random() * 2.4, vy: .4 + Math.random() * 1.3,
    dx: (Math.random() - .5) * .6, a: .9, c: Math.random() > .5 ? '255,106,0' : '255,204,31' });
  (function tick() {
    if (reduce) return;
    cx.clearRect(0, 0, W, H);
    if (ps.length < (W < 600 ? 30 : 65)) ps.push(spawn());
    for (const p of ps) {
      p.y -= p.vy; p.x += p.dx + Math.sin(p.y / 40) * .3; p.a -= .0028;
      cx.beginPath(); cx.fillStyle = `rgba(${p.c},${Math.max(p.a, 0)})`;
      cx.shadowBlur = 10; cx.shadowColor = `rgb(${p.c})`; cx.arc(p.x, p.y, p.r, 0, 7); cx.fill();
    }
    ps = ps.filter(p => p.a > 0 && p.y > -10);
    requestAnimationFrame(tick);
  })();

  // ---------- Hero cursor & parallax (hero only) ----------
  const hero = $('#hero'), cur = $('#cursor');
  hero.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px';
    if (reduce) return;
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    $$('.fl').forEach((s, i) => s.style.translate = `${x * (20 + i * 9)}px ${y * (20 + i * 9)}px`);
    $$('.pol').forEach((s, i) => s.style.translate = `${x * -(12 + i * 6)}px ${y * -(12 + i * 6)}px`);
  });

  // ---------- Marquee & gallery ----------
  const t = window.TAGLINES.map(x => `<span>${I('flame')}${x}</span>`).join('');
  $('#marquee').innerHTML = t + t;
  const gimgs = ['supreme-biryani','firewood','shahi-kaju','signboard','palak-paneer','birthday','dum-biryani','bhimavaram','kaju-tomato','donation','mega-moment','celebration']
    .map(n => `<img src="assets/${n}.png" alt="" loading="lazy">`).join('');
  $('#gtrack').innerHTML = gimgs + gimgs;

  // ---------- Branches ----------
  const tabs = $('#tabs'), box = $('#branch');
  tabs.innerHTML = B.map((b, i) => `<button class="tab" role="tab" data-i="${i}"><span class="dot ${b.status === 'soon' ? 'soon' : ''}"></span><span>${b.city}<small>${b.cityTe}</small></span></button>`).join('');
  function showBranch(i) {
    const b = B[i], soon = b.status === 'soon';
    $$('.tab', tabs).forEach((el, k) => { el.classList.toggle('on', k === i); el.setAttribute('aria-selected', k === i); });
    const call = b.tel ? `<a class="btn hot" href="tel:${b.tel}">${I('phone')}${b.phone}</a>` : '';
    const wa = b.whatsapp ? `<a class="btn wa-btn" target="_blank" rel="noopener" href="${waLink(b.whatsapp, 'Hi Chiranjeevi Dhaba ' + b.city + '!')}">${I('whatsapp')}WhatsApp</a>` : '';
    const dir = `<a class="btn ghost" target="_blank" rel="noopener" href="${b.maps}">${soon ? I('insta') + 'Follow for updates' : I('nav') + 'Directions'}</a>`;
    const photo = soon ? `<div class="bphoto soon"><span class="brandlogo">${window.BRAND_LOGO}</span></div>` : `<div class="bphoto"><img src="${b.photo}" alt="${b.city} branch"></div>`;
    const map = soon || !b.lat
      ? `<div class="soonbox">NEXT BRANCH LOADING…</div>`
      : `<iframe loading="lazy" title="Map of ${b.city} branch" src="https://maps.google.com/maps?q=${b.lat},${b.lng}&z=15&output=embed"></iframe>`;
    box.innerHTML = `
      <div>
        <span class="badge">${b.badge}</span>
        <h3>${b.city}<em>${b.cityTe}</em></h3>
        <ul class="info">
          <li>${I('pin')}<span>${b.address}</span></li>
          <li>${I('clock')}<span>${b.hours}</span></li>
          <li>${I('rupee')}<span>${b.price}</span></li>
          <li>${I('star')}<span>${b.rating} · ${b.reviews}</span></li>
        </ul>
        <div class="chips">${b.features.map(f => `<span>${f}</span>`).join('')}</div>
        <div class="btnrow">${call}${wa}${dir}</div>
      </div>
      <div class="bmedia">${photo}<div class="mapbox">${map}</div></div>`;
    box.classList.remove('swap'); void box.offsetWidth; box.classList.add('swap');
    const tel = b.tel || MAIN.tel, wan = b.whatsapp || MAIN.whatsapp;
    $('#fabCall').href = 'tel:' + tel;
    $('#fabWa').href = waLink(wan, 'Hi Chiranjeevi Dhaba! I would like to place an order.');
  }
  tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) showBranch(+b.dataset.i); });
  showBranch(0);

  // ---------- Mugguru Monagallu ----------
  $('#mugguru').innerHTML = window.MUGGURU.map((m, i) => `<div class="mcard"><div class="n">#${i + 1}</div><h4>${m.name}</h4><b>₹${m.price}</b></div>`).join('');

  // ---------- Signature ----------
  const grid = $('#sigGrid');
  function renderSig(f) {
    grid.innerHTML = S.filter(d => f === 'all' || (f === 'nv') === isNV(d.name)).map(d => {
      const nv = isNV(d.name);
      const ph = d.img
        ? `<div class="ph"><img src="${d.img}" alt="${d.name}" loading="lazy"></div>`
        : `<div class="ph fire"><span class="te-big">${d.te}</span>${I('flame')}</div>`;
      return `<article class="dish">
        <span class="tg">${d.tag}</span><span class="pr">₹${d.price}</span>${ph}
        <div class="body"><h4><span class="vg ${nv ? 'nv' : 'v'}"></span>${d.name}</h4><div class="te">${d.te}</div><p>${d.desc}</p>
        <a class="order" target="_blank" rel="noopener" href="${waLink(MAIN.whatsapp, `Hi Chiranjeevi Dhaba! I'd like to order: 1 x ${d.name} (₹${d.price})`)}">${I('whatsapp')}Order</a></div>
      </article>`;
    }).join('');
  }
  renderSig('all');
  $('#sigFilters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#sigFilters button').forEach(x => x.classList.toggle('on', x === b)); renderSig(b.dataset.f);
  });
  grid.addEventListener('mousemove', e => {
    const c = e.target.closest('.dish'); if (!c || reduce) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  });
  grid.addEventListener('mouseout', e => { const c = e.target.closest('.dish'); if (c && !c.contains(e.relatedTarget)) c.style.transform = ''; });

  // ---------- Full menu ----------
  let q = '', vt = 'all';
  function renderMenu() {
    const html = FM.filter(c => vt === 'all' || c.type === vt).map(c => {
      const rows = c.items.filter(([n]) => n.toLowerCase().includes(q)).map(([n, p, s]) =>
        `<div class="mrow ${s ? 'fav' : ''}"><span class="vg ${c.type}"></span><span class="nm">${n}</span><span class="dots"></span><span class="p">₹${p}</span></div>`).join('');
      return rows ? `<div class="mcat"><h3>${c.cat}</h3><span class="te">${c.te}</span>${rows}</div>` : '';
    }).join('');
    $('#menuBoard').innerHTML = html || `<p class="empty">No dish found for "${q}". Try "chicken" or "paneer".</p>`;
  }
  renderMenu();
  $('#menuSearch').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); renderMenu(); });
  $('#vegToggle').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#vegToggle button').forEach(x => x.classList.toggle('on', x === b)); vt = b.dataset.t; renderMenu();
  });
  $('#menuWa').href = waLink(MAIN.whatsapp, 'Hi Chiranjeevi Dhaba! I would like to order:\n');

  // ---------- Reviews (no fake star counts; overall rating shown above) ----------
  $('#revs').innerHTML = window.REVIEWS.map(r => `<div class="rev reveal"><q>${r[2]}</q>
    <div class="who"><span class="av">${r[0][0]}</span><div><b>${r[0]}</b><small>${r[1] === 'Instagram' ? I('insta') + 'Instagram' : I('google') + 'Google review · ' + r[1]}</small></div></div></div>`).join('');

  // ---------- Footer ----------
  $('#fcols').innerHTML = B.filter(b => b.status !== 'soon').map(b => `<div><h4>${b.city} · ${b.area}</h4>
    <p>${I('pin')}<span>${b.address}</span></p>${b.tel ? `<p>${I('phone')}<a href="tel:${b.tel}">${b.phone}</a></p>` : ''}<p>${I('clock')}<span>${b.hours}</span></p></div>`).join('');
  $('#yr').textContent = new Date().getFullYear();
  const dev = window.DEVELOPER || {};
  if (dev.name) $('#credit').innerHTML = `Designed & Developed by ${dev.link ? `<a href="${dev.link}" target="_blank" rel="noopener">${dev.name}</a>` : `<b>${dev.name}</b>`}`;

  // ---------- Reveal ----------
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));

  // ---------- Counters ----------
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || ''; let n = 0;
    const id = setInterval(() => { n += Math.max(1, to / 50); if (n >= to) { n = to; clearInterval(id); } el.textContent = Math.round(n).toLocaleString('en-IN') + suf; }, 30);
  }));
  $$('[data-count]').forEach(el => cio.observe(el));

  // ---------- Telugu / English ----------
  let te = false;
  $('#lang').onclick = () => {
    te = !te; $('#lang').textContent = te ? 'English' : 'తెలుగు';
    $$('[data-en]').forEach(el => el.textContent = te ? el.dataset.te : el.dataset.en);
  };
})();
