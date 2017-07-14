describe('DOMQuery', function() {
  var $ = require('../src/js/dom')
  var container = void (0)

  beforeAll(function() {
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
    expect(nodes.length).toBe(2)
    expect(nodes[0].parentNode.parentNode).toBeNull()
    expect(nodes[1].parentNode.parentNode).toBeNull()
    expect(nodes[0].tagName).toEqual('H2')
    expect(nodes[1].tagName).toEqual('P')
  })

  it('finds elements with context', function () {
    var matches = $('span', $('p')[0])
    expect(matches[0].textContent).toEqual('world')
  })

  describe('empty()', function() {
    it('clears a node of its children', function() {
      var h1 = $('h1').empty()
      expect(h1[0].children.length).toEqual(0)
    })
  })

  describe('text()', function() {
    it('returns text content of node', function() {
      expect($('h1').text()).toEqual('hello')
    })

    it('sets text content of node', function() {
      $('h1').text('goodbye')
      expect($('h1').text()).toEqual('goodbye')
    })
  })

  describe('attr()', function () {
    it('returns attribute value', function () {
      expect($('h1').attr('class')).toEqual('header')
    })

    it('sets attribute value', function () {
      $('h1').attr('class', 'new-value')
      expect($('h1').attr('class')).toEqual('new-value')
    })
  })

  describe('data()', function () {
    it('returns data attribute value', function () {
      expect($('#data-attribute').data('key')).toEqual('data-value')
    })

    it('sets data attribute value', function () {
      $('#data-attribute').data('key', 'new-value')
      expect($('#data-attribute').data('key')).toEqual('new-value')
    })

    it('deserializes data attribute json value', function() {
      var data = $('a[data-item]').data()
      expect(data.item).toEqual(['object-1', 'object-2'])
    })
  })

  describe('find()', function () {
    it('returns found elements', function () {
      var matches = $('body').find('h1')
      var expectedNode = $('h1')[0]
      expect(matches[0]).toBe(expectedNode)
    })
  })

  describe('append()', function () {
    it('appends to html fragment', function () {
      $('body').append('<p>appended</p>')
      var bodyChildren = $('body')[0].children
      expect(bodyChildren[bodyChildren.length - 1].textContent).toEqual('appended')
    })

    it('appends elements', function () {
      var elements = [ document.createElement('div') ]
      $('body').append(elements)
      var div = document.body.children[document.body.children.length - 1]
      expect(elements[0]).toBe(div)
    })
  })

  describe('prepend()', function () {
    it('prepends to html fragment', function () {
      $('body').prepend('<p>prepended</p>')
      expect($('body')[0].firstChild.textContent).toEqual('prepended')
    })

    it('prepends elements', function () {
      var elements = [ document.createElement('div') ]
      $('body').prepend(elements)
      expect(elements[0]).toBe(document.body.firstChild)
    })
  })

  describe('addClass()', function () {
    it('adds class to element', function () {
      $('body').addClass('new-class')
      expect(document.body.className).toEqual('new-class')
    })
  })

  describe('removeClass()', function () {
    it('removes class from element', function () {
      $('h1').removeClass('header')
      expect($('h1')[0].className).toEqual('')
    })
  })

  describe('on()', function () {
    var clickSpy = jasmine.createSpy()

    it('delegates an event listener', function () {
      var selector = 'a:last-child'
      $('body').on('click', selector, clickSpy)
      $(selector)[0].click()
      expect(clickSpy).toHaveBeenCalled()
    })
  })
})
