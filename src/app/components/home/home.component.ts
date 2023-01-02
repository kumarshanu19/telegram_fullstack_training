import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formInput: Array<any> = [
    {
      type: "text",
      label: "name",
      icon: 'user',
      minLength: 5,
      maxLength: 20,
    },
    {
      type: "email",
      label: "email",
      minLength: 5,
      icon: 'envelope',
      maxLength: 25,
      required: true,
    },
    {
      type: "number",
      label: "number",
      minLength: 10,
      icon: 'phone',
      maxLength: 10,
      required: true,
    },
  ];

  menu: Array<any> = [
    {
      _id: 1,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 1",
      price: 20,
      discount: 15
    },
    {
      _id: 2,
      img: 'https://images.unsplash.com/photo-1517154196073-d000ca11b42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 2",
      price: 20,
      discount: 15
    },
    {
      _id: 3,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 3",
      price: 20,
      discount: 15
    },
    {
      _id: 4,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 4",
      price: 20,
      discount: 15
    },
    {
      _id: 5,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 5",
      price: 20,
      discount: 15
    },
    {
      _id: 6,
      img: 'https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: "Tasty And Healthy 6",
      price: 20,
      discount: 15
    },
  ];
  product = [
    { name: "Greps", qty: 9 },
    { name: "XYZ", qty: 5 },
    { name: "Mango", qty: 1 },
    { name: "Papaya", qty: 3 },
    { name: "Apple", qty: 5 },
    { name: "Orange", qty: 7 },
  ];
  constructor() {
    console.log('Before sorting',this.product)
  }

  ngOnInit(): void {

    console.log('After shorting',this.sorting(this.product))
  }

  sorting(array: any) {
    var yes = false;
    while (!yes) {
      yes = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1].qty > array[i].qty) {
          yes = false;
          var temp = array[i - 1].qty;
          array[i - 1].qty = array[i].qty;
          array[i].qty = temp;
        }
      }
    }
    return array;
  }

  sorting2(array: any) {
    return array.reduce((acc:any, val:any) => {
      let i = 0;
      while (i < array.length && val.qty > array[i].qty) {
        i++
      }
      acc.splice(i, 0, val.qty);
      return acc
    }, [])
  }

  bubbleShort(arr: any) {
    for (let i = 0; i < arr.length -1; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - i; j++) {
      //Swapping Element
        if (arr[j]?.qty > arr[j + 1]?.qty) {
          let dtm = arr[j].qty;
          arr[j].qty = arr[j + 1].qty
          arr[j + 1].qty = dtm;
          swapped =true
        }

      }
      // no element
      if (!swapped) break;
    }
    return arr;
  }
  submit(frm: any) {

    console.log(frm.value);
  }


}
