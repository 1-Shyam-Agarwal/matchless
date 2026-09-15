import Link from 'next/link';
import Icon from './Icon';
import { whatsappHref, telHref, contact, whatsappMessages } from '@/data/site';

/** Enquiry-focused call to action. Never a purchase path. */
export default function CTASection({
  eyebrow = 'Request pricing',
  title = 'Thoughtful Gifts. Stronger Connections.',
  lead = 'Premium corporate gifting solutions designed to make every business relationship memorable.',
  primaryLabel = 'Start Your Enquiry',
  primaryHref = '/quote/',
  variant = 'navy',
}) {
  const wa = whatsappHref(whatsappMessages.quote);
  const tel = telHref();

  return (
    <section className={`cta cta--${variant} on-dark`} aria-labelledby="cta-title">
      <div className="container cta__inner">
        <p className="eyebrow eyebrow--center">{eyebrow}</p>
        <h2 id="cta-title" className="cta__title">
          {title}
        </h2>
        <p className="lead cta__lead">{lead}</p>
        <div className="btn-row btn-row--center cta__actions">
          <Link href={primaryHref} className="btn btn--gold">
            {primaryLabel} <Icon name="arrowRight" size={18} />
          </Link>
          {wa ? (
            <a
              href={wa}
              className="btn btn--outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
          ) : tel ? (
            <a href={tel} className="btn btn--outline-light">
              <Icon name="phone" size={18} /> {contact.phone}
            </a>
          ) : (
            /* No phone or WhatsApp configured yet — send people somewhere
               other than wherever the primary button already goes. */
            <Link
              href={primaryHref === '/contact/' ? '/quote/' : '/contact/'}
              className="btn btn--outline-light"
            >
              {primaryHref === '/contact/' ? 'Request a Quote' : 'Talk to Us'}
            </Link>
          )}
        </div>
        <p className="cta__note">
          No online payment. We share pricing and confirm your order directly.
        </p>
      </div>
    </section>
  );
}
