<?php
   if ($_SERVER['REQUEST_METHOD']=='POST')
   {
       if($i==1)
           $pago=10;
       else
           $pago=$pago*2;
       $total=$total+$pago;
       echo 'Valor de pago: ' . $pago . "<br/>\n";
   }
   
   ?>
         <form method="post">
        <table style="text-align: left; margin-left: auto; margin-right: auto;" border="1" cellpadding="1" cellspacing="1">
            <tbody>
            <tr align="center">
                    <td colspan="2" rowspan="1">
                        <input value="Procesar" type="submit" />