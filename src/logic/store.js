import {observable, computed, action} from 'mobx';

export default class DataStore {
    @observable str = 'hoge';
    @observable hoge = 'hoge';

    @action changeValue = (unko) => {
       this.str = unko;
    }

    @action eventHandle = () => {
        this.hoge = this.str;
     }
}