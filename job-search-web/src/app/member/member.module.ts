import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MessagesComponent } from './views/messages/messages.component';


@NgModule({
  declarations: [MemberComponent, MessagesComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
