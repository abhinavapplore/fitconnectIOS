import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchreviewPage } from './watchreview.page';

describe('WatchreviewPage', () => {
  let component: WatchreviewPage;
  let fixture: ComponentFixture<WatchreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
