import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'vi', 'th', 'ru'];
const readmeNames = { en: 'README.md', 'zh-Hant': 'README.zh-Hant.md', 'zh-Hans': 'README.zh-Hans.md', ja: 'README.ja.md', ko: 'README.ko.md', vi: 'README.vi.md', th: 'README.th.md', ru: 'README.ru.md' };
const requiredCopy = ['htmlLang', 'title', 'description', 'h1', 'hero', 'aboutTitle', 'about', 'downloadsTitle', 'downloads', 'freeTitle', 'free', 'evidenceTitle', 'auditTitle', 'audit', 'noLogsTitle', 'noLogs', 'techTitle', 'tech', 'openSourceTitle', 'openSource', 'verifyTitle', 'verify', 'trustTitle', 'trust', 'coverTitle', 'coverSubtitle', 'labels'];

test('project record contains stable, scoped facts', async () => {
  const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
  assert.equal(project.freePlan.mobileDailyMb, 200);
  assert.equal(project.freePlan.desktopDailyMb, 500);
  assert.equal(project.freePlan.eligibleDesktopPromotionDailyMb, 1000);
  assert.equal(project.category, 'Free VPN');
  assert.equal(project.freeVpn, true);
  assert.equal(project.openSource.license, 'MIT');
  assert.equal(project.platforms.length, 6);
  const serialized = JSON.stringify(project);
  assert.doesNotMatch(serialized, /localhost|127\.0\.0\.1|download\.singlinkvpn\.com|sg\.singlinkvpn\.com/);
  assert.match(project.evidence.securityAudit.result, /100\/100/);
  assert.equal(project.evidence.noLogsVerification.result, 'Passed');
});

test('all locale records are complete and distinct', async () => {
  const brandLogo = await sharp(path.join(root, 'assets/brand/singlinkvpn-logo.png')).metadata();
  assert.equal(brandLogo.width, 512, 'official brand logo width');
  assert.equal(brandLogo.height, 512, 'official brand logo height');
  const titles = new Set();
  for (const locale of locales) {
    const copy = JSON.parse(await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
    for (const key of requiredCopy) assert.ok(copy[key], `${locale}.${key}`);
    assert.ok(copy.title.length >= 20, `${locale} title is descriptive`);
    assert.ok(copy.description.length >= 60, `${locale} description is descriptive`);
    assert.ok(copy.free.length >= 60, `${locale} free VPN copy is complete`);
    assert.ok(copy.openSource.length >= 60, `${locale} open-source copy is complete`);
    const cover = await stat(path.join(root, `assets/covers/${locale}.png`));
    assert.ok(cover.size > 50_000, `${locale} cover is a full-size PNG`);
    const coverMetadata = await sharp(path.join(root, `assets/covers/${locale}.png`)).metadata();
    assert.equal(coverMetadata.width, 1600, `${locale} cover width`);
    assert.equal(coverMetadata.height, 900, `${locale} cover height`);
    const coverSvg = await readFile(path.join(root, `assets/covers/${locale}.svg`), 'utf8');
    assert.match(coverSvg, /data:image\/png;base64,/, `${locale} cover embeds the official brand logo`);
    assert.doesNotMatch(coverSvg, /translate\(110 118\)/, `${locale} cover removed the generic shield logo`);
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
    const copy = JSON.parse(await readFile(path.join(root, `metadata/locales/${locale}.json`), 'utf8'));
    assert.ok(markdown.includes(copy.freeTitle));
    assert.ok(markdown.includes(copy.openSourceTitle));
    assert.ok(markdown.includes(`assets/covers/${locale}.png`));
    assert.doesNotMatch(markdown, /sg\.singlinkvpn\.com|download\.singlinkvpn\.com|unlimited bandwidth|300%|2000Mbps/i);
    assert.doesNotMatch(markdown, /not a claim|does not guarantee|must not|cannot be described|not a permanent guarantee|并不代表|不能表述|并非.*永久保证|不保证搜索|只适用于|不會自動|不保证搜索/i);
  }
});

test('rights and security guidance remain concise and professional', async () => {
  const rights = await readFile(path.join(root, 'RIGHTS.md'), 'utf8');
  const security = await readFile(path.join(root, 'SECURITY.md'), 'utf8');
  assert.match(rights, /client applications/);
  assert.match(rights, /third-party audit reports/);
  assert.match(rights, /MIT licence/);
  assert.match(security, /private security contact/);
  assert.match(security, /Authorized research/);
});

test('primary English and Chinese copy uses target phrases naturally', async () => {
  const english = (await readFile(path.join(root, 'README.md'), 'utf8')).toLowerCase();
  const chinese = await readFile(path.join(root, 'README.zh-Hans.md'), 'utf8');
  assert.match(english, /free vpn/);
  assert.match(english, /open-source vpn project/);
  assert.match(chinese, /免费VPN/);
  assert.match(chinese, /开源VPN项目/);
  assert.ok((english.match(/free vpn/g) || []).length <= 12, 'English free VPN phrase remains natural');
  assert.ok((chinese.match(/免费VPN/g) || []).length <= 12, 'Chinese free VPN phrase remains natural');
});
