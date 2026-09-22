/* ============================================================================
   SITE CONFIGURATION  —  EDIT THIS FILE FIRST
   ----------------------------------------------------------------------------
   Anything wrapped in [SQUARE BRACKETS] is a placeholder that has NOT been
   filled in yet. The website detects these automatically and shows a neutral,
   professional note instead of a broken link — so nothing looks broken while
   you gather the details.

   To go live, replace the bracketed values below with your real details.
   ========================================================================== */

export const site = {
  name: 'Matchless Corporate Gifting',
  shortName: 'Matchless',
  tagline: 'Thoughtful Gifts. Stronger Connections.',
  headline: 'Premium Corporate Gifting, Made Memorable.',
  intro:
    'Thoughtfully curated corporate gifts and customized gifting solutions for clients, employees, events and every important business occasion.',
  description:
    'Matchless Corporate Gifting is a corporate gifting partner for businesses — premium diary and pen gift sets, branded merchandise, employee kits, festival hampers and fully customized gifting, supplied in bulk with your branding.',

  // Replace with your real domain once the site is live. Used for SEO,
  // sitemap.xml, canonical URLs and social sharing previews.
  url: 'https://www.matchlesscorporategifting.com',
};

export const contact = {
  /* --- Phone -------------------------------------------------------------
     phone        : how the number is shown on screen
     phoneE164    : the same number for tel: links, digits only with country
                    code, e.g. '+919876543210'. Leave '' if not ready.       */
  phone: '+91-9311161298',
  phoneE164: '+919311161298',

  /* --- WhatsApp ----------------------------------------------------------
     Digits only, country code first, NO plus sign. e.g. '919876543210'      */
  whatsappE164: '919311161298',

  /* --- Email ------------------------------------------------------------ */
  email: 'agarwalshyam.official@gmail.com',

  /* --- Where you operate from ------------------------------------------- */
  location: 'Laxmi Nagar, Delhi',
  addressLines: ['F-232 Mangal Bazar Road', 'Laxmi Nagar, Delhi - 11092'],

  /* --- When you are reachable ------------------------------------------- */
  hours: '[ADD BUSINESS HOURS]',

  /* --- Social profiles (leave '' to hide the icon) ----------------------- */
  linkedin: '',
  instagram: '',
};

/* --- Where enquiry form submissions are sent ----------------------------
   Leave as the placeholder and the form still works: it validates, shows the
   thank-you message, and offers the visitor a one-tap WhatsApp / email handoff
   carrying all their answers.

   To receive submissions automatically instead, create a free endpoint at
   formspree.io or web3forms.com and paste the URL here, e.g.
   'https://formspree.io/f/xxxxxxxx'                                          */
export const formEndpoint = '[ADD FORM ENDPOINT URL]';

/** Pre-filled WhatsApp messages, so an enquiry arrives with context. */
export const whatsappMessages = {
  default:
    'Hello Matchless Corporate Gifting, I am interested in your corporate gifting products and would like to discuss my requirements.',
  quote:
    'Hello Matchless Corporate Gifting, I would like to request a quote for corporate gifting.',
  product: (name) =>
    `Hello Matchless Corporate Gifting, I would like to enquire about "${name}". Could you share pricing and customization options?`,
};

/* ---------------------------------------------------------------------------
   Helpers — you should not need to edit anything below this line.
   ------------------------------------------------------------------------ */

/** True when a config value has been filled in (i.e. is not a [PLACEHOLDER]). */
export function isSet(value) {
  return Boolean(value) && !String(value).trim().startsWith('[');
}

export const telHref = () =>
  isSet(contact.phoneE164) ? `tel:${contact.phoneE164.replace(/\s/g, '')}` : null;

export const mailHref = () =>
  isSet(contact.email) ? `mailto:${contact.email}` : null;

export const whatsappHref = (message = whatsappMessages.default) =>
  isSet(contact.whatsappE164)
    ? `https://wa.me/${contact.whatsappE164.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    : null;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/categories/', label: 'Categories' },
  { href: '/products/', label: 'Products' },
  { href: '/custom-gifting/', label: 'Custom Gifting' },
  { href: '/contact/', label: 'Contact' },
];
