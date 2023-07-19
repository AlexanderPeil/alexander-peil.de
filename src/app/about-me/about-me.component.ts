import { Component, AfterViewInit } from '@angular/core';
declare var AOS: any;


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})


export class AboutMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init();
    AOS.refresh();
  }

}
