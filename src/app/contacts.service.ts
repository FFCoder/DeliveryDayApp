import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Contact {name: string; phoneNumber: string};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  currentContact: Contact;
  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Contact>('contacts');
    this.contacts = this.contactCollection.valueChanges();
    this.currentContact = {
      name: '',
      phoneNumber: ''
    };
  }

  public getContacts(): Observable<Contact[]> {
    return this.contacts;
  }
  public addContact(contact: Contact) {
    this.contactCollection.add(contact);
  }
}
