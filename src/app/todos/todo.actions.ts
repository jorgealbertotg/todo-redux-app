import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
);

export const clear = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

export const toggleTodos = createAction(
  '[TODO] Toggle Todos',
  props<{completado: boolean}>()
);

export const clearCompleted = createAction(
  '[TODO] Clear completed Todos'
);