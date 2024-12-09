import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/Category/category.service';
import { Category } from '../interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  cat: Category[] = [];
  constructor(private service: CategoryService) {}
  ngOnInit(): void {
    
  }
  loadAllEmployees(): void {
    
    this.service.get().subscribe({
      next: (r) => {
        this.cat = r.data;
        
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        
      }
    });
  
  }
}
