# css盒模型

### CSS 框模型概述
![css盒模型](image/ct_boxmodel.gif)

- CSS Margin(外边距)属性定义元素周围的空间。  margin清除周围的元素（外边框）的区域。margin没有背景颜色，是完全透明的.
exammple

```
<html>
<head>
<meta charset="utf-8"> 
<title>CSS</title> 
<style>
p
{
	background-color:yellow;
}
p.margin
{
	margin:50px 50px;
}
</style>
</head>
<body>
<p>这是一个没有指定边距大小的段落。</p>
<p class="margin">这是一个指定边距大小的段落。</p>
</body>
</html>
```

- CSS Padding
CSS Padding（填充）属性定义元素边框与元素内容之间的空间。

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>CSS</title>
<style>
p
{
	background-color:yellow;
}
p.padding
{
	padding:25px 25px;
}
</style>
</head>
<body>
<p>这是一个没有指定填充边距的段落。</p>
<p class="padding">这是一个指定填充边距的段落。</p>
</body>
</html>
```
