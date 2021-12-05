let sum = function(param1) {
    let b = function(param2) {
        let c = function(param3) {

            let add = param1 + param2 + param3;
            document.write(add);
            console.log(add);
        }
        return c;
    }
    return b;
}
    sum(10)(20)(30);
    
    