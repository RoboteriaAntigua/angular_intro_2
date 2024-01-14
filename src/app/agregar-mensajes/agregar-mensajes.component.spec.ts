import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMensajesComponent } from './agregar-mensajes.component';

describe('AgregarMensajesComponent', () => {
  let component: AgregarMensajesComponent;
  let fixture: ComponentFixture<AgregarMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMensajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
