/*hello-1.0.0-2016-11-10 */
(function() {
    function add(a, b) {
        // 故意写错，c未定义
        // a = a + c;  
        // 没写分号
        return a + b;
    }

    add(10, 100);
})(window);
(function() {
    console.log(1);
})(window);