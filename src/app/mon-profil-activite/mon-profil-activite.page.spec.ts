import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonProfilActivitePage } from './mon-profil-activite.page';

describe('MonProfilActivitePage', () => {
  let component: MonProfilActivitePage;
  let fixture: ComponentFixture<MonProfilActivitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonProfilActivitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonProfilActivitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
