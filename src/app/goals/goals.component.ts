import { Component } from '@angular/core'
import { GOAL } from '../models/goal.model';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})

export class GoalsComponent{

  title = 'Goals'
  selected: boolean = false;
  selectedGoal: GOAL;

  goals = [];
  name: string;
  description: string;
  id: number;

  // goalName: string;

  onClickButton(){
    let goal = new GOAL();
    goal.name = this.name;
    goal.id = this.id;
    this.goals.push(goal);
  }

  onSelect(goal: GOAL){
    this.selected = true;
    this.selectedGoal = goal;
  }

  openGoals(){
    this.selected = false;
  }

}
