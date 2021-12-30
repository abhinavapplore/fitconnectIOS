import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoacheditprofilePage } from './coacheditprofile.page';

describe('CoacheditprofilePage', () => {
  let component: CoacheditprofilePage;
  let fixture: ComponentFixture<CoacheditprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheditprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoacheditprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
