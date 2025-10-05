let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let as = document.querySelector("#as");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    
    
    let card = document.createElement("card");
    card.classList.add("card");

        let profile = document.createElement("div");
        profile.classList.add("profile");

        let img = document.createElement("img");
        img.setAttribute("src", inputs[2].value);
        

        let h1 = document.createElement("h1");
        h1.textContent = inputs[0].value;
        let h5 = document.createElement("h5");
        h5.textContent = inputs[1].value;
        let p = document.createElement("p");
        p.textContent = inputs[3].value;

        profile.appendChild(img);

        card.appendChild(profile);

        card.appendChild(h1);
        card.appendChild(h5);
        card.appendChild(p);

    as.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !=="submit")
            inp.value="";
    })
    
});