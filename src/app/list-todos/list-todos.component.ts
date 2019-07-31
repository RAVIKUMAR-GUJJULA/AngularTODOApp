import { Component, OnInit } from '@angular/core';


export class Todo{


  constructor(

    public id:number,
    public description:string,
    public targetDate:Date,
    public isDone:boolean

  ){}

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {



// todos=[
//   {id:1,description:'Learn Music'},
//   {id:2,description:'Learn Guiter'},
//   {id:3,description:'Learn Dance'}
// ]



todos=[
  new Todo(1,'Learn Music',new Date,false),
  new Todo(2,'Learn Guiter',new Date,false),
  new Todo(3,'Learn Dance',new Date,false)
]



  constructor() { }

  ngOnInit() {
  }

}
