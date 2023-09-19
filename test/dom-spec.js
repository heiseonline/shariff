const assert = require('assert')

describe('DOMQuery', function() {
  var $ = require('../src/js/dom')
  var container = void (0)

  before(() => {
    container = document.createElement('div')
    container.id = 'spec-html-container'
    document.body.appendChild(container)
  })

  beforeEach(function() {
    container.innerHTML = `
      <h1 class="header">hello</h1>
      <p data-universe=""><span>world</span></p>
      <span id="data-attribute" data-key="data-value"></span>
      <a href="#nowhere" data-item="[&quot;object-1&quot;,&quot;object-2&quot;]">click!</a>'
    `
  })

  it('creates nodes from html fragment', function () {
    var nodes = $('<h2>Heading level 2</h2><p>Paragraph</p>')
    assert.equal(nodes.length, 2)
    assert.equal(nodes[0].parentNode.parentNode, null)
    assert.equal(nodes[1].parentNode.parentNode, null)
    assert.equal(nodes[0].tagName, 'H2')
    assert.equal(nodes[1].tagName, 'P')
  })

  it('finds elements with context', function () {
    var matches = $('span', $('p')[0])
    assert.equal(matches[0].textContent, 'world')
  })

  describe('empty()', function() {
    it('clears a node of its children', function() {
      var h1 = $('h1').empty()
      assert.equal(h1[0].children.length, 0)
    })
  })

  describe('text()', function() {
    it('returns text content of node', function() {
      assert.equal($('h1').text(), 'hello')
    })

    it('sets text content of node', function() {
      $('h1').text('goodbye')
      assert.equal($('h1').text(), 'goodbye')
    })
  })

  describe('attr()', function () {
    it('returns attribute value', function () {
      assert.equal($('h1').attr('class'), 'header')
    })

    it('sets attribute value', function () {
      $('h1').attr('class', 'new-value')
      assert.equal($('h1').attr('class'), 'new-value')
    })
  })

  describe('data()', function () {
    it('returns data attribute value', function () {
      assert.equal($('#data-attribute').data('key'), 'data-value')
    })

    it('sets data attribute value', function () {
      $('#data-attribute').data('key', 'new-value')
      assert.equal($('#data-attribute').data('key'), 'new-value')
    })

    it('deserializes data attribute json value', function() {
      var data = $('a[data-item]').data()
      assert.deepEqual(data.item, ['object-1', 'object-2'])
    })
  })

  describe('find()', function () {
    it('returns found elements', function () {
      var matches = $('body').find('h1')
      var expectedNode = $('h1')[0]
      assert.equal(matches[0], expectedNode)
    })
  })

  describe('append()', function () {
    it('appends to html fragment', function () {
      $('body').append('<p>appended</p>')
      var bodyChildren = $('body')[0].children
      assert.equal(bodyChildren[bodyChildren.length - 1].textContent, 'appended')
    })

    it('appends elements', function () {
      var elements = [ document.createElement('div') ]
      $('body').append(elements)
      var div = document.body.children[document.body.children.length - 1]
      assert.equal(elements[0], div)
    })
  })

  describe('prepend()', function () {
    it('prepends to html fragment', function () {
      $('body').prepend('<p>prepended</p>')
      assert.equal($('body')[0].firstChild.textContent, 'prepended')
    })

    it('prepends elements', function () {
      var elements = [ document.createElement('div') ]
      $('body').prepend(elements)
      assert.equal(elements[0], document.body.firstChild)
    })
  })

  describe('addClass()', function () {
    it('adds class to element', function () {
      $('body').addClass('new-class')
      assert.equal(document.body.className, 'new-class')
    })
  })

  describe('removeClass()', function () {
    it('removes class from element', function () {
      $('h1').removeClass('header')
      assert.equal($('h1')[0].className, '')
    })
  })

  describe('on()', function () {
    let clicked = false

    it('delegates an event listener', function () {
      var selector = 'a:last-child'
      $('body').on('click', selector, () => { clicked = true })
      $(selector)[0].click()
      assert.ok(clicked)
    })
  })

  describe('trigger()', function () {
    let custom_detail = false

    it('triggers an event', function () {
      var selector = 'a:last-child'
      $('body').on('custom', selector, (event) => { custom_detail = event.detail })
      $(selector).trigger('custom', {'hello': 'world'})
      assert.deepEqual(custom_detail, {'hello': 'world'})
    })
  })
})
