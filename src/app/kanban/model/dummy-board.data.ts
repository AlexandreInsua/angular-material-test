import { KanbanBoard } from './kanban-board.data';

const toDoColumn = {
  id: 1,
  title: 'Pendente',
  tasks: [
    { id: 4, description: 'Configurar os Drags e DropLists.' },
    { id: 5, description: 'Engadir métodos para procesar as accións.' },
    { id: 6, description: 'Amosar estilos e animacións.' },
    { id: 7, description: 'Converter accións en comandos.' },
  ],
};

const inProgressColumn = {
  id: 2,
  title: 'En Proceso',
  tasks: [
    { id: 2, description: 'Engadir material cdk.' },
    { id: 3, description: 'Explicar elementos básicos do Drag & Drop.' },
  ],
};

const completedColumn = {
  id: 3,
  title: 'Completadas',
  tasks: [{ id: 1, description: 'Crear a estrutura básica da aplicación.' }],
};

export const dummyBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, completedColumn],
};
