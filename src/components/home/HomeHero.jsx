'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon';
import { site } from '@/data/site';
import { shopCategories } from '@/data/shopCategories';

/* Each slide: one image, a headline with an italic accent, and its own CTA.
   `tone: 'light'` runs the image full-bleed under a light wash (for wide
   artwork); `tone: 'scene'` is the same with a deeper wash, for busy artwork; `tone: 'photo'` sets a 3:2 product photo in the right part of the
   frame beside a navy text panel, so the product is not cropped away. */
const slides = [
  {
    image: '/images/hero/home-slide-diwali.jpg',
    alt: 'Illustration of colleagues in festive Indian wear celebrating Diwali in a modern office, with diyas, marigold garlands, sweets and gift boxes',
    tone: 'scene',
    position: '50% 45%',
    before: 'This Diwali,',
    accent: 'light up',
    after: 'every business relationship',
    lead: 'Celebrate the festival of lights with gifts that thank your clients, honour your team and brighten partnerships for the year ahead.',
    cta: { href: '/categories/electronic-appliances/', label: 'Shop festive gifts' },
  },
  {
    image: '/images/hero/home-hero-gifting.jpg',
    alt: 'Illustration of a colleague handing a gold-ribboned gift box to a smiling teammate in a bright office, with navy and gold gift boxes on the desk',
    tone: 'light',
    position: '50% 30%',
    before: 'Premium',
    accent: 'Corporate Gifts',
    after: 'that stay on the desk',
    lead: site.intro,
    cta: { href: '/products/', label: 'Explore the catalogue' },
  },
];

const INTERVAL = 6500;

/**
 * Homepage hero slider. Crossfades between slides, autoplays (paused on hover,
 * on keyboard focus, in a background tab, and entirely under reduced motion),
 * with arrow and dot controls. Off-screen slides are inert so only the
 * visible slide's links are reachable.
 */
export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const count = slides.length;

  const go = useCallback((i) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % count);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, reduced, count]);

  return (
    <section
      className="hh"
      aria-roledescription="carousel"
      aria-label="Featured gifting"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="container">
        <div className="hh__frame">
          {slides.map((s, i) => {
            const active = i === index;
            const Heading = i === 0 ? 'h1' : 'h2';
            return (
              <div
                key={s.image}
                className={`hh__slide hh__slide--${s.tone}${active ? ' is-active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!active}
                inert={!active}
              >
                <div className="hh__media">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    /* Hidden slides are visibility:hidden, which would stall
                       lazy-loading until the moment they fade in. */
                    loading={i === 0 ? undefined : 'eager'}
                    sizes="(max-width: 1280px) 100vw, 1232px"
                    className="hh__img"
                    style={{ objectPosition: s.position }}
                  />
                </div>
                <div className="hh__shade" aria-hidden="true" />

                <div className="hh__body">
                  <div className="hh__copy">
                    <Heading className="hh__title">
                      {s.before} <em>{s.accent}</em> {s.after}
                    </Heading>
                    <p className="hh__lead">{s.lead}</p>
                    <div className="hh__actions">
                      <Link href={s.cta.href} className="hh__btn">
                        {s.cta.label} <Icon name="arrowRight" size={17} />
                      </Link>
                      {s.link && (
                        <Link href={s.link.href} className="hh__link">
                          {s.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <aside className="hh__card" aria-label="At a glance">
            <div className="hh__card-top">
              <p>
                Debossed.
                <br />
                Foil-stamped.
                <br />
                Engraved.
              </p>
              <Icon name="sparkle" size={22} />
            </div>
            <p className="hh__card-num">
              {shopCategories.length}
              <span>gifting ranges, all brandable</span>
            </p>
          </aside>

          <div className="hh__controls">
            <button
              type="button"
              className="hh__arrow"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
            >
              <Icon name="arrowLeft" size={17} />
            </button>
            <div className="hh__dots">
              {slides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  className={`hh__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                >
                  {i === index && !paused && !reduced && (
                    <span key={index} className="hh__dot-fill" style={{ animationDuration: `${INTERVAL}ms` }} />
                  )}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="hh__arrow"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
            >
              <Icon name="arrowRight" size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
