let n = prompt("เลขหวย")
console.log(n);
// Math.floor(Math.random() * 10); // 0-9
// Math.floor(Math.random() * 11); // 0-10
document.getElementById("number").innerHTML = n;
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);
