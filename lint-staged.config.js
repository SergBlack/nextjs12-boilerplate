module.exports = {
  'src/**/*.(ts|tsx)': () => 'npm run check-types',
  'src/**/*.(ts|tsx|js)': () => ['npm run lint', 'npm run prettier-format'],
};
