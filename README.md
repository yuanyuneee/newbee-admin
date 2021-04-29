### 初始化
`yarn create @vitejs/app newbee-admin --template vue`

### 环境变量配置
```js
// package.json
"scripts": {
  "dev": "vite --mode development",
  "build:beta": "vite build --mode beta",
  "build:release": "vite build --mode release",
  "serve": "vite preview"
}

// vite.config.js
...
export default ({ mode }) => defineConfig({
    ...
  base: mode == 'development' ? './' : (mode == 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xxx') // 静态资源路径配置
});
```
### 安装axios
- 二次封装axios,新建axios.js文件
- 新建config/index.js文件，分别配置相应环境域名
    ```js
    // config/index.js
    export default {
      development: {
        baseUrl: '/api' // 开发代理地址
      },
      beta: {
        baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
      },
      release: {
        baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
      }
    }
  
    ```
- 配置本地开发Proxy代理
    本地环境配置`/api`,因此在`vite.config.js`做如下配置：
    ```js
    // vite.config.js
    server: {
      proxy: {
        '/api': {
          target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
        }
      }
    }
    ```

### 引入element-ui
- 安装`yarn add element-plus@1.0.2-beta.28`
- 全局引入
- 按需引入
    - `vite-plugin-babel-import -D`
    - 修改`vite.config.js`的plugins配置,和main.js的引入
    ```js
      plugins: [
        ...
        vitePluginImport([
          {
            libraryName: 'element-plus',
            libraryDirectory: 'es',
            style(name) {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
          }
        ])
      ]
    ```
