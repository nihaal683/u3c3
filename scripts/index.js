const url ="https://masai-mock-api.herokuapp.com/hotels/search?city=goa";

    async function getData(){
        try{
            let res = await fetch(url);
            let data = await res.json();
            append(data);
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    getData();


    function append(data){
        let container = document.getElementById("hotels-list");
        //assending oreder price sort
        data.sortLTH(function(a,b){
            return a.Price - b.Price;
        });
        data.sorHTL(function(a,b){
            return b.Price - a.Price;
        });
        // sort jewellery
        data = data.filter(function(el){
            return el.AC === "true";
        });
        data = data.filter(function(el){
            return el.AC === "false";
        });

        data.forEach(function (el){
            let img = document.createElement("img");
            img.src = el.image;

            let p = document.createElement("p");
            p.innerText = el.Rooms;

            let price = document.createElement("p");
            price.innerText = el.Price;

            let AC = document.createElement("p");
            AC.innerText = el.AC;

            let Rating = document.createElement("p");
            Rating.innerText = el.Rating;

            let div = document.createElement("div");
            div.append(img,p,price,AC,Rating);
            container.append(div);
        });
    }