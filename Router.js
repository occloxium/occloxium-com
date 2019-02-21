import {DOMHelper} from './DOMHelper';

export class Router {
  constructor(availableRoutes) {
    this.loadedRoutes = [];
    this.transitionTime = 500;
    this.availableRoutes = availableRoutes;
  }
  get(url) {
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
  }
  loadAllRoutes() {
    return new Promise((resolve, reject) => {
      Promise.all(this.availableRoutes.map((r) => {
        return new Promise((resolve, reject) => {
          if (!this.loadedRoutes.includes(r)) {
            this.loadedRoutes.push(r);
            this.get(`/components/${r}.component.html`).then((data) => {
              DOMHelper.append('main', data);
              DOMHelper.hide(`main #${r}`);
              resolve(document.querySelector(`main #${r}`));
            }).catch((err) => {
              console.error(`Failed to load component "${r}"`);
              reject(err);
            });
          }
          else {
            resolve(document.querySelector(`main #${r}`));
          }
        });
      })).then((p) => {
        resolve(p);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  loadSinglePage(route) {
    return new Promise((resolve, reject) => {
      if (!this.loadedRoutes.includes(route)) {
        this.loadedRoutes.push(route);
        this.get(`/components/${route}.component.html`).then((data) => {
          DOMHelper.append('main', data);
          DOMHelper.hide(`main #${route}`);
          resolve(document.querySelector(`main #${route}`));
        }).catch((err) => {
          console.error(`Failed to load component "${route}"`);
          reject(err);
        });
      }
      else {
        resolve(document.querySelector(`main #${r}`));
      }
    });
  }
  addRoute(route, immediatelyLoad = false) {
    if (!this.availableRoutes.includes(route)) {
      this.availableRoutes.push(route);
      if (immediatelyLoad) {
        this.loadSinglePage(route);
      }
    }
  }
  discardAllRoutes() {
    this.loadedRoutes.forEach((r) => {
      let el = document.querySelector(`#${r}`);
      el.parentElement.removeChild(el);
    });
    this.loadedRoutes = [];
  }
  discardOneRoute(route) {
    if (this.loadedRoutes.includes(route)) {
      let el = document.querySelector(`#${route}`);
      el.parentElement.removeChild(el);
      this.loadedRoutes.splice(this.loadedRoutes.indexOf(route), 1);
    }
  }
  ;
}
