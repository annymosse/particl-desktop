import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';

import { UpdaterComponent } from './updater.component';

describe('UpdaterComponent', () => {
  let component: UpdaterComponent;
  let fixture: ComponentFixture<UpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ UpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
