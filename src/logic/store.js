import {observable, computed, action} from 'mobx';

export default class DataStore {
    @observable str = 'hoge';

    @action eventHandle = (unko) => {
       this.str = unko;
    }
}