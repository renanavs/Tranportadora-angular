import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransportadoraComponent } from './create-transportadora.component';

describe('CreateTransportadoraComponent', () => {
  let component: CreateTransportadoraComponent;
  let fixture: ComponentFixture<CreateTransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
