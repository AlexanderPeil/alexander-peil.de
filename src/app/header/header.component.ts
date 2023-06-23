import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Input() mobileMenu: boolean = false;
  // @Input() hideButton: boolean = false;
  // @Input() hideMobileMenu: boolean = true;
  // @Output() openMobileMenu: EventEmitter<void> = new EventEmitter<void>();

  // toggleMobileMenu() {
  //   this.openMobileMenu.emit();
  //   this.hideMobileMenu = false;
  //   this.mobileMenu = true;
  //   this.hideButton = true;
  // }

  mobileMenu: boolean = false;

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
