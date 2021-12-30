import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachviewprofilePage } from './coachviewprofile.page';

describe('CoachviewprofilePage', () => {
  let component: CoachviewprofilePage;
  let fixture: ComponentFixture<CoachviewprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachviewprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachviewprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
