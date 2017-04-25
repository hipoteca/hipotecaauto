module.exports = {
	data:{
		calculaPor:"precioCasa",
		plazo:"QUINCE",
		tab:'comprarCasa',
	},
	collection:{
		calculaPor:{
			comprarCasa:[
				{value:"precioCasa", 				text:"Cuánto cuesta la casa que quiero comprar"},
				{value:"montoCreditoCasa",	text:"El monto de crédito que necesito"},
				{value:"pagoMensualCasa",		text:"Cuánto quiero pagar al mes"}
			],
			comprarTerreno:[
				{value:"precioTerreno",				text:"Cuánto cuesta el terreno que quiero comprar"},
				{value:"montoCreditoTerreno",	text:"El monto de crédito que necesito"},
				{value:"pagoMensualTerreno",	text:"Cuánto quiero pagar al mes"}
			],
			remodelarCasa:[
				{value:"precioCasaRemodelar",text:"Cuánto cuesta la casa que quiero remodelar"},
				{value:"montoCreditoRemodelar",text:"El monto de crédito que necesito"},
				{value:"pagoMensualRemodelar",text:"Cuánto quiero pagar al mes"}
			],
			cambiarHipoteca:[
					{value:"deudaCredito",text:"Cuánto debo de mi crédito"}
			],
			obtenerLiquidez:[
				{value:"precioCasaLiquidez",text:"Cuánto cuesta la casa que tengo"},
				{value:"montoCreditoLiquidez",text:"El monto de crédito que necesito"},
				{value:"pagoMensualLiquidez",text:"Cuánto quiero pagar al mes"}
			]
		},
		plazo:{
			comprarCasa:[
				{value: "QUINCE", text:"15 años"},
				{value: "DIEZ", 	text:"10 años"},
				{value: "CINCO", 	text:"5 años"}
			],
			comprarTerreno:[
				{value: "DIEZ", 	text:"10 años"}, 
				{value: "CINCO", 	text:"5 años"}
			],
			remodelarCasa:[
				{value: "VEINTE", text:"20 años"}, 
				{value: "QUINCE", text:"15 años"}, 
				{value: "DIEZ", 	text:"10 años"}, 
				{value: "CINCO", 	text:"5 años"}
			],
			cambiarHipoteca:[
				{value: "VEINTE", 		text:"20 años"}, 
				{value: "DICINUEVE", 	text:"19 años"}, 
				{value: "DIECIOCHO", 	text:"18 años"}, 
				{value: "DIECISIETE", text:"17 años"},
				{value: "DIECISEIS", 	text:"16 años"},
				{value: "QUINCE", 		text:"15 años"}, 
				{value: "CATORCE", 		text:"14 años"}, 
				{value: "TRECE", 			text:"13 años"}, 
				{value: "DOCE", 			text:"12 años"}, 
				{value: "ONCE", 			text:"11 años"}, 
				{value: "DIEZ", 			text:"10 años"}, 
				{value: "NUEVE", 			text:"9 años"}, 
				{value: "OCHO", 			text:"8 años"}, 
				{value: "SIETE", 			text:"7 años"},
				{value: "SIES", 			text:"6 años"}, 
				{value: "CINCO", 			text:"5 años"}
			],
			obtenerLiquidez:[
				{value: "VEINTE", text:"20 años"},
				{value: "QUINCE", text:"15 años"}, 
				{value: "DIEZ", 	text:"10 años"}, 
				{value: "CINCO", 	text:"5 años"}
			]
		}
	},
	slider:{
		valorCasa:{
			comprarCasa:{
				cuantoCuesta:{
					min : 50000,
					max : 18000000,
					step : 1000 },
				montoCredito:{
					min : 50000,
					max : 18000000,
					step : 1000},
				pagoMensual:{
					min : 50000,
					max : 18000000,
					step : 1000}
			},
			comprarTerreno:{}
		},
		valorNecesito:{}
	}
};