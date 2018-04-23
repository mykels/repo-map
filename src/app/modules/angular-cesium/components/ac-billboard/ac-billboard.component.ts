import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'ac-billboard',
  template: '',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcBillboardComponent implements OnInit {
  @Input() position: any;
  @Input() image: string;

  constructor(private mapService: MapService) {

  }

  ngOnInit(): void {
    this.mapService.onInit().subscribe(() => {
      const billboards = this.mapService.getViewer().scene.primitives.add(new Cesium.BillboardCollection());
      billboards.add({
        position: this.position,
        image: this.image
      });
    });
  }
}
