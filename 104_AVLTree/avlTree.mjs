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

    //노드의 높이 구하기
    getHeight(node){
        if(node == null) {
            return 0;
        } else {
            return node.height;
        }
    }

    //차수 갱신
    updateHeight(node){
        let leftChildHeight = this.getHeight(node.getLeftSubTree());
        let rightChildHeight = this.getHeight(node.getRightSubTree());
        node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
    }

    //좌우 높이차 구하기
    getBalanceFactor(node){
        return this.getHeight(node.getLeftSubTree()) - this.getHeight(node.getRightSubTree());
    }

    //LL회전
    rotateLeft(node){
        let childNode = node.getRightSubTree();
        node.getRightSubTree(childNode.getLeftSubTree());
        childNode.setLeftSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }

    //RR회전
    rotateRight(node) {
        let childNode = node.getLeftSubTree();
        node.setLeftSubTree(childNode.getRightSubTree());
        childNode.setRightSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }
    
    //회전 기준 판단 및 불균형 원인 탐색
    rotation(targetNode, data) {
        let balanceFactor = this.getBalanceFactor(targetNode);
        let isRootNode = false;
        if(targetNode == this.root) {
            isRootNode = true;
        }

        if(balanceFactor < -1 && data > targetNode.getRightSubTree().getData()) {
            //LL 회전이 필요한 경우 : 균형 요소가 -1보다 작고, 전부 오른쪽으로 연결된 경우 (2번째 조건)
            //오른쪽으로만 뻗은경우를 의미함
            targetNode = this.rotateLeft(targetNode);
        } else if(balanceFactor > 1 && data < targetNode.getLeftSubTree().getData()) {
            //RR 회전이 필요한 경우 : 균형 요소가 1보다 크고, 전부 왼쪽으로 연결된 경우 (2번째 조건)
            //왼쪽으로만 뻗은 경우를 의미함
            targetNode = this.rotateRight(targetNode);
        } else if(balanceFactor > 1 && data > targetNode.getLeftSubTree().getData()) {
            //LR 회전이 필요한 경우 : 균형 요소가 1보다 크고, 왼쪽으로 한번, 오른쪽으로 한번 이어진 경우
            targetNode.setLeftSubTree(this.rotateLeft(targetNode.getLeftSubTree()));
            targetNode = this.rotateRight(targetNode);
        } else if(balanceFactor < -1 && data < targetNode.getRightSubTree().getData()) {
            targetNode.setRightSubTree(this.rotateRight(targetNode.getRightSubTree()));
            targetNode = this.rotateLeft(targetNode);
        }

        if(isRootNode) {
            this.root = targetNode;
        }

        return targetNode;
    }

    //균형을 무너뜨리는 노드 찾기
    getUnbalanceNode(targetRootNode, unBalanceNode = null) {
        if(targetRootNode.getLeftSubTree() == null && targetRootNode.getRightSubTree() == null) {
            //자식노드가 없음 = 터미널 노드
            unBalanceNode = targetRootNode;
            return unBalanceNode;
        }

        let balanceFactor = this.getBalanceFactor(targetRootNode);
        if(balanceFactor > 0) {
            unBalanceNode = this.getUnbalanceNode(targetRootNode.getLeftSubTree(), unBalanceNode);
        } else if(balanceFactor < 0) {
            unBalanceNode = this.getUnbalanceNode(targetRootNode.getRightSubTree(), unBalanceNode);
        } else { 
            unBalanceNode = targetRootNode.getRightSubTree();
        }
        return unBalanceNode;
    }

    //삽입
    insert(targetRootNode, data) {
        if(targetRootNode == null) {
            targetRootNode = new BinaryTree(data);
        }

        if(this.root == null) {
            this.root = targetRootNode;
        } else if(targetRootNode.getData() == data) {
            return targetRootNode;
        } else if(targetRootNode.getData() > data) {
            targetRootNode.setLeftSubTree(this.insert(targetRootNode.getLeftSubTree(), data));
        } else {
            targetRootNode.setRightSubTree(this.insert(targetRootNode.getRightSubTree(), data));
        }

        this.updateHeight(targetRootNode);
        targetRootNode = this.rotation(targetRootNode, data);

        return targetRootNode;
    }

    remove(targetRootNode, data, parentNode = null) {
        if(targetRootNode.getData() > data && targetRootNode.getLeftSubTree() != null) {
            //삭제할 노드가 왼쪽 자식노드에 있는 경우
            targetRootNode.setLeftSubTree(this.remove(targetRootNode.getLeftSubTree(), data, targetRootNode));
        } else if(targetRootNode.getData() < data && targetRootNode.getRightSubTree() != null) {
            //삭제할 노드가 오른쪽 자식노드에 있는 경우
            targetRootNode.setRightSubTree(this.remove(targetRootNode.setRightSubTree(), data, targetRootNode));
        } else if(targetRootNode.getData() == data) {
            targetRootNode = this.removeHelper(targetRootNode, data, parentNode);
            
            if(parentNode == null && targetRootNode != null) {
                this.updateHeight(targetRootNode);
                let unBalanceNode = this.getUnbalanceNode(targetRootNode);
                targetRootNode = this.rotation(targetRootNode, unBalanceNode.getData());
            }

            return targetRootNode;
        }

        this.updateHeight(targetRootNode);
        let unBalanceNode = this.getUnbalanceNode(targetRootNode);
        targetRootNode = this.rotation(targetRootNode, unBalanceNode.getData());
        return targetRootNode;
    }

    removeHelper(deletingNode, parentNode) {
        let fakeParentRootNode = new BinaryTree(0);
        fakeParentRootNode.setRightSubTree(this.root);

        if(parentNode == null) {
            parentNode = fakeParentRootNode;
        }

        let deletingNodeChild = null;
        if(deletingNode.getLeftSubTree() == null && deletingNode.getRightSubTree() == null){
            if(parentNode.getLeftSubTree() == deletingNode) {
                parentNode.removeLeftSubTree();
            } else {
                parentNode.removeRightSubTree();
            }
        } else if(deletingNode.getLeftSubTree() == null || deletingNode.getRightSubTree() == null) {

            if(deletingNode.getLeftSubTree() != null){
                deletingNodeChild = deletingNode.getLeftSubTree();
            } else {
                deletingNodeChild = deletingNode.getRightSubTree();
            }
            
            if(parentNode.getLeftSubTree() == deletingNode){
                parentNode.setLeftSubTree(deletingNodeChild);
            } else {
                parentNode.setRightSubTree(deletingNodeChild);
            }
        } else {
            let replacingNode = deletingNode.getLeftSubTree();
            let replacingNodeParent = deletingNode;

            while(replacingNode.getRightSubTree() != null){
                replacingNodeParent = replacingNode;
                replacingNode = replacingNode.getRightSubTree();
            }

            let deletingNodeData = deletingNode.getData();
            deletingNode.setData(replacingNode.getData());
            if(replacingNodeParent.getLeftSubTree() == replacingNode) {
                replacingNodeParent.setLeftSubTree(replacingNode.getLeftSubTree());
            } else {
                replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree());
            }
            
            deletingNodeChild = deletingNode;
        }

        if(fakeParentRootNode.getRightSubTree() != this.root){
            this.root = fakeParentRootNode.getRightSubTree();
        }

        return deletingNodeChild;
    }
}

let avlTree = new AVLTree();
console.log("====== insert ======");
avlTree.insert(avlTree.root, 1);
avlTree.insert(avlTree.root, 2);
avlTree.insert(avlTree.root, 3);
avlTree.insert(avlTree.root, 4);
avlTree.insert(avlTree.root, 5);
avlTree.insert(avlTree.root, 6);
avlTree.insert(avlTree.root, 7);
console.log(avlTree.root);
avlTree.root.inOrderTraveral(avlTree.root);

// console.log("====== remove ======");
// avlTree.remove(avlTree.root, 2);
// avlTree.remove(avlTree.root, 3);
// avlTree.remove(avlTree.root, 1);
// console.log(avlTree.root);

// console.log("====== search ======");
// console.log(avlTree.search(7));
