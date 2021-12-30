import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentViewer,DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.page.html',
  styleUrls: ['./conditions.page.scss'],
})
export class ConditionsPage implements OnInit {
  paymentConditions:boolean;
  cgu:boolean;
  constructor(public router: Router, public route: ActivatedRoute,private document: DocumentViewer) {
    this.route.queryParams.subscribe(params => {
      
   if (params && params.special) {
        var details = JSON.parse(params.special);
        console.log(details);
        if(details.pageRoute=="paymentpage"){

    //       const options: DocumentViewerOptions = {
    //         title: 'CGV Document'
    //       }
    this.cgu=false;
    //       this.document.viewDocument('../../assets/payment.pdf', 'application/pdf', options)
        }
    // console.log("going");
         
        }else{
         
        this.cgu=true;
        }
        }); 
   }

  ngOnInit() {
  }

}
