import {observable, computed, action} from 'mobx';
import webapi from 'superagent';

export default class DataStore {
     
    @observable str = 'hoge';
    @observable hoge = 'hoge';
    @observable bookSearchState = 'intitle'
    @observable book_data_tbl = [];

    @action changeValue = (unko) => {
       this.str = unko;
    }

    @action eventHandle = () => {
        this.hoge = this.str;
        this.getBookData(this.hoge);
     }
    @action changeBookSearchState = event => {
        this.bookSearchState = event.target.value;
        if(this.bookSearchState === "Title"){
            this.searchKeyword = "intitle:"
        }
        else if(this.bookSearchState === "Author"){
            this.searchKeyword = "inauthor:"
        }       
        else if(this.bookSearchState === "Publisher"){
            this.searchKeyword = "inpublisher:"
        }
        else if(this.bookSearchState === "ISBN code"){
            this.searchKeyword = "isbn:"
        }
        else{
            this.searchKeyword = "intitle:"
        }
        console.log(this.searchKeyword);

     }
     @action getBookData(bookname){
            console.log(bookname);
            let self = this;
            webapi('https://www.googleapis.com/books/v1/volumes')
        .query('q=' + this.searchKeyword + bookname + '&country=JP')
        .end(function(error, res){
            self.book_data_tbl = []
            for(let i = 0; i < res.body.items.length; i++){
                let tmp_data = res.body.items[i].volumeInfo;
                let book_data = {
                    title: tmp_data.title,
                    page_count: tmp_data.pageCount,
                    published_date: tmp_data.publishedDate,
                    thumbnail: tmp_data.imageLinks.thumbnail
                }
                self.book_data_tbl.push(book_data);
            }
            console.log(self.book_data_tbl);
        });
    }
    searchKeyword() {
        
    }    


    }