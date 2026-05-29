import licenseChecker from 'license-checker';
import { readFileSync, writeFileSync } from 'fs';

licenseChecker.init({ start: '.', production: true }, (_, packages) => {
  const result = Object.entries(packages).map(([name, info]) => ({
    name,
    licenses: info.licenses,
    licenseText: info.licenseFile ? readFileSync(info.licenseFile, 'utf-8') : null,
  }));

  writeFileSync('data/licenses.json', JSON.stringify(result, null, 2));
})