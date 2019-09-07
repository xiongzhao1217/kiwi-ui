let env = process.env.NODE_ENV || 'development'
// 环境变量配置
let config = {
  env: env,
  backend: {
    development: 'http://localhost:8088',
    test: 'http://test-api.kiwiui.com',
    production: 'http://api.kiwiui.com'
  }[env],
  loginUrl: {
    development: `http://test-sso.kiwiui.com`,
    test: 'http://test-sso.kiwiui.com',
    production: `http://sso.kiwiui.com`
  }[env]
}
console.log(`env is: ${env}, config is: `, config)
export default config
