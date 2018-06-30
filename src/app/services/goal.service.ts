import { Injectable } from '@angular/core';
import { GOAL } from '../models/goal.model'


@Injectable()
export class GoalService {

  goals: GOAL[] = [
    // {
    //   id: 1,
    //   name: 'Sams big goal'
    // },
    // {
    //   id: 2,
    //   name: 'Fitness goal'
    // },
    // {
    //   id: 3,
    //   name: 'Get money goal'
    // }
  ];

  constructor() { }

  getGoals(){
    return this.goals;
  }

  addGoal(goal: GOAL){
    this.goals.push(goal);
  }

  deleteGoal(goal: GOAL) {

    if (this.goals.includes(goal)) {
      this.goals.forEach((item, index) => {
        if (item === goal) {
          this.goals.splice(index, 1)
        }
      });
    }
  }

}
