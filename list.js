// class Render 
class List {
    constructor(elWrapper){
        this.elWrapper = elWrapper;
        this._items = []; 
        this.el = document.createElement('ul');
        this.render();  // 
    }

    addItem(item) {
        this._items = [...this._items, item];
        this.el.append(item.el);
    }

    createCross() {
        const cross = document.createElement('span');
        cross.innerText = 'x';
        return cross;
    }

    deleteItem(index) {
        const el = [...this._items];
        el.splice(index, 1);
        this._items = el;
        this.render();
        // this._item = [this.items.slice(0, index), this._items.slice(index)];
    }

    toggleItem(index) {
        this._items[index].toggleState();
        this.render();
    }

    renderItems() {
        return ` 
            <ul id = 'app-list'>
                ${this._items
                    .map(
                    (item) => `
                        <li class="${item.state ? 'crossed' : ''}">${item.content}</li>
                    `
                    )
                .join('')}
            </ul>
        `;
    }

    // renderItemsByDOMMethods() {
    //     // this.elWrapper.innerHtml = '';
    //     // const ul = document.createElement('ul');
    //     this._items.forEach((item) => {
    //         const li = document.createElement('li');
    //         this.ul.append(li);
    //     })
    //     // console.log(ul);
    //     this.elWrapper.append(ul);
    // }

    render() {
        // console.log(this.renderItem());
        // document.body.innerHTML = this.renderItems();
        // this.renderItemsByDOMMethods();


        this.elWrapper.append(this.el);


        // div = function click(event) { // все переделать
        //     div.onclick;
        // console.log(div);
        // }
        // div = function click2(event) { 
        //     div.onclick;
        // console.log(div);
        // }

        // div.addList('click', function (event) {
        //     div.onclick;
        //     console.log(div);
        // })
    }
}