/**
 * Stack implementation using array
 */

interface stackInterface<dataType> {
    push(data: dataType): void;
    pop(): dataType | null | undefined;
    peek(): dataType | null;
    isEmpty(): boolean;
    isFull(): boolean;
    size(): number;
    printStack(): void;
}

class StackArrays<dataType> implements stackInterface<dataType> {
    private data: Array<dataType> = [];
    private stackSize: number = 0;

    constructor(size: number) {
        this.stackSize = size;
    }

    push(dataItem: dataType): void {
        if(this.isFull()) {
            throw new Error("Stack is Full");
        }
        this.data.push(dataItem);
    }

    pop(): dataType | null | undefined {
        if(this.isEmpty()) {
            throw new Error("Stack is Exmpty");
        }
        return this.data.pop();
    }

    peek(): dataType | null {
        return this.data[this.size() - 1];
    }

    isEmpty(): boolean {
        if(this.data.length <= 0)
            return true;
        return false;
    }

    isFull(): boolean {
        if(this.data.length >= this.stackSize) 
            return true;
        return false;
    }

    size(): number {
        return this.data.length;
    }

    printStack(): void {
        this.data.forEach(element => {
            console.log(element);
        });
    }
}

const arr = new StackArrays<number>(3);

arr.push(10);
arr.push(20);
arr.push(30);

console.log("Peek Element " + arr.peek());
console.log("Is stack full? " + arr.isFull());
console.log("Popped element is " + arr.pop());
console.log("Stack Size " + arr.size());
console.log("Is stack empty? " + arr.isEmpty());
console.log("Stack Elements");
arr.printStack();