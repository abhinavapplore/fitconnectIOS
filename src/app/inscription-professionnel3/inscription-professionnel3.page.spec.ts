import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionProfessionnel3Page } from './inscription-professionnel3.page';

describe('InscriptionProfessionnel3Page', () => {
  let component: InscriptionProfessionnel3Page;
  let fixture: ComponentFixture<InscriptionProfessionnel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionProfessionnel3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionProfessionnel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
