# King Solomon Investment & Supplies ltd

Responsive business website built with Next.js App Router, TypeScript, Tailwind CSS 4, and Resend. The initial release sends inquiries by email and does not use a database.

## Local setup

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resend configuration

Set these server-side values in `.env.local` before testing inquiry delivery:

- `RESEND_API_KEY`: API key from the Resend account.
- `RESEND_FROM_EMAIL`: sender using a domain verified with Resend.
- `CONTACT_TO_EMAIL`: business inbox; defaults to `info@kingsoloinvestco.com`.
- `NEXT_PUBLIC_SITE_URL`: canonical site origin used by metadata, sitemap, and robots.

Never commit `.env.local` or expose the Resend key to browser code. Email sending will return a clear configuration error until the API key and verified sender are set. The floating WhatsApp action sends messages to 0539611355 only; the three listed contact numbers remain call contacts.

## Checks

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Scope notes

- Contact details and service descriptions must be verified by the business before launch.
- Inquiry submissions are emailed and are not persisted in a database. Add Neon only if durable lead history, an admin workflow, or dynamically managed listings are approved.
- Configure hosting-level request rate limiting before production. The form includes server validation and a honeypot, but the honeypot is not a substitute for distributed rate limiting.
- The privacy notice is a draft and needs business review before collecting real visitor data.
