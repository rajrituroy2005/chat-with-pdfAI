# PDF-AI — Chat with PDF ✅

**Turn PDFs into interactive conversations. Upload PDF documents, store them in your dashboard, and chat with them using an intelligent chatbot that remembers previous interactions.**

---

## 🚀 Quick overview
- Built with **Next.js (App Router)** and **React (TypeScript)**.
- Auth handled by **Clerk** (protected dashboard routes).
- File uploads via **react-dropzone**.
- UI styled with **Tailwind CSS**, icons with **lucide-react**.

---

## ✨ Main features
- **Upload & store PDFs** in your dashboard (/dashboard).
- **Interactive PDF viewer** and **chat** with documents.
- **Chat memorisation** — past conversational context is preserved for more natural follow-ups.
- **Cloud backup** ready for deployment (configure storage/DB as needed).
- **Responsive UI** for mobile and desktop.

---

## 🗂️ Project structure (important files)
- `app/` — Next.js app routes and pages (landing page, `dashboard/`, `dashboard/upload/`).
- `components/` — UI components: `Header.tsx`, `Documents.tsx`, `FileUploader.tsx`, `PlaceholderDocument.tsx`, `ui/` primitives.
- `hooks/` — custom hooks (e.g., upload helpers — may be commented out while in-progress).
- `lib/` — utility functions.
- `public/images/` — static assets.
- `proxy.ts` — Clerk middleware that protects `/dashboard` routes.

---

## 🛠️ Tech stack & dependencies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Clerk (`@clerk/nextjs`) for authentication
- `react-dropzone` for drag-and-drop file uploads
- Tailwind CSS + PostCSS

You can see all dependencies in `package.json`.

---

## 🧭 Getting started (local development)
Prerequisites:
- Node.js (recommended >= 18) and npm / pnpm

Install and run:

```bash
# install
npm install

# run locally
npm run dev
```

Open http://localhost:3000.

Available scripts (from `package.json`):
- `npm run dev` — run dev server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint

---

## 🔐 Environment variables
Create a `.env.local` in the `pdf-ai` folder and set required secrets (example keys shown as placeholders):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_publishable_key
CLERK_SECRET_KEY=sk_live_your_secret_key
# Add any other keys for storage, database, or OpenAI if you integrate a model backend
```

> Note: Do NOT commit real secret keys to the repository. Use your provider's dashboard (Clerk, Vercel, etc.) to manage secrets.

---

## ⚙️ Authentication & Protected Routes
- Clerk is configured in `app/layout.tsx` and `proxy.ts` uses Clerk middleware to protect `/dashboard` routes.
- If you see `ReferenceError: Documents is not defined` or import issues, check your component imports in `app/dashboard` and ensure paths are correct.

---

## 📁 Usage & Flow
1. Sign up / sign in (Clerk provides auth UI).
2. Go to **My Documents** (Dashboard).
3. Upload PDFs on **/dashboard/upload** using drag & drop or file select (`FileUploader` component).
4. Open a document from the list and start a conversation — the chatbot will use stored context to provide better answers.

---

## 🧩 Notes & Troubleshooting
- `FileUploader.tsx` uses `react-dropzone`. If uploads are disabled or `useUpload` is commented out, implement a storage endpoint (S3/Cloudinary/Supabase Storage) and hook it into `useUpload`.
- In `proxy.ts` there is a comment to ensure route matcher covers `/dashboard(.*)` correctly — keep that in mind when protecting routes.
- If deployment fails due to missing env vars, double-check the secrets in your hosting provider.

---

## 🚀 Deployment
Recommended: **Vercel** (automatic Next.js support)
- Connect your Git repo to Vercel.
- Add the same environment variables in the Vercel project settings.
- Deploy — the app will be served with SSR and edge features as configured by Next.js.

---

## 🙌 Contributing
- Fork the repo, create a feature branch, make changes, and open a pull request.
- Keep components small and well-documented. Add tests for critical logic where applicable.

---

## 📞 Contact / Support
For questions about the codebase, open an issue in this repository or reach out to the maintainer.

---

> **Tip:** If you want, I can also add a short developer guide page in the repo (CONTRIBUTING.md) or an example `.env.local.example` file — tell me which you'd prefer.

---

**License:** Add your preferred license (MIT, Apache, etc.)


