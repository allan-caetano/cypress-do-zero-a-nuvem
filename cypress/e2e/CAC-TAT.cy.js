/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('./src/index.html')
})

describe('Verificar titulo da págian - Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preencehr fomulário com sucesso ', () => {
    cy.get('#firstName').type('Allan')
    cy.get('#lastName').type('Vitorioso')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('11-995583345')
    cy.get('#open-text-area').type('Minha mensagem feita com sucesso')
    cy.contains('button', 'Enviar').click()

    cy.get('span').should('be.visible')
    cy.contains('strong', 'Mensagem enviada com sucesso.').should('be.visible')

  })
})
