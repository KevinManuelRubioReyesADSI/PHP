Proceso EstudiantesDeLaUniversidad
    estudiantes_de_ingenieria <- 0;
    a <- 0;
    b <- 0;
    c <- 0;
    Escribir Sin Saltar "Ingresa el valor de n:";
    Leer n;
    Para i<-1 Hasta n Con Paso 1 Hacer
        Escribir "PROCESO ", i;
        Escribir Sin Saltar "Ingresa el valor de edad:";
        Leer edad;
        Escribir "Selecciona el valor de sexo.";
        Escribir "    1.- Masculino";
        Escribir "    2.- Femenino";
        Escribir Sin Saltar "    :";
        Repetir
            Leer sexo;
            Si sexo<1 O sexo>2 Entonces
                Escribir Sin Saltar "Valor incorrecto. Ingrésalo nuevamente.: ";
            FinSi
        Hasta Que sexo>=1 Y sexo<=2;
        Escribir "Selecciona el valor de carrera.";
        Escribir "    1.- Ingeniería";
        Escribir "    2.- otra carrera";
        Escribir Sin Saltar "    :";
        Repetir
            Leer carrera;
            Si carrera<1 O carrera>2 Entonces
                Escribir Sin Saltar "Valor incorrecto. Ingrésalo nuevamente.: ";
            FinSi
        Hasta Que carrera>=1 Y carrera<=2;
        Si carrera = 1 Entonces
            estudiantes_de_ingenieria <- estudiantes_de_ingenieria+1;
            a <- a+edad;
        FinSi
        Si sexo = 1 Entonces
            b <- b+1;
        FinSi
        Si carrera = 1 Y sexo = 2 Entonces
            c <- c+1;
        FinSi
        Escribir "";
    FinPara
    Si estudiantes_de_ingenieria = 0 Entonces
        a <- 0;
    SiNo
        a <- a/estudiantes_de_ingenieria;
    FinSi
    Si n = 0 Entonces
        b <- 0;
    SiNo
        b <- 100.0*b/n;
    FinSi
    Si estudiantes_de_ingenieria = 0 Entonces
        c <- 0;
    SiNo
        c <- 100.0*c/estudiantes_de_ingenieria;
    FinSi
    Escribir "Valor de estudiantes de ingenieria: ", estudiantes_de_ingenieria;
    Escribir "Valor de a: ", a;
    Escribir "Valor de b: ", b;
    Escribir "Valor de c: ", c;