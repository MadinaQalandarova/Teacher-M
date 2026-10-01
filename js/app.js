/* Teacher-M — dvigatel: navigatsiya, dars ko'rinishi, quiz, baholash, playground, ustoz sahifasi.
   Darslar js/lessons-*.js dan, imtihon js/exam.js dan keladi.
   Ikonkalar — toza SVG (har tizimda bir xil chiroyli ko'rinadi). */
const LS = "teacher_m_v1";
let DB = { done: {}, scores: {}, theme: "dark" };
try { const r = localStorage.getItem(LS); if (r) DB = Object.assign(DB, JSON.parse(r)); } catch (e) { console.warn(e); }
function save() { localStorage.setItem(LS, JSON.stringify(DB)); }
document.documentElement.dataset.theme = DB.theme || "dark";
const $ = s => document.querySelector(s);

/* ---------- SVG ikonkalar ---------- */
const I = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>',
  cap: '<svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v5"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h13"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="M8 8l-4 4 4 4"/><path d="M16 8l4 4-4 4"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>',
  pencil: '<svg viewBox="0 0 24 24"><path d="M17 3l4 4L8 20l-5 1 1-5z"/></svg>',
  checksq: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8.5 12.5l2.5 2.5 5-5.5"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  img: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M4 18l5-5 3 3 3-3 5 5"/></svg>',
  board: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="12" rx="2"/><path d="M12 16v4M8 20h8"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};

const LESSONS = [...HTML_LESSONS, ...CSS_LESSONS, ...JS_LESSONS];
/* Dars raqamlari avtomatik (ro'yxat tartibidan) — yangi dars qo'shilsa ham buzilmaydi */
LESSONS.forEach((l, i) => { l.d = i + 1; });

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function toast(m) { const w = $("#toasts"); const d = document.createElement("div"); d.className = "toast"; d.textContent = m; w.appendChild(d); setTimeout(() => d.remove(), 2600); }
function openPlay(code) { $("#pg").classList.add("open"); if (code) $("#pgCode").value = code; runPlay(); }
function runPlay() { $("#pgFrame").srcdoc = $("#pgCode").value; }
$("#pgRun").onclick = runPlay;
$("#pgClose").onclick = () => $("#pg").classList.remove("open");
$("#pg").addEventListener("mousedown", e => { if (e.target.id === "pg") $("#pg").classList.remove("open"); });
$("#pgCopy").onclick = () => { navigator.clipboard.writeText($("#pgCode").value); toast("Nusxalandi ✅"); };
$("#playBtn").onclick = () => openPlay('<h1>Salom! 👋</h1>\n<style>h1{color:#14b8a6;font-family:sans-serif}</style>');
$("#playBtn").innerHTML = I.play + "<span>Sinash</span>";
$("#menuBtn").innerHTML = I.menu;
function paintThemeBtn() { $("#themeBtn").innerHTML = DB.theme === "dark" ? I.sun : I.moon; }
$("#themeBtn").onclick = () => { DB.theme = DB.theme === "dark" ? "light" : "dark"; save(); document.documentElement.dataset.theme = DB.theme; paintThemeBtn(); };
paintThemeBtn();
$("#menuBtn").onclick = () => { $("#sidebar").classList.add("open"); $("#backdrop").hidden = false; };
$("#backdrop").onclick = () => { $("#sidebar").classList.remove("open"); $("#backdrop").hidden = true; };
$("#q").addEventListener("input", e => renderNav(e.target.value.trim().toLowerCase()));

let cur = "home";
function byId(id) { return LESSONS.find(l => l.id === id); }
function order() { return LESSONS.map(l => l.id); }
function doneCount() { return LESSONS.filter(l => DB.done[l.id]).length; }
function pct() { return LESSONS.length ? Math.round(doneCount() / LESSONS.length * 100) : 0; }

