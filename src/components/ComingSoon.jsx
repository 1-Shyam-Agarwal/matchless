import Icon from './Icon';

/** Shown on a category page whose products have not been added yet. */
export default function ComingSoon({ name, whatsapp }) {
  return (
    <div className="soon">
      <span className="soon__icon" aria-hidden="true">
        <Icon name="clock" size={22} />
      </span>
      <h2 className="soon__title">Products will be uploaded soon</h2>
      <p className="soon__body">
        We are adding the {name} range to the website. Until then, tell us
        what you need and we will share options and bulk pricing directly.
      </p>
      {whatsapp ? (
        <a href={whatsapp} className="soon__link" target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={17} /> Ask on WhatsApp
        </a>
      ) : (
        <a href="/contact/" className="soon__link">
          Get in touch <Icon name="arrowRight" size={16} />
        </a>
      )}
    </div>
  );
}
