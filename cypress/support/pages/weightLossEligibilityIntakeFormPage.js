class weightLossEligibilityIntakeFormPage {
    get logoutLink() {
      return cy.get('#q-app > div > header > div > button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase');
    }

    get logout() {
        return cy.get('#q-portal--menu--3 > div > div:nth-child(3) > div.q-item__section.column.q-item__section--main.justify-center');
      }

    get weightLossEligibilityIntakeFormLink() {
      return cy.get('[data-testid="requests-list"] > :nth-child(2) > .q-item__section > :nth-child(1)');
    }
  
    get firstName() {
      return cy.get('input.q-field__native.q-placeholder');
    }
  
    get firstNameContinueBtn() {
      return cy.get('div.q-stepper__step div > div > button');
    }
  
    get lastName() {
      return cy.get('input.q-field__native.q-placeholder');
    }
  
    get month() {
      return cy.get('.q-stepper__nav > .q-btn--unelevated');
    }
  
    get selectMonth() {
      return cy.get('.relative-position.col > div > .q-btn > .q-btn__content > .block');
    }

    get continueBtn() {
        return cy.get(' div.q-stepper__nav.q-gutter-md>button:nth-child(2)')
  }

  get input() {
    return cy.get('input.q-field__native.q-placeholder');
}
   
get submitBtn() {
    return cy.get('button[type="submit"]');
}

get submitConfirmBtn() {
    return cy.get("[data-testid='submit-form-dialog-submit-button']")

}

get successMsgTxt() {
    return cy.get('div.q-dialog__inner.flex.no-pointer-events.q-dialog__inner--minimized.q-dialog__inner--standard.fixed-full.flex-center > div > div.q-card__section.q-card__section--vert')
}
get closeBtn() {
    return cy.get("[data-testid='close-dialog-button']")
}
}
  
  export default weightLossEligibilityIntakeFormPage;
  