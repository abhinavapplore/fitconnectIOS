import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCountry2Page } from './select-country2.page';

describe('SelectCountry2Page', () => {
  let component: SelectCountry2Page;
  let fixture: ComponentFixture<SelectCountry2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCountry2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCountry2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
