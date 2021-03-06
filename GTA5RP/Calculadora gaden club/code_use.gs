function calc_lavagem() {
  var spreadsheet = SpreadsheetApp.getActive();
  var dinheiro_sujo = spreadsheet.getRange('B1').getValue();
  var date = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy")
  var verifica_porcentagens = 0




//verifica se + de uma porcentagem foi selecionada
if (verificar_checks_porcentagens(verifica_porcentagens) > 1) {

  Browser.msgBox("Erro nas informações:", "Selecione apenas uma porcentagem!",Browser.Buttons.Yes);
  return;
};

//verifica se nenhuma % foi selecionada
if (spreadsheet.getRange('A2').isChecked() === false &&
    spreadsheet.getRange('A3').isChecked() === false && 
    spreadsheet.getRange('A4').isChecked() === false) {

  Browser.msgBox("Falta de informações:", "Selecione uma porcentagem(%) para a lavagem!",Browser.Buttons.Yes);
  return;

};

//verifica se o dinheiro sujo foi preenchido
if (dinheiro_sujo == 0 || dinheiro_sujo == "") {

  Browser.msgBox("Falta de informações:", "Preencha o valor da lavagem, o dinheiro sujo do cliente!",Browser.Buttons.Yes);
  return;
};





  //Lavagem 20%
  if (spreadsheet.getRange('A2').isChecked() === true) {

    fazer_lavagem()

    spreadsheet.getRange('B13').setValue('20%');
    spreadsheet.getRange('B12').setValue(dinheiro_sujo);
    spreadsheet.getRange('B11').setValue(date);




    spreadsheet.getRange('B8').setFormula( // Nosso Dinheiro Limpo
      (spreadsheet.getRange('B16').getValue() * 15240) + // 100k
      (spreadsheet.getRange('B17').getValue() * 8080) +  // 50k
      (spreadsheet.getRange('B18').getValue() * 4125) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 2517) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 1050)    // 5k
    );

    spreadsheet.getRange('B7').setFormula( // Dinheiro Limpo do Cliente
      (spreadsheet.getRange('B16').getValue() * 84760) + // 100k
      (spreadsheet.getRange('B17').getValue() * 41920) +  // 50k
      (spreadsheet.getRange('B18').getValue() * 25875) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 12483) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 3950)    // 5k
    );

    gerar_texto(date,
     dinheiro_sujo,
      '20%',
      spreadsheet.getRange('B16').getValue(),
      spreadsheet.getRange('B17').getValue(),
      spreadsheet.getRange('B18').getValue(),
      spreadsheet.getRange('B19').getValue(),
      spreadsheet.getRange('B20').getValue()
      );

  };

  //Lavagem 25%
  if (spreadsheet.getRange('A3').isChecked() === true) {

    fazer_lavagem()

    spreadsheet.getRange('B13').setValue('25%');
    spreadsheet.getRange('B12').setValue(dinheiro_sujo);
    spreadsheet.getRange('B11').setValue(date);


    spreadsheet.getRange('B8').setFormula( // Nosso Dinheiro Limpo
      (spreadsheet.getRange('B16').getValue() * 20240) + // 100k
      (spreadsheet.getRange('B17').getValue() * 10580) + // 50k
      (spreadsheet.getRange('B18').getValue() * 5625) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 3267) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 1050)    // 5k
    );

    spreadsheet.getRange('B7').setFormula( // Dinheiro Limpo do Cliente
      (spreadsheet.getRange('B16').getValue() * 79760) + // 100k
      (spreadsheet.getRange('B17').getValue() * 39420) +  // 50k
      (spreadsheet.getRange('B18').getValue() * 24375) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 11733) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 3950)    // 5k
    );

    gerar_texto(date,
     dinheiro_sujo,
      '25%',
      spreadsheet.getRange('B16').getValue(),
      spreadsheet.getRange('B17').getValue(),
      spreadsheet.getRange('B18').getValue(),
      spreadsheet.getRange('B19').getValue(),
      spreadsheet.getRange('B20').getValue()
      );

  };

  //Lavagem 30%
  if (spreadsheet.getRange('A4').isChecked() === true) {

      fazer_lavagem()

    spreadsheet.getRange('B13').setValue('30%'); // Nosso Dinheiro Limpo
    spreadsheet.getRange('B12').setValue(dinheiro_sujo);
    spreadsheet.getRange('B11').setValue(date);

    spreadsheet.getRange('B8').setFormula(
      (spreadsheet.getRange('B16').getValue() * 25240) + // 100k
      (spreadsheet.getRange('B17').getValue() * 13080) + // 50k
      (spreadsheet.getRange('B18').getValue() * 7125) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 4017) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 1050)    // 5k
    );

    spreadsheet.getRange('B7').setFormula( // Dinheiro Limpo do Cliente
      (spreadsheet.getRange('B16').getValue() * 74760) + // 100k
      (spreadsheet.getRange('B17').getValue() * 36920) +  // 50k
      (spreadsheet.getRange('B18').getValue() * 22875) +  // 30k
      (spreadsheet.getRange('B19').getValue() * 10983) +  // 15k
      (spreadsheet.getRange('B20').getValue() * 3950)    // 5k
    );

    gerar_texto(date,
     dinheiro_sujo,
      '30%',
      spreadsheet.getRange('B16').getValue(),
      spreadsheet.getRange('B17').getValue(),
      spreadsheet.getRange('B18').getValue(),
      spreadsheet.getRange('B19').getValue(),
      spreadsheet.getRange('B20').getValue()
      );

  };
}





