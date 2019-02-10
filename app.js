import {MDCComponent, MDCFoundation} from '@material/base';
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));