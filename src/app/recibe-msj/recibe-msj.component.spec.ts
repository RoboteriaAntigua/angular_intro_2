import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeMsjComponent } from './recibe-msj.component';

describe('RecibeMsjComponent', () => {
  let component: RecibeMsjComponent;
  let fixture: ComponentFixture<RecibeMsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeMsjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