function verificar_checks_porcentagens(verifica_porcentagens){

  var spreadsheet = SpreadsheetApp.getActive();

  if (spreadsheet.getRange('A2').isChecked() === true){
    verifica_porcentagens++
  };
  if (spreadsheet.getRange('A3').isChecked() === true){
    verifica_porcentagens++
  };
  if (spreadsheet.getRange('A4').isChecked() === true){
    verifica_porcentagens++
  };

  return verifica_porcentagens;
}

function fazer_lavagem() {

  var spreadsheet = SpreadsheetApp.getActive();
  var dinheiro_sujo = spreadsheet.getRange('B1').getValue();
  var dinheiro_restante
  var lavagem_100k = 105000
  var lavagem_50k = 52000
  var lavagem_30k = 32000
  var lavagem_15k = 15500
  var lavagem_5k = 5500
  var papelmoeda_usado, cd_usado, alvejante_usado

  spreadsheet.getRange('B16').setFormula("FLOOR.MATH(" + dinheiro_sujo + "/" + lavagem_100k + ")");
  dinheiro_restante = dinheiro_sujo - (spreadsheet.getRange('B16').getValue() * lavagem_100k);
  spreadsheet.getRange('C16').setFormula(100000 * spreadsheet.getRange('B16').getValue());

  spreadsheet.getRange('B17').setFormula("FLOOR.MATH(" + dinheiro_restante + "/" + lavagem_50k + ")");
  dinheiro_restante = dinheiro_restante - (spreadsheet.getRange('B17').getValue() * lavagem_50k);
  spreadsheet.getRange('C17').setFormula(50000 * spreadsheet.getRange('B17').getValue());

  spreadsheet.getRange('B18').setFormula("FLOOR.MATH(" + dinheiro_restante + "/" + lavagem_30k + ")");
  dinheiro_restante = dinheiro_restante - (spreadsheet.getRange('B18').getValue() * lavagem_30k);
  spreadsheet.getRange('C18').setFormula(30000 * spreadsheet.getRange('B18').getValue());

  spreadsheet.getRange('B19').setFormula("FLOOR.MATH(" + dinheiro_restante + "/" + lavagem_15k + ")");
  dinheiro_restante = dinheiro_restante - (spreadsheet.getRange('B19').getValue() * lavagem_15k);
  spreadsheet.getRange('C19').setFormula(15000 * spreadsheet.getRange('B19').getValue());

  spreadsheet.getRange('B20').setFormula("FLOOR.MATH(" + dinheiro_restante + "/" + lavagem_5k + ")");
  dinheiro_restante = dinheiro_restante - (spreadsheet.getRange('B20').getValue() * lavagem_5k);
  spreadsheet.getRange('C20').setFormula(5000 * spreadsheet.getRange('B20').getValue());

  papelmoeda_usado =
    spreadsheet.getRange('C16').getValue() +
    spreadsheet.getRange('C17').getValue() +
    spreadsheet.getRange('C18').getValue() +
    spreadsheet.getRange('C19').getValue() +
    spreadsheet.getRange('C20').getValue();

  alvejante_usado =
    spreadsheet.getRange('B16').getValue() +
    spreadsheet.getRange('B17').getValue() +
    spreadsheet.getRange('B18').getValue() +
    spreadsheet.getRange('B19').getValue() +
    spreadsheet.getRange('B20').getValue();

  cd_usado =
    spreadsheet.getRange('B16').getValue() +
    spreadsheet.getRange('B17').getValue() +
    spreadsheet.getRange('B18').getValue() +
    spreadsheet.getRange('B19').getValue() +
    spreadsheet.getRange('B20').getValue();


  spreadsheet.getRange('B9').setFormula(dinheiro_restante);

  spreadsheet.getRange('B23').setFormula(alvejante_usado);
  spreadsheet.getRange('B24').setFormula(cd_usado);
  spreadsheet.getRange('B25').setFormula(papelmoeda_usado);
}

