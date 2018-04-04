import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';
export default class CriteriaStore{
    @observable materials = [];
    @observable text = '';
    
    async addCriteria(){
        if(this.text.trim()){
            this.materials = [this.text,...this.materials];
        }
        this.text = '';
        
    }
    async removeCriteria(key){
        this.materials.splice(key,1);
    }


}
