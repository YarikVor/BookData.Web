import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAllComponent } from './book-list-all.component';

describe('BookListAllComponent', () => {
  let component: BookListAllComponent;
  let fixture: ComponentFixture<BookListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
