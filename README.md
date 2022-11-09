<p align="center">
pure-admin官方后端 
<br />
采用nodejs编写
</p>

## 快速启动

### 打开 `MySql`

来到项目的 `src/config/index.ts` 文件，查看第 `50` 行，将 `mysql` 的账号密码跟您的 `mysql` 保持一致

### 安装依赖

```
pnpm install
```

### 项目启动

采用 [nodemon](https://github.com/remy/nodemon) 运行项目，修改代码自动更新，无需重启

```
pnpm start
```

### `Swagger` 文档访问地址

http://localhost:3000

## 如何在 `Swagger` 中添加 `token` 验证

① 在注册接口注册个账号，然后去请求登录接口，请求成功之后看下面的返回值 `accessToken`，复制这个 `token`  
② 回到 `Swagger`，点击右上角的绿色边框 `Authorize`，您会看到一个 `Value` 的输入框，将复制的 `token` 前面加上 `Bearer ` 粘贴上去，点确定即可，注意需要在 `Bearer` 后面加个一个空格
