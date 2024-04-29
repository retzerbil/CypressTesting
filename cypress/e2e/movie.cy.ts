//http://www.omdbapi.com/?i=tt3896198&apikey=6424148a

describe('Intercepting omdb call testing', () => {
  it('should intercept omdb request', () => {
    cy.intercept("http://www.omdbapi.com/?i=tt3896198&apikey=6424148a",[{Title:"yeah",Year:"2053"},{Title:"movie",Year:1993}])
  })

})