import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
testroute:any[] = [];
  constructor(private router:Router) { 
    if(JSON.parse(localStorage.getItem("listroutes"))){
    
      this.testroute = JSON.parse(localStorage.getItem("listroutes"))
    }
    else{
      this.printpath('', this.router.config);
    }
    
  }

  ngOnInit() {
    
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      var setroute = {
        "route": '/'+route.path,
        "color": "#fff"
      }
      this.testroute.push(setroute)
  
     
      // if (route.children) {
      //   const currentPath = route.path ? parent + '/' + route.path : parent;
      //   this.printpath(currentPath, route.children);
      // }
    }
    localStorage.setItem("listroutes",JSON.stringify(this.testroute))
}

sendroute(x,n){

this.testroute[n].color = "#480E4E"  
localStorage.setItem("listroutes",JSON.stringify(this.testroute))
  this.router.navigate([x.route])
}
}
