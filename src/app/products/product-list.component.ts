import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

filteredProducts: IProduct[];
  products: IProduct[] = [
      {
        "productId": 1,
        "productName": "Mjolnir",
        "productCode": "GOD-001",
        "releaseDate": "March 19, 720ac",
        "description": "Hammer from the God of hammers",
        "rateStar":"",
        "imageUrl": "https://ae01.alicdn.com/kf/HTB1FjN5KFXXXXa6XFXXq6xXFXXXx/1-1-Scale-Full-Metal-Thor-Hammer-Mjolnir-1-1-Replica-Thor-Custom-Cosplay-Hammer-Collection.jpg_640x640.jpg"
      },
      {
        "productId": 2,
        "productName": "Shield",
        "productCode": "shd-s001",
        "releaseDate": "July 4, 1918",
        "description": "Shield from the first Avenger",
        "rateStar":"",
        "imageUrl": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png"
      },
      {
        "productId": 3,
        "productName": "Mark 85",
        "productCode": "MRK-085",
        "releaseDate": "May 21, 2010",
        "description": "Iron man best armor",
        "rateStar":"",
        "imageUrl": "https://i.pinimg.com/originals/85/92/ac/8592ac87e060126bc6c0f774331160f5.jpg"
      },
      {
        "productId": 4,
        "productName": "Bow",
        "productCode": "BOW-001",
        "releaseDate": "May 15, 2012",
        "description": "Bow used by Hawkeye",
        "rateStar":"",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61LLL6iFi4L._SL1000_.jpg"
      },
      {
        "productId": 5,
        "productName": "A Hulk",
        "productCode": "HLK-001",
        "releaseDate": "October 15, 2008",
        "description": "The Emerald Giant who learned how to snap his fingers",
        "rateStar":"",
        "imageUrl": "https://lojamultilaser.vteximg.com.br/arquivos/ids/177848-1000-1000/pd082_01.jpg"
      }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

//convert words to lowercase, so we can compare at the moment we need to filter
//returns the list os products
  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void{
    console.log('In OnInit');
  }
}
