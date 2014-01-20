// Servidor

function LoginEnviar (email,contra)
{
	$.ajax({
  type: "POST",
  url: "http://santapp.nuvemtecnologia.mx/ingreso.php",
  data: "contra="+contra+"&email="+email+"&id="+disp()['id']
}).done(function( msg ) {
  if(msg!=0)
  {
	 	saveLogin(nom,disp()['id']);
		window.location.href='#page';
  	}
	else
	{
		navigator.notification.alert("Datos Incorrectos intenta de Nuevo",null,"Error de Registro","Aceptar");
		}
});

	}

function EnviarRegistro (nombre,email,contra)
{
	$.ajax({
  type: "POST",
  url: "http://santapp.nuvemtecnologia.mx/registro.php",
  data: "nom="+nombre+"&contra="+contra+"&email="+email+"&id="+disp()['id']
}).done(function( msg ) {
  if(msg!=0)
  {
	 saveLogin(nom,disp()['id']);
	 	navigator.notification.alert("Los Datos fueron registrados",null,"Registro Correcto","Aceptar");
		window.location.href='#page';
  	}
	else
	{
		navigator.notification.alert("Los Datos no fueron enviados correctamente",null,"Error de Registro","Aceptar");
		}
});

	}
	
function reservarHB(t,p,h,d)
{
	$.ajax({
  type: "POST",
  url: "http://igitsoft.com/pgtest.php",
  data: "t="+t+"&p="+p+"&h="+h+"&d="+d
}).done(function( msg ) {
  if(msg==1)
  {
	navigator.notification.alert("Reserva Realizada",function(){
		window.location.href='#page';
		},"Reserva","Aceptar")
	}
	else
	{
		navigator.notification.alert("No se pudo sincronizar la reserva,Esperando Conexión a internet",null,"Error de Sincronización","Aceptar")
		}
});

	
	}