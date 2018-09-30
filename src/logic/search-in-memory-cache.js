import mocha from 'mocha';
import { expect } from 'chai';
import bookify from '../lib/bookify';
import superagentCache from 'superagent-cache';

let bookifyInMemoryCache;

describe('Bookify with in-memory cache', function() {
  before(function() {
    bookifyInMemoryCache = new bookify({ superagent: superagentCache() });
  });

  it('should return a JSON object of books with all fields', function() {
    return bookifyInMemoryCache.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
      }, function(err) {
        expect(true).to.equal(false);
      })
  });

  it('should return a JSON object of books with all fields from cache', function() {

    // Runtime is typically less than 1 ms but we give some 
    // wiggle room for resource constrained systems
    this.timeout(10);

    return bookifyInMemoryCache.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
      }, function(err) {
        expect(true).to.equal(false);
      })
  });
});