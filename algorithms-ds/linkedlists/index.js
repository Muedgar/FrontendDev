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
       return this.next
    }
}

class SinglyLinkedList {
    // 5 hard methods
    constructor(node) {
        this.head = node
    }

    addNodeToHead(node) {
         const temp = this.head
         this.head = node
         node.setNextNode(temp)
    }

    printList() {
        let currNode = this.head
        let output = ""
        while(currNode.getNextNode()!==null) {
            output += currNode.data + " -> "
            currNode = currNode.getNextNode()
        }
        console.log(output, currNode.data)
    }

    addNodeToTail(node) {
        let currNode = this.head
        while(currNode.getNextNode()!==null) {
            currNode = currNode.getNextNode()
        }
        currNode.setNextNode(node)
    }

    removeNthNode() {
        
    }

    reverseList() {

    }

}

const list = new SinglyLinkedList(new Node(1))

list.addNodeToTail(new Node(2))
list.addNodeToTail(new Node(3))
list.addNodeToTail(new Node(4))

list.printList()

class DoublyLinkedList {
    // 5 hard methods
}

class CircularSinglyLinkedList {
    // 5 hard methods

}

class CircularDoublyLinkedList {
    // 5 hard methods
}
