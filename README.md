# esseling.

Website + dashboard, gebouwd met Next.js, Tailwind en Supabase.

## Starten (lokaal)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Supabase koppelen (nodig voor dashboard, berichten en login)

1. Maak een Supabase-project aan op [supabase.com/dashboard](https://supabase.com/dashboard).
2. Ga naar **SQL Editor** -> **New query**, plak de inhoud van `supabase/schema.sql`, en klik **Run**.
   Dit maakt de tabellen voor berichten en content, met de juiste beveiliging.
3. Ga naar **Authentication** -> **Users** -> **Add user** en maak je eigen inlog-account aan (email + wachtwoord).
4. Ga naar **Project Settings** -> **API** en kopieer:
   - **Project URL**
   - **anon public key**
5. Maak lokaal een bestand `.env.local` aan in de hoofdmap (zelfde plek als dit bestand), met:

   ```
   NEXT_PUBLIC_SUPABASE_URL=jouw-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=jouw-anon-key
   ```

   Dit bestand wordt nooit naar GitHub gestuurd (staat in `.gitignore`).

6. Voor de **live site op Vercel**: zet diezelfde twee variabelen in
   Vercel -> je project -> **Settings** -> **Environment Variables**.

## Dashboard

Ga naar `/dashboard` op je site. Log in met het account dat je in stap 3
hebt aangemaakt. Hier kun je:

- Binnengekomen berichten teruglezen (`/dashboard/berichten`)
- Site-teksten aanpassen (`/dashboard/content`, volgt nog)

## Belangrijk over beveiliging

- Alleen ingelogde gebruikers kunnen bij `/dashboard` komen, geregeld
  via `src/proxy.ts`.
- De database zelf bepaalt wie wat mag zien of aanpassen (Row Level
  Security in `supabase/schema.sql`), niet alleen de website-code.
- Zet nooit je `.env.local` bestand in GitHub.
