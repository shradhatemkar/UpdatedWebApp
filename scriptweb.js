function validateForm(){
		var email=document.User_Contact.User_Mail.value;
		var name = document.User_Contact.User_Name.value;
		var message = document.User_Contact.User_Message.value; 

		var e=true;
		var m=true;
		var n=true;
		
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		
         if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
				alert("Not a valid e-mail address");
				e = false;
			}
		
			if (name.length==0) {
				alert("Please Enter the Name");
				n =false;
			}

			if (message.length==0) {
				alert("Enter Message");
				m = false;
			}
			
		if(e&&n==true)
			{
				if(m==true)
				document.User_Contact.User_Response.value="Email send Successfully";
			}
			else 
				document.User_Contact.User_Response.value="Email Not Send";
}

