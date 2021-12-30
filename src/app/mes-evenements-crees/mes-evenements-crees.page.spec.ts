import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesEvenementsCreesPage } from './mes-evenements-crees.page';

describe('MesEvenementsCreesPage', () => {
  let component: MesEvenementsCreesPage;
  let fixture: ComponentFixture<MesEvenementsCreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEvenementsCreesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesEvenementsCreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
