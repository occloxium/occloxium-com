/**
 * The default transition time for fades
 * This does not actually affect any animation, it is only used
 * for asynchronous triggers to affect element classes
 * @property {number} [TRANSITION_TIME=500] transition time
 */
export let TRANSITION_TIME = 500;

export class DOMHelper {
  /**
   * @returns {number} the default transition time for fades
   */
  static getTransitionTime() {
    return TRANSITION_TIME;
  }
  /**
   * Sets the default transition time
   * @param {number} [time=500] time must be less than 1000ms
   */
  static setTransitionTime(time) {
    return (typeof time === 'number' && time <= 1000
      ? TRANSITION_TIME = time
      : TRANSITION_TIME = 500);
  }
  /**
   * This is used to generalize the way the helper functions are used
   * Functions that already have an element can use this as a proxy
   * and such with only (query) strings can query the actual element
   * @see {Facade Pattern}
   * @param {string|Element} el either a query string or an element
   * @return {Element} The first element queried
   */
  static query(el) {
    if (typeof el === 'string') {
      // parameter probably is a query string, query the DOM first
      return document.querySelector(el);
    }
    else if (el instanceof Element) {
      // parameter is an element, no further querying to do
      return el;
    }
    else {
      throw new Error(`Incompatible parameter type: ${typeof el}`);
    }
  }
  /**
   * Appends HTML code to an element
   * @param {Element} parent the parent element to insert into
   * @param {string} html the code to insert
   */
  static append(parent, html) {
    document.querySelector(parent).insertAdjacentHTML('beforeend', html);
  }
  /**
   * Shows a previously hidden element by removing the 'is-hidden' class
   * The CSS class HAS TO BE defined in your stylesheets
   */
  static show(el, time = 0) {
    let element = DOMHelper.query(el);
    element.classList.add('is-animating');
    setTimeout(() => {
      element.classList.remove('is-animating');
      element.classList.remove('is-hidden');
    }, time);
  }
  /**
   * Hides an element by adding the 'is-hidden' class
   * The CSS class HAS TO BE defined in your stylesheets
   */
  static hide(el, time = 0) {
    let element = DOMHelper.query(el);
    element.classList.add('is-animating');
    element.classList.add('is-hidden');
    setTimeout(() => {
      element.classList.remove('is-animating');
    }, time);
  }
  static click(el) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    DOMHelper.query(el).dispatchEvent(event);
  }
  /**
   * Fades in a previously hidden element with CSS classes
   * @see DOMHelper.hide()
   * @param {string|Element} el element to fade in
   * @returns {Promise<Element>} Promise with DOM element that was animated
   */
  static fadeIn(el) {
    return new Promise((resolve) => {
      let element = DOMHelper.query(el);
      element.classList.remove('is-hidden');
      element.classList.add('is-fading-in');
      element.classList.add('is-animating');
      setTimeout(() => {
        resolve(element);
      }, DOMHelper.getTransitionTime());
    }).then((element) => {
      element.classList.remove('is-fading-in');
      element.classList.remove('is-animating');
    });
  }
  /**
   * Fades out an element and adds the 'is-hidden' class afterwards
   * @see DOMHelper.hide()
   * @param {string|Element} el element to fade out
   * @returns {Promise<Element>} Promise with DOM element that was animated
   */
  static fadeOut(el) {
    return new Promise((resolve) => {
      let element = DOMHelper.query(el);
      element.classList.add('is-fading-out', 'is-animating', 'is-hidden');
      setTimeout(() => {
        resolve(element);
      }, DOMHelper.getTransitionTime());
    }).then((element) => {
      element.classList.remove('is-fading-out');
      element.classList.remove('is-animating');
      
    });
  }
  /**
   * Slides up a previously hidden element with CSS classes
   * @see DOMHelper.hide()
   * @param {string|Element} el element to slide down   
   * @param {number} time time taken to slide up element
   * @returns {Promise<Element>} Promise with DOM element that was animated
   */
  static slideUp(el, time = 0) {
    return new Promise((resolve) => {
      let element = DOMHelper.query(el);
      // element.classList.remove('is-hidden');
      setTimeout(() => {
        resolve(element);
      }, time);
    }).then((element) => {

    });
  }
  /**
   * slides down an element and adds the 'is-hidden' class afterwards
   * @see DOMHelper.hide()
   * @param {string|Element} el element to slide up   
   * @param {number} time time taken to slide up element
   * @returns {Promise<Element>} Promise with DOM element that was animated
   */
  static slideDown(el, time = 0) {
    return new Promise((resolve) => {
      let element = DOMHelper.query(el);
      setTimeout(() => {
        resolve(element);
      }, time);
    }).then((element) => {
      // element.classList.add('is-hidden');
    });
  }
}
