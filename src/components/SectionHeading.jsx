/** Consistent eyebrow + heading + lead block used at the top of every section. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  as: Tag = 'h2',
  id,
}) {
  return (
    <div className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow${center ? ' eyebrow--center' : ''}`}>{eyebrow}</p>
      )}
      <Tag id={id}>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
