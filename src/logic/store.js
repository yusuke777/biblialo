import {observable, computed, action} from 'mobx';
import webapi from 'superagent';

export default class DataStore {
    @observable str = 'hoge';
    @observable hoge = 'hoge';
    @observable bookSearchState = 'intitle'
    @action changeValue = (unko) => {
       this.str = unko;
    }
    getBookData(bookname){
        console.log(bookname);
        webapi('https://www.googleapis.com/books/v1/volumes')
    .query('q=' + this.bookSearchState + bookname + '&country=JP')
    .end(function(error, res){
        console.log(res.body);
    });
    }

    @action eventHandle = () => {
        this.hoge = this.str;
        this.getBookData(this.hoge);
     }
    @action changeBookSearchState = event => {
        this.bookSearchState = event.target.value;
        if(this.bookSearchState === "Title"){
            this.bookSearchState = "intitle:"
        }
        else if(this.bookSearchState === "Author"){
            this.bookSearchState = "inauthor:"
        }       
        else if(this.bookSearchState === "Publisher"){
            this.bookSearchState = "inpublisher:"
        }
        else if(this.bookSearchState === "ISBN code"){
            this.bookSearchState = "isbn:"
        }
        else{
            this.bookSearchState = "intitle:"
        }
        console.log(this.bookSearchState);
     }



    }