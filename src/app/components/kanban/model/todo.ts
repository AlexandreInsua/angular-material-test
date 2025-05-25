export interface Todo {
  uid: string;
  title: string;
  description: string;
  createAt: number;
  status: TodoStatusEnum;
}

export enum TodoStatusEnum {
  PENDING = 'pending',
  ACTIVE = 'active',
  DONE = 'done',
}
