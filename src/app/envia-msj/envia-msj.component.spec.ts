import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaMsjComponent } from './envia-msj.component';

describe('EnviaMsjComponent', () => {
  let component: EnviaMsjComponent;
  let fixture: ComponentFixture<EnviaMsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviaMsjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviaMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
