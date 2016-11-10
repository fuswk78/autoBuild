(function() {
    function add(a, b) {
        // 故意写错，c未定义
        // a = a + c;  
        // 没写分号
        return a + b;
    }

    add(10, 100);
})(window);