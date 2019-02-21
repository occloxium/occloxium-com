// import {MDCComponent, MDCFoundation} from '@material/base';
// import {MDCList} from '@material/list';
// import {MDCRipple} from '@material/ripple';
// const list = new MDCList(document.querySelector('.mdc-list'));
// const listItemRipples = list.listElements.map((listItemEl) => new
// MDCRipple(listItemEl));

import {DOMHelper} from './DOMHelper';
import {Router} from './Router';

(() => {
  let footer = document.querySelector('footer'),
    nav = document.querySelector('footer nav');
  if (!location.hash) {
    location.hash = '#about';
  }
  const router = new Router([
    'about',
    'work',
    'social',
    'privacy',
  ]);
  // its safe to assume that after this, no subpage is loaded,
  // thus we can load the one requested by location.hash
  // If we somehow corrupted the location hash, which is no longer
  // a valid route, just substitute it with the first route available
  router.loadSinglePage(location.hash.substr(1)).then((el) => {
    DOMHelper.fadeIn(el);
  }).catch((err) => {
    console.error(err);
    router.discardAllRoutes();
    document.querySelector('main').innerHTML = '<h3>Oh no!</h3><p>Unfortunately an error has occured. Please try again later.</p>';
  });
  
  document.querySelector(`footer a[for="${location.hash}"]`).classList.add('is-active');
  DOMHelper.slideUp('footer nav');

  document.querySelector('footer button').addEventListener('click', () => {
    footer.classList.add('is-animating');
    footer.classList.remove('is-finished');
    if(footer.classList.contains('is-collapsed')){
      DOMHelper.slideDown(nav);
      setTimeout(() => {
        footer.classList.add('is-expanded');
        footer.classList.remove('is-collapsed');
      }, 150);
    } else {
      DOMHelper.slideUp(nav);
      setTimeout(() => {
        footer.classList.add('is-collapsed');
        footer.classList.remove('is-expanded');
      }, 350);
    }
    setTimeout(() => {
      footer.classList.add('is-finished');
      footer.classList.remove('is-animating');
    }, 350);
  });
  document.querySelectorAll('footer a').forEach((e) => {
    e.addEventListener('click', (e) => {
      document.querySelector('footer a.is-active').classList.remove('is-active');
      DOMHelper.fadeOut('main article');
      // e.target.('is-active');
      setTimeout(() => {
        router.loadSinglePage(location.hash.substr(1)).then((el) => {
          DOMHelper.fadeIn(el);
        }).catch((err) => {
          console.error(err);
          Router.discardAllRoutes();
          document.querySelector('main').innerHTML = '<h3>Oh no!</h3><p>Unfortunately an error has occured. Please try again later.</p>';
        });
        let event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        DOMHelper.click('footer button');
        window.scrollTo({
          top: 0
        });
      }, 5);
    });
  });
  document.querySelector('footer .overlay').addEventListener('click', () => {
    DOMHelper.slideUp(nav);
    setTimeout(() => {
      footer.classList.add('is-collapsed');
      footer.classList.remove('is-expanded');
    }, 350);
  });
})();
