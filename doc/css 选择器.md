# css 选择器
- id 选择器: 
HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 `#` 来定义。

```
#para1
{
    text-align:center;
    color:red;
}
```

- class 选择器: 
class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点`.`号显示.

```
.center {text-align:center;}
```

- CSS 分组选择器:
为了尽量减少代码，你可以使用分组选择器。每个选择器用`逗号`分隔.

```
h1,h2,p
{
color:green;
}
```
- css 后代选取器
后代选取器匹配所有值得元素的后代元素。
```
div p
{
  background-color:yellow;
}
```

- 子元素选择器
与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。
```
div>p
{
  background-color:yellow;
}
```

- 相邻兄弟选择器（Adjacent sibling selector）可选择紧接在`另一`元素后的元素，且二者有相同父元素。
如果需要选择紧接在`另一个`元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。

- CSS 嵌套选择器

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>css 嵌套选择器</title> 
<style>
p
{
	color:blue;
	text-align:center;
}
.marked
{
	background-color:red;
}
.marked p
{
	color:white;
}
</style>
</head>
<body>
<p>这个段落是蓝色文本，居中对齐。</p>
<div class="marked">
<p>这个段落不是蓝色文本。</p>
</div>
<p>所有 class="marked"元素内的 p 元素指定一个样式，但有不同的文本颜色。</p>
</body>
</html>
```