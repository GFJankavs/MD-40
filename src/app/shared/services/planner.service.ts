import {Injectable} from "@angular/core";
import {AddPlanQuery, Plan} from "../models/plan.model";
import {v4 as idGenerator} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class PlannerService {
  taskList: Plan[] = [
    {
      id: '13123153323',
      task: 'Buy Groceries',
      date: '05/10/2021',
      time: '17:00',
      location: 'Rīga, Latvija',
      comments: 'Take a bag with myself when going to the store.'
    }
  ];

  getPlans(): Plan[] {
    return this.taskList;
  }

  addTask(task: AddPlanQuery): Plan[] {
    const newTask = {
      id: idGenerator(),
      ...task
    }

    this.taskList.push(newTask);

    return this.taskList;
  }

  deleteTask(task: Plan): Plan[] {
    this.taskList = this.taskList.filter((plan) => plan.id !== task.id);
    return this.taskList;
  }
}
