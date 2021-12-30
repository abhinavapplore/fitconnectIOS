import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreerEvenementPage } from './creer-evenement.page';

describe('CreerEvenementPage', () => {
  let component: CreerEvenementPage;
  let fixture: ComponentFixture<CreerEvenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerEvenementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreerEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
