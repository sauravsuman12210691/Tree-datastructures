import React from 'react';
import { TreeSection } from '@/components/TreeSection';
import { CodeBlock } from '@/components/CodeBlock';
import { TypewriterCode } from '@/components/TypewriterCode';
import { NavigationSidebar } from '@/components/NavigationSidebar';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TreePine, Code, BookOpen, Zap } from 'lucide-react';

// Import generated images
import binaryTreeDiagram from '@/assets/binary-tree-diagram.png';
import traversalDiagram from '@/assets/tree-traversal-diagram.png';
import avlTreeDiagram from '@/assets/avl-tree-diagram.png';
import heapDiagram from '@/assets/heap-diagram.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
  <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <TreePine className="w-16 h-16 text-primary glow-effect" />
      </div>

      <h1 className="text-5xl font-bold gradient-text mb-6">
        Tree Data Structures
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        I was originally asked to create a PDF or Word document. However, as a pre-final year B.Tech CSE student passionate about clean and interactive learning, I chose to build this fully responsive webpage using <strong>React</strong> and <strong>TypeScript</strong> for a better visual and educational experience.
      </p>

      <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-8">
        You can still download the traditional PDF version below.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Badge variant="secondary" className="px-4 py-2">
          <Code className="w-4 h-4 mr-2" />
          Implementation Ready
        </Badge>
        <Badge variant="secondary" className="px-4 py-2">
          <BookOpen className="w-4 h-4 mr-2" />
          Comprehensive Guide
        </Badge>
        <Badge variant="secondary" className="px-4 py-2">
          <Zap className="w-4 h-4 mr-2" />
          Interview Focused
        </Badge>
      </div>

      <div className="flex justify-center">
        <a
          href="/Tree.pdf"
          download
          className="bg-primary text-black px-6 py-3 rounded-xl hover:bg-primary/80 transition-all"
        >
          📥 Download PDF
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <NavigationSidebar />
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Introduction */}
            <TreeSection
              id="introduction"
              title="1. Introduction to Tree Data Structures"
              gfgLinks={[
                "https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/",
                "https://www.geeksforgeeks.org/tree-data-structure/"
              ]}
            >
               <p className="text-lg mb-4">
      A tree is a hierarchical data structure that consists of nodes connected by edges. 
      It's one of the most important non-linear data structures in computer science.
      Each node contains a value or data, and links to other nodes (its children).
      The topmost node is called the <strong>root</strong>, and nodes with no children are called <strong>leaves</strong>.
    </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <Card className="p-4 bg-accent/10">
                  <h4 className="font-semibold text-accent mb-2">Key Properties</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Hierarchical structure</li>
                    <li>• No cycles (acyclic)</li>
                    <li>• N nodes, N-1 edges</li>
                    <li>• One root node</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Applications</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• File systems</li>
                    <li>• Database indexing</li>
                    <li>• Decision trees</li>
                    <li>• Expression parsing</li>
                  </ul>
                </Card>
              </div>
            </TreeSection>

            {/* Tree Terminology */}
            <TreeSection
              id="terminology"
              title="2. Tree Terminology"
              gfgLinks={[
                "https://www.geeksforgeeks.org/tree-terminology-data-structure/"
              ]}
            >
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-accent">Root:</span> Top node of the tree
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-accent">Parent:</span> Node with children
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-accent">Child:</span> Node connected below parent
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-accent">Leaf:</span> Node with no children
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-primary">Height:</span> Length of longest path
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-primary">Depth:</span> Distance from root
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-primary">Subtree:</span> Tree rooted at node
                  </div>
                  <div className="p-3 bg-muted/20 rounded">
                    <span className="font-semibold text-primary">Sibling:</span> Nodes with same parent
                  </div>
                </div>
              </div>
            </TreeSection>

            {/* Types of Trees */}
<TreeSection
  id="types"
  title="3. Types of Trees"
  gfgLinks={[
    "https://www.geeksforgeeks.org/types-of-trees-in-data-structure/"
  ]}
