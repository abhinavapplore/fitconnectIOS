import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvenementcoachPage } from './evenementcoach.page';

describe('EvenementcoachPage', () => {
  let component: EvenementcoachPage;
  let fixture: ComponentFixture<EvenementcoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementcoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvenementcoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
