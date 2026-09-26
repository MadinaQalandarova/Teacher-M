# Teacher-M — 0 dan HTML • CSS • JavaScript (2 oylik o'quv platformasi)

O'qituvchilar uchun tayyor platforma: 2 oyda o'quvchilarni noldan frontend asoslariga olib chiqish.
Har darsda: sodda tushuntirish + misol kod + jonli sinash + topshiriq + quiz (70+ ball = dars yopiladi).

## Ochish

`index.html` faylini ikki marta bosing — server va internet kerak emas.
Natijalar brauzerda saqlanadi (localStorage).

## Tuzilma (har biri o'z vazifasini qiladi)

```
├── index.html           # Faqat sahifa strukturasi (dizayn/kod yo'q)
├── styles.css           # Barcha dizayn (tun/kunduz, responsive)
└── js/
    ├── lessons-html.js  # HTML moduli — 1–8-darslar
    ├── lessons-css.js   # CSS moduli — 9–16-darslar
    ├── lessons-js.js    # JS moduli — 17–24-darslar
    ├── exam.js          # Yakuniy imtihon — 10 savol
    └── app.js           # Dvigatel: navigatsiya, quiz, baholash, playground
```

## Dastur (24 dars + imtihon)

| Hafta | Modul | Darslar |
|-------|-------|---------|
| 1–2 | 🟧 HTML — skelet | 1–8: birinchi sahifa, teglar, ro'yxat, jadval, forma, semantika, loyiha |
| 3–4 | 🟦 CSS — dizayn | 9–16: selektor, rang, box model, flex, grid, responsive, loyiha |
| 5–8 | 🟨 JS — jonlantirish | 17–24: console, if/else, sikl, funksiya, DOM, TODO, quiz ilovasi |
| Yakun | 🎓 Imtihon | 10 savol, 70+ ball = kurs tugadi |

## Muhim qoida (topilgan xatodan saboq)

Hech qachon `index.html` ichiga katta `<script>` yozilmaydi — hamma JS `js/` papkasida.
Sababi: HTML ichidagi `"</script>"` matni brauzerda skriptni erta yopib qo'yib, sahifani buzgan edi.
