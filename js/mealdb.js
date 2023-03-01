const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch (url)
     .then(res => res.json())
     .then(data => displayMeals(data.meals))
    

}

const displayMeals = (meals) =>{
    console.log(meals);
    
    // step-5: catch parent container
    const mealsContainer = document.getElementById('meals-container');

    mealsContainer.innerText = '';
    meals.forEach(meal => {

        console.log(meal)
        //step-1: create a div
        const mealDiv = document.createElement('div');
        //step-2: add class
        mealDiv.classList.add('col');
        //step-3: set inner html
        mealDiv.innerHTML =`
        <div class="card p-2">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text"> Tag: ${meal.strTags

                }</p>
                <p class="card-text">Category: ${meal.strCategory


                }</p>
                <p class="card-text"> Area: ${meal.strArea


                }</p>

                <!-- Button trigger modal -->
                <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
 
        </div>
        `
        //step-4: append child to the parent container
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = (idMeal) =>{
    //
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}


/* Modal section fetch and display */

//fetch 
const loadMealDetail = idMeal => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(idMeal);
    fetch(url)
     .then(res => res.json())
     .then(data => displayMealDetails(data.meals[0]))
}

//display

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;

   const mealsDetails = document.getElementById('mealDetailsBody');
   mealsDetails.innerHTML = `
   <img class="img-fluid" src="${meal.strMealThumb}" alt="">
   `


}


loadMeals('fish');