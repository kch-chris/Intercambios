// almacenamiento
function saveLogin (name,id)
{
	window.localStorage.setItem('nombre',name);
	window.localStorage.setItem('id',id);
	}
	
function isLogin()
{
	var id=window.localStorage.getItem('id');
	if(id!=undefined )
	{
		return true;
		}
	else 
	{
		return false;
		}
}
function accesoBD ()
{
	var db = window.openDatabase("santa", "1.0", "Santa DB", 5000000);
	return db;
	}

function reservaInt(t,p,h,d)
{
	accesoBD().trasaction(function(tx) {
		var f= new Date();
		var fecha= f.getDate()+'/'+(f.getMonth()+1)+'/'+f.getFullYear();
     tx.executeSql('CREATE TABLE IF NOT EXISTS reservaciones (id unique, tipoHabitacion, personas, habitaciones, dias)');
     tx.executeSql('INSERT INTO reservaciones (tipoHabitacion, personas, habitaciones, dias) VALUES ("'+t+'", "'+p+'","'+h+'","'+d+'")');
	  tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, tipoHabitacion, personas, habitaciones, dias,fecha)');
     tx.executeSql('INSERT INTO historial (tipoHabitacion, personas, habitaciones, dias, fecha) VALUES ("'+t+'", "'+p+'","'+h+'","'+d+'","'+fecha+'")');
},function(err){
	alert(err.code);
	},
function (){
	navigator.notification.alert('Esperando por conexion a internet',function(){
		window.location.href='#page';
		},'Datos Guardados','Aceptar');
	}
);
	
}

function leerHistorial()
{
	accesoBD().transaction(function(tx){
		tx.executeSql('Select * from historial',[],function(tx1,resultado){
			var largo=resultado.rows.length;
			if(largo!=0){
				$('#historial div[data-role=content]').html('');
				for(i=0;i<largo;i++)
				{
					$('#historial div[data-role=content]').append('  <div data-role="collapsible-set">'+
            '<div data-role="collapsible" data-collapsed="true">'+
                '<h3>'+
                    resultado.rows.item(i).fecha+
                '</h3>'+
                'Habitaciones: '+resultado.rows.item(i).habitaciones+'<br/>'+
                'Personas: '+resultado.rows.item(i).personas+'<br/>'+
				'Días: '+resultado.rows.item(i).dias+'<br/>'+
                'Tipo de Habitacion: '+resultado.rows.item(i).tipoHabitacion+''+
            '</div>'+
        '</div>');
					}
				}
			},function(err){
				alert(err.code);
				});
		},function(err){
			alert(err.code);
			},
	function(){
		navigation.notification.alert('Historial Leído',null,'Historial','Aceptar');
		}
	);
	}
	
function leerReservas() {
	accesoBD().transaction(function(tx){
		tx.executeSql('Select * from reservaciones',[],function(tx1,resultado){
			var largo=resultado.rows.length;
			if(largo!=0){
				for(i=0;i<largo;i++)
				{
					reservarHB(resultado.rows.item(i).tipoHbitacion,resultado.rows.item(i).personas,resultado.rows.item(i).habitaciones,resultado.rows.item(i).dias);
					}
				}
			},function(err){
				alert(err.code);
				});
				tx.executeSql('Delete from reservaciones');
		},function(err){
			alert(err.code);
			},function(){
			
				}
	
	);
	}