function renderNav(filter) {
  const nav = $("#nav");
  let h = "";
  h += '<div class="mod">Start <span class="cnt">1</span></div>';
  h += '<button class="item' + (cur === "home" ? " active" : "") + '" data-go="home"><span class="n">' + I.home + '</span><span class="t">Bosh sahifa & 2 oylik reja</span></button>';
  h += '<button class="item' + (cur === "exam" ? " active" : "") + '" data-go="exam"><span class="n">' + I.cap + '</span><span class="t">Yakuniy imtihon</span>' + (DB.done.exam ? '<span class="s">✅</span>' : "") + '</button>';
  h += '<button class="item' + (cur === "guide" ? " active" : "") + '" data-go="guide"><span class="n">' + I.board + '</span><span class="t">Ustoz uchun</span></button>';
  const mods = [["html", "HTML — skelet", "1–2-hafta", "#f97316"], ["css", "CSS — dizayn", "3–4-hafta", "#3b82f6"], ["js", "JavaScript — jonlantirish", "5–8-hafta", "#eab308"]];
  mods.forEach(([m, t, s, c]) => {
    const list = LESSONS.filter(l => l.mod === m && (!filter || (l.title + l.id).toLowerCase().includes(filter)));
    if (filter && !list.length) return;
    const dc = list.filter(l => DB.done[l.id]).length;
    h += '<div class="mod"><span class="dot" style="background:' + c + '"></span>' + t + ' <span class="cnt">' + dc + '/' + LESSONS.filter(l => l.mod === m).length + '</span></div>';
    h += '<div style="font-size:11px;color:var(--faint);padding:0 10px 4px">' + s + '</div>';
    list.forEach(l => {
      const sc = DB.scores[l.id];
      h += '<button class="item' + (cur === l.id ? " active" : "") + (DB.done[l.id] ? " done" : "") + '" data-go="' + l.id + '"><span class="n">' + (DB.done[l.id] ? "✓" : l.d) + '</span><span class="t">' + esc(l.title) + '</span>' + (sc != null ? '<span class="s">' + sc + '</span>' : "") + '</button>';
    });
  });
  nav.innerHTML = h;
  nav.querySelectorAll("[data-go]").forEach(b => b.onclick = () => { go(b.dataset.go); $("#sidebar").classList.remove("open"); $("#backdrop").hidden = true; });
  $("#pBar").style.width = pct() + "%";
  $("#pTxt").textContent = pct() + "% (" + doneCount() + "/" + LESSONS.length + ")";
}

function go(id) { cur = id; renderNav($("#q").value.trim().toLowerCase()); render(); }
$("#nextBtn").onclick = () => {
  if (cur === "home") { if (LESSONS[0]) go(LESSONS[0].id); return; }
  if (cur === "exam") { go("home"); return; }
  if (cur === "guide") { go("home"); return; }
  const o = order(); const i = o.indexOf(cur);
  if (i >= 0 && i < o.length - 1) go(o[i + 1]); else go("exam");
};

function codeBlock(code) {
  return '<div class="code"><div class="code-h"><span class="d" style="background:#f87171"></span><span class="d" style="background:#fbbf24"></span><span class="d" style="background:#4ade80"></span><span>Misol</span><button data-copy>📋 Nusxalash</button><button data-try style="background:linear-gradient(135deg,#14b8a6,#0d9488);color:#fff">▶ Sinab ko\'rish</button></div><pre>' + esc(code) + '</pre></div>';
}

