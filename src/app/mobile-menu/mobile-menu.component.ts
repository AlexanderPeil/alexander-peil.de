import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Input() hideMobileMenu: boolean  = false;
  @Input() hideButton: boolean = true;
  @Input() mobileMenu: boolean = true;
  @Output() closeMobileMenu: EventEmitter<void> = new EventEmitter<void>();

  onCloseMobileMenu() {
    this.closeMobileMenu.emit();
    console.log(this.mobileMenu, this.hideButton);
    this.mobileMenu = false;
    this.hideButton = false;
    this.hideMobileMenu  = true;
    console.log(this.mobileMenu, this.hideButton);    
  }
}

