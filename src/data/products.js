/* ============================================================================
   PRODUCT CATALOGUE
   ----------------------------------------------------------------------------
   This one file drives the products page, every category page, the homepage
   "Featured" strip and every individual product page. Nothing else needs to
   change when you add stock.

   TO ADD A PRODUCT
   1. Put a photo at  /public/images/products/<slug>.jpg   (4:3, ~1100x825px)
   2. Copy any block below, paste it into the array, and edit the fields.
   3. `slug` must be unique and lowercase-with-hyphens — it becomes the URL
      /products/<slug>/

   FIELD REFERENCE
   slug          unique id + URL
   name          shown on cards and as the page H1
   image         path under /public
   categories    array of category slugs from data/categories.js (first = main)
   occasions     array of occasion slugs from data/occasions.js
   giftType      free text, powers the "Gift Type" filter
   short         one line for the product card
   description   one or two paragraphs for the product page
   features      bullet list of what is in the set / what it is
   customization bullet list of branding options
   tags          small labels shown on the card
   featured      true = appears on the homepage
   moq           leave null unless you want a specific minimum shown
   ========================================================================== */

const P = '/images/products';

export const products = [
  /* ---------------------------------------------------------------- PRESTIGE */
  {
    slug: 'prestige-monochrome-diary-pen-set',
    name: 'Prestige Monochrome Diary & Pen Set',
    image: `${P}/prestige-monochrome-diary-pen-set.jpg`,
    categories: ['premium-luxury-gifts', 'client-executive-gifts', 'corporate-gift-hampers'],
    occasions: ['leadership-gifts', 'client-appreciation', 'annual-events'],
    giftType: 'Gift Set',
    short: 'Colour-blocked diary with a metal-clip pen, set in a rigid presentation box.',
    description:
      'A two-piece set from our Prestige Series. The diary pairs a ribbed charcoal panel with a soft grey finish in a colour-blocked cover, closed with a brushed metal clasp. It is seated alongside a matching metal-clip pen in a rigid, copper-trimmed presentation box that opens flat — so the gift presents properly the moment it is unwrapped.',
    features: [
      'Hardbound diary with colour-blocked textured cover',
      'Brushed metal front clasp',
      'Matching metal-barrel pen with polished clip',
      'Rigid presentation box with copper trim and fitted insert',
    ],
    customization: [
      'Logo debossed or foil-stamped on the diary cover',
      'Laser engraving on the pen barrel or clip',
      'Printed greeting card or company note inside the box',
      'Custom outer sleeve in your brand colours',
    ],
    tags: ['Prestige Series', 'Two-piece set'],
    featured: true,
    moq: null,
  },
  {
    slug: 'prestige-navy-diary-pen-set',
    name: 'Prestige Navy Diary & Pen Set',
    image: `${P}/prestige-navy-diary-pen-set.jpg`,
    categories: ['premium-luxury-gifts', 'client-executive-gifts', 'employee-gifts'],
    occasions: ['leadership-gifts', 'employee-recognition', 'corporate-events'],
    giftType: 'Gift Set',
    short: 'Deep navy ribbed diary and pen, presented in a copper-trimmed rigid box.',
    description:
      'The navy colourway of the Prestige Series. A finely ribbed deep-navy cover with a recessed spine detail, paired with a slim metal pen and presented in the same rigid copper-trimmed box. A safe, serious choice where the recipient list spans several levels of an organisation.',
    features: [
      'Hardbound diary with fine ribbed navy finish',
      'Recessed spine detail',
      'Slim metal-barrel pen',
      'Rigid presentation box with fitted insert',
    ],
    customization: [
      'Logo debossed or foil-stamped on the cover',
      'Laser engraving on the pen',
      'Recipient name personalisation on each diary',
      'Branded belly band or outer sleeve',
    ],
    tags: ['Prestige Series', 'Two-piece set'],
    featured: true,
    moq: null,
  },
  {
    slug: 'prestige-onyx-diary-gold-pen-set',
    name: 'Prestige Onyx Diary & Gold Pen Set',
    image: `${P}/prestige-onyx-diary-gold-pen-set.jpg`,
    categories: ['premium-luxury-gifts', 'client-executive-gifts'],
    occasions: ['leadership-gifts', 'client-appreciation', 'festive-gifting'],
    giftType: 'Gift Set',
    short: 'Black ribbed diary with a gold-clasp closure and gold-trim pen.',
    description:
      'The highest-contrast set in the Prestige Series — a black ribbed cover closed with a polished gold clasp, matched to a pen with gold trim. Suited to senior gifting, milestone recognition and festive occasions where a warmer metal reads better than steel.',
    features: [
      'Hardbound diary with ribbed black cover',
      'Polished gold-tone front clasp',
      'Matching pen with gold trim detailing',
      'Rigid presentation box with fitted insert',
    ],
    customization: [
      'Gold foil logo stamping on the cover',
      'Laser engraving on the pen',
      'Personalised name plate',
      'Festive outer packaging and greeting card',
    ],
    tags: ['Prestige Series', 'Gold detailing'],
    featured: true,
    moq: null,
  },
  {
    slug: 'prestige-slate-portfolio-set',
    name: 'Prestige Slate Portfolio & Pen Set',
    image: `${P}/prestige-slate-portfolio-set.jpg`,
    categories: ['premium-luxury-gifts', 'client-executive-gifts', 'branded-merchandise'],
    occasions: ['leadership-gifts', 'conferences', 'corporate-events'],
    giftType: 'Gift Set',
    short: 'Slate-grey portfolio with a flap closure, paired with a metal pen.',
    description:
      'A portfolio-style folder in slate grey with a patterned surface and an angled flap closure, supplied with a matching metal pen in a rigid box. The flap face is a clean, uninterrupted area — the easiest surface in the range to carry a logo well.',
    features: [
      'Portfolio-style diary with angled flap closure',
      'Patterned slate-grey surface finish',
      'Metal-barrel pen with polished clip',
      'Rigid presentation box with fitted insert',
    ],
    customization: [
      'Logo debossed or metal badge fitted to the flap',
      'Laser engraving on the pen',
      'Custom colourway from the available range',
      'Printed insert card',
    ],
    tags: ['Prestige Series', 'Portfolio style'],
    featured: false,
    moq: null,
  },

  /* ------------------------------------------------- TWO-PIECE DIARY + PEN */
  {
    slug: 'executive-navy-diary-pen-set',
    name: 'Executive Navy Diary & Pen Set',
    image: `${P}/executive-navy-diary-pen-set.jpg`,
    categories: ['client-executive-gifts', 'employee-gifts', 'corporate-gift-hampers'],
    occasions: ['employee-recognition', 'client-appreciation', 'annual-events'],
    giftType: 'Gift Set',
    short: 'Navy diary with a gold rule detail and a matching pen in a white tray.',
    description:
      'A clean two-piece set — a navy hardbound diary carrying a single gold rule across the cover, presented beside a matching pen in a white fitted tray. Restrained enough to suit a broad recipient list, finished well enough to give to a client.',
    features: [
      'Hardbound navy diary with gold rule detail',
      'Matching pen',
      'White fitted tray with rigid outer box',
    ],
    customization: [
      'Logo foil-stamped or debossed on the cover',
      'Pen engraving',
      'Custom insert card',
    ],
    tags: ['Two-piece set'],
    featured: true,
    moq: null,
  },
  {
    slug: 'classic-black-diary-pen-set',
    name: 'Classic Black Diary & Pen Set',
    image: `${P}/classic-black-diary-pen-set.jpg`,
    categories: ['employee-gifts', 'client-executive-gifts', 'corporate-gift-hampers'],
    occasions: ['employee-recognition', 'conferences', 'corporate-events'],
    giftType: 'Gift Set',
    short: 'Black textured diary with a metal emblem, set with a matching pen.',
    description:
      'A black textured diary with a metal emblem set into the cover, supplied with a matching pen in a fitted white tray. The most neutral set in the range and the most straightforward to brand across a large order.',
    features: [
      'Hardbound diary with textured black cover',
      'Metal emblem fitted to the cover',
      'Matching pen',
      'Fitted tray and rigid outer box',
    ],
    customization: [
      'Logo debossing on the cover',
      'Custom metal badge in place of the standard emblem',
      'Pen engraving',
    ],
    tags: ['Two-piece set', 'Volume friendly'],
    featured: false,
    moq: null,
  },
  {
    slug: 'gilded-wave-diary-pen-set',
    name: 'Gilded Wave Diary & Pen Set',
    image: `${P}/gilded-wave-diary-pen-set.jpg`,
    categories: ['festival-gifts', 'premium-luxury-gifts', 'client-executive-gifts'],
    occasions: ['festive-gifting', 'client-appreciation', 'leadership-gifts'],
    giftType: 'Gift Set',
    short: 'Black diary with a sweeping gold inlay, paired with a gold-trim pen.',
    description:
      'A black cover carrying a sweeping gold inlay that runs the height of the diary, matched to a pen with gold trim. The most decorative set in the two-piece range and a natural fit for Diwali and festive gifting.',
    features: [
      'Hardbound diary with gold inlay detail',
      'Gold-trim pen',
      'Fitted tray and rigid outer box',
    ],
    customization: [
      'Gold foil logo stamping',
      'Pen engraving',
      'Festive sleeve and greeting card',
    ],
    tags: ['Festive', 'Gold detailing'],
    featured: false,
    moq: null,
  },
  {
    slug: 'cobalt-diary-pen-gift-box',
    name: 'Cobalt Diary & Pen Gift Box',
    image: `${P}/cobalt-diary-pen-gift-box.jpg`,
    categories: ['employee-gifts', 'promotional-products', 'corporate-gift-hampers'],
    occasions: ['employee-recognition', 'sales-campaigns', 'annual-events'],
    giftType: 'Gift Set',
    short: 'Cobalt-blue diary with twin rule detailing and a matching slim pen.',
    description:
      'A cobalt-blue diary with twin rule detailing across the cover, boxed with a slim matching pen. A brighter colourway that holds a logo well and photographs strongly for internal communications.',
    features: ['Hardbound cobalt diary', 'Slim matching pen', 'Rigid gift box'],
    customization: ['Logo debossing or foil stamping', 'Pen engraving', 'Custom box sleeve'],
    tags: ['Two-piece set'],
    featured: false,
    moq: null,
  },
  {
    slug: 'tan-leatherette-diary-pen-set',
    name: 'Tan Leatherette Diary & Pen Set',
    image: `${P}/tan-leatherette-diary-pen-set.jpg`,
    categories: ['client-executive-gifts', 'festival-gifts', 'premium-luxury-gifts'],
    occasions: ['client-appreciation', 'festive-gifting', 'leadership-gifts'],
    giftType: 'Gift Set',
    short: 'Warm tan leatherette diary with banded detailing and a gold-trim pen.',
    description:
      'A warm tan leatherette cover with horizontal banded detailing and a gold-tone corner clasp, supplied with a gold-trim pen. The warmest colourway in the range and the one most often chosen for festive and client gifting.',
    features: [
      'Leatherette-finish diary in tan',
      'Banded cover detailing with gold-tone clasp',
      'Gold-trim pen',
      'Rigid gift box',
    ],
    customization: ['Blind or foil logo debossing', 'Pen engraving', 'Personalised name'],
    tags: ['Leatherette finish'],
    featured: false,
    moq: null,
  },
  {
    slug: 'textured-grey-diary-pen-set',
    name: 'Textured Grey Diary & Pen Set',
    image: `${P}/textured-grey-diary-pen-set.jpg`,
    categories: ['employee-gifts', 'branded-merchandise', 'promotional-products'],
    occasions: ['employee-recognition', 'conferences', 'new-joiner-kits'],
    giftType: 'Gift Set',
    short: 'Fabric-textured grey diary with a contrast band and matching pen.',
    description:
      'A fabric-textured grey cover broken by a single white contrast band, supplied with a matching dark pen. Quiet, modern and easy to specify in quantity when the gift needs to suit everyone.',
    features: ['Fabric-textured grey diary', 'Contrast band detail', 'Matching pen', 'Gift box'],
    customization: ['Logo printing or debossing on the band', 'Pen engraving'],
    tags: ['Two-piece set', 'Volume friendly'],
    featured: false,
    moq: null,
  },
  {
    slug: 'cognac-diary-pen-set',
    name: 'Cognac Diary & Pen Set',
    image: `${P}/cognac-diary-pen-set.jpg`,
    categories: ['client-executive-gifts', 'festival-gifts'],
    occasions: ['client-appreciation', 'festive-gifting', 'annual-events'],
    giftType: 'Gift Set',
    short: 'Cognac-brown textured diary with a contrast band and a wood-tone pen.',
    description:
      'A cognac-brown textured diary with a white contrast band across the cover, matched to a wood-tone pen. A warmer alternative to the grey and navy sets at the same specification.',
    features: ['Textured cognac diary', 'Contrast band detail', 'Wood-tone pen', 'Gift box'],
    customization: ['Logo debossing', 'Pen engraving', 'Custom band colour'],
    tags: ['Two-piece set'],
    featured: false,
    moq: null,
  },
  {
    slug: 'russet-textured-diary-pen-set',
    name: 'Russet Textured Diary & Pen Set',
    image: `${P}/russet-textured-diary-pen-set.jpg`,
    categories: ['festival-gifts', 'client-executive-gifts', 'corporate-gift-hampers'],
    occasions: ['festive-gifting', 'client-appreciation'],
    giftType: 'Gift Set',
    short: 'Russet diary with an embossed surface pattern and a gold-trim pen.',
    description:
      'A russet cover carrying a fine embossed surface pattern, closed with a leather-look tab, and boxed with a gold-trim pen. Distinctly festive without tipping into decoration for its own sake.',
    features: [
      'Diary with embossed surface pattern',
      'Leather-look closure tab',
      'Gold-trim pen',
      'Rigid presentation box',
    ],
    customization: ['Foil logo stamping', 'Pen engraving', 'Festive outer sleeve'],
    tags: ['Festive'],
    featured: false,
    moq: null,
  },

  /* ----------------------------------------- THREE-PIECE DIARY + PEN + KEY */
  {
    slug: 'onyx-trio-diary-pen-keyring',
    name: 'Onyx Trio — Diary, Pen & Keyring',
    image: `${P}/onyx-trio-diary-pen-keyring.jpg`,
    categories: ['corporate-gift-hampers', 'premium-luxury-gifts', 'customized-gifts'],
    occasions: ['leadership-gifts', 'client-appreciation', 'festive-gifting'],
    giftType: 'Gift Set',
    short: 'Three-piece set — patterned black diary, pen and a metal keyring.',
    description:
      'A three-piece set built around a black diary carrying a gold geometric pattern and a circular gold medallion, supplied with a matching pen and a metal keyring. The medallion is the natural place to carry a logo.',
    features: [
      'Patterned hardbound diary with gold medallion',
      'Matching metal pen',
      'Metal keyring',
      'Rigid presentation box with fitted insert',
    ],
    customization: [
      'Logo engraved into the cover medallion',
      'Laser engraving on the pen and keyring',
      'Custom box and printed insert',
    ],
    tags: ['Three-piece set', 'Gold detailing'],
    featured: true,
    moq: null,
  },
  {
    slug: 'midnight-trio-diary-pen-keyring',
    name: 'Midnight Trio — Diary, Pen & Keyring',
    image: `${P}/midnight-trio-diary-pen-keyring.jpg`,
    categories: ['corporate-gift-hampers', 'employee-gifts', 'event-conference-gifts'],
    occasions: ['employee-recognition', 'conferences', 'annual-events'],
    giftType: 'Gift Set',
    short: 'Navy diary with a curved inlay, a pen and a leather-tab keyring.',
    description:
      'A navy diary with a curved contrast inlay running the height of the cover, boxed with a matching pen and a leather-tab metal keyring. A complete three-piece gift that still reads as restrained.',
    features: [
      'Navy diary with curved inlay',
      'Matching pen',
      'Leather-tab metal keyring',
      'Rigid box',
    ],
    customization: ['Logo debossing', 'Pen and keyring engraving', 'Custom insert card'],
    tags: ['Three-piece set'],
    featured: false,
    moq: null,
  },
  {
    slug: 'graphite-trio-diary-pen-keyring',
    name: 'Graphite Trio — Diary, Pen & Keyring',
    image: `${P}/graphite-trio-diary-pen-keyring.jpg`,
    categories: ['corporate-gift-hampers', 'employee-gifts', 'branded-merchandise'],
    occasions: ['employee-recognition', 'new-joiner-kits', 'corporate-events'],
    giftType: 'Gift Set',
    short: 'Graphite diary with a curved inlay, matching pen and metal keyring.',
    description:
      'The graphite colourway of the three-piece set — a curved contrast inlay across a dark grey cover, with a matching pen and metal keyring. Neutral enough to give across an entire department.',
    features: ['Graphite diary with curved inlay', 'Matching pen', 'Metal keyring', 'Rigid box'],
    customization: ['Logo debossing', 'Pen and keyring engraving', 'Custom outer sleeve'],
    tags: ['Three-piece set', 'Volume friendly'],
    featured: false,
    moq: null,
  },
  {
    slug: 'tan-trio-diary-pen-keyring',
    name: 'Tan Trio — Diary, Pen & Keyring',
    image: `${P}/tan-trio-diary-pen-keyring.jpg`,
    categories: ['corporate-gift-hampers', 'festival-gifts', 'client-executive-gifts'],
    occasions: ['festive-gifting', 'client-appreciation', 'leadership-gifts'],
    giftType: 'Gift Set',
    short: 'Tan leatherette diary with a name plate, pen and leather-tab keyring.',
    description:
      'A tan leatherette diary with a blank plate set into the cover — intended to carry a logo or a name — supplied with a matching pen and leather-tab keyring in a fitted box.',
    features: [
      'Tan leatherette diary with cover plate',
      'Matching pen',
      'Leather-tab metal keyring',
      'Fitted presentation box',
    ],
    customization: [
      'Logo or recipient name on the cover plate',
      'Pen and keyring engraving',
      'Personalisation per recipient across the order',
    ],
    tags: ['Three-piece set', 'Personalisable'],
    featured: true,
    moq: null,
  },
  {
    slug: 'forest-trio-diary-pen-keyring',
    name: 'Forest Trio — Diary, Pen & Keyring',
    image: `${P}/forest-trio-diary-pen-keyring.jpg`,
    categories: ['corporate-gift-hampers', 'customized-gifts', 'employee-gifts'],
    occasions: ['employee-recognition', 'annual-events', 'corporate-events'],
    giftType: 'Gift Set',
    short: 'Forest-green diary with a woven panel, pen and matching keyring.',
    description:
      'A forest-green diary with a woven textile panel set into the cover, boxed with a colour-matched pen and keyring. The strongest colourway in the three-piece range for brands that are not navy or black.',
    features: [
      'Green diary with woven panel',
      'Colour-matched pen',
      'Matching keyring',
      'Fitted box',
    ],
    customization: [
      'Logo debossing on the cover band',
      'Pen and keyring engraving',
      'Custom colourway',
    ],
    tags: ['Three-piece set'],
    featured: false,
    moq: null,
  },

  /* ------------------------------------------ DIARY + PEN + BOTTLE / KITS */
  {
    slug: 'welcome-kit-diary-pen-bottle',
    name: 'Welcome Kit — Diary, Pen & Bottle',
    image: `${P}/welcome-kit-diary-pen-bottle.jpg`,
    categories: ['welcome-onboarding-kits', 'corporate-gift-hampers', 'employee-gifts'],
    occasions: ['employee-onboarding', 'new-joiner-kits', 'conferences'],
    giftType: 'Combo Kit',
    short: 'Diary, pen and insulated bottle packed together as a day-one kit.',
    description:
      'A three-piece onboarding kit — a tan diary, a matching pen and an insulated bottle — packed into one rigid box with a fitted insert. Built to be ordered repeatedly at the same specification, so every new joiner receives the same thing.',
    features: [
      'Hardbound diary',
      'Matching pen',
      'Insulated bottle',
      'Rigid box with fitted insert, ready to hand over',
    ],
    customization: [
      'Logo on all three pieces',
      'Printed welcome card with the joiner’s name',
      'Custom box and brand-colour insert',
      'Additional items added to the kit on request',
    ],
    tags: ['Onboarding', 'Three-piece kit'],
    featured: true,
    moq: null,
  },
  {
    slug: 'navy-onboarding-kit',
    name: 'Navy Onboarding Kit',
    image: `${P}/navy-onboarding-kit.jpg`,
    categories: ['welcome-onboarding-kits', 'employee-gifts', 'event-conference-gifts'],
    occasions: ['employee-onboarding', 'new-joiner-kits', 'conferences'],
    giftType: 'Combo Kit',
    short: 'Navy diary, pen and navy bottle presented as a single boxed kit.',
    description:
      'The navy colourway of the onboarding kit — diary, pen and insulated bottle in a matched palette, boxed together. The tightest-matching kit in the range when the gift needs to sit inside a strict brand colour.',
    features: ['Navy diary', 'Matching pen', 'Navy insulated bottle', 'Rigid boxed presentation'],
    customization: [
      'Logo on all three pieces',
      'Brand-matched colourway',
      'Printed insert or welcome note',
    ],
    tags: ['Onboarding', 'Three-piece kit'],
    featured: false,
    moq: null,
  },
  {
    slug: 'azure-diary-pen-bottle-kit',
    name: 'Azure Kit — Diary, Pen & Bottle',
    image: `${P}/azure-diary-pen-bottle-kit.jpg`,
    categories: ['event-conference-gifts', 'welcome-onboarding-kits', 'promotional-products'],
    occasions: ['conferences', 'corporate-events', 'sales-campaigns'],
    giftType: 'Combo Kit',
    short: 'Bright azure diary, pen and bottle — a high-visibility delegate kit.',
    description:
      'A brighter three-piece kit in azure blue — diary, pen and bottle — suited to conferences and activations where the kit needs to be seen across a room and photographs well on a delegate desk.',
    features: ['Azure diary', 'Matching pen', 'Insulated bottle', 'Rigid boxed presentation'],
    customization: [
      'Logo on all three pieces',
      'Event branding on the box',
      'Printed delegate card',
    ],
    tags: ['Delegate kit', 'Three-piece kit'],
    featured: false,
    moq: null,
  },
  {
    slug: 'forest-diary-pen-bottle-kit',
    name: 'Forest Kit — Diary, Pen & Bottle',
    image: `${P}/forest-diary-pen-bottle-kit.jpg`,
    categories: ['event-conference-gifts', 'welcome-onboarding-kits', 'customized-gifts'],
    occasions: ['conferences', 'employee-onboarding', 'corporate-events'],
    giftType: 'Combo Kit',
    short: 'Sage and forest-green diary, pen and bottle in a matched kit.',
    description:
      'A sage and forest-green three-piece kit — diary, pen and insulated bottle — presented in a fitted box. A calmer palette than the azure kit at the same specification.',
    features: ['Sage-green diary', 'Matching pen', 'Insulated bottle', 'Fitted presentation box'],
    customization: ['Logo on all three pieces', 'Custom colourway', 'Printed insert'],
    tags: ['Three-piece kit'],
    featured: false,
    moq: null,
  },
  {
    slug: 'sandstone-five-piece-hamper',
    name: 'Sandstone Multi-Piece Gift Hamper',
    image: `${P}/sandstone-five-piece-hamper.jpg`,
    categories: ['corporate-gift-hampers', 'premium-luxury-gifts', 'festival-gifts'],
    occasions: ['festive-gifting', 'client-appreciation', 'leadership-gifts'],
    giftType: 'Hamper',
    short: 'A multi-piece hamper in sandstone tones, laid out in a fitted tray.',
    description:
      'Our largest standard presentation — a multi-piece hamper in sandstone and natural tones, laid out across a fitted tray inside a rigid box. Contents can be adjusted piece by piece to land on your budget without changing how the gift presents.',
    features: [
      'Multi-piece set in a fitted tray',
      'Coordinated natural and sandstone palette',
      'Rigid presentation box',
      'Contents adjustable to budget',
    ],
    customization: [
      'Swap or add pieces to suit your budget',
      'Logo applied across the individual items',
      'Custom tray layout and outer packaging',
      'Printed greeting card',
    ],
    tags: ['Hamper', 'Budget adjustable'],
    featured: true,
    moq: null,
  },

  /* ---------------------------------------------------- NOTEBOOKS / DIARIES */
  {
    slug: 'colour-range-soft-touch-notebooks',
    name: 'Soft-Touch Notebook Colour Range',
    image: `${P}/colour-range-soft-touch-notebooks.jpg`,
    categories: ['employee-gifts', 'promotional-products', 'branded-merchandise'],
    occasions: ['employee-onboarding', 'conferences', 'sales-campaigns'],
    giftType: 'Diary & Notebook',
    short: 'A5 soft-touch notebooks with a pen loop, available across a colour range.',
    description:
      'A5 notebooks with a soft-touch cover, elastic closure and an integrated pen loop, available across a range of colours. The most cost-effective way to put a well-made branded item into a lot of hands at once.',
    features: [
      'A5 format with elastic closure',
      'Integrated pen loop',
      'Soft-touch cover finish',
      'Available in a range of cover colours',
    ],
    customization: [
      'Logo screen-printed or debossed on the cover',
      'Cover colour selected from the available range',
      'Branded belly band',
      'Matching pen supplied alongside',
    ],
    tags: ['A5', 'Colour range', 'Volume friendly'],
    featured: true,
    moq: null,
  },
  {
    slug: 'dual-tone-executive-notebooks',
    name: 'Dual-Tone Executive Notebooks',
    image: `${P}/dual-tone-executive-notebooks.jpg`,
    categories: ['branded-merchandise', 'employee-gifts', 'client-executive-gifts'],
    occasions: ['employee-recognition', 'conferences', 'client-appreciation'],
    giftType: 'Diary & Notebook',
    short: 'Fabric-finish notebooks with a metal half-moon closure detail.',
    description:
      'Fabric-finish A5 notebooks in grey and navy, each carrying a brushed metal half-moon closure detail on the fore-edge. A step up from a plain notebook without moving into gift-set pricing.',
    features: [
      'A5 fabric-finish cover',
      'Brushed metal closure detail',
      'Available in coordinated colourways',
    ],
    customization: ['Logo debossing or metal badge', 'Custom cover colour', 'Printed inner page'],
    tags: ['A5', 'Metal detailing'],
    featured: false,
    moq: null,
  },
  {
    slug: 'heritage-hardbound-notebooks',
    name: 'Heritage Hardbound Notebook Range',
    image: `${P}/heritage-hardbound-notebooks.jpg`,
    categories: ['branded-merchandise', 'employee-gifts', 'festival-gifts'],
    occasions: ['festive-gifting', 'employee-recognition', 'annual-events'],
    giftType: 'Diary & Notebook',
    short: 'Hardbound notebooks with a metal strap closure, across a deep colour range.',
    description:
      'Hardbound notebooks finished in deep, saturated colours and closed with a metal strap across the fore-edge. Presented as a range so a single order can carry more than one colour without looking mismatched.',
    features: [
      'Hardbound with metal strap closure',
      'Deep saturated cover colours',
      'Supplied as a coordinated range',
    ],
    customization: [
      'Logo debossing or foil stamping',
      'Mixed colours within one order',
      'Branded sleeve',
    ],
    tags: ['Colour range'],
    featured: false,
    moq: null,
  },
  {
    slug: 'embossed-signature-notebook',
    name: 'Embossed Signature Notebook',
    image: `${P}/embossed-signature-notebook.jpg`,
    categories: ['customized-gifts', 'branded-merchandise', 'client-executive-gifts'],
    occasions: ['client-appreciation', 'leadership-gifts', 'employee-recognition'],
    giftType: 'Diary & Notebook',
    short: 'Natural-textile notebook with a magnetic tab — built for a debossed logo.',
    description:
      'A natural textile-finish notebook closed with a magnetic front tab. The undecorated cover and matte surface are the best canvas in the range for a blind-debossed logo, where the branding is felt rather than printed.',
    features: [
      'Natural textile cover finish',
      'Magnetic front tab closure',
      'Matte, undecorated cover surface',
    ],
    customization: [
      'Blind debossing — logo pressed into the cover',
      'Foil stamping in gold, silver or a brand colour',
      'Recipient name alongside the logo',
    ],
    tags: ['Debossing', 'Personalisable'],
    featured: true,
    moq: null,
  },
  {
    slug: 'notebook-and-bottle-combo',
    name: 'Notebook & Bottle Combo',
    image: `${P}/notebook-and-bottle-combo.jpg`,
    categories: ['employee-gifts', 'promotional-products', 'welcome-onboarding-kits'],
    occasions: ['employee-onboarding', 'new-joiner-kits', 'sales-campaigns'],
    giftType: 'Combo Kit',
    short: 'A simple, well-priced pairing of a notebook and a bottle.',
    description:
      'A straightforward two-item combination — a hardbound notebook and a bottle — for programmes that need to cover a lot of people at a sensible cost. Packaging can be as simple or as finished as the budget allows.',
    features: ['Hardbound notebook with strap closure', 'Bottle', 'Packaging to suit the budget'],
    customization: ['Logo on both items', 'Choice of packaging level', 'Custom colour pairing'],
    tags: ['Combo', 'Volume friendly'],
    featured: false,
    moq: null,
  },
  {
    slug: 'desk-trio-notebook-collection',
    name: 'Desk Trio Notebook Collection',
    image: `${P}/desk-trio-notebook-collection.jpg`,
    categories: ['branded-merchandise', 'employee-gifts', 'promotional-products'],
    occasions: ['employee-recognition', 'conferences', 'corporate-events'],
    giftType: 'Diary & Notebook',
    short: 'Coordinated notebooks in tan, sage and charcoal with a wrap closure.',
    description:
      'A coordinated set of notebooks in tan, sage and charcoal, each closed with a wrap-around tab. Ordered as a collection so different teams can receive different colours while the gift stays consistent.',
    features: ['Wrap-around tab closure', 'Coordinated three-colour palette', 'A5 format'],
    customization: [
      'Logo debossing on the tab or cover',
      'Colour allocation per team',
      'Branded band',
    ],
    tags: ['Colour range', 'A5'],
    featured: false,
    moq: null,
  },
  {
    slug: 'workspace-notebook-collection',
    name: 'Workspace Notebook Collection',
    image: `${P}/workspace-notebook-collection.jpg`,
    categories: ['promotional-products', 'branded-merchandise', 'event-conference-gifts'],
    occasions: ['conferences', 'sales-campaigns', 'corporate-events'],
    giftType: 'Diary & Notebook',
    short: 'Everyday notebooks with a card pocket and pen loop for desk use.',
    description:
      'Notebooks built for daily desk use — a front card pocket, a pen loop and a hardwearing cover. Practical rather than decorative, and the range most often chosen for recurring campaign giveaways.',
    features: ['Front card pocket', 'Pen loop', 'Hardwearing cover finish'],
    customization: ['Logo printing or debossing', 'Custom cover colour', 'Printed first page'],
    tags: ['Everyday use'],
    featured: false,
    moq: null,
  },
];

/* ---------------------------------------------------------------------------
   Derived helpers — no need to edit.
   ------------------------------------------------------------------------ */

export const productBySlug = (slug) => products.find((p) => p.slug === slug);

export const productsInCategory = (slug) =>
  products.filter((p) => p.categories.includes(slug));

export const featuredProducts = products.filter((p) => p.featured);

export const giftTypes = [...new Set(products.map((p) => p.giftType))].sort();

export const relatedProducts = (product, limit = 3) =>
  products
    .filter((p) => p.slug !== product.slug)
    .map((p) => ({
      p,
      score: p.categories.filter((c) => product.categories.includes(c)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
