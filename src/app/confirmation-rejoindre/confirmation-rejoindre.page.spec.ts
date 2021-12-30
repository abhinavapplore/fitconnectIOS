import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmationRejoindrePage } from './confirmation-rejoindre.page';

describe('ConfirmationRejoindrePage', () => {
  let component: ConfirmationRejoindrePage;
  let fixture: ComponentFixture<ConfirmationRejoindrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationRejoindrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationRejoindrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
