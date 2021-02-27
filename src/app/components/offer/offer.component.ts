import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service/service.service'
import { EventProxyService } from '../../event-proxy.service'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  data: any;

  constructor(private service: ServiceService, private eventProxyService: EventProxyService) { }

  ngOnInit(): void {
    this.data = this.service.getData();
  }

  onOptionsSelected(value: string) {
    this.eventProxyService.triggerSomeEvent(value);
  }

}
