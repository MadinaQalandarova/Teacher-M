/* Teacher-M — CSS moduli (9–16-darslar) */
const CSS_LESSONS = [
{id:"css-1",mod:"css",n:9,title:"CSS nima? Ulanish va selektorlar",time:"50 daqiqa",
goal:`CSS ni HTML ga 3 usulda ulaydi, teg/class/id selektorlarini to'g'ri ishlatadi.`,
theory:`<p><b>Oddiy tilda:</b> HTML — uy, CSS — uning bo'yog'i, pardasi, mebeli. Bir xil uyni har xil bezash mumkin.</p><ul><li><b>3 ulanish usuli:</b> 1) <span class="kbd">style</span> atributi ichida (kichik ishga), 2) <span class="kbd">&lt;style&gt;</span> head ichida, 3) <b>alohida style.css fayl</b> (eng to'g'risi!).</li><li><b>Selektorlar:</b> <span class="kbd">h1</span> — barcha h1 lar, <span class="kbd">.quti</span> — class="quti" bo'lganlar (nuqta bilan!), <span class="kbd">#asosiy</span> — id="asosiy" bo'lgan yagona element (# bilan!).</li><li><b>Formula:</b> selektor { xususiyat: qiymat; } — masalan <span class="kbd">h1 { color: red; }</span>.</li><li>class ko'p elementda takrorlanadi, id sahifada <b>1 marta</b> bo'ladi.</li></ul>`,
code:`<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>CSS boshlash</title>
<style>
  h1 { color: #4f46e5; }
  .qizil { color: red; }
  #maxsus { background: yellow; padding: 10px; }
</style>
</head>
<body>
  <h1>Salom CSS!</h1>
  <p class="qizil">Men qizil matnman.</p>
  <p class="qizil">Men ham qizilman.</p>
  <p id="maxsus">Men alohidaman (sariq fon).</p>
  <p style="color: green;">Men joyida bo'yalganman.</p>
</body>
</html>`,
teacher:`3 ta bir xil oq futbolka misolida tushuntiring: stickerga o'xshash (inline), sinf belgisi (class), ism yozish (id). O'quvchilardan bitta class ni 3 joyda ishlatib ko'rsatishni so'rang.`,
keys:[`CSS formula: selektor { xususiyat: qiymat; }`,`Nuqta = class (ko'p), panjara # = id (bitta).`,`Katta loyihada alohida .css fayl ishlatiladi.`],
task:`portfolio.html ga style qo'shing: h1 ni ko'k, bitta class bilan 2 paragrafni yashil qiling, footer ga id berib fonini kulrang qiling.`,
quiz:[
{q:`class selektori qanday yoziladi?`,opts:[`#quti`,`.quti`,`quti`,`*quti`],a:1,why:`Nuqta class ni bildiradi.`},
{q:`id selektori qanday yoziladi?`,opts:[`.asosiy`,`#asosiy`,`asosiy`,`@asosiy`],a:1,why:`# id ni bildiradi va sahifada bitta bo'ladi.`},
{q:`Eng to'g'ri CSS ulanish usuli?`,opts:[`Har tegga style yozish`,`Alohida .css fayl`,`CSS siz`,`Faqat JavaScript`],a:1,why:`Alohida fayl — tartibli va qayta ishlatiladi.`}]},

{id:"css-2",mod:"css",n:10,title:"Rang, o'lcham, shrift",time:"50 daqiqa",
goal:`color, background, px/rem/%, font-size, font-weight, text-align ni ishlatadi.`,
theory:`<p><b>Oddiy tilda:</b> Bu dars — bo'yoq do'koni. Rang tanlaysiz, harf kattaligini sozlaysiz.</p><ul><li><b>Ranglar:</b> <span class="kbd">red</span> (nom), <span class="kbd">#ff0000</span> (HEX kod — eng aniq), <span class="kbd">rgb(255,0,0)</span>. <b>color</b> — matn rangi, <b>background</b> — fon rangi.</li><li><b>O'lchamlar:</b> <span class="kbd">px</span> — aniq (16px standart matn), <span class="kbd">%</span> — ota-onaga nisbatan, <span class="kbd">rem</span> — ildizga nisbatan (moslashuvchan).</li><li><b>Shrift:</b> <span class="kbd">font-size</span> (kattalik), <span class="kbd">font-weight: bold</span> (qalin), <span class="kbd">text-align: center</span> (o'rtaga).</li></ul>`,
code:`<style>
  body { font-family: Arial, sans-serif; }
  h1 { color: #4f46e5; font-size: 36px; text-align: center; }
  .katta { font-size: 22px; font-weight: bold; }
  .fonli { background: #fef08a; color: #333; padding: 12px; }
  .yarmi { width: 50%; background: #e0e7ff; padding: 10px; }
</style>
<h1>O'rtadagi katta sarlavha</h1>
<p class="katta">Qalin va katta matn.</p>
<p class="fonli">Sariq fonli matn.</p>
<div class="yarmi">Eni 50% bo'lgan quti.</div>`,
teacher:`HEX rangni "bo'yoq kodi" deb tushuntiring va brauzer rang tanlashni jonli ko'rsating. px vs % ni chizg'ich vs rezina bilan solishtiring.`,
keys:[`color = matn, background = fon.`,`Matn standarti 16px, sarlavha 24–36px.`,`text-align faqat matnni siljitadi, qutini emas.`],
task:`Portfoliongizda: ismni 36px markazda, "Men haqimda" matnini 18px, ko'nikmalar ro'yxati fonini och ko'k (#e0e7ff) qiling.`,
quiz:[
{q:`Fon rangi qaysi xususiyat?`,opts:[`color`,`background`,`font-size`,`text-color`],a:1,why:`background — orqa fon.`},
{q:`HEX rangga misol?`,opts:[`reddish`,`#4f46e5`,`36px`,`bold`],a:1,why:`# bilan boshlangan 6 xonali kod.`},
{q:`Matnni o'rtaga nima olib keladi?`,opts:[`font-size: center`,`text-align: center`,`margin: center`,`align: middle`],a:1,why:`text-align matnni tekislaydi.`}]},

{id:"css-3",mod:"css",n:11,title:"Box Model: margin, padding, border",time:"55 daqiqa",
goal:`Har element quti ekanini tushunib, margin/padding/border ni ajratadi.`,
theory:`<p><b>Oddiy tilda:</b> Har element — sovg'a qutisi: sovg'a = matn (content), o'rama qog'oz = <b>padding</b> (ichki bo'shliq), quti devori = <b>border</b>, qutilar orasi = <b>margin</b> (tashqi bo'shliq).</p><ul><li><span class="kbd">padding: 20px</span> — matn quti devoriga yopishmaydi, nafas oladi.</li><li><span class="kbd">border: 2px solid red</span> — qalinligi, turi, rangi (3 tasi shart!).</li><li><span class="kbd">margin: 20px</span> — qutilar bir-biriga yopishmaydi.</li><li><span class="kbd">border-radius: 12px</span> — burchaklarni yumaloqlaydi (chiroyli card siri!).</li></ul>`,
code:`<style>
  .quti {
    background: #e0e7ff;
    padding: 20px;
    border: 3px solid #4f46e5;
    border-radius: 14px;
    margin: 20px;
    width: 250px;
  }
  .yopishgan {
    background: #fecaca;
    border: 2px solid red;
    width: 250px; margin: 20px;
  }
</style>
<div class="quti">Men nafas oladigan chiroyli qutiman (padding + radius bor).</div>
<div class="yopishgan">Men devorga yopishganman (padding yo'q).</div>`,
teacher:`Karton quti misolida ko'rsating: kitob (content), gazeta (padding), skotch (border), qutilar orasi (margin). padding vs margin ni jonli almashtirib farqni ko'rsating.`,
keys:[`padding = ichki, margin = tashqi — adashtirmang!`,`border 3 qismli: qalinlik + tur + rang.`,`border-radius chiroyli ko'rinishning kaliti.`],
task:`3 ta kartochka (ism, yosh, shahar) yasang: har biri padding 20px, border 2px, radius 12px, margin 15px, har xil fon rangda.`,
quiz:[
{q:`Matn bilan border orasi nima?`,opts:[`margin`,`padding`,`border`,`gap`],a:1,why:`padding — ichki bo'shliq.`},
{q:`Ikki quti orasi nima?`,opts:[`padding`,`margin`,`border`,`radius`],a:1,why:`margin — tashqi bo'shliq.`},
{q:`border: 2px solid red da nechta qism bor?`,opts:[`1`,`2`,`3`,`0`],a:2,why:`Qalinlik + tur + rang.`}]},

{id:"css-4",mod:"css",n:12,title:"Display va Position: joylashtirish",time:"50 daqiqa",
goal:`block/inline farqini biladi, relative/absolute bilan elementni siljitadi.`,
theory:`<p><b>Oddiy tilda:</b> <b>block</b> — avtobus (butun qatorni egallaydi: div, h1, p). <b>inline</b> — velosiped (qatorda yonma-yon: span, a).</p><ul><li><span class="kbd">display: inline-block</span> — yonma-yon turadi, lekin eni-bo'yi berish mumkin (tugmalar uchun ideal!).</li><li><span class="kbd">position: relative</span> — o'z joyidan siljish. <span class="kbd">absolute</span> — ota-onaga yopishib siljish (ota relative bo'lishi shart!).</li><li><span class="kbd">top/left/right/bottom</span> — necha px siljishi.</li></ul>`,
code:`<style>
  .btn { display: inline-block; background: #4f46e5; color: #fff;
         padding: 10px 22px; border-radius: 99px; text-decoration: none; }
  .ota { position: relative; background: #e0e7ff; height: 150px; border-radius: 12px; }
  .bola { position: absolute; top: 10px; right: 10px;
          background: #ef4444; color: #fff; padding: 4px 12px; border-radius: 99px; }
</style>
<a class="btn" href="#">Tugma 1</a>
<a class="btn" href="#">Tugma 2</a>
<div class="ota">Ota quti
  <span class="bola">YANGI</span>
</div>`,
teacher:`2 o'quvchi bilan ko'rsating: qo'llarini yoygan (block) vs chetda turgan (inline). absolute ni "magnit" deb tushuntiring — ota relative bo'lmasa uchib ketadi.`,
keys:[`block = yangi qator, inline = yonma-yon.`,`Tugmalar uchun inline-block eng qulay.`,`absolute ishlasa, ota relative bo'lsin.`],
task:`Portfolio header ga 2 ta tugma (inline-block, yumaloq) qo'shing. Rasm ustiga "YANGI" yorlig'ini absolute bilan joylang.`,
quiz:[
{q:`Qaysi element block?`,opts:[`span`,`div`,`a`,`b`],a:1,why:`div butun qatorni egallaydi.`},
{q:`Yonma-yon + eni berish uchun nima?`,opts:[`block`,`inline-block`,`none`,`hidden`],a:1,why:`inline-block ikkala dunyoning yaxshisi.`},
{q:`absolute element kimga yopishadi?`,opts:[`Hech kimga`,`Eng yaqin relative otaga`,`Doim ekranga`,`Tasodifiy`],a:1,why:`Ota relative bo'lishi shart.`}]},

{id:"css-5",mod:"css",n:13,title:"Flexbox: qatorlarni sehrlash ✨",time:"60 daqiqa",
goal:`display:flex, justify-content, align-items, gap bilan menyu va kartalar yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> Flexbox — aqlli javon: narsalarni o'zi tekislaydi. Ota <span class="kbd">display: flex</span> desa, bolalar itoatkor bo'ladi.</p><ul><li><span class="kbd">justify-content</span> — gorizontal: <b>center</b> (o'rta), <b>space-between</b> (chetlara), <b>flex-start/end</b>.</li><li><span class="kbd">align-items: center</span> — vertikal o'rta (eng ko'p ishlatiladigan!).</li><li><span class="kbd">gap: 12px</span> — bolalar orasi (margin o'rniga!).</li><li><span class="kbd">flex-wrap: wrap</span> — sig'masa pastga tushadi (telefon uchun).</li></ul><div class="tip t"><b>🎯 Sehrli uchlik (90% holatda yetadi):</b> display:flex + justify-content:center + align-items:center = hamma narsa o'rtada!</div>`,
code:`<style>
  .menyu { display: flex; gap: 10px; background: #1e1b4b;
           padding: 12px; border-radius: 12px; }
  .menyu a { color: #fff; text-decoration: none; padding: 8px 16px;
             background: #4f46e5; border-radius: 8px; }
  .kartalar { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }
  .karta { flex: 1; min-width: 140px; background: #e0e7ff;
           padding: 20px; border-radius: 12px; text-align: center; }
  .markaz { display: flex; justify-content: center; align-items: center;
            height: 120px; background: #fef08a; border-radius: 12px; margin-top: 12px; }
</style>
<div class="menyu"><a href="#">Bosh</a><a href="#">Men</a><a href="#">Aloqa</a></div>
<div class="kartalar"><div class="karta">HTML</div><div class="karta">CSS</div><div class="karta">JS</div></div>
<div class="markaz"><b>Men o'rtadaman! 🎯</b></div>`,
teacher:`justify vs align ni "sinfda saf tortish" bilan tushuntiring: justify — qator bo'yicha, align — ustun bo'yicha.`,
keys:[`Ota flex bo'lsa, bolalar avtomatik yonma-yon.`,`justify = gorizontal, align = vertikal.`,`gap — oraliqning zamonaviy usuli.`],
task:`Portfoliongizga flex menyu (3 havola) + 3 ta ko'nikma kartasi (flex, gap, wrap) qo'shing. Bitta blokda ismingizni o'rtaga chiqaring.`,
quiz:[
{q:`Flex ni qaysi elementga beramiz?`,opts:[`Bolalarga`,`Otaga (konteynerga)`,`Hammasiga alohida`,`Hech qaysiga`],a:1,why:`display:flex ota bolalarni boshqaradi.`},
{q:`Gorizontal tekislash qaysi?`,opts:[`align-items`,`justify-content`,`gap`,`wrap`],a:1,why:`justify — asosiy o'q (gorizontal).`},
{q:`Bolalar orasi uchun zamonaviy usul?`,opts:[`margin har biriga`,`gap otaga`,`border`,`padding ekranga`],a:1,why:`gap toza va oson.`}]},

{id:"css-6",mod:"css",n:14,title:"Grid: jadvaldek dizayn",time:"55 daqiqa",
goal:`grid-template-columns bilan 2–3 ustunli galereya yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> Flex — bir qatorli javon, <b>Grid — katakli shaxmat taxtasi</b> (qator + ustun birga!). Galereya, narxlar uchun ideal.</p><ul><li><span class="kbd">display: grid; grid-template-columns: 1fr 1fr 1fr</span> — 3 teng ustun. <b>fr</b> = ulush.</li><li><span class="kbd">repeat(3, 1fr)</span> — qisqa yozuv (3 marta 1fr).</li><li><span class="kbd">gap: 12px</span> — kataklar orasi.</li><li><b>Qoida:</b> oddiy qator → flex, murakkab katak → grid.</li></ul>`,
code:`<style>
  .gal { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .gal div { background: linear-gradient(135deg,#6366f1,#8b5cf6);
             color: #fff; padding: 30px 10px; text-align: center; border-radius: 12px; }
</style>
<div class="gal">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
teacher:`fr ni "tortning ulushi" deb tushuntiring: 1fr 2fr = kichik + katta bo'lak.`,
keys:[`Grid = 2 o'lchov (qator + ustun), flex = 1 o'lchov.`,`fr — teng ulush, repeat() — qisqa yozuv.`,`Galereya va kartalar to'ri uchun grid ideal.`],
task:`"Ishlarim" bo'limi: 6 ta katakli grid galereya (har katakda loyiha nomi). repeat(3,1fr) va gap ishlating.`,
quiz:[
{q:`3 teng ustun qanday yoziladi?`,opts:[`columns: 3`,`grid-template-columns: repeat(3, 1fr)`,`flex: 3`,`grid: 3x3`],a:1,why:`repeat qisqa va toza yozuv.`},
{q:`fr nimani bildiradi?`,opts:[`Piksel`,`Ulush (fraction)`,`Foiz doim`,`Harf o'lchami`],a:1,why:`Bo'sh joyning ulushi.`},
{q:`Qachon grid, qachon flex?`,opts:[`Har doim grid`,`Oddiy qator flex, katakli tuzilma grid`,`Farqi yo'q`,`Ikkalasi ham eskirgan`],a:1,why:`To'g'ri qurolni tanlash tezlik beradi.`}]},

{id:"css-7",mod:"css",n:15,title:"Responsive + hover: telefonda ham chiroyli 📱",time:"55 daqiqa",
goal:`media query bilan mobil ko'rinish yasaydi, hover/transition bilan jonlantiradi.`,
theory:`<p><b>Oddiy tilda:</b> Sayt — suv kabi: katta idishda keng, stakanda tor bo'lishi kerak. <b>Media query</b> — "agar ekran kichik bo'lsa, boshqacha ko'rin" degan shart.</p><ul><li><span class="kbd">@media (max-width: 600px)</span> — ekran 600px dan kichik bo'lsa ichidagi qoida ishlaydi.</li><li>Telefon uchun: 3 ustun → 1 ustun, katta matn → kichik.</li><li><span class="kbd">:hover</span> — sichqon borsa nima bo'ladi. <span class="kbd">transition: .3s</span> — silliq o'tish (sehr!).</li></ul>`,
code:`<style>
  .tugma { background: #4f46e5; color: #fff; padding: 12px 26px;
           border-radius: 99px; border: none; font-size: 16px;
           transition: .3s; cursor: pointer; }
  .tugma:hover { background: #ec4899; transform: translateY(-3px); }
  .ustunlar { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 12px; }
  .ustunlar div { background: #e0e7ff; padding: 24px; border-radius: 12px; text-align: center; }
  @media (max-width: 600px) {
    .ustunlar { grid-template-columns: 1fr; }
  }
</style>
<button class="tugma">Ustiga olib boring ✨</button>
<div class="ustunlar"><div>A</div><div>B</div><div>C</div></div>`,
teacher:`Brauzer oynasini jonli toraytirib ko'rsating — o'quvchilar "voy!" deyishadi. transition siz keskin, bilan silliq — farqni ko'rsating.`,
keys:[`Media query = kichik ekranga alohida qoida.`,`hover + transition = jonli tugmalar siri.`,`Avval kompyuter, keyin telefon ko'rinishini tekshiring.`],
task:`Portfoliongizni responsive qiling: 600px dan kichikda kartalar 1 ustunga tushsin. Barcha tugmalarga hover + transition qo'shing.`,
quiz:[
{q:`Media query nima qiladi?`,opts:[`Internetni tezlashtiradi`,`Ekran o'lchamiga qarab boshqa dizayn beradi`,`Rasm yuklaydi`,`Virus topadi`],a:1,why:`Responsive dizaynning asosi.`},
{q:`hover nimaga javob beradi?`,opts:[`Bosilganda`,`Sichqon ustiga borganda`,`Sahifa yopilganda`,`Har 5 soniyada`],a:1,why:`hover — ustiga borish holati.`},
{q:`transition nima uchun?`,opts:[`Rang uchun`,`Silliq animatsiya o'tishi uchun`,`Matn uchun`,`Hech narsa uchun`],a:1,why:`Keskin emas, silliq o'zgarish.`}]},

{id:"css-8",mod:"css",n:16,title:"CSS loyiha: portfolio bezash 🏆",time:"70 daqiqa",
goal:`HTML skeletini to'liq bezab, telefon + kompyuterda chiroyli portfolio topshiradi.`,
theory:`<p><b>Marra yaqin!</b> 8 darsda o'rganganingiz: rang, shrift, box model, flex, grid, responsive, hover — hammasini birlashtiramiz.</p><ul><li><b>Reja:</b> 1) Ranglar palitrasi tanlang (2–3 rang). 2) Header ga fon + flex menyu. 3) Kartalar (radius + padding + soyalar). 4) Tugmalarga hover. 5) Media query bilan telefon ko'rinishi.</li><li><b>Soya siri:</b> <span class="kbd">box-shadow: 0 4px 14px rgba(0,0,0,.1)</span> — kartani "ko'taradi".</li><li>Tekshiruv: flex/grid ishlatilganmi? hover bormi? telefonda buzilmaydimi?</li></ul>`,
code:`<style>
  * { margin: 0; box-sizing: border-box; }
  body { font-family: Arial; background: #eef1f8; color: #222; }
  header { background: linear-gradient(135deg,#6366f1,#8b5cf6);
           color: #fff; padding: 30px; text-align: center; }
  nav { display: flex; gap: 10px; justify-content: center; margin-top: 14px; }
  nav a { color: #fff; text-decoration: none; background: rgba(255,255,255,.2);
          padding: 8px 18px; border-radius: 99px; transition: .3s; }
  nav a:hover { background: #fff; color: #6366f1; }
  .kontent { max-width: 800px; margin: 20px auto; padding: 0 14px;
             display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .karta { background: #fff; padding: 22px; border-radius: 16px;
           box-shadow: 0 4px 14px rgba(0,0,0,.08); text-align: center; transition: .3s; }
  .karta:hover { transform: translateY(-5px); }
  @media (max-width: 600px) { .kontent { grid-template-columns: 1fr; } }
</style>
<header><h1>Jasur Karimov</h1><p>Frontend o'quvchisi 🚀</p>
<nav><a href="#">Men</a><a href="#">Ishlar</a><a href="#">Aloqa</a></nav></header>
<div class="kontent">
  <div class="karta"><h3>HTML</h3><p>Skelet</p></div>
  <div class="karta"><h3>CSS</h3><p>Dizayn</p></div>
  <div class="karta"><h3>JS</h3><p>Tez kunda!</p></div>
</div>`,
teacher:`Rang tanlashda qiynalganlarga tayyor 3 palitra bering. 50 daqiqa mustaqil ish + 15 daqiqa "ko'rgazma". Eng chiroyli 3 tasini e'lon qiling.`,
keys:[`Chiroy sirlari: radius + soya + hover + 2 rang.`,`Kompyuter + telefon — ikkalasida ham tekshiring.`,`Tayyor portfolio — keyingi JS darslarida jonlanadi.`],
task:`🏆 Portfolio loyihasi: header gradient + flex menyu + 3+ karta + hover + responsive. Bu CSS modulining bahosi!`,
quiz:[
{q:`Kartani ko'tarilgan ko'rsatish uchun?`,opts:[`border`,`box-shadow`,`color`,`margin auto`],a:1,why:`Soya chuqurlik beradi.`},
{q:`Gradient nima?`,opts:[`Bitta rang`,`Rangdan rangga silliq o'tish`,`Rasm formati`,`Shrift turi`],a:1,why:`linear-gradient chiroyli fon beradi.`},
{q:`Keyingi modul nima?`,opts:[`Yana HTML`,`JavaScript — saytni jonlantirish`,`Dars tugadi`,`Faqat imtihon`],a:1,why:`Endi eng qiziq qism — JS! ⚡`}]}
];
