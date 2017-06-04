
$(document).ready(function(){
    $("#btn").click(function(){

			//$(document.getElementById("name")).hide();

			if (document.getElementById(document.getElementById("sch").value)) {
			//$(document.getElementById("name")).show();
			$('#list1').hide();  
			$(document.getElementById(document.getElementById("sch").value)).appendTo('body');
			
			} else {
				$('#list1').hide(); 
			$("p").html("<h2>There is no such discussion</h2>");
		}
    });
});



$(document).ready(function(){
    $("#btn").click(function(){
		var x=document.getElementById("newname").value;
		if (document.getElementById("newname").value) {
			  
			$('<p><div id=x><h3>rkm</h3> </div></p>').appendTo(document.getElementById("list1"));
			
			} else {
				$('#list1').hide(); 
			$("p").html("<h2>There is no such discussion</h2>");
		}
	});
});	
		

$(document).ready(function() {
  $('#jBold').click(function() {
    document.execCommand('bold');
  });
});


$(document).ready(function() {
  $('#jItalics').click(function() {
    document.execCommand('italic');
  });
});

$(document).ready(function() {
  $('#jUnderline').click(function() {
    document.execCommand('underline');
  });
});


$(document).ready(function(){
	$('#fake_textarea').hide();
}