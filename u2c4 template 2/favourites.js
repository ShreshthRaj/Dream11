// write js code here corresponding to favourites.html
var res=JSON.parse(localStorage.getItem("final"))
display(res)
function display(out){
out.forEach(function(ele)
{
  var box=document.createElement("tr")
  var td1=document.createElement("td")
  td1.innerText=ele.a
  var td2=document.createElement("td")
  td2.innerText=ele.b
  var td3=document.createElement("td")
  td3.innerText=ele.c
  var td4=document.createElement("td")
  td4.innerText=ele.d
  var td5=document.createElement("td")
  td5.innerText=ele.e
  var td6=document.createElement("td")
  td6.innerText="Remove"
  td6.style.backgroundColor="black"
  td6.style.color="white"
  td6.style.cursor="pointer"
  td6.addEventListener("click",play)
//   function play(){
//       plays(ele);
//   }

  box.append(td1,td2,td3,td4,td5,td6)
  document.querySelector("tbody").append(box)
})

}
function play(){
    event.target.parentNode.remove();

    event.target.parentNode.innerHTML = "";
}