import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvenementsCoachPage } from './evenements-coach.page';

describe('EvenementsCoachPage', () => {
  let component: EvenementsCoachPage;
  let fixture: ComponentFixture<EvenementsCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementsCoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvenementsCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
