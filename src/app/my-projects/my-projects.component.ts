import { Component, AfterViewInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
declare var AOS: any;


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements AfterViewInit {


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
