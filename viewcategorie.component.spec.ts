import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategorieComponent } from './viewcategorie.component';

describe('ViewcategorieComponent', () => {
  let component: ViewcategorieComponent;
  let fixture: ComponentFixture<ViewcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
