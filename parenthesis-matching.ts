class STRStack {
  top: number;
  arr: string[];
  size: number;

  constructor(size: number = 5) {
    this.top = -1;
    this.arr = [];
    this.size = size;
  }

  isEmpty(): boolean {
    return this.top < 0;
  }

  isFull(): boolean {
    return this.top === this.size - 1;
  }

  push(data: string) {
    if (!this.isFull()) {
      this.top++;
      this.arr[this.top] = data;
    }
  }
  pop(): string {
    if (!this.isEmpty()) {
      const value = this.arr[this.top];
      this.top--;
      return value;
    }
    return "";
  }
}

function isOperator(char: string): boolean {
  return char === "+" || char === "-" || char === "*" || char === "/";
}
function oprtPrecedence(char: string): number {
  if (char === "*" || char === "/") return 3;
  else if (char === "+" || char === "-") return 2;
  else return 0;
}

function infixToPostfixConvertor(infixExpression: string, s: STRStack): string {
  let postfixExpression = "";
  let i = 0,
    j = 0;
  while (i < infixExpression.length) {
    if (infixExpression[i] === " ") {
      i++;
      j++;
    } else if (!isOperator(infixExpression[i])) {
      postfixExpression += infixExpression[i];
      j++;
      i++;
    } else {
      if (oprtPrecedence(infixExpression[i]) > oprtPrecedence(s.arr[s.top])) {
        s.push(infixExpression[i]);
        i++;
      } else {
        postfixExpression += s.pop();
        j++;
      }
    }
  }

  while (!s.isEmpty()) {
    postfixExpression += s.pop();
    j++;
  }
  return postfixExpression;
}

(() => {
  const infixExpression = "m-n*p+q";
  const s = new STRStack(50);

  console.log(infixToPostfixConvertor(infixExpression, s));
})();
