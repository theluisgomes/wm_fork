export default function Logo() {
  return (
    <>
      <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
        <rect x="3" y="22" width="5" height="14" opacity=".85" />
        <rect x="11" y="16" width="5" height="20" opacity=".85" />
        <rect x="19" y="10" width="5" height="26" opacity=".85" />
        <rect x="27" y="18" width="5" height="18" opacity=".85" />
        <circle cx="34.5" cy="6" r="3.5" fill="var(--accent)" />
        <circle cx="34.5" cy="6" r="6" fill="none" stroke="var(--accent)" strokeWidth=".5" opacity=".5" />
      </svg>
      <span>
        Wisemetrics<span className="nav-dot">.</span>
      </span>
    </>
  );
}
