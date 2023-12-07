function calculateArea() {

    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);


    if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {

        var s = (sideA + sideB + sideC) / 2;


        var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));


        document.getElementById('result').innerHTML = 'The area of the triangle is: ' + area.toFixed(2);
    } else {

        document.getElementById('result').innerHTML = 'Invalid triangle! Please enter valid side lengths.';
    }
}


