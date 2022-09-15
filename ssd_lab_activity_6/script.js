function confirmpasscheck(event) {
    if (document.getElementById("ServerPassword").value != document.getElementById("ConfirmPassword").value) {

        window.alert("Password does not match with ConfirmPassword");
    }
}

function usernamecheck(event) {
    var serverusernameenterd = document.getElementById("ServerUsername").value;
    let pattern = /(?=.*\d)(?=.*[A-Z])/;
    if (!pattern.test(serverusernameenterd)) {
        document.getElementById('ServerUsername').style.visibility = "visible";
        document.getElementById('ServerUsername').innerHTML = "not valid username format";
    }
}

function todisplayonSubmit(event) {
    console.log("Hi");
    var namenetered = document.getElementById("mangername").value;

    console.log(namenetered);
    var Email = document.getElementById("GroupEmail").value;

    var username = document.getElementById("ServerUsername").value;

    var leadenetered = document.getElementById("lead").value;
    window.print("name:", namenetered);

}