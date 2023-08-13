import DoublyLinkedList from '@structures/doubly-linked-list'

describe('doubly-linked-list', () => {

  // Find is tested in prepend

  describe('prepend', () => {
    it('should add item', () => {
      const expectedValue = 5

      const list = new DoublyLinkedList<number>()
      list.prepend(expectedValue)

      expect(list.length).toEqual(1)
      expect(list.findAt(0)).toEqual(expectedValue)
    })

    it('should add to start', () => {
      const firstValue = 2
      const lastValue = 5

      const list = new DoublyLinkedList<number>()
      list.prepend(lastValue)
      list.prepend(3)
      list.prepend(firstValue)

      expect(list.length).toEqual(3)
      expect(list.findAt(0)).toEqual(firstValue)
      expect(list.findAt(2)).toEqual(lastValue)
    })
  })

  describe('insertAt', () => {
    it('should insert at index', () => {
      const firstValue = 20
      const middleValue = 40

      const list = new DoublyLinkedList<number>()
      list.insertAt(30, 0)
      list.insertAt(firstValue, 0)
      list.insertAt(middleValue, 1)

      expect(list.length).toEqual(3)
      expect(list.findAt(0)).toEqual(firstValue)
      expect(list.findAt(1)).toEqual(middleValue)
    })

    it('should not insert at invalid index', () => {
      const list = new DoublyLinkedList<number>()
      expect(() => {
        list.insertAt(5, -2)
      }).toThrow()
    })
  })

  describe('append', () => {
    it('should add item', () => {
      const expected = 5

      const list = new DoublyLinkedList<number>()
      list.append(expected)

      expect(list.length).toEqual(1)
      expect(list.findAt(0)).toEqual(expected)
    })

    it('should add at end', () => {
      const lastValue = 33
      const firstValue = 22

      const list = new DoublyLinkedList<number>()
      list.append(firstValue)
      list.append(lastValue)

      expect(list.length).toEqual(2)
      expect(list.findAt(0)).toEqual(firstValue)
      expect(list.findAt(1)).toEqual(lastValue)
    })
  })

  describe('remove', () => {
    it('should remove item', () => {
      const value = 5

      const list = new DoublyLinkedList<number>()
      list.prepend(value)
      const deletedValue = list.remove(value)

      expect(deletedValue).toEqual(value)
      expect(list.length).toEqual(0)
      expect(list.findAt(0)).toBe(undefined)
    })

    it('should return undefined if item does not exist', () => {
      const list = new DoublyLinkedList<number>()
      list.prepend(3)
      list.prepend(5)
      const deletedValue = list.remove(33)

      expect(deletedValue).toBe(undefined)
      expect(list.length).toEqual(2)
    })
  })

  describe('removeAt', () => {
    it('should remove item', () => {
      const value = 5

      const list = new DoublyLinkedList<number>()
      list.prepend(5)
      list.append(10)
      list.append(value)
      list.append(22)
      const deletedValue = list.removeAt(2)

      expect(deletedValue).toEqual(value)
      expect(list.length).toEqual(3)
      expect(list.findAt(2)).toEqual(22)
    })

    it('should error on remove at invalid index', () => {
      const list = new DoublyLinkedList<number>()
      list.append(5)
      list.append(10)
      expect(() => {
        list.removeAt(12)
      }).toThrow()
    })
  })
})
