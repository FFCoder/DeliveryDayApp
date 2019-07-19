import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HospitalTransactionsService } from '../hospital-transactions.service';
import { DeliveryConfirmTransactionsService } from '../delivery-confirm-transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: Router;
  Service: NgbModal;
  modalRef: NgbModalRef;
  hospitalService: HospitalTransactionsService;
  deliveryService: DeliveryConfirmTransactionsService;

  constructor(router: Router, private modalService: NgbModal,
              hospitalService: HospitalTransactionsService,
              deliveryService: DeliveryConfirmTransactionsService) {
    this.router = router;
    this.Service = modalService;
    this.hospitalService = hospitalService;
    this.deliveryService = deliveryService;
  }

  ngOnInit() {
  }
  openDeliveryBroadcast(){
    this.router.navigateByUrl('/broadcast', { skipLocationChange: true });

  }
  openContacts(){
    this.router.navigateByUrl('/contacts', { skipLocationChange: true });
  }
  open(content){
    this.modalRef = this.Service.open(content);
  }
  modalConfirm(){
    console.log('HOSPITAL CONFIRMED');
    this.hospitalService.addTransaction();
    this.modalRef.close();

  }
  BabymodalConfirm(){
    console.log('DELIVERY CONFIRMED');
    this.deliveryService.addTransaction();
    this.modalRef.close();
  }


}
