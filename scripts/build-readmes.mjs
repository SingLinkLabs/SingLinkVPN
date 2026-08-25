import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'vi', 'th', 'ru'];
const filenames = {
  en: 'README.md',
  'zh-Hant': 'README.zh-Hant.md',
  'zh-Hans': 'README.zh-Hans.md',
  ja: 'README.ja.md',
  ko: 'README.ko.md',
  vi: 'README.vi.md',
  th: 'README.th.md',
  ru: 'README.ru.md',
};
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

const coverPaths = Object.fromEntries(locales.map((locale) => [locale, `./assets/covers/${locale}.png`]));

function nav() {
  return locales.map((locale) => `[${languageNames[locale]}](./${filenames[locale]})`).join(' · ');
}

function readme(copy, locale) {
  const platformLinks = project.platforms
    .map(({ name, url }) => `- [${name}](${url})`)
    .join('\n');
  return `# ${copy.h1}

${nav()}

![${copy.coverTitle}](${coverPaths[locale]})

${copy.hero}

## ${copy.aboutTitle}

${copy.about}

- [${copy.labels.officialWebsite}](${project.officialWebsite})
- [${copy.labels.newsCenter}](${project.newsCenter})
- [${copy.labels.changelog}](${project.changelog})
- [${copy.labels.support}](${project.support})

## ${copy.downloadsTitle}

${copy.downloads}

- [${copy.labels.downloadCenter}](${project.downloadCenter})
${platformLinks}

## ${copy.freeTitle}

${copy.free}

- [${copy.freeTitle}](${project.freePlan.source})

## ${copy.evidenceTitle}

### ${copy.auditTitle}

${copy.audit}

- [${copy.labels.securityRepo}](${project.evidence.securityAudit.repository})
- [${copy.labels.securityRepo} · Pages](${project.evidence.securityAudit.website})

### ${copy.noLogsTitle}

${copy.noLogs}

- [${copy.labels.noLogsRepo}](${project.evidence.noLogsVerification.repository})
- [${copy.labels.noLogsRepo} · Pages](${project.evidence.noLogsVerification.website})

## ${copy.techTitle}

${copy.tech}

- [${copy.labels.sola}](${project.technology.solaArticle})

## ${copy.openSourceTitle}

${copy.openSource}

- [${copy.labels.openSource}](${project.technology.openSourcePlan})

## ${copy.verifyTitle}

${copy.verify}

\`\`\`sh
npm test
npm run verify:remote
\`\`\`

- [Machine-readable project record](./metadata/project.json)
- [Citation metadata](./CITATION.cff)
- [Security policy](./SECURITY.md)
- [Rights and licence boundary](./RIGHTS.md)

## ${copy.trustTitle}

${copy.trust}

**${copy.labels.lastVerified}: ${project.lastVerified}.**
`;
}

for (const locale of locales) {
  const copy = JSON.parse(await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
  await writeFile(path.join(root, filenames[locale]), readme(copy, locale), 'utf8');
}

console.log(`Built ${locales.length} complete localized README files.`);
