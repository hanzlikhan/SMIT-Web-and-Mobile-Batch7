        // number methods

        // tofixed mathod 

        var pi = 3.141
        console.log(pi.toFixed(0)) // 3.14
        console.log(pi.toFixed(2)) // 3.142

        // toPercision method
        var pi = 3.141
        console.log(pi.toPrecision(1)) // 3
        console.log(pi.toPrecision(2)) // 3.1

        // valueOf method
        var pi = 3.141
        console.log(pi.valueOf()) // 3.141

        // Number method 
        var num = "ab"
        console.log(Number(num)) // NaN
        console.log(Number("123")) // 123

        // find and print date
        var date = new Date()
        console.log(date)

        // parseInt method
        console.log(parseInt("3 months")) 

        // parseFloat method
        console.log(parseFloat("3.14 months"))

        // find MAX_VALUE
        console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

        // find MIN_VALUE
        console.log(Number.MIN_VALUE) // 5e-324

        // negative infinity
        console.log(Number.NEGATIVE_INFINITY) // -Infinity

        // positive Infinity
        console.log(Number.POSITIVE_INFINITY) // Infinity
        