async function getDataByName(name="a"){
    try {
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`

        let response = await axios.get(url)
        let data = await response.data.drinks
        console.log(data);
        document.querySelector("#menu").innerHTML = ""
        data.forEach(ele => {
            let output = `<div class="card">
            <img id="img" src="${ele.strDrinkThumb}" alt=""/>
            <h4 id="glass">${ele.strGlass}</h4>
            <h3 id="drink">${ele.strDrink},${ele.strIngredient2}</h3>
            <p id="alchoholic">${ele.strAlcoholic}</p>
            <button class="details" id="${ele.idDrink}">Details</button>
            </div>`
            document.querySelector("#menu").innerHTML += output



            
        });
        let detailBtn = document.getElementsByClassName("details")
        for (i of detailBtn) { 
            i.addEventListener("click",handleClick)
        }
    } catch (error) {
        console.log(error);
    }
}
getDataByName()

document.querySelector("#searchForm").addEventListener("submit",(ele)=>{
    ele.preventDefault()
    let input = document.getElementById("input").value
    if (input == "") {
        getDataByName()
    } else {
        getDataByName(input)
    }
})


// async function getDataById(name){
//     try{
    
//     }
// }
    function handleClick(e) {
        var id = e.target.id
        console.log(id);
        window.location.href = `./details.html?id=${id}`
    }