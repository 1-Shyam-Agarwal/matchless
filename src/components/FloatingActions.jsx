'use client';

import Icon from './Icon';
import { telHref, whatsappHref } from '@/data/site';

/**
 * A floating green WhatsApp button (all screen sizes) plus a sticky call
 * bar on mobile. Each only appears once its number has been configured.
 */
export default function FloatingActions() {
  const tel = telHref();
  const wa = whatsappHref();

  return (
    <>
      {/* Green WhatsApp button, pinned bottom-right on every screen size */}
      {wa && (
        <a
          href={wa}
          className="wa-fab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <Icon name="whatsapp" size={30} />
        </a>
      )}

      {/* Call bar, mobile only (WhatsApp lives in the button above) */}
      {tel && (
        <div className="floating-bar" role="complementary" aria-label="Quick contact">
          <a href={tel} className="floating-bar__btn">
            <Icon name="phone" size={19} />
            <span>Call us</span>
          </a>
        </div>
      )}
    </>
  );
}
