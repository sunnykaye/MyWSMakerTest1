describe('MyWSMaker Technical Setup', () => {

  beforeEach(() => {
    cy.visit('https://standards.myworksheetmaker.com')
  })

  it('1, Subject presents 12 grade levels', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('#headlessui-disclosure-panel-2').should('be.visible')
  })

  it('2, upon grade level click, domain panel should open', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('div[data-headlessui-state="open"]').should('be.visible')
    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-panel-6').should('be.visible')

  })

  it('3, upon domain click, subdomain panel should open', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('div[data-headlessui-state="open"]').should('be.visible')
    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-panel-6').should('be.visible')
    cy.get('#headlessui-disclosure-button-29').click()
    cy.get('#headlessui-disclosure-panel-30').should('be.visible')
  })

  it('4, upon subdomain click, panel should open', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('div[data-headlessui-state="open"]').should('be.visible')
    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-panel-6').should('be.visible')
    cy.get('#headlessui-disclosure-button-29').click()
    cy.get('#headlessui-disclosure-panel-30').should('be.visible')
    cy.get('#headlessui-disclosure-panel-30').click()
    cy.get('#headlessui-disclosure-panel-42').should('be.visible')
  })

  it('5, conventions of english, checklist change', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('div[data-headlessui-state="open"]').should('be.visible')
    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-panel-6').should('be.visible')
    cy.get('#headlessui-disclosure-button-29').click()
    cy.get('#headlessui-disclosure-panel-30').should('be.visible')
    cy.get('#headlessui-disclosure-panel-30').click()
    cy.get('#headlessui-disclosure-panel-42').should('be.visible')
    cy.get('.ml-3 > .text-sm').should('be.visible')
    cy.get('.ml-3 > .text-sm').contains("You have not selected any standard. Your selected standards will appear here.")
    cy.get('.space-y-5 > :nth-child(1) > .flex').click()
    cy.get('.py-4').should('be.visible')
    cy.get('.py-4').should('have.length', 1)
    cy.get(':nth-child(2) > .flex').click()
    cy.get('.py-4').should('have.length', 2)
    cy.get(':nth-child(7) > .flex').click()
    cy.get('.py-4').should('have.length', 3)
  })

  it('6, uncheck all, original message appears', () => {
    cy.get('.text-5xl').should('have.text', "Find Common Core standards for any lesson, unit, or curriculum plan.")
    cy.get('#headlessui-disclosure-button-1').click()
    cy.get('div[data-headlessui-state="open"]').should('be.visible')
    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-panel-6').should('be.visible')
    cy.get('#headlessui-disclosure-button-29').click()
    cy.get('#headlessui-disclosure-panel-30').should('be.visible')
    cy.get('#headlessui-disclosure-panel-30').click()
    cy.get('#headlessui-disclosure-panel-42').should('be.visible')
    cy.get('.ml-3 > .text-sm').should('be.visible')
    cy.get('.ml-3 > .text-sm').contains("You have not selected any standard. Your selected standards will appear here.")
    cy.get('.space-y-5 > :nth-child(1) > .flex').click()
    cy.get('.py-4').should('be.visible')
    cy.get('.py-4').should('have.length', 1)
    cy.get(':nth-child(2) > .flex').click()
    cy.get('.py-4').should('have.length', 2)
    cy.get(':nth-child(7) > .flex').click()
    cy.get('.py-4').should('have.length', 3)
    cy.get('.space-y-5 > :nth-child(1) > .flex').click()
    cy.get('.space-y-5 > :nth-child(2) > .flex').click()
    cy.get('.space-y-5 > :nth-child(7) > .flex').click()
    cy.get('.ml-3 > .text-sm').should('be.visible')
    cy.get('.ml-3 > .text-sm').contains("You have not selected any standard. Your selected standards will appear here.")
      //Test failed, 
      //.ml-3 does not return,
      //clicking checkboxes does not remove the selected item,
      //but rather adds it to the list again

      //Thank you for your time
  })
})