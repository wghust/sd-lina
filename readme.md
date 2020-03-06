#### 启动方式


##### 下载npm包

```
(sudo) npm install 
```

##### 打包方式

修改/build/webpack.config.js的entry，选择你要打包的文件。

执行：

```
npm run build
```

或者监听文件：

```
npm run watch
```

##### 启动本地静态服务器

执行：

```
npm run server
```

##### 上传资源

可在``server.json``配置服务器信息。然后执行如下：

```
npm run upload
```

规定静态的服务器的域名为``xxx.tongbanjie.com``；配置host到127.0.0.1

所以需要再本地使用反向代理，绑定8892到80端口。

##### 开发指南

```
api配置： /index/store/apis
router配置：/index/router/*
页面组件开发：/index/views/*
``` 