>
  <p className="text-base text-muted-foreground mb-4">
    There are various types of trees in data structures, each suited to different kinds of problems.
    The classification is usually based on the number of children, shape, completeness, or balance.
    Understanding these helps in selecting the right tree for efficient algorithms and storage.
  </p>

  <div className="grid md:grid-cols-3 gap-4">
    <Card className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
      <h4 className="font-semibold mb-2">Binary Tree</h4>
      <p className="text-sm">
        Each node has at most 2 children, commonly referred to as left and right. Forms the base for more specialized trees.
      </p>
    </Card>

    <Card className="p-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20">
      <h4 className="font-semibold mb-2">N-ary Tree</h4>
      <p className="text-sm">
        Each node can have up to N children. Often used in game trees, file systems, and organizational hierarchies.
      </p>
    </Card>

    <Card className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <h4 className="font-semibold mb-2">Complete Tree</h4>
      <p className="text-sm">
        All levels are fully filled except possibly the last, and all nodes are as far left as possible. Used in heaps.
      </p>
    </Card>

    <Card className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
      <h4 className="font-semibold mb-2">Perfect Binary Tree</h4>
      <p className="text-sm">
        All internal nodes have two children and all leaves are at the same level. Ideal for theoretical analysis.
      </p>
    </Card>

    <Card className="p-4 bg-gradient-to-br from-red-500/20 to-pink-500/20">
      <h4 className="font-semibold mb-2">Balanced Tree</h4>
      <p className="text-sm">
        Heights of left and right subtrees differ by at most 1. Ensures logarithmic operations. Example: AVL Tree.
      </p>
    </Card>

    <Card className="p-4 bg-gradient-to-br from-sky-500/20 to-indigo-500/20">
      <h4 className="font-semibold mb-2">Degenerate Tree</h4>
      <p className="text-sm">
        Each parent node has only one child, making it look like a linked list. Worst case for binary trees.
      </p>
    </Card>
  </div>
</TreeSection>


            {/* Binary Tree Implementation */}
<TreeSection
  id="binary-tree"
  title="4. Binary Tree Implementation"
  image={binaryTreeDiagram}
  leetcodeLinks={[
    "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "https://leetcode.com/problems/same-tree/"
  ]}
  gfgLinks={[
    "https://www.geeksforgeeks.org/binary-tree-data-structure/"
  ]}
>
  <p className="mb-4">
    A binary tree is a hierarchical data structure where each node has at most two children — 
    referred to as the left and right child. It forms the foundation of many tree-based structures 
    like binary search trees, heaps, and AVL trees.
  </p>

  <p className="mb-4">
    Below is a basic implementation of a binary tree node in Python, Java, and C++. Each node stores a value 
    and pointers/references to its left and right children. A sample tree is also constructed.
  </p>

  <TypewriterCode
    title="Binary Tree Node Structure"
    codes={{
      Python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val            # Node value
        self.left = left          # Pointer to left child
        self.right = right        # Pointer to right child

# Example: Constructing a binary tree manually
#       1
#      / \\
#     2   3
#    / \\
#   4   5

root = TreeNode(1)                # Root node
root.left = TreeNode(2)          # Left child of root
root.right = TreeNode(3)         # Right child of root
root.left.left = TreeNode(4)     # Left child of node 2
root.left.right = TreeNode(5)    # Right child of node 2`,
      Java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example: Constructing the same tree
TreeNode root = new TreeNode(1);             // Root node
root.left = new TreeNode(2);                 // Left child of root
root.right = new TreeNode(3);                // Right child of root
root.left.left = new TreeNode(4);            // Left child of node 2
root.left.right = new TreeNode(5);           // Right child of node 2`,
      "C++": `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

// Example: Constructing the binary tree
TreeNode* root = new TreeNode(1);            // Root node
root->left = new TreeNode(2);                // Left child of root
root->right = new TreeNode(3);               // Right child of root
root->left->left = new TreeNode(4);          // Left child of node 2
root->left->right = new TreeNode(5);         // Right child of node 2`
    }}
  />

  <p className="mt-6 text-muted-foreground text-sm">
    🔍 This simple construction demonstrates manual tree creation. In practice, binary trees are usually built
    using recursive insertions, traversals (Inorder, Preorder, Postorder), or from input arrays in problems like
    tree serialization.
  </p>
</TreeSection>


           {/* Binary Search Tree */}
<TreeSection
  id="bst"
  title="5. Binary Search Tree (BST)"
  leetcodeLinks={[
    "https://leetcode.com/problems/validate-binary-search-tree/",
    "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
  ]}
  gfgLinks={[
    "https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
  ]}
