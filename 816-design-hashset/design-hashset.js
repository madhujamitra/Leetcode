
var MyHashSet = function () {

        this.arr = []


};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let i = 0
    while (i < this.arr.length) {
        if (this.arr[i] === key) {
         return this.arr
        }
        i++
    }
        this.arr.push(key)
  
 
    return this.arr
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let i = 0
    while (i < this.arr.length) {
        if (this.arr[i] === key) {
            this.arr.splice(i, 1)
        }
        i++
    }
    return 
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let i = 0
    while (i < this.arr.length) {
        if (this.arr[i] === key) return true

            i++
    }

    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */