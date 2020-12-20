/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FactsListComponent } from './facts-list.component';

describe('FactsListComponent', () => {
  let component: FactsListComponent;
  let fixture: ComponentFixture<FactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
