import {Injectable} from '@angular/core';

@Injectable()
export class IconsService {

  icons = {
    ionicons: ['ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c', 'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap', 'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up', 'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon', 'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled', 'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help', 'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled', 'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star', 'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle', 'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b', 'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel', 'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive', 'ion-reply', 'ion-reply-all', 'ion-forward'],
    fontAwesomeIcons: ['fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank', 'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer', 'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars', 'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o', 'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn'],
    socicon: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ',', ';', ':', '+', '@', '=', '-', '^', '?', '$', '*', '&', '(', '#', '.', '_', ']', ')', '\'', '"', '}', '{']
  };

  getAll() {
    return this.icons;
  }
}
