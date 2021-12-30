import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupconversationPage } from './groupconversation.page';

describe('GroupconversationPage', () => {
  let component: GroupconversationPage;
  let fixture: ComponentFixture<GroupconversationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupconversationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupconversationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
