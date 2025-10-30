import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingCursorComponent } from './following-cursor.component';

describe('FollowingCursorComponent', () => {
  let component: FollowingCursorComponent;
  let fixture: ComponentFixture<FollowingCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowingCursorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
