import {observable, computed, action} from 'mobx';
import webapi from 'superagent';

export default class DataStore {
    @observable str = 'hoge';
    @observable hoge = 'hoge';
    @observable bookSearchState = 'intitle'
    @action changeValue = (unko) => {
       this.str = unko;
    }
    @action eventHandle = () => {
        this.hoge = this.str;
        getBookData(this.hoge);
     }
     @action changeBookSearchState = event => {
        this.bookSearchState = event.target.value;
        console.log(this.bookSearchState);
     }

}

function getBookData(bookname){
    console.log(bookname);
    webapi('https://www.googleapis.com/books/v1/volumes')
   .query('q=' + keyword + bookname + '&country=JP')
   .end(function(error, res){
    console.log(res.body);
   });
}