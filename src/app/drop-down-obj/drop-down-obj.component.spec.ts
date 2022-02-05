import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownObjComponent } from './drop-down-obj.component';

describe('DropDownObjComponent', () => {
  let component: DropDownObjComponent;
  let fixture: ComponentFixture<DropDownObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
