'use client';

export function PageTopButton() {
  return (
    <div className="page-top" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}>
      <span className="material-icons-outlined">expand_less</span>
    </div>
  );
}
