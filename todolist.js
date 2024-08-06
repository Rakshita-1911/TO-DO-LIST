 const addInput = document.querySelector("#tt");
  function addTask(){
      const input = addInput.value.trim();
     if(input ===""){
        alert("you must write somthing!");
    }else{
        let li = document.createElement("li");
        li.innerText= addInput.value;
        tlist.appendChild(li);
     
        }
        addInput.value = "";
    }
       

