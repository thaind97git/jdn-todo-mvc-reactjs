const LocalStorageService = function() {
    return {
        /**
         * Get value with `key` from Web Storage
         * @name getItem
         * @param {string} key
         * @returns {Object} Object value get from `key` 
         */
        getItem: function getItem(key) {
            let result = localStorage.getItem(key)
            return JSON.parse(result);
        },
        
        /**
         * Set new value with `key` from Web Storage
         * @name setItem
         * @param {string} key
         * @param {any} value
         */
        setItem: function setItem(key, value) {
            let valueSet = JSON.stringify(value);
            return localStorage.setItem(key, valueSet);
        },
    
        /**
         * Remove [`key` and `this.value`] from Web Storage
         * @name setItem
         * @param {string} key
         */
        removeItem: function removeItem(key) {
            return localStorage.removeItem(key);
        },
    
        /**
         * RemoveAll [`key` and `this.value`] from Web Storage
         * @name setItem
         * @param {string} key
         */
        removeAll: function removeAll() {
            return localStorage.removeAll();
        }
    }
}

export default LocalStorageService;