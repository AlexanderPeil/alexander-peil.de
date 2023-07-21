import { Component, AfterViewInit } from '@angular/core';
declare var AOS: any;


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})


export class AboutMeComponent implements AfterViewInit {


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

}
