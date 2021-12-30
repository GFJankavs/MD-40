export interface AddPlanQuery {
  task: string;
  date: string;
  time: string;
  location: string;
  comments: string
}

export interface Plan extends AddPlanQuery {
  id: string;
}
