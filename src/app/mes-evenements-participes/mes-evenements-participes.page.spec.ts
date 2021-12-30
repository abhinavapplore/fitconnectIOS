import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesEvenementsParticipesPage } from './mes-evenements-participes.page';

describe('MesEvenementsParticipesPage', () => {
  let component: MesEvenementsParticipesPage;
  let fixture: ComponentFixture<MesEvenementsParticipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEvenementsParticipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesEvenementsParticipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
