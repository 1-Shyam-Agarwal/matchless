'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';
import { categories } from '@/data/categories';
import {
  site,
  contact,
  formEndpoint,
  isSet,
  mailHref,
  whatsappHref,
} from '@/data/site';

const BUDGETS = [
  'Under ₹500 per gift',
  '₹500 – ₹1,000 per gift',
  '₹1,000 – ₹2,500 per gift',
  '₹2,500 – ₹5,000 per gift',
  'Above ₹5,000 per gift',
  'Not decided yet',
];

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  quantity: '',
  category: '',
  budget: '',
  location: '',
  date: '',
  customization: '',
  message: '',
  /* honeypot — real people never fill this in */
  website: '',
};

const REQUIRED = {
  name: 'Please enter your full name.',
  company: 'Please enter your company name.',
  email: 'Please enter your work email address.',
  phone: 'Please enter a phone number we can reach you on.',
};

export default function EnquiryForm({
  title = 'Let’s Create Something Memorable',
  lead = 'Tell us what you need and we will come back with options and bulk pricing. This is an enquiry only — no payment is taken here.',
  presetProduct = '',
  compact = false,
}) {
  const [values, setValues] = useState({
    ...EMPTY,
    message: presetProduct
      ? `I would like pricing and customization options for: ${presetProduct}.`
      : '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const formRef = useRef(null);

  const set = (k) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  function validate(v) {
    const next = {};
    for (const [key, msg] of Object.entries(REQUIRED)) {
      if (!v[key].trim()) next[key] = msg;
    }
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
      next.email = 'Please check the email address.';
    }
    if (v.phone.trim() && v.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a complete phone number.';
    }
    if (v.quantity.trim() && !/^\d[\d,\s+-]*$/.test(v.quantity.trim())) {
      next.quantity = 'Please enter a number, for example 250.';
    }
    return next;
  }

  /** A readable plain-text version of the enquiry, for the fallback handoff. */
  function asText(v) {
    const rows = [
      ['Name', v.name],
      ['Company', v.company],
      ['Email', v.email],
      ['Phone', v.phone],
      ['Quantity', v.quantity],
      ['Gift category', v.category],
      ['Budget', v.budget],
      ['Delivery location', v.location],
      ['Required by', v.date],
      ['Customization', v.customization],
      ['Message', v.message],
    ].filter(([, val]) => val && String(val).trim());
    return (
      `Corporate gifting enquiry — ${site.name}\n\n` +
      rows.map(([k, val]) => `${k}: ${val}`).join('\n')
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (values.website) return; // honeypot tripped

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length) {
      const first = formRef.current?.querySelector('[aria-invalid="true"]');
      first?.focus();
      first?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }

    if (!isSet(formEndpoint)) {
      // No form service configured yet — confirm, then offer a direct handoff
      // so the enquiry still reaches the team.
      setStatus('done');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _subject: `Gifting enquiry — ${values.company}` }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  /* ----------------------------------------------------------- SUCCESS VIEW */
  if (status === 'done') {
    const text = asText(values);
    const wa = whatsappHref(text);
    const mail = mailHref();
    const mailto = mail
      ? `${mail}?subject=${encodeURIComponent(
          `Corporate gifting enquiry — ${values.company}`
        )}&body=${encodeURIComponent(text)}`
      : null;
    const configured = isSet(formEndpoint);

    return (
      <div className="form-done" role="status" aria-live="polite">
        <span className="form-done__tick">
          <Icon name="check" size={26} />
        </span>
        <h3>Thank you for contacting {site.name}.</h3>
        <p>Our team will get in touch with you shortly.</p>

        {!configured && (
          <div className="form-done__handoff">
            <p className="form-done__handoff-lead">
              To reach us straight away, send these details across:
            </p>
            <div className="btn-row btn-row--center">
              {wa && (
                <a
                  href={wa}
                  className="btn btn--gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> Send on WhatsApp
                </a>
              )}
              {mailto && (
                <a href={mailto} className="btn btn--outline">
                  <Icon name="mail" size={18} /> Send by Email
                </a>
              )}
            </div>
            {!wa && !mailto && (
              <p className="placeholder-note form-done__pending">
                Contact details are still being set up on this site. Add a phone
                number, WhatsApp number or email in{' '}
                <code>src/data/site.js</code> and this enquiry will be
                deliverable.
              </p>
            )}
          </div>
        )}

        <button
          type="button"
          className="btn btn--outline btn--sm"
          onClick={() => {
            setValues(EMPTY);
            setStatus('idle');
          }}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  /* -------------------------------------------------------------- FORM VIEW */
  const field = (name, label, props = {}) => {
    const { as = 'input', options, hint, required, ...rest } = props;
    const id = `f-${name}`;
    const errId = `${id}-err`;
    const bad = Boolean(errors[name]);
    const common = {
      id,
      name,
      value: values[name],
      onChange: set(name),
      'aria-invalid': bad || undefined,
      'aria-describedby': bad ? errId : hint ? `${id}-hint` : undefined,
      ...rest,
    };
    return (
      <div className={`field${bad ? ' field--error' : ''}`}>
        <label htmlFor={id}>
          {label}
          {required && (
            <>
              {' '}
              <span className="req" aria-hidden="true">
                *
              </span>
              <span className="visually-hidden"> (required)</span>
            </>
          )}
        </label>
        {as === 'select' ? (
          <select {...common}>
            <option value="">Select an option</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ) : as === 'textarea' ? (
          <textarea {...common} />
        ) : (
          <input {...common} />
        )}
        {hint && !bad && (
          <span className="hint" id={`${id}-hint`}>
            {hint}
          </span>
        )}
        {bad && (
          <span className="field-error" id={errId}>
            {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={`enquiry${compact ? ' enquiry--compact' : ''}`}>
      {title && (
        <div className="enquiry__head">
          <p className="eyebrow">Get a quote</p>
          <h2>{title}</h2>
          <p className="lead">{lead}</p>
        </div>
      )}

      <form ref={formRef} className="enquiry__form" onSubmit={onSubmit} noValidate>
        <div className="enquiry__grid">
          {field('name', 'Full Name', {
            required: true,
            autoComplete: 'name',
            placeholder: 'Your name',
          })}
          {field('company', 'Company Name', {
            required: true,
            autoComplete: 'organization',
            placeholder: 'Company or organisation',
          })}
          {field('email', 'Work Email', {
            required: true,
            type: 'email',
            autoComplete: 'email',
            placeholder: 'name@company.com',
          })}
          {field('phone', 'Phone Number', {
            required: true,
            type: 'tel',
            autoComplete: 'tel',
            placeholder: 'Contact number',
          })}
          {field('quantity', 'Number of Gifts / Quantity', {
            inputMode: 'numeric',
            placeholder: 'e.g. 250',
          })}
          {field('category', 'Gift Category', {
            as: 'select',
            options: [...categories.map((c) => c.name), 'Not sure yet'],
          })}
          {field('budget', 'Budget Range', { as: 'select', options: BUDGETS })}
          {field('location', 'Delivery Location', {
            placeholder: 'City, or multiple locations',
          })}
          {field('date', 'Required Delivery Date', {
            type: 'date',
            hint: 'Approximate is fine.',
          })}
        </div>

        {field('customization', 'Customization Requirements', {
          as: 'textarea',
          rows: 3,
          placeholder:
            'Logo branding, packaging, personalised names, brand colours…',
        })}
        {field('message', 'Message', {
          as: 'textarea',
          rows: 4,
          placeholder: 'Anything else we should know about the occasion?',
        })}

        {/* Honeypot — hidden from people, catches bots */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-website">Website</label>
          <input
            id="f-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={set('website')}
          />
        </div>

        {status === 'error' && (
          <p className="form-alert" role="alert">
            Something went wrong sending your enquiry. Please try again, or
            contact us directly
            {isSet(contact.phone) ? ` on ${contact.phone}` : ''}.
          </p>
        )}

        <div className="enquiry__foot">
          <button
            type="submit"
            className="btn btn--gold"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Request a Quote'}
            {status !== 'sending' && <Icon name="arrowRight" size={18} />}
          </button>
          <p className="enquiry__assure">
            <Icon name="check" size={15} /> Enquiry only — no payment is taken on
            this website.
          </p>
        </div>
      </form>
    </div>
  );
}
