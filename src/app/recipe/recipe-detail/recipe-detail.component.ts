import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  recipeId!: number;

  constructor( private route: ActivatedRoute, private recipeService: RecipeService ) {}

  ngOnInit(): void {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipeService.getRecipeDetail(this.recipeId).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}

