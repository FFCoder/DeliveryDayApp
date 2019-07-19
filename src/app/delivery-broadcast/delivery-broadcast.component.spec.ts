import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBroadcastComponent } from './delivery-broadcast.component';

describe('DeliveryBroadcastComponent', () => {
  let component: DeliveryBroadcastComponent;
  let fixture: ComponentFixture<DeliveryBroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
