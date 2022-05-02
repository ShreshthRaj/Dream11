// write js code here corresponding to matches.html
var out=JSON.parse(localStorage.getItem("info"))
display(out)
function fun() {
  var selected=document.getElementById("filterVenue").value;
  console.log(selected);
  var filteredlist=out.filter(function(ele)
  {
    return ele.e==selected;
  });
  console.log(filteredlist)
  displayData(filteredlist);
}

var fav=JSON.parse(localStorage.getItem("final"))||[];
function display(out){
  document.querySelector("tbody").innerHTML="";
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
    td6.innerText="Favourite"
    td6.style.backgroundColor="black"
    td6.style.color="white"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
   plays(ele)
    });
  
    box.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(box)
  });
  
}


function plays(ele){
    console.log(ele)
    fav.push(ele)

    localStorage.setItem("final",JSON.stringify(fav))
    // window.location.href="favourites.html"
}