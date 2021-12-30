import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilActivitePage } from './profil-activite.page';

describe('ProfilActivitePage', () => {
  let component: ProfilActivitePage;
  let fixture: ComponentFixture<ProfilActivitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilActivitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilActivitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
