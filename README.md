# Samad A. Khan — The Living Interface

A single-page portfolio in React and JavaScript, with Vite, Tailwind CSS, shadcn-style Button and Dialog components built on Radix primitives, GSAP, Lenis, and a lazy-loaded React Three Fiber sculpture.

## Run

```sh
npm install
npm run dev
```

On PowerShell with script execution disabled, use `npm.cmd` instead of `npm`.

```sh
npm run build
npm run preview
```

Content and optional external project URLs are in `src/data.js`. Missing repository and demo links are hidden. The contact address is configured in `src/main.jsx`. No social profiles or resume download are shown because these assets were not provided.

All project previews are illustrative, browser-local demonstrations. They do not connect to project backends. Candidate search filters sample data; sending a preview message affects only the local preview.

Supports reduced motion, a WebGL failure fallback, keyboard focus, and Escape dismissal and focus trapping for case studies. The separate 3D module pauses rendering offscreen. Google Fonts load with swap and system fallbacks.

## EmailJS setup

Copy `.env.example` to `.env` and add the EmailJS service ID, template ID, and public key. The template should use `{{from_name}}`, `{{reply_to}}`, `{{message}}`, `{{subject}}`, and `{{to_name}}`. Restart Vite after changing environment variables.
