/* Teacher-M — dvigatel: navigatsiya, dars ko'rinishi, quiz, baholash, playground.
   Darslar js/lessons-*.js dan, imtihon js/exam.js dan keladi. */
const LS = "teacher_m_v1";
let DB = { done: {}, scores: {}, theme: "light" };
try { const r = localStorage.getItem(LS); if (r) DB = Object.assign(DB, JSON.parse(r)); } catch (e) { console.warn(e); }
function save() { localStorage.setItem(LS, JSON.stringify(DB)); }
document.documentElement.dataset.theme = DB.theme || "light";
const $ = s => document.querySelector(s);

const LESSONS = [...HTML_LESSONS, ...CSS_LESSONS, ...JS_LESSONS];

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function toast(m) { const w = $("#toasts"); const d = document.createElement("div"); d.className = "toast"; d.textContent = m; w.appendChild(d); setTimeout(() => d.remove(), 2600); }
function openPlay(code) { $("#pg").classList.add("open"); if (code) $("#pgCode").value = code; runPlay(); }
function runPlay() { $("#pgFrame").srcdoc = $("#pgCode").value; }
$("#pgRun").onclick = runPlay;
$("#pgClose").onclick = () => $("#pg").classList.remove("open");
$("#pg").addEventListener("mousedown", e => { if (e.target.id === "pg") $("#pg").classList.remove("open"); });
$("#pgCopy").onclick = () => { navigator.clipboard.writeText($("#pgCode").value); toast("Nusxalandi ✅"); };
$("#playBtn").onclick = () => openPlay('<h1>Salom! 👋</h1>\n<style>h1{color:#6366f1;font-family:sans-serif}</style>');
$("#themeBtn").onclick = () => { DB.theme = DB.theme === "dark" ? "light" : "dark"; save(); document.documentElement.dataset.theme = DB.theme; $("#themeBtn").textContent = DB.theme === "dark" ? "☀️" : "🌙"; };
$("#themeBtn").textContent = DB.theme === "dark" ? "☀️" : "🌙";
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
  h += '<div class="mod">🏠 Start <span class="cnt">1</span></div>';
  h += '<button class="item' + (cur === "home" ? " active" : "") + '" data-go="home"><span class="n">🏠</span><span class="t">Bosh sahifa & 2 oylik reja</span></button>';
  h += '<button class="item' + (cur === "exam" ? " active" : "") + '" data-go="exam"><span class="n">🎓</span><span class="t">Yakuniy imtihon</span>' + (DB.done.exam ? '<span class="s">✅</span>' : "") + '</button>';
  const mods = [["html", "🟧 HTML — skelet", "1–2-hafta"], ["css", "🟦 CSS — dizayn", "3–4-hafta"], ["js", "🟨 JavaScript — jonlantirish", "5–8-hafta"]];
  mods.forEach(([m, t, s]) => {
    const list = LESSONS.filter(l => l.mod === m && (!filter || (l.title + l.id).toLowerCase().includes(filter)));
    if (filter && !list.length) return;
    const dc = list.filter(l => DB.done[l.id]).length;
    h += '<div class="mod">' + t + ' <span class="cnt">' + dc + '/' + LESSONS.filter(l => l.mod === m).length + '</span></div>';
    h += '<div style="font-size:11px;color:var(--faint);padding:0 10px 4px">' + s + '</div>';
    list.forEach(l => {
      const sc = DB.scores[l.id];
      h += '<button class="item' + (cur === l.id ? " active" : "") + (DB.done[l.id] ? " done" : "") + '" data-go="' + l.id + '"><span class="n">' + (DB.done[l.id] ? "✓" : l.n) + '</span><span class="t">' + esc(l.title) + '</span>' + (sc != null ? '<span class="s">' + sc + '</span>' : "") + '</button>';
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
  const o = order(); const i = o.indexOf(cur);
  if (i >= 0 && i < o.length - 1) go(o[i + 1]); else go("exam");
};

function codeBlock(code) {
  return '<div class="code"><div class="code-h"><span class="d" style="background:#f87171"></span><span class="d" style="background:#fbbf24"></span><span class="d" style="background:#4ade80"></span><span>Misol</span><button data-copy>📋 Nusxalash</button><button data-try style="background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff">▶ Sinab ko\'rish</button></div><pre>' + esc(code) + '</pre></div>';
}

function render() {
  const v = $("#view");
  if (cur === "home") return renderHome(v);
  if (cur === "exam") return renderExam(v);
  const l = byId(cur);
  if (!l) { cur = "home"; return renderHome(v); }
  $("#crumbs").innerHTML = 'Dars ' + l.n + ' / <b>' + esc(l.title) + '</b>';
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a);letter-spacing:.06em">' + l.mod.toUpperCase() + ' • ' + l.n + '-DARS • ⏱ ' + l.time + '</div>';
  h += '<h1>' + esc(l.title) + '</h1><p>' + l.goal + '</p>';
  h += '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap"><button class="btn btn-p" data-act="play">▶ Shu dars kodini sinash</button>' + (DB.done[l.id] ? '<span class="btn btn-g">✅ Bajarildi (' + (DB.scores[l.id] || "") + ' ball)</span>' : "") + '</div></div>';
  h += '<div class="card"><h2><span class="e">📖</span> Sodda tushuntirish (bolaga tushuntirgandek)</h2>' + l.theory + '</div>';
  h += '<div class="card"><h2><span class="e">💻</span> Misol kod — ko\'chirib sinab ko\'ring</h2>' + codeBlock(l.code) + '<div class="tip t"><b>👩‍🏫 O\'qituvchiga metodika:</b>' + l.teacher + '</div></div>';
  h += '<div class="card"><h2><span class="e">⭐</span> Esda saqlang (3 ta oltin qoida)</h2><ul>' + l.keys.map(k => '<li>' + k + '</li>').join("") + '</ul></div>';
  h += '<div class="card"><h2><span class="e">🛠</span> Amaliy topshiriq (uyga vazifa)</h2><p>' + l.task + '</p></div>';
  h += '<div class="card"><h2><span class="e">📝</span> Quiz — o\'zingizni sinang <span style="font-size:12px;color:var(--dim)">(70+ ball = dars yopiladi)</span></h2><div id="quiz">';
  l.quiz.forEach((q, i) => {
    h += '<div class="quiz-q" data-q="' + i + '"><p>' + (i + 1) + '. ' + q.q + '</p>';
    q.opts.forEach((o, j) => { h += '<label><input type="radio" name="q' + i + '" value="' + j + '"/> <span>' + o + '</span></label>'; });
    h += '<div class="q-exp" id="exp' + i + '"></div></div>';
  });
  h += '</div><button class="btn btn-p" id="checkBtn">✅ Tekshirish</button><div class="score" id="scoreBox"></div></div>';
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
  const cols = ["#6366f1", "#a855f7", "#ec4899", "#f59e0b", "#10b981", "#38bdf8"];
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
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a);letter-spacing:.06em">O\'QITUVCHI PLATFORMASI • 2 OY • 0 DAN</div>';
  h += '<h1>HTML • CSS • JavaScript ni <span class="grad">0 dan o\'rgatamiz</span> 🚀</h1>';
  h += '<p>Assalomu alaykum, ustoz! Bu platforma 2 oyda o\'quvchilarni noldan frontend asoslariga olib chiqish uchun tayyorlangan: har darsda <b>sodda tushuntirish + misol + jonli sinash + topshiriq + quiz</b> bor. O\'quvchi 70+ ball olsa, dars avtomatik "bajarildi" bo\'lib boradi. Internet kerak emas.</p>';
  h += '<div class="grid3"><div class="stat"><b>' + total + '</b><span>jami dars</span></div><div class="stat"><b>' + doneCount() + '</b><span>bajarildi</span></div><div class="stat"><b>' + pct() + '%</b><span>progress</span></div></div>';
  h += '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:6px"><button class="btn btn-p" id="startB">🚀 Boshlash — 1-dars</button><button class="btn btn-g" id="resetB">♻ Progressni tozalash</button></div></div>';
  h += '<div class="card"><h2><span class="e">🗓</span> 2 oylik reja (haftama-hafta)</h2><table class="plan"><tr><th>Hafta</th><th>Mavzu</th><th>Darslar</th></tr><tr><td>1–2</td><td>🟧 HTML — sayt skeleti</td><td>1–8: teglar, ro\'yxat, jadval, forma, semantika</td></tr><tr><td>3–4</td><td>🟦 CSS — dizayn</td><td>9–16: rang, box model, flex, grid, responsive</td></tr><tr><td>5–8</td><td>🟨 JS — jonlantirish</td><td>17–24: o\'zgaruvchi, if, sikl, funksiya, DOM, loyiha</td></tr></table>';
  h += '<div class="tip g"><b>👩‍🏫 Ustozga 3 oltin maslahat:</b>1) Har darsni avval jonli ko\'rsating ("Sinab ko\'rish" bilan). 2) O\'quvchidan kodni tushunib ko\'chirib yozishni so\'rang. 3) Quizdan o\'tolmagan o\'quvchi bilan nazariyani 5 daqiqada qayta takrorlang.</div></div>';
  h += '<div class="card"><h2><span class="e">📚</span> Baholash tizimi</h2><ul><li>Har darsda 3–4 savollik quiz — 100 ballik tizimda.</li><li><b>70+ ball</b> = dars yopildi ✅ va yon menyuda ✓ chiqadi.</li><li>Barcha darslar + yakuniy imtihon = kurs tugadi 🎓.</li><li>Natijalar brauzerda saqlanadi (localStorage).</li></ul></div>';
  v.innerHTML = h;
  $("#startB").onclick = () => { if (LESSONS[0]) go(LESSONS[0].id); };
  $("#resetB").onclick = () => { if (confirm("Progress o'chirilsinmi?")) { DB = { done: {}, scores: {}, theme: DB.theme }; save(); renderNav(""); renderHome(v); toast("Tozalandi ♻"); } };
  document.querySelector(".content").scrollTop = 0;
}

function renderExam(v) {
  $("#crumbs").innerHTML = 'Yakuniy / <b>Imtihon</b>';
  if (!EXAM.length) { v.innerHTML = '<div class="card"><h2>🎓 Yakuniy imtihon tez kunda qo\'shiladi</h2><p>Hozircha darslarni tugating.</p></div>'; return; }
  let h = '<div class="hero"><div style="font-size:12px;font-weight:800;color:var(--a)">YAKUNIY IMTIHON • 10 SAVOL</div><h1>🎓 Kurs imtihoni</h1><p>Barcha modullar bo\'yicha 10 savol. 70+ ball = kursni tugatdingiz! Avval kamida 12 ta darsni yoping — shunda imtihon oson bo\'ladi.</p></div><div class="card"><div id="quiz">';
  EXAM.forEach((q, i) => {
    h += '<div class="quiz-q" data-q="' + i + '"><p>' + (i + 1) + '. ' + q.q + '</p>';
    q.opts.forEach((o, j) => { h += '<label><input type="radio" name="eq' + i + '" value="' + j + '"/> <span>' + o + '</span></label>'; });
    h += '<div class="q-exp" id="eexp' + i + '"></div></div>';
  });
  h += '</div><button class="btn btn-p" id="echeck">🎓 Imtihonni tekshirish</button><div class="score" id="escore"></div></div>';
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
