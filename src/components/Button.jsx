import { Link } from 'react-router-dom';

export default function Button({ to, href, variant = 'accent', children }) {
  const className = `wm-btn ${variant}`;
  const content = (
    <>
      {children} <span className="arrow">→</span>
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  );
}
