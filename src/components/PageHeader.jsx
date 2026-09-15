/** Navy banner used at the top of every inner page. */
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="page-head on-dark">
      <div className="container page-head__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead page-head__lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
