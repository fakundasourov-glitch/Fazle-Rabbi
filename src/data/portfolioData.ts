import {
  WorkProject,
  CommercialProduct,
  BusinessCardItem,
  PhotoItem,
  FilmReel,
  ServicePillar,
} from '../types';

import profileDp from '../assets/images/profile_dp.png';
import lotusPortrait from '../assets/images/lotus_rain_portrait_1789970096697.jpg';
import lotusHeroBackdrop from '../assets/images/lotus_hero_backdrop_1789970112978.jpg';

export const PROFILE_AVATAR = profileDp;

export const ABOUT_PORTRAIT = profileDp;

export const HERO_BACKDROP = lotusHeroBackdrop;

export const SELECTED_WORKS: WorkProject[] = [
  {
    id: 'work-lotus',
    title: 'Monsoon Solitude // The Lotus Harvest',
    category: 'PHOTOGRAPHY',
    discipline: 'FINE ART & ENVIRONMENTAL PORTRAITURE',
    description:
      'Wading through the rain-soaked lotus wetlands of Sirajganj, Bangladesh, concealing the persona behind blooming pink buds and glistening raindrops.',
    imageUrl: lotusPortrait,
    aspectRatio: '4/5',
    colSpanDesktop: 8,
    badge: '★ SIGNATURE MASTERWORK 2024',
    specs: '35mm • f/2.2 • 1/400s • ISO 100 • Sirajganj Wetland',
    client: 'Exhibition Collection',
    tags: ['Lotus', 'Monsoon Rain', 'Sirajganj', 'Fine Art', 'Portraiture'],
  },
  {
    id: 'work-1',
    title: 'Eternal Radiance // The Bengali Wedding',
    category: 'PHOTOGRAPHY',
    discipline: 'CINEMATIC BRIDAL PHOTOGRAPHY',
    description:
      'Cinematic silhouette and atmospheric backlight capturing the sacred solemnity of traditional matrimony.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAAPm6H5g895S7HMWC8xPEY1Loha_WHyqKUve7_YZqPituy5yU-8c3cMU8BJknh8sg9ClOPMoxx3vYz-0gPUpEQQYYo1LmFKQZ6Q5is5xlPi6DEYuCjSV3KZBzGG8uSZHLDVXZzgJrg-cjNZAhIm4FYysKAiSzPlAj4jL2N0TnCbG3amex8SmFdIro_QnJQCw5m0QxH63GyS5X9ZKGaKSE6Zxgp7i3t4LbpSiFpShQggGfIMF4FFoYizQblCT-38R-Tw',
    aspectRatio: '16/9',
    colSpanDesktop: 4,
    badge: '★ OFFICIAL SELECTION 2024',
    specs: '85mm • f/1.4 • 1/250s • ISO 100',
    client: 'Private Commission',
    tags: ['Bridal', 'Cinematic', 'Bengali Heritage', 'Backlight'],
  },
  {
    id: 'work-2',
    title: 'Heritage & Grace',
    category: 'PHOTOGRAPHY',
    discipline: 'FINE ART PORTRAITURE',
    description:
      'Intimate bridal study celebrating traditional ornaments, mukut craftsmanship, and ceremonial alta.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_dKxcMKzdLK0RDKCU8-uLKqHdlVBP6Ri-we5h6fAeHlNulqd3wIpDEeqR45IoGkNi1Dgbkm-5FgX5ITeQ7f8bpmdjy7rep69G4jE0A2ghRZaA_4xgghJqJUabpmRsZCXpSzgOSJgCABU-9Q59VLaisBFqQALhFOVD2Y0K58MO0fAs91ZUprSgmsUj-Na4uAanAxqvEH8Y9BtqBfBRct721YJ9sR_ljgYx9_CzEwei5cNoO25vM3QOxNucPgOrTNJnQ',
    aspectRatio: '4/5',
    colSpanDesktop: 4,
    specs: '50mm • f/1.8 • 1/320s • ISO 100',
    client: 'Heritage Series',
    tags: ['Portraiture', 'Mukut', 'Alta', 'Fine Art'],
  },
  {
    id: 'work-3',
    title: 'Pohela Boishakh // Festive Bloom',
    category: 'PHOTOGRAPHY',
    discipline: 'CULTURAL & EDITORIAL PORTRAITURE',
    description:
      'Vibrant celebration of Bengali heritage draped in crimson, yellow saree silk and floral coiffure.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Lw6E_OFeUVyufuzt4HDsEOlu3hzXRdcUZ2ku5z3fh7VHKaGO0vDQ0A3YWGCido9HS_BHq1E7sUtO3jiXhaVziRx6KAeQDW13R3UwQ0_gAzzs2tOqiCVIIVTagitqsw-ZIPKjBqLZLhDoT2g8C79QmIFA5TrLhtOfd9oZa0YGqdFV_TxS4wOIsrjgaEFn8yLzNehL2oRl-Z0DR7RQiQR1TnJvvdZTEkBDFaByyxRF9lSd4F1fdnnXsgQbUiFgy9Y9iQ',
    aspectRatio: '16/10',
    colSpanDesktop: 4,
    specs: '85mm • f/2.0 • 1/500s • ISO 160',
    client: 'Cultural Archive',
    tags: ['Editorial', 'Boishakh', 'Saree Silk', 'Tradition'],
  },
  {
    id: 'work-4',
    title: 'Monsoon Melancholy',
    category: 'VIDEOGRAPHY',
    discipline: 'LIFESTYLE & DOCUMENTARY',
    description:
      'Poetic portrayal of quiet contemplation in gentle rain against colonial architectural ironwork.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA12HM8L0RCis5xH2h1M3_TJguKRHjP9M74j6OKJtMJ6LXPRjq8HpViOPtBYUVSnvOboiPsVfGhg-KcARApVN5_2yVtbmm5vRfx6NM0oTBbqHpQI0PaNn29-8uhTE7xM3zdw2-lquCrnSpEjonbX18awerzV6nuM1b9H6NDkxUkKwQBFa50uIdwsdqXdjPKjvIPsQOJiRD60dnn3G-tl1dfzy7r36jOV8GZ3v-Q41dRqYNdpEdtNege45URsgepByg7vA',
    aspectRatio: '16/10',
    colSpanDesktop: 4,
    specs: '35mm Cine • T1.5 • 24fps • LogC',
    client: 'Sirajganj Chronicles',
    tags: ['Monsoon', 'Documentary', 'Rain', 'Atmosphere'],
  },
  {
    id: 'work-5',
    title: 'Amouage Lyric // Luxury Fragrance',
    category: '3D PACKAGING',
    discipline: '3D PACKAGING & RETOUCHING',
    description:
      'Prestige perfume 3D flacon modeling, crimson pedestal lighting & packaging visualization.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1aiDJCWhiSago8-XaocZjLfXq_emHjfqjxr_MxMhcNocWC0zcOzEi23EXH3yZk53O2YDYsbxt4xIndYh3BVdkmFaQTOjoZExvBe83vBqhQmxLPiUWO2bKbi9sYiOoB9UW5vsMmEX5rVzMetSciXSWXtrdd8_Z6rSQWPocLzFux2AlNZbrfybuEO_jspn0m1BZ8_nA5CGylqZGBoxBRwKZ9SqC_UP4R3oAY3uvoR7wq4ShU_14oH8T1dxWZKM7Up2jmw',
    aspectRatio: '16/10',
    colSpanDesktop: 4,
    badge: 'GRAPHIC DESIGN',
    specs: 'Ray-Traced CGI • 4000x4000 • Studio Light',
    client: 'Speculative Luxe',
    tags: ['3D Modeling', 'Packaging', 'Perfume', 'Luxury'],
  },
  {
    id: 'work-6',
    title: 'Rhythm of Jamuna // Riverine Epic',
    category: 'CINEMATOGRAPHY',
    discipline: 'DOCUMENTARY CINEMATOGRAPHY',
    description:
      'Anamorphic 2.39:1 study documenting the riverine communities along Jamuna river with master lighting.',
    isTextOnly: true,
    aspectRatio: '2.39/1',
    colSpanDesktop: 8,
    badge: '★ FILM FESTIVAL OFFICIAL',
    specs: '4K Cinema DNG • 24.00 FPS • Anamorphic Scope',
    client: 'National Geography Initiative',
    tags: ['Cinematography', 'Jamuna', 'Documentary', 'Anamorphic'],
    synopsis:
      'Chronicles the ancestral relationship between riverine communities and the monsoonal surges of the Jamuna River. Tracing dawn casting nets, shifting char sandbars, and the timeless dignity of boatmen navigating silver river currents.',
    technicalRig: 'ARRI Alexa Mini LF • Cooke Anamorphic/i 40mm T2.3 Prime • Flowcine Black Arm Rig',
    colorGradeScience: 'Custom Low-Contrast Monsoonal Print LUT • Organic Photochemical Grain Layer',
  },
  {
    id: 'work-7',
    title: 'Sol & Crimson // Interlocking Band Stationery',
    category: 'BUSINESS CARDS & BRANDING',
    discipline: 'CORPORATE IDENTITY & PRINT FINISHES',
    description:
      'Complete corporate identity stationery suite with dual-color marigold and mahogany ribbons, embossing, and die-cut alignments.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpHnGD5ihRE30HsEz4mPTkazCAUy84CxqWICUpfBmfK-fqyn54eBTHmm-KDKc1i3390sfxvH5k0LMjWkDLzbJ96iBnHCiT8wjiCHTzucE3gla08WkxUjKIPWOk6niUspEpAM2t1l6zUNjojj9HA6dG9sC92AnqwjbZho50KESaBCDgHNi27QQ04DHL6qOsEoNHsPI7L5JuQsf5Is8hrKTJYkoh6Bz6t_VbhpzPKutyTa29KgM548lCQoIFWFeKESEhgg',
    aspectRatio: '16/9',
    colSpanDesktop: 4,
    badge: 'FLAGSHIP COLLATERAL',
    specs: '300 DPI CMYK • Hot Foil • 350 GSM',
    client: 'Sol Energy Global',
    tags: ['Stationery', 'Business Card', 'Branding', 'Print Ready'],
  },
];

