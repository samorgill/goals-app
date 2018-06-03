import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { GOAL } from '../../models/goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() goal: GOAL;
  @Output() closeGoal: EventEmitter<boolean> = new EventEmitter();
  title = 'Selected Goal'

  constructor() { }

  ngOnInit() {
    
  }

  onClickClose(){
    this.goal = null;
    this.closeGoal.emit(true);
  }




}
