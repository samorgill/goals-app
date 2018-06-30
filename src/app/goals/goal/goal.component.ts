import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { GOAL } from '../../models/goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input() goal: GOAL;
  @Output() favouriteGoal: EventEmitter<GOAL> = new EventEmitter();
  @Output() deleteGoal: EventEmitter<any> = new EventEmitter();
  title = 'Selected Goal';
  fav: boolean;

  constructor() { }

  ngOnInit() {

  }

  favGoal() {
    if(this.goal.favorite === false || this.goal.favorite == null){
      this.fav = true;
    }else{
      this.fav = false;
    }
    this.goal.favorite = this.fav;
    this.favouriteGoal.emit(this.goal);
  }

  deleteTheGoal(){
    this.deleteGoal.emit();
    this.goal = null;
  }





}
