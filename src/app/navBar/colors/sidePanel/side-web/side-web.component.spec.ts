import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWebComponent } from './side-web.component';

describe('SideWebComponent', () => {
  let component: SideWebComponent;
  let fixture: ComponentFixture<SideWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
