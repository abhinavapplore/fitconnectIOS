import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesEvenementsPage } from './mes-evenements.page';

describe('MesEvenementsPage', () => {
  let component: MesEvenementsPage;
  let fixture: ComponentFixture<MesEvenementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEvenementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesEvenementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
