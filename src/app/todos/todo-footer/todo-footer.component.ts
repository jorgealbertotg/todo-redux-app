import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { Todo } from '../models/todo.model';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos;
  filtros: filtrosValidos[];
  tareasPendientes: number;
  tareasTotales: number;

  constructor(private store: Store<AppState>) {
    this.filtroActual = 'todos';
    this.filtros = ['todos' , 'completados', 'pendientes'];
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      // this.tareasPendientes = state.todos.reduce((total, todo: Todo) => {
      //   if (!todo.completado) {
      //     total += 1;
      //   }
      //   return total;
      // }, 0);
      this.tareasTotales = state.todos.length;
      this.tareasPendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  select(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({filtro: filtro}));
  }

  limpiarCompletados() {
    if (this.tareasTotales - this.tareasPendientes) {
      this.store.dispatch(clearCompleted());
    }
  }
}
