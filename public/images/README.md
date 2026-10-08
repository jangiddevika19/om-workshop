# OM WORKSHOP — image slots

Drop your real photos here using the SAME file names and the website updates
automatically (no code changes). Until a file exists, the site shows a neutral
placeholder, so nothing looks broken.

Different names / more photos? Edit only:
  - src/data/services.js   (service card images)
  - src/data/gallery.js    (gallery images, captions, categories)
  - src/data/images.js     (hero / about / custom design / craftsmanship)

Recommended: JPG or WebP, ~1600px wide, under 300 KB each.

  hero.jpg            wide, landscape (1920x1080)
  about.jpg           portrait or 4:5
  custom-design.jpg   wide
  craftsmanship.jpg   close-up (welding, joints, finishing), 4:5 or 3:2
  services/*.jpg      4:3
  gallery/*.jpg       any ratio — the gallery adapts (see "aspect" in gallery.js)
