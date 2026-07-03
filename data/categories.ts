export type Category = { slug: string; name: string; shortName: string; description: string; accent: string; image: string };
export const categories: Category[] = [
  { slug: "ubrania-komunijne", name: "Ubrania komunijne", shortName: "Komunia", description: "Subtelne sukienki, garnitury i dodatki na ten szczególny dzień.", accent: "01", image: "/images/sukienka-aurora.png" },
  { slug: "ubrania-na-urodziny", name: "Ubrania na urodziny", shortName: "Urodziny", description: "Wyjątkowe stylizacje, które pozwalają dziecku być naprawdę sobą.", accent: "02", image: "/images/hero-boutique.png" },
  { slug: "ubrania-swiateczne", name: "Ubrania świąteczne i noworoczne", shortName: "Święta", description: "Ciepłe, odświętne fasony do rodzinnych wspomnień.", accent: "03", image: "/images/hero-boutique.png" },
  { slug: "sukienki-dla-dziewczynek", name: "Sukienki dla dziewczynek", shortName: "Sukienki", description: "Od zwiewnych tiuli po spokojną, nowoczesną klasykę.", accent: "04", image: "/images/sukienka-aurora.png" },
  { slug: "garnitury-i-koszule", name: "Garnitury i koszule dla chłopców", shortName: "Garnitury", description: "Dopasowane zestawy, w których elegancja pozostaje wygodna.", accent: "05", image: "/images/garnitur-milano.png" },
  { slug: "akcesoria", name: "Akcesoria", shortName: "Akcesoria", description: "Opaski, muszki i detale, które domykają całą opowieść.", accent: "06", image: "/images/garnitur-milano.png" },
];
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
