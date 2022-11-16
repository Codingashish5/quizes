
import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';
  newdata: any;
  constructor(private _apiservice: ServiceService) { }
 
  saveCont: any = [];
  value: any;
  countryData:any;
  score=0;
  ngOnInit() {
    this._apiservice.getdata().subscribe((res: any) => {
      this.newdata = res.data;

      for (let i = 0; i < 5; i++) {
        let countryNum = Math.floor(Math.random() * this.newdata.length);

        this.saveCont.push(this.newdata[countryNum]);
      }
      console.log(this.saveCont);
      console.log(res.data);
    })
  }

  check(value:any,countryData:any,index:any){
    console.log(value);
    console.log(index);
    if (value==countryData.capital)
    {
      //alert("correct")
      this.score=this.score+1;
    }
    this.saveCont[index]['Answered'] = value;

    
    // console.log(countryData);
    
    console.log(this.saveCont);
    
}
res(){
  alert(this.score)
  var x:any;
  x = document.getElementById("showdata");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
}
