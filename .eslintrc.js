module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
    env: { node: true, jest: true },
};
