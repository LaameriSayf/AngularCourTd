import { Component } from '@angular/core';
import { Cateegorie } from 'src/app/models/Category';  // Assurez-vous que 'Category' est bien le bon modèle

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {

  categories : Cateegorie[]=[{"id":1,"title":"Grand électroménager",
  "image":"assets/images/categorie_electromenager.jpg", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  "available":true},
  {"id":2,"title":"Petit électroménager",
  "image":"assets/images/categorie_electromenager.jpg", "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  "available":true},
  {"id":3,"title":"Produits informatiques",
  "image":"assets/images/categorie_electromenager.jpg", "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  "available":true},
  {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_electromenager.jpg",
  "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", "available":true},
  {"id":5,"title":"TV, images et son",
  "image":"assets/images/categorie_electromenager.jpg", "description":"",
  "available":true},
  {"id":6,"title":"Produits voiture", "image":"assets/images/categorie_electromenager.jpg",
  "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).","available":false},
  ];
  noProductMessage: string = 'No products found';
  title: string = '';  // Typage correct de 'title'

  afficheDesc(id: number): void {
    const categorie = this.categories.find(element => element.id === id);
    if (categorie) {
      alert(categorie.description);
    }
  }

  filterCategories(): Cateegorie[] {
    if (!this.title) {
      return this.categories;
    }
    return this.categories.filter(c =>
      c.title.toLowerCase().includes(this.title.toLowerCase())
    );
  }
}
