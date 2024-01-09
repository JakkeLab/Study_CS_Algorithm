class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
        this.height = 1;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    preOrderTraveral(tree) {
        if(tree == null) return;
        console.log(tree.data);
        this.preOrderTraveral(tree.getLeftSubTree());
        this.preOrderTraveral(tree.getRightSubTree());
    }

    inOrderTraveral(tree) {
        if(tree == null) return;
        this.inOrderTraveral(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTraveral(tree.getRightSubTree());
    }

    postOrderTraveral(tree) {
        if(tree == null) return;
        this.postOrderTraveral(tree.getLeftSubTree());
        this.postOrderTraveral(tree.getRightSubTree());
        console.log(tree.data);
    }

    //오류 원인 : AVLTree에 쓴 이진트리에 서브트리를 삭제하는 함수를 빼먹었음.
    removeLeftSubTree(){
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    removeRightSubTree(){
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };