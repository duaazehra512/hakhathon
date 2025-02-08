
    export  interface Product {
    _id: string;
    title: string;
    _type: "products";
    price: number;
    description: string;
    priceWithoutDiscount: number;
    imageUrl?: string;
    slug :{
      _type : "slug"
      current : "string";
    }
  }