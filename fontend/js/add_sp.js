function addCart(id,sl){
var getCart=localStorage.getItem('cart')
var sanpham ={
id:id,
sl:sl
}
console.log(getCart)
if(getCart!=null){
var bien=true
var listsp = JSON.parse(getCart)
listsp.forEach(elements=>{
if(sanpham.id==elements.id){
elements.sl+=sl
bien=false
}
})
if(bien){
listsp.push(sanpham)
}
console.log(listsp)
var sonlistsp = JSON.stringify(listsp)
console.log(sonlistsp)
localStorage.setItem("cart", sonlistsp);
swal({
title: "Thêm sản phẩm thành công!",
text: "You clicked the button!",
icon: "success",
button: "Aww yiss!",
});
document.querySelector(".product-count").innerText=listsp.length
}else{
var listsp =[]
listsp.push(sanpham)
var jsonlistsp = JSON.stringify(listsp)
console.log(jsonlistsp)
localStorage.setItem("cart", jsonlistsp);
swal({
title: "Good job!",
text: "Thêm sản phẩm thành công!",
icon: "success",
button: "Aww yiss!",
});
}
}
function getCountCart(){
var getCart=localStorage.getItem('cart')
var listsp = JSON.parse(getCart)
document.querySelector(".product-count").innerText=listsp.length
}
getCountCart()