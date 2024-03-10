declare namespace Cypress {
    interface Chainable<Subject> {
        CheckPathname(pathname: any): Chainable<any>
        AssertText(prevSubject: any, subject: any, ExpectedText: any, isEqual: any): Chainable<any>
        Count(prevSubject: any, subject: any): Chainable<any>
  }
}