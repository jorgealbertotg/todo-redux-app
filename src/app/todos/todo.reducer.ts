import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { crear, toggle, editar, clear, toggleTodos, clearCompleted } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán America')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo =>{
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo =>{
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(clear, (state, {id}) => {
    return state.filter(todo => {
      return todo.id !== id
    });
  }),
  on(toggleTodos, (state, {completado}) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      };
    });
  }),
  on(clearCompleted, state => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}