export const COMMERCIAL_PRODUCTS: CommercialProduct[] = [
  {
    id: 'comm-1',
    title: 'Amouage Lyric // Luxury Fragrance Visualization',
    client: 'SPECULATIVE LUXE',
    tagline: 'COMMERCIAL 3D • BRAND VISUALIZATION',
    category: '3D Fragrance Packaging',
    description:
      'Monolithic deep-crimson pedestal setup with ray-traced ambient reflections, bespoke flacon modeling, and silver-filigree crest typography.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC31BmewiP8pBT75pQ8dCt6Zm0Fvz0R6EtvgaGemCoakHnemF4b0jBGd6Gc023rEEs4NDx3o3umUqRCNU-PA51GKmwzMvV5ErJO2bIKGFrujvqVc3RjOThVSezZGsMGgy5ld67xd7PnQoGNaqAoBANxTrHqC20DhjP5kkHClh0Mfvu6mdNb6HoQnaBSLsVNDV7RnADZegWhEiBNlVnF3AvmPT7JOf6vd8OJq6poAkTLBxplPi8JJtwjtnvT_n4FR6gb-g',
    badge: '3D PRODUCT RENDER',
    subBadge: 'STUDIO LIGHTING',
    specLeft: 'PEDESTAL VOLUMETRICS',
    specRight: '2500 × 2500 PX',
  },
  {
    id: 'comm-2',
    title: 'Dior Rouge // Haute Cosmetics Packaging & Mockup',
    client: 'EDITORIAL MOCKUP',
    tagline: 'PRODUCT MOCKUP • BEAUTY RETOUCH',
    category: 'Haute Cosmetics Mockup',
    description:
      'Precision chrome cannage ring reflection mapping, satin pigment texturing, and polished glossy cylinder staging with specular rim lights.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwIGqt4JjdqqSa6xxNqLuK1CzQEH85Sn-3-Xp3ub6Obc1Brr4WFVDPkb5pcNle2Xq3_PPrchaGHdwysa5GLCJjO487-970F4CZB2IsTy1FLFYX3SkaZ-NKVMf8f_WdEwR6aGaL-fNGHMFFbDH4Op8ONs9Lkt9IBJOFAb6a5rjRAHXsNB45VIKiAn4cjhuZobT11718oVU5E3vUw94P5gSY69-TNLD3vnEpgEMYfZHb1YNUcSf1R41UF8BrpFr2IN60w',
    badge: 'PRODUCT RETOUCHING',
    subBadge: 'CANNAGE CHROME',
    specLeft: 'HAUTE COSMETICS',
    specRight: '2500 × 2500 PX',
  },
  {
    id: 'comm-3',
    title: "L'Éclat Cream // Minimalist Skincare Packaging Design",
    client: 'DERMA BOUTIQUE',
    tagline: 'SKINCARE PACKAGING • PODIUM STAGING',
    category: 'Skincare Identity & Packaging',
    description:
      'Frosted glass jar translucency with warm beige tones, geometric rose-gold pedestal composition, and clean typographic identity label layout.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAz2qrkJkTv2xgWHNjIp8jKMm1hCQCy_Ex6PRnkTtpBJmA9A8vTiWTGctyFcvJoWbVi5naXzQ8ZhoSjhzNNOED2BTNCbrtUMVnCnujqprCX1cLCiEv7M-DwmnOByDkfvhHZUWsRFH2Ug9_eHywhQfcRO0tAcH9SHe5uVcpcXal_7ER0SVBDEtEQ-Pl3ZPnQcS63wKSWaGTIo-Ro4SoFdmqdxDcFbYafSPO9SdoTHuH_Thrtsjt9M-5R4i9asCkEiTspw',
    badge: '3D PACKAGING MOCKUP',
    subBadge: 'ROSE GOLD ACCENT',
    specLeft: 'MINIMALIST LUXE',
    specRight: '2500 × 2500 PX',
  },
  {
    id: 'comm-4',
    title: 'Dior Poison // Fine Fragrance Editorial Catalog',
    client: 'PARFUMS DIOR (SPEC)',
    tagline: 'FINE FRAGRANCE • COMMERCIAL LIGHTING',
    category: 'Commercial Editorial Lighting',
    description:
      'Sensual plum-violet glass refractions, sculpted gold stopper, and iridescent metallic ribbons creating a theatrical editorial advertisement look.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAC_h0RIpIV0SBSJCtXtHYwfC6-axRwCpvtnV1iLQZjexRsBiT3l_MoOU17vlFqf7wolNiLBs9EQbEBaS-t725mbyn_SJ-KBJlsA-cEPRvIuuZO1cAGTVefs2ISsGolBMgcij2vj9plwixEirtzSyWlm3NG6d4YjCvIdAbhw5btWlMTnvyJmSs_djzQI5oar21dEx-khEJxyMMXLrlu6jZ1sTTSOUD8ukuRWNtsgheyZaMr-m53ufD9rbTDE3Akrj6TFg',
    badge: 'EDITORIAL CATALOG',
    subBadge: 'DICHROIC LIGHTING',
    specLeft: 'HAUTE PARFUMERIE',
    specRight: '2500 × 2500 PX',
  },
];

