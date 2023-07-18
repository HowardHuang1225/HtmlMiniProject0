/**function handle_click1(element){
    //console.log(element);
    alert("Login Successfully !!!");
    location.href='index.html';
}**/

var accounts=["howard","bob","eric"]
var passwords=["533533","123456","454545"]

var forget=document.querySelector(".forgeta");

var account = document.getElementById("account");
var password = document.getElementById("password");
var loginB = document.querySelector(".loginB");
var register = document.querySelector(".register");

function clickloginB() {
    var str1 = "";
    var str2 = "";
    str1 = account.value;
    str2 = password.value;
    //alert("account: "+str1+"\npassword: "+str2);
    //alert("account: "+accounts[accounts.length-1]+"\npassword: "+passwords[passwords.length-1]);
    for(let i=0;i<accounts.length;i++){
        if(str1==accounts[i] && str2==passwords[i]){
            alert("Login Successfully !!!");
            location.href='index.html';
            return;
        }
    }
        
 
    alert("account or password is wrong!!!");
}

function clickregister() {
    var str1 = "";
    var str2 = "";
    str1 = account.value;
    str2 = password.value;

    if(str1=="" || str2==""){
        alert("account or password can't be empty!!!");
        return;
    }

    for(let i=0;i<accounts.length;i++){
        if(str1==accounts[i]){
            alert("the account is used!!!");
            return;
        }
    }

    accounts.push(str1);
    passwords.push(str2);
    alert("register success!!!")
    alert("account: "+accounts[accounts.length-1]+"\npassword: "+passwords[passwords.length-1]);
}

function clickforget(){
    var str=prompt("enter your account");
    for(let i=0;i<accounts.length;i++){
        if(str==accounts[i]){
            alert("your password is: "+passwords[i]);
            return;
        }
    }
    alert("no such account!!!");
}

loginB.addEventListener("click", clickloginB);
register.addEventListener("click", clickregister);
forget.addEventListener("click",clickforget);


