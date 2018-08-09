import {Component, OnInit} from '@angular/core'
import {GOAL} from '../models/goal.model';
import {GoalService} from '../services/goal.service'
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../snackbar/snackbar.component';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})

export class GoalsComponent implements OnInit {

  title = 'Goals';
  selected: boolean = false;
  selectedGoal: GOAL;

  //goals = [];
  // goalName: string;
  goals: GOAL[];
  name: string;
  date: Date;
  description: string;
  id: number;
  picker: Date;
  updatedGoal: GOAL;
  like: boolean;

  constructor(private goalService: GoalService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

  onAddGoal() {

    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;
    // goal.id = this.goals.length + 1;

    console.log(goal);

    this.goals.push(goal);

    // this.goalService.addGoal(goal);

    this.openSnackBar();
  }

  onSelect(goal: GOAL) {
    this.selected = true;
    this.selectedGoal = goal;
  }

  favGoal(event) {
    this.delGoal();
    this.goalService.addGoal(event);
  }

  delGoal() {
    // this.like = fav;
    this.goalService.deleteGoal(this.selectedGoal);
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
    });
  }

}
