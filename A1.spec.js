class RegistrationPage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://demoqa.com/automation-practice-form');
    }
  
    async fillForm(data) {
      const page = this.page;
  
      await page.fill('Karthik', data.firstName);
      await page.fill('S', data.lastName);
      await page.fill('karthik@gmail.com', data.email);
      await page.locator(`input[name="gender"][value="${data.gender}"]`).check();
      await page.fill('1234567891', data.phone);
      await page.click('08-08-2025');
      await page.selectOption('.react-datepicker__year-select', data.dobYear);
      await page.selectOption('.react-datepicker__month-select', data.dobMonth);
      await page.click(`.react-datepicker__day--0${data.dobDay}`);
      await page.fill('QA', data.subjects);
      await page.keyboard.press('Enter');
      await page.click(`label[for="hobbies-checkbox-${data.hobbyIndex}"]`);
      await page.setInputFiles('a1.png', data.picturePath);
      await page.fill('Belthangady', data.address);
      await page.click('Delhi');
      await page.locator(`div[id^="react-select-3-option"]`, { hasText: data.state }).click();
      await page.click('NCR');
      await page.locator(`div[id^="react-select-4-option"]`, { hasText: data.city }).click();
    }
  
    async submitForm() {
      await this.page.click('#submit');
    }
  
    async validateModal(data) {
      const modal = this.page.locator('.modal-content');
      await modal.waitFor({ state: 'visible' });
      await modal.waitFor({ timeout: 5000 });
      await modal.screenshot({ path: 'test-results/success.png' });
  
      const modalText = await modal.textContent();
      if (!modalText.includes(data.firstName) || !modalText.includes(data.lastName) || !modalText.includes(data.email)) {
        throw new Error('Validation failed in confirmation modal');
      }
    }
  }
  
  module.exports = { RegistrationPage };
  