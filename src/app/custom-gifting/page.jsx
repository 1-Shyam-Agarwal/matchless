import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import PageHeader from '@/components/PageHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import EnquiryForm from '@/components/EnquiryForm';
import CTASection from '@/components/CTASection';
import { customCapabilities } from '@/data/content';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Custom Corporate Gifting',
  description:
    'Customized corporate gifting from Matchless — custom packaging, company logo branding, personalized products, bespoke gift combinations, employee kits and event kits. Discuss your requirement.',
  path: '/custom-gifting/',
  image: '/images/hero/feature-branding-detail.jpg',
});

export default function CustomGiftingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom corporate gifting"
        title="Custom Corporate Gifting"
        lead="Where a catalogue product is not quite right, we build the gift instead — the combination, the packaging, the branding method and the finish, all set against your budget."
      >
        <div className="btn-row" style={{ marginTop: '28px' }}>
          <Link href="#discuss" className="btn btn--gold">
            Discuss Your Requirement <Icon name="arrowRight" size={18} />
          </Link>
          <Link href="/products/" className="btn btn--outline-light">
            See the Catalogue
          </Link>
        </div>
      </PageHeader>

      <Breadcrumbs items={[{ label: 'Custom Gifting' }]} />

      {/* ------------------------------------------------------- INTRO */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>Start from the brief, not the catalogue</h2>
            <p className="lead">
              Most corporate gifting briefs have three fixed points — a
              headcount, a budget and a date. Everything else is negotiable, and
              that is where a custom gift beats a stock one.
            </p>
            <p>
              We build around those fixed points: choosing items that hit the
              per-gift budget, combining them so the box feels considered rather
              than filled, and applying your branding using the method that
              suits each material. You approve a sample before anything is
              produced at volume.
            </p>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <Link href="#discuss" className="btn btn--navy">
                Start a Custom Brief <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </div>

          <Reveal className="split__media">
            <Image
              src="/images/hero/feature-branding-detail.jpg"
              alt="Detail of a textile-finish notebook cover showing the branding area for a debossed logo"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ PROCESS */}
      <section className="section section--navy" aria-labelledby="proc-title">
        <div className="container">
          <SectionHeading
            eyebrow="The process"
            title="Five steps, one approval point"
            lead="Nothing goes into production until you have signed off the sample, the packaging and the final count."
            id="proc-title"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ------------------------------------------------- CAPABILITIES */}
      <section className="section" aria-labelledby="cap-title">
        <div className="container">
          <SectionHeading
            eyebrow="What we can customize"
            title="Customization capabilities"
            lead="From a logo on a single notebook through to a fully bespoke kit built for one event."
            id="cap-title"
          />
          <div className="capability-grid">
            {customCapabilities.map((c) => (
              <div className="capability" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- BRANDING NOTE */}
      <section className="section section--alt">
        <div className="container split split--wide-left">
          <Reveal className="split__media">
            <Image
              src="/images/hero/feature-hamper-flatlay.jpg"
              alt="Multi-piece corporate gift hamper laid out in a fitted presentation tray"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 92vw, 52vw"
            />
          </Reveal>
          <div>
            <p className="eyebrow">Branding methods</p>
            <h2>The right method for the material</h2>
            <p className="lead">
              A logo that looks sharp on a metal pen will look wrong pressed
              into fabric. We match the technique to the surface.
            </p>
            <ul className="pdp__list">
              <li>
                <Icon name="check" size={17} />
                <span>
                  <strong>Debossing</strong> — pressed into leatherette and
                  textile covers, where the branding is felt rather than seen.
                </span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>
                  <strong>Foil stamping</strong> — gold, silver or a brand
                  colour, for contrast on dark covers.
                </span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>
                  <strong>Laser engraving</strong> — on metal pens, keyrings and
                  bottles, permanent and wear-resistant.
                </span>
              </li>
              <li>
                <Icon name="check" size={17} />
                <span>
                  <strong>Screen &amp; UV printing</strong> — full-colour
                  branding on packaging, sleeves and printed inserts.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- BRIEF */}
      <section className="section" id="discuss">
        <div className="container container--narrow">
          <EnquiryForm
            title="Discuss Your Requirement"
            lead="Tell us the occasion, headcount, per-gift budget and the date you need it by. We will come back with a shortlist and bulk pricing."
          />
        </div>
      </section>

      <CTASection
        eyebrow="Prefer to talk it through?"
        title="A five-minute call is often faster than a brief"
        lead="Tell us roughly what you have in mind and we will shape it into a proposal."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
      />
    </>
  );
}
