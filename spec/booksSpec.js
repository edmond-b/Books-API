'use strict';

describe('Books', () => {

  let books;

  beforeEach(() => {
    books = new Books();
  });

  it('has a book title stored', () => {
    expect(books.book).toEqual('The Kite Runner');
  });
});
