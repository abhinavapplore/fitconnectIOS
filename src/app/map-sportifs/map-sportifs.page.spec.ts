import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapSportifsPage } from './map-sportifs.page';

describe('MapSportifsPage', () => {
  let component: MapSportifsPage;
  let fixture: ComponentFixture<MapSportifsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSportifsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSportifsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
