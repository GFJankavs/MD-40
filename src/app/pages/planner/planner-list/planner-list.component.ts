import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Plan} from "../../../shared/models/plan.model";

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.scss']
})
export class PlannerListComponent {
  @Input()
  taskList?: Plan[];
  @Output() deleteTaskEvent = new EventEmitter<Plan>();

  deleteTask(task: Plan):void {
    this.deleteTaskEvent.emit(task);
  }
}