function render() {
  const v = $("#view");
  if (cur === "home") return renderHome(v);
  if (cur === "exam") return renderExam(v);
  if (cur === "guide") return renderGuide(v);
  const l = byId(cur);
  if (!l) { cur = "home"; return renderHome(v); }
  $("#crumbs").innerHTML = 'Dars ' + l.d + ' / <b>' + esc(l.title) + '</b>';
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a);letter-spacing:.06em">' + l.mod.toUpperCase() + ' • ' + l.d + '-DARS • ⏱ ' + l.time + '</div>';
  h += '<h1>' + esc(l.title) + '</h1><p>' + l.goal + '</p>';
  h += '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn btn-p" data-act="play">' + I.play + ' Shu dars kodini sinash</button>' + (DB.done[l.id] ? '<span class="btn btn-g">✓ Bajarildi (' + (DB.scores[l.id] || "") + ' ball)</span>' : "") + '</div></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.book + '</span><span>Sodda tushuntirish</span></h2>' + l.theory + '</div>';
  if (l.visual) h += '<div class="visual">' + l.visual + '</div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.code + '</span><span>Misol kod — ko\'chirib sinab ko\'ring</span></h2>' + codeBlock(l.code) + '</div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.star + '</span><span>Esda saqlang (oltin qoidalar)</span></h2><ul>' + l.keys.map(k => '<li>' + k + '</li>').join("") + '</ul></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.pencil + '</span><span>Amaliy topshiriq (uyga vazifa)</span></h2><p>' + l.task + '</p></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.checksq + '</span><span>Quiz — o\'zingizni sinang <span style="font-size:12px;color:var(--dim)">(70+ ball = dars yopiladi)</span></span></h2><div id="quiz">';
  l.quiz.forEach((q, i) => {
    h += '<div class="quiz-q" data-q="' + i + '"><p>' + (i + 1) + '. ' + esc(q.q) + '</p>';
    q.opts.forEach((o, j) => { h += '<label><input type="radio" name="q' + i + '" value="' + j + '"/> <span>' + esc(o) + '</span></label>'; });
    h += '<div class="q-exp" id="exp' + i + '"></div></div>';
  });
  h += '</div><button class="btn btn-p" id="checkBtn">' + I.checksq + ' Tekshirish</button><div class="score" id="scoreBox"></div></div>';
  h += '<div class="lnav"><button class="btn btn-g" id="prevB">← Oldingi</button><button class="btn btn-p" id="nextB">Keyingi →</button></div>';
  v.innerHTML = h;
  v.querySelectorAll("[data-copy]").forEach(b => b.onclick = () => { navigator.clipboard.writeText(l.code); toast("Kod nusxalandi ✅"); });
  v.querySelectorAll("[data-try]").forEach(b => b.onclick = () => openPlay(l.code));
  const pb = v.querySelector('[data-act="play"]'); if (pb) pb.onclick = () => openPlay(l.code);
  $("#checkBtn").onclick = () => checkQuiz(l);
  $("#prevB").onclick = () => { const o = order(); const i = o.indexOf(l.id); if (i > 0) go(o[i - 1]); else go("home"); };
  $("#nextB").onclick = () => { const o = order(); const i = o.indexOf(l.id); if (i < o.length - 1) go(o[i + 1]); else go("exam"); };
  document.querySelector(".content").scrollTop = 0;
}

function checkQuiz(l) {
  let right = 0;
  l.quiz.forEach((q, i) => {
    const sel = document.querySelector('input[name="q' + i + '"]:checked');
    const box = document.getElementById("exp" + i);
    if (sel && Number(sel.value) === q.a) { right++; box.className = "q-exp ok"; box.textContent = "✅ To'g'ri! " + q.why; }
    else { box.className = "q-exp no"; box.textContent = "❌ Noto'g'ri. To'g'ri javob: " + q.opts[q.a] + " — " + q.why; }
  });
  const ball = Math.round(right / l.quiz.length * 100);
  const sb = document.getElementById("scoreBox");
  sb.className = "score show " + (ball >= 70 ? "pass" : "fail");
  sb.textContent = ball >= 70 ? ("🎉 Tabriklaymiz! " + ball + " ball — dars yopildi ✅") : ("📚 " + ball + " ball — 70 kerak. Yuqorini qayta o'qing va qayta urining!");
  DB.scores[l.id] = Math.max(DB.scores[l.id] || 0, ball);
  if (ball >= 70 && !DB.done[l.id]) { DB.done[l.id] = 1; toast("Dars yopildi! 🎉"); confetti(); }
  save(); renderNav($("#q").value.trim().toLowerCase());
}

