import { LiteralMapExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  nome = new FormControl('')
  descricao = new FormControl('')
  responsavel = new FormControl('')
  dt_inicio = new FormControl('')
  dt_fim = new FormControl('')

  tasks: Task[] = []

    addTask() {
      let t = this.datatoObject();
      this.tasks.push(t)
      console.log(t);
      this.limparForm();
  }

  datatoObject() {
    let task = new Task();
    task.nome = this.nome.value!;
    task.descricao = this.descricao.value!;
    task.responsavel = this.responsavel.value!;
    task.dt_inicio = Number(this.dt_inicio.value)!;
    task.dt_fim = Number (this.dt_fim.value)!;

    return task;
  }

  limparForm() {
    this.nome.setValue('');
    this.descricao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
  }
}


