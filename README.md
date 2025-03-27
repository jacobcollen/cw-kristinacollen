# Kristina Collén Website

Project is built with [Create T3 App](https://create.t3.gg/) using `pnpm`.   

Domain for live site is [kristinacollen.se](https://kristinacollen.se)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacobcollen/cw-kristinacollen.git cw-kristinacollen
   cd cw-kristinacollen
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm run dev
   ```

App should now be running at [http://localhost:3000](http://localhost:3000).

## Drizzle Studio

To open Drizzle Studio, run:

```bash
pnpm run db:studio
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Drizzle ORM
- Resend (transactional emails)
- Vercel (deployment)
- shadcn/ui (component library)

## Additional Information

- The contact form is fully functional and sends emails using Resend.
- Newsletter subscription is active and stores emails via Drizzle ORM. News items displayed on the homepage are also posted using Drizzle ORM.
- Note: Ignore the folder admin in the project. The admin dashboard and admin login is not yet fully implemented.
