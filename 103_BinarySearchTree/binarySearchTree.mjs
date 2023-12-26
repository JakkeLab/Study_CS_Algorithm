import { BinaryTree } from "./binarytree.mjs";

class BinarySearchTree {
    constructor(rootNode = null) {
        this.root = rootNode;
    }

    //삽입
    insert(data) {
        if(this.root == null) {
            this.root = new BinaryTree(data);
            return;
        }

        let currentNode = this.root;
        let parentNode = null;

        //넣어야할 노드의 부모노드 위치 찾기
        while(currentNode != null) {
            parentNode = currentNode;
            
            if(currentNode.getData() > data) {
                currentNode = currentNode.getLeftSubTree();
            } else if (currentNode.getData() < data) {
                currentNode = currentNode.getRightSubTree();
            } else {
                return;
            }
        }

        //새 노드로 만들어 주고, 왼쪽인지 오른쪽인지 판단해서 넣기
        let newNode = new BinaryTree(data);
        if(parentNode.getData() > data) {
            parentNode.setLeftSubTree(newNode);
        } else {
            parentNode.setRightSubTree(newNode);
        }
    }

    search(targetData) {
        let currentNode = this.root;

        while(currentNode != null) {
            if(currentNode.getData() == targetData){
                return currentNode;
            } else if (currentNode.getData() > targetData){
                currentNode = currentNode.getLeftSubTree();
            } else {
                currentNode = currentNode.getRightSubTree();
            }
        }

        return null;
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);

binarySearchTree.root.inOrderTraveral(binarySearchTree.root);

console.log("====== Search 6 ======");
console.log(binarySearchTree.search(6));

console.log("====== Search 1 ======");
console.log(binarySearchTree.search(1));