export default function Loading() {
  return (
    <main className="site-loading" aria-live="polite" role="status">
      <div className="site-loading-mark" aria-hidden="true">
        <span className="site-loading-ring site-loading-ring-one" />
        <span className="site-loading-ring site-loading-ring-two" />
        <span className="site-loading-logo">ABE</span>
      </div>
      <div className="site-loading-copy">
        <strong>ABE TechLab</strong>
        <span>Loading the studio experience…</span>
      </div>
    </main>
  );
}
