Cypress.Commands.add('login', () => {
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    const loginUrl = Cypress.env('login_url');
  
    cy.visit(loginUrl); // Use environment variable for login URL
  
    cy.get('input[name="email"]').type(email);    // Selector for email input
    cy.get('a[data-testid="login-with-password"]').click();
    cy.get('input[name="password"]').type(password); // Selector for password input
    cy.get('button[type="submit"]').click();
    cy.wait(10000);   // Selector for login button
  });