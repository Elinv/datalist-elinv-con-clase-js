let telArr = [
"Seguridad 👉 Emergencias ➖ 📞911",
"Seguridad 👉 Violencia Genero ➖ 📞144",
"Seguridad 👉 Policia ➖ 📞 101 - 430121 - 430555 - 430666",
"Seguridad 👉 Policia Rural ➖ 📞430360 - 421338",
"Seguridad 👉 Policia Vial ➖ 📞430361",
"Seguridad 👉 Bomberos Voluntarios ➖ 📞100 - 422272",
"Seguridad 👉 Hospital Municipal ➖ 📞107 - 422210",
"Seguridad 👉 Defensa Civil ➖ 📞103",

"Gobierno 👉 Municipalidad de Bragado Alsina 178 ➖ 📞 541200 mail:info@bragado.gov.ar",
"Gobierno 👉 Linea Municipales APS ➖ 📞412853/ 541180",
"Gobierno 👉 Agroindustria ➖ 📞541-222",
"Gobierno 👉 Bromatologia ➖ 📞541193",
"Gobierno 👉 Cabina Sanitaria ➖ 📞405-894",
"Gobierno 👉 Cementerio ➖ 📞541-232",
"Gobierno 👉 Compras ➖ 📞541-212",
"Gobierno 👉 Contaduria ➖ 📞541-214",
"Gobierno 👉 Corralon ➖ 📞541-260",
"Gobierno 👉 Cultura ➖ 📞541-281",
"Gobierno 👉 CRUB ➖ 📞426-992",
"Gobierno 👉 Deleg. Comodoro Py ➖ 📞541-296",
"Gobierno 👉 Deleg. Mechita ➖ 📞541-292",
"Gobierno 👉 Deleg. OBrien ➖ 📞541-291",
"Gobierno 👉 Deportes ➖ 📞541-255",
"Gobierno 👉 Discapacidad ➖ 📞541-253",
"Gobierno 👉 Desarrollo Social ➖ 📞541-250",
"Gobierno 👉 Dir. Gral de Inspecciones ➖ 📞541-240",
"Gobierno 👉 Escuela de Arte ➖ 📞427708",
"Gobierno 👉 Guias ➖ 📞541-224",
"Gobierno 👉 Gobierno ➖ 📞541-203",
"Gobierno 👉 Habilitaciones ➖ 📞541-206",
"Gobierno 👉 Hacienda ➖ 📞541-213",
"Gobierno 👉 Informes ➖ 📞541-200",
"Gobierno 👉 Juzg. de faltas ➖ 📞541-272",
"Gobierno 👉 Legales ➖ 📞541-211",
"Gobierno 👉 Obras Publicas ➖ 📞541-230",
"Gobierno 👉 Personal ➖ 📞541-204",
"Gobierno 👉 Prensa ➖ 📞541-202",
"Gobierno 👉 Produccion ➖ 📞541-220",
"Gobierno 👉 PyMES-Emprendedores ➖ 📞541-225",
"Gobierno 👉 Red Vial ➖ 📞541-265",
"Gobierno 👉 Rentas ➖ 📞541-207",
"Gobierno 👉 RRHH ➖ 📞541-219",
"Gobierno 👉 Sec. Privada ➖ 📞541-201",
"Gobierno 👉 Seguridad ➖ 📞541-275",
"Gobierno 👉 Sistemas ➖ 📞541-210",
"Gobierno 👉 Secre. de Niñez, Adolescencia y Familia ➖ 📞541-256",
"Gobierno 👉 Tesoreria ➖ 📞541-208",
"Gobierno 👉 Transito ➖ 📞541-270",
"Gobierno 👉 Turismo ➖ 📞541-223",

"Hoteles 👉 Coll ➖ 📞422858",
"Hoteles 👉 Del Parque ➖ 📞424177",
"Hoteles 👉 Friend’s House ➖ 📞425964",
"Hoteles 👉 Posadas ➖ 📞15414087",
"Hoteles 👉 Residencial Miceli ➖ 📞422154",
"Hoteles 👉 Sol Naciente ➖ 📞422854",
"Hoteles 👉 Unico ➖ 📞431111",

"Transporte 👉 Chevallier ➖ 📞 421884",
"Transporte 👉 El Rapido ➖ 📞 421749",
"Transporte 👉 El Valle ➖ 📞 421749",
"Transporte 👉 Ex Expreso Junin ➖ 📞 421884",
"Transporte 👉 Pullman General Belgrano ➖ 📞 431800",
"Transporte 👉 Pehuenche ➖ 📞 421749",
"Transporte 👉 Plusmar ➖ 📞 421749",
"Transporte 👉 Via Bariloche ➖ 📞 421749",
"Transporte 👉 Ferrobaires Bragado ➖ 📞 430241/426886",
"Transporte 👉 Ferrobaires Once ➖ 📞 011-48610043/48672519",
"Transporte 👉 Ferrobaires Haedo ➖ 📞 011-4443-9016",
"Transporte 👉 Aero Club Bragado ➖ 📞 422441",
"Transporte 👉 Minibus ➖ 📞 421900/1",
"Transporte 👉 Santorini ➖ 📞 427900",

"Transporte 👉 Minibus 93 Bs. As. ➖ 📞 011-48263057",
"Transporte 👉 Minibus 93 La Plata ➖ 📞 0221-154852459",
"Transporte 👉 Santorini Bs. As. ➖ 📞 011-48655680/48613456",
"Transporte 👉 Santorini La Plata ➖ 📞 0810-666-8338",

"Servicios 👉 Aguas Bonaerenses S.A. ➖ 📞 430076",
"Servicios 👉 Camuzzi S.A. ➖ 📞 430590",
"Servicios 👉 Eden S.A. ➖ 📞 430042/211",
"Servicios 👉 Transba S.A. ➖ 📞 425477/0800-333-1548",
"Servicios 👉 Telefonica ➖ 📞 430556",
"Servicios 👉 Speedy ➖ 📞 0800-333-7733",
"Servicios 👉 CRE Bragado Ltda ➖ 📞 430110",
"Servicios 👉 Coop. Electrica de Olascoaga Ltda. ➖ 📞 495157",
"Servicios 👉 CO.SE.PU Ltda. (O'Brien) ➖ 📞 498221",
"Servicios 👉 COOP. MECH. Ltda. (Mechita) ➖ 📞 493000",
"Servicios 👉 Coop. Telefonica Comodoro Py Ltda. ➖ 📞 495000/15",
"Servicios 👉 Coop. Telefonica de Warnes Ltda. ➖ 📞 492000/11",

"Remises 👉 Bragado 422700 – 404700 / Whatsapp",
"Remises 👉 Tomas   422059 – 424535 – 430086 – 425001 - 447330",
"Remises 👉 Servicar Vip    422274 / Celular 405050",
"Remises 👉 Rivadavia   422442 - 465819",
"Remises 👉 Aluver - 02342-431127",
"Remises 👉 Centro - 02342-422893",
"Remises 👉 Luis - 02342-424535",
"Remises 👉 Marcos - 02342-421702",
"Remises 👉 Pellegrini - 02342-430810",
"Remises 👉 Rivadavia - 02342-422442",

"Organismos Publicos 👉 Agencia INTA Bragado ➖ 📞 430885",
"Organismos Publicos 👉 SENASA ➖ 📞 430564",
"Organismos Publicos 👉 AFIP ➖ 📞 430650/424730/422764/430977",
"Organismos Publicos 👉 Registro Nacional del Automotor ➖ 📞 430486",
"Organismos Publicos 👉 Jefatura Distrital de Educacion Region 15 ➖ 📞 424230",
"Organismos Publicos 👉 Consejo Escolar Bragado ➖ 📞 430238/425787",
"Organismos Publicos 👉 Secretaria de Inspenccion de Enseñanza ➖ 📞 422254",
"Organismos Publicos 👉 Juzgado de Paz ➖ 📞 422254",
"Organismos Publicos 👉 Justicia Laboral ➖ 📞 430402/426231",
"Organismos Publicos 👉 Casa de Justicia Defensoria Oficial ➖ 📞 430174",
"Organismos Publicos 👉 Direccion Provincial de Rentas ➖ 📞 430071/430616",
"Organismos Publicos 👉 Registro Provincial de las Personas ➖ 📞 422577",
"Organismos Publicos 👉 Delegacion Ministerio de Trabajo ➖ 📞 422348",
"Organismos Publicos 👉 PAMI ➖ 📞 430692",
"Organismos Publicos 👉 ANSES Bragado ➖ 📞 421978",

"Sector Economico 👉 Sociedad Rural de Bragado ➖ 📞 430564",
"Sector Economico 👉 C.U.C.I. ➖ 📞 430558/422373",
"Sector Economico 👉 Centro de Acopiadores de Cereales ➖ 📞 430564",
"Sector Economico 👉 FUNBRASA ➖ 📞 430564",
"Sector Economico 👉 Camara de Microempresarios ➖ 📞 426050/15460320",
"Sector Economico 👉 Federacion Agraria Argentina ➖ 📞 424856",

"Bancos 👉 Nacion ➖ 📞 430000/430904/426464",
"Bancos 👉 Provincia (Bragado) ➖ 📞 430540/1/2",
"Bancos 👉 Provincia (O’Brien) ➖ 📞 498002/476/021",
"Bancos 👉 Ceedicop Coop. Ltda ➖ 📞 430870/930",
"Bancos 👉 Galicia ➖ 📞 424476/426245/430800/1/2",
"Bancos 👉 La Pampa ➖ 📞 422020/421530/427345",
"Bancos 👉 Rio ➖ 📞 439600",

"Medios 👉 Canal 5 EPS ➖ 📞 460924>",
"Medios 👉 Diario El Censor ➖ 📞 430282",
"Medios 👉 Diario La Voz de Bragado ➖ 📞 430200/421720",
"Medios 👉 Fm Bragado 95.1 ➖ 📞 409676",
"Medios 👉 Fm Brisa 97.5 ➖ 📞 531861",
"Medios 👉 Fm Brisa 97.1 (Mechita) ➖ 📞 493311",
"Medios 👉 FM Epsilon 97.3 ➖ 📞 460924",
"Medios 👉 Fm Fiesta 92.5 ➖ 📞 513687",
"Medios 👉 FM La 100 Bragado 90.9 mhz ➖ 📞 460925",
"Medios 👉 FM Mega Bragado 98.3 ➖ 📞 2346-557533/2342-531692",
"Medios 👉 FM Pampa 104.5 ➖ 📞 02346-551716/430927",
"Medios 👉 FM Popular 101.7 (Mechita) ➖ 📞 406854",
"Medios 👉 FM Ruta 46 (O’Brien) ➖ 📞 498601",
"Medios 👉 FM San Gabriel 92.1 ➖ 📞 425303",
"Medios 👉 FM Space (O’Brien) ➖ 📞 498077/410",
"Medios 👉 FM Tentacion 106.7 ➖ 📞 421968/ 450634",
"Medios 👉 Radio Mitre Bragado 89.3 mhz ➖ 📞 460925",

"Medios 👉 FM Power ➖ 📞 425400",
"Medios 👉 FM Satelite ➖ 📞 430927",
"Medios 👉 FM Tiempo ➖ 📞 423907",
"Medios 👉 FM Zeus ➖ 📞 422086",
"Medios 👉 FM Contacto (Mechita) ➖ 📞 493224",
"Medios 👉 FM Victoria (O'Brien) ➖ 📞 498563",
"Medios 👉 Clablevision ➖ 📞 424955",

"Profesionales 👉 Profesionales Universitarios de Ingenieria ➖ 📞 423614",
"Profesionales 👉 Centro de Ingenieros Agronomos ➖ 📞 423614",
"Profesionales 👉 Circulo Medico de Bragado ➖ 📞 430095/406",
"Profesionales 👉 Circulo de Medicos Veterinarios ➖ 📞 430507",
"Profesionales 👉 Asociacion Abogados de Bragado y Alberti ➖ 📞 430326",
"Profesionales 👉 Colegio de Farmaceuticos ➖ 📞 430202",
"Profesionales 👉 Consejo Profesional de Cs. Economicas ➖ 📞 423180",
"Profesionales 👉 Circulo de Bioquimicos ➖ 📞 425476",
"Profesionales 👉 Colegio Provincial de Escribanos ➖ 📞 430808",
"Profesionales 👉 Colegio de Arquitectos ➖ 📞 421207",
"Profesionales 👉 Centro de Maestros Mayores de Obras ➖ 📞 431145",
"Profesionales 👉 Circulo Odontologico Bragado ➖ 📞 431842",
"Profesionales 👉 Centro de Martilleros ➖ 📞 464787",

"Tradicionalistas 👉 Comision Fiesta Nacional del Caballo ➖ 📞 430750",
"Tradicionalistas 👉 Comision Festival Leyenda y Tradicion ➖ 📞 15406845",

"Centro de Jubilados 👉 Jubilados y Pensionados Bragado (Falcon) ➖ 📞 431027",
"Centro de Jubilados 👉 Jubilados y Pensionados Bragado (G. Paz) ➖ 📞 425087",
"Centro de Jubilados 👉 Jubilados y Pensionados de O’Brien ➖ 📞 498176",
"Centro de Jubilados 👉 Jubilados y Pensionados de Mechita ➖ 📞 493329",

"Servicios 👉 Club de Leones ➖ 📞 431110",
"Servicios 👉 Rotary Club ➖ 📞 426086/421984",
"Servicios 👉 Bragado Club Golf ➖ 📞 451398",
"Servicios 👉 Aeroclub Municipal ➖ 📞 577125",

"Deportes 👉 Paddle 25 de Mayo ➖ 📞 15414115",
"Deportes 👉 Paddle Pujol (Cel-Car) ➖ 📞 15407103",
"Deportes 👉 Futbol Pujol Stadium ➖ 📞 1545916>"
];

