-- ===========================================
-- esseling dashboard: database schema
-- Plak dit in Supabase: SQL Editor → New query → Run
-- ===========================================

-- 1. BERICHTEN (vanuit het contactformulier)
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  naam text not null,
  email text not null,
  bericht text not null,
  gelezen boolean default false
);

-- 2. CONTENT BLOKKEN (de teksten/secties van de site)
create table if not exists content_blocks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  pagina text not null,        -- bv. 'home', 'pakketten', 'over-mij'
  sectie text not null,        -- bv. 'hero', 'intro', 'kaart-1'
  volgorde int default 0,      -- bepaalt de volgorde van blokken op een pagina
  type text not null default 'tekst', -- 'tekst' | 'titel' | 'kaart'
  titel text,
  inhoud text,
  link_tekst text,
  link_url text
);

-- ===========================================
-- BEVEILIGING (Row Level Security)
-- ===========================================

alter table messages enable row level security;
alter table content_blocks enable row level security;

-- Iedereen (ook niet-ingelogde bezoekers) mag een bericht INSTUREN...
create policy "iedereen mag een bericht versturen"
  on messages for insert
  to anon, authenticated
  with check (true);

-- ...maar NIEMAND mag berichten lezen, behalve ingelogde gebruikers (jij)
create policy "alleen ingelogd kan berichten lezen"
  on messages for select
  to authenticated
  using (true);

create policy "alleen ingelogd kan berichten aanpassen"
  on messages for update
  to authenticated
  using (true);

create policy "alleen ingelogd kan berichten verwijderen"
  on messages for delete
  to authenticated
  using (true);

-- Content blokken mag IEDEREEN lezen (de site moet immers zichtbaar zijn)...
create policy "iedereen mag content lezen"
  on content_blocks for select
  to anon, authenticated
  using (true);

-- ...maar alleen ingelogd (jij) mag content aanpassen
create policy "alleen ingelogd kan content toevoegen"
  on content_blocks for insert
  to authenticated
  with check (true);

create policy "alleen ingelogd kan content aanpassen"
  on content_blocks for update
  to authenticated
  using (true);

create policy "alleen ingelogd kan content verwijderen"
  on content_blocks for delete
  to authenticated
  using (true);
