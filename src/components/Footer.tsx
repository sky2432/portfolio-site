import './Footer.css';

import { profile } from '@/data/profile';

export function Footer() {
  const { usedLinks } = profile;

  return (
    <footer>
      <section className="credit section">
        <p className="icon-credit">
          このサイトの画像には <br className="sp-only" />
          {usedLinks.map((link, index) => (
            <a href={link.url} key={index} rel="noopener" target="_blank">
              {link.name} {index + 1 < usedLinks.length && <span>,&nbsp;</span>}
            </a>
          ))}
          <br className="sp-only" /> を使用させて頂いております
        </p>
      </section>
      <div className="footer">
        <div className="copyright">&copy;SORA ITO. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
