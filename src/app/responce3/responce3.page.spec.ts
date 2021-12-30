import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Responce3Page } from './responce3.page';

describe('Responce3Page', () => {
  let component: Responce3Page;
  let fixture: ComponentFixture<Responce3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Responce3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Responce3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
