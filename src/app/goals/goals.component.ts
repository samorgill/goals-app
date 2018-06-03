import { Component, OnInit } from '@angular/core'
import { GOAL } from '../models/goal.model';
import { GoalService } from '../services/goal.service'
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})

export class GoalsComponent implements OnInit{

  title = 'Goals'
  selected: boolean = false;
  selectedGoal: GOAL;

  //goals = [];
  // goalName: string;
  goals: GOAL[];
  name: string;
  description: string;
  id: number;

  constructor(private goalService: GoalService, public snackBar: MatSnackBar){}

  ngOnInit(){
    this.goals = this.goalService.getGoals();
  }

  onAddGoal(){
    let goal = new GOAL();
    goal.name = this.name;
    goal.id = this.id;
    // this.goals.push(goal);

    this.goalService.addGoal(goal);
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
    });
  }

  onSelect(goal: GOAL){
    this.selected = true;
    this.selectedGoal = goal;
  }

  openGoals(){
    this.selected = false;
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
    });
  }

}
