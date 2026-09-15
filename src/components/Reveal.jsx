'use client';

import { useEffect, useRef } from 'react';

/**
 * Fades content up once as it scrolls into view.
 * Uses a single IntersectionObserver per element and disconnects after firing,
 * so it costs nothing after the first paint. Respects prefers-reduced-motion
 * via CSS (see .reveal in globals.css).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Tells the failsafe in the root layout that reveal is alive. */
    document.documentElement.dataset.revealReady = '1';

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
