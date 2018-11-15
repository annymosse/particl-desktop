import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from 'app/core/core.module';
import { CoreUiModule } from 'app/core-ui/core-ui.module';
import { ModalsModule } from 'app/modals/modals.module';

import { AddProposalComponent } from './add-proposal.component';
import { ProposalsService } from 'app/wallet/proposals/proposals.service';
import { ModalsHelperService } from 'app/modals/modals-helper.service';

describe('AddProposalComponent', () => {
  let component: AddProposalComponent;
  let fixture: ComponentFixture<AddProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProposalComponent ],
      imports: [
        CoreUiModule.forRoot(),
        CoreModule.forRoot(),
        ModalsModule.forRoot(),
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        ProposalsService,
        ModalsHelperService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