function limpar_campos() {

  var spreadsheet = SpreadsheetApp.getActive();

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1]; 
  var cell = sheet.getRange("A2"); 
  cell.setValue("");

  spreadsheet.getRange('A2').setValue(false);
  spreadsheet.getRange('A3').setValue(false);
  spreadsheet.getRange('A4').setValue(false) ;

  spreadsheet.getRange('B1').setValue("");
  spreadsheet.getRange('B7').setValue("");
  spreadsheet.getRange('B8').setValue("");
  spreadsheet.getRange('B11').setValue("");
  spreadsheet.getRange('B12').setValue("");
  spreadsheet.getRange('B13').setValue("");

  spreadsheet.getRange('B16').setFormula("");
  spreadsheet.getRange('C16').setFormula("");

  spreadsheet.getRange('B17').setFormula("");
  spreadsheet.getRange('C17').setFormula("");

  spreadsheet.getRange('B18').setFormula("");
  spreadsheet.getRange('C18').setFormula("");

  spreadsheet.getRange('B19').setFormula("");
  spreadsheet.getRange('C19').setFormula("");

  spreadsheet.getRange('B20').setFormula("");
  spreadsheet.getRange('C20').setFormula("");


  spreadsheet.getRange('B9').setFormula("");

  spreadsheet.getRange('B23').setFormula("");
  spreadsheet.getRange('B24').setFormula("");
  spreadsheet.getRange('B25').setFormula("");
}

function gerar_texto(date, dinheiro_sujo, porcentagem,k100,k50,k30,k15,k5) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[1]; 
    var cell = sheet.getRange("A2"); 
    var nosso100k,nosso50k,nosso30k,nosso15k,nosso5k
    var cliente100k,cliente50k,cliente30k,cliente15k,cliente5k
    var porcentagem_nossa

switch (porcentagem) {
  case '20%':
    nosso100k = 15240;
    nosso50k = 8080;
    nosso30k = 4125;
    nosso15k = 2517;
    nosso5k = 1050;

    cliente100k = 84760;
    cliente50k = 41920;
    cliente30k = 25875;
    cliente15k = 12483;
    cliente5k = 3950;

    porcentagem_nossa = 0.1524;
    break;

  case '25%':
    nosso100k = 20240;
    nosso50k = 10580;
    nosso30k = 5625;
    nosso15k = 3267;
    nosso5k = 1050;

    cliente100k = 79760;
    cliente50k = 39420;
    cliente30k = 24375;
    cliente15k = 11733;
    cliente5k = 3950;

    porcentagem_nossa = 0.2024;
    break;

  case '30%':
    nosso100k = 25240;
    nosso50k = 13080;
    nosso30k = 7125;
    nosso15k = 4017;
    nosso5k = 1050;

    cliente100k = 74760;
    cliente50k = 36920;
    cliente30k = 22875;
    cliente15k = 10983;
    cliente5k = 3950;

    porcentagem_nossa = 0.2524;
    break;

  default:
    return;
}


  cell.setValue("```"+ 
    "Lavagem XX"+
    "\n "+
    "\n "+
    "LAVAGEM " + date +" | " + dinheiro_sujo.toLocaleString('pt-br', {minimumFractionDigits: 0}) + " DINHEIRO SUJO | A " + porcentagem +" |"+
    "\n "+
    "\n "+

    "1 - " + dinheiro_sujo + "/105000 = " + k100 +" lavagens de 100k (" + k100 + "x105000 = " + k100*105000 +")"+
    "\n "+
    dinheiro_sujo + "-" + k100*105000 + " = Sobra " + (dinheiro_sujo - (k100*105000)) +
    "\n "+

    "2 - " + (dinheiro_sujo - (k100*105000)) + "/52000 = " + k50 +" lavagens de 50k (" + k50 + "x52000 = " + k50*52000 +")"+
    "\n "+
    (dinheiro_sujo - (k100*105000)) + "-" + k50*52000 + " = Sobra " + (dinheiro_sujo - (k100*105000) - (k50*52000)) +
    "\n "+

    "3 - " + (dinheiro_sujo - (k100*105000) - (k50*52000)) + "/32000 = " + k30 +" lavagens de 30k (" + k30 + "x32000 = " + k30*32000 +")"+
    "\n "+
    (dinheiro_sujo - (k100*105000) - (k50*52000)) + "-" + k30*32000 + " = Sobra " + (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000)) +
