import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent   {

constructor(private viewportScroller: ViewportScroller) { }


/**
 * Scrolls the viewport to the element specified by its identifier.
 * @param {string} elementId - The unique ID of the DOM element to scroll to. 
 */
scrollToElement(elementId: string): void {
  this.viewportScroller.scrollToAnchor(elementId);
}

}
