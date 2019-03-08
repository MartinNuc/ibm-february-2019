# Day 9 recap

## How do you use ngFor? For what do you use it?

- iterate over array
- HTML -> repeat HTML element

<div *ngFor="let name of names">
  {{ name }}
</div>













## How do components communicate? Up / Down

Input

------------- article.html

<div class="article">
  <h1>{{article.title}}</h1>
  <p>{{article.text}}</p>
  <button type="button" (click)="deleteButtonPressed()">Delete article</button>
</div>
------------- article.ts
import {Article} from '../model';
@Compoennt({
  selector: 'app-article'
})
class ArticleComponent {
  @Input()
  article: Article;

  @Output()
  emitter = new EventEmitter<Article>();

  deleteButtonPressed() {
    this.emitter.emit(this.article);
  }
}

------------------ list-of-articles.html

<app-article [article]="singleArticle"
               (emitter)="deleteArticleFromArray(singleArticle)">


<app-article *ngFor="let articleFromFor of articles"
              [article]="articleFromFor"
              (emitter)="deleteArticleFromArray(articleFromFor)">
  </app-article>

-------------------- list-of-articles.ts

class ListOfArticlesComponent {
  articles: Article[] = [
    {
      title: 'About today` weather'.
      text: 'Today is going to be a beautiful day!',
    },
    {
      title: 'Prime minister visited Groningen during the weekend'.
      text: 'Probably because of elections.',
    }
  ]

  deleteArticleFromArray(articleToBeDeleted: Article) {
    this.articles = this.articles.filter(a => a === articleToBeDeleted);
  }
}

-------------------- model.ts

export interface Article {
  title: string;
  text: string;
}






## What do you use pipes for? For example?

{{ variable | date }}

- for formatting the output
- date, json










## For what and how do you use ngClass?

- enables / disables HTML/CSS class

let dynamicClasses = {
  class1: true,
  class2: false
}

<div [ngClass]="dynamicClasses"></div>
results in -----------> <div class="class1"></div>








## What are services? Why do we use them?

- easier to test
- separate a logic from a component
- usefull when accessing data from different components

ng g s name

class Component {service: CalculatorService;
  constructor(service: CalculatorService) {
    this.service = service;
  }



}

@Injectable()
class Service {
  constructor(public calculator: CalculatorService) {

  }
}



