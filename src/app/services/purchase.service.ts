import { EventEmitter, Injectable } from '@angular/core';
// import {
//   InAppPurchase2,
//   IAPProduct,
// } from '@ionic-native/in-app-purchase-2/ngx';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  // products: Array<IAPProduct> = [];
  successEvent = new EventEmitter();

  constructor(
    // public store: InAppPurchase2
    ) {}

  // registerProducts() {
  //   this.store.register({
  //     id: 'simple_plan_1',
  //     type: this.store.CONSUMABLE,
  //   });
  //   this.store.register({
  //     id: 'simple_plan_2',
  //     type: this.store.CONSUMABLE,
  //   });
  //   this.store.register({
  //     id: 'simple_plan_3',
  //     type: this.store.CONSUMABLE,
  //   });
  //   this.store.refresh();
  // }

  setupListeners() {
    // this.store.ready(() => {
    //   // alert('Store is ready');

    //   console.log('Products: ' + JSON.stringify(this.store.products));
    //   console.log(JSON.stringify(this.store.get('my_product_id')));
    // });
    // // Register event handlers for the specific product
    // this.store.when('product').registered((product: IAPProduct) => {
    //   console.log('Registered: ' + JSON.stringify(product));
    //   // alert('Registered: ' + JSON.stringify(product));
    // });

    // this.store.when('product').updated((product: IAPProduct) => {
    //   console.log('Updated' + JSON.stringify(product));
    //   // alert('Updated' + JSON.stringify(product));
    // });

    // // User closed the native purchase dialog
    // this.store
    //   .when('product')
    //   .cancelled((product) => {
    //     console.error('Purchase was Cancelled');
    //     // alert('Purchase was cancelled.');
    //   })
    //   .approved((product: IAPProduct) => {
    //     // call the success function with the product
    //     console.log('PRODUCT APPROVED');
    //     // alert('product is approved');
    //     product.verify();
    //   })
    //   .verified((product: IAPProduct) => {
    //     // alert('product is validated');
    //     this.successEvent.emit(product);
    //     product.finish();
    //   });

    // // Track all store errors
    // this.store.error((err) => {
    //   console.error('Store Error ' + JSON.stringify(err));
    //   // alert('Store Error ' + JSON.stringify(err));
    // });
  }

  order(planId) {
    // alert('will order' + planId);

    // this.store.order(planId);
  }
}
