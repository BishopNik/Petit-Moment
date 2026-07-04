# Little Ceremony Boutique

Nowoczesna, wielostronicowa witryna butikowa dla polskiej marki eleganckiej odzieży dziecięcej. Projekt obejmuje katalog produktów, szycie na zamówienie, lokalne SEO, poradnik, formularze sprzedażowe oraz zamknięty panel administracyjny.

## Najważniejsze możliwości

- katalog sukienek, garniturów, koszul i akcesoriów;
- osobne strony SEO produktów, kategorii i artykułów;
- lokalne strony dla Dąbrowy Tarnowskiej, Tarnowa i Małopolski;
- formularze kontaktowe, dobór stylizacji i rezerwacja przymiarki;
- lista ulubionych zapisywana w przeglądarce;
- opinie klientów z moderacją i odpowiedzią butiku;
- panel `/admin` z rolami Admin, Manager i Content Editor;
- zarządzanie produktami, FAQ, blogiem, zdjęciami, zgłoszeniami, opiniami i promocjami;
- wewnętrzna analityka najpopularniejszych stron, produktów i działań;
- sitemap, robots.txt, Open Graph i dane strukturalne schema.org.

## Technologie

- Next.js 16, React i TypeScript w trybie strict;
- Tailwind CSS 4;
- Next Metadata API i server-side rendering;
- Next Image z generowaniem WebP/AVIF;
- Phosphor Icons;
- lokalny adapter CMS oparty o JSON;
- opcjonalne powiadomienia e-mail przez Resend.

## Uruchomienie lokalne

Wymagany jest Node.js 20 lub nowszy.

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

Pozostałe polecenia:

```bash
npm run build
npm start
```

## Panel administracyjny

Panel znajduje się pod adresem [http://localhost:3000/admin](http://localhost:3000/admin).

W trybie developerskim dostępne są dane demonstracyjne:

```text
Login: admin@littleceremony.pl
Hasło: LittleCeremony2026!
```

Przed wdrożeniem skopiuj `.env.example` do `.env.local` i ustaw własne dane:

```env
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_SECRET=
ALLOW_DEMO_ADMIN=false
```

Szczegółowa instrukcja panelu znajduje się w pliku [ADMIN.md](./ADMIN.md).

## Obsługa opinii

Klient może dodać opinię na stronie `/opinie`. Nowa opinia:

1. zostaje zapisana ze statusem `Nowa`;
2. nie jest od razu publikowana;
3. pojawia się w `Admin → Marketing → Opinie klientów`;
4. administrator może napisać publiczną odpowiedź;
5. po zaznaczeniu `Opublikowana na stronie` opinia i odpowiedź pojawiają się publicznie.

Adres e-mail klienta jest widoczny wyłącznie w panelu administracyjnym.

## Dane i pliki

Pierwsza zmiana treści tworzy plik:

```text
data/cms-store.json
```

Przesłane obrazy są zapisywane w:

```text
public/uploads
```

Ten adapter jest wygodny do pracy lokalnej i wdrożenia na pojedynczym serwerze z trwałym dyskiem. Przed publikacją na Vercel lub innym środowisku serverless należy zastąpić go PostgreSQL/Prisma oraz Cloudinary albo UploadThing. Publiczne strony i panel korzystają ze wspólnej warstwy repository, dlatego migracja nie wymaga przebudowy interfejsu.

## Powiadomienia e-mail

Po ustawieniu poniższych zmiennych formularze mogą wysyłać potwierdzenie klientowi i powiadomienie administratorowi przez Resend:

```env
RESEND_API_KEY=
EMAIL_FROM=Little Ceremony <kontakt@twoja-domena.pl>
ADMIN_NOTIFICATION_EMAIL=
```

Bez konfiguracji Resend zgłoszenia nadal zapisują się w panelu.

## Główna struktura

```text
app/                 strony i API routes
components/          komponenty publiczne i administracyjne
data/                dane startowe i konfiguracja marki
lib/admin-store.ts   warstwa przechowywania CMS
lib/admin-auth.ts    sesje i role panelu
lib/schema.ts        dane strukturalne schema.org
public/images/       obrazy projektu
```

## Przed publikacją

- uzupełnij prawdziwy adres, telefon, e-mail i domenę w `data/siteConfig.ts`;
- ustaw bezpieczne zmienne środowiskowe administratora;
- podłącz trwałą bazę danych i storage zdjęć;
- skonfiguruj Resend, Google Analytics 4 i Search Console;
- zweryfikuj regulamin oraz politykę prywatności z prawnikiem;
- zamień teksty i opinie demonstracyjne na prawdziwe materiały marki.
