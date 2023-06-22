import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/components/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user = 'Luana';

  tasks: Task[] = [];

  constructor(private router: Router, private taskService: TaskService) {}
  //---------------------------------------
ngOnInit(): void {
    this.loadTasks();
    console.log(this.tasks)
  }
  //---------------------------------------
  loadTasks() {
    console.log('carregar as tasks');
    this.tasks = this.taskService.tasks
    }

  addTask() {
    this.router.navigateByUrl('/task', {
      state: this.tasks,
    });
  }
  

}

