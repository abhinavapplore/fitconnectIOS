import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowlistPage } from './followlist.page';

describe('FollowlistPage', () => {
  let component: FollowlistPage;
  let fixture: ComponentFixture<FollowlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
