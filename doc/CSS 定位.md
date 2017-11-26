### CSS Positioning(定位)

##### position 属性的四个值：
- static
- relative
- fixed
- absolute

- static 定位
HTML元素的默认值，即没有定位，元素出现在正常的流中。
`静态定位的元素不会受到 top, bottom, left, right影响。`

- absolute 定位
绝对定位的元素的位置`相对于最近的已定位父元素`，如果元素没有已定位的父元素，那么它的位置相对于"html".
例1：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>absolute 定位</title> 
<style>
h2
{
	position:absolute;
	left:100px;
	top:50px;
}
</style>
</head>
<body>
<h2>这是一个绝对定位了的标题</h2>
<p>用绝对定位,一个元素可以放在页面上的任何位置。标题下面放置距离左边的页面100 px和距离页面的顶部150 px的元素。.</p>
</body>
</html>
```
元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素. z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）
例2
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>absolute 定位</title> 
<style>
img
{
	position:absolute;
	left:0px;
	top:0px;
	z-index:-1;
}
</style>
</head>

<body>
<h1>This is a heading</h1>
<img src="w3css.gif" width="100" height="140" />
<p>因为图像元素设置了 z-index 属性值为 -1, 所以它会显示在文字之后。</p>
</body>
</html>
```

- fixed 定位 （固定）
元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动. 

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>fixed 定位</title> 
<style>
p.pos_fixed
{
	position:fixed;
	top:30px;
	right:5px;
}
</style>
</head>
<body>
<p class="pos_fixed">Some more text</p>
<p><b>注意:</b> IE7 和 IE8 支持只有一个 !DOCTYPE 指定固定值.</p>
<p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p><p>Some text</p>
</body>
</html>
```

- relative 定位
相对定位元素的定位是相对其正常位置。
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>relative 定位</title> 
<style>
h2.pos_left
{
	position:relative;
	left:-20px;
}
h2.pos_right
{
	position:relative;
	left:20px;
}
</style>
</head>
<body>
<h2>这是位于正常位置的标题</h2>
<h2 class="pos_left">这个标题相对于其正常位置向左移动</h2>
<h2 class="pos_right">这个标题相对于其正常位置向右移动</h2>
<p>相对定位会按照元素的原始位置对该元素进行移动。</p>
<p>样式 "left:-20px" 从元素的原始左侧位置减去 20 像素。</p>
<p>样式 "left:20px" 向元素的原始左侧位置增加 20 像素。</p>
</body>
</html>
```