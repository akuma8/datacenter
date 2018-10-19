import {Component, Input, OnInit, ChangeDetectionStrategy, OnChanges} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnInit, OnChanges {
  private _value: number=0;
  private _max: number=100;

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) this._value =0;
    this._value = value;
  }

  @Input('available')
  set max(max: number){
    if (isNaN(max)) max =100;
    this._max = max;
  }

  get value(): number {
    return this._value;
  }
  get max(): number {
    return this._max;
  }

  ngOnChanges(changes){
    if (changes.value && isNaN(changes.value.currentValue)) this._value =0;
    if (changes.max && isNaN(changes.max)) this.max =100;
  }

  constructor() { }

  ngOnInit() {
  }

  isDanger(): boolean {
    return this._value/this._max > 0.7;
  }
}
