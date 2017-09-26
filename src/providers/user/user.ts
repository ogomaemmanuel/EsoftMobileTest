import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import { User } from '../../models/userModel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public users: User[] = [];
  
  constructor(public storage:Storage,public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  getUsers() {
    //this.storage.get("postId").then()
    //currently working
   return this.http.get("https://jsonplaceholder.typicode.com/posts").map(resp=>resp.json());


  }
 private getSingleUser(id:string){
   return this.http.get("https://jsonplaceholder.typicode.com/posts/"+Number(id)).map(resp=>resp.json()).subscribe(data=>{
   console.log(data);
   return data;
   });
  }

  public getSingeUserUsingStoredId(){
   
  return  this.storage.get("postId").then(postId=>{
      return Promise.all([postId,this.getSingleUser(postId)])
    }).then(finalresult=>{
      return finalresult[1];
    }).then(results=>{console.log(results);
    return Promise.resolve( results);
    }).then(resoled=> {console.log(
      resoled
    );return resoled});

  }
 public getUsername(): Promise<string> {
    return this.storage.get('postId').then((value) => {
      return value;
    });
  };
}
