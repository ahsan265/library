import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigaaaTopbarComponent } from './gigaaa-topbar.component';

describe('GigaaaTopbarComponent', () => {
  let component: GigaaaTopbarComponent;
  let fixture: ComponentFixture<GigaaaTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigaaaTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigaaaTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
