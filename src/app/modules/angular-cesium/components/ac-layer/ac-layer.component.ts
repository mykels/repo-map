import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ac-layer',
  template : '<ng-content></ng-content>',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcLayerComponent implements OnInit {
  @Input() show = true;

  ngOnInit(): void {
  }

}
