import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodostWrapperComponent } from './todos-wrapper.component';

describe('TodoListWrapperComponent', () => {
  let component: TodostWrapperComponent;
  let fixture: ComponentFixture<TodostWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodostWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodostWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
