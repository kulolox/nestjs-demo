## nestjs-cli

ioc 控制注入，帮我们做了通用的实例化操作

```
nest new [projectName]
```

app.module.ts 根模块用于处理其他类的引用与共享

app.controller.ts 常见功能是处理http请求及调用service层的处理方法

app.service.ts 封装通用的业务逻辑，与数据层交互，第三方请求

常用命令

nest --help

restful 版本控制
