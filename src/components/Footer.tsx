import './Footer.css';

import { getAnother } from '@/lib/microcms';

export async function Footer() {
  const another = await getAnother();
  const usedLinks = another.used_links;

  return (
    <footer>
      <section className="credit section">
        {usedLinks && (
          <p className="icon-credit">
            このサイトの画像には <br className="sp-only" />
            {usedLinks.map((link, index) => (
              <a href={link.url} key={index} rel="noopener" target="_blank">
                {link.name} {index + 1 < usedLinks.length && <span>,&nbsp;</span>}
              </a>
            ))}
            <br className="sp-only" /> を使用させて頂いております
          </p>
        )}
      </section>
      <div className="footer">
        <div className="copyright">&copy;SORA ITO. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
