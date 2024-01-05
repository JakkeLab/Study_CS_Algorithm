import { BinaryTree } from "./binarytree.mjs";

class AVLTree{
    constructor(rootNode = null) {
        this.root = rootNode;
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

    getHeight(node){
        if(node == null) {
            return 0;
        } else {
            return node.height;
        }
    }

    updateHeight(node){
        let leftChildHeight = this.getHeight(node.getLeftSubTree());
        let rightChildHeight = this.getHeight(node.getRightSubTree());
        node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
    }

    getBalanceFactor(node){
        return this.getHeight(node.getLeftSubTree()) - this.getHeight(node.getRightSubTree());
    }

    rotateLeft(node){
        let childNode = node.getRightSubTree();
        node.getRightSubTree(childNode.getLeftSubTree());
    }
    
}