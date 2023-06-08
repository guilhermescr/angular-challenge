import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSelectComponent } from './posts-select.component';

describe('PostsSelectComponent', () => {
  let component: PostsSelectComponent;
  let fixture: ComponentFixture<PostsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
