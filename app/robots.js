import { SITE } from '../content/site';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.dominio}/sitemap.xml`,
  };
}
