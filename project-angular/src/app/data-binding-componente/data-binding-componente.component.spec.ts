import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponenteComponent } from './data-binding-componente.component';

describe('DataBindingComponenteComponent', () => {
  let component: DataBindingComponenteComponent;
  let fixture: ComponentFixture<DataBindingComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
