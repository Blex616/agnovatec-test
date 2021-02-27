import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service/service.service'
import { EventProxyService } from '../../event-proxy.service'

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  data: any;
  subscription: any;

  constructor(private service: ServiceService, private eventProxyService: EventProxyService) {
    this.data = [];
   }

  ngOnInit(): void {
    this.subscription = this.eventProxyService.getEventSubject().subscribe((param: any) => {
      this.data = []
      if (param !== undefined && param != 'Seleccione') {
        var dataService: Array<any>;
        dataService = this.service.getData();
        this.data = dataService.filter(item => item.id == param)[0].versions[0].productOfferingPrices
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
