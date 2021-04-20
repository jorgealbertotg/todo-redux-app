import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { toggleTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  toggleAll: FormControl;

  constructor(private store: Store<AppState>) {
    this.toggleAll = new FormControl(false);
  }

  ngOnInit(): void {
    this.toggleAll.valueChanges.subscribe(value => {
      this.store.dispatch(toggleTodos({completado: value}));
    });
  }
}
