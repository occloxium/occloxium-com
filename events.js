let loadedRoutes = [];

function Router(availableRoutes) {
  this.loadedRoutes = [];
  this.availableRoutes = availableRoutes;
  this.loadAll = () => {
    return new Promise((resolve, reject) => {
      Promise.all(this.availableRoutes.map((r) => {
        return new Promise((resolve, reject) => {
          if (!this.loadedRoutes.includes(r)) {
            this.loadedRoutes.push(r);
            $.ajax({
              method: 'get',
              url: `/components/${r}.component.html`,
            }).done((data) => {
              $('main').append($(data).fadeOut());
              resolve($(`main #${r}`));
            }).fail((err) => {
              console.error(`Failed to load component "${r}"`);
              reject(err);
            });
          } else {
            resolve($(`main #${r}`));
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
        $.ajax({
          method: 'get',
          url: `/components/${route}.component.html`,
        }).done((data) => {
          $('main').append($(data).fadeOut());
          resolve($(`main #${route}`));
        }).fail((err) => {
          console.error(`Failed to load component "${route}"`);
          reject(err);
        });
      } else {
        resolve($(`main #${route}`));
      }
    });
  };
  this.addRoute = (route, immediatelyLoad = false) => {
    if(!this.availableRoutes.includes(route)){
      this.availableRoutes.push(route);
      if(immediatelyLoad){
        this.loadSinglePage(route);
      }
    }
  }
  this.discardAllRoutes = () => {
    this.loadedRoutes.forEach((r) => {
      $(`#${r}`).remove();
    });
    this.loadedRoutes = [];
  };
  this.discardOneRoute = (route) => {
    if(this.loadedRoutes.includes(route)){
      $(`#${route}`).remove();
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
    el.fadeIn(500);
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