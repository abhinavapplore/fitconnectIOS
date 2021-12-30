import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionProfessionnel2Page } from './inscription-professionnel2.page';

describe('InscriptionProfessionnel2Page', () => {
  let component: InscriptionProfessionnel2Page;
  let fixture: ComponentFixture<InscriptionProfessionnel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionProfessionnel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionProfessionnel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
