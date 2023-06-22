import { LiteralMapExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

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

  tasks: Task[] = [];

  constructor(private router: Router, private taskService: TaskService ){
    // const nav= this.router.getCurrentNavigation();
  }

  ngOnInit(): void{}

    addTask() {
      const t = this.datatoObject();
      this.taskService.tasks.push(t);
      this.limparForm();

      setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
      }, 1000);
  }

  datatoObject() {
    let task = new Task();
    task.nome = this.nome.value!;
    task.descricao = this.descricao.value!;
    task.responsavel = this.responsavel.value!;
    task.dt_inicio = new Date (this.dt_inicio.value!);
    task.dt_fim = new Date (this.dt_fim.value!);

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


