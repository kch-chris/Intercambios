// Eventos
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		if(!isLogin())
		{
		window.location.href='#login';
		}
		
	$('#regEnviar').on("tap",function(){
		var nom=$('#regNom').val();
		var email=$('#regEmail').val();
		var contra=$('#regContra').val();
		var contra1 =$('#regContra1').val();
		if(contra==contra1)
		{
		
		if(nom!='' && email!='' && contra!='')
		{
			EnviarRegistro(nom,email,contra);	
			}
		else 
			{
				navigator.notification.alert('Todos los campos son requeridos',null,"Error de Registro","Aceptar");
				}
		}
		else
		{
			navigator.notification.alert('Las contraseñas tienen que coincidir',null,"Error de Registro","Aceptar");
			}
		});
	
	$('#nr1  a[data-role=button]').tap(function(){
		var pr =$('#nr1 select:eq(0)').val();
			
			$('#nr2').attr('th',pr);
			$('#regID').attr('value',1);
					
			window.location.href='#nr2';
	}
		);
		
		$('#nr2 a[data-role=button]').tap(function(){
			var id =$('#redID').attr('value');
			var tot=$('#nr2').attr('th');
			id++;
			$('#regID').attr('value',id);
		    if(id<=tot)
			{
			window.location.href='#nr2';
			}
		  }
		);
		$('#page li:eq(1)').tap(
		function(){
			leerHistorial();
			}
		 );
		 document.addEventListener("online",function(){
			 leerReservas();
			 },false);
		},false);
	});
	