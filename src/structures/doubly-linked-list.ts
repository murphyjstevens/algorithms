type Node<T> = {
  value: T
  prev: Node<T> | undefined
  next: Node<T> | undefined
}

export default class DoublyLinkedList<T> {
  public length: number
  private head: Node<T> | undefined
  private tail: Node<T> | undefined

  constructor() {
    this.length = 0
    this.head = this.tail = undefined
  }

  // Time complexity is O(n)
  findAt(index: number): T | undefined {
    const node = this.findNodeAt(index)
    return node?.value
  }

  private findNodeAt(index: number): Node<T> | undefined {
    if (!this.length || !this.head || !this.tail || index >= this.length || index < 0) {
      return undefined
    }

    if (index === 0) {
      return this.head
    }

    if (index === this.length - 1) {
      return this.tail
    }

    if (index > this.length / 2) {
      return this.findNodeAtFromTail(index)
    } else {
      return this.findNodeAtFromHead(index)
    }
  }

  private findNodeAtFromHead(index: number): Node<T> | undefined {
    if (!this.head) {
      return undefined
    }

    let node: Node<T> | undefined = this.head
    for (let i = 0; i <= index; i++) {
      if (!node) {
        return undefined
      }

      if (i === index) {
        return node
      } else {
        node = node.next
      }
    }

    return undefined
  }

  private findNodeAtFromTail(index: number): Node<T> | undefined {
    if (!this.tail) {
      return undefined
    }

    let node: Node<T> | undefined = this.head
    for (let i = this.length-1; i >= index; i--) {
      if (!node) {
        return undefined
      }

      if (i === index) {
        return node
      } else {
        node = node.next
      }
    }

    return undefined
  }

  // Time complexity is O(1)
  prepend(item: T): void {
    let node = { value: item } as Node<T>
    this.length++

    if (!this.head || !this.tail) {
      this.head = node
      this.tail = node
      return
    }
    
    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  // Time complexity is O(n)
  insertAt(item: T, index: number): void {
    if (!this.length || index > this.length || index < 0) {
      throw 'Index is out of range'
    }

    if (index === 0) {
      this.prepend(item)
      return
    }

    if (index === this.length) {
      this.append(item)
      return
    }

    let node = { value: item } as Node<T>
    this.length++

    let currentNode = this.findNodeAt(index)
    if (!currentNode) {
      throw 'Could not find element at index'
    }

    node.next = currentNode
    node.prev = currentNode.prev

    if (currentNode.prev) {
      currentNode.prev.next = node
    }

    currentNode.prev = node
  }

  // Time complexity is O(1)
  append(item: T): void {
    let node = { value: item } as Node<T>
    this.length++

    if (!this.head || !this.tail) {
      this.head = node
      this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  // Time complexity is O(n)
  remove(item: T): T | undefined {
    if (!this.length || !this.head || !this.tail) {
      return undefined
    }

    let node = this.head
    for (let i = 0; i < this.length; i++) {
      if (!node) {
        return undefined
      }

      if (node.value === item) {
        if (node.prev) {
          node.prev.next = node.next
        }
        if (node.next) {
          node.next.prev = node.prev
        }

        if (i === 0) {
          this.head = node.next
        }

        if (i === this.length - 1) {
          this.tail = node.prev
        }

        return node.value
      }
    }

    return undefined
  }

  // Time complexity is O(n)
  removeAt(index: number): T | undefined {
    if (!this.length || !this.head || !this.tail || index > this.length || index < 0) {
      throw 'Index is out of range'
    }

    let node = this.findNodeAt(index)
    if (!node) {
      throw 'Could not find node at index'
    }

    if (node.prev) {
      node.prev.next = node.next
    }
    if (node.next) {
      node.next.prev = node.prev
    }

    if (index === 0) {
      this.head = node.next
    }
    if (index === this.length - 1) {
      this.tail = node.prev
    }

    return node.value
  }
}
