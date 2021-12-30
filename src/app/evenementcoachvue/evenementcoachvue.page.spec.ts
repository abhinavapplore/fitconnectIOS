import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvenementcoachvuePage } from './evenementcoachvue.page';

describe('EvenementcoachvuePage', () => {
  let component: EvenementcoachvuePage;
  let fixture: ComponentFixture<EvenementcoachvuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementcoachvuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvenementcoachvuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
