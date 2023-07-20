import { Component, Renderer2 } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.performScrolling();
      }
    });
  }


  mobileMenu: boolean = false;
  overflowHidden: boolean = false;
  elementId!: string;


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
    if (this.router.url !== '/') {
      this.elementId = elementId;
      this.router.navigateByUrl('/');
    } else {
      this.elementId = elementId;
      this.performScrolling();
    }
  }



  performScrolling() {
    setTimeout(() => {
        const element = document.getElementById(this.elementId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
}



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
