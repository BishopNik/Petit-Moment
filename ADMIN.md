# Panel administracyjny Little Ceremony

Panel jest dostępny pod adresem `/admin`.

W trybie developerskim (`npm run dev`) można zalogować się danymi demonstracyjnymi:

- `admin@littleceremony.pl`
- `LittleCeremony2026!`

Przed publikacją skopiuj `.env.example` do `.env.local` i ustaw własne, bezpieczne dane. Dostępne role:

- **Admin** — pełny dostęp;
- **Manager** — produkty, zgłoszenia, FAQ i media;
- **Content Editor** — poradnik i media.

## Przechowywanie danych

Pierwsza zmiana w panelu tworzy plik `data/cms-store.json`. To działający adapter lokalny i rozwiązanie odpowiednie dla jednego serwera z trwałym dyskiem. Przed wdrożeniem na środowisko serverless należy zastąpić implementację w `lib/admin-store.ts` adapterem PostgreSQL/Prisma. Interfejsy panelu i publiczne strony korzystają już ze wspólnego repository-layer.

## Zdjęcia i e-mail

Medioteka zapisuje pliki w `public/uploads`. Next Image dostarcza je jako WebP/AVIF zależnie od przeglądarki. Dla środowiska serverless należy podłączyć Cloudinary lub UploadThing.

Powiadomienia e-mail są wysyłane przez Resend po ustawieniu `RESEND_API_KEY`, `EMAIL_FROM` i `ADMIN_NOTIFICATION_EMAIL`. Bez tych wartości formularze nadal bezpiecznie zapisują zgłoszenia w CRM.
