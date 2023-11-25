let params = new URLSearchParams(window.location.search)
let id = params.get("id")

async function getDataById(){
    try {
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

        let response = await axios.get(url)
        let data = await response.data.drinks[0]
        console.log(data);

        
        let arr = [
            data.strIngredient1,
            data.strIngredient2,
            data.strIngredient3,
            data.strIngredient4,
            data.strIngredient5,
            data.strIngredient6,
            data.strIngredient7,
            data.strIngredient8,
            data.strIngredient9,
            data.strIngredient10,
            data.strIngredient11,
            data.strIngredient12,
            data.strIngredient13,
            data.strIngredient14,
            data.strIngredient15,
        ]
        
        let ingredients = arr.filter((e)=> e != null)

        let string = ""
        for (let i = 0; i < ingredients.length; i++) {
            if (i == 0) {
                string += ingredients[i]
            }else if(i == (ingredients.length - 1)){
                string += " and " + ingredients[i]
            }else{
                string += ", " + ingredients[i]
            }
            
        }
        console.log(string);
        let output = `<div id="card">
         <img src="" alt="" id="drinksImage"> 
         <div id="details">
            <p id="nameSection">Name: <span id="names">${data.strDrink}</span></p>
            <p id="infoSection">INFO: <span id="info">${data.strAlcoholic}</span></p>
            <p id="categorySection">CATEGORY: <span id="category">${data.strCategory}</span></p>
            <p id="glassSection">GLASS: <span id="glass">${data.strGlass}</span></p>
            <p id="instructionSection">INSTRUCTION: <span id="instructions">${data.strInstructions}</span></p>
            <p id="ingredientsSection">INGREDIENTS: <span id="ingredients">${string}</span></p>
         </div>   
        </div>`

        document.getElementById("menu").innerHTML = output

    } catch (error) {
        console.log(error);
    }
}

getDataById()

document.getElementById("goback").addEventListener("click",()=>{
    window.location.href = "./index.html"
})