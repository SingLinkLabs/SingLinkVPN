import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const project = JSON.parse(await readFile(path.join(root, 'metadata/project.json'), 'utf8'));
const urls = new Set([
  project.officialWebsite,
  project.newsCenter,
  project.downloadCenter,
  project.changelog,
  project.freePlan.source,
  project.support,
  ...project.platforms.map(({ url }) => url),
  project.evidence.securityAudit.repository,
  project.evidence.securityAudit.website,
  project.evidence.noLogsVerification.repository,
  project.evidence.noLogsVerification.website,
  project.evidence.umbrellaIndex,
  project.technology.solaArticle,
  project.technology.openSourcePlan,
]);

const failures = [];
for (const url of urls) {
  let finalError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(30_000),
        headers: { 'user-agent': 'SingLinkVPN-public-project-link-check/1.0' },
      });
      console.log(`${response.status}\t${response.url}\t${url}`);
      await response.body?.cancel();
      if (!response.ok) finalError = `${response.status} ${url}`;
      else finalError = undefined;
      break;
    } catch (error) {
      finalError = `${error.name}: ${url}`;
      console.error(`RETRY ${attempt}/3\t${url}\t${error.message}`);
    }
  }
  if (finalError) failures.push(finalError);
}

if (failures.length) {
  console.error(`\n${failures.length} remote link checks failed:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Verified ${urls.size} remote source routes.`);
