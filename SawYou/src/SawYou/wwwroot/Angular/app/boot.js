System.register(['angular2/platform/browser', './post/post.component'], function(exports_1) {
    var browser_1, post_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(post_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map