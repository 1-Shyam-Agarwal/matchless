/* ============================================================================
   OCCASIONS — used for the "Gifting For Every Occasion" section and as a
   filter on the products page. `icon` maps to a key in components/Icon.jsx.
   ========================================================================== */

export const occasions = [
  { slug: 'employee-recognition', name: 'Employee Recognition', icon: 'award',
    short: 'Mark long service, performance and the wins worth noticing.' },
  { slug: 'employee-onboarding', name: 'Employee Onboarding', icon: 'badge',
    short: 'A considered welcome kit waiting on day one.' },
  { slug: 'festive-gifting', name: 'Diwali & Festival Gifting', icon: 'sparkle',
    short: 'Festive gifts and hampers, simple through to premium.' },
  { slug: 'client-appreciation', name: 'Client Appreciation', icon: 'handshake',
    short: 'Thank the clients who keep choosing you.' },
  { slug: 'annual-events', name: 'Annual Events', icon: 'calendar',
    short: 'Annual days, town halls and year-end celebrations.' },
  { slug: 'corporate-events', name: 'Corporate Events', icon: 'building',
    short: 'Launches, offsites and partner gatherings.' },
  { slug: 'conferences', name: 'Conferences', icon: 'mic',
    short: 'Delegate kits and speaker gifts, produced to deadline.' },
  { slug: 'new-joiner-kits', name: 'New Joiner Kits', icon: 'box',
    short: 'Repeatable kits that scale with your hiring.' },
  { slug: 'leadership-gifts', name: 'Leadership & Executive Gifts', icon: 'crown',
    short: 'A higher finish for senior and board-level gifting.' },
  { slug: 'sales-campaigns', name: 'Sales & Marketing Campaigns', icon: 'megaphone',
    short: 'Giveaways and incentives that carry your brand into the field.' },
];

export const occasionBySlug = (slug) => occasions.find((o) => o.slug === slug);
export const occasionName = (slug) => occasionBySlug(slug)?.name ?? slug;
