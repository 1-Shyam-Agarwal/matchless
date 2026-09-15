import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import EnquiryForm from '@/components/EnquiryForm';
import { pageMeta } from '@/lib/seo';
import { site } from '@/data/site';

export const metadata = pageMeta({
  title: 'Contact Us',
  description:
    'Contact Matchless Corporate Gifting for bulk and customized corporate gifts. Call, WhatsApp or email us, or send an enquiry and we will respond with options and pricing.',
  path: '/contact/',
  image: '/images/hero/feature-workspace.jpg',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={`Contact ${site.name}`}
        lead="Corporate gifting enquiries, bulk pricing and customization requests — reach us whichever way suits you."
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="section">
        <div className="container quote-layout">
          <EnquiryForm
            title="Send us an enquiry"
            lead="Fill this in and our team will get back to you with options and bulk pricing. This is an enquiry form only — no payment is taken on this website."
          />
          <div>
            <ContactSection heading="Reach us directly" />
          </div>
        </div>
      </section>
    </>
  );
}
