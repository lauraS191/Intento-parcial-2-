import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
