// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-spaced-func': 0, // 函数调用时 函数名与()之间不能有空格
    'indent': ['error', 2], // 缩进风格
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 开发环境可使用console.log
    'no-empty': 2, // 块语句中的内容不能为空
    'camelcase': 2, // 强制驼峰法命名
    'eqeqeq': 2, // 使用全等
    'strict': 2, // 使用严格模式
  }
}