export const BUSINESS_CARDS: BusinessCardItem[] = [
  {
    id: 'card-1',
    seriesNumber: 'SERIES 01',
    title: 'Md. Fazle Rabbi // Signature Monolith',
    category: 'BRAND IDENTITY • PERSONAL BRANDING',
    badge: 'FLAGSHIP IDENTITY',
    description:
      'Split layout architecture with duotone orange focal accent, architectural Flatiron backdrop, and bespoke portrait circle integration.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-pzLwetuUcI7_VMphqLX6YvqcUEQTkan4XI8vIKa1FuoSR3HPwxN2xFwjD88jQ8t5_X67qtPb44Pk2CHPKrnqcY4O7uDeKwTvDHg886F_S3ece5KqtMifM5o7tmmRn365i9_2R2_utan9NDki8Qvl05BvaBCOIpW2ITETvi-iON-bKObzK_tGE7rg6N6LbntKoZkaHS98OvFLSjNAZVNrRWf9hXtdZbs0p_2Sdl91H092ic3BkspQUZAxvjh5WmSRw',
    format: 'FORMAT: CMYK 3.5×2 IN',
    finishType: 'STATIONERY SYSTEM',
    finishTag: 'DUOTONE ARCHITECTURAL',
  },
  {
    id: 'card-2',
    seriesNumber: 'SERIES 02',
    title: 'Obsidian & Gold Crest Card',
    category: 'LUXURY STATIONERY • EXECUTIVE',
    badge: 'HOT FOIL EMBOSS',
    description:
      'Matte noir cardstock with metallic gold foil rule dividers, isometric emblem crest, and executive typographic hierarchy.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq25h8LuDoOVT7jqrZ6_vwDDxKe7zSd1succN9yye9NyQcw5FHvRTFb0f_6-vMt2uGHw8fD8tnhU0gRmU9aaa3O9Pe5UQoVPku3iSFO1KM79SJWyH81hVM9ppDrQCdsU-utzJ7IC41BtgvTN0tL1mPSzWcFUXySL8vxp9eUoBBR3AXTjlsCd9k3iAcK-ckpYTs26PQm0G_Lb6CUFynIYelPPsfcnk-x-k_Q_X-wqoVmFmp7uSHJag5U43WL46eX9skBg',
    format: 'FINISH: METALLIC FOIL',
    finishType: 'EXECUTIVE SERIES',
    finishTag: 'GOLD FOIL & OBSIDIAN',
  },
  {
    id: 'card-3',
    seriesNumber: 'SERIES 03',
    title: 'Verdant Prism // Project Lead Card',
    category: 'CORPORATE IDENTITY • TECH & MANAGEMENT',
    badge: 'GEOMETRIC VECTOR',
    description:
      'Deep emerald green layered angular chevron geometry with floating hex insignia medallion and crisp negative space contact layout.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLkbBCAb2Kuoye_tL-iVDeL97EkhVnVUWQmAYBKQfmMa9r6oWrTI57CXkE3kylqlYB55WXUKJVL64enNBqsLAzT6-pzNpeYcXRGMkopUW27fKxaaAvTBwz9kpbZ8ezCx5NwkdmOwgip2FLIaAiut-HAp3dZ5Y4fkVFQliYzz07JI07uEyQWZMT7tWbnP1lDLsQWR8_cdS3ulX5vmKezAr11LfzJR-6Mv33XAaY9_kmvCk4f7DefTs_-4pmTuniZmE5tA',
    format: 'DIE-CUT EMBEDDED',
    finishType: 'ENTERPRISE IDENTITY',
    finishTag: 'EMERALD CHEVRON',
  },
  {
    id: 'card-4',
    seriesNumber: 'SERIES 04',
    title: 'Amber Tessellation // Designer Identity',
    category: 'CREATIVE STUDIO • WEB DESIGN',
    badge: 'PATTERN DESIGN',
    description:
      'Rhythmic ochre and teal triangle tessellation grid counterbalanced with clean ivory card stock and dynamic oblique cutaways.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXFdBVrei3e0SjXMOBQBMWlFg2JpTBZ8yxWDKWAgQlSwUaqcgpMBA5Q7uMljnA3hXKKt5XNHmYAuozbfHbQjFZNAvSok4EsS9n9rBdAz0UMJInQn7yvLcHjLlRANXM-wUCG3M4CPVH2EXawBBa3UgFxG1UnzgQguWaCd1p-FaF8Oq2EqxybVJwMp3Tnt07hgyrJxc7j0YbqRi2IYXzJ8gF2YgLSYXIXgwSH2tq8G3-A-edhsaM8E_M_M1fjWV88n-XmQ',
    format: 'STOCK: 350 GSM LINEN',
    finishType: 'AGENCY COLLATERAL',
    finishTag: 'OCHRE TESSELLATION',
  },
  {
    id: 'card-5',
    seriesNumber: 'SERIES 05',
    title: 'Facet & Origami // Wireframe System',
    category: 'ARCHITECTURAL • FINE LINE ART',
    badge: 'MINIMAL LINEWORK',
    description:
      'Angular polygonal facet netting in fine mono-weight ink, paired with earthy sand-toned seal and hand-scripted typography.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoXy0HaXqGvyEnwy3dMT5qlmOJe8ryqO_fikvhaXqAQHDs2p4m3rap1AZup7Yaz9KLVWaA5G_eYwTr61nHZTIa8S509oqwGiPhMlEFiPkhnw9elFFUPY7gz9RW3J-e7G4_Q1cmscgxe9-0arRUBbip7LUHjfzA653pjgvxlI8gU_qQ7iOyA77msjnBymbzmxWj_3GpYNrc-2atXEfkd_XY3MAbkdSvsmhUIbqxYlRoa1gvwJ_z46c0fixjFPJalWDUiA',
    format: 'LINEWORK: VECTOR CAD',
    finishType: 'GALLERY SUITE',
    finishTag: 'ORIGAMI FACET',
  },
  {
    id: 'card-6',
    seriesNumber: 'SERIES 06',
    title: 'Contour Flow // Sage Duotone Card',
    category: 'BOTANICAL & DESIGN • SAGE SERIES',
    badge: 'ORGANIC WAVE',
    description:
      'Sinusoidal topographical wave curves on forest sage backdrop, paired with a dual-toned reverse card in calm oat white.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0En-1xvzGOqB8cdzjEa4bZerr69Ajb1urRQcIw7lcjznKkDsmo1Hrwffp0bGkNd98DXOV8ht_YImUHlwHQo0K0g3VBrqfXs01YONkKCF1EUmYAucIlH54Ul0X_LpleIDc5NU080clOaNapuj77qsdDZkMvJUzllqch0_zZ-40j2ZHZ7XO7_eSZcp9Db8ti8KbW4X728lY4P9UrwtLmpz8p04IHIwbXpnfZqloDTLocRmKHMt43W5Dvyb0pFfv12JNNg',
    format: 'SOY INK PRINTING',
    finishType: 'ORGANIC FORM',
    finishTag: 'TOPOGRAPHIC SAGE',
  },
  {
    id: 'card-7',
    seriesNumber: 'SERIES 07',
    title: "L'Atelier Silhouette // Beauty Parlour",
    category: 'BOUTIQUE BRANDING • SALON & ATELIER',
    badge: 'FASHION & BOUTIQUE',
    description:
      'Terracotta silhouette illustration celebrating haute couture gowns, retro serifs, and soft beige tactile paper framing.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxLzLKb2SrHEKjDNhEr85mos1IK9M2g4FSUxfvYR0nN_N1ht-tCMEqA6wEUM7f_-d9_UgBjNtd1j9qJqm0v0LO6O5ycHqlOcbPanUDJdZihDOaWk40mJY3pifgWZHf8cEsewROw0fM15AL8r8HW54gbq7gmgdJcrRZ91UdH99TMMrI8wwNyP1KRRGhgFRKAnpYJpUrQw21td4HoFRBViquD24ec8EwHr_b41QdRsUeP47mU1mJ4LSfaxKVhZGlTuPs0Q',
    format: 'VELVET SOFT-TOUCH',
    finishType: 'BOUTIQUE SUITE',
    finishTag: 'TERRACOTTA ATELIER',
  },
  {
    id: 'card-8',
    seriesNumber: 'SERIES 08',
    title: 'Apex Kinetic // Scarlet & Graphite',
    category: 'CORPORATE POWER • KINETIC IDENTITY',
    badge: 'BOLD DYNAMIC',
    description:
      'High-energy angular slash composition in vivid crimson on matte charcoal, engineered for modern corporate managers.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjdrTfIKpg-drhfKztg8rXMMCl0oLCNaXswY8QVdEbbhfNoGYoOGh3bipIGr5rl7VOat37wqANAys_dBlDr8fZHtWtpR7i2mJtsSvIRKhv8U7TBtUjHWNhmD6X24vCZxcfs06ns05wvD4sCuIZT4tWUSsRQsMcemYfFSmoMHNIKcUHpjVo8GgJJ7xqHZqqq2bkqfVahe7pHgtvpVhVljzu0KqVluW1NFGtxGtPqd0N2NjZeGvv8nFXXC4aXClQL_eiFg',
    format: 'SPOT UV HIGHLIGHT',
    finishType: 'TECH EXECUTIVE',
    finishTag: 'SCARLET CHARCOAL',
  },
  {
    id: 'card-9',
    seriesNumber: 'SERIES 09',
    title: 'Prismatic Cubism // Creative Portfolio',
    category: 'CREATIVE ARTS • MULTI-DISCIPLINE',
    badge: 'CUBIST MOSAIC',
    description:
      'Modernist polygon mosaic palette of terracotta, muted cyan, ochre and sage complemented by pinstripe reverse card accents.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASltYqzG3rpxJyitGJf7WWIzxMuTzRee1lTW7yQrU4DUId8xKlJH_UT8gsikMT3dzgiGH2fjnXLFc1VWaBK1LXym93nd2aFAfAzRAqXyYsUO33_qqnROB0eO5UCuD9M1fp70xJCOjECju4vzj0Or3E0TCYdrjZ_s0Li-Mepv9n6ApYlZqxnUn1t47hW0JJNxZ4G96gjM0HF-n-Hv4GFYaUBmOSdLqgBfEYSHQPqm776lb5MrN7tnal_J87MtF_oVtJMg',
    format: 'COLOR CALIBRATED',
    finishType: 'ARTS ARCHIVE',
    finishTag: 'CUBIST MOSAIC',
  },
  {
    id: 'card-10',
    seriesNumber: 'SERIES 10',
    title: 'Sol & Crimson // Interlocking Band Stationery',
    category: 'IDENTITY SYSTEM • SERIES 10/10',
    badge: 'WOVEN DYNAMICS',
    description:
      'Braided diagonal chevron bands across warm marigold and mahogany ribbons. Created as a modern energy / enterprise identity kit featuring flame-crest iconography, clean micro-typography, and seamless double-sided alignment.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpHnGD5ihRE30HsEz4mPTkazCAUy84CxqWICUpfBmfK-fqyn54eBTHmm-KDKc1i3390sfxvH5k0LMjWkDLzbJ96iBnHCiT8wjiCHTzucE3gla08WkxUjKIPWOk6niUspEpAM2t1l6zUNjojj9HA6dG9sC92AnqwjbZho50KESaBCDgHNi27QQ04DHL6qOsEoNHsPI7L5JuQsf5Is8hrKTJYkoh6Bz6t_VbhpzPKutyTa29KgM548lCQoIFWFeKESEhgg',
    format: 'INSPECTION: 4000 × 4000 PX ULTRA-HD MOCKUP',
    finishType: 'WOVEN RIBBONS',
    finishTag: 'MARIGOLD & MAHOGANY',
  },
];

