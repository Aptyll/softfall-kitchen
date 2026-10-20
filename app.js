'use strict';
// Two views off one list (kitchen.js): the board (#/) and one dish (#/<id>).
const DISHES = window.KITCHEN.dishes;
const STAGES = [['board', 'ON THE BOARD'], ['cooking', 'COOKING'], ['served', 'SERVED']];
const STAGE_NAME = Object.fromEntries(STAGES);
const app = document.getElementById('app');
const zoom = document.getElementById('zoom');

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const day = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][m - 1] + ' ' + d + (y !== 2026 ? ' ' + y : '');
};
const dot = (stage) => `<span class="dot" style="background:var(--${stage})"></span>`;

function cardHtml(d) {
  if (d.stage === 'board') return `<div class="card idea"><div class="name">${esc(d.name)}</div><div class="line">${esc(d.line)}</div></div>`;
  const meta = [d.patch ? 'PATCH ' + d.patch : '', d.rounds.length + (d.rounds.length === 1 ? ' ROUND' : ' ROUNDS')].filter(Boolean);
  return `<a class="card" href="#/${d.id}">
    ${d.cover ? `<div class="pic"><img src="${d.cover}" alt="" loading="lazy"></div>` : ''}
    <div class="body"><div class="name">${esc(d.name)}</div><div class="line">${esc(d.line)}</div>
    <div class="meta"><span>${meta.join(' · ')}</span><span>${day(d.date)}</span></div></div></a>`;
}

function renderBoard() {
  document.title = 'Softfall Kitchen';
  app.innerHTML = `<div class="board">${STAGES.map(([k, name]) => {
    const ds = DISHES.filter((d) => d.stage === k);
    return `<section class="col ${k}-col"><h2>${dot(k)}${name}<span class="n">${ds.length}</span></h2>${ds.map(cardHtml).join('')}</section>`;
  }).join('')}</div>`;
}

function roundHtml(r) {
  const label = `<div class="label"><b>${esc(r.name.toUpperCase())}</b><span>${day(r.date)}</span></div>`;
  if (r.video) {
    return `<div class="round">${label}<video src="${r.video}" poster="${r.poster || ''}" controls playsinline preload="none"></video>
      ${r.link ? `<a class="watch" href="${r.link}" target="_blank" rel="noopener">WATCH ON YOUTUBE</a>` : ''}</div>`;
  }
  return `<div class="round${r.served ? ' served' : ''}">${label}<img src="${r.img}" alt="${esc(r.name)}" loading="lazy" data-zoom>
    ${r.note ? `<div class="note">${esc(r.note)}</div>` : ''}</div>`;
}

function renderDish(d) {
  document.title = d.name + ' · Softfall Kitchen';
  const made = DISHES.filter((x) => x.stage !== 'board');
  app.innerHTML = `<div class="dish">
    <aside class="list"><a class="back" href="#/">‹ THE BOARD</a><h3>DISHES</h3>
      ${made.map((x) => `<a href="#/${x.id}" class="${x === d ? 'on' : ''}">${dot(x.stage)}${esc(x.name.toUpperCase())}</a>`).join('')}</aside>
    <article>
      <div class="dish-head"><h1>${esc(d.name.toUpperCase())}</h1>
        <span class="stage" style="color:var(--${d.stage})">${dot(d.stage)}${STAGE_NAME[d.stage]}${d.patch ? ' · ' + d.patch : ''}</span></div>
      <p class="dish-line">${esc(d.line)}</p>
      <section class="rounds">${d.rounds.map(roundHtml).join('')}</section>
    </article></div>`;
  // a very tall sheet is capped to the screen; click opens it whole
  for (const img of app.querySelectorAll('.round img')) {
    const fit = () => { if (img.naturalHeight > img.naturalWidth * 1.4) img.parentElement.classList.add('tall'); };
    if (img.complete) fit(); else img.addEventListener('load', fit);
  }
}

function route() {
  zoom.hidden = true;
  const id = location.hash.replace(/^#\/?/, '');
  const d = DISHES.find((x) => x.id === id && x.stage !== 'board');
  if (d) renderDish(d); else renderBoard();
  window.scrollTo(0, 0);
}

app.addEventListener('click', (e) => {
  const img = e.target.closest('[data-zoom]');
  if (!img) return;
  zoom.innerHTML = `<img src="${img.src}" alt="">`;
  zoom.hidden = false;
});
zoom.addEventListener('click', () => { zoom.hidden = true; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') zoom.hidden = true; });
window.addEventListener('hashchange', route);
route();
