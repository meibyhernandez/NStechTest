import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from "./components/characters/characters.component";
import { MembersComponent } from './components/members/members.component';
import { SearchComponent } from './components/search/search.component';



const APP_ROUTES: Routes = [
    
    { path: 'characters', component: CharactersComponent },    
    {path: 'members/:house', component:MembersComponent},
    {path: 'search/:word', component: SearchComponent},
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);