import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClickNantesParticuliersPage } from './click-nantes-particuliers.page';

describe('ClickNantesParticuliersPage', () => {
  let component: ClickNantesParticuliersPage;
  let fixture: ComponentFixture<ClickNantesParticuliersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickNantesParticuliersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClickNantesParticuliersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
