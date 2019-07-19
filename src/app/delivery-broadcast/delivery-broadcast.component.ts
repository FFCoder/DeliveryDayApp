import { Component, OnInit } from '@angular/core';
import { DeliveryBroadcastsService } from '../delivery-broadcasts.service';
import { Observable } from 'rxjs';
import { Message } from '../delivery-broadcasts.service';
import { DeliveryMessage } from '../delivery-message';

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delivery-broadcast',
  templateUrl: './delivery-broadcast.component.html',
  styleUrls: ['./delivery-broadcast.component.css']
})
export class DeliveryBroadcastComponent implements OnInit {
  messages: Observable<Message[]>;
  service: DeliveryBroadcastsService;
  modalRef: NgbModalRef;
  message: DeliveryMessage;



  constructor(private MBservice: DeliveryBroadcastsService, private modalService: NgbModal) {
    this.service = MBservice;
    this.message = new DeliveryMessage('');


   }

  ngOnInit() {
    this.getMessages()
  }
  getMessages() {
    this.messages = this.service.getMessages();
  }
  open(content){
    this.modalRef = this.modalService.open(content);
  }
  close(){
    this.modalRef.close();
    this.service.addMessage(this.message);
    this.message.message = '';

  }
  deleteMessages(){
    this.service.deleteAllMessages();

  }

}
