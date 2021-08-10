const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    let pres = head;
  
       
        while (pres != null) {
             let temp = pres;
            while(temp!=null && temp.data==pres.data) {
                temp = temp.next;
            }
           
            pres.next = temp;
            pres = pres.next;
        }
  return head
};

