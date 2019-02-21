import {MDCComponent, MDCFoundation} from '@material/base';
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';

import {DOMHelper} from './DOMHelper';
import {Router} from './Router';

(() => {
  let footer = document.querySelector('footer'),
    nav = document.querySelector('footer nav'),
    overlay = document.querySelector('.overlay');
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
    document.querySelector(`footer a[for="${location.hash}"]`).classList.add('is-active');
  }).catch((err) => {
    console.error(err);
    router.discardAllRoutes();
    document.querySelector('main').innerHTML = '<h3>Oh no!</h3><p>Unfortunately an error has occured. Please try again later.</p>';
  });

  DOMHelper.slideUp(footer, 0);
  DOMHelper.hide(overlay);
  document.querySelector('.fab button').addEventListener('click', () => {
    DOMHelper.hide('.fab button', 500);
    if(footer.classList.contains('is-collapsed')){
      footer.classList.remove('is-collapsed');
      Promise.all([
        DOMHelper.slideUp(footer),
        DOMHelper.fadeIn(overlay),
      ]);
    }
  });
  document.querySelector('footer button').addEventListener('click', () => {
    DOMHelper.show('.fab button', 500);
    if(!footer.classList.contains('is-collapsed')){
      footer.classList.add('is-collapsed');
      Promise.all([
        DOMHelper.slideDown(footer),
        DOMHelper.fadeOut(overlay),
      ]);
    }
  });
  document.querySelectorAll('footer a').forEach((e) => {
    e.addEventListener('click', (e) => {
      document.querySelector('footer a.is-active').classList.remove('is-active');
      DOMHelper.fadeOut(location.hash);
      setTimeout(() => {
        router.loadSinglePage(location.hash.substr(1)).then((el) => {
          DOMHelper.fadeIn(el);
          document.querySelector(`footer a[for="${location.hash}"]`).classList.add('is-active');
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
      }, 0);
    });
  });
  document.querySelector('.overlay').addEventListener('click', () => {
    DOMHelper.slideUp(nav, 350);
    footer.classList.add('is-collapsed');
    DOMHelper.show('.fab button', 500);
    DOMHelper.fadeOut(overlay);
  });
})();
