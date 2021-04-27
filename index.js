// class _Node {
//     constructor(data, next) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//     }

//     push(data) {
//         /* If the stack is empty, then the node will be the
//            top of the stack */
//         if (this.top === null) {
//             this.top = new _Node(data, null);
//             return this.top;
//         }

//         /* If the stack already has something, 
//            then create a new node,
//            add data to the new node, and
//            have the pointer point to the top */
//         const node = new _Node(data, this.top);
//         this.top = node;
//     }

//     pop() {
//         /* In order to remove the top of the stack, you have to point
//            the pointer to the next item and that next item becomes the
//            top of the stack */
//         const node = this.top;
//         this.top = node.next;
//         return node.data;
//     }
// }

// function starTrek() {
//     const plates = new Stack()
//     const arr = ['Kirk', 'Spock', 'McCoy', 'Scotty']

//     for (let i = 0; i < arr.length; i++) {
//         plates.push(arr[i])
//     }

//     return(plates.top)
    
// }

// console.log(starTrek())

class _Node{
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null) 
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }

    peek() {
        const node = this.top
        return node.data
    }

    display() {
        
    }

    isEmpty() {
        if(this.top === null) {
            return ("Empty")
        }
    }
}

const stack = new Stack()

stack.push(5)
stack.push(4)

console.log(stack.isEmpty())
// class _Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null
//         this.last = null
//     }

//     enqueue(data) {
//         const node = new _Node(data)

//         if(this.first === null) {
//             this.first = node
//         }

//         if (this.last) {
//             this.last.next = node
//         }

//         this.last = node
//     }

//     dequeue() {
//         if(this.first === null) {
//             return
//         }
//         const node =  this.first
//         this.first = this.first.next

//         if(node === this.last) {
//             this.last = null
//         }
//         return node.value
//     }
// }