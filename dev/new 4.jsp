<div id="tablaAmortizacion"class="frame-tab row flecha-1 frame-tab-border-1">

	<section class="frame-bar-left hidden-xs">
		<span id="tabAmort-flecha" 
		style="padding-left:8px; padding-top: 8px;" 
		class="glyphicon glyphicon-menu-down flecha-1-color" 
		aria-hidden="true" onclick="desplegarTabAmort()"></span>
	</section>

	<section class="frame-bar-right">
		<div class="row sombraAmortizacion">
			<div class="col-xs-12 col-sm-6 col-md-8">
				<h4 onclick="desplegarTabAmort()" class="header-text">Tabla de amortización</h4>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-4">
				<div class="row">
					<div class="col-xs-1 col-sm-3 col-md-4"></div>
					<div class="col-xs-4 col-sm-4 col-md-4">
					<	a href="#" style="color:#009ee5">Actualizar</a>
					</div>
					<div class="col-xs-6 col-sm-5 col-md-4">
						<a href="#" style="color:#009ee5">Descargar<img src="img\pdf.png" style="margin-left:4px" height="25" width="20"></a>
					</div>
				</div>
			</div>
		</div>
		
		
		<div id="seccionTablaAmort" class="questions-text" style="padding-left:10px;padding-right:10px;" >
			<br>
			<p class="text-amortizacion">Si tienes ingresos extras puedes realizar pagos anticipados y/o adelantados.</p>      
			<p class="text-amortizacion">Los pagos anticipados te benefician y podrán reducir el plazo  o la mensualidad en cuyo caso la Tabla de Amortización cambiará.</p>
			<div  class="row">
				<div class="col-xs-12 col-sm-8 col-md-4">
					<label for="default">Reducir tu:</label>
					<select   class="form-control select-hd" id='calcularPor' onclick="calculaPor(this.value)">
					</select> 
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<label for="default">¿Cuanto puedo pagar?</label>
					<div class="input-group input-group-inset">
						<span class="input-group-addon input-group-addon-inset"
						style="padding-top:8px;font-size:17px;"> 
						<span>$</span>
						</span>
						<input  class="form-control select-hd" id="ingresoMensual"
						name="ingresoMensual" >
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4"> 
					<label id="mensaje" for="default">¿A partir de qué numero de pago?</label>
					<input  class="form-control select-hd" id="ingresoMensual"
					name="ingresoMensual" >
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4">
					<label>¿Por cuánto tiempo haré mi pago?</label>
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-4">
							<select class="form-control select-hd" id='calcularPor'"></select>
							<br class="visible-xs" /> <br class="visible-xs"/> 
							<br class="visible-xs" />
						</div>	
					</div>
					<div class=" col-xs-12 col-sm-6 col-md-8">
					<select class="form-control select-hd" id='calcularPor'"></select>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-4">
					<label>¿Por cuánto tiempo haré mi pago?</label>
					<select   class="form-control select-hd" id='calcularPor'"> 
					</select>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-4">
					<label>¿Por cuánto tiempo haré mi pago?</label>
					<select   class="form-control select-hd" id='calcularPor'"> 
					</select>
					</div>

					<br>
					<p class="small-text-amortizacion">*Crédito sujeto a cobro de IVA sobre interés real y comisiones de forma mensual.</p>   
					<table class="table table-striped" style="text-align:center">
					<tr class="bordeTabla encabezadoTabla">
					<td class="tamanioCeldasEncabezado">Pago</td>
					<td class="tamanioCeldasEncabezado">Sueldo insoluto</td>
					<td class="tamanioCeldasEncabezado">Interés</td>
					<td class="tamanioCeldasEncabezado">Amortización</td>
					<td class="tamanioCeldasEncabezado">Mensualidad
					(Sin accesorios)</td>
					<td class="tamanioCeldasEncabezado">Seguros de vida y daños</td>
					<td class="tamanioCeldasEncabezado">Comisión Aut. Dif.</td>
					<td class="tamanioCeldasEncabezado">Mensualidad total</td>
					<td class="tamanioCeldasEncabezado">Pagos anticipados</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>1</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>2</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>3</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>4</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>5</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>6</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>7</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>8</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>9</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr class="bordeTabla contenidoTabla">
					<td>10</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					<tr>
					<td>Totales</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					<td>$0,000,000.00</td>
					</tr>
					</table>
					<p class="small-text-amortizacion">Esta información constituye un ejercicio numérico de acuerdo a una simulación
					de condiciones de crédito, por lo que el usuraio queda enterado que la información
					que obtenga, no constituye una solicitud  de crédito, ni implica obligación
					alguna para BBVA Bancomer, S.A.</p>
					<input style="float:right;" class="btn btn-primary" type="button" value="Precalificar AHORA">
					<br>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
