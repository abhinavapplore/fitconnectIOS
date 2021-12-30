import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportsPracticePage } from './sports-practice.page';

describe('SportsPracticePage', () => {
  let component: SportsPracticePage;
  let fixture: ComponentFixture<SportsPracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsPracticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
