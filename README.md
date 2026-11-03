# Numan Farukh – portfolio site

A static site: plain HTML, CSS and a little JavaScript. No build step, no dependencies. Fonts are bundled in `assets/fonts`, so nothing loads from a third party.

## Preview on your computer

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser. (Open it through the server, not by double-clicking `index.html`, so fonts and images load the same way they will online.)

## Publish on GitHub Pages

1. On GitHub, create a **public** repository named exactly `fanuman.github.io`.
2. In this folder, run:

```
git init -b main
git add .
git commit -m "Add portfolio site"
git remote add origin https://github.com/fanuman/fanuman.github.io.git
git push -u origin main
```

3. In the repository, open Settings, then Pages. Under "Build and deployment" choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute or two the site is live at https://fanuman.github.io

If you later use a custom domain, update `og:url`, `og:image` and the JSON-LD block in the `<head>` of `index.html`.

## Add or change things

- **Resume:** replace `assets/Numan_Farukh_Resume.pdf` with the new file, keeping the same name.
- **A new project:** copy one `<article class="mini">…</article>` block in the "More projects" list and edit the text. For a full case study, copy an `<article class="project">` block.
- **Colours and fonts:** the tokens are at the top of `styles.css`. The colours follow one legend: amber is the model, mint is plain code, violet is a person, coral is a problem.
- **Hero animation:** the steps are the `<li class="step …">` items in `index.html`. `app.js` only reveals them in order.
- **Photo:** replace `assets/img/numan.jpg` (square, at least 600 px).
