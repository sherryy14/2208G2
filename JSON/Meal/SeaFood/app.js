const seafood = fetch('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

    seafood.then((seafooddata)=>{
    console.log(seafooddata);
    return seafooddata.json()
}).then((seadatafood)=>{
    console.log(seadatafood);
}).catch((err)=>{
    console.log(err)
})


