import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFrontendComponent } from './category-frontend.component';

describe('CategoryFrontendComponent', () => {
  let component: CategoryFrontendComponent;
  let fixture: ComponentFixture<CategoryFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
