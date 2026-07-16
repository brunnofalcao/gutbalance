import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Motion from '../components/Motion';
import Analytics from '../components/Analytics';
import PageviewTracker from '../components/PageviewTracker';
import { SITE } from '../content/site';

export const metadata = {
  metadataBase: new URL(SITE.dominio),
  title: {
    default: 'Gut Balance: Suplemento para Saúde Intestinal e Imunidade | Prana Nutrition®',
    template: '%s',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Analytics />
        <PageviewTracker />
        <Motion />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
