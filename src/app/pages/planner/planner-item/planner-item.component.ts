import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plan} from "../../../shared/models/plan.model";

@Component({
  selector: 'app-planner-item',
  templateUrl: './planner-item.component.html',
  styleUrls: ['./planner-item.component.scss']
})
export class PlannerItemComponent implements OnInit {
  @Output() deleteTaskEvent = new EventEmitter<Plan>();
  @Input() task?: Plan;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Plan) {
    this.deleteTaskEvent.emit(task);
  }
}
