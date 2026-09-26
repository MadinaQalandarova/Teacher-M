/* Teacher-M — JavaScript moduli (18–25-darslar) */
const JS_LESSONS = [
{id:"js-1",mod:"js",n:17,title:"JS nima? O'zgaruvchilar va console",time:"50 daqiqa",
goal:`script ulaydi, let/const bilan o'zgaruvchi ochadi, console.log da natija chiqaradi.`,
theory:`<p><b>Oddiy tilda:</b> HTML — skelet, CSS — kiyim, <b>JS — jon</b> (harakat, miya). Tugmani bossangiz nima bo'ladi — shuni JS hal qiladi.</p><ul><li><b>Ulanish:</b> body oxirida <span class="kbd">&lt;script&gt;...&lt;/script&gt;</span>. Kod shu ichida yoziladi.</li><li><b>O'zgaruvchi — nomlangan quti:</b> <span class="kbd">let ism = "Jasur"</span>. <b>let</b> — o'zgaradi, <b>const</b> — o'zgarmaydi (tug'ilgan yil kabi).</li><li><span class="kbd">console.log(ism)</span> — natijani ko'rish oynasi. Brauzerda <b>F12 → Console</b> ni oching!</li><li>Matn doim <b>qo'shtirnoqda</b>: "Jasur". Son qo'shtirnoqsiz: 15.</li></ul>`,
visual:`<svg viewBox="0 0 460 200" width="440"><text x="230" y="22" class="vt">O'zgaruvchi — nomlangan quti</text><rect x="40" y="50" width="180" height="90" rx="12" class="vbox"/><text x="130" y="78" class="vbig">let ism</text><text x="130" y="104" class="vs">= "Jasur" (o'zgaradi)</text><text x="130" y="122" class="vs">qalam kabi</text><rect x="240" y="50" width="180" height="90" rx="12" class="vbox2"/><text x="330" y="78" class="vbig">const yil</text><text x="330" y="104" class="vs">= 2011 (o'zgarmaydi)</text><text x="330" y="122" class="vs">ruchkaga o'xshaydi</text><text x="230" y="168" class="vs">console.log(ism) → F12 → Console da ko'rinadi</text><text x="230" y="186" class="vs">Matn "..." da, son yalang'och yoziladi</text></svg>`,
code:`<h2 id="salom">...</h2>
<script>
  let ism = "Jasur";
  const yil = 2011;
  let yosh = 2026 - yil;
  console.log("Salom, " + ism + "! Senga " + yosh + " yosh");
  document.getElementById("salom").textContent = "Salom, " + ism + "! 👋";
<\/script>`,
teacher:`F12 Console ni birinchi marta ochgan o'quvchi o'zini xakerdek his qiladi — shu hissiyotdan foydalaning! let vs const ni "qalam vs ruchka" bilan tushuntiring.`,
keys:[`JS body oxiridagi script ichida yoziladi.`,`let = o'zgaradi, const = o'zgarmas.`,`console.log — dasturchining ko'zgusi (F12).`],
task:`O'zingiz haqida 3 o'zgaruvchi (ism-let, yosh-let, tug'ilganYil-const) oching, console.log da tanishtiruv chiqaring va h1 ga chiqaring.`,
quiz:[
{q:`JS kod qayerda yoziladi?`,opts:[`head dagi css da`,`body oxiridagi script ichida`,`faqat alohida saytda`,`html siz`],a:1,why:`script tegi JS ning uyi.`},
{q:`Qaysi o'zgaruvchi o'zgarmaydi?`,opts:[`let`,`const`,`var`,`lock`],a:1,why:`const = constant (o'zgarmas).`},
{q:`Natijani qayerda ko'ramiz?`,opts:[`Ekranda avtomatik`,`F12 → Console da console.log bilan`,`Printerda`,`Hech qayerda`],a:1,why:`Console dasturchining yordamchisi.`}]},

{id:"js-2",mod:"js",n:18,title:"Ma'lumot turlari va if/else",time:"55 daqiqa",
goal:`string/number/boolean ni farqlaydi, if/else bilan yosh tekshirgich yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> <b>if</b> — svetofor: shart yashil bo'lsa bir yo'l, qizil bo'lsa boshqa yo'l.</p><ul><li><b>3 tur:</b> <span class="kbd">"Jasur"</span> — matn (string), <span class="kbd">15</span> — son (number), <span class="kbd">true/false</span> — ha/yo'q (boolean).</li><li><b>Taqqoslash:</b> <span class="kbd">===</span> (tengmi?), <span class="kbd">&gt;</span> <span class="kbd">&lt;</span> <span class="kbd">&gt;=</span>. Natija true yoki false.</li><li><b>Qolip:</b> if (shart) { ... } else { ... }. Savol: yosh >= 18? Ha → "xush kelibsiz", yo'q → "uzr, kichkinsiz".</li></ul>`,
visual:`<svg viewBox="0 0 460 210" width="440"><text x="230" y="22" class="vt">if — svetofor kabi qaror qiladi</text><rect x="170" y="40" width="120" height="44" rx="10" class="vbox"/><text x="230" y="67" class="vs">yosh >= 18?</text><line x1="170" y1="84" x2="110" y2="110" class="vln"/><line x1="290" y1="84" x2="350" y2="110" class="vln"/><text x="130" y="100" class="vs">HA →</text><text x="330" y="100" class="vs">← YO'Q</text><rect x="40" y="112" width="150" height="56" rx="10" class="vbox2"/><text x="115" y="136" class="vs">Xush kelibsiz!</text><text x="115" y="154" class="vs">(if ishladi)</text><rect x="270" y="112" width="150" height="56" rx="10" class="vbox3"/><text x="345" y="136" class="vs">Uzr, kichkinsiz</text><text x="345" y="154" class="vs">(else ishladi)</text><text x="230" y="192" class="vs">Taqqoslashda = emas, === ishlating!</text></svg>`,
code:`<input id="yosh" type="number" placeholder="Yoshingiz">
<button onclick="tekshir()">Tekshirish</button>
<p id="natija"></p>
<script>
  function tekshir() {
    let yosh = Number(document.getElementById("yosh").value);
    let natija = document.getElementById("natija");
    if (yosh >= 18) {
      natija.textContent = "✅ Xush kelibsiz, kattasiz!";
    } else if (yosh >= 13) {
      natija.textContent = "👋 O'smirlar klubiga qo'shildingiz!";
    } else {
      natija.textContent = "❌ Uzr, 13 dan kichiklar ruxsatsiz.";
    }
  }
<\/script>`,
teacher:`Svetofor rasmini chizing: yashil = if, sariq = else if, qizil = else. === vs = ni ataylab aralashtirib xato ko'rsating.`,
keys:[`Matn qo'shtirnoqda, son yalang'och, boolean true/false.`,`Taqqoslashda == emas, === ishlating.`,`if/else — dasturdagi qaror qabul qilish.`],
task:`Baholagich yasang: 90+ "A'lo!", 70+ "Yaxshi", 50+ "Qoniqarli", aks holda "Yiqildingiz" chiqsin.`,
quiz:[
{q:`boolean qiymatlar qaysi?`,opts:[`"ha" / "yo'q"`,`true / false`,`1 / 2`,`+ / -`],a:1,why:`Faqat ikki qiymat: rost/yolg'on.`},
{q:`Tenglikni tekshirish belgisi?`,opts:[`=`,`==`,`===`,`!==`],a:2,why:`=== turini ham tekshiradi (eng ishonchli).`},
{q:`yosh 15 bo'lsa qaysi shox ishlaydi?`,opts:[`if (yosh katta) shoxi`,`else if (o'smir) shoxi`,`else (oxirgi) shoxi`,`Hech qaysi`],a:1,why:`15 katta emas, lekin o'smir — ikkinchi shart rost.`}]},

{id:"js-3",mod:"js",n:19,title:"Massiv va sikllar: ro'yxat sehri",time:"55 daqiqa",
goal:`Array ochadi, for bilan ro'yxatni ekranga chiqaradi.`,
theory:`<p><b>Oddiy tilda:</b> Massiv — shkafning tortmalari: <span class="kbd">["olma", "banan", "anor"]</span>. Har tortmaning raqami bor: <b>0 dan boshlanadi!</b></p><ul><li><span class="kbd">mevalar[0]</span> — "olma", <span class="kbd">mevalar.length</span> — nechtaligi (3).</li><li><b>Sikl — dangasalar uchun:</b> 100 ta ismni qo'lda yozmaysiz, <span class="kbd">for</span> o'zi aylantiradi.</li><li><span class="kbd">forEach</span> — har elementga bitta amal (zamonaviy, oson).</li></ul>`,
visual:`<svg viewBox="0 0 460 200" width="440"><text x="230" y="22" class="vt">Massiv — raqamlangan tortmalar (0 dan!)</text><rect x="50" y="50" width="100" height="70" rx="10" class="vbox"/><text x="100" y="72" class="vs">tortma 0</text><text x="100" y="96" class="vt">olma</text><rect x="160" y="50" width="100" height="70" rx="10" class="vbox"/><text x="210" y="72" class="vs">tortma 1</text><text x="210" y="96" class="vt">banan</text><rect x="270" y="50" width="100" height="70" rx="10" class="vbox"/><text x="320" y="72" class="vs">tortma 2</text><text x="320" y="96" class="vt">anor</text><text x="230" y="148" class="vbig">for → 0, 1, 2 → hammasini chiqaradi</text><text x="230" y="172" class="vs">mevalar.length = 3 (nechtaligi)</text></svg>`,
code:`<ul id="royxat"></ul>
<script>
  let mevalar = ["🍎 Olma", "🍌 Banan", "🍇 Uzum", "🍑 Shaftoli"];
  let ul = document.getElementById("royxat");
  for (let i = 0; i < mevalar.length; i++) {
    ul.innerHTML += "<li>" + mevalar[i] + "</li>";
  }
  console.log("Jami: " + mevalar.length + " ta meva");
<\/script>`,
teacher:`Vagon raqami 0 dan boshlanadi — hamma kuladi, lekin yodda qoladi! for ni "kir yuvish mashinasi" deb tushuntiring.`,
keys:[`Massiv indeksi 0 dan boshlanadi — eng katta tuzoq!`,`length — nechta element borligi.`,`Takroriy ishni for ga topshiring.`],
task:`Sinfdoshlaringizning 5 ta ismidan massiv yasang va for bilan ul ro'yxatga chiqaring. Oxirida "Jami: 5 nafar" yozing.`,
quiz:[
{q:`Ro'yxatda uchinchi meva indeksi qaysi? (olma, banan, anor)`,opts:[`3`,`2`,`1`,`0`],a:1,why:`Sanoq 0 dan: olma=0, banan=1, anor=2.`},
{q:`Massiv uzunligi qanday olinadi?`,opts:[`massiv.size`,`massiv.length`,`massiv.count`,`len(massiv)`],a:1,why:`length — JS standarti.`},
{q:`Sikl nima uchun kerak?`,opts:[`Kompyuterni o'chirish uchun`,`Takroriy ishni avtomatlashtirish uchun`,`Internet uchun`,`Rasm chizish uchun`],a:1,why:`100 qatorni 3 qatorda yozish sehri.`}]},

{id:"js-4",mod:"js",n:20,title:"Funksiyalar: qayta ishlatiladigan mashina",time:"50 daqiqa",
goal:`Funksiya e'lon qiladi, parametr/return ni tushunadi.`,
theory:`<p><b>Oddiy tilda:</b> Funksiya — somsa apparati: ichiga go'sht (parametr) solasiz, tayyor somsa (natija/return) chiqadi. Bir marta yasaysiz, 100 marta ishlatasiz!</p><ul><li><span class="kbd">function salom(ism) { return "Salom, " + ism }</span> — qolip.</li><li><b>Chaqirish:</b> <span class="kbd">salom("Jasur")</span> — apparatni yoqish.</li><li><b>return</b> — natijani qaytarish. return siz funksiya "jim" bo'ladi.</li></ul>`,
visual:`<svg viewBox="0 0 460 190" width="440"><text x="230" y="22" class="vt">Funksiya — somsa apparati</text><rect x="25" y="60" width="110" height="70" rx="12" class="vbox"/><text x="80" y="88" class="vs">go'sht</text><text x="80" y="108" class="vs">(parametr)</text><line x1="135" y1="95" x2="185" y2="95" class="vln"/><path d="M175 87l12 8-12 8z" class="vhl"/><rect x="187" y="60" width="110" height="70" rx="12" class="vbox2"/><text x="242" y="88" class="vt">f()</text><text x="242" y="108" class="vs">apparat</text><line x1="297" y1="95" x2="347" y2="95" class="vln"/><path d="M337 87l12 8-12 8z" class="vhl"/><rect x="349" y="60" width="110" height="70" rx="12" class="vbox3"/><text x="404" y="88" class="vs">somsa</text><text x="404" y="108" class="vs">(return)</text><text x="230" y="160" class="vs">Bir marta yasa → 100 marta ishlat: salom("Jasur")</text></svg>`,
code:`<p id="javob"></p>
<script>
  function qoshish(a, b) {
    return a + b;
  }
  function salomBer(ism) {
    return "👋 Salom, " + ism + "!";
  }
  document.getElementById("javob").textContent =
    salomBer("Jasur") + " 5+7=" + qoshish(5, 7);
  console.log(qoshish(10, 20)); // 30
<\/script>`,
teacher:`Kalkulyator misolida tushuntiring: tugma (chaqirish) → mexanizm (funksiya) → ekran (return). Kvadrat hisoblaydigan funksiya yozdiring.`,
keys:[`function = bir marta yoz, ko'p ishlat.`,`Parametr = kiruvchi, return = chiquvchi.`,`return bo'lmasa natija yo'qoladi.`],
task:`Kalkulyator funksiyalari: qoshish, ayrish, kopaytirish, bolish + daraja (son*son). Hammasini console da sinang.`,
quiz:[
{q:`Funksiya natijasi qanday qaytadi?`,opts:[`back bilan`,`return bilan`,`send bilan`,`give bilan`],a:1,why:`return — qaytarish buyrug'i.`},
{q:`salom("Ali") da "Ali" nima?`,opts:[`Funksiya nomi`,`Parametr qiymati (argument)`,`Natija`,`Xato`],a:1,why:`Apparatga solingan mahsulot.`},
{q:`Funksiya nima uchun kerak?`,opts:[`Kod qisqa va qayta ishlatilishi uchun`,`Kompyuterni bezash uchun`,`Internet tezligi uchun`,`Kerak emas`],a:0,why:`DRY qoidasi: takrorlama!`}]},

{id:"js-5",mod:"js",n:21,title:"DOM 1: sahifani ushlash va o'zgartirish",time:"55 daqiqa",
goal:`getElementById/querySelector bilan element topib matn va stilini o'zgartiradi.`,
theory:`<p><b>Oddiy tilda:</b> DOM — sahifaning xaritasi. JS shu xarita orqali istalgan elementni "ushlab" o'zgartiradi.</p><ul><li><span class="kbd">getElementById("sar")</span> — id bo'yicha bitta. <span class="kbd">querySelector(".karta")</span> — CSS selektori bo'yicha birinchi.</li><li><b>O'zgartirish:</b> <span class="kbd">.textContent</span> — matn, <span class="kbd">.innerHTML</span> — teg bilan, <span class="kbd">.style.color</span> — stil.</li><li>Nuqta (.) dan keyingi — buyruq: "top → o'zgartir".</li></ul>`,
visual:`<svg viewBox="0 0 460 200" width="440"><text x="230" y="22" class="vt">DOM — sahifa xaritasi</text><rect x="175" y="42" width="110" height="40" rx="10" class="vbox"/><text x="230" y="67" class="vs">document</text><line x1="150" y1="82" x2="120" y2="105" class="vln"/><line x1="230" y1="82" x2="230" y2="105" class="vln"/><line x1="310" y1="82" x2="340" y2="105" class="vln"/><rect x="60" y="107" width="120" height="44" rx="10" class="vbox2"/><text x="120" y="134" class="vs">h2 #sar</text><rect x="190" y="107" width="120" height="44" rx="10" class="vbox2"/><text x="250" y="134" class="vs">p .matn</text><rect x="320" y="107" width="120" height="44" rx="10" class="vbox2"/><text x="380" y="134" class="vs">button</text><text x="230" y="172" class="vs">JS xaritalab topadi → .textContent bilan o'zgartiradi</text></svg>`,
code:`<h2 id="sar">Eski sarlavha</h2>
<p class="matn">Eski matn</p>
<button onclick="ozgartir()">✨ Sehrlash</button>
<script>
  function ozgartir() {
    let s = document.getElementById("sar");
    s.textContent = "Yangi sarlavha! 🎉";
    s.style.color = "#4f46e5";
    s.style.fontSize = "32px";
    document.querySelector(".matn").innerHTML =
      "<b>Matn qalin va yangilandi!</b>";
  }
<\/script>`,
teacher:`Sehrli tayoqcha o'yini: tugma bosiladi — sahifa o'zgaradi. textContent vs innerHTML farqini jonli ko'rsating.`,
keys:[`DOM = sahifa xaritasi, JS = sayohatchi.`,`id bo'lsa getElementById, class bo'lsa querySelector.`,`textContent xavfsiz, innerHTML kuchli.`],
task:`"Profil kartam": tugma bossangiz ism rangi, o'lchami o'zgarib, ostiga "Men frontend o'rganayapman! 🚀" chiqsin.`,
quiz:[
{q:`id="x" bo'lgan elementni qanday ushlaymiz?`,opts:[`getElementById("x")`,`getId.x`,`find("#x")`,`take("x")`],a:0,why:`To'g'ridan-to'g'ri id bo'yicha ushlanadi.`},
{q:`Element matnini o'zgartirish uchun qaysi buyruq?`,opts:[`setText()`,`textContent`,`changeText()`,`innerText =`],a:1,why:`textContent — eng xavfsiz usul.`},
{q:`Rangni JS da o'zgartirish qaysi?`,opts:[`el.color = "red"`,`el.style.color = "red"`,`el.css("red")`,`el.paint("red")`],a:1,why:`style obyekti orqali o'zgartiriladi.`}]},

{id:"js-6",mod:"js",n:22,title:"DOM 2: hodisalar — tugma bossang nima bo'ladi?",time:"55 daqiqa",
goal:`addEventListener bilan click/input hodisalarini ushlaydi.`,
theory:`<p><b>Oddiy tilda:</b> Hodisa (event) — eshik qo'ng'irog'i: kimdir bossadi (click), uy egasi eshitib eshikni ochadi (funksiya ishlaydi).</p><ul><li><span class="kbd">tugma.addEventListener("click", funksiya)</span> — zamonaviy va to'g'ri usul.</li><li><b>Hodisalar:</b> click (bosish), input (yozish), mouseover (ustiga borish).</li><li><b>Hisoblagich formulasi:</b> o'zgaruvchi + tugma + yangilash = jonli ilova!</li></ul>`,
visual:`<svg viewBox="0 0 460 190" width="440"><text x="230" y="22" class="vt">Hodisa — eshik qo'ng'irog'i</text><rect x="25" y="60" width="110" height="70" rx="12" class="vbox"/><text x="80" y="88" class="vt">tugma</text><text x="80" y="108" class="vs">(click)</text><line x1="135" y1="95" x2="185" y2="95" class="vln"/><path d="M175 87l12 8-12 8z" class="vhl"/><rect x="187" y="60" width="110" height="70" rx="12" class="vbox2"/><text x="242" y="88" class="vs">quloq</text><text x="242" y="108" class="vs">(listener)</text><line x1="297" y1="95" x2="347" y2="95" class="vln"/><path d="M337 87l12 8-12 8z" class="vhl"/><rect x="349" y="60" width="110" height="70" rx="12" class="vbox3"/><text x="404" y="88" class="vs">funksiya</text><text x="404" y="108" class="vs">ishladi!</text><text x="230" y="160" class="vs">addEventListener("click", ...) — shu zanjirni ulaydi</text></svg>`,
code:`<h1>Hisob: <span id="son">0</span></h1>
<button id="plus">➕ Qo'shish</button>
<button id="minus">➖ Kamaytirish</button>
<button id="nol">🔄 Nol</button>
<input id="ism" placeholder="Ismingizni yozing...">
<p id="chiq"></p>
<script>
  let s = 0;
  let sonEl = document.getElementById("son");
  document.getElementById("plus").addEventListener("click", function() {
    s++; sonEl.textContent = s;
  });
  document.getElementById("minus").addEventListener("click", function() {
    s--; sonEl.textContent = s;
  });
  document.getElementById("nol").addEventListener("click", function() {
    s = 0; sonEl.textContent = s;
  });
  document.getElementById("ism").addEventListener("input", function(e) {
    document.getElementById("chiq").textContent = "Salom, " + e.target.value + "! 👋";
  });
<\/script>`,
teacher:`addEventListener ni "quloq tutish" deb tarjima qiling — yodda qoladi.`,
keys:[`addEventListener("click", ...) — standart usul.`,`input hodisasi har harfda ishlaydi.`,`Hisoblagich = o'zgaruvchi + hodisa + DOM.`],
task:`"Like tugmasi ❤️": 10 ga yetsa "Mashhur! 🔥" chiqsin + ism inputiga yozsangiz jonli salom chiqsin.`,
quiz:[
{q:`Tugma bosilishini ushlaydigan hodisa qaysi?`,opts:[`input`,`click`,`hover`,`submit`],a:1,why:`click — tugma bosilganda ishlaydi.`},
{q:`Inputga yozishni jonli ushlash qaysi?`,opts:[`click`,`input`,`submit`,`change`],a:1,why:`Har harf yozilganda input ishlaydi.`},
{q:`addEventListener nima qiladi?`,opts:[`Hodisani kutib, vaqti kelganda funksiyani ishga tushiradi`,`Sahifani yangilaydi`,`Rasm yuklaydi`,`Kerak emas`],a:0,why:`Element hodisani "eshitib" kutadi.`}]},

{id:"js-7",mod:"js",n:23,title:"LocalStorage + TODO loyiha 📝",time:"60 daqiqa",
goal:`localStorage bilan ma'lumot saqlaydi, to'liq TODO ilova yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> O'zgaruvchi — doska (sahifa yopilsa o'chadi). <b>localStorage — daftar</b>: yozsangiz brauzerda qoladi, ertaga ham turadi!</p><ul><li><span class="kbd">localStorage.setItem("kalit", qiymat)</span> — saqlash. <span class="kbd">getItem("kalit")</span> — o'qish.</li><li>Massivni saqlashda: <span class="kbd">JSON.stringify()</span> (qutiga solish), o'qishda <span class="kbd">JSON.parse()</span> (ochish).</li><li><b>TODO formulasi:</b> massiv + input + qo'shish + chizish + saqlash = haqiqiy ilova!</li></ul>`,
visual:`<svg viewBox="0 0 460 195" width="440"><text x="230" y="22" class="vt">localStorage — o'chmaydigan daftar</text><rect x="30" y="50" width="150" height="90" rx="12" class="vbox"/><text x="105" y="78" class="vt">sahifa</text><text x="105" y="100" class="vs">let todo = []</text><text x="105" y="118" class="vs">yopilsa o'chadi!</text><line x1="180" y1="95" x2="240" y2="95" class="vln"/><path d="M230 87l12 8-12 8z" class="vhl"/><text x="210" y="82" class="vs">setItem</text><rect x="242" y="50" width="188" height="90" rx="12" class="vbox2"/><text x="336" y="78" class="vt">daftar</text><text x="336" y="100" class="vs">JSON.stringify</text><text x="336" y="118" class="vs">ertaga ham turadi!</text><text x="230" y="168" class="vs">O'qishda: JSON.parse (qutini ochish)</text></svg>`,
code:`<input id="vaz" placeholder="Vazifa yozing...">
<button id="qosh">➕ Qo'shish</button>
<ul id="lst"></ul>
<script>
  let todo = JSON.parse(localStorage.getItem("todo") || "[]");
  function chiz() {
    let ul = document.getElementById("lst");
    ul.innerHTML = "";
    todo.forEach(function(v, i) {
      ul.innerHTML += "<li>" + v + " <button onclick='ochir(" + i + ")'>❌</button></li>";
    });
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  function ochir(i) { todo.splice(i, 1); chiz(); }
  document.getElementById("qosh").addEventListener("click", function() {
    let inp = document.getElementById("vaz");
    if (inp.value.trim() === "") return;
    todo.push(inp.value.trim());
    inp.value = "";
    chiz();
  });
  chiz();
<\/script>`,
teacher:`Vazifa qo'shib sahifani yangilang (F5) — ro'yxat o'chmaydi, hamma hayron qoladi! JSON ni "konserva" deb tushuntiring.`,
keys:[`localStorage — brauzer daftari, o'chmaydi.`,`Massiv saqlashda JSON.stringify/parse shart.`,`TODO = massiv + DOM + saqlash (3 kuch birda).`],
task:`TODO ni kengaytiring: "bajarildi ✅" tugmasi + "Jami: X, Bajarildi: Y" hisoblagich bo'lsin.`,
quiz:[
{q:`Sahifa yopilganda ham qoladigan xotira?`,opts:[`let o'zgaruvchi`,`localStorage`,`console`,`alert`],a:1,why:`Brauzer daftarida saqlanadi.`},
{q:`Massivni saqlashdan oldin nima qilamiz?`,opts:[`Hech narsa`,`JSON.stringify`,`JSON.save`,`Array.join`],a:1,why:`Massivni matnga aylantirish shart.`},
{q:`Saqlangan massivni o'qishda nima qilamiz?`,opts:[`JSON.parse`,`JSON.load`,`parseInt`,`String()`],a:0,why:`Matnni ochib massivga qaytaramiz.`}]},

{id:"js-8",mod:"js",n:24,title:"Yakuniy loyiha: Quiz ilovasi 🏆",time:"70 daqiqa",
goal:`Bilimlarni jamlab, ball hisoblaydigan interaktiv quiz ilovasi topshiradi.`,
theory:`<p><b>Tabriklaymiz — kurs marrasidasiz!</b> Bu darsda 24 darsning mevasi: massiv + funksiya + DOM + hodisa + shart — bitta ilovada.</p><ul><li><b>Reja:</b> 1) Savollar massivi. 2) Bittasini chizish funksiyasi. 3) Javob bossangiz tekshirish + keyingisiga o'tish. 4) Oxirida ball + baho.</li><li>Bu — <b>kursning eng katta bahosi</b>.</li></ul>`,
visual:`<svg viewBox="0 0 460 190" width="440"><text x="230" y="22" class="vt">Quiz ilova zanjiri</text><rect x="20" y="60" width="90" height="60" rx="11" class="vbox"/><text x="65" y="85" class="vs">savollar</text><text x="65" y="103" class="vs">massivi</text><line x1="110" y1="90" x2="140" y2="90" class="vln"/><path d="M132 82l12 8-12 8z" class="vhl"/><rect x="142" y="60" width="90" height="60" rx="11" class="vbox2"/><text x="187" y="85" class="vs">chizish</text><text x="187" y="103" class="vs">funksiyasi</text><line x1="232" y1="90" x2="262" y2="90" class="vln"/><path d="M254 82l12 8-12 8z" class="vhl"/><rect x="264" y="60" width="90" height="60" rx="11" class="vbox2"/><text x="309" y="85" class="vs">click ni</text><text x="309" y="103" class="vs">tekshirish</text><line x1="354" y1="90" x2="384" y2="90" class="vln"/><path d="M376 82l12 8-12 8z" class="vhl"/><rect x="386" y="60" width="54" height="60" rx="11" class="vbox3"/><text x="413" y="85" class="vs">ball</text><text x="413" y="103" class="vs">100!</text><text x="230" y="152" class="vs">Massiv savolni beradi → funksiya chizadi → click javobni oladi</text></svg>`,
code:`<div style="max-width:420px;background:#fff;padding:20px;border-radius:14px;font-family:sans-serif">
<h3 id="sav">Savol</h3>
<div id="var"></div>
<p id="his">Ball: 0</p>
</div>
<script>
  let savollar = [
    { s: "HTML nima?", v: ["Skelet", "Bo'yoq", "Miya"], t: 0 },
    { s: "CSS nima?", v: ["Skelet", "Dizayn", "Xotira"], t: 1 },
    { s: "Qaysi indeks birinchi?", v: ["0", "1", "2"], t: 0 }
  ];
  let idx = 0, ball = 0;
  function chiz() {
    document.getElementById("sav").textContent = (idx + 1) + ". " + savollar[idx].s;
    let box = document.getElementById("var");
    box.innerHTML = "";
    savollar[idx].v.forEach(function(v, i) {
      let b = document.createElement("button");
      b.textContent = v;
      b.style.cssText = "display:block;width:100%;margin:6px 0;padding:10px;border-radius:10px;border:1px solid #ccc;cursor:pointer";
      b.onclick = function() {
        if (i === savollar[idx].t) ball++;
        idx++;
        if (idx < savollar.length) chiz();
        else {
          document.getElementById("sav").textContent = "🏆 Tugadi! Ball: " + ball + "/" + savollar.length;
          box.innerHTML = ball >= 2 ? "🎉 A'lo natija!" : "📚 Qayta urinib ko'ring!";
        }
        document.getElementById("his").textContent = "Ball: " + ball;
      };
      box.appendChild(b);
    });
  }
  chiz();
<\/script>`,
teacher:`50 daqiqa mustaqil ish + 15 daqiqa himoya: har o'quvchi ilovasini sinfga ko'rsatadi. 5 savollik o'z quizini tuzmagan o'quvchiga yakuniy baho qo'ymang.`,
keys:[`Katta ilova = kichik bilimlar yig'indisi.`,`Massiv savollarni, funksiya chizishni, hodisa javobni boshqaradi.`,`Tayyor quiz — portfelingizning eng kuchli ishi.`],
task:`🏆 5 savollik o'z quiz ilovangizni yasang: har savolda 3–4 variant, oxirida ball + baho. Dizaynini chiroyli qiling!`,
quiz:[
{q:`Quiz ilovada savollar qayerda saqlanadi?`,opts:[`Alohida saytda`,`Massivda (obyektlar ro'yxati)`,`Rasmda`,`Hech qayerda`],a:1,why:`Massiv + obyekt — eng qulay.`},
{q:`Javob bosilganda nima ishlaydi?`,opts:[`hover`,`click hodisasi`,`load`,`timer`],a:1,why:`Tugma click ni tinglaydi.`},
{q:`Kursni tugatdingiz — keyingi qadam?`,opts:[`To'xtash`,`Yakuniy imtihonni topshirish 🎓`,`Hammasini unutish`,`Faqat o'yin`],a:1,why:`"Yakuniy imtihon" tugmasini bosing! 🚀`}]}
];
