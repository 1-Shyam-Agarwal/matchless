'use client';

import Link from 'next/link';
import Icon from './Icon';
import { telHref, whatsappHref } from '@/data/site';

/**
 * Sticky call / WhatsApp / quote bar, mobile only.
 * Falls back to the enquiry form when a number has not been configured yet.
 */
export default function FloatingActions() {
  const tel = telHref();
  const wa = whatsappHref();

  return (
    <div className="floating-bar" role="complementary" aria-label="Quick contact">
      {tel && (
        <a href={tel} className="floating-bar__btn">
          <Icon name="phone" size={19} />
          <span>Call</span>
        </a>
      )}
      {wa && (
        <a
          href={wa}
          className="floating-bar__btn floating-bar__btn--wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={19} />
          <span>WhatsApp</span>
        </a>
      )}
      <Link href="/quote/" className="floating-bar__btn floating-bar__btn--cta">
        <Icon name="arrowRight" size={19} />
        <span>Get a Quote</span>
      </Link>
    </div>
  );
}
