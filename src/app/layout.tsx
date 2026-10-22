import 'ress';
import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PageTopButton } from '@/components/PageTopButton';
import { env } from '@/env';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
});

const siteName = 'SORA ITO Portfolio';
const siteDescription = 'webエンジニアSORA ITOのポートフォリオサイトです。';

export const metadata: Metadata = {
  description: siteDescription,
  icons: {
    apple: { sizes: '180x180', url: '/img/favicons/apple-touch-icon.png' },
    icon: [
      { sizes: '32x32', type: 'image/png', url: '/img/favicons/favicon-32x32.png' },
      { sizes: '16x16', type: 'image/png', url: '/img/favicons/favicon-16x16.png' },
    ],
    other: { color: '#bbbbbb', rel: 'mask-icon', url: '/img/favicons/safari-pinned-tab.svg' },
  },
  manifest: '/img/favicons/site.webmanifest',
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  openGraph: {
    description: siteDescription,
    images: '/img/ogp.png',
    title: siteName,
    type: 'website',
    url: '/',
  },
  other: { 'msapplication-TileColor': '#ffffff' },
  title: { default: siteName, template: `%s | ${siteName}` },
  twitter: { card: 'summary' },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montserrat.variable} lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          crossOrigin="anonymous"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrapper">
          <main>
            <Header />
            {children}
            <Footer />
            <PageTopButton />
          </main>
        </div>
      </body>
      {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
