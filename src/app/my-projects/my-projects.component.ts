import { Component, AfterViewInit } from '@angular/core';
declare var AOS: any;


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init();
    AOS.refresh();
  }

}
