function adicionar(){
    var task = document.getElementById("task").value;
    var list = document.getElementById("list").innerHTML;
    var checkIn = document.createElement("input");
    checkIn.setAttribute("type", "checkbox");
    list = list +"<li>"+task+"</li>";
    
    document.getElementById("list").innerHTML = list;
}
  
