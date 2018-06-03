import { Component } from '@angular/core'

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})

export class GoalsComponent{

  title = 'Goals'
  goals = [];


  onClickButton(){
    this.goals.push('goal added');

  }
}
