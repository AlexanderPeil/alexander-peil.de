import { Component, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare var AOS: any;


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements AfterViewInit {

  constructor(private viewportScroller: ViewportScroller) { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.init();
      AOS.refreshHard();
    }, 1000);
  }
  

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  
  public logosContent: {logos: string, description: string}[] = [
    { logos: '../../assets/img/angular.png', description: 'Angular'},
    { logos: '../../assets/img/ts.png', description: 'TypeSript'},
    { logos: '../../assets/img/js.png', description: 'JavaScript'},
    { logos: '../../assets/img/html.png', description: 'HTML'},
    { logos: '../../assets/img/fb.png', description: 'Firebase'},
    { logos: '../../assets/img/git.png', description: 'GIT'},
    { logos: '../../assets/img/css.png', description: 'CSS'},
    { logos: '../../assets/img/api.png', description: 'Rest-Api'},
    { logos: '../../assets/img/scrum.png', description: 'Scrum'},
    { logos: '../../assets/img/md.png', description: 'Material design'},
  ];
}
