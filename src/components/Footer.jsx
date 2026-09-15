import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { categories } from '@/data/categories';
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
      {/* Closing call to action */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what you need to gift.</h2>
            <p className="lead">
              Share your quantity, occasion and budget — we will come back with
              options and bulk pricing.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/quote/" className="btn btn--gold">
              Get a Quote <Icon name="arrowRight" size={18} />
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
            ) : (
              <Link href="/contact/" className="btn btn--outline-light">
                Contact Us
              </Link>
            )}
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
            <li>
              <Link href="/quote/">Get a Quote</Link>
            </li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product categories">
          <h3>Categories</h3>
          <ul>
            {categories.slice(0, 8).map((c) => (
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
