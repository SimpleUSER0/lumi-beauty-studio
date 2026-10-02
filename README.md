# Lumi Beauty Studio

თანამედროვე თბილისის beauty/nail salon-ის ერთგვერდიანი responsive დემო.

## პროექტი

სუფთა HTML, CSS და JavaScript. Static: არ აქვს backend, build პროცესი ან გარე დამოკიდებულებები. `index.html` publish directory-ის root-შია და ყველა asset relative path-ს იყენებს, ამიტომ GitHub Pages-ის `/lumi-beauty-studio/` მისამართზეც მუშაობს.

სექციები: Hero / Book Appointment CTA, About, Services & Prices, Gallery, Location & Hours, Contact / Socials, Footer.

ინტერაქციები: მობილური მენიუ, სერვისების კატეგორიის ფილტრი, ფოტოს გადიდება. კლავიატურის focus, Escape-ით დახურვა და reduced-motion მხარდაჭერა.

## ნახვა კომპიუტერზე

შეგიძლია პირდაპირ გახსნა `index.html` ბრაუზერში. ან პროექტის საქაღალდეში გაუშვი:

```bash
python -m http.server 8000
```

შემდეგ გახსენი http://localhost:8000.

## GitHub Pages deployment

1. GitHub-ზე შექმენი repository `lumi-beauty-studio`.
2. ატვირთე პროექტის საქაღალდის **შიგთავსი** repository-ის root-ში: `index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll` და README. `index.html` არ უნდა აღმოჩნდეს დამატებით nested საქაღალდეში.
3. Repository → Settings → Pages.
4. Source: **Deploy from a branch**. Branch: **main**, Folder: **/(root)**. დააჭირე Save.
5. გამოქვეყნების შემდეგ გახსენი Pages-ში ნაჩვენები ბმული, ჩვეულებრივ `https://YOUR_USERNAME.github.io/lumi-beauty-studio/`.

Git-ით ატვირთვის ალტერნატივა:

```bash
git init -b main
git add .
git commit -m "Create Lumi Beauty Studio demo"
git remote add origin https://github.com/YOUR_USERNAME/lumi-beauty-studio.git
git push -u origin main
```

ოფიციალური ინსტრუქცია: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## შესაცვლელი მონაცემები

`index.html`: ტექსტები, ფასები, საათები, მისამართი და კონტაქტები. `styles.css`: ფერები და განლაგება. `assets/`: ფოტოები.

Lumi გამოგონილი დემო სტუდიაა. ფასები და საათები საორიენტაციოა. რუკის ბმული აჩვენებს ჭავჭავაძის გამზირს და არა დადასტურებულ სტუდიის მისამართს. ტელეფონი, ელფოსტა და Instagram დასამატებელია; ყალბი საკონტაქტო ბმულები არ გამოიყენება.

Book Appointment CTA მიდის Contact სექციაზე. რეალური ონლაინ დაჯავშნა/ფორმის გაგზავნა არ არის ჩართული. გამოქვეყნებამდე დაამატე რეალური `tel:`, `mailto:`, Instagram ან დაჯავშნის სერვისის ბმული.

ორი AI ფოტო შექმნილია built-in image generation-ით ამ დემოსთვის: ელეგანტური თანამედროვე სალონის ინტერიერი და ბუნებრივი მანიკური შინდისფერი აქცენტით. ფოტოები რეალურ ბიზნესს არ ასახავს.
