import './Header.css';

import Link from 'next/link';

const navItems = [
  { hash: '#works', label: 'WORKS' },
  { hash: '#skill', label: 'SKILL' },
  { hash: '#about', label: 'ABOUT' },
  { hash: '#contact', label: 'CONTACT' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-logo">
          <Link href="/">
            <i className="fas fa-paw icon" />
            SORA <span>ITO</span>
          </Link>
        </h1>
        <nav className="gnav">
          <ul className="gnav-list">
            {navItems.map((item) => (
              <li className="gnav-item" key={item.hash}>
                <Link className="gnav-item" href={`/${item.hash}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
