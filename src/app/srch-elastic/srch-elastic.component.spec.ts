import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrchElasticComponent } from './srch-elastic.component';

describe('SrchElasticComponent', () => {
  let component: SrchElasticComponent;
  let fixture: ComponentFixture<SrchElasticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrchElasticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrchElasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
