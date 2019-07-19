import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../contacts.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  animations: [

  ],
})
export class ContactListComponent implements OnInit {
  service: ContactsService;
  contacts: Observable<Contact[]>;
  contact: Contact;
  modal: NgbModalRef;
  modalService: NgbModal;
  math = Math;


  constructor(Cservice: ContactsService, modalService: NgbModal) {
    this.service = Cservice;
    this.contact = {
      name: '',
      phoneNumber: ''
    };
    this.modalService = modalService;
  }

  clearContactInfo(){
    this.contact.name = '';
    this.contact.phoneNumber = '';
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
  editContact(contact: Contact, modalRef: NgbModalRef) {
    this.contact = contact;
    this.modal = modalRef;
    this.open(modalRef);

  }
  deleteContact(contact: Contact) {
    this.service.deleteContact(contact);
    this.clearContactInfo();
    this.modal.close();

  }
  updateContact(contact: Contact) {


  }



}
