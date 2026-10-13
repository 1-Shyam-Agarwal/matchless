/* ============================================================================
   SHOP CATEGORIES  —  homepage tiles, the /categories/ page, and one page per
   category at /categories/<slug>/
   ----------------------------------------------------------------------------
   name         shown on the tile and as the page heading; also listed in
                the enquiry form's "Gift Category" field
   short        one line under the name on the /categories/ page
   description  intro paragraph on the category's own page
   items        "Popular in this range" list on the category page
   branding     "How we brand it" list on the category page
   related      which catalogue products to show on the category page:
                  categories → catalogue category slugs (data/categories.js)
                  keywords   → words matched against product names
                Leave both empty to show no product strip.
   art          which built-in illustration to draw (components/home/CategoryArt)
   image        optional — e.g. '/images/shop/tech-gadgets.png' (a cut-out
                product shot on a transparent background works best) shows a
                photo instead of the illustration
   color        tile / banner background; keep it dark enough for white text
   ========================================================================== */

export const shopCategories = [
  {
    slug: 'tech-gadgets',
    name: 'Tech & Gadgets',
    short: 'Earbuds, headphones, speakers, smartwatches and power banks.',
    description:
      'Audio and wearables from GoBoult — wireless earbuds, headphones, Bluetooth speakers, smartwatches and power banks, including the Mustang edition. Gifts people use every day, supplied in bulk with branded packaging.',
    items: [
      'Wireless earbuds',
      'Wireless headphones',
      'Bluetooth speakers',
      'Smartwatches',
      'Power banks',
      'Mustang edition range',
    ],
    branding: ['Branded gift boxes & sleeves', 'Logo on packaging', 'Personalised greeting cards'],
    related: { categories: [], keywords: [] },
    art: 'tech',
    image: null,
    color: '#2c6a88',
  },
  {
    slug: 'electronic-appliances',
    name: 'Electronic Appliances',
    short: 'Kitchen & home appliances — mixers, kettles, irons, heaters.',
    description:
      'Practical, high-value appliances from Ubon for festive gifting, long-service awards and employee rewards — mixer grinders, blenders, kettles, cooktops, irons, heaters and more, supplied in bulk with branded packaging.',
    items: [
      'Mixer grinders & blenders',
      'Electric kettles & egg boilers',
      'Grills, air fryers & breakfast makers',
      'Infrared & gas cooktops',
      'Irons & garment steamers',
      'Room heaters & fans',
      'Vacuum cleaners',
    ],
    branding: ['Branded packaging & sleeves', 'Logo stickers or engraved plates', 'Personalised greeting cards'],
    related: { categories: [], keywords: [] },
    art: 'appliances',
    image: null,
    color: '#b5781a',
  },
  {
    slug: 'lunch-kitchen-essentials',
    name: 'Lunch & Kitchen Essentials',
    short: 'Lunch boxes, bottles, flasks and kitchen sets.',
    description:
      'Everyday kitchen and lunch gear that goes to work, to school and on the road — a gift that gets used daily by the whole household.',
    items: [
      'Insulated lunch boxes',
      'Steel & glass bottles',
      'Flasks & tumblers',
      'Tiffin sets',
      'Cookware & serveware sets',
      'Kitchen tool kits',
    ],
    branding: ['Laser engraving on steel', 'Screen & pad printing', 'Branded carry bags', 'Custom gift boxes'],
    related: { categories: [], keywords: ['bottle'] },
    art: 'kitchen',
    image: null,
    color: '#b9503b',
  },
  {
    slug: 'bags-travel',
    name: 'Bags & Travel',
    short: 'Backpacks, laptop bags, trolleys and travel kits.',
    description:
      'Cabin trolleys from Aristocrat, VIP and Skybags, plus bags and travel gear that carry your brand through airports, offices and conferences. Each trolley comes in a festive gift box, supplied in bulk.',
    items: [
      'Laptop backpacks',
      'Office & messenger bags',
      'Cabin trolleys — Aristocrat, VIP, Skybags',
      'Duffel & gym bags',
      'Travel organisers & pouches',
      'Neck pillows & travel kits',
    ],
    branding: ['Embroidery', 'Screen printing', 'Debossed leather patches', 'Metal logo badges'],
    related: { categories: [], keywords: [] },
    art: 'travel',
    image: null,
    color: '#357d58',
  },
  {
    slug: 'onboarding-kits',
    name: 'Onboarding Kits',
    short: 'Welcome kits that make day one feel considered.',
    description:
      'A boxed welcome kit on the first day sets the tone for everything after it. We assemble diaries, pens, bottles, ID accessories and more to one specification, in your colours, at any headcount.',
    items: [
      'Diary & pen sets',
      'Bottles & mugs',
      'ID card holders & lanyards',
      'Welcome letters & cards',
      'T-shirts & hoodies',
      'Custom kit boxes',
    ],
    branding: ['Logo on every item', 'Name personalisation', 'Custom box & inserts', 'Printed welcome card'],
    related: { categories: ['welcome-onboarding-kits'], keywords: [] },
    art: 'onboarding',
    image: null,
    color: '#1d2f52',
  },
  {
    slug: 'customisable-items',
    name: 'Customisable Items',
    short: 'Apparel, mugs, caps and anything that takes a logo.',
    description:
      'The everyday pieces that carry your branding furthest — for teams, events and promotions. Choose the item, the colour and the method, and we handle the rest.',
    items: ['T-shirts & polos', 'Hoodies & jackets', 'Caps', 'Mugs', 'Keychains', 'Badges & lanyards', 'Notebooks'],
    branding: ['Screen printing', 'Embroidery', 'Sublimation', 'Laser engraving', 'Name personalisation'],
    related: { categories: ['customized-gifts'], keywords: [] },
    art: 'custom',
    image: null,
    color: '#c25f6f',
  },
  {
    slug: 'trophies-awards',
    name: 'Trophies & Awards',
    short: 'Trophies, mementos, medals and award plaques.',
    description:
      'Recognition worth keeping on the shelf — for annual awards, sales contests, long-service milestones and sporting events, engraved with names and achievements.',
    items: [
      'Crystal & acrylic trophies',
      'Metal trophies',
      'Wooden plaques & mementos',
      'Medals',
      'Certificate frames',
    ],
    branding: ['Laser engraving', 'Colour printing on plates', 'Individual names & titles', 'Presentation boxes'],
    related: { categories: [], keywords: [] },
    art: 'trophy',
    image: null,
    color: '#6b3f7a',
  },
];

export const shopCategoryBySlug = (slug) => shopCategories.find((c) => c.slug === slug);

/** The category's own page. */
export const shopCategoryHref = (c) => `/categories/${c.slug}/`;
