const quantity = document.querySelector("#quantity--sum");
const inputQty = document.querySelector("#quantity");

const inputOrders = document.querySelector("#orders");
const orders = document.querySelector("#orders--sum");


const accCheck = document.querySelector("#accounting");
const acc = document.querySelector("#accounting--sum");

const terminalCheck = document.querySelector("#terminal");
const terminal = document.querySelector("#terminal--sum");


const packageChoose = document.querySelector("#package");
const package = document.querySelector("package--sum");


const sumBox = document.querySelector(".summary");
const form = document.querySelector(".calc__select");

const sumArr = [];

const price = {
    qty: 0.25,
    orders: 0.5,
    package: {
        basic: 0,
        proff: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
}
let sumValue;

const addQty = (form, input, price) => {
    const newItem = form.querySelector(".qty");
    const newSum = form.querySelector(".sum");

    const counting = input.value > 0 ? `${input.value} * ${price}$` : "";
    const sum = input.value > 0 ? `${input.value * price}` : price;
    newItem.innerText = counting;
    newSum.innerText = sum + "$";
    sumValue = Number(sum);
    return sumValue;
}
const select = (e) => {
    const item = document.querySelector(".option");
    if (e.target.value === "basic") {
        item.textContent = price.package.basic + "$";
        return sumValue = price.package.basic;
    }
    if (e.target.value === "proffessional") {
        item.textContent = price.package.proff + "$";
        return sumValue = price.package.proff;
    }

    if (e.target.value === "premium") {
        item.textContent = price.package.premium + "$";
        return sumValue = price.package.premium;
    };

}
const summary = (sumArr) => {
    if (sumArr.length > 1) {
        const sum = sumArr.reduce((a, b) => {
            return a + b;
        })
        sumBox.innerText = sum.toFixed(2) + "$";
    }
}

const events = () => {

    inputQty.addEventListener("change", e => {
        e.preventDefault;
        addQty(quantity, inputQty, price.qty);
        sumArr.push(sumValue);
    });

    inputOrders.addEventListener("change", e => {
        e.preventDefault;
        addQty(orders, inputOrders, price.orders);
        sumArr.push(sumValue);
    });

    accCheck.addEventListener("change", e => {
        e.preventDefault;
        addQty(acc, accCheck, price.accounting);
        sumArr.push(sumValue);
    });

    terminalCheck.addEventListener("change", e => {
        e.preventDefaultl
        addQty(terminal, terminalCheck, price.terminal);
        sumArr.push(sumValue);
    });

    packageChoose.addEventListener("change", e => {
        e.preventDefault;
        select(e);
        sumArr.push(sumValue);
    });

    console.log(sumArr);

    form.addEventListener("change", e => {
        e.preventDefault();
        summary(sumArr);
    });

}

events();


