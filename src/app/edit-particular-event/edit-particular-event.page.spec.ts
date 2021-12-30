import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditParticularEventPage } from './edit-particular-event.page';

describe('EditParticularEventPage', () => {
  let component: EditParticularEventPage;
  let fixture: ComponentFixture<EditParticularEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParticularEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditParticularEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
