function DOMHelper(){
  /**
   * The default transition time for fades
   * This does not actually affect any animation, it is only used 
   * for asynchronous triggers to affect element classes
   */
  this.__transitionTime = 500;
  /**
   * @returns {number} the default transition time for fades
   */
  this.getTransitionTime = () => {
    return this.__transitionTime();
  };
  /**
   * Sets the default transition time
   * @param {number} [time=500] time must be less than 1000ms
   */
  this.setTransitionTime = (time) => {
    return (typeof time === 'number' && time <= 1000 
      ? this.transitionTime = time 
      : this.transitionTime =  500);
  };
  /**
   * This is used to generalize the way the helper functions are used
   * Functions that already have an element can use this as a proxy 
   * and such with only (query) strings can query the actual element 
   * @see {Facade Pattern}
   * @param {string|Element} el either a query string or an element
   * @return {Element} The first element queried
   */
  this.query = function (el) {
    if (typeof el === 'string') {
      // parameter probably is a query string, query the DOM first
      return document.querySelector(el);
    } else if (el instanceof 'Element') {
      // parameter is an element, no further querying to do
      return el;
    } else {
      throw new Error(`Incompatible parameter type: ${typeof el}`);
    }
  };
  /**
   * Hides an element by adding the 'is-hidden' class
   * The CSS class HAS TO BE defined in your stylesheets
   */
  this.hide = (el) => {
    this.helpers.query(el).classList.add('is-hidden');
  };
  /**
   * Shows a previously hidden element by removing the 'is-hidden' class
   * The CSS class HAS TO BE defined in your stylesheets
   */
  this.show = (el) => {
    this.query.classList.remove('is-hidden');
  };
  /**
   * Appends HTML code to an element 
   * @param {Element} parent the parent element to insert into
   * @param {string} html the code to insert
   */
  this.append = (parent, html) => {
    document.querySelector(parent).insertAdjacentHTML('beforeend', html);
  };
  /**
   * Fades a previously hidden element with 
   * @see DOMHelper.hide()
   */
  this.fadeIn = (el) => {
    let element = this.helpers.query(el);
    element.classList.remove('is-hidden');
    element.classList.add('is-fading-in');
    setTimeout(() => {
      element.classList.remove('is-fading-in');
    }, this.transitionTime/2);
  };
  this.fadeOut = (el) => {
    let element = this.helpers.query(el);
    element.classList.add('is-fading-out');
    setTimeout(() => {
      element.classList.remove('is-fading-out');
      element.classList.add('is-hidden');
    }, this.transitionTime/2);
  }
}
function Router(availableRoutes) {
  this.loadedRoutes = [];
  this.transitionTime = 500;
  this.availableRoutes = availableRoutes;
  this.helpers = {
    get: (url) => {
      return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = () => {
          if (req.status >= 200 && req.status < 400) {
            resolve(req.responseText);
          }
        };
        req.onerror = () => {
          reject(req.statusText);
        };
        req.send();
      });
    },
  };
  this.loadAll = () => {
    return new Promise((resolve, reject) => {
      Promise.all(this.availableRoutes.map((r) => {
        return new Promise((resolve, reject) => {
          if (!this.loadedRoutes.includes(r)) {
            this.loadedRoutes.push(r);
            this.helpers.get(`/components/${r}.component.html`).then((data) => {
              DOMHelper.append(data);
              this.helpers.hide(`main #${r}`);
              resolve(document.querySelector(`main #${r}`));
            }).catch((err) => {
              console.error(`Failed to load component "${r}"`);
              reject(err);
            });
          } else {
            resolve(document.querySelector(`main #${r}`));
          }
        });

      })).then((p) => {
        resolve(p);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  this.loadSinglePage = (route) => {
    return new Promise((resolve, reject) => {
      if (!this.loadedRoutes.includes(route)) {
        this.loadedRoutes.push(route);
        this.helpers.get(`/components/${route}.component.html`).then((data) => {
          this.helpers.append(data);
          this.helpers.hide(`main #${route}`);
          resolve(document.querySelector(`main #${route}`));
        }).catch((err) => {
          console.error(`Failed to load component "${route}"`);
          reject(err);
        });
      } else {
        resolve(document.querySelector(`main #${r}`));
      }
    });
  };
  this.addRoute = (route, immediatelyLoad = false) => {
    if (!this.availableRoutes.includes(route)) {
      this.availableRoutes.push(route);
      if (immediatelyLoad) {
        this.loadSinglePage(route);
      }
    }
  }
  this.discardAllRoutes = () => {
    this.loadedRoutes.forEach((r) => {
      let el = document.querySelector(`#${r}`);
      el.parentElement.removeChild(el);
    });
    this.loadedRoutes = [];
  };
  this.discardOneRoute = (route) => {
    if (this.loadedRoutes.includes(route)) {
      let el = document.querySelector(`#${route}`);
      el.parentElement.removeChild(el);
      this.loadedRoutes.splice(this.loadedRoutes.indexOf(route), 1);
    }
  };
}

$(document).ready(() => {
  window.Router = new Router([
    'about',
    'work',
    'social',
    'privacy',
  ]);
  $('main article').fadeOut();
  if (location.hash) {
    $('main article' + location.hash).fadeIn(1000);
  } else {
    location.hash = '#about';
    $('main article#about').fadeIn(1000);
  }
  // its safe to assume that after this, no subsite is loaded,
  // thus we can load the one requested by location.hash
  // If we somehow corrupted the location hash, which is no longer
  // a valid route, just substitute it with the first route available
  Router.loadSinglePage(location.hash.substr(1)).then((el) => {
    Router.helpers.fadeIn(el);
  }).catch((err) => {
    console.error(err);
    Router.discardAllRoutes();
    $('main').append($('<h3>Oh no!</h3><p>Unfortunately an error has occured. Please try again later.</p>'));
  });

  $(`footer a[for="${location.hash}"]`).addClass('is-active');
  $('footer nav').slideUp();
});

$('footer button').click(() => {
  $('footer').addClass('is-animating').removeClass('is-finished');
  if ($('footer').hasClass('is-collapsed')) {
    $('footer nav').slideDown(150);
    setTimeout(() => {
      $('footer').addClass('is-expanded').removeClass('is-collapsed');
    }, 0);
  } else {
    $('footer nav').slideUp(350);
    setTimeout(() => {
      $('footer').addClass('is-collapsed').removeClass('is-expanded');
    }, 350);
  }

  setTimeout(() => {
    $('footer').addClass('is-finished').removeClass('is-animating');
  }, 350);
});
$('footer a').click((e) => {
  $('footer a.is-active').removeClass('is-active');
  $('main article').fadeOut();
  $(e.target).addClass('is-active');

  setTimeout(() => {
    Router.loadSinglePage(location.hash.substr(1)).then((el) => {
      el.fadeIn(500);
    }).catch((err) => {
      console.error(err);
      Router.discardAllRoutes();
      $('main').append($('<h3>Oh no!</h3><p>Unfortunately an error has occured. Please try again later.</p>'));
    });
    $('footer button').click();
    $(window).scrollTop(0);
  }, 5);
});
$('footer .overlay').click(() => {
  $('footer nav').slideUp(350);
  setTimeout(() => {
    $('footer').addClass('is-collapsed').removeClass('is-expanded');
  }, 350);
});