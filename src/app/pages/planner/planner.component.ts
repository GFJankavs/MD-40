import {Component, Injectable, OnInit} from '@angular/core';
import { PlannerService } from 'src/app/shared/services/planner.service';
import {AddPlanQuery, Plan} from "../../shared/models/plan.model";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  taskList?: Plan[];

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
    this.taskList = this.plannerService.getPlans();
  }

  addPlan(task: AddPlanQuery): void {
    this.taskList = this.plannerService.addTask(task);
  }

  deleteTask(task: Plan): void {
    this.taskList = this.plannerService.deleteTask(task);
  }
}