export const PHOTOGRAPHY_ITEMS: PhotoItem[] = [
  {
    id: 'photo-lotus',
    title: 'Monsoon Lotus Bloom // Sirajganj Wetland',
    category: 'PORTRAIT',
    series: 'MONSOON RITUALS OF BENGAL',
    exif: '35MM PRIME • F/2.2 • 1/400S • ISO 100 • SIRAJGANJ',
    imageUrl: lotusPortrait,
    aspectRatio: '3/4',
    colSpan: 6,
    frameNumber: 'FRAME 01/09',
    badge: 'AUTEUR SIGNATURE',
    subtitle: 'Wading through the wetlands of Sirajganj with fresh lotus buds under gentle monsoon rain.',
  },
  {
    id: 'photo-1',
    title: 'Elegance in Gold // Bridal Grace Study',
    category: 'PORTRAIT',
    series: 'BRIDAL PORTRAITURE SERIES',
    exif: '85MM PRIME • F/1.4 • 1/320S • ISO 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmKjVhPxW_7tLcm1xtbu1_ybuRn68dPk_P3KaMGMMtfLwOGLwsxxIeUFuOA_7PQcA3tv0U4Po9OzODZGToAwrAvCCw96QPlWHnpaCPQlnt2ydQJNceXGug8_lEUgUeWsXjcgTvZRxuNpcqtrGJ6s_nC18TrD9lbfgWW7qWs9eGAF66ZxWIooR1-_dBTueyVMwGzZom7R01QT2eEQO075OMPGqRt7Upfc_BfIcWfXaxkh2fezjj8qF6Yu1g3iayiMqsA',
    aspectRatio: '16/10',
    colSpan: 7,
    frameNumber: 'FRAME 01/08',
    badge: 'FINE ART PORTRAITURE',
  },
  {
    id: 'photo-2',
    title: 'Dappled Light // Natural Radiance',
    category: 'PORTRAIT',
    series: 'DAPPLED CANOPY SERIES',
    exif: '50MM PRIME • F/1.8 • 1/200S • ISO 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkUSO86zj8_RufSsBSINd7bZj6HQG1z00UMr6cxtCeazgbPQjjnH3NiHAs1hDDAwnH_qB2qcVNocIexrWWlESXMBZrTAccbbGL1oPtjBEoFJCefMDEweWnXlCLiF3W7wBHBawfi_V28P_aW_zNej5pYGCTwQR8DZO5LzrEzdHtNa3YP3GDg4MlWaRkYDf7TpO6XRV9P9k1L_woFp0LJrgcqP0AIL7ju4-IHIyaN_ayl53MCCQiRr9BFIL7U4yIbFqQgA',
    aspectRatio: '4/5',
    colSpan: 5,
    frameNumber: 'FRAME 02/08',
  },
  {
    id: 'photo-3',
    title: 'Whimsical Childhood // Afternoon Breeze',
    category: 'LIFESTYLE',
    series: 'GOLDEN HOUR CHRONICLES',
    exif: '70-200MM • F/2.8 • 1/500S • ISO 125',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdy2JfQNTvUAuPe-aDLnr0OwZvwmZLOzWKMG2Serg_OOFf71a9Gn-m6t5eab-QjbvgWh1S6Ao93Su_O53MNVsQD35ZsTAEkFGKsZPZw_9N-M5cz4thyAFV4w4L9OpbM06JG0WTKM1fvaKvSqGcazmdRUk_KT7d3GqpH58YHUaQIMyuv6gnHvYoC02Wk6CfY3D9gIptybIKy9KJV5MilcOIm80JyXM6XjnwobzrRCJa70hUV89Lt1e43fZjtCuuoEfmXQ',
    aspectRatio: '4/5',
    colSpan: 4,
    frameNumber: 'FRAME 03/08',
  },
  {
    id: 'photo-4',
    title: 'Golden Hour Innocence',
    category: 'LIFESTYLE',
    series: 'MEADOW CONTEMPLATION',
    exif: '85MM PRIME • F/1.8 • 1/400S • ISO 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuVUjzDeKfTST5IAAa94eFZO5USUsOMVcM_tbpneOCtNzuWmNJ0pLXREIYuW66i7tf_Bapg5ZVw7WO27YVACN0hesSh5d-CQbDJO6Gwy_QKHz5A7uf4cTLK7nS_lS9w0mZ6Y2A-xEMiLz1exeWSYACMXsrzAoMb6LnPIY_I2xOrpPUPqsdt5oNyStZI8kPfkLJbn1Z_OCWHe_RK7wDKmWtN31_5oKfYA1TE0Cdr4K2BBqZ_L2uyC1HwwmohcrgnuCvng',
    aspectRatio: '4/5',
    colSpan: 4,
    frameNumber: 'FRAME 04/08',
  },
  {
    id: 'photo-5',
    title: 'Pure Joy // Candid Portrait',
    category: 'PORTRAIT',
    series: 'CANDID PORTRAITURE',
    exif: '50MM PRIME • F/1.8 • 1/320S • ISO 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-2lxEy1Zim4g2UkjbLn9gdm6qD1_Iqt_jTLzSAjCzS5WhLMTF2QrsxAdsHiLXa16RuCQB51WI-DNX0Jc0KI0gDNXqcmQ_pBAir8VQ1TW1HkvDAyGYC_Ya_ebSqs19C5w3DI1Ava1fJQVSsdoV2Rqk1130UJBdYPMxGpY8G_TS39D--L6pMohUJp3vMYNkfSlLmT9dF6Fb1QJNGnZyPzvLI_8wxN0vZDAMFLCNJbLP0s7ROrYIQcCqSsFH6Ks-ZMgJOw',
    aspectRatio: '4/5',
    colSpan: 4,
    frameNumber: 'FRAME 05/08',
  },
  {
    id: 'photo-6',
    title: 'Pied Myna Duo // Canopy Cadence',
    category: 'NATURE & WILDLIFE',
    series: 'RIVERINE CANOPY SERIES',
    exif: '400MM • F/4 • 1/1000S • ISO 400',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKpPAtacgtmd6U5qKJAyY8NOlmqYfczm_VpR54h0I6WnPo3bBaOFfwpp9l6HwBOCBMiLlgNTLff5Puhrmg_qH-qmnHQT4iw9VX5fvtGtMbhQQCiI3nKd6RICxbXpK5NZmT22oPC_b3AEZXi6a9rWdxJQCKG-8LfcQ5_oZxoaLXtyBS96mVzf4RbP7fatsVYg6U_cDOxyO_DZTLi37QoTevGMad1Xlbf70jQpktTwxmNYighUTooyTI_t2T_imMrFTbeA',
    aspectRatio: '16/10',
    colSpan: 6,
    frameNumber: 'FRAME 06/08',
    badge: 'AVIAN WILDLIFE',
    subtitle: 'Sirajganj riverine flora and avian behavior study.',
  },
  {
    id: 'photo-7',
    title: 'Golden Light Chrysalis // Sunlit Foliage & Butterfly',
    category: 'MACRO',
    series: 'SOLAR FLARE & BOTANICAL STUDY',
    exif: '105MM MACRO • F/2.8 • 1/800S • ISO 200',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANjKhyKGAoBaQUQBD3MTGPIZK36qF__1MUMP6VFvo8jq2YGyHQsYviL-5ur1jSFQA7iN-LinEwMYjtOf10ymFdUiM1kOi_Aztftf9bBPMgtCWoLRPm08cGFy9eVjAoJ9zPO58ryeqQK8hbYQN6m0jH59h6AXtp5kKy4M9JqFVRW8rVhLRuwuwz6Q9mU7R0Osu0AnHvY6p8gTP-xXO153XjaPO-btcwtkTovjtUw0ykSF2ehl00yFTj4NI0OLS5sTaQNA',
    aspectRatio: '16/10',
    colSpan: 6,
    frameNumber: 'FRAME 07/08',
    badge: 'MACRO & NATURE',
    subtitle: 'Translucent backlit leaves and delicate butterfly perch.',
  },
  {
    id: 'photo-8',
    title: 'Azure Perch // Songbird in the Verdant Canopy',
    category: 'NATURE & WILDLIFE',
    series: 'AZURE SKYLINE CANOPY',
    exif: '300MM • F/4 • 1/1600S • ISO 320',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRVWWpa8sQgIx9M4EM3owEvj3cYOiTE1caaNQo23GNWnklKz6mt1Krye4OXyLygQeI8pK2XQqi5ufRmr34hMQC4p_kA3oNw_auwpSMZ2ZZ5TlQwcjd8eGPRCW7WiINWj8TL6KzKgMG7ERVRbD-uUkrM8g9F6hlFQQRw8PcCSZQ30VLhgdroCpffM-J9g4l_N4HTely8wrtYujgFcMGTJ1R5hlSW35oWOfEs8xhAc3s6tySddDEnjMv9qI6UokuxfAXGg',
    aspectRatio: '2.39/1',
    colSpan: 12,
    frameNumber: 'FRAME 08/08',
    badge: 'HABITAT CHRONICLE',
    subtitle: 'Solitary songbird framed against clear cerulean sky and vibrant leaves in rural Sirajganj.',
  },
];

