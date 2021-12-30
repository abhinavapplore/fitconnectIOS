import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachParticipatedEventsComponent } from './coach-participated-events.component';

describe('CoachParticipatedEventsComponent', () => {
  let component: CoachParticipatedEventsComponent;
  let fixture: ComponentFixture<CoachParticipatedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachParticipatedEventsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachParticipatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
