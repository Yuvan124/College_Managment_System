var nrows = 0;

document.getElementById("gpa_cal").onclick = function() {

    document.getElementById("mini-container").style.display = "block";
    document.getElementById("main-table").style.display = "none";
    document.getElementById("result-show-div").style.display = "none";
    document.getElementById("submit_button").style.display = "none";

    var tableElement = document.getElementById("use_js");
    tableElement.innerHTML = "";
    document.getElementById("show_result").innerHTML = "";
    document.getElementById("table_heading").innerHTML = "";

    document.getElementById("choose_dropdown").innerHTML = "<p>Enter number of courses: <select id='courses_drop_down'> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option> <option value='8'>8</option> <option value='9'>9</option>  <option value='10'>10</option>  <option value='11'>11</option> </select> <input id='submit' class='buttons dropdown-submit-btn' type='submit'> </p>"

    document.getElementById("submit").onclick = function() {

        document.getElementById("main-table").style.display = "block";
        document.getElementById("submit_button").style.display = "inline";
        document.getElementById("result-show-div").style.display = "none";

        document.getElementById("show_result").innerHTML = "";
        document.getElementById("table_heading").innerHTML = "<th>Course</th> <th>Credits</th> <th>Grade Points</th>";
        var selectField = document.getElementById("courses_drop_down");
        var selected = selectField.options.selectedIndex;
        var selectedValue = selectField.options[selected];

        var a = parseInt(selectedValue.innerHTML);
        nrows = a;
        tableElement.innerHTML = "";
        for (var i=0; i<a; i++) {
            tableElement.innerHTML += "<td> <input type='text' placeholder='Course " + (i+1) + "'> </td> <td> <input class='cred' onKeyDown='if(this.value.length==1 && event.keyCode!=8) return false;' required type='number'> </td> <td> <select class='grad'> <option value=''> ---Select Grade--- </option> <option value='10'>O</option> <option value='9'>A+</option> <option value='8'>A</option> <option value='7'>B+</option> <option value='6'>B</option> <option value='5'>C</option> <option value='0'> U </option> </select> </td>";
        }

        document.getElementById("submit_button").innerHTML = "<input type='submit' class='buttons calc-btn' value='Calculate'>";
    }

    document.getElementById("submit_button").onclick = function() {

        var gradePoints = 0;
        var creditsTotal = 0;
        
        var creditArray = document.getElementsByClassName("cred");
        var gradeArray = document.getElementsByClassName("grad");

        for (var i=0; i<nrows; i++) {
            creditsTotal += parseInt(creditArray[i].value);
            gradePoints += parseInt(gradeArray[i].value)*parseInt(creditArray[i].value);
        }

        var res = gradePoints/creditsTotal;
        document.getElementById("result-show-div").style.display = "block";
        document.getElementById("show_result").innerHTML = "Your GPA comes out to be: <span id='final-val'>" + res.toFixed(2) + "</span>";
    }
}

document.getElementById("cgpa_cal").onclick = function() {

    document.getElementById("mini-container").style.display = "block";
    document.getElementById("main-table").style.display = "none";
    document.getElementById("result-show-div").style.display = "none";
    document.getElementById("submit_button").style.display = "none";

    var tableElement = document.getElementById("use_js");
    tableElement.innerHTML = "";
    document.getElementById("show_result").innerHTML = "";
    document.getElementById("table_heading").innerHTML = "";

    document.getElementById("choose_dropdown").innerHTML = "<p>Enter number of semesters: <select id='courses_drop_down'> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option> <option value='8'>8</option> </select> <input id='submit' class='buttons dropdown-submit-btn' type='submit'> </p>";

    document.getElementById("submit").onclick = function() {

        document.getElementById("main-table").style.display = "block";
        document.getElementById("submit_button").style.display = "inline";
        document.getElementById("result-show-div").style.display = "none";

        document.getElementById("show_result").innerHTML = "";

        document.getElementById("table_heading").innerHTML = "<th>Semester</th> <th>Credits</th> <th>GPA</th>";
        var selectField = document.getElementById("courses_drop_down");
        var selected = selectField.options.selectedIndex;
        var selectedValue = selectField.options[selected];

        var a = parseInt(selectedValue.innerHTML);
        nrows = a;
        tableElement.innerHTML = "";
        for (var i=0; i<a; i++) {
            tableElement.innerHTML += "<td> <input type='text' placeholder='Semester " + (i+1) + "'> </td><td> <input class='cred' required type='number' onKeyDown='if(this.value.length==2 && event.keyCode!=8) return false;'> </td><td> <input type='number' max='10' required class='grad'> </td>";
        }

        document.getElementById("submit_button").innerHTML = "<input type='submit'; class='buttons calc-btn'  value='Calculate'>";
    }

    document.getElementById("submit_button").onclick = function() { 
        var gradePoints = 0;
        var creditsTotal = 0;
        
        var creditArray = document.getElementsByClassName("cred");
        var gradeArray = document.getElementsByClassName("grad");

        for (var i=0; i<nrows; i++) {
            creditsTotal += parseInt(creditArray[i].value);
            gradePoints += parseFloat(gradeArray[i].value)*parseInt(creditArray[i].value);
        }

        var res = gradePoints/creditsTotal;
        document.getElementById("result-show-div").style.display = "block";
        document.getElementById("show_result").innerHTML = "Your CGPA comes out to be: <span id='final-val'>" + res.toFixed(2) + "</span>";
    }
}