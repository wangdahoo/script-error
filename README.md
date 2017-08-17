# The 'Script error'

> 关于静态资源跨域导致的 js 异常捕捉上报失败的问题

### Problem

- Serve static Resources

```bash
$ npm run cdn
```

- Serve website

```bash
$ npm start
```

此时，访问 http://127.0.0.1:3000，页面上报 js 异常时，将发生 `Script error` 问题

### Solution (CORS)

- Serve static Resources

```bash
$ CORS=1 npm run cdn
```

- Serve website

```bash
$ CROSSORIGIN=1 npm start
```
