'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import {
  site,
  contact,
  navLinks,
  isSet,
  telHref,
  mailHref,
  whatsappHref,
} from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Subtle background + shadow once the page moves. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the drawer on navigation. */
  useEffect(() => setOpen(false), [pathname]);

  /* Lock body scroll and allow Escape to close while the drawer is open. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* Pages already moved to the new design use the centred-logo header. */
  const isNewDesign =
    pathname === '/' ||
    pathname.startsWith('/categories') ||
    pathname.startsWith('/products/');

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const tel = telHref();
  const wa = whatsappHref();
  const mail = mailHref();

  return (
    <>
      {/* Slim utility bar — only shows details that have actually been filled in.
          Hidden on new-design pages, which use the centred-logo header. */}
      {!isNewDesign && (
        <div className="topbar">
          <div className="container topbar__inner">
            <span className="topbar__tagline">{site.tagline}</span>
            <div className="topbar__links">
              {tel && (
                <a href={tel}>
                  <Icon name="phone" size={15} />
                  <span>{contact.phone}</span>
                </a>
              )}
              {mail && (
                <a href={mail}>
                  <Icon name="mail" size={15} />
                  <span>{contact.email}</span>
                </a>
              )}
              {!tel && !mail && (
                <span className="topbar__muted">
                  Corporate gifting enquiries welcome
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {isNewDesign ? (
        /* New design: logo left, links and actions right, in a light sticky
           bar. */
        <header className={`ohdr${scrolled ? ' ohdr--scrolled' : ''}`}>
          <div className="container">
            <div className="ohdr__inner">
              <Link href="/" className="ohdr__brand" aria-label={`${site.name} — home`}>
                <Image
                  src="/images/brand/matchless-logo.png"
                  alt={`${site.name} logo`}
                  width={631}
                  height={382}
                  priority
                  className="ohdr__logo"
                />
              </Link>

              <nav className="ohdr__nav" aria-label="Primary">
                <ul>
                  {navLinks
                    .filter((l) => l.href !== '/')
                    .map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={isActive(l.href) ? 'is-active' : undefined}
                          aria-current={isActive(l.href) ? 'page' : undefined}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>

              <div className="ohdr__actions">
                <button
                  type="button"
                  className="ohdr__icon ohdr__burger"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  <Icon name={open ? 'close' : 'menu'} size={21} />
                </button>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
          <div className="container header__inner">
            <Link href="/" className="brand" aria-label={`${site.name} — home`}>
              <Image
                src="/images/brand/matchless-logo.png"
                alt={`${site.name} logo`}
                width={631}
                height={382}
                priority
                className="brand__logo"
              />
            </Link>

            <nav className="nav" aria-label="Primary">
              <ul className="nav__list">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`nav__link${isActive(l.href) ? ' is-active' : ''}`}
                      aria-current={isActive(l.href) ? 'page' : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__actions">
              <button
                type="button"
                className="header__burger"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                <Icon name={open ? 'close' : 'menu'} size={24} />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile drawer */}
      <div
        className={`drawer${open ? ' drawer--open' : ''}`}
        id="mobile-menu"
        inert={!open}
      >
        <nav className="drawer__nav" aria-label="Mobile">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? 'is-active' : undefined}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                >
                  {l.label}
                  <Icon name="arrowRight" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer__foot">
          <div className="drawer__contact">
            {tel && (
              <a href={tel} className="btn btn--outline btn--sm">
                <Icon name="phone" size={17} /> Call Us
              </a>
            )}
            {wa && (
              <a
                href={wa}
                className="btn btn--outline btn--sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={17} /> WhatsApp
              </a>
            )}
            {!tel && !wa && (
              <Link href="/contact/" className="btn btn--outline btn--sm btn--block">
                <Icon name="mail" size={17} /> Contact Us
              </Link>
            )}
          </div>
          {isSet(contact.location) && (
            <p className="drawer__meta">
              <Icon name="pin" size={15} /> {contact.location}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        className={`drawer-scrim${open ? ' is-on' : ''}`}
        onClick={() => setOpen(false)}
        tabIndex={-1}
        aria-hidden="true"
      />
    </>
  );
}
