const mealname = document.getElementById('userinput').value;

document.getElementById('btn').addEventListener('click',()=>{
    
const meal =  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealname}`)
meal.then((mealdata)=>{
    return mealdata.json()
}).then((converteddata)=>{
    console.log(converteddata);
    const noOfCards = document.getElementsByClassName('card').length
    for(var i = 0; i <noOfCards ; i++){
        document.getElementsByClassName('mealimg')[i].src = converteddata.meals[i].strMealThumb
        document.getElementsByClassName('card-text')[i].innerHTML = converteddata.meals[i].strMeal
        document.getElementsByClassName('mealid')[i].innerHTML = converteddata.meals[i].idMeal
    }
}).catch((err)=>{
    console.log(err)
})
})