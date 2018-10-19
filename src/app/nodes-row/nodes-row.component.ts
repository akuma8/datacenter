import {Component, Input, OnInit,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent implements OnInit {
  @Input()
  node: any;

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  constructor() { }

  ngOnInit() {
  }

}