let telArr1 = [
    "Seguridad 👉 Emergencias ➖ 📞911",
    "Seguridad 👉 Violencia Genero ➖ 📞144",
    "Seguridad 👉 Policia ➖ 📞 101 - 430121 - 430555 - 430666",
    "Seguridad 👉 Policia Rural ➖ 📞430360 - 421338",
    "Seguridad 👉 Policia Vial ➖ 📞430361",
    "Seguridad 👉 Bomberos Voluntarios ➖ 📞100 - 422272",
    "Seguridad 👉 Hospital Municipal ➖ 📞107 - 422210",
    "Seguridad 👉 Defensa Civil ➖ 📞103",
    
    "Gobierno 👉 Municipalidad de Bragado Alsina 178 ➖ 📞 541200 mail:info@bragado.gov.ar",
    "Gobierno 👉 Linea Municipales APS ➖ 📞412853/ 541180",
    "Gobierno 👉 Agroindustria ➖ 📞541-222",
    "Gobierno 👉 Bromatologia ➖ 📞541193",
    "Gobierno 👉 Cabina Sanitaria ➖ 📞405-894",
    "Gobierno 👉 Cementerio ➖ 📞541-232",
    "Gobierno 👉 Compras ➖ 📞541-212",
    "Gobierno 👉 Contaduria ➖ 📞541-214",
    "Gobierno 👉 Corralon ➖ 📞541-260",
    "Gobierno 👉 Cultura ➖ 📞541-281",
    "Gobierno 👉 CRUB ➖ 📞426-992",
    "Gobierno 👉 Deleg. Comodoro Py ➖ 📞541-296",
    "Gobierno 👉 Deleg. Mechita ➖ 📞541-292",
    "Gobierno 👉 Deleg. OBrien ➖ 📞541-291",
    "Gobierno 👉 Deportes ➖ 📞541-255",
    "Gobierno 👉 Discapacidad ➖ 📞541-253",
    "Gobierno 👉 Desarrollo Social ➖ 📞541-250",
    "Gobierno 👉 Dir. Gral de Inspecciones ➖ 📞541-240",
    "Gobierno 👉 Escuela de Arte ➖ 📞427708",
    "Gobierno 👉 Guias ➖ 📞541-224",
    "Gobierno 👉 Gobierno ➖ 📞541-203",
    "Gobierno 👉 Habilitaciones ➖ 📞541-206",
    "Gobierno 👉 Hacienda ➖ 📞541-213",
    "Gobierno 👉 Informes ➖ 📞541-200",
    "Gobierno 👉 Juzg. de faltas ➖ 📞541-272",
    "Gobierno 👉 Legales ➖ 📞541-211",
    "Gobierno 👉 Obras Publicas ➖ 📞541-230",
    "Gobierno 👉 Personal ➖ 📞541-204",
    "Gobierno 👉 Prensa ➖ 📞541-202",
    "Gobierno 👉 Produccion ➖ 📞541-220",
    "Gobierno 👉 PyMES-Emprendedores ➖ 📞541-225",
    "Gobierno 👉 Red Vial ➖ 📞541-265",
    "Gobierno 👉 Rentas ➖ 📞541-207",
    "Gobierno 👉 RRHH ➖ 📞541-219",
    "Gobierno 👉 Sec. Privada ➖ 📞541-201",
    "Gobierno 👉 Seguridad ➖ 📞541-275",
    "Gobierno 👉 Sistemas ➖ 📞541-210",
    "Gobierno 👉 Secre. de Niñez, Adolescencia y Familia ➖ 📞541-256",
    "Gobierno 👉 Tesoreria ➖ 📞541-208",
    "Gobierno 👉 Transito ➖ 📞541-270",
    "Gobierno 👉 Turismo ➖ 📞541-223",
    
    "Hoteles 👉 Coll ➖ 📞422858",
    "Hoteles 👉 Del Parque ➖ 📞424177",
    "Hoteles 👉 Friend’s House ➖ 📞425964",
    "Hoteles 👉 Posadas ➖ 📞15414087",
    "Hoteles 👉 Residencial Miceli ➖ 📞422154",
    "Hoteles 👉 Sol Naciente ➖ 📞422854",
    "Hoteles 👉 Unico ➖ 📞431111",
    
    "Transporte 👉 Chevallier ➖ 📞 421884",
    "Transporte 👉 El Rapido ➖ 📞 421749",
    "Transporte 👉 El Valle ➖ 📞 421749",
    "Transporte 👉 Ex Expreso Junin ➖ 📞 421884",
    "Transporte 👉 Pullman General Belgrano ➖ 📞 431800",
    "Transporte 👉 Pehuenche ➖ 📞 421749",
    "Transporte 👉 Plusmar ➖ 📞 421749",
    "Transporte 👉 Via Bariloche ➖ 📞 421749",
    "Transporte 👉 Ferrobaires Bragado ➖ 📞 430241/426886",
    "Transporte 👉 Ferrobaires Once ➖ 📞 011-48610043/48672519",
    "Transporte 👉 Ferrobaires Haedo ➖ 📞 011-4443-9016",
    "Transporte 👉 Aero Club Bragado ➖ 📞 422441",
    "Transporte 👉 Minibus ➖ 📞 421900/1",
    "Transporte 👉 Santorini ➖ 📞 427900",
    
    "Transporte 👉 Minibus 93 Bs. As. ➖ 📞 011-48263057",
    "Transporte 👉 Minibus 93 La Plata ➖ 📞 0221-154852459",
    "Transporte 👉 Santorini Bs. As. ➖ 📞 011-48655680/48613456",
    "Transporte 👉 Santorini La Plata ➖ 📞 0810-666-8338",
    
    "Servicios 👉 Aguas Bonaerenses S.A. ➖ 📞 430076",
    "Servicios 👉 Camuzzi S.A. ➖ 📞 430590",
    "Servicios 👉 Eden S.A. ➖ 📞 430042/211",
    "Servicios 👉 Transba S.A. ➖ 📞 425477/0800-333-1548",
    "Servicios 👉 Telefonica ➖ 📞 430556",
    "Servicios 👉 Speedy ➖ 📞 0800-333-7733",
    "Servicios 👉 CRE Bragado Ltda ➖ 📞 430110",
    "Servicios 👉 Coop. Electrica de Olascoaga Ltda. ➖ 📞 495157",
    "Servicios 👉 CO.SE.PU Ltda. (O'Brien) ➖ 📞 498221",
    "Servicios 👉 COOP. MECH. Ltda. (Mechita) ➖ 📞 493000",
    "Servicios 👉 Coop. Telefonica Comodoro Py Ltda. ➖ 📞 495000/15",
    "Servicios 👉 Coop. Telefonica de Warnes Ltda. ➖ 📞 492000/11",
    
    "Remises 👉 Bragado 422700 – 404700 / Whatsapp",
    "Remises 👉 Tomas   422059 – 424535 – 430086 – 425001 - 447330",
    "Remises 👉 Servicar Vip    422274 / Celular 405050",
    "Remises 👉 Rivadavia   422442 - 465819",
    "Remises 👉 Aluver - 02342-431127",
    "Remises 👉 Centro - 02342-422893",
    "Remises 👉 Luis - 02342-424535",
    "Remises 👉 Marcos - 02342-421702",
    "Remises 👉 Pellegrini - 02342-430810",
    "Remises 👉 Rivadavia - 02342-422442",
    
    "Organismos Publicos 👉 Agencia INTA Bragado ➖ 📞 430885",
    "Organismos Publicos 👉 SENASA ➖ 📞 430564",
    "Organismos Publicos 👉 AFIP ➖ 📞 430650/424730/422764/430977",
    "Organismos Publicos 👉 Registro Nacional del Automotor ➖ 📞 430486",
    "Organismos Publicos 👉 Jefatura Distrital de Educacion Region 15 ➖ 📞 424230",
    "Organismos Publicos 👉 Consejo Escolar Bragado ➖ 📞 430238/425787",
    "Organismos Publicos 👉 Secretaria de Inspenccion de Enseñanza ➖ 📞 422254",
    "Organismos Publicos 👉 Juzgado de Paz ➖ 📞 422254",
    "Organismos Publicos 👉 Justicia Laboral ➖ 📞 430402/426231",
    "Organismos Publicos 👉 Casa de Justicia Defensoria Oficial ➖ 📞 430174",
    "Organismos Publicos 👉 Direccion Provincial de Rentas ➖ 📞 430071/430616",
    "Organismos Publicos 👉 Registro Provincial de las Personas ➖ 📞 422577",
    "Organismos Publicos 👉 Delegacion Ministerio de Trabajo ➖ 📞 422348",
    "Organismos Publicos 👉 PAMI ➖ 📞 430692",
    "Organismos Publicos 👉 ANSES Bragado ➖ 📞 421978",
    
    "Sector Economico 👉 Sociedad Rural de Bragado ➖ 📞 430564",
    "Sector Economico 👉 C.U.C.I. ➖ 📞 430558/422373",
    "Sector Economico 👉 Centro de Acopiadores de Cereales ➖ 📞 430564",
    "Sector Economico 👉 FUNBRASA ➖ 📞 430564",
    "Sector Economico 👉 Camara de Microempresarios ➖ 📞 426050/15460320",
    "Sector Economico 👉 Federacion Agraria Argentina ➖ 📞 424856",
    
    "Bancos 👉 Nacion ➖ 📞 430000/430904/426464",
    "Bancos 👉 Provincia (Bragado) ➖ 📞 430540/1/2",
    "Bancos 👉 Provincia (O’Brien) ➖ 📞 498002/476/021",
    "Bancos 👉 Ceedicop Coop. Ltda ➖ 📞 430870/930",
    "Bancos 👉 Galicia ➖ 📞 424476/426245/430800/1/2",
    "Bancos 👉 La Pampa ➖ 📞 422020/421530/427345",
    "Bancos 👉 Rio ➖ 📞 439600",
    
    "Medios 👉 Canal 5 EPS ➖ 📞 460924>",
    "Medios 👉 Diario El Censor ➖ 📞 430282",
    "Medios 👉 Diario La Voz de Bragado ➖ 📞 430200/421720",
    "Medios 👉 Fm Bragado 95.1 ➖ 📞 409676",
    "Medios 👉 Fm Brisa 97.5 ➖ 📞 531861",
    "Medios 👉 Fm Brisa 97.1 (Mechita) ➖ 📞 493311",
    "Medios 👉 FM Epsilon 97.3 ➖ 📞 460924",
    "Medios 👉 Fm Fiesta 92.5 ➖ 📞 513687",
    "Medios 👉 FM La 100 Bragado 90.9 mhz ➖ 📞 460925",
    "Medios 👉 FM Mega Bragado 98.3 ➖ 📞 2346-557533/2342-531692",
    "Medios 👉 FM Pampa 104.5 ➖ 📞 02346-551716/430927",
    "Medios 👉 FM Popular 101.7 (Mechita) ➖ 📞 406854",
    "Medios 👉 FM Ruta 46 (O’Brien) ➖ 📞 498601",
    "Medios 👉 FM San Gabriel 92.1 ➖ 📞 425303",
    "Medios 👉 FM Space (O’Brien) ➖ 📞 498077/410",
    "Medios 👉 FM Tentacion 106.7 ➖ 📞 421968/ 450634",
    "Medios 👉 Radio Mitre Bragado 89.3 mhz ➖ 📞 460925",
    
    "Medios 👉 FM Power ➖ 📞 425400",
    "Medios 👉 FM Satelite ➖ 📞 430927",
    "Medios 👉 FM Tiempo ➖ 📞 423907",
    "Medios 👉 FM Zeus ➖ 📞 422086",
    "Medios 👉 FM Contacto (Mechita) ➖ 📞 493224",
    "Medios 👉 FM Victoria (O'Brien) ➖ 📞 498563",
    "Medios 👉 Clablevision ➖ 📞 424955",
    
    "Profesionales 👉 Profesionales Universitarios de Ingenieria ➖ 📞 423614",
    "Profesionales 👉 Centro de Ingenieros Agronomos ➖ 📞 423614",
    "Profesionales 👉 Circulo Medico de Bragado ➖ 📞 430095/406",
    "Profesionales 👉 Circulo de Medicos Veterinarios ➖ 📞 430507",
    "Profesionales 👉 Asociacion Abogados de Bragado y Alberti ➖ 📞 430326",
    "Profesionales 👉 Colegio de Farmaceuticos ➖ 📞 430202",
    "Profesionales 👉 Consejo Profesional de Cs. Economicas ➖ 📞 423180",
    "Profesionales 👉 Circulo de Bioquimicos ➖ 📞 425476",
    "Profesionales 👉 Colegio Provincial de Escribanos ➖ 📞 430808",
    "Profesionales 👉 Colegio de Arquitectos ➖ 📞 421207",
    "Profesionales 👉 Centro de Maestros Mayores de Obras ➖ 📞 431145",
    "Profesionales 👉 Circulo Odontologico Bragado ➖ 📞 431842",
    "Profesionales 👉 Centro de Martilleros ➖ 📞 464787",
    
    "Tradicionalistas 👉 Comision Fiesta Nacional del Caballo ➖ 📞 430750",
    "Tradicionalistas 👉 Comision Festival Leyenda y Tradicion ➖ 📞 15406845",
    
    "Centro de Jubilados 👉 Jubilados y Pensionados Bragado (Falcon) ➖ 📞 431027",
    "Centro de Jubilados 👉 Jubilados y Pensionados Bragado (G. Paz) ➖ 📞 425087",
    "Centro de Jubilados 👉 Jubilados y Pensionados de O’Brien ➖ 📞 498176",
    "Centro de Jubilados 👉 Jubilados y Pensionados de Mechita ➖ 📞 493329",
    
    "Servicios 👉 Club de Leones ➖ 📞 431110",
    "Servicios 👉 Rotary Club ➖ 📞 426086/421984",
    "Servicios 👉 Bragado Club Golf ➖ 📞 451398",
    "Servicios 👉 Aeroclub Municipal ➖ 📞 577125",
    
    "Deportes 👉 Paddle 25 de Mayo ➖ 📞 15414115",
    "Deportes 👉 Paddle Pujol (Cel-Car) ➖ 📞 15407103",
    "Deportes 👉 Futbol Pujol Stadium ➖ 📞 1545916>"
    ];