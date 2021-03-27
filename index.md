<html>
    <title>KINGFUTNEWS</title>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="./TEST_1.css">
        <script language="javascript" src="C:\Users\HP Zbook\Desktop\KY THUAT LAP TRINH\KING FUT NEWS\TEST_1.js"></script>
    </head>

    <body>
    <header>
    <div id="box1" style="background-color: white;">
        <img id = "logo" src="E:\ẢNH\LOGO3.png">
        
        <div id="id01" class="idform">
            <div class="logincontainer">
                <label for="uname"><b>Username</b></label>
                <br>
                <input id="uname" type="text" placeholder="Enter Username" name="uname" required>
                <br>
                <label for="psw"><b>Password</b></label>
                <br>
                <input type="password" placeholder="Enter Password" name="psw" required>
                <br>
                <button id="loginBox" type="submit" style="background-color: green; color: white" onclick="LoginBox()">
                    Login</button>
                
                <br>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
        </div>
        <script>
            function LoginBox() {
                var infor = document.getElementById('uname').value;
                var obj = document.getElementById("button");
                obj.innerText = "Xin chào " + infor;
                var att = document.createElement('button');
                att.type = 'submit';
                att.style = 'background-color: green; color: white';
                att.setAttribute('onclick','SignOut()');
                var node = document.createTextNode('Thoát');
                att.appendChild(node)
                obj.appendChild(document.createElement("br"));
                obj.appendChild(att);
                document.getElementById("id01").style.display = "none";
            }
</script>
<script>
            function SignOut() {
                var obj = document.getElementById('button');
                obj.innerText = '';
                var att1 = document.createElement('button');
                var att2 = document.createElement('button');
                att1.type = 'submit';
                att1.style = 'background-color: #98FB98; color: black';
                var node1 = document.createTextNode('Login');
                att1.appendChild(node1);
                att1.setAttribute('onclick',"document.getElementById('id01').style.display = 'block'");
                obj.appendChild(att1);

                att2.type = 'submit';
                att2.style = 'background-color: #98FB98; color: black';
                att2.id = 'signup';
                var node2 = document.createTextNode('Sign up');
                var link = document.createElement('a');
                link.href = "C:/Users/HP Zbook/Desktop/KY THUAT LAP TRINH/loGin.html";
                link.target="_blank";
                link.appendChild(node2);
                att2.appendChild(link);
                obj.appendChild(att2);
            }
</script>
        <div class="logincontainer2">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
    
      <script>
        // Get the modal
        var modal = document.getElementById('id01');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        </script>

        </div>
    
    <div id="button" class="">
        <button id="login" onclick = "document.getElementById('id01').style.display = 'block'" 
         name="login-signup">Login</button>
         
        <button id="signup" value="signup"  name="login-signup">
            <a style="text-decoration: none" href="C:\Users\HP Zbook\Desktop\KY THUAT LAP TRINH\loGin.html" target="_blank">Sign up</a></button>
    </div>
        

    </div>

    
    </header>
    <hr style = "width : 100% ">
        <div id="menu" class="">
            <marquee id = "runtext" direction = "left">
                <script>
                    function Gio() {
                        var x = new Date();
                        var days = ["Chủ Nhật", "Hai", "Ba", "Tư", "TNăm", "Sáu", "Bảy"];
                        var months = ["Một", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười Một", "Mười Hai"];
                        document.getElementById("runtext").innerHTML = "Bây giờ là " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds()
                         + " thứ " +  days[x.getDay()] + ' ngày ' + x.getDate() +  ' tháng ' + months[x.getMonth()] +
                          " năm " + x.getFullYear();
                    }
                    var min = setInterval(Gio,1000);
                </script>
            </marquee>
            <button id="tag" value="vn" name="tag" class="tag-ani"><span class="fa fa-soccer-ball-o"></span>Việt Nam</button>
            <button id="tag" value="vn" name="tag" class="font tag-ani"><span class="fa fa-soccer-ball-o"></span>Champion League</button>
            <button id="tag" value="vn" name="tag" class="font tag-ani"><span class="fa fa-soccer-ball-o"></span>Premier League</button>
            <button id="tag" value="vn" name="tag" class="font tag-ani"><span class="fa fa-soccer-ball-o"></span>La Liga</button>
            <button id="tag" value="vn" name="tag" class="font tag-ani"><span class="fa fa-soccer-ball-o"></span>Bundesliga</button>
            <button id="tag" value="vn" name="tag" class="font tag-ani"><span class="fa fa-soccer-ball-o"></span>Ligue 1</button>
            
        </div>
    <main>
        <div id="slice">

        </div>

        
    </main>
    <footer>
        <div id="information">
            <p>Tên sở hữu<br>
                <a href="https://www.facebook.com/profile.php?id=100015769656194" target="_blank">Nguyễn Đức Hùng</a>
            </p>    
            <p>Phone<br>0981599522
            </p>   
            <p>Email<br>   
            <a href="mailto:nguyenduchung1372@gmail.com">nguyenduchung1372@gmail.com</a>
            </p>
        </div>

    </footer>
    </body>
</html>
