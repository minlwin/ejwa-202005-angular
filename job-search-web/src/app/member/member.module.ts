import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MessagesComponent } from './views/messages/messages.component';
import { MessageDetailsComponent } from './views/message-details/message-details.component';
import { MessageEditComponent } from './views/message-edit/message-edit.component';


@NgModule({
  declarations: [MemberComponent, MessagesComponent, MessageDetailsComponent, MessageEditComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
