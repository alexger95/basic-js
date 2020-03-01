const chainMaker = {
    args: [],
    ans: '',

    getLength() {

        return this.args.length;

    },
    addLink(value) {
        this.args.push('( ' + value + ' )');
        return this;

    },
    removeLink(position) {

        if (this.args.length < position || typeof(position) == 'string' || position < 1) {
            this.args = [];
            throw new Error;
        } else {
            this.args.splice(position - 1, 1);
        }

        return this;
    },
    reverseChain() {
        this.args.reverse();
        return this;
    },
    finishChain() {

        this.ans = this.args.join('~~');
        this.args = [];
        return this.ans;
    }
};

module.exports = chainMaker;