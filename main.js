para_array = [];
    
function submit()
{
    var display_para_array = [];

    for (var j = 1; j <= 4; j++) 
    {
        var para = document.getElementById("para"+j).value;
        console.log(para);
        para_array.push(para);
    }

    console.log(para_array);

    var lenght_para_array = para_array.length;
    console.log(lenght_para_array);

    for (var k = 0; k < lenght_para_array; k++) 
    {
        display_para_array.push("<h4>NAME - "+ para_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_para_array);
    document.getElementById("display_name_with_commas").innerHTML = display_para_array;

    var remove_commas = display_para_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    para_array.sort();
    console.log(para_array);

    var display_para_array_sorting = [];

    var lenght_para_array = =para_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}