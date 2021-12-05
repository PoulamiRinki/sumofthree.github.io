<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Sum</h2>
    <script>
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
 </script>
</body>
</html>
