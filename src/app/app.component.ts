import { Component } from '@angular/core';
import { NotificationAnimationType, NotificationsService } from 'angular2-notifications';
import { messagetype } from 'src/enum';
import { Events } from './events';
import { message } from './Models/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eatirvinsFront';

  constructor(private notifyService: NotificationsService,
    private event: Events){
    this.event.message.subscribe(
      (res) => {
        this.message(res);
      },
      (err) => {
        this.messageError();
      }
    )
  }

  messageError() {
    this.notifyService.error(
      'Error!',
      ' Please contact your Administrator... ',
      {
        timeOut: 3000,
        position: ['top', 'right'],
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: false,
        clickIconToClose: true,
      }
    );
  }

  message(mesg: message) {
     let option ={
      timeOut: 3000,
      showProgressBar: true,
      animation:NotificationAnimationType.FromRight,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    };
    if (mesg.type == messagetype.alert) {
      this.notifyService.alert(mesg.title, mesg.meg,option );
    }
    if (mesg.type == messagetype.error) {
      this.notifyService.error(mesg.title, mesg.meg,option);
    }
    if (mesg.type == messagetype.success) {
      this.notifyService.success(mesg.title, mesg.meg, option);
    }
    if (mesg.type == messagetype.warn) {
      this.notifyService.warn(mesg.title, mesg.meg, option);
    }
    if (mesg.type == messagetype.info) {
      this.notifyService.info(mesg.title, mesg.meg, option);
    }
  } 
}
