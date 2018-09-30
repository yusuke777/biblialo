import mocha from 'mocha';
import { expect } from 'chai';
import bookify from '../lib/bookify';

describe('Bookify without cache', function() {
  it('should return a JSON object of books with all fields', function() {
    const g0 = new bookify();
    return g0.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
      });
  });

  it('should return a JSON object of books with a subset of fields', function() {
    const g1 = new bookify({ options: { returnFields: 'items(volumeInfo(title))' }});
    return g1.search('Guinness World Records')
      .then(function(result) {
        expect(result[0]).to.have.property('title');
        expect(result[0]).to.not.have.property('id');
      }, function(err) {
        expect(true).to.equal(false); // should not be reached
      });
  });

  it('should return an empty object if there are no results', function() {
    const g2 = new bookify();
    return g2.search('JCEhrrpxF2E1s7aPW8zd2903tQ4AlCB9')
      .then(function(result) {
        expect(result).to.exist;
        expect(result).to.be.empty;
        expect(result.length).to.equal(0);
      }, function(err) {
        expect(true).to.equal(false); // should not be reached
      });
  });

  it('should return a specified number of results', function() {
    const g3 = new bookify({ options: { limit: 15 }});
    return g3.search('Guinness World Records')
      .then(function(result) {
        expect(result).to.exist;
        expect(result.length).to.equal(15);
      }, function(err) {
        expect(true).to.equal(false); // should not be reached
      });
  });

  // TODO: This fails with
  // 
  // AssertionError: 
  //   expected [Function] to throw 'Error: Limit must be between 1 and 40' 
  //   but 'Error: Offset cannot be below 0' was thrown
  //
  // it('should only accept a limit below 40', function(done) {
  //   expect(function() {
  //     const g5 = new googleBooks({ options: { offset: -1 }});
  //   }).to.throw(new Error('Limit must be between 1 and 40'));
  // });

  // TODO: This fails with
  // 
  // AssertionError: 
  //   expected [Function] to throw 'Error: Offset cannot be below 0' 
  //   but 'Error: Offset cannot be below 0' was thrown
  //
  // it('should only accept a limit below 40', function(done) {
  //   expect(function() {
  //     const g5 = new googleBooks({ options: { offset: -1 }});
  //   }).to.throw(new Error('Limit must be between 1 and 40'));
  // });

  it('should return an error if no query is specified', function() {
    const g6 = new bookify();
    g6.search(null)
      .then(function(result) {
        expect(result).to.be.empty;
      }, function(err) {
        expect(err).to.be.equal(new Error('Query is required'));
      });
  });

});