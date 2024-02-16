describe('Launch website', () => {
    it('launch website', () => {
      cy.visit('https://dev.dubpro.ai/');
      cy.get('#__next > header > div.headerContainer > div > div:nth-child(2) > div > button > div > div:nth-child(1)').click();
      cy.get("input[placeholder='https://www.youtube.com/']").type('https://www.youtube.com/watch?v=RA9KsHy6Ejo')
      cy.get('#rc_select_1').click()
      cy.get('.ant-select-item-option-content').eq(2).click()

    
    });
  });
  
  