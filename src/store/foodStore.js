import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';
export default class FoodStore{
    foods = [];
    result = [];

    async fetchFoods(){
        let response = await fetch('https://kinrai-backend.firebaseio.com/foods.json');
       
        this.foods = await response.json();
        console.log('data:',this.foods)
    }

    async findFoodByKeyword(criteria){
        await this.fetchFoods();

        this.result = await this.foods.map((food,index)=>{
            let ingredients = [];
            let matched = 0;
            for(let ingre of food.ingredients){
                ingre = {...ingre,match:false}
                if(criteria.length == 0){
                    isContain = true;
                }else{
                    for(let cri of criteria){
                        if(ingre.name == cri){
                            isContain = true;
                            ingre = {...ingre,match:true}
                            matched += 1;
                        }
                    }
                }
                ingredients.push(ingre);
            }
            var alterData = {ingredients:ingredients,macthedTotal:matched,totalIngredients:food.ingredients.length}
            food = Object.assign(food,alterData)
            console.log('food assign',food);
            return food;
        })

        this.result.sort(()=>sorting);
        return this.result;
    }

    sorting(a,b){
        return a.totalIngredients-b.matched;
    }


}
