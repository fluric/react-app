const { npm_execpath: runner = '' } = process.env;

const createFormatter = () => {
  try {
    const { red } = require('chalk');
    return red;
  } catch (e) {
    return x => x;
  }
};

if (runner.indexOf('yarn') === -1) {
  const format = createFormatter();
  console.error(
    format(
      `
    Please use 'yarn' to run this application.
    `
    )
  );
  process.exit(1);
}