export const FILM_REELS: FilmReel[] = [
  {
    id: 'reel-1',
    title: 'Film 01: Rhythm of Jamuna',
    role: 'DIRECTOR OF PHOTOGRAPHY',
    category: 'DOCUMENTARY FILM',
    description:
      'Poetic documentary exploration of climate resilience, shifting sandbars (chars), and heritage fishing rituals along the Jamuna river basin in northern Bangladesh.',
    synopsis:
      'Chronicles the ancestral relationship between riverine communities and the monsoonal surges of the Jamuna River. Rather than focusing merely on hardship, the narrative traces the cadence of dawn casting nets, children navigating char paths, and the timeless dignity of boatmen reading water currents under dense silver mist.',
    visualAtmosphere:
      'Atmospheric low-key dawn illumination, natural ambient silver river reflections, soft anamorphic horizontal flare streaks, and organic 35mm grain structure.',
    technicalRig:
      'Cinema DNG RAW capture • Cooke Anamorphic/i Prime 40mm & 65mm • Low-profile floating boat stabilizer rig • 180° circular shutter angle',
    colorGradeScience:
      'Custom Film LUT tailored to preserve subtle mist tones and deep neutral charcoal blacks without digital clipping.',
    treatmentNotes: [
      'Authentic non-intrusive observation without artificial staging',
      'Preservation of natural river soundscape in 5.1 spatial field',
      'Strict adherence to 2.39:1 scope framing to accentuate wide aquatic horizons',
    ],
    tags: ['Documentary', 'Riverine Heritage', 'Jamuna Basin', 'Anamorphic 2.39:1', 'Dolby 5.1'],
    imageUrl: '',
    timecode: 'TC: 00:02:45:18',
    format: '4K CINEMA DNG RAW',
    aspectRatio: '2.39/1',
    audioSpec: 'DOLBY 5.1 SURROUND',
    scopeSpec: '2.39:1 CINEMATIC SCOPE',
    fps: '24.00',
    shutter: '180°',
  },
  {
    id: 'reel-2',
    title: 'Film 02: Ephemeral Gold',
    role: 'COLORIST & CINEMATOGRAPHER',
    category: 'FASHION FILM & COLOR GRADING',
    description:
      'High-contrast golden hour cinematography with bespoke film print emulation, exploring silk textiles, rural breeze motion, and sculptural evening sunlight.',
    synopsis:
      'An artistic visual poem celebrating traditional handwoven Muslin and raw silk in conversation with the late afternoon elements. Light filters through woven textures as the camera moves in slow, lyrical glides across rural countryside meadows.',
    visualAtmosphere:
      'Warm amber glow, 1/4 Black Pro-Mist halation around backlight highlights, deep honey gold skin tones, and delicate textural contrast.',
    technicalRig:
      'Arri Alexa Mini LF • Zeiss Supreme Prime 50mm & 85mm T1.5 • EasyRig Vario 5 handheld support',
    colorGradeScience:
      'Kodak 2383 D65 print stock emulation with roll-off highlights and enriched crimson/saffron chromatic density.',
    treatmentNotes: [
      'Backlit natural sun position exclusively between 4:45 PM and 5:30 PM',
      'Unbroken continuous fluid takes synchronized to acoustic sarod arrangements',
    ],
    tags: ['Fashion Cinema', 'Textile Heritage', 'Bespoke Color Science', 'ProRes 422HQ'],
    imageUrl: '',
    timecode: 'TC: 00:01:12:04',
    format: '4K PRORES 422HQ',
    aspectRatio: '16/9',
    audioSpec: 'STEREO 48k 24-BIT',
    scopeSpec: '16:9 DCI FLAT',
    fps: '24.00',
    shutter: '180°',
  },
  {
    id: 'reel-3',
    title: 'Film 03: Urban Pulse',
    role: 'LEAD CINEMATOGRAPHER',
    category: 'COMMERCIAL CINEMATOGRAPHY',
    description:
      'Dynamic kinetic lighting, low-light night optics, and narrative lifestyle cinema capturing modern metropolitan architectural rhythm.',
    synopsis:
      'A nocturnal study of metropolitan architecture, urban transit, and modern creative life. Neon reflections, rain-swept asphalt, and disciplined geometric framing unite to create a modern lifestyle commercial piece.',
    visualAtmosphere:
      'Cool cyan shadows counterpointed by amber sodium vapor practicals, crisp edge highlights, and kinetic camera momentum.',
    technicalRig:
      'RED V-Raptor 8K VV • Atlas Orion Anamorphic 50mm T2.0 • Ronin 2 Gimbal with wireless follow focus',
    colorGradeScience:
      'Custom Teal & Obsidian low-light split tone with high shadow DR latitude.',
    treatmentNotes: [
      'Synchronized kinetic lighting transitions matching architectural geometry',
      'Dolby Atmos spatial sound mixing with synthesized low-frequency sub-bass',
    ],
    tags: ['Commercial', 'Urban Night', 'Anamorphic Kinetics', 'Dolby Atmos'],
    imageUrl: '',
    timecode: 'TC: 00:00:45:00',
    format: 'COMMERCIAL 60S // 8K VV',
    aspectRatio: '16/9',
    audioSpec: 'SPATIAL DOLBY ATMOS',
    scopeSpec: '1.85:1 THEATRICAL',
    fps: '23.976',
    shutter: '180°',
  },
  {
    id: 'reel-4',
    title: 'Film 04: Whispers of the Wetland',
    role: 'DIRECTOR & CINEMATOGRAPHER',
    category: 'POETIC NATURE ESSAY',
    description:
      'Immersive audio-visual study of monsoon water lily blooms, wetland biodiversity, and rural Char quietude in Sirajganj.',
    synopsis:
      'Capturing the micro and macro worlds of Sirajganj beels (wetlands) during continuous seasonal downpours. From raindrop impacts on broad lotus leaves to the solitary silhouette of a bamboo fisherman at twilight.',
    visualAtmosphere:
      'Deep emerald aquatic hues, diffused overcast gray-blue skylight, and macro water droplet reflections.',
    technicalRig:
      'Canon Cinema EOS C300 Mk III • Laowa 24mm Cine Probe & 70-200mm T2.8 • Waterproof rain cover rig',
    colorGradeScience:
      'Naturalistic cool-temp neutral matrix emphasizing lush wetland vegetation and silvery water sheen.',
    treatmentNotes: [
      'Direct field-recorded binaural rain acoustics captured with hydrophones',
      'No artificial lighting used; 100% natural atmospheric monsoon precipitation',
    ],
    tags: ['Nature Essay', 'Sirajganj Beel', 'Wetland Wildlife', 'Binaural Audio'],
    imageUrl: '',
    timecode: 'TC: 00:03:10:12',
    format: '4K DCI XF-AVC ALL-I',
    aspectRatio: '2.00:1',
    audioSpec: 'BINAURAL 96kHz / 24-BIT',
    scopeSpec: '2.00:1 UNIVISIUM',
    fps: '24.00',
    shutter: '180°',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01 // STILLS',
    title: 'Photography',
    subtitle: 'STILLS',
    icon: 'photo_camera',
    description:
      'Comprehensive photographic sessions capturing genuine emotion and sculptural light across commercial, portrait, and editorial assignments.',
    tags: ['Commercial', 'Portrait', 'Editorial'],
  },
  {
    number: '02 // MOTION',
    title: 'Cinematography',
    subtitle: 'MOTION',
    icon: 'videocam',
    description:
      'Director of Photography and camera operator execution with deep mastery of anamorphic optics, lighting rigs, and dynamic camera movement.',
    tags: ['Director of Photography', 'Camera Operator'],
  },
  {
    number: '03 // NARRATIVE',
    title: 'Videography',
    subtitle: 'NARRATIVE',
    icon: 'movie_filter',
    description:
      'Tailored visual productions for high-profile events, brand identity films, and long-form documentary narratives.',
    tags: ['Event', 'Brand Films', 'Documentary'],
  },
  {
    number: '04 // POST',
    title: 'Photo Editing & Retouching',
    subtitle: 'POST',
    icon: 'auto_fix_high',
    description:
      'Archival post-processing including non-destructive high-end skin retouching, color grading, frequency separation, and fine compositing.',
    tags: ['Skin Retouch', 'Color Grading', 'Compositing'],
  },
  {
    number: '05 // IDENTITY & STATIONERY',
    title: 'Brand Identity & Stationery Systems',
    subtitle: 'IDENTITY & STATIONERY',
    icon: 'palette',
    description:
      'Distinguished typographic hierarchies, corporate business card systems, bespoke 3D packaging mockups, editorial publications, and holistic brand identities that command international presence.',
    tags: ['Brand Identity', 'Business Card Mockups', '3D Packaging', 'Visual Direction'],
    featured: true,
  },
];

