import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'vi', 'th', 'ru'];
const urlFor = (locale) => `${project.pagesBaseUrl}${locale === 'en' ? '/' : `/${locale}/`}`;

for (const locale of locales) {
  const copy = JSON.parse(await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
  const htmlPath = locale === 'en' ? path.join(root, 'dist/index.html') : path.join(root, `dist/${locale}/index.html`);
  const html = await readFile(htmlPath, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${locale} must have one H1`);
  assert.match(html, new RegExp(`<html lang="${copy.htmlLang.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
  assert.ok(html.includes(`<link rel="canonical" href="${urlFor(locale)}">`), `${locale} canonical`);
  assert.ok(html.includes('index,follow,max-image-preview:large'), `${locale} robots meta`);
  assert.ok(html.includes('application/ld+json'), `${locale} JSON-LD`);
  assert.ok(html.includes('twitter:card'), `${locale} Twitter card`);
  assert.ok(html.includes('og:image'), `${locale} Open Graph image`);
  assert.ok(html.includes(`/assets/covers/${locale}.png`), `${locale} localized cover`);
  assert.ok(html.includes('"price":"0"'), `${locale} free SoftwareApplication offer`);
  assert.ok(html.includes('"priceCurrency":"USD"'), `${locale} offer currency`);
  assert.ok(html.includes('"isAccessibleForFree":true'), `${locale} free application flag`);
  assert.ok(html.includes(copy.description), `${locale} visible metadata description`);
  for (const alternate of locales) {
    assert.ok(html.includes(`hreflang="${alternate}" href="${urlFor(alternate)}"`), `${locale} -> ${alternate} hreflang`);
  }
  assert.ok(!/localhost|127\.0\.0\.1|noindex/i.test(html), `${locale} must be publicly indexable`);
  assert.ok(!/not a claim|does not guarantee|must not|cannot be described|not a permanent guarantee|并不代表|不能表述|並非.*永久保證|不保證搜尋/i.test(html), `${locale} public page uses positive wording`);
}

const sitemap = await readFile(path.join(root, 'dist/sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<url>/g) || []).length, locales.length, 'sitemap route count');
for (const locale of locales) assert.ok(sitemap.includes(`<loc>${urlFor(locale)}</loc>`));

const robots = await readFile(path.join(root, 'dist/robots.txt'), 'utf8');
assert.match(robots, /User-agent: \*\nAllow: \//);
assert.match(robots, /User-agent: OAI-SearchBot\nAllow: \//);
assert.ok(robots.includes(`${project.pagesBaseUrl}/sitemap.xml`));

const llms = await readFile(path.join(root, 'dist/llms.txt'), 'utf8');
assert.ok(llms.includes(project.repository));
assert.ok(llms.includes(project.evidence.securityAudit.repository));
assert.ok(llms.includes(project.evidence.noLogsVerification.repository));

console.log(`Audit passed for ${locales.length} localized routes and all discovery surfaces.`);
