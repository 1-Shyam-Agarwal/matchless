import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/data/site';

/**
 * Visible breadcrumb trail + matching BreadcrumbList structured data.
 * `items` = [{ label, href }], last item is the current page (no link).
 */
export default function Breadcrumbs({ items }) {
  const trail = [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: `${site.url}${it.href ?? ''}`,
    })),
  };

  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          {trail.map((it, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={it.label}>
                {last || !it.href ? (
                  <span aria-current="page">{it.label}</span>
                ) : (
                  <>
                    <Link href={it.href}>{it.label}</Link>
                    <Icon name="arrowRight" size={13} aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
