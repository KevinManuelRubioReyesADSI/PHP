<?php
    if ($_SERVER['REQUEST_METHOD']=='POST'){

        $edad = intval ($_POST['edad']);
        $sexo = intval ($_POST['sexo']);
        $carrera = intval ($_POST['carrera']);
        if($carrera==1){

            $estudiantes_de_ingenieria=$estudiantes_de_ingenieria+1;
            $a=$a+$edad;
    
            } if($sexo==1)
                $b=$b+1;
            if($carrera==1&&$sexo==2)
                $c=$c+1;
        }
    ?>
        <form method="post">
            <table style="text-align: left; margin-left: auto; margin-right: auto;" border="1" cellpadding="1" cellspacing="1">
                <tbody>
                    <tr>
                        <td>
                            <label for="edad">Ingresa el valor de edad:</label>
                        </td>
                        <td>
                            <input name="edad" required="required" step="1" type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="sexo">Selecciona el valor de sexo:</label>
                        </td>
                        <td>
                            <select name="sexo" required="required">
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="carrera">Selecciona el valor de carrera:</label>
                        </td>
                        <td>
                            <select name="carrera" required="required">
                                <option value="1">Ingenier&iacute;a</option>
                                <option value="2">otra carrera</option>
                             </select>
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="2" rowspan="1">
                            <input value="Procesar" type="submit" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form> 