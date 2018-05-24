Simple Technique 1:
--------------------
<script type="text/javascript">
var cachebuster = Math.round(new Date().getTime() / 1000);
document.write('<scr'+'ipt type="text/javascript" src="external.js?cb=' +cachebuster+'"></scr' + 'ipt>');
</script>

Simple Technique 2:
-------------------
var uniqueNum = new Date().getTime();
var cssURL = 'style.css?ver=' + uniqueNum;
var cssElement=document.createElement('link')
cssElement.setAttribute('rel','stylesheet')
cssElement.setAttribute('type','text/css')
cssElement.setAttribute('href', cssURL);
document.getElementsByTagName("head")[0].appendChild(cssElement);
