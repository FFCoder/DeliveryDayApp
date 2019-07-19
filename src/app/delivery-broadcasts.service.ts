import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeliveryMessage } from './delivery-message';

export interface Message {message: string};

@Injectable({
  providedIn: 'root'
})
export class DeliveryBroadcastsService {
  private DeliveryBroadcastsCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;


  /**
   * Creates an instance of delivery broadcasts service.
   * @param afs
   */
  constructor(private afs: AngularFirestore) {
    this.DeliveryBroadcastsCollection = afs.collection<Message>('DeliveryBroadcasts');
    this.messages = this.DeliveryBroadcastsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
   }


   /**
    * Gets messages from firestore collection and returns an Observable
    * @returns messages
    */
   public getMessages(): Observable<Message[]> {
     return this.messages;
   }

   public getMessageRef(messageContent: string){
    return  this.DeliveryBroadcastsCollection.ref.where('message', '==', messageContent);
   }

   /**
    * Adds message to firestore Collection
    * @param message
    */
   public addMessage(message: DeliveryMessage) {
     this.DeliveryBroadcastsCollection.add({message: message.message});
   }
   /**
    * Deletes message (document) from the firestore collection
    * @param document
    */
   public deleteMessage(document: AngularFirestoreDocument) {

     document.delete();
   }

   /**
    * Deletes all messages
    */
   public deleteAllMessages() {
     const ref = this.afs.collection('DeliveryBroadcasts').ref;
     const query = ref.orderBy('__name__');
     query.get().then((snapshot) => {
       snapshot.docs.forEach((doc) => {
         doc.ref.delete();
       });
     });

   }

}
