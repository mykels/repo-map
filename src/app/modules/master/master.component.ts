import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapService} from '../angular-cesium/services/map.service';

@Component({
  selector: 'rm-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements AfterViewInit {
  home: any;
  fighterPosition = Cesium.Cartesian3.fromDegrees(32, 34, 1000);

  constructor(private mapService: MapService) {

  }

  ngAfterViewChecked(): void {
    this.mapService.onInit().subscribe(() => {
      this.home = ({
        destination: Cesium.Cartesian3.fromDegrees(32, 34, 150000)
      });
    });
  }
}
