import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
declare var AOS: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  displayEnterName = false;
  displayEnterEmail = false;
  displayEnterMessage = false;
  displaySendMessage = false;


  /**
   * Executes animations on elements after the view initialization.
   * The library is called Animate On Scroll (AOS)
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.init();
      AOS.refreshHard();
    }, 500);
  }


  /**
   * Sends a mail using form data and handles the form UI updates.
   */
  async sendMail() {
    this.disableFields(true);

    let fd = this.prepareFormData();

    await this.sendRequest(fd);

    this.clearFields();
    this.displaySendMessage = true;

    this.resetAfterDelay();
  }


  /**
   * Disables or enables form fields based on the provided parameter.
   * @param {boolean} disable - True to disable the fields, false to enable. 
   */
  disableFields(disable: boolean) {
    let fields = [this.nameField.nativeElement, this.emailField.nativeElement, this.messageField.nativeElement, this.sendButton.nativeElement];
    fields.forEach(field => field.disabled = disable);
  }


  /**
   * Prepares and returns a FormData object with values from the form fields.
   * @returns {FormData} The prepared FormData object.
   */
  prepareFormData() {
    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
    return fd;
  }


  /**
   * Sends a POST request with the provided FormData object.
   * @param {FormData} fd - The FormData object to send with the request.
   * @returns {Promise} The promise representing the fetch request.
   */
  async sendRequest(fd: FormData) {
    await fetch('https://alexander-peil.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });
  }


  /**
   * Clears the values of the form fields.
   */
  clearFields() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }


  /**
   * Resets the form fields and message display status after a delay.
   */
  resetAfterDelay() {
    setTimeout(() => {
      this.disableFields(false);
      this.displaySendMessage = false;
    }, 2000);
  }


  /**
   * Scrolls the viewport to the top of the page.
   * This function uses the window.scrollTo method to smoothly scroll
   * the viewport to the top of the page when called.
   */
  scrollToTop(event: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  /**
   * The following functions are used to control the display of form fields.
   * Each form field has an associated show and hide function that toggles the 
   * display of the form field. For example, showEnterName() will make the name 
   * input field visible, while hideEnterName() will hide it.
   */

  showEnterName() {
    this.displayEnterName = true;
  }


  hideEntername() {
    this.displayEnterName = false;
  }


  showEnterEmail() {
    this.displayEnterEmail = true;
  }


  hideEnterEmail() {
    this.displayEnterEmail = false;
  }


  showEnterMessage() {
    this.displayEnterMessage = true;
  }


  hideEnterMessage() {
    this.displayEnterMessage = false;
  }
}
