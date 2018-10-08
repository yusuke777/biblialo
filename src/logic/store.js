import {observable, computed, action} from 'mobx';
import webapi from 'superagent';

export default class DataStore {
    @observable str = 'hoge';
    @observable hoge = 'hoge';

    @action changeValue = (unko) => {
       this.str = unko;
    }

    @action eventHandle = () => {
        this.hoge = this.str;
        getBookData(this.hoge);
     }
}

function getBookData(bookname){
    console.log(bookname);
    webapi('https://www.googleapis.com/books/v1/volumes')
   .query('q=' + 'intitle:' + bookname + '&country=JP')
   .end(function(error, res){
    console.log(res.body);
   });
}