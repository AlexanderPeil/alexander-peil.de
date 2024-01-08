import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { TopSectionComponent } from '../top-section/top-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ContactComponent } from '../contact/contact.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        TopSectionComponent,
        AboutMeComponent,
        MySkillsComponent,
        MyProjectsComponent,
        ContactComponent 
      ]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
