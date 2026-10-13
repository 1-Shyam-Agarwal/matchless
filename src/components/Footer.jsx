import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { shopCategories } from '@/data/shopCategories';
import {
  site,
  contact,
  navLinks,
  isSet,
  telHref,
  mailHref,
  whatsappHref,
} from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  const tel = telHref();
  const mail = mailHref();
  const wa = whatsappHref();

  return (
    <footer className="footer on-dark">
      {/* Closing call to action — a rounded card on the page background */}
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-inner">
            <div>
              <p className="footer__cta-kicker">Start a conversation</p>
              <h2>
                Tell us what you need to <em>gift</em>
              </h2>
              <p className="footer__cta-lead">
                Share your quantity, occasion and budget — we will come back
                with options and bulk pricing.
              </p>
            </div>
            <div className="footer__cta-actions">
              {wa && (
                <a
                  href={wa}
                  className="footer__cta-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> WhatsApp Us
                </a>
              )}
              <Link href="/contact/" className="footer__cta-link">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <Image
            src="/images/brand/matchless-logo.png"
            alt={`${site.name} logo`}
            width={631}
            height={382}
            className="footer__logo"
          />
          <p>
            Premium corporate gifting and customized gifting solutions for
            businesses, employees, clients and special occasions.
          </p>
          {(isSet(contact.linkedin) || isSet(contact.instagram)) && (
            <div className="footer__social">
              {isSet(contact.linkedin) && (
                <a
                  href={contact.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" size={19} />
                </a>
              )}
              {isSet(contact.instagram) && (
                <a
                  href={contact.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="instagram" size={19} />
                </a>
              )}
            </div>
          )}
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product categories">
          <h3>Categories</h3>
          <ul>
            {shopCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}/`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="phone" size={17} />
              {tel ? (
                <a href={tel}>{contact.phone}</a>
              ) : (
                <span className="placeholder-note">{contact.phone}</span>
              )}
            </li>
            <li>
              <Icon name="mail" size={17} />
              {mail ? (
                <a href={mail}>{contact.email}</a>
              ) : (
                <span className="placeholder-note">{contact.email}</span>
              )}
            </li>
            <li>
              <Icon name="pin" size={17} />
              {isSet(contact.location) ? (
                <span>{contact.location}</span>
              ) : (
                <span className="placeholder-note">{contact.location}</span>
              )}
            </li>
            {isSet(contact.hours) && (
              <li>
                <Icon name="clock" size={17} />
                <span>{contact.hours}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="footer__note">
            A corporate gifting catalogue and enquiry service. Pricing is shared
            on request — no online payment is taken on this website.
          </p>
        </div>
      </div>
    </footer>
  );
}
