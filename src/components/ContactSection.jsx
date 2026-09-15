import Link from 'next/link';
import Icon from './Icon';
import {
  site,
  contact,
  isSet,
  telHref,
  mailHref,
  whatsappHref,
  whatsappMessages,
} from '@/data/site';

function Row({ icon, label, children }) {
  return (
    <li className="contact-row">
      <span className="contact-row__icon">
        <Icon name={icon} size={19} />
      </span>
      <span className="contact-row__body">
        <span className="contact-row__label">{label}</span>
        <span className="contact-row__value">{children}</span>
      </span>
    </li>
  );
}

/**
 * Contact block. Every detail is read from data/site.js — anything still a
 * [PLACEHOLDER] renders as a quiet note rather than a dead link.
 */
export default function ContactSection({ heading = 'Contact Matchless' }) {
  const tel = telHref();
  const mail = mailHref();
  const wa = whatsappHref(whatsappMessages.default);

  return (
    <div className="contact-block">
      <p className="eyebrow">Talk to us</p>
      <h2>{heading}</h2>
      <p className="lead">
        Share your requirement and we will respond with options and bulk
        pricing. We do not take payment online — orders are confirmed directly
        with our team.
      </p>

      <ul className="contact-list">
        <Row icon="phone" label="Call Us">
          {tel ? (
            <a href={tel} className="contact-strong">
              {contact.phone}
            </a>
          ) : (
            <span className="placeholder-note">{contact.phone}</span>
          )}
        </Row>

        <Row icon="whatsapp" label="WhatsApp Us">
          {wa ? (
            <a
              href={wa}
              className="contact-strong"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a WhatsApp chat
            </a>
          ) : (
            <span className="placeholder-note">[ADD WHATSAPP NUMBER]</span>
          )}
        </Row>

        <Row icon="mail" label="Email Us">
          {mail ? (
            <a href={mail} className="contact-strong">
              {contact.email}
            </a>
          ) : (
            <span className="placeholder-note">{contact.email}</span>
          )}
        </Row>

        <Row icon="pin" label="Location">
          {isSet(contact.location) ? (
            <>
              <span>{contact.location}</span>
              {contact.addressLines?.length > 0 && (
                <span className="contact-address">
                  {contact.addressLines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </span>
              )}
            </>
          ) : (
            <span className="placeholder-note">{contact.location}</span>
          )}
        </Row>

        {isSet(contact.hours) && (
          <Row icon="clock" label="Business Hours">
            <span>{contact.hours}</span>
          </Row>
        )}
      </ul>

      <div className="btn-row contact-actions">
        <Link href="/quote/" className="btn btn--navy">
          Request a Quote <Icon name="arrowRight" size={18} />
        </Link>
        {wa && (
          <a
            href={wa}
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={18} /> WhatsApp
          </a>
        )}
      </div>

      {!tel && !mail && !wa && (
        <p className="contact-setup">
          <strong>Setting this up:</strong> add your phone number, WhatsApp
          number and email in <code>src/data/site.js</code> and every contact
          link across {site.name} will switch on automatically.
        </p>
      )}
    </div>
  );
}
