import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../services/service/service.service'
import { EventProxyService } from '../../event-proxy.service'


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  data: any;
  subscription: any;

  constructor(private service: ServiceService, private eventProxyService: EventProxyService) { }

  ngOnInit(): void {
    this.subscription = this.eventProxyService.getEventSubject().subscribe((param: any) => {
      this.data = []
      if (param !== undefined && param != 'Seleccione') {
        var dataService = this.service.getData();
        this.data = dataService.filter(item => item.id == param)[0].versions[0].characteristics
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
