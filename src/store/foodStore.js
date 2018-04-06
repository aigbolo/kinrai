import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';
export default class FoodStore{
    @observable foods = [];

    async fetchFoods(key){
        let response = await fetch('https://kinrai-backend.firebaseio.com/foods.json');
       
        // let data = await response.json();
        this.foods = await response.json();
        console.log('data:',this.food)
        
    }


}
