import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Lasagna', 'An Italian dish', 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg'),
        new Recipe('Chili', 'Ground beef chili', 'https://www.thewholesomedish.com/wp-content/uploads/2018/05/The-Best-Classic-Chili-550-500x500.jpg')
    ]

    constructor() {}
    ngOnInit() {}
}