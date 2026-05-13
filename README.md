# SPECULATIVE VISIONS OF A POST-CLIMATE FUTURE Website

This is a simple static exhibition website for GitHub Pages.

## Pages

- `index.html`: Homepage and exhibition intro
- `artists.html`: Artists
- `artworks.html`: Artworks
- `curatorial-team.html`: Curatorial team
- `documentation.html`: Photos and videos
- `assets/css/style.css`: Shared website style
- `assets/images`: Put images here
- `assets/videos`: Put videos here

## How to publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this package.
3. Go to repository `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. GitHub will give you a website link.

## How to add an image

Put your image into `assets/images`, for example:

```html
<img src="assets/images/installation-view.jpg" alt="Installation view">
```

## How to add a video

Put your video into `assets/videos`, for example:

```html
<video controls src="assets/videos/walkthrough.mp4"></video>
```

For large videos, upload to YouTube or Vimeo and embed instead.
