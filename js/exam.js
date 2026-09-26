/* Teacher-M — yakuniy imtihon (10 savol, 70+ ball = kurs tugadi) */
const EXAM = [
{q:`Ko'rinadigan matn qaysi teg ichida yoziladi?`,opts:[`head`,`body`,`style`,`meta`],a:1,why:`body — ko'rinadigan qism.`},
{q:`label input bilan qanday bog'lanadi?`,opts:[`for va id bir xil bo'lsa`,`yonma-yon yozilsa`,`rang bir xil bo'lsa`,`avtomatik`],a:0,why:`Kalit-qulf: for="x" + id="x".`},
{q:`class selektori qanday yoziladi?`,opts:[`#nom`,`.nom`,`*nom`,`nom#`],a:1,why:`Nuqta class ni bildiradi.`},
{q:`padding bilan margin farqi?`,opts:[`Bir xil`,`padding ichki, margin tashqi bo'shliq`,`margin ichki, padding tashqi`,`Ikkalasi ham rang`],a:1,why:`Ichki nafas vs tashqi oraliq.`},
{q:`Kartalarni yonma-yon qilish uchun otaga nima beramiz?`,opts:[`display: flex`,`display: block`,`display: none`,`faqat float`],a:0,why:`Flex bolalarni qatorda tekislaydi.`},
{q:`Telefonda 1 ustunga o'tkazish uchun nima?`,opts:[`@media (max-width: 600px)`,`@phone on`,`@small true`,`media: yes`],a:0,why:`Media query — responsive kaliti.`},
{q:`Qaysi o'zgaruvchi o'zgarmaydi?`,opts:[`let`,`const`,`var`,`static`],a:1,why:`const — o'zgarmas.`},
{q:`Massivda birinchi element indeksi?`,opts:[`1`,`0`,`-1`,`first`],a:1,why:`Sanoq 0 dan boshlanadi!`},
{q:`Tugma bosilishini JS da qanday eshitamiz?`,opts:[`addEventListener("click", ...)` ,`tugma.click()`,`listen("press")`,`onHover()`],a:0,why:`Faqat addEventListener hodisani kutib eshitadi.`},
{q:`Sahifa yopilganda ham qoladigan xotira?`,opts:[`let`,`localStorage`,`console.log`,`alert`],a:1,why:`Brauzer daftari saqlaydi.`}
];
