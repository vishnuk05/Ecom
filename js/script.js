$(document).ready(function () {
    $('#search-box').hide();
    $("#search").click(function () {
        $("#search-box").show();
        $("#search-box").blur(function () {
            $("#search-box").hide();
        });
    });
})
////////
validate = () => {
    if (document.getElementById("first-name").value == "") {

        document.getElementById("first-name").placeholder = "enter your first name"
    }
    else if (document.getElementById("last-name").value == "") {
        document.getElementById("last-name").placeholder = "enter your last name"
    }
    else if (document.getElementById("country").value == "") {
        document.getElementById("message").innerHTML = "select your country"
    }
    else if (document.getElementById("address").value == "") {
        document.getElementById("address").placeholder = "enter your address"
    }
    else if (document.getElementById("postcode").value == "") {
        document.getElementById("postcode").placeholder = "enter your zipcode"
    }
    else if (document.getElementById("city").value == "") {
        document.getElementById("city").placeholder = "enter your city"
    }
    else if (document.getElementById("phone").value == "") {
        document.getElementById("phone").placeholder = "enter your phone number"
    }
    else if (document.getElementById("email").value == "") {
        document.getElementById("email").placeholder = "enter your email"
    }
    else {
        document.getElementById("message").innerHTML = 'form successfully submitted and order placed';
        setTimeout(function () {
            document.getElementById("form").submit();
        }, 2000);

    }
}
//
gotosingleproduct = () => {
    window.location.href = "singleproduct.html";
}
//////////////////////////
swap_img1 = () => {
    var temp = document.getElementById('big_image').src;
    document.getElementById('big_image').src = document.getElementById('image_1').src;
    document.getElementById('image_1').src = temp;
}
swap_img2 = () => {
    var temp = document.getElementById('big_image').src;
    document.getElementById('big_image').src = document.getElementById('image_2').src;
    document.getElementById('image_2').src = temp;
}
swap_img3 = () => {
    var temp = document.getElementById('big_image').src;
    document.getElementById('big_image').src = document.getElementById('image_3').src;
    document.getElementById('image_3').src = temp;
}
////////////////////////////
email_validate = () => {
    if (document.getElementById('newsletter').value ==="") {

       document.getElementById("newsletter").placeholder ='enter your email'
    } 
    else {
        document.getElementById('email_success').style.display = "block"
        document.getElementById("email_success").innerHTML = 'thank you for subcribing';
        setTimeout(function () {
            document.getElementById('form_email').submit();
        }, 5000);
    }
}