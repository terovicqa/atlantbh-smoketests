/* 
If I were to work on this as my full time project, 
I would use the POM approach where I would define everything and use the POM structure. 
However, due to this being cypress and this being a task for the interview process I will not go in such depth 
*/ 

describe('Navigator.ba Smoke Suite', () => {
  beforeEach(() => {
    cy.visit("https://www.navigator.ba/")
  });
  it('TC_001 - Search for a valid location', () => {
    cy.get("input[placeholder='Traži ulicu ili objekat']").type('Hollywood')
    cy.get('.iconav-search').click()
    cy.get('.menu_content_list.search-results').contains('Hollywood')
  });

  it('TC_002 - Navigate by category', () => {
    cy.get('.menu_content_list.categories li.coffee div.clearfix').scrollIntoView().click({force:true})
    cy.get('.menu_content_list').contains('Caffe')
  })

  it("TC_003 - Navigate to place's page", () => {
    cy.get("input[placeholder='Traži ulicu ili objekat']").type('Hollywood')
    cy.get('.iconav-search').click()
    cy.get('.menu_content_list.search-results').contains('Hollywood')
    cy.get('ul.menu_content_list.search-results li').first().click()
    cy.get('.btn.btn-success.btn-suggest-edit').should('be.visible')
  });

  it.only('TC_008 - Create place', () => {
    cy.get('a[href="#/create-place"]').click();
    cy.get('#poi_name').type('Test')
    cy.get('button[title="Odaberite kategoriju"]').click({force:true})
    cy.get('select').select('8').wait(3000)
    cy.get('.btn.btn-success').click({force:true})
    cy.get("div[class='alert alert-error'] ul li").should('exist')
  })
});