import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllComponentComponent } from './find-all-component.component';

describe('FindAllComponentComponent', () => {
  let component: FindAllComponentComponent;
  let fixture: ComponentFixture<FindAllComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAllComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
