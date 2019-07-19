import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class HospitalTransactionsService {
  store: AngularFirestore;
  HospitalTransactionsCollection: AngularFirestoreCollection;

  constructor(afs: AngularFirestore) {
    this.store = afs;
    this.HospitalTransactionsCollection = this.store.collection('HospitalTransactions');
  }
  addTransaction(){
    this.HospitalTransactionsCollection.add({timeEntered: firestore.Timestamp.fromDate(new Date(Date.now()))});
  }
}
