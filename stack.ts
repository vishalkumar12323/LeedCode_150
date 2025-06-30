class LinkList {
  element: number;
  next: LinkList | null;
  constructor(data: number) {
    this.element = data;
    this.next = null;
  }
}
class Stack {
  head: LinkList | null;
  constructor() {
    this.head = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  push(data: number) {
    const newNode = new LinkList(data);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  pop(): number | null {
    if (this.isEmpty()) return -1;
    const top = this.head ? this.head?.element : null;
    this.head = this.head ? this.head?.next : null;
    return top;
  }

  pushAtBottom(data: number, s: Stack) {
    if (s.isEmpty()) {
      s.push(data);
      return;
    }
    const top = s.pop();
    this.pushAtBottom(data, s);
    this.push(top);
  }

  reverse(s: Stack) {
    if (s.isEmpty()) return;
    const top = s.pop();
    this.reverse(s);
    this.pushAtBottom(top, s);
  }
  peek(): number | null {
    if (this.isEmpty()) return -1;
    return this.head ? this.head?.element : null;
  }
}

(() => {
  const s = new Stack();
  s.push(5);
  s.push(15);
  s.push(25);
  s.push(35);

  s.reverse(s);
  while (!s.isEmpty()) {
    console.log(s.peek());
    s.pop();
  }
})();
