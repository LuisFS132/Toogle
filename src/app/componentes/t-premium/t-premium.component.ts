import { Component, OnInit } from '@angular/core';

// Declarar la interfaz Window con la propiedad paypal
declare global {
  interface Window {
    paypal: any;
  }
}

@Component({
  selector: 'app-t-premium',
  templateUrl: './t-premium.component.html',
  styleUrls: ['./t-premium.component.css']
})
export class TPremiumComponent implements OnInit {
  
  ngOnInit() {
    this.initPayPalButton();
  }

  private initPayPalButton() {
    if (window.paypal) {
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe',
          height: 45
        },
        createSubscription: function(data: any, actions: any) {
          return actions.subscription.create({
            plan_id: 'P-253029403E212060HM7WLWZQ'
          });
        },
        onApprove: function(data: any, actions: any) {
          alert(data.subscriptionID);
        }
      }).render('#paypal-button-container-P-253029403E212060HM7WLWZQ');
    }
  }
}
