import CriteriaStore from './criteriaStore';
import FoodStore from './foodStore';

//Singleton design pattern
export default{
    criteriaStore: new CriteriaStore(),
    foodStore:new FoodStore()
}