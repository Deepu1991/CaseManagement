import '../support/commands';
import '../support/pages/weightLossEligibilityIntakeFormPage';
import weightLossEligibilityIntakeFormPage from '../support/pages/weightLossEligibilityIntakeFormPage';

let weightLossEligibilityIntakeForm =new weightLossEligibilityIntakeFormPage();

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
      //cy.wait(20000);
    /*  weightLossEligibilityIntakeForm.weightLossEligibilityIntakeFormLink().click();
      cy.wait(2000);
      cy.fixture('formData').then((formData) => {
      weightLossEligibilityIntakeForm.firstName().type(formData.firstName);
      weightLossEligibilityIntakeForm.firstNameContinueBtn().click();
      weightLossEligibilityIntakeForm.lastName().type(formData.lastName);
      weightLossEligibilityIntakeForm.month().click();
      weightLossEligibilityIntakeForm.selectMonth().click();
      cy.contains(formData.month).click(); 
      cy.contains(formData.day).click();
      cy.get('div:nth-child(5)  div > button').click();
      cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click().click();
      cy.contains(formData.year).click();
      weightLossEligibilityIntakeForm.dobContinueBtn().click();
      weightLossEligibilityIntakeForm.sex().type(formData.sex);
      weightLossEligibilityIntakeForm.sexContinueBtn().click();
      weightLossEligibilityIntakeForm.email().type(formData.email);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.input().type(formData.phone);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.input().type(formData.address);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.input().type(formData.city);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.input().type(formData.city);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.input().type(formData.state);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.zipCode);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.pronouns);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.weightPounds);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.healthGoals);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.pastWeightLossMethods);
      weightLossEligibilityIntakeForm.continueBtn().click(); 
      weightLossEligibilityIntakeForm.input().type(formData.medicalDiagnosis);
      weightLossEligibilityIntakeForm.continueBtn().click();
      weightLossEligibilityIntakeForm.submitBtn().click();
      weightLossEligibilityIntakeForm.submitConfirmBtn().click();
      weightLossEligibilityIntakeForm.successMsgTxt()
      .should("have.text"," Thank you for your submission. We have sent you a confirmation email for your records. ");
      weightLossEligibilityIntakeForm.closeBtn().click();
      });*/
      });
    });


 describe("Testing for Filling the form", () => {
    it('should fill out the form and submit it successfully using fixture data', () => {
      cy.visit(Cypress.env('request_url'));
      cy.wait(20000);
      weightLossEligibilityIntakeForm.weightLossEligibilityIntakeFormLink.click();
      cy.wait(2000);
      cy.fixture('formData').then((formData) => {
      weightLossEligibilityIntakeForm.firstName.type(formData.firstName);
      weightLossEligibilityIntakeForm.firstNameContinueBtn.click();
      weightLossEligibilityIntakeForm.lastName.type(formData.lastName);
      weightLossEligibilityIntakeForm.month.click();
      weightLossEligibilityIntakeForm.selectMonth.click();
      cy.contains(formData.month).click(); 
      cy.contains(formData.day).click();
      cy.get('div:nth-child(5)  div > button').click();
      cy.get('.q-date__view > :nth-child(1) > .q-btn > .q-btn__content > .q-icon').click().click();
      cy.contains(formData.year).click();
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.sex);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.email);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.phone);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.address);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.city);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.city);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.input.type(formData.state);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.zipCode);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.pronouns);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.weightPounds);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.healthGoals);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.pastWeightLossMethods);
      weightLossEligibilityIntakeForm.continueBtn.click(); 
      weightLossEligibilityIntakeForm.input.type(formData.medicalDiagnosis);
      weightLossEligibilityIntakeForm.continueBtn.click();
      weightLossEligibilityIntakeForm.submitBtn.click();
      weightLossEligibilityIntakeForm.submitConfirmBtn.click();
      cy.wait(5000);
      weightLossEligibilityIntakeForm.successMsgTxt
      .should("have.text"," Thank you for your submission. We have sent you a confirmation email for your records. ");
      weightLossEligibilityIntakeForm.closeBtn.click();
      });
      });
    });

     
   
      
  


   