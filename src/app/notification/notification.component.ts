import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-danger"><p>This website uses cookies to provide batter user experience</p></div>',
  styles: [".notifivation-div{margin: 10px 0px; padding : 10px 20px; background-color:#fad7a0; color:red; text-align: center;}","p{font-size:14px;}"]
})
export class NotificationComponent {

}
