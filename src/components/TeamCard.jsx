export default function TeamCard({ person }) {
  return (
    <div className={`tcard${person.featured ? ' tcard-featured' : ''}`}>
      <div className="tcard-photo">
        <img src={person.image} alt={person.name} loading="lazy" />
      </div>
      <div className="tcard-info">
        <div className="tcard-kicker">{person.role}</div>
        <h3 className="tcard-name">{person.name}</h3>
        {person.specialties && <p className="tcard-role">{person.specialties}</p>}
        <p className="tcard-bio">{person.bio}</p>
        <div className="tcard-tags">
          {person.tags.map((tag) => (
            <span className="tcard-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
