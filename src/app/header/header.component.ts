import { Component, Renderer2 } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   * Constructs a HeaderComponent instance.
   * Subscribes to the router's events and calls the `performScrolling` method on navigation end events. 
   * @param {Renderer2} renderer - The Angular Renderer2 service.
   * @param {ViewportScroller} viewportScroller - The Angular service to help with scrolling. 
   * @param {Router} router - The Angular Router service. 
   */
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


  /**
   * Toggles the mobile menu state and applies or removes the 'overflow-hidden'
   * class from the body depending on the new state of the mobile menu.
   */
  toggleMenu(): void {
    this.mobileMenu = !this.mobileMenu;
    if (this.mobileMenu) {
      this.addBodyClass('overflow-hidden');
    } else {
      this.removeBodyClass('overflow-hidden');
    }
  }


  /**
   * Adds the specified class to the body.
   * @param {string} className - The class to add. 
   */
  addBodyClass(className: string): void {
    this.renderer.addClass(document.body, className);
  }


  /**
   * Removes the specified class from the body.
   * @param {string} className - The class to remove. 
   */
  removeBodyClass(className: string): void {
    this.renderer.removeClass(document.body, className);
  }


  /**
   * Scrolls to the specified element.
   * If the current route is not the root route, stores the element ID and navigates to the root route.
   * Otherwise, performs scrolling to the specified element immediately.
   * @param {string} elementId - The ID of the element to scroll to. 
   */
  scrollToElement(elementId: string): void {
    if (this.router.url !== '/') {
      this.elementId = elementId;
      this.router.navigateByUrl('/');
    } else {
      this.elementId = elementId;
      this.performScrolling();
    }
  }


  /**
   * Performs scrolling to the element with the previously stored ID.
   * The scrolling action is delayed for 500 ms.
   */
  performScrolling() {
    setTimeout(() => {
      const element = document.getElementById(this.elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }


  /**
   * Scrolls to the top of the page.
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
