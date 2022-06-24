import { Component, OnInit } from '@angular/core';
import { FakeDataSourceService } from 'src/app/appService/fake-data-source.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private fakeService: FakeDataSourceService) { }
datas: any = []
  // datas = [
  //   {Fruits:'apple',Vegetables:'potato',animals:'dog',wildAnimals:'tiger' },
  //   {Fruits:'mango',Vegetables:'tomato',animals:'cat',wildAnimals:'lion' },
  //   {Fruits:'banana',Vegetables:'radish',animals:'rat',wildAnimals:'bear' },
  //   {Fruits:'chikoo',Vegetables:'cucumber',animals:'donkey',wildAnimals:'fox' },
  // ];
  ngOnInit(): void {
    this.getEmployees()
  }
    public getEmployees(): void { 
  this.fakeService.dataMethod().subscribe(
    productData => this.datas = productData
  )
  }
}
