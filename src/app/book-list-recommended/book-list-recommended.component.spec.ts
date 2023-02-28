import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListRecommendedComponent } from './book-list-recommended.component';

describe('BookListRecommendedComponent', () => {
  let component: BookListRecommendedComponent;
  let fixture: ComponentFixture<BookListRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListRecommendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
