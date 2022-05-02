// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",fun)
  var data=JSON.parse(localStorage.getItem("info"))||[];
  function fun(){
    event.preventDefault()
    var userdata={
      a:masaiForm.matchNum.value,
      b:masaiForm.teamA.value,
      c:masaiForm.teamB.value,
      d:masaiForm.date.value,
      e:masaiForm.venue.value,
    
    };
    data.push(userdata)
    console.log(data)
    localStorage.setItem("info",JSON.stringify(data))
    window.location.href="matches.html"
  
  }