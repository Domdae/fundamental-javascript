let n = prompt("เลขหวย")
console.log(n);
// Math.floor(Math.random() * 10); // 0-9
// Math.floor(Math.random() * 11); // 0-10
document.getElementById("number").innerHTML = n;
let random = Math.floor(Math.random() * 100);
document.getElementById("random").innerHTML = random;
if (n === random) {
    document.getElementById("result").innerHTML = "congrets !!!!";

} else {
    document.getElementById("result").innerHTML = "wwkekkrrkrkrkrkrkrk !!!!";
}