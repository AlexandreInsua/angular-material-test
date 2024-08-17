export interface Todo {
  uid: string;
  title: string;
  description: string;
  createAt: number;
  status: TodoStatusEnum;
}

export enum TodoStatusEnum {
  TODO = 'todo',
  ACTIVE = 'active',
  DONE = 'done',
}
