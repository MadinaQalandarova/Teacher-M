# Teacher-M — 0 dan HTML • CSS • JavaScript (2 oylik o'quv platformasi)

O'quvchilar uchun platforma (TV da ko'rsatishga mos): 2 oyda noldan frontend asoslari.
Har darsda: sodda tushuntirish + rasm-chizma + misol kod + jonli sinash + topshiriq + quiz (70+ ball = dars yopiladi).
Ustoz metodikasi alohida **"Ustoz uchun"** sahifada — darsda ko'rinmaydi.
Bosh sahifada **"Eng ko'p borilganlar"** dashboardi bor — eng ko'p ochilgan 5 dars (tashriflar brauzerda hisoblanadi).

## Ochish

`index.html` faylini ikki marta bosing — server va internet kerak emas.
Natijalar brauzerda saqlanadi (localStorage).

## Tuzilma (har biri o'z vazifasini qiladi)

```
├── index.html           # Faqat sahifa strukturasi (dizayn/kod yo'q)
├── styles.css           # "Tungi teal" dizayn (tun/kunduz, responsive)
└── js/
    ├── lessons-html.js  # HTML moduli — 1–9-darslar
    ├── lessons-css.js   # CSS moduli — 10–17-darslar
    ├── lessons-js.js    # JS moduli — 18–25-darslar
    ├── exam.js          # Yakuniy imtihon — 10 savol
    └── app.js           # Dvigatel: navigatsiya, quiz, baholash, playground, ustoz sahifasi
```

## Dastur (25 dars + imtihon)

| Hafta | Modul | Darslar |
|-------|-------|---------|
| 1–2 | HTML — skelet | 1–9: birinchi sahifa, 20 teg, atributlar, ro'yxat, jadval, forma, semantika, loyiha |
| 3–4 | CSS — dizayn | 10–17: selektor, rang, box model, flex, grid, responsive, loyiha |
| 5–8 | JS — jonlantirish | 18–25: console, if/else, sikl, funksiya, DOM, TODO, quiz ilovasi |
| Yakun | Imtihon | 10 savol, 70+ ball = kurs tugadi |

## Muhim qoida (topilgan xatodan saboq)

Hech qachon `index.html` ichiga katta `<script>` yozilmaydi — hamma JS `js/` papkasida.
Sababi: HTML ichidagi `"</script>"` matni brauzerda skriptni erta yopib qo'yib, sahifani buzgan edi.
Quiz savol-javoblaridagi `<`, `>` belgilar doim escape qilinadi (aks holda brauzer "yutib yuboradi").
