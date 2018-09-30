import mocha from 'mocha';
import { expect } from 'chai';
import bookify from '../lib/bookify';
import superagentCache from 'superagent-cache';
import redisCache from 'cache-service-redis';
import redisMock from 'redis-js';

let bookifyRedisCache;

describe('Bookify with redis cache', function() {
  before(function() {
    bookifyRedisCache = new bookify({ 
      superagent: superagentCache(null, new redisCache({ redisMock: redisMock }))
    });
  }); 

  it('should return a JSON object of books with all fields', function() {
    return bookifyRedisCache.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
      }, function(err) {
        expect(true).to.equal(false);
      })
  });

  it('should return a JSON object of books with all fields from cache', function() {

    // Querying GoogleBooks API usually takes 500-1000 ms
    this.timeout(100);

    return bookifyRedisCache.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
      }, function(err) {
        expect(true).to.equal(false);
      });
  });
});