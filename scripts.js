class Dropdown {
    constructor(array, cb) {
        this.array = array;
    }
    create() {
        let ul = document.createElement("ul");

        for (let item of this.array) {
            let li = document.createElement("li");
            li.innerText = item;
            ul.append(li);
            li.addEventListener("click", () => {
                this.cb(li.innerText);
            });
        }

        return ul;
    }

    get element() {
        return this.create();
    }
}

const dropdown = new Dropdown(
    ["элемент-1", "элемент-2", "элемент-3", "элемент-4"],
    (selectedValue) => {
        console.log(selectedValue);
    }
);
document.body.append(dropdown.element);