>
  <p className="mb-4">
    A <strong>Binary Search Tree (BST)</strong> is a special kind of binary tree that maintains a sorted structure.
    For every node:
  </p>
  <ul className="list-disc list-inside mb-4 text-base">
    <li>All values in the <strong>left subtree</strong> are less than the node’s value.</li>
    <li>All values in the <strong>right subtree</strong> are greater than the node’s value.</li>
  </ul>

  <p className="mb-4">
    BST enables efficient <strong>search, insert, and delete</strong> operations in <code>O(log n)</code> time on average.
  </p>

  <Card className="bg-muted/10 p-4 text-sm mb-6">
    <p className="font-semibold mb-2">Example:</p>
    <pre className="whitespace-pre-line">
      {`Let's insert values: 8, 3, 10, 1, 6, 14

              8
            /   \\
           3     10
          / \\      \\
         1   6      14
`}
    </pre>
    <p>
      Searching for 6 would traverse: 8 → 3 → 6.
    </p>
  </Card>

  <TypewriterCode
    title="BST Search & Insert Operations"
    codes={{
      Python: `# Search value in BST
def search_bst(root, val):
    if not root or root.val == val:
        return root
    return search_bst(root.left, val) if val < root.val else search_bst(root.right, val)

# Insert value in BST
def insert_bst(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    return root`,
      Java: `// Search in BST
public TreeNode searchBST(TreeNode root, int val) {
    if (root == null || root.val == val)
        return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

// Insert into BST
public TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null)
        return new TreeNode(val);
    if (val < root.val)
        root.left = insertIntoBST(root.left, val);
    else
        root.right = insertIntoBST(root.right, val);
    return root;
}`,
      "C++": `// Search in BST
TreeNode* searchBST(TreeNode* root, int val) {
    if (!root || root->val == val)
        return root;
    return val < root->val ? searchBST(root->left, val) : searchBST(root->right, val);
}

// Insert into BST
TreeNode* insertIntoBST(TreeNode* root, int val) {
    if (!root)
        return new TreeNode(val);
    if (val < root->val)
        root->left = insertIntoBST(root->left, val);
    else
        root->right = insertIntoBST(root->right, val);
    return root;
}`
    }}
  />
</TreeSection>

           {/* Tree Traversals */}
