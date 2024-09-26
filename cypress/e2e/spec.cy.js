import '../support/commands';

describe("Addash Homepage smoke tests : Financial MID", () => {
  after(() => {
    cy.get('#q-app > div > header > div > button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase').click();
    cy.get('#q-portal--menu--3 > div > div:nth-child(3) > div.q-item__section.column.q-item__section--main.justify-center').click();
  });
});

  describe('Login Test', () => {
    it('should log in successfully', () => {
      cy.login();
      cy.title().should('include', 'Case Management'); 
      cy.wait(20000);
    });
  });

  describe("Testing for Filling the form", () => {
    it('should fill out the form and submit it successfully using fixture data', () => {
      cy.visit(Cypress.env('request_url'));
      cy.wait(2000);
      cy.get('[data-testid="requests-list"] > :nth-child(2) > .q-item__section > :nth-child(1)').click();
      cy.fixture('formData').then((formData) => {
       cy.get('input.q-field__native.q-placeholder').type(formData.firstName);
       cy.get('div.q-stepper__step div > div > button').click();
       cy.get('input.q-field__native.q-placeholder').type(formData.lastName);
       cy.get('.q-stepper__nav > .q-btn--unelevated').click();
       cy.get('.relative-position.col > div > .q-btn > .q-btn__content > .block').click();
       cy.contains(formData.month).click(); 
       cy.contains(formData.day).click();
       cy.get('div:nth-child(5)  div > button').click();
       cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click().click();
       cy.contains(formData.year).click();
      cy.get(' div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.sex);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.email);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.phone);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.address);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.city);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.state);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.zipCode);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.pronouns);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.weightPounds);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.healthGoals);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.pastWeightLossMethods);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('input.q-field__native.q-placeholder').type(formData.medicalDiagnosis);
      cy.get('div.q-stepper__nav.q-gutter-md>button:nth-child(2)').click();
      cy.get('button[type="submit"]').click();
      cy.get("[data-testid='submit-form-dialog-submit-button']").click();
      cy.get('div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.q-card__section.q-card__section--vert')
      .should("have.text"," Thank you for your submission. We have sent you a confirmation email for your records. ");
      cy.get("[data-testid='close-dialog-button']").click();
      });
      });
    });

     
   
      
  


   