
    
const meal =  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
meal.then((mealdata)=>{
    return mealdata.json()
}).then((converteddata)=>{
    console.log(converteddata)

    let htmldata =''
    converteddata.meals.forEach(element => {
        
        htmldata += `
        <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
        <img src="${element.strMealThumb}" class="card-img-top mealimg" alt="...">
        <div class="card-body">
        <p>Meal ID: <span>${element.idMeal}</span></p>
        <h4> Meal: <span class="card-text">${element.strMeal}</span></h4>
        </div>
        </div>
        </div>
        `
    });
    
    let row = document.getElementById('row')
    row.innerHTML = htmldata
    




    
}).catch((err)=>{
    // console.log(err)
})