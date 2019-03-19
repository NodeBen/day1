(function() {
    var a = "jean";
    (function () {
        var a = "jacques";
        var b = "pierre";
        if(true) {
            let b = "patrick";
            if(true) {
                b = "test";
            }
            var c = "robert";
            console.log(b);
        }
        console.log(a, b , c)
    })()
})()