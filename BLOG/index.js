
var a=document.getElementById("t_body");

async function funn(){
    try{
    var x=await fetch(`http://localhost:3000/blogs`);
    var data=await x.json();
    console.log(data)
        displayData(data)

    }catch(error){
        alert(error);
    }
}
funn();

function displayData(data){
    data.map((elem)=>{
         var tr=document.createElement("tr");

         var td1=document.createElement("td");
         td1.innerText=elem.id;

         var td2=document.createElement("td");
         td2.innerText=elem.title;


         var td3=document.createElement("td");
         td3.innerText=elem.body;

         var td4=document.createElement("td");
        var btn=document.createElement("button");
        btn.innerText="Edit";
         td4.append(btn);
         btn.addEventListener("click",()=>{
            localStorage.setItem("edit",elem.id);
            location.href="edit.html"
         })


         var td5=document.createElement("td");
         var btn1=document.createElement("button");
         btn1.innerText="Delete";
         btn1.setAttribute("class","howTo")
          td5.append(btn1);
          btn1.addEventListener("click",()=>{
           
                deleteBlog(elem.id)
           
            
          })

        // setTimeout(function() {
        //     btn1.click(()=>{
        //         deleteBlog(elem.id);
        //     });
        //   }, 3000);

          var td6=document.createElement("td");
          var btn2=document.createElement("button");
          btn2.innerText="View";
           td6.append(btn2);
           btn2.addEventListener("click",()=>{
             localStorage.setItem("view",elem.id);
             location.href="view.html"
          })
 

       tr.append(td1,td2,td3,td4,td5,td6);

       a.append(tr);
    })
}


async function deleteBlog(x){
     var x=await fetch(`http://localhost:3000/blogs/${x}`,{
         method:"DELETE",
         headers:{
            "Content-Type":"application/json"
         }
       
     })
     funn();
}




