import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  
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


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Info dass gesendet wird
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://w01e05ed.kasserver.com/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }      
    );
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

      //Info dass Nachricht gesendet wurde
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
