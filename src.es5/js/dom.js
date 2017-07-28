'use strict';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

if (typeof Object.assign !== 'function') {
  // jshint maxdepth:4
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    if (target === null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource !== null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

/**
 * Initialization helper. This method is this module's exported entry point.
 * @param {string|Array|Element} selector - css selector, one element, array of nodes or html fragment
 * @param {node} [context=document] - context node in which to query
 * @returns {DOMQuery} A DOMQuery instance containing the selected set of nodes
 */
function dq(selector, context) {
  var nodes = [];
  context = context || document;
  if (typeof selector === 'function') {
    if (context.attachEvent ? context.readyState === 'complete' : context.readyState !== 'loading') {
      selector();
    } else {
      context.addEventListener('DOMContentLoaded', selector);
    }
  } else if (selector instanceof Element) {
    nodes = [selector];
  } else if (typeof selector === 'string') {
    if (selector[0] === '<') {
      nodes = Array.prototype.slice.call(fragment(selector));
    } else {
      nodes = Array.prototype.slice.call(context.querySelectorAll(selector));
    }
  } else {
    nodes = selector;
  }
  return new DOMQuery(nodes, context);
}

/**
 * Contains a set of DOM nodes and provides methods to manipulate the nodes.
 * @constructor
 */
function DOMQuery(elements, context) {
  this.length = elements.length;
  this.context = context;
  var self = this;
  each(elements, function (i) {
    self[i] = this;
  });
}

/**
 * Iterates through each node and calls the callback in its context.
 * @param {eachArrayCallback} callback - A function to be called with a node
 * @returns {DOMQuery}
 */
DOMQuery.prototype.each = function (callback) {
  for (var i = this.length - 1; i >= 0; i--) {
    callback.call(this[i], i, this[i]);
  }
  return this;
};

/**
 * Empties each node.
 * @returns {DOMQuery}
 */
DOMQuery.prototype.empty = function () {
  return this.each(empty);
};

/**
 * Sets the text content of each node. Returns the text content of the first node.
 * @param {string} [text] - The text content to set
 * @returns {DOMQuery|string}
 */
DOMQuery.prototype.text = function (text) {
  if (text === undefined) {
    return this[0].textContent;
  }
  return this.each(function () {
    this.textContent = text;
  });
};

/**
 * Sets an attribute on each node. Returns the attribute's value of the first node.
 * @param {string} [name] - The attribute's name
 * @param {string} [value] - The value to set
 * @returns {DOMQuery|string}
 */
DOMQuery.prototype.attr = function (name, value) {
  if (this.length < 1) {
    return null;
  }
  if (value === undefined) {
    return this[0].getAttribute(name);
  }
  return this.each(function () {
    this.setAttribute(name, value);
  });
};

/**
 * Sets a data attribute on each node. Returns the data attribute's value of the first node.
 * Supports deserialization of complex data types as values.
 * @param {string} [key] - The attribute's name
 * @param {string} [value] - The value to set
 * @returns {DOMQuery|string|Object}
 */
DOMQuery.prototype.data = function (key, value) {
  if (value) {
    return this.attr('data-' + key, value);
  }
  if (key) {
    return this.attr('data-' + key);
  }
  var data = Object.assign({}, this[0].dataset);
  each(data, function (k, v) {
    data[k] = deserializeValue(v);
  });
  return data;
};

/**
 * Returns a new DOMQuery instance containing all matched nodes in the context
 * of the set of nodes.
 * @param {string} selector - The CSS selector
 * @returns {DOMQuery}
 */
DOMQuery.prototype.find = function (selector) {
  var matches;
  // querySelectorAll in the context of each element in the set
  matches = map(this, function (el) {
    return el.querySelectorAll(selector);
  });
  // convert NodeList matches into Array
  matches = map(matches, function (el) {
    return Array.prototype.slice.call(el);
  });
  // flatten the array
  matches = Array.prototype.concat.apply([], matches);
  return new DOMQuery(matches);
};

/**
 * Appends nodes to the end of the first node in the set.
 * @param {string|Array} html - Nodes to append. May be a string containing HTML.
 * @returns {DOMQuery}
 */
DOMQuery.prototype.append = function (html) {
  if (typeof html === 'string') {
    html = fragment(html);
  }
  append(this[0], html);
  return this;
};

/**
 * Prepends nodes at the top of the first node in the set.
 * @param {string|Array} html - Nodes to append. May be a string containing HTML.
 * @returns {DOMQuery}
 */
DOMQuery.prototype.prepend = function (html) {
  if (typeof html === 'string') {
    html = fragment(html);
  }
  prepend(this[0], html);
  return this;
};

/**
 * Adds a CSS class name to the nodes in the set.
 * @param {string} name - Class name to add
 * @returns {DOMQuery}
 */
DOMQuery.prototype.addClass = function (names) {
  return this.each(function () {
    var _classList;

    (_classList = this.classList).add.apply(_classList, _toConsumableArray(names.split(' ')));
  });
};

/**
 * Removes a CSS class name from the nodes in the set.
 * @param {string} name - Class name to remove
 * @returns {DOMQuery}
 */
DOMQuery.prototype.removeClass = function (name) {
  return this.each(function () {
    this.classList.remove(name);
  });
};

/**
 * Delegates an event for a node matching a selector to each element in the set.
 * @param {string} event - The event name
 * @param {string} selector - The CSS selector
 * @param {eventHandler} handler - The event handler function
 * @returns {DOMQuery}
 */
DOMQuery.prototype.on = function (event, selector, handler) {
  return this.each(function () {
    delegateEvent(selector, event, handler, this);
  });
};

/**
 * Removes each child of a node.
 * @private
 */
var empty = function empty() {
  while (this.hasChildNodes()) {
    this.removeChild(this.firstChild);
  }
};

/**
 * Callback function used for map(array, callback).
 *
 * @callback mapCallback
 * @param {Object} object - An element of the array
 * @return {Array}
 * @see map
 */

/**
 * Runs a callback with each element in an array and returns a new array.
 * @param {Array} objects - The array to iterate
 * @param {function} callback - The callback function
 * @returns {Array}
 */
var map = function map(objects, callback) {
  return Array.prototype.map.call(objects, callback);
};

/**
 * Callback function used for each(array, callback).
 * Called in the context of each element in the array.
 *
 * @callback eachArrayCallback
 * @param {number} index - Index of the current array element
 * @param {object} value - Element of the array
 * @return {Array}
 * @see each
 */

/**
 * Callback function used for each(object, callback).
 * Called in the context of each object property value.
 *
 * @callback eachObjectCallback
 * @param {Object} key - The object's property key
 * @param {object} value - The object's property value
 * @return {Array}
 * @see each
 */

/**
 * Runs a callback with each element in an array or key-value pair of an object.
 * Returns the original object/array.
 * @param {Object} object - The object to itrate
 * @param {eachArrayCallback|eachObjectCallback} callback - The callback function
 * @returns {Array}
 */
var each = function each(object, callback) {
  if (object instanceof Array) {
    for (var i = 0; i < object.length; i++) {
      callback.call(object[i], i, object[i]);
    }
  } else if (object instanceof Object) {
    for (var prop in object) {
      callback.call(object[prop], prop, object[prop], object);
    }
  }
  return object;
};

/**
 * Constructs HTML nodes from a string of HTML.
 * @param {string} html - String of HTML code
 * @returns {Array}
 * @private
 */
var fragment = function fragment(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children;
};

/**
 * Appends an array of nodes to the end of an HTML element.
 * @param {Element} parent - Element to append to
 * @param {Array} nodes - Collection of nodes to append
 * @private
 */
var append = function append(parent, nodes) {
  for (var i = 0; i < nodes.length; i++) {
    parent.appendChild(nodes[i]);
  }
};

/**
 * Prepends an array of nodes to the top of an HTML element.
 * @param {Element} parent - Element to prepend to
 * @param {Array} nodes - Collection of nodes to prepend
 * @private
 */
var prepend = function prepend(parent, nodes) {
  for (var i = nodes.length - 1; i >= 0; i--) {
    parent.insertBefore(nodes[nodes.length - 1], parent.firstChild);
  }
};

/**
 * Returns the closest parent of a node matching a CSS selector.
 * @param {HTMLElement} element - Element to append to
 * @param {string} selector - CSS selector
 * @param {HTMLElement}
 * @private
 * @see {@link https://gist.github.com/Daniel-Hug/abbded91dd55466e590b}
 */
var closest = function () {
  var element = HTMLElement.prototype;
  var matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;

  return function closest(element, selector) {
    if (element === null) return;
    return matches.call(element, selector) ? element : closest(element.parentElement, selector);
  };
}();

/**
 * An event handler.
 *
 * @callback eventHandler
 * @param {Event} event - The event this handler was triggered for
 */

/**
 * Delegates an event for a node matching a selector.
 * @param {string} selector - The CSS selector
 * @param {string} event - The event name
 * @param {eventHandler} handler - The event handler function
 * @param {HTMLElement} [scope=document] - Element to add the event listener to
 * @private
 */
var delegateEvent = function delegateEvent(selector, event, handler, scope) {
  (scope || document).addEventListener(event, function (event) {
    var listeningTarget = closest(event.target, selector);
    if (listeningTarget) {
      handler.call(listeningTarget, event);
    }
  });
};

/**
 * Extends properties of all arguments into a single object.
 * @param {...Object} objects - Objects to merge
 * @param {string} event - The event name
 * @param {function} handler - The event handler function
 * @returns {Object}
 * @see {@link https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/}
 */
var extend = function extend(objects) {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};

/**
 * The callback function for getJSON().
 *
 * @callback xhrCallback
 * @param {boolean} success - True on success. False on error.
 * @param {Object} data - The parsed data. null if success == false
 * @param {XMLHttpRequest} xhr - The request object
 * @see getJSON
 */

/**
 * Runs an Ajax request against a url and calls the callback function with
 * the parsed JSON result.
 * @param {string} url - The url to request
 * @param {xhrCallback} callback - The callback function
 * @returns {XMLHttpRequest}
 */
var getJSON = function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      var data = JSON.parse(xhr.responseText);
      callback(data, xhr.status, xhr);
    } else {
      callback(null, xhr.status, xhr);
    }
  };

  xhr.onerror = function (e) {
    callback(new Error(e), null, xhr);
  };

  xhr.send();
};

/**
 * Deserializes JSON values from strings. Used with data attributes.
 * @param {string} value - String to parse
 * @returns {Object}
 * @private
 */
var deserializeValue = function deserializeValue(value) {
  /* jshint maxcomplexity:7 */
  // boolean
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  // null
  if (value === 'null') {
    return null;
  }
  // number
  if (+value + '' === value) {
    return +value;
  }
  // json
  if (/^[[{]/.test(value)) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  // everything else
  return value;
};

dq.extend = extend;
dq.map = map;
dq.each = each;
dq.getJSON = getJSON;

module.exports = dq;