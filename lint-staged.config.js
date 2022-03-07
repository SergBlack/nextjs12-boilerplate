module.exports = {
  'src/**/*.(ts|tsx)': () => 'tsc --noEmit',
  'src/**/*.(ts|tsx|js)': (filenames) => [`npm run lint --fix ${filenames.join(' ')}`, `npm run prettier-format --write ${filenames.join(' ')}`],
  'src/**/*.(md|json)': (filenames) => `npm run prettier-format --write ${filenames.join(' ')}`,
};
