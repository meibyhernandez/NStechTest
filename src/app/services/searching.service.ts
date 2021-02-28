import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from "../character.model";
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable
()
export class SearchingService{

  //call from the environment each url 

  readonly urlChar=environment.urlChar;
  readonly urlSlytherin=environment.urlSlytherin;
  readonly urlGryffindor=environment.urlGryffindor;
  readonly urlRavenclaw=environment.urlRavenclaw;  
  readonly urlHufflepuff=environment.urlHufflepuff;  
  
  constructor(private http :HttpClient) {}
  
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlChar);
  }

  getSlytherin(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlSlytherin);
}

getGryffindor(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlGryffindor);
}

getRavenclaw(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlRavenclaw);
}

getHufflepuff(): Observable<Character[]> {
  return this.http.get<Character[]>(this.urlHufflepuff);
}


//get each attribute 

getLastName():Observable<Array<Character>>{
  
  const listNames: Array<Character>=[];
  const url=`${this.urlChar}`
  return this.http.get<any>(url).pipe(
    map(names=>{
      (names.results as Array<Character>).forEach((regis:any)=>{
        listNames.push({
        name: regis.name,
        gender: regis.gender,
        house: regis.house,
        ancestry: regis.ancestry,
        patronus: regis.patronus, 
        image: regis.image
        });
      });
    return listNames;
    })
  );
    
    
}


}