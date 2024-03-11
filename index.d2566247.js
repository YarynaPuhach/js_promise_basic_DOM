var e=document.querySelector(".logo"),n=document.createElement("div"),r=document.createElement("div");n.classList.add("message"),n.innerText="Promise was resolved!",r.classList.add("message","error-message"),r.innerText="Promise was rejected!";var t=new Promise(function(n){e.addEventListener("click",function(){n()})}),o=new Promise(function(e,n){setTimeout(function(){return n(Error("error"))},3e3)});t.then(function(){return document.body.append(n)}),o.catch(function(){return document.body.append(r)});//# sourceMappingURL=index.d2566247.js.map

//# sourceMappingURL=index.d2566247.js.map
