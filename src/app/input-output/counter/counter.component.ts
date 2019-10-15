import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ['counterValue']
})
export class CounterComponent implements OnInit {

 @Input() public name: string ='NoName';
 public counterValue: number = 0;
 @Input('step') public counterStep = 1;

 @Output() public onData: EventEmitter<number> = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {
  }

  public increment(): void {
    this.counterValue = this.counterValue + this.counterStep;
    this.onData.emit(this.counterValue);
  }


}
