import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { MessagesComponent } from './views/messages/messages.component';


const routes: Routes = [
  { path: '', component: MemberComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
