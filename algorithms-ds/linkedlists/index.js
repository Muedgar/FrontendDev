class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    setNextNode(node) {
        if (node instanceof Node) {
            this.next = node
        }else {
            throw new Error('Only adding instances of Node class.') 
        }
    }

    getNextNode() {
        if (this.next) this.next
    }
}

class SinglyLinkedList {
    // 5 hard methods
}

class DoublyLinkedList {
    // 5 hard methods
}

class CircularSinglyLinkedList {
    // 5 hard methods

}

class CircularDoublyLinkedList {
    // 5 hard methods
}
