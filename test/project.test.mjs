import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'vi', 'th', 'ru'];
const readmeNames = { en: 'README.md', 'zh-Hant': 'README.zh-Hant.md', 'zh-Hans': 'README.zh-Hans.md', ja: 'README.ja.md', ko: 'README.ko.md', vi: 'README.vi.md', th: 'README.th.md', ru: 'README.ru.md' };
const requiredCopy = ['htmlLang', 'title', 'description', 'h1', 'hero', 'aboutTitle', 'about', 'downloadsTitle', 'downloads', 'freeTitle', 'free', 'evidenceTitle', 'auditTitle', 'audit', 'noLogsTitle', 'noLogs', 'techTitle', 'tech', 'openSourceTitle', 'openSource', 'verifyTitle', 'verify', 'limitsTitle', 'limits', 'labels'];

test('project record contains stable, scoped facts', async () => {
  const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
  assert.equal(project.freePlan.mobileDailyMb, 200);
  assert.equal(project.freePlan.desktopDailyMb, 500);
  assert.equal(project.freePlan.eligibleDesktopPromotionDailyMb, 1000);
  assert.equal(project.platforms.length, 6);
  const serialized = JSON.stringify(project);
  assert.doesNotMatch(serialized, /localhost|127\.0\.0\.1|download\.singlinkvpn\.com|sg\.singlinkvpn\.com/);
  assert.match(project.evidence.securityAudit.result, /100\/100/);
  assert.match(project.evidence.noLogsVerification.result, /scope and reference date/);
});

test('all locale records are complete and distinct', async () => {
  const titles = new Set();
  for (const locale of locales) {
    const copy = JSON.parse(await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
    for (const key of requiredCopy) assert.ok(copy[key], `${locale}.${key}`);
    assert.ok(copy.title.length >= 30, `${locale} title is descriptive`);
    assert.ok(copy.description.length >= 60, `${locale} description is descriptive`);
    titles.add(copy.title);
  }
  assert.equal(titles.size, locales.length, 'titles must be localized');
});

test('all generated READMEs preserve evidence and reject stale claims', async () => {
  for (const locale of locales) {
    const markdown = await readFile(path.join(root, readmeNames[locale]), 'utf8');
    assert.ok(markdown.includes('singlinkvpn-security-audit'));
    assert.ok(markdown.includes('singlinkvpn-no-logs-report'));
    assert.ok(markdown.includes('metadata/project.json'));
    assert.ok(markdown.includes('npm run verify:remote'));
    assert.doesNotMatch(markdown, /sg\.singlinkvpn\.com|download\.singlinkvpn\.com|unlimited bandwidth|300%|2000Mbps/i);
  }
});

test('rights boundary is explicit', async () => {
  const rights = await readFile(path.join(root, 'RIGHTS.md'), 'utf8');
  assert.match(rights, /proprietary client applications/);
  assert.match(rights, /third-party audit reports/);
  assert.match(rights, /does not automatically apply/i);
});