function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = document.createElement("canvas");
  cv.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:none";
  document.body.appendChild(cv);
  cv.width = innerWidth; cv.height = innerHeight;
  const cx = cv.getContext("2d");
  const cols = ["#2dd4bf", "#5eead4", "#22d3ee", "#a78bfa", "#f59e0b", "#f472b6"];
  const ps = Array.from({ length: 90 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .3, vx: (Math.random() - .5) * 11, vy: -(Math.random() * 10 + 5), s: Math.random() * 7 + 4, c: cols[Math.random() * cols.length | 0] }));
  const t0 = performance.now();
  (function f(t) {
    const e = t - t0;
    cx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach(p => { p.vy += .32; p.x += p.vx; p.y += p.vy; cx.globalAlpha = Math.max(0, 1 - e / 1300); cx.fillStyle = p.c; cx.fillRect(p.x, p.y, p.s, p.s * .6); });
    if (e < 1400) requestAnimationFrame(f); else cv.remove();
  })(t0);
}

function renderHome(v) {
  $("#crumbs").textContent = "Bosh sahifa";
  const total = LESSONS.length;
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a);letter-spacing:.06em">O\'QUV PLATFORMASI • 2 OY • 0 DAN</div>';
  h += '<h1>HTML • CSS • JavaScript ni <span class="grad">0 dan o\'rganamiz</span> 🚀</h1>';
  h += '<p>2 oyda noldan frontend asoslarini o\'rganamiz: har darsda <b>sodda tushuntirish + rasm + misol + jonli sinash + topshiriq + quiz</b> bor. 70+ ball to\'plasangiz, dars "bajarildi" bo\'lib boradi. Internet kerak emas.</p>';
  h += '<div class="grid3"><div class="stat"><b>' + total + '</b><span>jami dars</span></div><div class="stat"><b>' + doneCount() + '</b><span>bajarildi</span></div><div class="stat"><b>' + pct() + '%</b><span>progress</span></div></div>';
  h += '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:6px"><button class="btn btn-p" id="startB">' + I.play + ' Boshlash — 1-dars</button><button class="btn btn-g" id="resetB">Progressni tozalash</button></div></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.cal + '</span><span>2 oylik reja (hafta-hafta)</span></h2><table class="plan"><tr><th>Hafta</th><th>Mavzu</th><th>Darslar</th></tr><tr><td>1–2</td><td><span class="dot" style="background:#f97316;display:inline-block;vertical-align:middle"></span> HTML — sayt skeleti</td><td>1–9: teglar, atributlar, ro\'yxat, jadval, forma, semantika</td></tr><tr><td>3–4</td><td><span class="dot" style="background:#3b82f6;display:inline-block;vertical-align:middle"></span> CSS — dizayn</td><td>10–17: rang, box model, flex, grid, responsive</td></tr><tr><td>5–8</td><td><span class="dot" style="background:#eab308;display:inline-block;vertical-align:middle"></span> JS — jonlantirish</td><td>18–25: o\'zgaruvchi, if, sikl, funksiya, DOM, loyiha</td></tr></table></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.book + '</span><span>Baholash tizimi</span></h2><ul><li>Har darsda 3–4 savollik quiz — 100 ballik tizimda.</li><li><b>70+ ball</b> = dars yopildi ✓ va yon menyuda ✓ chiqadi.</li><li>Barcha darslar + yakuniy imtihon = kurs tugadi 🎓.</li><li>Natijalar brauzerda saqlanadi.</li></ul></div>';
  v.innerHTML = h;
  $("#startB").onclick = () => { if (LESSONS[0]) go(LESSONS[0].id); };
  $("#resetB").onclick = () => { if (confirm("Progress o'chirilsinmi?")) { DB = { done: {}, scores: {}, theme: DB.theme }; save(); renderNav(""); renderHome(v); toast("Tozalandi ♻"); } };
  document.querySelector(".content").scrollTop = 0;
}