"\n "+

  "4 - " + (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000)) + "/15500 = " + k15 +" lavagens de 15k (" + k15 + "x15500 = " +  k15*15500 +")"+
    "\n "+
    (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000)) + "-" + k15*15500 + " = Sobra " + (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000) - (k15*15500)) +
"\n "+

"5 - " + (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000) - (k15*15500)) + "/5500 = " + k5 +" lavagens de 5k (" + k5 + "x5500 = " +  k5*5500 +")"+
    "\n "+
    (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000) - (k15*15500)) + "-" + k5*5500 + " = Sobra " + (dinheiro_sujo - (k100*105000) - (k50*52000) - (k30*32000) - (k15*15500) - (k5*5500)) + " USURPADO pelo Garden Club" +
"\n "+
"\n "+

dinheiro_sujo + " - 4,76% (lavagem maquina) = " + Math.floor(dinheiro_sujo*(1-0.0476)).toLocaleString('pt-br', {minimumFractionDigits: 0}) +
"\n "+
Math.floor(dinheiro_sujo*(1-0.0476)) + " - 15.24% (lavagem GardenClub) = " + Math.floor((dinheiro_sujo*(1-0.0476))*(1-porcentagem_nossa)).toLocaleString('pt-br', {minimumFractionDigits: 0})+
"\n "+
"\n "+ 

"Valores arendondados:" +
"\n "+
"\n "+
"NOSSO: ("+k100+"x"+ nosso100k+")+("+k50+"x"+nosso50k+")+("+k30+"x"+nosso30k+")+("+k15+"x"+nosso15k+")+("+k5+"x"+nosso5k+")= "+ ((k100*nosso100k)+(k50*nosso50k)+(k30*nosso30k)+(k15*nosso15k)+(k5*nosso5k)).toLocaleString('pt-br', {minimumFractionDigits: 0})+
    "\n "+ 

"DO CLIENTE: ("+k100+"x"+cliente100k+")+("+k50+"x"+cliente50k+")+("+k30+"x"+cliente30k+")+("+k15+"x"+cliente15k+")+("+k5+"x" +cliente5k+")= "+ ((k100*cliente100k)+(k50*cliente50k)+(k30*cliente30k)+(k15*cliente15k)+(k5*cliente5k)).toLocaleString('pt-br', {minimumFractionDigits: 0})+
    "\n "+

"PAPEL USADO: ("+k100+"x"+100000+")+("+k50+"x"+50000+")+("+k30+"x"+30000+")+("+k15+"x"+15000+")+("+k5+"x"+5000+")= "+ ((k100*100000)+(k50*50000)+(k30*30000)+(k15*15000)+(k5*5000)).toLocaleString('pt-br', {minimumFractionDigits: 0})+
    "\n "+

"ALVEJANTES USADOS: "+(k100+k50+k30+k15+k5)+"  |  CD'S USADOS: " +(k100+k50+k30+k15+k5)+
    "\n "+

    "\n "+
    "Pessoas Envolvidas (FARM): [em desenvolvimento]"+
    "\n "+
    "\n "+
    "1 - "+
    "\n "+
    "2 - "+
    "\n "+
    "3 - "+
    "\n "+
    "\n "+
    ((k100*nosso100k)+(k50*nosso50k)+(k30*nosso30k)+(k15*nosso15k)+(k5*nosso5k)) + "/   =       para cada" +
    "\n "+
    "```"+
    "//////////////////////////////////////////////////////////////////////");
}
