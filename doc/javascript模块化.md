# js 模块化规范总结

##### CommonJS
CommonJS是一个更偏向于`服务器端`的规范。由于CommonJS是`同步加载模块`，这对于服务器端不是一个问题，因为所有的模块都放在本地硬盘。等待模块时间就是硬盘读取文件时间，很小。但是，对于浏览器而言，它需要从服务器加载模块，涉及到网速，代理等原因，一旦等待时间过长，浏览器处于”假死”状态。

##### AMD
AMD是”Asynchronous Module Definition”的缩写，即”异步模块定义”。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。 
这里异步指的是不堵塞浏览器其他任务（dom构建，css渲染等），而加载内部是同步的（加载完模块后立即执行回调）。`依赖就近`。

##### CMD
CMD推崇依赖就近，延迟执行。可以把你的依赖写进代码的任意一行。

##### UMD
由于CommonJS是服务器端的规范，跟AMD、CMD两个标准实际不冲突。UMD能够兼容不同的加载规范。

###### es6
es6通过import、export实现模块的输入输出。其中import命令用于输入其他模块提供的功能，export命令用于规定模块的对外接口。

##### 参考链接
- [javascript模块化之CommonJS、AMD、CMD、UMD、ES6](http://blog.csdn.net/Real_Bird/article/details/54869066)
