import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreescoachPage } from './creescoach.page';

describe('CreescoachPage', () => {
  let component: CreescoachPage;
  let fixture: ComponentFixture<CreescoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreescoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreescoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
