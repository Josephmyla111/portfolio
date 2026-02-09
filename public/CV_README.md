# Replace with your files

## CV PDF
The "Download CV" button links to `/Joseph_Raju_Myla_CV.pdf`.
- Export your CV as a PDF and name it `Joseph_Raju_Myla_CV.pdf`
- Place it in the `public` folder
- Delete `src/app/api/cv/route.ts` and remove the `rewrites` from `next.config.mjs`

## Profile Photo
Add your professional headshot for the About section:
- Name the file `profile.jpg` (or .png)
- Place it in the `public` folder
- Update `profileImage` in `src/data/profile.ts` to `"/profile.jpg"`
