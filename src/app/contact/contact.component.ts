import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('#form') form: any;
  displayEnterName = false;
  displayEnterEmail = false;
  displayEnterMessage = false;


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


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


  sendMail() {
    // action="https://w01e05ed.kasserver.com/send_mail/send_mail.php"

  }
}
