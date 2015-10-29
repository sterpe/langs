'use strict'

function SingleLinkedList () {
  this.root = null
  this.head = null
}
SingleLinkedList.prototype.Node = function (data) {
  this.data = data
  this.next = null
}
SingleLinkedList.prototype.append = function (node) {
  if (!this.root) {
    this.root = node
    this.head = node
  } else {
    this.head.next = node
  }
}
SingleLinkedList.prototype.remove = function (node) {
}
