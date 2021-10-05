import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigaaaSidebarComponent } from './gigaaa-sidebar.component';

describe('GigaaaSidebarComponent', () => {
  let component: GigaaaSidebarComponent;
  let fixture: ComponentFixture<GigaaaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigaaaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigaaaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
