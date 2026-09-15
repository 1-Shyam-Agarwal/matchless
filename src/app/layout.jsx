import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './components.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { site, contact, isSet } from '@/data/site';
import { organizationSchema } from '@/lib/seo';

/* Self-hosted at build time by next/font — no render-blocking Google request,
   no layout shift, only the two families we actually use. */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      'Matchless Corporate Gifting | Premium Corporate Gifts & Customized Gifting',
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'corporate gifting',
    'corporate gifts',
    'corporate gifting company',
    'customized corporate gifts',
    'bulk corporate gifts',
    'employee gifting',
    'corporate gift hampers',
    'premium corporate gifts',
    'branded corporate gifts',
    'corporate gift supplier',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon-180.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    url: site.url,
  },
};

export const viewport = {
  themeColor: '#15233f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning: the inline script below adds the `js` class to
       <html> before React hydrates, so the class attribute legitimately differs
       from what the server sent. Scoped to this element only. */
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Marks the document as script-enabled before first paint. Scroll
            reveal only hides content when this class is present, so the site
            stays fully readable if JavaScript fails or is disabled. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              // Failsafe: if the reveal script never mounts (hydration failed,
              // script blocked), drop the class so nothing stays hidden.
              "addEventListener('load',function(){setTimeout(function(){" +
              "var d=document.documentElement;" +
              "if(!d.dataset.revealReady)d.classList.remove('js')},2500)})",
          }}
        />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema(contact, isSet)),
          }}
        />
      </body>
    </html>
  );
}
