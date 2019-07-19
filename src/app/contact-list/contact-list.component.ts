import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../contacts.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  service: ContactsService;
  contacts: Observable<Contact[]>;
  contact: Contact;
  modal: NgbModalRef;
  modalService: NgbModal;

  constructor(Cservice: ContactsService, modalService: NgbModal) {
    this.service = Cservice;
    this.contact = {
      name: '',
      phoneNumber: ''
    };
    this.modalService = modalService;
  }
  getContacts(){
    this.contacts = this.service.getContacts();
  }
  addContact(contact: Contact){
    this.service.addContact(contact);
  }

  ngOnInit() {
    this.getContacts();
  }
  open(content){
    this.modal = this.modalService.open(content);

  }
  close() {
    this.service.addContact(this.contact);
    this.modal.close();
    this.contact.name = '';
    this.contact.phoneNumber = '';
  }



}
