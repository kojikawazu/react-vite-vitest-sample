describe('Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('/'); // ContactページのURLに合わせて変更
    });
  
    it('should render contact page correctly', () => {
      cy.get('h1').contains('お問い合わせページ').should('be.visible');
      cy.get('label[for="name"]').contains('お名前').should('be.visible');
      cy.get('label[for="email"]').contains('Eメールアドレス').should('be.visible');
      cy.get('label[for="password"]').contains('パスワード').should('be.visible');
      cy.get('button[type="submit"]').contains('送信').should('be.visible');
    });
  
    it('should handle form submission correctly', () => {
      cy.get('input[id="name"]').type('テストネーム');
      cy.get('input[id="email"]').type('test@example.com');
      cy.get('input[id="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // フォームが送信された後の動作を確認する
      cy.get('input[id="name"]').should('have.value', '');
      cy.get('input[id="email"]').should('have.value', '');
      cy.get('input[id="password"]').should('have.value', '');
    });
  
    it('should show validation errors on empty submit', () => {
      cy.get('button[type="submit"]').click();
  
      cy.contains('名前は必須です').should('be.visible');
      cy.contains('Eメールは必須です').should('be.visible');
      cy.contains('パスワードは必須です').should('be.visible');
    });
  });
  