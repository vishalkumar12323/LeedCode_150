var STRStack = /** @class */ (function () {
    function STRStack(size) {
        if (size === void 0) { size = 5; }
        this.top = -1;
        this.arr = [];
        this.size = size;
    }
    STRStack.prototype.isEmpty = function () {
        return this.top < 0;
    };
    STRStack.prototype.isFull = function () {
        return this.top === this.size - 1;
    };
    STRStack.prototype.push = function (data) {
        if (!this.isFull()) {
            this.top++;
            this.arr[this.top] = data;
        }
    };
    STRStack.prototype.pop = function () {
        if (!this.isEmpty()) {
            var value = this.arr[this.top];
            this.top--;
            return value;
        }
        return "";
    };
    return STRStack;
}());
function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
}
function oprtPrecedence(char) {
    if (char === "*" || char === "/")
        return 3;
    else if (char === "+" || char === "-")
        return 2;
    else
        return 0;
}
function infixToPostfixConvertor(infixExpression, s) {
    var postfixExpression = "";
    var i = 0, j = 0;
    while (i < infixExpression.length) {
        if (infixExpression[i] === " ") {
            i++;
            j++;
        }
        else if (!isOperator(infixExpression[i])) {
            postfixExpression += infixExpression[i];
            j++;
            i++;
        }
        else {
            if (oprtPrecedence(infixExpression[i]) > oprtPrecedence(s.arr[s.top])) {
                s.push(infixExpression[i]);
                i++;
            }
            else {
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
(function () {
    var infixExpression = "m-n*p+q";
    var s = new STRStack(50);
    console.log(infixToPostfixConvertor(infixExpression, s)); // output: pq-r/- expected: pq-ra/-
})();
