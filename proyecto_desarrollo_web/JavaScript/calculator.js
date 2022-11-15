function add(num1, num2) {
    return num1 + num2;
}
function rest(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function split(num1, num2) {
    return num1 / num2;
}
function calculator(num1, num2, operations) {
    operations(num1, num2);
}
operations(10, 5, split);

