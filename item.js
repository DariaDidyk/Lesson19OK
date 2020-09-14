class Item {
    constructor(content){
        this.content = content;
        this.state = false;
        this.el = document.createElement('li');
        this.el.innerText = content;
        this.setContent(content);
        this.redisterListeners();
    }

    redisterListeners() {
        this.el.addEventListener('click', () => {
            this.toggleState();
        })
    }

    setContent(content) {
        this.el.innerText = content;
    }

    toggleState() {
        this.state = !this.state;
        this.el.classList.toggle('crossed');
    }
}