import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'vi', 'th', 'ru'];
const languageNames = {
  en: 'English',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
  ja: '日本語',
  ko: '한국어',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  ru: 'Русский',
};

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const routeFor = (locale) => locale === 'en' ? '/' : `/${locale}/`;
const urlFor = (locale) => `${project.pagesBaseUrl}${routeFor(locale)}`;

function link(url, label, className = '') {
  return `<a${className ? ` class="${className}"` : ''} href="${escapeHtml(url)}">${escapeHtml(label)}</a>`;
}

function page(copy, locale) {
  const canonical = urlFor(locale);
  const alternates = locales
    .map((code) => `<link rel="alternate" hreflang="${code}" href="${urlFor(code)}">`)
    .join('\n  ');
  const languageNav = locales
    .map((code) => link(urlFor(code), languageNames[code], code === locale ? 'active' : ''))
    .join('');
  const platformLinks = project.platforms
    .map(({ name, url }) => `<li>${link(url, name)}</li>`)
    .join('');
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${project.pagesBaseUrl}/#website`,
        url: `${project.pagesBaseUrl}/`,
        name: 'SingLinkVPN Official Public Project',
        alternateName: project.alternateNames,
        inLanguage: locales.map((code) => JSON.parse(localeCopies.get(code)).htmlLang),
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: copy.title,
        description: copy.description,
        isPartOf: { '@id': `${project.pagesBaseUrl}/#website` },
        inLanguage: copy.htmlLang,
        dateModified: project.lastVerified,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${project.officialWebsite}#software`,
        name: project.name,
        alternateName: project.alternateNames,
        url: project.officialWebsite,
        applicationCategory: 'SecurityApplication',
        operatingSystem: project.platforms.map(({ name }) => name).join(', '),
        sameAs: [
          project.repository,
          project.newsCenter,
          project.evidence.securityAudit.repository,
          project.evidence.noLogsVerification.repository,
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="${escapeHtml(copy.htmlLang)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(copy.title)}</title>
  <meta name="description" content="${escapeHtml(copy.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="${canonical}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${urlFor('en')}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="SingLinkVPN Official Public Project">
  <meta property="og:title" content="${escapeHtml(copy.title)}">
  <meta property="og:description" content="${escapeHtml(copy.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${project.pagesBaseUrl}/assets/singlinkvpn-public-project.png">
  <meta property="og:image:width" content="1600">
  <meta property="og:image:height" content="900">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(copy.title)}">
  <meta name="twitter:description" content="${escapeHtml(copy.description)}">
  <meta name="twitter:image" content="${project.pagesBaseUrl}/assets/singlinkvpn-public-project.png">
  <script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>
  <style>
    :root{color-scheme:dark;--bg:#061107;--panel:#0c1d0e;--line:#27431b;--text:#edf8e8;--muted:#a8b9a2;--green:#83d800;--cyan:#62d7c9;--max:1160px}
    *{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 90% 0,#153919 0,transparent 34%),var(--bg);color:var(--text);font:17px/1.7 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:var(--green);text-underline-offset:4px}header,main,footer{width:min(var(--max),calc(100% - 40px));margin:auto}header{display:flex;justify-content:space-between;gap:24px;align-items:center;padding:22px 0;border-bottom:1px solid var(--line)}.brand{font-weight:800;color:var(--text);text-decoration:none}.languages{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px}.languages a{padding:4px 8px;color:var(--muted);text-decoration:none;border-radius:999px}.languages .active{color:#071006;background:var(--green)}.hero{padding:86px 0 58px}.eyebrow{color:var(--green);font-weight:700;letter-spacing:.08em;text-transform:uppercase}h1{font:800 clamp(2.5rem,7vw,5.7rem)/1.02 Georgia,serif;max-width:900px;margin:.2em 0}.lead{font-size:clamp(1.1rem,2.4vw,1.45rem);max-width:820px;color:var(--muted)}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.button{display:inline-block;padding:11px 18px;border-radius:12px;background:var(--green);color:#091307;text-decoration:none;font-weight:800}.button.secondary{background:transparent;color:var(--text);border:1px solid var(--line)}.cover{width:100%;height:auto;border:1px solid var(--line);border-radius:24px;margin:10px 0 50px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.card{background:linear-gradient(145deg,var(--panel),#071509);border:1px solid var(--line);padding:28px;border-radius:20px}.card h2,.card h3{margin-top:0;font-family:Georgia,serif}.card p{color:var(--muted)}.card.wide{grid-column:1/-1}.platforms{columns:2;list-style:none;padding:0}.platforms li{break-inside:avoid;margin:6px 0}.note{margin:44px 0;padding:24px;border-left:4px solid var(--cyan);background:#0a1810;color:var(--muted)}footer{margin-top:60px;padding:30px 0 54px;border-top:1px solid var(--line);color:var(--muted)}footer nav{display:flex;flex-wrap:wrap;gap:16px}@media(max-width:720px){header{align-items:flex-start;flex-direction:column}.languages{justify-content:flex-start}.hero{padding-top:55px}.grid{grid-template-columns:1fr}.card.wide{grid-column:auto}.platforms{columns:1}}
  </style>
</head>
<body>
  <header>
    ${link(project.officialWebsite, 'SingLinkVPN', 'brand')}
    <nav class="languages" aria-label="Languages">${languageNav}</nav>
  </header>
  <main>
    <section class="hero">
      <div class="eyebrow">${escapeHtml(project.repositoryRole)}</div>
      <h1>${escapeHtml(copy.h1)}</h1>
      <p class="lead">${escapeHtml(copy.hero)}</p>
      <div class="actions">
        ${link(project.officialWebsite, copy.labels.officialWebsite, 'button')}
        ${link(project.downloadCenter, copy.labels.downloadCenter, 'button secondary')}
      </div>
    </section>
    <img class="cover" src="${project.pagesBaseUrl}/assets/singlinkvpn-public-project.png" width="1600" height="900" alt="${escapeHtml(copy.h1)}">
    <section class="grid">
      <article class="card wide"><h2>${escapeHtml(copy.aboutTitle)}</h2><p>${escapeHtml(copy.about)}</p><p>${link(project.newsCenter, copy.labels.newsCenter)} · ${link(project.changelog, copy.labels.changelog)} · ${link(project.support, copy.labels.support)}</p></article>
      <article class="card"><h2>${escapeHtml(copy.downloadsTitle)}</h2><p>${escapeHtml(copy.downloads)}</p><ul class="platforms">${platformLinks}</ul></article>
      <article class="card"><h2>${escapeHtml(copy.freeTitle)}</h2><p>${escapeHtml(copy.free)}</p><p>${link(project.freePlan.source, copy.freeTitle)}</p></article>
      <article class="card"><h2>${escapeHtml(copy.auditTitle)}</h2><p>${escapeHtml(copy.audit)}</p><p>${link(project.evidence.securityAudit.repository, copy.labels.securityRepo)}</p></article>
      <article class="card"><h2>${escapeHtml(copy.noLogsTitle)}</h2><p>${escapeHtml(copy.noLogs)}</p><p>${link(project.evidence.noLogsVerification.repository, copy.labels.noLogsRepo)}</p></article>
      <article class="card"><h2>${escapeHtml(copy.techTitle)}</h2><p>${escapeHtml(copy.tech)}</p><p>${link(project.technology.solaArticle, copy.labels.sola)}</p></article>
      <article class="card"><h2>${escapeHtml(copy.openSourceTitle)}</h2><p>${escapeHtml(copy.openSource)}</p><p>${link(project.technology.openSourcePlan, copy.labels.openSource)}</p></article>
    </section>
    <aside class="note"><strong>${escapeHtml(copy.limitsTitle)}.</strong> ${escapeHtml(copy.limits)} ${escapeHtml(copy.labels.lastVerified)}: ${project.lastVerified}.</aside>
  </main>
  <footer>
    <nav>${link(project.repository, 'GitHub')} ${link(`${project.pagesBaseUrl}/metadata/project.json`, 'JSON')} ${link(`${project.pagesBaseUrl}/llms.txt`, 'llms.txt')} ${link(`${project.pagesBaseUrl}/sitemap.xml`, 'Sitemap')}</nav>
  </footer>
</body>
</html>`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const localeCopies = new Map();
for (const locale of locales) {
  localeCopies.set(locale, await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
}

for (const locale of locales) {
  const copy = JSON.parse(localeCopies.get(locale));
  const target = locale === 'en' ? dist : path.join(dist, locale);
  await mkdir(target, { recursive: true });
  await writeFile(path.join(target, 'index.html'), page(copy, locale), 'utf8');
}

await mkdir(path.join(dist, 'assets'), { recursive: true });
await mkdir(path.join(dist, 'metadata'), { recursive: true });
await cp(path.join(root, 'assets/singlinkvpn-public-project.png'), path.join(dist, 'assets/singlinkvpn-public-project.png'));
await cp(path.join(root, 'assets/singlinkvpn-public-project.svg'), path.join(dist, 'assets/singlinkvpn-public-project.svg'));
await cp(path.join(root, 'metadata/project.json'), path.join(dist, 'metadata/project.json'));
await cp(path.join(root, 'metadata/project.schema.json'), path.join(dist, 'metadata/project.schema.json'));
await cp(path.join(root, 'llms.txt'), path.join(dist, 'llms.txt'));
await writeFile(path.join(dist, '.nojekyll'), '', 'utf8');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locales.map((locale) => `  <url><loc>${urlFor(locale)}</loc><lastmod>${project.lastVerified}</lastmod></url>`).join('\n')}
</urlset>\n`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${project.pagesBaseUrl}/sitemap.xml\n`, 'utf8');

console.log(`Built ${locales.length} localized Pages routes in dist/.`);
