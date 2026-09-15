import Icon from '@/components/Icon';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import EnquiryForm from '@/components/EnquiryForm';
import ProcessSteps from '@/components/ProcessSteps';
import SectionHeading from '@/components/SectionHeading';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Get a Quote — Bulk Gifting Pricing',
  description:
    'Request a quote for bulk corporate gifts. Share your quantity, gift category, budget and delivery date and Matchless Corporate Gifting will respond with options and pricing. Enquiry only — no online payment.',
  path: '/quote/',
  image: '/images/products/onyx-trio-diary-pen-keyring.jpg',
});

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Get a quote"
        title="Request Bulk Corporate Gifting Pricing"
        lead="Tell us what you need and we will come back with a shortlist and bulk pricing. There is no payment step — we confirm your order directly."
      />
      <Breadcrumbs items={[{ label: 'Get a Quote' }]} />

      <section className="section">
        <div className="container quote-layout">
          <EnquiryForm />

          <aside className="aside-card">
            <h3>What happens next</h3>
            <ul>
              <li>
                <Icon name="check" size={17} />
                <span>We read your brief and shortlist options that fit the budget.</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>You receive bulk pricing against each option.</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>We produce a branding proof for your approval.</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>Order confirmed with our team — never online.</span>
              </li>
            </ul>

            <h3>Helps us quote faster</h3>
            <ul>
              <li>
                <Icon name="check" size={17} />
                <span>Approximate quantity</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>Per-gift budget range</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>Delivery city and date</span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>Whether you need your logo on it</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title="From enquiry to delivery"
            lead="A clear process with an approval point before production."
          />
          <ProcessSteps />
        </div>
      </section>
    </>
  );
}
