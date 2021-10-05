import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigaaaAccountMenuComponent } from './gigaaa-account-menu.component';

describe('GigaaaAccountMenuComponent', () => {
  let component: GigaaaAccountMenuComponent;
  let fixture: ComponentFixture<GigaaaAccountMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigaaaAccountMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigaaaAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
