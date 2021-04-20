let buttonAll  = document.getElementById("button");
let dataList  = document.getElementById("data-ul");

const getAllData = async ()=>{
    let howOften = document.getElementById("howoften").value;
    let category = document.getElementById("category").value;
    if(howOften == "" || howOften > 10){
        alert("Please enter a number between 1 and 10")
    } else {
        for( i = 0; i<howOften;i++){
            const res =  await fetch("https://v2.jokeapi.dev/joke/"+category);
            const data = await res.json();
            console.log(data)
            if (!data){
                alert("Something was wrong")
            } else{
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                let hr = document.createElement("hr");
                if(data.joke == undefined){
                    li1.innerText = "Frage: "+data.setup;
                    li2.innerText = "Antowort: "+data.delivery;
                } else {
                    li1.innerText = "Witz: "+data.joke;
                    li2.innerText = "";
                    
                }
                li3.innerText = "Category: "+data.category;
                dataList.appendChild(li3);
                dataList.appendChild(li1);
                dataList.appendChild(li2);
                dataList.appendChild(hr);
                }
        }
        }
    }




buttonAll.addEventListener("click", getAllData)
