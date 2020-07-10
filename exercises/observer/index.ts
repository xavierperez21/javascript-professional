interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}


class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor () {
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;    // When this callback finds the match, it will return the index of that observer
        })

        this.observers.splice(index, 1);    //splice removes observers from the index passed in the firs parameter until the second that in this case is just 1 so we will remove the element that has the index passed in the first argument
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}


class PriceDisplay implements Observer {
    private el: HTMLElement;

    constructor () {
        this.el = document.querySelector("#price");
    }

    update (data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => {
    value.unsubscribe(display);
}, 3000);