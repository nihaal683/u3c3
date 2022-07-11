document.querySelector("#form").addEventListener("signUp", signInFunction);
var signInArray = [];
function signInFunction() {
      event.preventDefault();
      var name= document.querySelector("#name").value;
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
      for (var i = 0; i < forSignIn.length; i++) {
            if (name==forSignIn[i].name && email == forSignIn[i].email && password == forSignIn[i].password ) {
                if(name!=null || email!=null || password!=null){
                        // alert("sign in successfull")
                        window.open("profile.html" ,"_self");
                        return;
                }
            }
             else if(i==forSignIn.length-1) {
                        alert("Wrong password or email"); 
            }
      }
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
       document.querySelector("#pass").value = "";
}