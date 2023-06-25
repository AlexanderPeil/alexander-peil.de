import { Component, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}

  mobileMenu: boolean = false;
  overflowHidden: boolean = false;

  toggleMenu(): void {
    this.mobileMenu = !this.mobileMenu;
    if (this.mobileMenu) {
      this.addBodyClass('overflow-hidden');
    } else {
      this.removeBodyClass('overflow-hidden');
    }
  }

  // closeMenu(): void {
  //   this.mobileMenu = false;
  //   this.overflowHidden = false;
  // }

  addBodyClass(className: string): void {
    this.renderer.addClass(document.body, className);
  }

  removeBodyClass(className: string): void {
    this.renderer.removeClass(document.body, className);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
