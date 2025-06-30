type TStr = string;
type TNextNode = StringList | null;

class StringList {
  str: TStr;
  next: TNextNode;

  constructor(data: string) {
    this.str = data;
    this.next = null;
  }

  static printList(head: TNextNode) {
    if (head === null) {
      console.log("The list is empty.");
      return;
    }
    while (head !== null) {
      console.log(head?.str);
      head = head?.next;
    }
  }

  static insertFirst(head: TNextNode, data: TStr): StringList {
    const newNode = new StringList(data);
    newNode.next = head;
    return newNode;
  }

  static insertLast(head: TNextNode, data: TStr): StringList {
    const newNode = new StringList(data);
    if (head === null) {
      return newNode;
    }
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;

    return head;
  }

  static insertAtIndex(head: TNextNode, data: TStr, index: number): StringList {
    if (index === 0 || head === null) {
      return StringList.insertFirst(head, data);
    }
    let current = head;
    let i = 0;
    while (current !== null && i < index - 1) {
      //@ts-ignore
      current = current.next;
      i++;
    }
    if (current === null) {
      throw new Error("Index out of bounds");
    }
    const newNode = new StringList(data);
    newNode.next = current.next;
    current.next = newNode;
    return head;
  }

  static insertAfterNode(
    head: TNextNode,
    data: TStr,
    node: TNextNode
  ): StringList {
    if (node === null) {
      throw new Error("Given node cannot be null");
    }
    const newNode = new StringList(data);
    newNode.next = node.next;
    node.next = newNode;
    return head!;
  }

  static deleteFirst(head: TNextNode): TNextNode {
    const current = head;
    head = head ? head?.next : null;
    return head;
  }

  static deleteLast(head: TNextNode): TNextNode {
    if (head === null) {
      return null;
    }
    if (head.next === null) {
      return null;
    }
    let current = head;
    while (current.next && current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    return head;
  }

  static deleteAtIndex(head: TNextNode, index: number): TNextNode {
    if (head === null) {
      return null;
    }
    if (index === 0) {
      return head.next;
    }
    let current = head;
    let i = 0;
    while (current !== null && i < index - 1) {
      //@ts-ignore
      current = current.next;
      i++;
    }
    if (current === null || current.next === null) {
      throw new Error("Index out of bounds");
    }
    current.next = current.next.next;
    return head;
  }
}
(() => {
  let head: TNextNode = new StringList("is");
  let secondNode = new StringList("a");
  let thirdNode = new StringList("some");

  head.next = secondNode;
  secondNode.next = thirdNode;

  // console.log("before add\n");
  // StringList.printList(head);

  // head = StringList.insertFirst(head, "This");
  // console.log("after add\n");
  // StringList.printList(head);

  // console.log("add last\n");
  // head = StringList.insertLast(head, "list");
  // head = StringList.insertLast(head, "another");
  // StringList.printList(head);

  // console.log("add at index\n");
  // head = StringList.insertAtIndex(head, "list", 1);
  // console.log("add at index: 1\n");
  // StringList.printList(head);

  // console.log("add at index: 3\n");
  // head = StringList.insertAtIndex(head, "something", 3);
  // StringList.printList(head);

  // console.log("insert after node\n");
  // head = StringList.insertAfterNode(head, "list", secondNode);
  // StringList.printList(head);

  // console.log("deleting first...");
  // head = StringList.deleteFirst(head);
  // StringList.printList(head);

  // console.log("deleting last...");
  // head = StringList.deleteLast(head);
  // StringList.printList(head);

  console.log("deleting at index...");
  head = StringList.deleteAtIndex(head, 1);
  StringList.printList(head);
})();