<TreeSection
  id="traversals"
  title="6. Tree Traversals"
  image="https://afteracademy.com/images/binary-search-tree-example-c9ff1340fb7307a7.png" // Replace with your actual path
  leetcodeLinks={[
    "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  ]}
  gfgLinks={[
    "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
  ]}
>
  <p className="text-lg mb-4">
    Tree traversal algorithms allow us to visit all nodes in a tree in a specific order. 
    Traversals are crucial for searching, printing, and manipulating tree structures.
  </p>

  <div className="grid md:grid-cols-2 gap-6 my-6">
    <Card className="p-4 bg-accent/10">
      <h4 className="font-semibold text-accent mb-2">Types of Traversals</h4>
      <ul className="space-y-1 text-sm">
        <li>• Inorder (Left → Root → Right)</li>
        <li>• Preorder (Root → Left → Right)</li>
        <li>• Postorder (Left → Right → Root)</li>
        <li>• Level Order (Breadth-First Search)</li>
      </ul>
    </Card>
    <Card className="p-4 bg-primary/10">
      <h4 className="font-semibold text-primary mb-2">Example Tree</h4>
      <ul className="space-y-1 text-sm">
        <li>Input Tree:</li>
        <li>
          <pre>
{`        1
       / \\
      2   3
     / \\
    4   5`}
          </pre>
        </li>
        <li>Inorder: 4 2 5 1 3</li>
        <li>Preorder: 1 2 4 5 3</li>
        <li>Postorder: 4 5 2 3 1</li>
        <li>Level Order: 1 2 3 4 5</li>
      </ul>
    </Card>
  </div>

  <TypewriterCode
    title="Tree Traversal Algorithms"
    codes={{
      Python: `# Inorder Traversal (Left, Root, Right)
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

# Preorder Traversal (Root, Left, Right)
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)

# Postorder Traversal (Left, Right, Root)
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)

# Level Order Traversal (BFS)
from collections import deque

def level_order(root):
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node.val)
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return result`,
      Java: `// Inorder Traversal
public void inorder(TreeNode root) {
    if (root != null) {
        inorder(root.left);
        System.out.println(root.val);
        inorder(root.right);
    }
}

// Preorder Traversal
public void preorder(TreeNode root) {
    if (root != null) {
        System.out.println(root.val);
        preorder(root.left);
        preorder(root.right);
    }
}

// Postorder Traversal
public void postorder(TreeNode root) {
    if (root != null) {
        postorder(root.left);
        postorder(root.right);
        System.out.println(root.val);
    }
}

// Level Order Traversal (BFS)
public List<Integer> levelOrder(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        result.add(node.val);
        
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
    
    return result;
}`,
      "C++": `// Inorder Traversal
void inorder(TreeNode* root) {
    if (root) {
        inorder(root->left);
        cout << root->val << " ";
        inorder(root->right);
    }
}

// Preorder Traversal
void preorder(TreeNode* root) {
    if (root) {
        cout << root->val << " ";
        preorder(root->left);
        preorder(root->right);
    }
}

// Postorder Traversal
void postorder(TreeNode* root) {
    if (root) {
        postorder(root->left);
        postorder(root->right);
        cout << root->val << " ";
    }
}

// Level Order Traversal (BFS)
vector<int> levelOrder(TreeNode* root) {
    vector<int> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        result.push_back(node->val);
        
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
    
    return result;
}`
    }}
  />
</TreeSection>


            {/* AVL Tree */}
            <TreeSection
              id="avl"
              title="7. Balanced Trees: AVL Tree"
              image={avlTreeDiagram}
              leetcodeLinks={[
                "https://leetcode.com/problems/balanced-binary-tree/"
              ]}
              gfgLinks={[
                "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/",
                "https://www.geeksforgeeks.org/avl-tree-set-2-deletion/"
              ]}
            >
              <p>An AVL tree is a self-balancing BST where the height difference between left and right subtrees is at most 1.</p>
              
              <TypewriterCode
                title="AVL Tree Operations"
                codes={{
                  Python: `class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

def get_height(node):
    if not node:
        return 0
    return node.height

def get_balance(node):
    if not node:
        return 0
    return get_height(node.left) - get_height(node.right)

def right_rotate(y):
    x = y.left
    T2 = x.right
    
    # Perform rotation
    x.right = y
    y.left = T2
    
    # Update heights
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    x.height = 1 + max(get_height(x.left), get_height(x.right))
    
    return x`,
                  Java: `class AVLNode {
    int val;
    AVLNode left, right;
    int height;
    
    AVLNode(int val) {
        this.val = val;
        this.height = 1;
    }
}

int getHeight(AVLNode node) {
    if (node == null) return 0;
    return node.height;
}

int getBalance(AVLNode node) {
    if (node == null) return 0;
    return getHeight(node.left) - getHeight(node.right);
}

AVLNode rightRotate(AVLNode y) {
    AVLNode x = y.left;
    AVLNode T2 = x.right;
    
    // Perform rotation
    x.right = y;
    y.left = T2;
    
    // Update heights
    y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
    x.height = 1 + Math.max(getHeight(x.left), getHeight(x.right));
    
    return x;
}`,
                  "C++": `struct AVLNode {
    int val;
    AVLNode* left;
    AVLNode* right;
    int height;
    
    AVLNode(int x) : val(x), left(nullptr), right(nullptr), height(1) {}
};

int getHeight(AVLNode* node) {
    if (!node) return 0;
    return node->height;
}

int getBalance(AVLNode* node) {
    if (!node) return 0;
    return getHeight(node->left) - getHeight(node->right);
}

AVLNode* rightRotate(AVLNode* y) {
    AVLNode* x = y->left;
    AVLNode* T2 = x->right;
    
    // Perform rotation
    x->right = y;
    y->left = T2;
    
    // Update heights
    y->height = 1 + max(getHeight(y->left), getHeight(y->right));
    x->height = 1 + max(getHeight(x->left), getHeight(x->right));
    
    return x;
}`
                }}
              />
            </TreeSection>

            {/* Heaps */}
            <TreeSection
              id="heaps"
              title="8. Heaps (Min Heap and Max Heap)"
              image={heapDiagram}
              leetcodeLinks={[
                "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                "https://leetcode.com/problems/top-k-frequent-elements/",
                "https://leetcode.com/problems/merge-k-sorted-lists/"
              ]}
              gfgLinks={[
                "https://www.geeksforgeeks.org/heap-data-structure/",
                "https://www.geeksforgeeks.org/binary-heap/"
              ]}
            >
              <p>A heap is a complete binary tree that satisfies the heap property. In a max heap, parent nodes are greater than children; in a min heap, parent nodes are smaller.</p>
              
              <TypewriterCode
                title="Heap Operations"
                codes={{
                  Python: `import heapq

class MinHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        heapq.heappush(self.heap, val)
    
    def pop(self):
        return heapq.heappop(self.heap)
    
    def peek(self):
        return self.heap[0] if self.heap else None

class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, val):
        heapq.heappush(self.heap, -val)
    
    def pop(self):
        return -heapq.heappop(self.heap)
    
    def peek(self):
        return -self.heap[0] if self.heap else None`,
                  Java: `import java.util.*;

class MinHeap {
    private PriorityQueue<Integer> heap;
    
    public MinHeap() {
        this.heap = new PriorityQueue<>();
    }
    
    public void push(int val) {
        heap.offer(val);
    }
    
    public int pop() {
        return heap.poll();
    }
    
    public int peek() {
        return heap.peek();
    }
}

class MaxHeap {
    private PriorityQueue<Integer> heap;
    
    public MaxHeap() {
        this.heap = new PriorityQueue<>(Collections.reverseOrder());
    }
    
    public void push(int val) {
        heap.offer(val);
    }
    
    public int pop() {
        return heap.poll();
    }
    
    public int peek() {
        return heap.peek();
    }
}`,
                  "C++": `#include <queue>
#include <vector>

class MinHeap {
private:
    std::priority_queue<int, std::vector<int>, std::greater<int>> heap;
    
public:
    void push(int val) {
        heap.push(val);
    }
    
    int pop() {
        int top = heap.top();
        heap.pop();
        return top;
    }
    
    int peek() {
        return heap.top();
    }
};

class MaxHeap {
private:
    std::priority_queue<int> heap;
    
public:
    void push(int val) {
        heap.push(val);
    }
    
    int pop() {
        int top = heap.top();
        heap.pop();
        return top;
    }
    
    int peek() {
        return heap.top();
    }
};`
                }}
              />
            </TreeSection>

            {/* Tries */}
            <TreeSection
              id="tries"
              title="9. Tries (Prefix Trees)"
              leetcodeLinks={[
                "https://leetcode.com/problems/implement-trie-prefix-tree/",
                "https://leetcode.com/problems/word-search-ii/",
                "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
              ]}
              gfgLinks={[
                "https://www.geeksforgeeks.org/trie-insert-and-search/"
              ]}
            >
              <p>A Trie (prefix tree) is a tree-like data structure used to store strings efficiently, commonly used for autocomplete and spell checkers.</p>
              
              <TypewriterCode
                title="Trie Implementation"
                codes={{
                  Python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_word = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_word
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
                  Java: `class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndWord;
    
    public TrieNode() {
        children = new HashMap<>();
        isEndWord = false;
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) {
                node.children.put(c, new TrieNode());
            }
            node = node.children.get(c);
        }
        node.isEndWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return false;
            }
            node = node.children.get(c);
        }
        return node.isEndWord;
    }
    
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return false;
            }
            node = node.children.get(c);
        }
        return true;
    }
}`,
                  "C++": `struct TrieNode {
    unordered_map<char, TrieNode*> children;
    bool isEndWord;
    
    TrieNode() : isEndWord(false) {}
};

class Trie {
private:
    TrieNode* root;
    
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->isEndWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }
        return node->isEndWord;
    }
    
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }
        return true;
    }
};`
                }}
              />
            </TreeSection>

            {/* Segment Tree */}
            <TreeSection
              id="segment-tree"
              title="10. Segment Tree"
              leetcodeLinks={[
                "https://leetcode.com/problems/range-sum-query-mutable/",
                "https://leetcode.com/problems/range-minimum-query-mutable/"
              ]}
              gfgLinks={[
                "https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/"
              ]}
            >
              <p>A segment tree is a binary tree used for answering range queries efficiently, supporting both point updates and range queries in O(log n) time.</p>
              
              <TypewriterCode
                title="Segment Tree for Range Sum"
                codes={{
                  Python: `class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2 * node + 1, start, mid)
            self.build(arr, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]
    
    def update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self.update(2 * node + 1, start, mid, idx, val)
            else:
                self.update(2 * node + 2, mid + 1, end, idx, val)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]`,
                  Java: `class SegmentTree {
    private int[] tree;
    private int n;
    
    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }
    
    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }
    
    public void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid) {
                update(2 * node + 1, start, mid, idx, val);
            } else {
                update(2 * node + 2, mid + 1, end, idx, val);
            }
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }`,
                  "C++": `class SegmentTree {
private:
    vector<int> tree;
    int n;
    
public:
    SegmentTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 0, 0, n - 1);
    }
    
    void build(vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }
    
    void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid) {
                update(2 * node + 1, start, mid, idx, val);
            } else {
                update(2 * node + 2, mid + 1, end, idx, val);
            }
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }
};`
                }}
              />
            </TreeSection>

            {/* Advanced Concepts */}
            <TreeSection
              id="advanced"
              title="11. Advanced Tree Concepts"
              gfgLinks={[
                "https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/",
                "https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/"
              ]}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20">
                  <h4 className="font-semibold mb-2">Red-Black Tree</h4>
                  <p className="text-sm mb-2">Self-balancing BST with color properties</p>
                  <ul className="text-xs space-y-1">
                    <li>• Each node is red or black</li>
                    <li>• Root is always black</li>
                    <li>• Red nodes have black children</li>
                    <li>• All paths have same black depth</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-blue-500/20 to-green-500/20">
                  <h4 className="font-semibold mb-2">B-Tree</h4>
                  <p className="text-sm mb-2">Multi-way tree optimized for disk storage</p>
                  <ul className="text-xs space-y-1">
                    <li>• Multiple keys per node</li>
                    <li>• Balanced at all levels</li>
                    <li>• Used in databases</li>
                    <li>• Minimizes disk I/O</li>
                  </ul>
                </Card>
              </div>
            </TreeSection>

            {/* Sample Problems */}
            <TreeSection
              id="problems"
              title="12. Sample Problems with Solutions"
              leetcodeLinks={[
                "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
                "https://leetcode.com/problems/diameter-of-binary-tree/",
                "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
              ]}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Problem: Maximum Depth of Binary Tree</h4>
                  <TypewriterCode
                    title="Maximum Depth Solution"
                    codes={{
                      Python: `def max_depth(root):
    if not root:
        return 0
    
    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    
    return 1 + max(left_depth, right_depth)

# Time Complexity: O(n)
# Space Complexity: O(h) where h is height of tree`,
                      Java: `public int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Time Complexity: O(n)
// Space Complexity: O(h) where h is height of tree`,
                      "C++": `int maxDepth(TreeNode* root) {
    if (!root) {
        return 0;
    }
    
    int leftDepth = maxDepth(root->left);
    int rightDepth = maxDepth(root->right);
    
    return 1 + max(leftDepth, rightDepth);
}

// Time Complexity: O(n)
// Space Complexity: O(h) where h is height of tree`
                    }}
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Problem: Lowest Common Ancestor</h4>
                  <TypewriterCode
                    title="Lowest Common Ancestor Solution"
                    codes={{
                      Python: `def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q:
        return root
    
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    if left and right:
        return root
    
    return left if left else right`,
                      Java: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    
    if (left != null && right != null) {
        return root;
    }
    
    return left != null ? left : right;
}`,
                      "C++": `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) {
        return root;
    }
    
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    
    if (left && right) {
        return root;
    }
    
    return left ? left : right;
}`
                    }}
                  />
                </div>
              </div>
            </TreeSection>

            {/* Summary */}
            <TreeSection
              id="summary"
              title="13. Summary"
            >
              <div className="space-y-4">
                <p>Trees are fundamental data structures that provide efficient solutions for many problems:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-accent/10">
                    <h4 className="font-semibold text-accent mb-2">Key Takeaways</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Trees organize data hierarchically</li>
                      <li>• Different types solve different problems</li>
                      <li>• Traversals access all nodes systematically</li>
                      <li>• Balanced trees ensure optimal performance</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-primary/10">
                    <h4 className="font-semibold text-primary mb-2">Interview Tips</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Practice recursive solutions</li>
                      <li>• Understand time/space complexity</li>
                      <li>• Know when to use each tree type</li>
                      <li>• Master tree traversal algorithms</li>
                    </ul>
                  </Card>
                </div>
                
                <p className="text-center text-lg font-medium gradient-text mt-8">
                  Happy coding! Master these concepts and ace your technical interviews! 🚀
                </p>
              </div>
            </TreeSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;