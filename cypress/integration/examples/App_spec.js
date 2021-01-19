import "cypress-localstorage-commands"

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should render NavBar and a random dog image on page load', () => {
    cy.get('nav')
    cy.get('.dog-img')
  })

  it('Should render a title and tagline', () => {
    cy.get('nav')
    cy.contains('Dog Lovers')
    cy.contains('Become a dog person today!')
  })

  it('Should display view favorites button on page load', () => {
    cy.get('.favorites-btn').contains('view favorites').click()
    cy.contains('Your Favorite Dogs:')
  })

  it('Should render Form view when yes button has been clicked', () => {
    cy.get('.answr-btn').contains('yes').click()
    cy.contains('Please enter your name below!')
  })

  it('Should return to home when home button is clicked', () => {
    cy.get('.favorites-btn').contains('view favorites').click()
    cy.contains('Your Favorite Dogs:')
    cy.get('.btn').contains('home').click()
    cy.get('.answr-btn').contains('yes')
  })

  it('Should display unique greeting', () => {
    cy.get('a > .answr-btn').contains('yes').click()
    cy.get('input').type('Peyton')
    cy.get('.submit-btn').contains('Submit').click()
    cy.contains('Hello Peyton')
  })

  it('Should display default greeting when no name has been given', () => {
    cy.get('.favorites-btn').contains('view favorites').click()
    cy.contains('Your Favorite Dogs:')
  })

  it('Should display liked dog images', () => {
    cy.get('.fav-icon').click()
    cy.get('.favorites-btn').contains('view favorites').click()
    cy.get('.user-view').should('not.contain', '.empty-favs-message')
  })

  it('Should diplay error message when no photos were liked', () => {
    cy.get('.favorites-btn').contains('view favorites').click()
    cy.contains('UH OH! Looks as though you haven\'t liked any dogs yet!')
  })

  it('Should add a favDog to local storage', () => {
    cy.get('.fav-icon').click().should(() => {
      expect(JSON.parse(localStorage.getItem('favoriteDogs')).length).to.eq(1)
    })
  })

  it('Should only add a favDog once to local storage', () => {
    cy.clearLocalStorage()

    cy.get('.fav-icon').click()
    cy.get('.fav-icon').click().should(() => {
      expect(JSON.parse(localStorage.getItem('favoriteDogs')).length).to.eq(1)
    })

    cy.wait(500)

    cy.get('.next-btn').click()
    cy.get('.fav-icon').click().should(() => {
      expect(JSON.parse(localStorage.getItem('favoriteDogs')).length).to.eq(2)
    })
  })

  it('Should display alert when answer no is selected ', () => {
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('BOOOOOOOO....try again');
   })
  })

  it('Should display alert when answer yes is selected ', () => {
    cy.on('window:alert',(txt)=>{
      expect(txt).to.contains('WHOOOO HOOOOO');
   })
  })
})