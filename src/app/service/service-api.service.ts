import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  linkApi:string

  constructor(private http:HttpClient) {
    this.linkApi='https://proxising.com/casalux/api/luxurykitchens/collections.php'
   }

   consumirApi(){
     return this.http.get(this.linkApi)
   }

}
