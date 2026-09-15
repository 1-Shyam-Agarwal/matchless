/* ============================================================================
   PRODUCT CATEGORIES
   ----------------------------------------------------------------------------
   To add a category: copy a block, change `slug` (lowercase-with-hyphens,
   this becomes the URL /categories/<slug>/), and drop a 900x675 JPEG into
   /public/images/categories/<slug>.jpg
   ========================================================================== */

export const categories = [
  {
    slug: 'corporate-gift-hampers',
    name: 'Corporate Gift Hampers',
    short: 'Multi-piece hampers presented in rigid, ready-to-gift packaging.',
    description:
      'Curated multi-piece hampers that combine stationery, drinkware and desk accessories in a single presentation box. Contents, colourways and packaging are built around your budget and occasion.',
    image: '/images/categories/corporate-gift-hampers.jpg',
    featured: true,
  },
  {
    slug: 'employee-gifts',
    name: 'Employee Gifts',
    short: 'Practical, everyday gifts that work at scale across a workforce.',
    description:
      'Gifts designed to be given across a team — durable, useful and consistent in presentation, whether you are recognising ten people or a thousand.',
    image: '/images/categories/employee-gifts.jpg',
    featured: true,
  },
  {
    slug: 'client-executive-gifts',
    name: 'Client & Executive Gifts',
    short: 'Considered pieces for clients, partners and senior leadership.',
    description:
      'A more restrained, higher-finish selection for the relationships that matter most — refined materials, metal detailing and understated branding.',
    image: '/images/categories/client-executive-gifts.jpg',
    featured: true,
  },
  {
    slug: 'branded-merchandise',
    name: 'Branded Merchandise',
    short: 'Everyday items carrying your logo, done properly.',
    description:
      'Merchandise your team will actually use, with your logo applied through embossing, debossing, screen printing, laser engraving or UV printing depending on the material.',
    image: '/images/categories/branded-merchandise.jpg',
    featured: true,
  },
  {
    slug: 'promotional-products',
    name: 'Promotional Products',
    short: 'High-visibility giveaways for campaigns and activations.',
    description:
      'Cost-effective items for marketing campaigns, trade stands, product launches and field activity — produced in volume without the presentation falling away.',
    image: '/images/categories/promotional-products.jpg',
  },
  {
    slug: 'festival-gifts',
    name: 'Festival Gifts',
    short: 'Diwali and festive gifting with warmth and polish.',
    description:
      'Festive gifting for Diwali, New Year and seasonal occasions — from simple, elegant single gifts through to layered premium hampers, with festive packaging and a personalised greeting.',
    image: '/images/categories/festival-gifts.jpg',
    featured: true,
  },
  {
    slug: 'welcome-onboarding-kits',
    name: 'Welcome & Onboarding Kits',
    short: 'A considered first impression on day one.',
    description:
      'Kits assembled for new joiners — a diary, a pen, drinkware and your branding, packed together so every new team member receives the same well-made welcome.',
    image: '/images/categories/welcome-onboarding-kits.jpg',
    featured: true,
  },
  {
    slug: 'event-conference-gifts',
    name: 'Event & Conference Gifts',
    short: 'Delegate kits produced to deadline, in volume.',
    description:
      'Conference and event gifting — delegate kits, speaker gifts and giveaways, produced to quantity and delivered in time for the date in your calendar.',
    image: '/images/categories/event-conference-gifts.jpg',
  },
  {
    slug: 'customized-gifts',
    name: 'Customized Gifts',
    short: 'Built around your brand rather than adapted to it.',
    description:
      'Where a catalogue product is not quite right, we build the gift instead — custom combinations, bespoke packaging, personalised names and brand-matched colourways.',
    image: '/images/categories/customized-gifts.jpg',
    featured: true,
  },
  {
    slug: 'premium-luxury-gifts',
    name: 'Premium & Luxury Gifts',
    short: 'Our highest-finish sets, for the occasions that warrant them.',
    description:
      'The top of our range — heavier materials, metal fittings, magnetic-closure rigid boxes and a presentation standard suited to leadership, milestone and VIP gifting.',
    image: '/images/categories/premium-luxury-gifts.jpg',
    featured: true,
  },
];

export const categoryBySlug = (slug) => categories.find((c) => c.slug === slug);
export const categoryName = (slug) => categoryBySlug(slug)?.name ?? slug;