/* ---------- Ustoz uchun (darsda ko'rsatilmaydi) ---------- */
function renderGuide(v) {
  $("#crumbs").innerHTML = 'Yordam / <b>Ustoz uchun</b>';
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a)">FAQAT USTOZ UCHUN — DARSDA TV DA KO\'RSATMANG</div>';
  h += '<h1>Ustoz uchun metodika</h1><p>Har darsni qanday o\'tish bo\'yicha maslahatlar shu yerda. O\'quvchilar dars sahifasida buni ko\'rmaydi.</p></div>';
  h += '<div class="card"><h2 class="ic"><span class="e">' + I.star + '</span><span>3 oltin maslahat</span></h2><ul><li>Har darsni avval jonli ko\'rsating ("Sinab ko\'rish" bilan).</li><li>O\'quvchidan kodni tushunib ko\'chirib yozishni so\'rang — yodlatmang.</li><li>Quizdan o\'tolmagan o\'quvchi bilan nazariyani 5 daqiqada qayta takrorlang.</li></ul></div>';
  const mods = [["html", "HTML — skelet"], ["css", "CSS — dizayn"], ["js", "JavaScript — jonlantirish"]];
  mods.forEach(([m, t]) => {
    h += '<div class="card"><h2 class="ic"><span class="e">' + I.book + '</span><span>' + t + '</span></h2>';
    LESSONS.filter(l => l.mod === m).forEach(l => {
      h += '<p style="margin-top:10px"><b>' + l.d + '-dars: ' + esc(l.title) + ' (' + l.time + ')</b><br><span style="color:var(--dim)">' + l.teacher + '</span></p>';
    });
    h += '</div>';
  });
  v.innerHTML = h;
  document.querySelector(".content").scrollTop = 0;
}

function renderExam(v) {
  $("#crumbs").innerHTML = 'Yakuniy / <b>Imtihon</b>';
  if (!EXAM.length) { v.innerHTML = '<div class="card"><h2>Yakuniy imtihon tez kunda qo\'shiladi</h2><p>Hozircha darslarni tugating.</p></div>'; return; }
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a)">YAKUNIY IMTIHON • 10 SAVOL</div><h1>Kurs imtihoni</h1><p>Barcha modullar bo\'yicha 10 savol. 70+ ball = kursni tugatdingiz! Avval kamida 12 ta darsni tugating — shunda imtihon oson bo\'ladi.</p></div><div class="card"><div id="quiz">';
  EXAM.forEach((q, i) => {
    h += '<div class="quiz-q" data-q="' + i + '"><p>' + (i + 1) + '. ' + esc(q.q) + '</p>';
    q.opts.forEach((o, j) => { h += '<label><input type="radio" name="eq' + i + '" value="' + j + '"/> <span>' + esc(o) + '</span></label>'; });
    h += '<div class="q-exp" id="eexp' + i + '"></div></div>';
  });
  h += '</div><button class="btn btn-p" id="echeck">' + I.checksq + ' Imtihonni tekshirish</button><div class="score" id="escore"></div></div>';
  v.innerHTML = h;
  $("#echeck").onclick = () => {
    let r = 0;
    EXAM.forEach((q, i) => {
      const s = document.querySelector('input[name="eq' + i + '"]:checked');
      const b = document.getElementById("eexp" + i);
      if (s && Number(s.value) === q.a) { r++; b.className = "q-exp ok"; b.textContent = "✅ To'g'ri! " + q.why; }
      else { b.className = "q-exp no"; b.textContent = "❌ To'g'ri javob: " + q.opts[q.a] + " — " + q.why; }
    });
    const ball = Math.round(r / EXAM.length * 100);
    const sb = document.getElementById("escore");
    sb.className = "score show " + (ball >= 70 ? "pass" : "fail");
    sb.textContent = ball >= 70 ? ("🏆 " + ball + " ball — KURSNI TUGATDINGIZ! Tabriklaymiz! 🎉") : ("📚 " + ball + " ball — 70 kerak. Darslarni takrorlab qayta urining!");
    DB.scores.exam = Math.max(DB.scores.exam || 0, ball);
    if (ball >= 70) DB.done.exam = 1;
    save(); renderNav(""); if (ball >= 70) confetti();
  };
  document.querySelector(".content").scrollTop = 0;
}
renderNav(""); render();
