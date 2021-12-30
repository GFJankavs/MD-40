import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AddPlanQuery, Plan} from '../../../shared/models/plan.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-planner-add',
  templateUrl: './planner-add.component.html',
  styleUrls: ['./planner-add.component.scss']
})
export class PlannerAddComponent implements OnInit {
  @Output() addPlanEvent = new EventEmitter<AddPlanQuery>();

  showAdvancedOptions: boolean = false;
  addPlanForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  toggleAdvancedOptions(): void {
    this.showAdvancedOptions = !this.showAdvancedOptions;
  }

  buildForm(): void {
    this.addPlanForm = this.fb.group({
      task: ['', [Validators.required]],
      date: [''],
      time: [''],
      location: [''],
      comments: [''],
    })
  }

  addTask(): void {
    this.addPlanEvent.emit(this.addPlanForm.value);
  }

}
