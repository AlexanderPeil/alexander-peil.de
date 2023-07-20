import { Component, Renderer2 } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller) { }


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


  addBodyClass(className: string): void {
    this.renderer.addClass(document.body, className);
  }


  removeBodyClass(className: string): void {
    this.renderer.removeClass(document.body, className);
  }


  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