export interface SocialChannel {
  platform: string;
  handle: string;
  url: string;
  category: 'social' | 'marketplace' | 'stock';
  badge: string;
  description?: string;
  iconName?: string;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    platform: 'Facebook',
    handle: 'mr.fazlerabbi',
    url: 'https://www.facebook.com/mr.fazlerabbi',
    category: 'social',
    badge: 'COMMUNITY & UPDATES',
    description: 'Personal and creative announcements, film behind-the-scenes.',
  },
  {
    platform: 'Instagram',
    handle: 'mr__fazlerabbi',
    url: 'https://www.instagram.com/mr__fazlerabbi',
    category: 'social',
    badge: 'VISUAL JOURNAL',
    description: 'Daily frames, stills, street documentation, and color studies.',
  },
  {
    platform: 'LinkedIn',
    handle: 'Fazle Rabbi',
    url: 'https://www.linkedin.com/in/fazle-rabbi-79a06937a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    category: 'social',
    badge: 'PROFESSIONAL NETWORK',
    description: 'Commercial production management, agency collaborations, and background in Economics.',
  },
  {
    platform: 'Fiverr',
    handle: 'mr_fazle_rabbi',
    url: 'https://www.fiverr.com/mr_fazle_rabbi',
    category: 'marketplace',
    badge: 'VERIFIED GIGS',
    description: 'Direct commission orders for brand identity, business card systems & photo retouching.',
  },
  {
    platform: 'Freelancer.com',
    handle: '@photoframe5',
    url: 'https://www.freelancer.com/u/photoframe5',
    category: 'marketplace',
    badge: 'HIRE ON FREELANCER',
    description: 'International projects, photo framing, branding, and video post-production.',
  },
  {
    platform: 'Adobe Stock',
    handle: 'studiofrx10@gmail.com',
    url: 'mailto:studiofrx10@gmail.com?subject=Adobe%20Stock%20Licensing%20Inquiry%20-%20Md.%20Fazle%20Rabbi',
    category: 'stock',
    badge: 'STOCK CONTRIBUTOR',
    description: 'Commercial licensing for high-resolution stills, South Asian heritage & nature.',
  },
  {
    platform: 'Shutterstock',
    handle: 'Contributor ID: 470095667',
    url: 'https://www.shutterstock.com/g/470095667',
    category: 'stock',
    badge: 'GLOBAL CONTRIBUTOR',
    description: 'Royalty-free editorial, avian wildlife, and fine art landscape catalog.',
  },
];

