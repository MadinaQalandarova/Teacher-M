/* Teacher-M — HTML moduli (1–8-darslar). Har dars: goal, theory, code, teacher, keys, task, quiz */
const HTML_LESSONS = [
{id:"html-1",mod:"html",n:1,title:"Internet, Web va birinchi sahifang",time:"45 daqiqa",
goal:`Dars oxirida o'quvchi brauzerda o'zining birinchi sahifasini ochadi va HTML skeletini yoddan yoza oladi.`,
theory:`<p><b>Oddiy tilda:</b> Internet — kompyuterlar orasidagi katta yo'l. Sayt — shu yo'l bo'yidagi uy. HTML — uyning <b>g'ishtlari va xonalari</b> (skeleti). Dizayn (CSS) keyin keladi, hozir faqat g'isht qo'yamiz.</p><ul><li><b>Skelet 4 qismdan iborat:</b> <span class="kbd">&lt;!DOCTYPE&gt;</span> (bu HTML5 degani), <span class="kbd">&lt;html&gt;</span> (hamma narsa), <span class="kbd">&lt;head&gt;</span> (ko'rinmas sozlama: sarlavha), <span class="kbd">&lt;body&gt;</span> (ko'rinadigan qism).</li><li>Fayl nomi doim <b>index.html</b> bilan tugaydi. Uni brauzerga sudrab olib borsangiz — sayt ochiladi!</li><li><b>VS Code</b> o'rnating, unda <span class="kbd">!</span> yozib Tab ni bossangiz — skelet tayyor bo'ladi.</li></ul>`,
code:`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mening birinchi sahifam</title>
</head>
<body>
  <h1>Salom, dunyo! 👋</h1>
  <p>Men bugun sayt yasashni boshladim.</p>
</body>
</html>`,
teacher:`Avval doskaga uy rasmini chizing: poydevor = DOCTYPE, devorlar = html, tom = head, xonalar = body. Keyin VS Code da jonli ko'rsating. O'quvchilarni "men qildim!" degizish uchun hammani brauzerda o'z ismini chiqarishga undash. 45 daqiqa: 15 nazariya + 25 amaliyot + 5 quiz.`,
keys:[`HTML — saytning skeleti, dizayn emas.`,`Ko'rinadigan hamma narsa doim <b>body</b> ichida yoziladi.`,`Faylni saqlab brauzerda ochish = birinchi g'alaba.`],
task:`VS Code da index.html oching. Sarlavhaga o'z ismingizni, paragrafga 2 gapda orzuingizni yozing. Faylni saqlab brauzerda oching va skrinshotni ustozga ko'rsating.`,
quiz:[
{q:`HTML nima uchun kerak?`,opts:[`Saytning skeleti (tuzilmasi) uchun`,`Faqat rasm chizish uchun`,`Internetni tezlashtirish uchun`,`Virusdan himoya uchun`],a:0,why:`HTML g'isht kabi — sahifa tuzilmasini quradi.`},
{q:`Ko'rinadigan matn qaysi teg ichiga yoziladi?`,opts:[`head`,`body`,`title`,`meta`],a:1,why:`body — ko'rinadigan qism, head — ko'rinmas sozlamalar.`},
{q:`HTML fayl kengaytmasi qaysi?`,opts:[`.txt`,`.html`,`.jpg`,`.mp3`],a:1,why:`Brauzer faqat .html ni sayt deb tushunadi.`}]},

{id:"html-2",mod:"html",n:2,title:"Teg, atribut, sarlavha va paragraf",time:"45 daqiqa",
goal:`Teg va atribut farqini tushunadi, h1–h6 va p ni to'g'ri ishlatadi.`,
theory:`<p><b>Oddiy tilda:</b> Teg — g'ishtning nomi. Masalan <span class="kbd">&lt;h1&gt;</span> katta sarlavha degani, <span class="kbd">&lt;p&gt;</span> oddiy matn (paragraf) degani.</p><ul><li><b>Ochuvchi + yopuvchi:</b> <span class="kbd">&lt;p&gt;matn&lt;/p&gt;</span> — aksariyat teglar shunday. Yopuvchida <b>/</b> bo'ladi.</li><li><b>Yolg'iz teglar:</b> <span class="kbd">&lt;br&gt;</span> (yangi qator), <span class="kbd">&lt;hr&gt;</span> (chiziq) — yopilmaydi.</li><li><b>Sarlavhalar ierarxiyasi:</b> h1 sahifada <b>1 marta</b> (eng katta), keyin h2, h3 kichiklashib boradi. Kitob boblari kabi.</li><li><b>Izoh:</b> <span class="kbd">&lt;!-- ko'rinmaydi --&gt;</span> — brauzerda chiqmaydi, faqat dasturchiga eslatma.</li></ul>`,
code:`<h1>Mening blogim</h1>
<p>Bu birinchi paragraf. HTML juda oson ekan!</p>
<h2>Sevimli mashg'ulotim</h2>
<p>Men futbol o'ynashni yaxshi ko'raman.</p>
<hr>
<!-- Bu izoh brauzerda ko'rinmaydi -->
<p>Yangi qator uchun<br>mana shu teg ishlatiladi.</p>`,
teacher:`Kitob misolini keltiring: h1 = kitob nomi, h2 = bob nomi, p = matn. O'quvchilardan h1 ni 2 marta yozganini topib tuzattiring — xato qilib o'rganishadi.`,
keys:[`Teg = <b>&lt;nom&gt;</b>, aksariyati yopilishi shart.`,`h1 bitta bo'ladi, h2–h6 pastga qarab kichiklashadi.`,`<b>br</b> — qator tashlash, <b>hr</b> — chiziq.`],
task:`O'zingiz haqingizda mini-matn yozing: 1 ta h1 (ismingiz), 2 ta h2 (oilam / orzuim), har biri ostida 2–3 gaplik p. Oxiriga hr qo'ying.`,
quiz:[
{q:`Qaysi yozuv to'g'ri?`,opts:[`<p>Salom</p>`,`<p>Salom`,`pSalom/p`,`<P Salom>`],a:0,why:`Teg ochiladi va / bilan yopiladi.`},
{q:`h1 sahifada necha marta bo'lishi kerak?`,opts:[`Cheksiz`,`Faqat 1 marta`,`5 marta`,`Umuman bo'lmasligi kerak`],a:1,why:`h1 — eng asosiy sarlavha, bittagina bo'ladi.`},
{q:`<!-- salom --> nima qiladi?`,opts:[`Qalin matn chiqaradi`,`Brauzerda ko'rinmas izoh`,`Rasm qo'yadi`,`Sahifani o'chiradi`],a:1,why:`Izoh faqat kodda ko'rinadi, sahifada yo'q.`}]},

{id:"html-3",mod:"html",n:3,title:"Havola, rasm va ro'yxatlar",time:"50 daqiqa",
goal:`a, img, ul/ol ni ishlatib, rasmlari va menyusi bor sahifa yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> <b>a</b> — eshik (boshqa sahifaga olib boradi), <b>img</b> — derazadagi rasm, <b>ro'yxat</b> — javondagi narsalar qatori.</p><ul><li><b>Havola:</b> <span class="kbd">&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</span>. <b>href</b> — manzil degan atribut. Yangi oynada ochish uchun <span class="kbd">target="_blank"</span> qo'shing.</li><li><b>Rasm:</b> <span class="kbd">&lt;img src="mushuk.jpg" alt="mushuk"&gt;</span>. <b>src</b> — rasm yo'li, <b>alt</b> — rasm chiqmasa chiqadigan matn (majburiy!).</li><li><b>Ro'yxat:</b> <span class="kbd">&lt;ul&gt;</span> — nuqtali (belgili), <span class="kbd">&lt;ol&gt;</span> — raqamli, ichida <span class="kbd">&lt;li&gt;</span> lar bo'ladi.</li></ul>`,
code:`<h2>Mening sevimli saytlarim</h2>
<ul>
  <li><a href="https://google.com" target="_blank">Google</a></li>
  <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
</ul>
<h2>Kun tartibim</h2>
<ol>
  <li>Ertalab turaman</li>
  <li>Dars qilaman</li>
  <li>Kod yozaman</li>
</ol>
<img src="https://via.placeholder.com/300x180" alt="Namuna rasm">`,
teacher:`Atributni "tegning sozlamasi" deb tushuntiring (mashina rangi kabi). alt ni ataylab xato rasm yo'li bilan ko'rsating — matn chiqadi, hamma tushunadi. ul vs ol ni "bozor ro'yxati vs poyga natijasi" bilan solishtiring.`,
keys:[`a + href = havola, img + src = rasm.`,`alt ni hech qachon bo'sh qoldirmang.`,`ul = nuqta, ol = raqam, har ikkisida li bo'ladi.`],
task:`"Sevimli taomlarim" sahifasi: h1 + 5 ta taomlik ul + pishirish tartibi uchun 4 qadamlik ol + 1 ta rasm. 2 ta tashqi havola qo'shing.`,
quiz:[
{q:`Havola qaysi atribut bilan ishlaydi?`,opts:[`src`,`href`,`alt`,`link`],a:1,why:`href — manzil (hyperlink reference).`},
{q:`Rasm chiqmasa o'rniga nima ko'rinadi?`,opts:[`src`,`alt matni`,`href`,`hech narsa`],a:1,why:`alt — zaxira matn va qidiruv tizimlari uchun.`},
{q:`Raqamli ro'yxat qaysi teg?`,opts:[`ul`,`ol`,`li`,`list`],a:1,why:`ol = ordered list (tartibli), ul = tartibsiz.`}]},

{id:"html-4",mod:"html",n:4,title:"Jadvallar: dars jadvali yasaymiz",time:"45 daqiqa",
goal:`table, tr, td, th bilan chiroyli jadval tuza oladi.`,
theory:`<p><b>Oddiy tilda:</b> Jadval — katakli daftar. <span class="kbd">&lt;table&gt;</span> — daftar, <span class="kbd">&lt;tr&gt;</span> — qator (row), <span class="kbd">&lt;td&gt;</span> — katak, <span class="kbd">&lt;th&gt;</span> — qalin sarlavha katak.</p><ul><li>Har qator <b>tr</b> ichida, har katak <b>td/th</b> ichida bo'lishi shart — uya kabi.</li><li><b>border="1"</b> qo'ysangiz chiziqlar ko'rinadi (keyin CSS da chiroyli qilamiz).</li><li>Dars jadvali, narxlar ro'yxati — hammasi table.</li></ul>`,
code:`<h2>Haftalik dars jadvalim</h2>
<table border="1" cellpadding="8">
  <tr>
    <th>Kun</th>
    <th>Fan</th>
    <th>Soat</th>
  </tr>
  <tr>
    <td>Dushanba</td>
    <td>HTML</td>
    <td>10:00</td>
  </tr>
  <tr>
    <td>Seshanba</td>
    <td>CSS</td>
    <td>10:00</td>
  </tr>
</table>`,
teacher:`Doskaga 3x3 katak chizib, qaysi biri tr/qaysi biri td ekanini ko'rsating. O'quvchilarga o'z maktab jadvalini yozdiring — shaxsiy misol tez yodda qoladi.`,
keys:[`table ichida tr, tr ichida td/th — tartib buzilmaydi.`,`th — sarlavha (qalin, o'rtada), td — oddiy katak.`,`Chiroyli ko'rinish CSS da bo'ladi, hozir tuzilma muhim.`],
task:`O'z haftalik dars jadvalingizni table bilan yozing: kamida 4 qator + th sarlavhalar. border va cellpadding qo'shing.`,
quiz:[
{q:`Jadval qatori qaysi teg?`,opts:[`td`,`tr`,`table`,`th`],a:1,why:`tr = table row (qator).`},
{q:`Oddiy katak qaysi?`,opts:[`th`,`td`,`tr`,`tc`],a:1,why:`td = table data (katak).`},
{q:`th ning td dan farqi?`,opts:[`Farqi yo'q`,`th qalin va sarlavha uchun`,`th faqat rasm uchun`,`th jadvalni o'chiradi`],a:1,why:`th = table header, qalin chiqadi.`}]},

{id:"html-5",mod:"html",n:5,title:"Formalar 1: input, label, button",time:"55 daqiqa",
goal:`Login formasi yasaydi: label + input + button bog'lanishini tushunadi.`,
theory:`<p><b>Oddiy tilda:</b> Forma — mehmonxonadagi anketa varaqasi. Odam yozadi, tugmani bosadi, ma'lumot ketadi.</p><ul><li><span class="kbd">&lt;form&gt;</span> — anketa varaqasi. Ichida inputlar bo'ladi.</li><li><span class="kbd">&lt;label for="ism"&gt;</span> + <span class="kbd">&lt;input id="ism"&gt;</span> — <b>for va id bir xil bo'lsa</b>, yozuvni bossangiz input yonadi (bog'lanish!).</li><li><b>type</b> turlari: <span class="kbd">text</span> (matn), <span class="kbd">password</span> (nuqtalar), <span class="kbd">email</span>, <span class="kbd">number</span>.</li><li><span class="kbd">placeholder</span> — ichidagi xira maslahat matni. <span class="kbd">button</span> — yuborish tugmasi.</li></ul>`,
code:`<h2>Kirish formasi</h2>
<form>
  <label for="ism">Ismingiz:</label><br>
  <input type="text" id="ism" placeholder="Masalan: Jasur"><br><br>
  <label for="parol">Parol:</label><br>
  <input type="password" id="parol" placeholder="Kamida 6 belgi"><br><br>
  <label for="pochta">Email:</label><br>
  <input type="email" id="pochta" placeholder="siz@mail.com"><br><br>
  <button type="submit">Kirish</button>
</form>`,
teacher:`label-input bog'lanishini jonli ko'rsating: for noto'g'ri bo'lsa bosganda yonmasligini ko'ring. password da yozganda nuqta chiqishini hamma yaxshi ko'radi — shu yerda qiziqish uyg'onadi.`,
keys:[`label for = input id — bir xil bo'lishi shart.`,`type ga qarab input o'zgaradi: password yashiradi, email tekshiradi.`,`placeholder — yordamchi matn, label o'rnini bosmaydi.`],
task:`Ro'yxatdan o'tish formasi: ism (text), yosh (number), email, parol (password) + "Ro'yxatdan o'tish" button. Har biriga label va placeholder yozing.`,
quiz:[
{q:`label input bilan qanday bog'lanadi?`,opts:[`for va id bir xil bo'lsa`,`yonma-yon yozilsa`,`rang bir xil bo'lsa`,`bog'lanmaydi`],a:0,why:`for="ism" va id="ism" — kalit-qulf kabi.`},
{q:`Parol uchun qaysi type?`,opts:[`text`,`password`,`secret`,`hidden`],a:1,why:`password yozuvni nuqta qilib yashiradi.`},
{q:`placeholder nima?`,opts:[`Tugma matni`,`Input ichidagi xira yordam matni`,`Sarlavha`,`Rasm`],a:1,why:`Foydalanuvchiga nima yozishni ko'rsatadi.`}]},

{id:"html-6",mod:"html",n:6,title:"Formalar 2: radio, checkbox, select",time:"50 daqiqa",
goal:`Tanlovli forma elementlarini farqlaydi va so'rovnoma yasaydi.`,
theory:`<p><b>Oddiy tilda:</b> Ba'zi savollarda bitta javob (radio), ba'zisida ko'p javob (checkbox), ba'zisida ro'yxatdan tanlash (select) kerak.</p><ul><li><b>radio</b> — bitta tanlov (jinsi, sinf). <b>name bir xil bo'lsa</b>, bittasi tanlanganda ikkinchisi o'chadi!</li><li><b>checkbox</b> — ko'p tanlov (qiziqishlar). Har biri alohida.</li><li><b>select + option</b> — ochiladigan ro'yxat (viloyat tanlash).</li><li><b>textarea</b> — katta matn (fikr yozish). <b>required</b> — to'ldirmasdan yuborib bo'lmaydi.</li></ul>`,
code:`<h2>So'rovnoma</h2>
<form>
  <p>Jinsingiz:</p>
  <input type="radio" id="o" name="jins" value="ogil">
  <label for="o">O'g'il</label>
  <input type="radio" id="q" name="jins" value="qiz">
  <label for="q">Qiz</label>
  <p>Qiziqishlaringiz:</p>
  <input type="checkbox" id="s"> <label for="s">Sport</label>
  <input type="checkbox" id="m"> <label for="m">Musiqa</label>
  <input type="checkbox" id="k"> <label for="k">Kitob</label>
  <p>Viloyatingiz:</p>
  <select>
    <option>Toshkent</option>
    <option>Samarqand</option>
    <option>Buxoro</option>
  </select>
  <p>Fikringiz:</p>
  <textarea rows="3" cols="30" placeholder="Fikringizni yozing..."></textarea><br><br>
  <button type="submit">Yuborish</button>
</form>`,
teacher:`radio da name ni ataylab har xil qilib ko'rsating — ikkalasi ham tanlanib qoladi, xato ko'rinadi. Keyin name ni bir xil qiling — sehr ishlaydi! Shu kontrast yodda qoladi.`,
keys:[`radio da name bir xil = bitta tanlov; checkbox da mustaqil.`,`select ichida option lar bo'ladi.`,`required to'ldirishni majbur qiladi, textarea — katta matn uchun.`],
task:`"Kursga yozilish" anketasi: ism (required), telefon, kursni tanlash (select: HTML/CSS/JS), dars vaqti (radio: ertalab/kechqurun), qo'shimcha (checkbox) + textarea izoh.`,
quiz:[
{q:`Radio tugmalarda bittagina tanlash uchun nima bir xil bo'lishi kerak?`,opts:[`id`,`name`,`value`,`type`],a:1,why:`name bir xil bo'lsa brauzer ularni bitta guruh deb biladi.`},
{q:`Ochiladigan ro'yxat qaysi teglar?`,opts:[`input + list`,`select + option`,`radio + check`,`menu + item`],a:1,why:`select — quti, option — variantlar.`},
{q:`required nima qiladi?`,opts:[`Maydonni yashiradi`,`To'ldirmaguncha yuborishga ruxsat bermaydi`,`Matnni qalin qiladi`,`Formani o'chiradi`],a:1,why:`Majburiy maydon degani.`}]},

{id:"html-7",mod:"html",n:7,title:"Semantik teglar: to'g'ri skelet",time:"45 daqiqa",
goal:`div o'rniga header, nav, main, footer ishlatib to'g'ri sahifa tuzadi.`,
theory:`<p><b>Oddiy tilda:</b> <span class="kbd">&lt;div&gt;</span> — nomsiz quti (hamma narsa). Semantik teglar — <b>nomli xonalar</b>: oshxona, yotoqxona kabi. Qidiruv tizimlari (Google) nomli xonalarni yaxshi ko'radi.</p><ul><li><span class="kbd">&lt;header&gt;</span> — bosh qism (logo + menyu), <span class="kbd">&lt;nav&gt;</span> — havolalar menyusi.</li><li><span class="kbd">&lt;main&gt;</span> — asosiy kontent, <span class="kbd">&lt;section&gt;</span> — bo'lim, <span class="kbd">&lt;article&gt;</span> — mustaqil maqola.</li><li><span class="kbd">&lt;footer&gt;</span> — pastki qism (manzil, telefon).</li><li><span class="kbd">&lt;div&gt;</span> — guruhlash uchun, <span class="kbd">&lt;span&gt;</span> — matn ichida kichik bo'lak uchun.</li></ul>`,
code:`<header>
  <h1>Mening saytim</h1>
  <nav>
    <a href="#">Bosh sahifa</a> |
    <a href="#">Men haqimda</a> |
    <a href="#">Aloqa</a>
  </nav>
</header>
<main>
  <section>
    <h2>Men haqimda</h2>
    <p>Men <span style="color:red">frontend</span> o'rganayapman.</p>
  </section>
  <article>
    <h2>Birinchi maqolam</h2>
    <p>HTML juda qiziqarli ekan!</p>
  </article>
</main>
<footer>
  <p>© 2026 Mening saytim | Tel: +998 90 123 45 67</p>
</footer>`,
teacher:`Uy rejasi chizing: kirish = header, koridor = nav, mehmonxona = main, ombor = footer. Keyin yomon misol (hamma narsa div) va yaxshi misol (semantik) ni yonma-yon ko'rsating.`,
keys:[`div = nomsiz quti, semantik teg = vazifasi aniq quti.`,`Sahifa tartibi: header → nav → main → footer.`,`span — matn ichida, div — bloklarni guruhlashda.`],
task:`O'zingizning bir sahifalik saytingizni semantikaga o'tkazing: header (ism + nav 3 havola), main ichida 2 ta section, footer (muallif + yil).`,
quiz:[
{q:`Menyu (navigatsiya) uchun qaysi teg?`,opts:[`nav`,`menu2`,`links`,`navigation2`],a:0,why:`nav — navigation, menyu uchun maxsus.`},
{q:`Asosiy kontent qaysi tegga yoziladi?`,opts:[`header`,`main`,`footer`,`head`],a:1,why:`main — sahifaning asosiy qismi.`},
{q:`div bilan header farqi?`,opts:[`Farqi yo'q`,`header ning vazifasi aniq (semantik), div nomsiz quti`,`div katta, header kichik`,`header faqat rasm uchun`],a:1,why:`Semantika Google va dasturchiga tushunarli bo'ladi.`}]},

{id:"html-8",mod:"html",n:8,title:"HTML loyiha: portfolio skeleti 🏆",time:"60 daqiqa",
goal:`O'rgangan hamma narsani jamlab, shaxsiy portfolio sahifasi skeletini topshiradi.`,
theory:`<p><b>Tabriklaymiz — HTML ning 90% ini bildingiz!</b> Shu darsda hammasini birlashtiramiz: sarlavha, rasm, ro'yxat, jadval, forma, semantika — bitta sahifada.</p><ul><li><b>Loyiha rejasi:</b> header (ism + nav) → men haqimda (rasm + matn) → ko'nikmalar (ul) → dars jadvali (table) → aloqa formasi → footer.</li><li>Chiroyli bo'lmasa ham mayli — <b>keyingi modul (CSS)</b> da bezatamiz. Hozir tuzilma to'g'ri bo'lsin.</li><li>Ustoz tekshiradigan 5 narsa: semantik teglar, bitta h1, alt li rasm, bog'langan label lar, kamida 1 jadval.</li></ul>`,
code:`<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Jasur — Portfolio</title></head>
<body>
<header>
  <h1>Jasur Karimov</h1>
  <nav><a href="#men">Men</a> | <a href="#jadval">Jadval</a> | <a href="#aloqa">Aloqa</a></nav>
</header>
<main>
  <section id="men">
    <h2>Men haqimda</h2>
    <img src="https://via.placeholder.com/200" alt="Jasurning rasmi">
    <p>Men 15 yoshdaman, frontend o'rganayapman.</p>
    <h3>Ko'nikmalarim</h3>
    <ul><li>HTML skelet</li><li>Jadval va forma</li><li>Semantik teglar</li></ul>
  </section>
  <section id="jadval">
    <h2>Mashg'ulot jadvalim</h2>
    <table border="1" cellpadding="8">
      <tr><th>Kun</th><th>Mavzu</th></tr>
      <tr><td>Dushanba</td><td>HTML takrorlash</td></tr>
      <tr><td>Chorshanba</td><td>CSS boshlash</td></tr>
    </table>
  </section>
  <section id="aloqa">
    <h2>Aloqa</h2>
    <form>
      <label for="a-ism">Ismingiz:</label><br>
      <input type="text" id="a-ism" placeholder="Ismingiz"><br><br>
      <label for="a-xabar">Xabar:</label><br>
      <textarea id="a-xabar" rows="3" placeholder="Xabaringiz..."></textarea><br><br>
      <button type="submit">Yuborish</button>
    </form>
  </section>
</main>
<footer><p>© 2026 Jasur Karimov</p></footer>
</body>
</html>`,
teacher:`Bu dars imtihon kabi o'tkazing: 40 daqiqa mustaqil ish, 15 daqiqa himoya (har o'quvchi kodini tushuntiradi), 5 daqiqa quiz. Tayyor ishni keyingi CSS darslarida bezatishini ayting — motivatsiya oshadi.`,
keys:[`Yaxshi loyiha = to'g'ri tuzilma, chiroyi keyin.`,`Tekshiruv: h1 bitta, alt bor, label bog'langan, jadval bor.`,`Bu skelet — CSS modulida portfolio bo'ladi.`],
task:`🏆 O'z portfoliongiz skeletini to'liq yozing (yuqoridagi rejada, lekin o'z ma'lumotlaringiz bilan). Fayl portfolio.html bo'lsin. Ustozga topshiring — bu HTML modulining bahosi!`,
quiz:[
{q:`Portfolioda h1 nechta bo'lishi kerak?`,opts:[`3 ta`,`1 ta`,`10 ta`,`0 ta`],a:1,why:`Bitta sahifa — bitta asosiy sarlavha.`},
{q:`Rasmda alt nima uchun?`,opts:[`Chiroy uchun`,`Rasm chiqmasa matn chiqishi + qidiruv uchun`,`Tezlik uchun`,`Hech narsa uchun`],a:1,why:`Majburiy va foydali atribut.`},
{q:`Keyingi modulda nimani o'rganamiz?`,opts:[`CSS — dizaynni`,`Suzishni`,`Matematikani`,`Hech narsani`],a:0,why:`HTML skelet, CSS — bezak. Davom etamiz! 🚀`}]}
];
