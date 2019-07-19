import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DeliveryConfirmTransactionsService {
  store: AngularFirestore;
  DeliveryTransactionCollection: AngularFirestoreCollection;

  constructor(afs: AngularFirestore) {
    this.store = afs;
    this.DeliveryTransactionCollection = this.store.collection('deliveryTransactions');
  }
  addTransaction() {{
    this.DeliveryTransactionCollection.add({timeEntered: firestore.Timestamp.fromDate(new Date(Date.now()))});
  }
}
}
