const nombres = {
  interrogacion: 'Interrogante(?)',
  VRIN_r: 'Inconsistencia de las respuestas variables (VRIN-r)',
  // TRIN_r: 'Inconsistencia de las respuestas verdadero (TRIN-r)',
  F_r: 'Infrecuencia (F-r)',
  Fp_r: 'Psicopatología infrecuente (Fp-r)',
  Fs: 'Quejas somáticas infrecuentes (Fs)',
  FBS_r: 'Validez de los síntomas (FBS-r)',
  L_r: 'Virtudes inusuales (L-r)',
  K_r: 'Validez del ajuste (K-r)',
  EID: 'Alteraciones emocionales o internalizados (EID)',
  THD: 'Alteraciones del pensamiento (THD)',
  BXD: 'Alteraciones del comportamiento o externalizados (BXD)',
  RCd: 'Desmoralización (RCd)',
  RC1: 'Quejas somáticas (RC1)',
  RC2: 'Escasez de emociones positivas (RC2)',
  RC3: 'Desconfianza (RC3)',
  RC4: 'Conducta antisocial (RC4)',
  RC6: 'Ideas persecutorias (RC6)',
  RC7: 'Emociones negativas disfuncionales (RC7)',
  RC8: 'Experiencias anormales (RC8)',
  RC9: 'Activación hipomaníaca (RC9)',
  MLS: 'Malestar general (MLS)',
  GIC: 'Quejas gastrointestinales (GIC)',
  HPC: 'Quejas de dolor de cabeza (HPC)',
  NUC: 'Quejas neurológicas (NUC)',
  COG: 'Quejas cognitivas (COG)',
  SUI: 'Ideación suicida (SUI)',
  HLP: 'Indefensión / Desesperanza (HLP)',
  SFD: 'Inseguridad (SFD)',
  NFC: 'Ineficacia (NFC)',
  STW: 'Estrés / Preocupaciones (STW)',
  AXY: 'Ansiedad (AXY)',
  ANP: 'Propensión a la ira (ANP)',
  BRF: 'Miedos inespecíficos (BRF)',
  MSF: 'Miedos específicos (MSF)',
  JCP: 'Problemas de conducta juveniles (JCP)',
  SUB: 'Abuso de sustancias (SUB)',
  AGG: 'Agresión (AGG)',
  ACT: 'Activación (ACT)',
  FML: 'Problemas familiares (FML)',
  IPP: 'Pasividad interpersonal (IPP)',
  SAV: 'Evitación social (SAV)',
  SHY: 'Timidez (SHY)',
  DSF: 'Misantropía (DSF)',
  AES: 'Intereses estético-literarios (AES)',
  MEC: 'Intereses mecánico-físicos (MEC)',
  AGGR_r: 'Agresividad - revisada (AGGR-r)',
  PSYC_r: 'Psicoticismo - revisada (PSYC-r)',
  DISC_r: 'Falta de control - revisada (DISC-r)',
  NEGE_r: 'Emocionalidad negativa / Neuroticismo - revisada (NEGE-r)',
  INTR_r: 'Introversión / Escasa emocionalidad positiva - revisada (INTR-r)',
};

const interpretarDatos = (datos) => {
  let dataFinal = {
    interrogacion: [],
    VRIN_r: [],
    // TRIN_r: [],
    F_r: [],
    Fp_r: [],
    Fs: [],
    FBS_r: [],
    L_r: [],
    K_r: [],
    EID: [],
    THD: [],
    BXD: [],
    RCd: [],
    RC1: [],
    RC2: [],
    RC3: [],
    RC4: [],
    RC6: [],
    RC7: [],
    RC8: [],
    RC9: [],
    MLS: [],
    GIC: [],
    HPC: [],
    NUC: [],
    COG: [],
    SUI: [],
    HLP: [],
    SFD: [],
    NFC: [],
    STW: [],
    AXY: [],
    ANP: [],
    BRF: [],
    MSF: [],
    JCP: [],
    SUB: [],
    AGG: [],
    ACT: [],
    FML: [],
    IPP: [],
    SAV: [],
    SHY: [],
    DSF: [],
    AES: [],
    MEC: [],
    AGGR_r: [],
    PSYC_r: [],
    DISC_r: [],
    NEGE_r: [],
    INTR_r: [],
  };

  if (datos.interrogacion >= 15) {
    dataFinal.interrogacion = [
      "≥15",
      "Las puntuaciones de algunas escalas pueden no ser válidas",
      "Deficiencia lectoras o lingüísticas. - Psicopatología severa. - Obsesividad. - Falta de introspección.  - Falta de colaboración",
      "Analizar el contenido de los ítems omitidos o con doble respuesta para detectar posibles temas subyacentes. El impacto depende de la escala. En escalas con más del 10% de ítems omitidos o con respuestas inválidas, la ausencia de elevación no es interpretable. Puntuaciones elevadas en estas escalas pueden subestimar la relevancia o gravedad de problemas asociados."
    ]
  } else if (datos.interrogacion >= 1 && datos.interrogacion <= 14) {
    dataFinal.interrogacion = [
      "1-14",
      "Las puntuaciones de algunas de las escalas más cortas pueden no ser válidas",
      "Omisión selectiva de respuestas.",
      "Analizar el contenido de los ítems omitidos o con doble respuesta para detectar posibles temas subyacentes. El impacto depende de la escala. En escalas con más del 10% de ítems omitidos o con respuestas inválidas, la ausencia de elevación no es interpretable. Puntuaciones elevadas en estas escalas pueden subestimar la relevancia o gravedad de problemas asociados."
    ]
  } else if (datos.interrogacion === 0) {
    dataFinal.interrogacion = [
      "0",
      "Ninguno",
      "El sujeto evaluado proporciona respuestas válidas a los 338 ítems",
      "El sujeto evaluado se ha mostrado colaborador en lo que respecta a su voluntad de responder a los ítems de la prueba."
    ]
  }

  if (datos.VRIN_r >= 80) {
    dataFinal.VRIN_r = [
      "≥80",
      "El protocolo es inválido debido a un exceso de inconsistencia en las respuestas variables",
      "Deficiencia lectoras o lingüísticas. - Deficiencias cognitivas. - Errores en la anotación de las respuestas. - Respuestas intencionadamente aleatorias.  - Actitud no colaboradora ante la prueba.",
      "El protocolo no es interpretable",
    ];
  } else if (datos.VRIN_r >= 70 && datos.VRIN_r <= 79) {
    dataFinal.VRIN_r = [
      "70-79",
      "Hay indicios de inconsistencia en las respuestas variables.",
      "Deficiencia lectoras o lingüísticas. - Deficiencias cognitivas. - Errores en la anotación de las respuestas. - Falta de atención.",
      "La interpretación de las puntuaciones de las escalas de validez y de las escalas sustantivas debe hacerse con cierta precaución",
    ];
  } else if (datos.VRIN_r >= 39 && datos.VRIN_r <= 69) {
    dataFinal.VRIN_r = [
      "39-69",
      "Hay indicios de coherencia en las respuestas.",
      "El sujeto evaluado ha sido capaz de comprender y responder de forma relevante a los ítems de la prueba",
      "La interpretación de las puntuaciones de las escalas de validez y de las escalas sustantivas debe hacerse con cierta precaución",
    ];
  } else if (datos.VRIN_r >= 29 && datos.VRIN_r <= 38) {
    dataFinal.VRIN_r = [
      "29-38",
      "Hay indicios de gran coherencia",
      "El sujeto ha respondido a la prueba de un modo reflexivo e intencionado",
      "El protocolo es interpretable."
    ];
  } else {
    dataFinal.VRIN_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.F_r === 120) {
    dataFinal.F_r = [
      "120",
      "El protocolo es inválido. La exageración de síntomas viene indicada por el número excesivo de respuestas infrecuentes",
      "Respuestas inconsistentes. - Exageración de síntomas.", 
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan estos patrones, se debe tener en cuenta que este nivel de respuestas infrecuentes es poco común incluso en individuos con dificultades psicológicas graves y genuinas que alegan síntomas creíbles. No deberían interpretarse las puntuaciones de las escalas sustantivas."
    ]
  } else if (datos.F_r >= 100 && datos.F_r <= 119) {
    dataFinal.F_r = [
      "100-119",
      "El protocolo puede ser inválido. La exageración de alteraciones psicológicas viene indicada por un número considerablemente más elevado de respuestas infrecuentes que el promedio.",
      "Respuestas inconsistentes. - Psicopatología grave. - Problemas emocionales graves. - Exageración de síntomas.", 
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan estos patrones, se debe tener en cuenta que este nivel de respuestas infrecuentes puede darse en individuos con dificultades psicológicas graves y genuinas que alegan sintomas creibles. Sin embargo, en el caso de sujetos sin historial previo o pruebas que corroboren la existencia de una alteración, lo más probable es que indique exageración de síntomas."
    ]
  } else if (datos.F_r >= 90 && datos.F_r <= 99) {
    dataFinal.F_r = [
      "90-99",
      "La posible exageración de alteraciones psicológicas viene indicada por un número mucho más elevado de respuestas infrecuentes que el promedio.",
      "Respuestas inconsistentes. - Psicopatología significativa. - Problemas emocionales significativos. - Exageración de los síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes puede darse en individuos con dificultades psicológicas sustanciales y genuinas que alegan sintomas creíbles. Sin embargo, en el caso de sujetos sin historial previo o pruebas que corroboren la existencia de una alteración, es muy probable que indique exageración de síntomas."
    ]
  } else if (datos.F_r >= 79 && datos.F_r <= 89) {
    dataFinal.F_r = [
      "79-89",
      "La posible exageración de disfunciones psicológicas viene indicada por un número más elevado que el número medio de respuestas infrecuentes.",
      "Respuestas inconsistentes. - Psicopatología significativa. - Problemas emocionales significativos. - Exageración de los síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes puede darse en individuos con dificultades psicológicas genuinas que alegan síntomas creíbles. Sin embargo, en el caso de sujetos sin historial previo o pruebas que corroboren la existencia de una alteración, es probable que indique exageración de síntomas."
    ]
  } else if (datos.F_r < 79) {
    dataFinal.F_r = [
      "<79",
      "No hay indicios de exageración de síntomas",
      "",
      "El protocolo es interpretable"
    ]
  }

  if (datos.Fp_r >= 100) {
    dataFinal.Fp_r = [
      "≥100",
      "El protocolo es inválido. La exageración de síntomas viene indicada por la declaración de un número considerablemente más elevado que la media de sintomas raramente descritos por individuos con trastornos psicopatológicos graves reales.",
      "Respuestas inconsistentes. - Exageración de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes es poco común incluso en individuos con dificultades psicopatológicas graves y genuinas que alegan sintomas creíbles. No deberían interpretarse las puntuaciones de las escalas sustantivas."
    ]
  } else if(datos.Fp_r >= 80 && datos.Fp_r <= 99) {
    dataFinal.Fp_r = [
      "80-99",
      "La posible exageración de sintomas viene indicada por la declaración de un número mucho más elevado que la media de síntomas raramente descritos por individuos con trastornos psicopatológicos graves reales.",
      "Respuestas inconsistentes. - Psicopatología grave. - Exageración de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes puede darse en individuos con dificultades psicopatológicas graves y genuinas que alegan síntomas creíbles, aunque también puede ser indicativo de exageración. En el caso de sujetos sin historial previo o pruebas que corroboren la existencia de psicopatología, es muy probable que indique exageración de síntomas."
    ]
  } else if(datos.Fp_r >= 70 && datos.Fp_r <= 79) {
    dataFinal.Fp_r = [
      "70-79",
      "La posible exageración de sintomas viene indicada por la declaración de un número más elevado que la media de sintomas raramente descritos por individuos con trastornos psicopatológicos graves reales.",
      "Respuestas inconsistentes. - Psicopatología grave. - Exageración de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes puede darse en individuos con psicopatologías graves reales que alegan sintomas creíbles. Sin embargo, en el caso de sujetos sin historial previo o pruebas que corroboren la existencia de psicopatología, es probable que indique exageración de síntomas."
    ]
  } else if(datos.Fp_r < 70) {
    dataFinal.Fp_r = [
      "<70",
      "No hay indicios de exageración de síntomas",
      "",
      "El protocolo es interpretable"
    ]
  }

  if (datos.Fs >= 100) {
    dataFinal.Fs = [
      "≥100",
      "Las puntuaciones de las escalas somáticas pueden ser inválidas. La exageración de síntomas somáticos viene determinada por la declaración de un número considerablemente más elevado que la media de síntomas somáticos raramente descritos por individuos con problemas médicos reales.",
      "Respuestas inconsistentes. - Exageración de quejas somáticas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de respuestas infrecuentes es muy poco común incluso en individuos con problemas médicos sustanciales que alegan síntomas creíbles. Las puntuaciones de las escalas somáticas deben interpretarse teniendo en cuenta esta advertencia."
    ]
  } else if (datos.Fs >= 80 && datos.Fs <= 99) {
    dataFinal.Fs = [
      "80-99",
      "La posible exageración de sintomas somáticos viene determinada por la declaración de un número mucho más elevado que la media de síntomas somáticos raramente descritos por individuos con problemas médicos reales.",
      "Respuestas inconsistentes. - Problemas médicos significativos o múltiples. - Exageración de quejas somáticas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel y tipo de respuestas infrecuentes puede darse en individuos con problemas médicos sustanciales que alegan síntomas creíbles, pero también puede reflejar exageración. En individuos sin historial previo o pruebas que corroboren la existencia de problemas físicos de salud, es probable que indique exageración no creíble de síntomas somáticos. Las puntuaciones de las escalas somáticas deben interpretarse teniendo en cuenta esta advertencia."
    ]
  } else if (datos.Fs < 80) {
    dataFinal.Fs = [
      "<80",
      "No hay indicios de exageración de síntomas.",
      "",
      "El protocolo es interpretable."
    ]
  } 

  if (datos.FBS_r >= 100) {
    dataFinal.FBS_r = [
      "≥100",
      "Las puntuaciones de las escalas somáticas y cognitivas pueden ser inválidas. La exageración de síntomas viene indicada por una combinación muy inusual de respuestas asociadas a la presentación de sintomas somáticos o cognitivos no creíbles.",
      "Respuestas inconsistentes. - Exageración de síntomas sómaticos o  cognitivos.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que esta combinación de respuestas es muy poco común incluso en individuos con problemas médicos sustanciales que alegan sintomas creibles. Las puntuaciones de las escalas somáticas y cognitivas deben interpretarse teniendo en cuenta esta advertencia."
    ]
  } else if(datos.FBS_r >= 80 && datos.FBS_r <= 99) {
    dataFinal.FBS_r = [
      "80-99",
      "La posible exageración de síntomas viene indicada por una combinación inusual de respuestas asociadas a la presentación de síntomas somáticos o cognitivos no creibles.",
      "Respuestas inconsistentes. - Problemas médicos significativos o múltiples. - Exageración de quejas somáticos o cognitivas",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que esta combinación de respuestas puede darse en individuos con problemas médicos sustanciales que alegan síntomas creíbles, pero también puede reflejar exageración. Las puntuaciones de las escalas somáticas y cognitivas deben interpretarse teniendo en cuenta esta advertencia."
    ]
  } else if(datos.FBS_r < 80) {
    dataFinal.FBS_r = [
      "<80",
      "No hay indicios de exageración  de síntomas.",
      "",
      "El protocolo es interpretable"
    ]
  }
  
  if (datos.L_r >= 80) {
    dataFinal.L_r = [
      "≥80",
      "El protocolo puede ser inválido. La minimización de síntomas viene indicada por la presentación extraordinariamente favorable que el sujeto hace de sí mismo, negando tener defectos o carencias de importancia menor que la mayoría de las personas reconoce.",
      "Respuestas inconsistentes. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de autopresentación virtuosa es muy poco común incluso en individuos educados en un ambiente de valores tradicionales particularmente rígido. La ausencia de puntuaciones altas en las escalas sustantivas no es interpretable. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.L_r >= 70 && datos.L_r <= 79) {
    dataFinal.L_r = [
      "70-79",
      "La posible minimización de sintomas viene indicada por la presentación muy favorable que el sujeto hace de sí mismo, negando tener defectos o carencias de importancia menor que la mayoría de las personas reconoce.",
      "Respuestas inconsistentes. - Educación tradicional. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de autopresentación virtuosa es poco común, si bien puede hasta cierto punto reflejar que el sujeto ha crecido en un ambiente de valores tradicionales particularmente rígido. La ausencia de puntuaciones altas en las escalas sustantivas debe interpretarse con precaución. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.L_r >= 65 && datos.L_r <= 69) {
    dataFinal.L_r = [
      "65-69",
      "La posible minimización de síntomas viene indicada por la presentación favorable que el sujeto hace de sí mismo, negando tener defectos o carencias de importancia menor que la mayoría de las personas reconoce.",
      "Respuestas inconsistentes. - Educación tradicional. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de autopresentación virtuosa puede reflejar que el sujeto ha crecido en un ambiente de valores tradicionales particularmente rígido. La ausencia de puntuaciones altas en las escalas sustantivas debe interpretarse con precaución. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.L_r < 65) {
    dataFinal.L_r = [
      "<65",
      "No hay indicios de minimización de síntomas.",
      "",
      "El protocolo es interpretable."
    ]
  }

  if (datos.K_r >= 70) {
    dataFinal.K_r = [
      "≥70",
      "La minimización de síntomas viene indicada por la presentación que hace el sujeto de sí mismo como extraordinariamente bien adaptado.",
      "Respuestas inconsistentes. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de adaptación psicológica es infrecuente en la población general. La ausencia de puntuaciones altas en las escalas sustantivas debe interpretarse con precaución. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.K_r >= 66 && datos.K_r <= 69) {
    dataFinal.K_r = [
      "66-69",
      "La posible minimización de síntomas viene indicada por la presentación que hace el sujeto de sí mismo como muy bien adaptado.",
      "Respuestas inconsistentes. - Muy buen nivel de ajuste psicológico. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-r y TRIN-r. Si se descartan, se debe tener en cuenta que este nivel de adaptación psicológica es relativamente infrecuente en la población general. En el caso de individuos que no estén especialmente bien adaptados, cualquier ausencia de puntuaciones altas en las escalas sustantivas debe interpretarse con precaución. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.K_r >= 60 && datos.K_r <= 65) {
    dataFinal.K_r = [
      "60-65",
      "La posible minimización de síntomas viene indicada por la presentación que hace el sujeto de sí mismo como bien adaptado.",
      "Respuestas inconsistentes. - Buen nivel de ajuste psicológico. - Minimización de síntomas.",
      "Se deberá analizar en primer lugar la existencia de patrones de respuestas inconsistentes a partir de las puntuaciones obtenidas en VRIN-ry TRIN-r. En el caso de individuos que no estén bien adaptados, cualquier ausencia de puntuaciones altas en las escalas sustantivas debe interpretarse con precaución. Además, las puntuaciones altas que aparecieran en las escalas sustantivas podrían ser subestimaciones del nivel real de los problemas evaluados en dichas escalas."
    ]
  } else if (datos.K_r < 60) {
    dataFinal.K_r = [
      "<60",
      "No hay indicio de minimización de síntomas.",
      "",
      "El protocolo es interpretable."
    ]
  }

  if (datos.EID >= 80 ) {
    dataFinal.EID = [
      "≥80",
      "Sus respuestas indican un nivel considerable de malestar emocional que probablemente sea percibido como una crisis.",
      "Un amplio espectro de síntomas y dificultades relacionados con la desmoralización, la falta de emociones positivas y la presencia de experiencias emocionales negativas (tales como baja moral, depresión, ansiedad, sensación de agobio, de impotencia, pesimismo). Las manifestaciones específicas de estos problemas emocionales o internalizados se ven caracterizados por la obtención de puntuaciones altas en algunas de las siguientes escalas: Desmoralización (RCd), Escasez de emociones positivas (RC2), Emociones negativas disfuncionales (RC7), Ideación suicida (SUI), Indefensión / Desesperanza (HLP), Insatisfacción (SFD), Inhibición (NFC), Estrés / Preocupaciones (STW), Ansiedad (AXY), Propensión a la ira (ANP), Miedos inactivos (BRF), Miedos específicos (MSF), Emocionalidad negativa / Neuroticismo-revisada (NEGE-r) e Introversión / Escasa emocionalidad positiva-revisada (INTR-r).",
      "Valore la posible presencia de trastornos internalizados.",
      "La existencia de dificultades emocionales puede motivar al sujeto evaluado al tratamiento."
    ]
  } else if(datos.EID >= 65 && datos.EID <= 79) {
    dataFinal.EID = [
      "66-79",
      "Sus respuestas indican un nivel significativo de malestar emocional.",
      "Un amplio espectro de síntomas y dificultades relacionados con la desmoralización, la falta de emociones positivas y la presencia de experiencias emocionales negativas (tales como baja moral, depresión, ansiedad, sensación de agobio, de impotencia, pesimismo). Las manifestaciones específicas de estos problemas emocionales o internalizados se ven caracterizados por la obtención de puntuaciones altas en algunas de las siguientes escalas: Desmoralización (RCd), Escasez de emociones positivas (RC2), Emociones negativas disfuncionales (RC7), Ideación suicida (SUI), Indefensión / Desesperanza (HLP), Insatisfacción (SFD), Inhibición (NFC), Estrés / Preocupaciones (STW), Ansiedad (AXY), Propensión a la ira (ANP), Miedos inactivos (BRF), Miedos específicos (MSF), Emocionalidad negativa / Neuroticismo-revisada (NEGE-r) e Introversión / Escasa emocionalidad positiva-revisada (INTR-r).",
      "Valore la posible presencia de trastornos internalizados.",
      "La existencia de dificultades emocionales puede motivar al sujeto evaluado al tratamiento."
    ]
  } else if(datos.EID < 39) {
    dataFinal.EID = [
      "<39",
      "Sus respuestas indican un nivel de ajuste emocional superior al promedio.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.EID = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      "",
    ]
  }

  if (datos.THD >= 80) {
    dataFinal.THD = [
      "≥80",
      "Sus respuestas indican un nivel grave de alteraciones del pensamiento.",
      "Un amplio gama de síntomas y dificultades asociados al pensamiento trastornado (por ejemplo, delirios paranoides y no paranoides, alucinaciones auditivas y visuales, pensamiento irreal). Las manifestaciones específicas de la alteración del pensamiento se caracterizaron por puntuaciones altas en algunas de las siguientes escalas: Ideas persecutorias (RC6), Experiencias anormales (RC8) y Psicoticismo-revisada (PSYC-r).",
      "Valore la posible presencia de trastornos asociados a las alteraciones del pensamiento.",
      "Puede requerir tratamiento de las alteraciones del pensamiento en régimen de internamiento u hospitalización. Debe evaluarse la posible necesidad de medicación antipsicótica."
    ]
  } else if(datos.THD >=65 && datos.THD <= 79) {
    dataFinal.THD = [
      "65-79",
      "Sus respuestas indican un nivel significativo de alteraciones del pensamiento.",
      "Un amplio gama de síntomas y dificultades asociados al pensamiento trastornado (por ejemplo, delirios paranoides y no paranoides, alucinaciones auditivas y visuales, pensamiento irreal). Las manifestaciones específicas de la alteración del pensamiento se caracterizaron por puntuaciones altas en algunas de las siguientes escalas: Ideas persecutorias (RC6), Experiencias anormales (RC8) y Psicoticismo-revisada (PSYC-r).",
      "Valore la posible presencia de trastornos asociados a las alteraciones del pensamiento.",
      "Puede requerir tratamiento de las alteraciones del pensamiento en régimen de internamiento u hospitalización. Debe evaluarse la posible necesidad de medicación antipsicótica."
    ]
  } else {
    dataFinal.THD = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.BXD >= 80) {
    dataFinal.BXD = [
      "≥80",
      "Sus respuestas indican la presencia de comportamientos notablemente descontrolados e impulsivos, que muy probablemente ocasionen una marcada alteración en la vida del evaluado y lo hayan llevado a meterse en problemas.",
      "Un amplio espectro de comportamientos y dificultades asociados a una falta de control del comportamiento (por ejemplo, abuso de sustancias, historial de comportamiento criminal, comportamiento violento y abusivo, escaso control de impulsos). Las manifestaciones específicas de las alteraciones comportamentales o externalizadas se reflejarán en la obtención de puntuaciones elevadas en algunas de las siguientes escalas: Conducta antisocial (RC4), Activación hipomaníaca (RC9), Problemas de conducta juveniles (JCP), Abuso de sustancias (SUB), Agresión (AGG), Activación (ACT), Agresividad-revisada (AGGR-r) y Falta de control-revisado (DISC-r).",
      "Valore la posible presencia de trastornos externalizados.",
      "Es improbable que tenga una motivación intrínseca para el tratamiento. - Existe riesgo elevado de que el sujeto no cumpla el tratamiento. - Objetivo terapéutico: lograr un nivel adecuado de autocontrol."
    ]
  } else if(datos.BXD >= 65 && datos.BXD <= 79) {
    dataFinal.BXD = [
      "65-79",
      "Sus respuestas indican la presencia significativa de comportamientos impulsivos y descontrolados que probablemente le hayan llevado a meterse en problemas.",
      "Un amplio espectro de comportamientos y dificultades asociados a una falta de control del comportamiento (por ejemplo, abuso de sustancias, historial de comportamiento criminal, comportamiento violento y abusivo, escaso control de impulsos). Las manifestaciones específicas de las alteraciones comportamentales o externalizadas se reflejarán en la obtención de puntuaciones elevadas en algunas de las siguientes escalas: Conducta antisocial (RC4), Activación hipomaníaca (RC9), Problemas de conducta juveniles (JCP), Abuso de sustancias (SUB), Agresión (AGG), Activación (ACT), Agresividad-revisada (AGGR-r) y Falta de control-revisado (DISC-r).",
      "Valore la posible presencia de trastornos externalizados.",
      "Es improbable que tenga una motivación intrínseca para el tratamiento. - Existe riesgo elevado de que el sujeto no cumpla el tratamiento. - Objetivo terapéutico: lograr un nivel adecuado de autocontrol."
    ]
  } else if(datos.BXD < 39) {
    dataFinal.BXD = [
      "<39",
      "Sus respuestas indican un nivel superior a la media de control comportamental; es improbable que el sujeto evaluado muestre comportamientos impulsivos y descontrolados.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.BXD = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      "",
    ]
  }

  if (datos.RCd >= 80) {
    dataFinal.RCd = [
      "≥80",
      "El sujeto refiere: - Experimentar un nivel significativo de confusión emocional. - Sentirse desbordado. - Sentirse extremadamente infeliz, triste e insatisfecho con su vida.",
      "Riesgo de ideación suicida (si SUI o HLP >= 65) - Se queja de depresión y ansiedad. - Se siente desesperanzado y pesismista ante el futuro. - No maneja bien el estrés. - Tiene baja autoestima. - Se siente incapaz de enfrentarse a la circunstancias actuales de su vida. - Tiene dificultades para concentrarse. - Es propensa a preocuparse y a dar demasiadas vueltas a las cosas. - Se siente triste. - Es pesimista. - Es inseguro.",
      "Valore la posible presencia de trastornos depresivos",
      "Valore el riesgo de autolesión (si SUI o HLP >= 65). - La existencia de dificultades emocionales puede motivar al sujeto evaluado al tratamiento. - Objetivo terapéutico inicial: alivio del malestar psicológico."
    ]
  } else if(datos.RCd >= 65 && datos.RCd <= 79) {
    dataFinal.RCd = [
      "65-79",
      "El sujeto refiere: - Sentirse triste e infeliz. - Estar insatisfecho con las circunstancias actuales de su vida.",
      "Riesgo de ideación suicida (si SUI o HLP >= 65) - Se queja de depresión y ansiedad. - Se siente desesperanzado y pesismista ante el futuro. - No maneja bien el estrés. - Tiene baja autoestima. - Se siente incapaz de enfrentarse a la circunstancias actuales de su vida. - Tiene dificultades para concentrarse. - Es propensa a preocuparse y a dar demasiadas vueltas a las cosas. - Se siente triste. - Es pesimista. - Es inseguro.",
      "Valore la posible presencia de trastornos depresivos",
      "Valore el riesgo de autolesión (si SUI o HLP >= 65). - La existencia de dificultades emocionales puede motivar al sujeto evaluado al tratamiento. - Objetivo terapéutico inicial: alivio del malestar psicológico."
    ]
  } else if(datos.RCd < 39) {
    dataFinal.RCd = [
      "<39",
      "Indica un nivel de ánimo y de satisfacción con la vida superior a la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.RCd = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC1 >= 80) {
    dataFinal.RC1 = [
      "≥80",
      "Indica un patrón difuso de quejas somáticas de varios órganos corporales que probablemente incluyen dolor de cabeza y síntomas neurológicos y gastrointestinales",
      "Le preocupan los problemas de salud física. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Sus quejas somáticas tienen un componente psicológico. - Se queja de cansancio. - Presenta múltiples quejas somáticas.",
      "Valore la posible presencia  de un trastorno somatomorfo (considere el trastorno de conversión si RC3 <= 39 y SHY <= 39).",
      "Es propenso a rechazar interpretaciones psicológicas de las quejas somáticas."
    ]
  } else if(datos.RC1 >= 65 && datos.RC1 <= 79) {
    dataFinal.RC1 = [
      "65-79",
      "Indica múltiples quejas somáticas que pueden incluir dolor de cabeza y síntomas neurológicos y gastrointestinales.",
      "Le preocupan los problemas de salud física. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Sus quejas somáticas tienen un componente psicológico. - Se queja de cansancio. - Presenta múltiples quejas somáticas.",
      "Valore la posible presencia  de un trastorno somatomorfo (considere el trastorno de conversión si RC3 <= 39 y SHY <= 39).",
      "Es propenso a rechazar interpretaciones psicológicas de las quejas somáticas."
    ]
  } else if(datos.RC1 < 39) {
    dataFinal.RC1 = [
      "<39",
      "Indica sensación de bienestar",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.RC1 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC2 >= 65) {
    dataFinal.RC2 = [
      "≥65",
      "El sujeto refiere:  - Ausencia de experiencias emocionales positivas. - Anhedonia significativa. - Falta de interés.",
      "Es pesimista. - Es socialmente introvertido. - No es socialmente activo. - Carece de energía. - Muestra síntomas vegetativos de depresión.",
      "Valore la posible presencia de trastornos depresivos. - Valore la posible presencia de trastornos depresivos, probablemente mayor (si RC2 > 80).",
      "Debería valorarse la necesidad de medicación antidepresiva. - Si la depresión es significativa puede requerir tratamiento en régimen de internamiento u hospitalización (si RC2 >= 75). - La escasez de emociones positivas puede interferir en su implicación en el tratamiento. - Objetivo terapéutico: reducir la anhedonia."
    ]
  } else if(datos.RC2 < 39) {
    dataFinal.RC2 = [
      "<39",
      "El sujeto refiere:  - Un alto nivel de bienestar psicológico. - Un abanico amplio de experiencias emocionales positivas. - Que se siente seguro y lleno de alegría",
      "Es optimista. - Es extrovertido. - Es socialmente activo.",
      "",
      ""
    ]
  } else {
    dataFinal.RC2 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC3 >= 65) {
    dataFinal.RC3 = [
      "≥65",
      "El sujeto refiere: - Pensar mal de las personas. - Desconfiar de los demás. - Creer que los demás sólo buscan su propio interés.",
      "Se muestra hostil y se siente apartado de los demás. - Desconfía de los demás. - Tiene experiencias interpersonales negativas.",
      "Valore la posible presencia de trastornos de la personalidad que impliquen desconfianza y hostilidad hacia los demás",
      "La desconfianza puede interferir en el establecimiento de una relación terapéutica. - Objetivo terapéutico: aumentar  la confianza en las personas."
    ]
  } else if(datos.RC3 < 39) {
    dataFinal.RC3 = [
      "<39",
      "Describe a los demás como personas bien intencionadas y dignas de confianza y rechaza pensar mal de ellas. - Posiblemente demasiado confiado.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.RC3 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC4 >= 65) {
    dataFinal.RC4 = [
      "≥65",
      "Indica tener un historial de conducta antisocial significativa.",
      "Ha estado implicado en procesos judiciales por hechos delictivos. - No acata las normas y expectativas de la sociedad. - Tiene dificultades en el trato con la autoridad. - Mantiene relaciones interpersonales conflictivas. - Es impulsivo. - Actúa de forma impulsiva y descontrolada cuando está aburrido. - Posee rasgos antisociales. - Tiene un historial de delincuencia juvenil. - Cae en el abuso de sustancias. - Tiene problemas familiares. - Es agresivo con los demás.",
      "Valore la posible presencia de trastorno antisocial de la personalidad, trastorno por abuso de sustancias y otros trastornos externalizados.",
      "Tenedencias impulsivas susceptibles de interrumpiar el tratamiento y de interferir en el desarrollo de una relación terapéutica. - Objetivo terapéutico: logar un nivel adecuado de autocontrol."
    ]
  } else if(datos.RC4 < 39) {
    dataFinal.RC4 = [
      "<39",
      "Indica tener un nivel por debajo de la media de comportamiento antisocial en el pasado.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.RC4 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      "",
    ]
  }

  if (datos.RC6 >= 65) {
    dataFinal.RC6 = [
      "≥65",
      "Informa de: - La presencia significativa de ideas persecutorias, tales como la creencia de que los demás tienen la intención de  hacerle daño. - La presencia destacada de ideas persecutorias que probablemente llegue al nivel de delirio paranoide (si RC6 >= 80).",
      "Tiene delirios paranoides (si RC6 >= 80). - Desconfía y se aísla de los demás. - Tiene dificultades interpersonales como resultado de su recelo y suspicacia. - Ausencia de consciencia de su problema. - Culpa a los demás de sus problemas.",
      "Valore la posible presencia de trastornos relacionados con las ideas persecutorias. - Valore la posible presencia de trastornos relacionados con los delirios paranoides (si RC6 >= 80).",
      "Las ideas persecutorias pueden interferir en el establecimiento de la relación terapéutica y en el seguimiento del tratamiento. - Objetivo terapéutico: reducir las ideas persecutorias. - Puede requerir tratamiento de los delirios paranoides en régimen de internamiento u hospitalización (si RC6 >= 80). - Debería valorarse la necesidad de medicación antipsicótica (si RC6 >= 80)."
    ]
  } else {
    dataFinal.RC6 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC7 >= 65) {
    dataFinal.RC7 = [
      "≥65",
      "Afirma experimentar diversas emociones negativas que incluytyen ansiedad, ira y miedo",
      "",
      "",
      ""
    ]
  } else if(datos.RC7 < 39) {
    dataFinal.RC7 = [
      "<39",
      "Afirma experimentar un número de emociones negativas inferior a la media.",
      "Se inhibe en su comportamiento debido a la presencia de emociones negativas. - Tiene ideas intrusivas. - Tiende a irritarse. - Es reactivo al estrés. - Tiene problemas relacionados con el sueño, por ejemplo, pesadillas. - Se preocupa en exceso. - Tiene pensamientos obsesivos. - Percibe a los demás como exageradamente críticos. - Es autocrítico y propenso a sentirse culpable.",
      "Valore la posible presencia de trastornos relacionados con la ansiedad.",
      "Ciertas dificultades emocionales pueden conducir a iniciar un tratamiento."
    ]
  } else {
    dataFinal.RC7 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC8 >= 75) {
    dataFinal.RC8 = [
      "≥75",
      "Informa de un gran número de pensamientos y percepciones inusuales.",
      "Experimenta pensamiento desorganizado. - Tiene pensamientos irreales o distorsionados. - Cree que tiene capacidades senso-perceptivas inusuales. - Sus experiencias anómalas pueden incluir delirios somáticos (si RC1, HPC o NUC ≥ 65). - Sus experiencias anómalas pueden estar inducidas por el consumo de sustancias (si SUB ≥ 65). - Las experiencias anómalas pueden incluir alucinaciones auditivas o visuales y delirios no persecutorios como la transmisión del pensamiento y la lectura de la mente (si RC8 ≥ 80). - La percepción de la realidad puede estar significativamente deteriorada (si RC8 ≥ 80). - Presenta deficiencias significativas en sus comportamientos laborales e interpersonales (si RC8 ≥ 80).",
      "Valore la posible presencia de trastornos que manifiesten síntomas psicóticos. - Valore la posible presencia de trastornos que manifiesten síntomas psicóticos, incluida la esquizofrenia de tipo paranoide (si RC6 ≥ 70). - Valore la posible presencia de trastornos de la personalidad que manifiesten pensamientos y percepciones inusuales.",
      "Las alteraciones del pensamiento pueden perturbar el desarrollo del tratamiento. - Ayude al sujeto a ganar consciencia de su alteración del pensamiento. - Puede requerir tratamiento del pensamiento desorganizado en régimen de internamiento u hospitalización (si RC8 ≥ 75). - Debería valorarse la necesidad de medicación antipsicótica (si RC8 ≥ 75). - Las alteraciones significativas del pensamiento pueden interrumpir el tratamiento (si RC8 ≥ 75). - Puede ser necesario asistir al paciente para poder aplicarle el tratamiento con éxito (si RC8 ≥ 75). - Objetivo terapéutico: eliminar o reducir los síntomas psicóticos (si RC8 ≥ 75)."
    ]
  } else if(datos.RC8 >= 65 && datos.RC8 <= 74) {
    dataFinal.RC8 = [
      "65-74",
      "Informa de diversos pensamientos y percepciones inusuales.",
      "Experimenta pensamiento desorganizado. - Tiene pensamientos irreales o distorsionados. - Cree que tiene capacidades senso-perceptivas inusuales. - Sus experiencias anómalas pueden incluir delirios somáticos (si RC1, HPC o NUC ≥ 65). - Sus experiencias anómalas pueden estar inducidas por el consumo de sustancias (si SUB ≥ 65).",
      "Valore la posible presencia de trastornos que manifiesten síntomas psicóticos. - Valore la posible presencia de trastornos de la personalidad que manifiesten pensamientos y percepciones inusuales.",
      "Las alteraciones del pensamiento pueden perturbar el desarrollo del tratamiento. - Ayude al sujeto a ganar consciencia de su alteración del pensamiento. -"
    ]
  } else {
    dataFinal.RC8 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if (datos.RC9 >= 75) {
    dataFinal.RC9 = [
      "≥75",
      "Informa un nivel de activación e implicación con el entorno que le rodea notablemente superior al promedio.",
      "Es inquieto y se aburre fácilmente. - Tiende a sobreactivarse, lo cual se manifiesta en un escaso control de sus impulsos. - Agresividad. - Inestabilidad emocional. - Euforia. - Excitabilidad. - Búsqueda de sensaciones, asunción de riesgos y otras formas de comportamientos pobremente regulados. - Exhibe características de una personalidad narcisista. - Puede tener un historial de síntomas asociados a episodios maníacos o hipomaníacos.",
      "Valore la posible presencia de: - Trastorno del estado de ánimo cíclico. - Episodios maníacos o hipomaníacos. - Trastorno esquizoafectivo (si RC6 ≥ 70 & RCB ≥ 70).",
      "Su excesivo nivel de activación conductual puede interferir en el tratamiento. - Objetivo inicial de la intervención en sus primeras fases: estabilizar el ánimo. - Puede requerir tratamiento de la hipomanía en régimen de internamiento u hospitalización. - Debería valorarse la necesidad de tratamiento farmacológico de estabilización del ánimo."
    ]
  } else if(datos.RC9 >= 65 && datos.RC9 <= 74) {
    dataFinal.RC9 = [
      "65-74",
      "Informa un nivel de activación e implicación con el entorno que le rodea superior a la media.",
      "Es inquieto y se aburre fácilmente. - Tiende a sobreactivarse, lo cual se manifiesta en un escaso control de sus impulsos. - Agresividad. - Inestabilidad emocional. - Euforia. - Excitabilidad. - Búsqueda de sensaciones, asunción de riesgos y otras formas de comportamientos pobremente regulados. - Exhibe características de una personalidad narcisista. - Puede tener un historial de síntomas asociados a episodios maníacos o hipomaníacos.",
      "Valore la posible presencia de un trastorno narcisista de la personalidad.",
      ""
    ]
  } else if(datos.RC9 < 39) {
    dataFinal.RC9 = [
      "<39",
      "Indica un nivel de activación e implicación con el entorno que le rodea inferior a la media.",
      `${datos.RC9 < 35 ? "Tiene un nivel muy bajo de energía. - No siente interés por lo que le rodea." : ""}`,
      "",
      ""
    ]
  } else {
    dataFinal.RC9 = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.MLS >= 80) {
    dataFinal.MLS = [
      "≥80",
      "Afirma tener una sensación de malestar general que se manifiesta en una mala salud y en sentirse cansado, débil e incapacitado.",
      "Está preocupado por su mala salud. - Es propenso a quejarse de: - Trastornos del sueño. - Cansancio. - Bajo nivel de energía. - Disfunción sexual.",
      "En el caso de descartarse una causa física para el malestar del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "La sensación de malestar general puede obstaculizar su motivación o capacidad para implicarse en el tratamiento."
    ]
  } else if(datos.MLS >= 65 && datos.MLS <= 79) {
    dataFinal.MLS = [
      "65-79",
      "Afirma tener una mala salud y sentirse débil o cansado.",
      "Está preocupado por su mala salud. - Es propenso a quejarse de: - Trastornos del sueño. - Cansancio. - Bajo nivel de energía. - Disfunción sexual.",
      "En el caso de descartarse una causa física para el malestar del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "La sensación de malestar general puede obstaculizar su motivación o capacidad para implicarse en el tratamiento."
    ]
  } else if(datos.MLS < 39) {
    dataFinal.MLS = [
      "<39",
      "Afirma tener una sensación general de bienestar físico.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.MLS = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.GIC >= 80) {
    dataFinal.GIC = [
      "≥80",
      "Informa de un gran número de quejas gastrointestinales tales como falta de apetito, náuseas, vómitos y molestias estomacales recurrentes.",
      "Tiene un historial de problemas gastrointestinales. - Le preocupan los problemas de salud física.",
      "En el caso de descartarse una causa física para el malestar del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "Si las quejas gastrointestinales están relacionadas con el estrés, se aconseja emplear técnicas que lo reduzcan."
    ]
  } else if(datos.GIC >= 65 && datos.GIC <= 79) {
    dataFinal.GIC = [
      "65-79",
      "Informa de diversos quejas gastrointestinales.",
      "Tiene un historial de problemas gastrointestinales. - Le preocupan los problemas de salud física.",
      "En el caso de descartarse una causa física para el malestar del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "Si las quejas gastrointestinales están relacionadas con el estrés, se aconseja emplear técnicas que lo reduzcan."
    ]
  } else {
    dataFinal.GIC = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.HPC >= 80) {
    dataFinal.HPC = [
      "≥80",
      "Afirma tener dolores difusos en la cabeza y el cuello, dolores de cabeza recurrentes y una tendencia a tener dolores de cabeza cuando se disgusta.",
      "Presenta múltiples quejas somáticas. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Le preocupan los problemas de salud física. - Se queja de: dolores de cabeza, dolor crónico, dificultad para concentrarse.",
      "Si no existe causa física que explique el dolor de cabeza del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "Objetivo terapéutico: manejo del dolor para las quejas de dolor de cabeza."
    ]
  } else if(datos.HPC >= 65 && datos.HPC <= 79) {
    dataFinal.HPC = [
      "65-79",
      "Afirma tener dolores de cabeza.",
      "Presenta múltiples quejas somáticas. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Le preocupan los problemas de salud física. - Se queja de: dolores de cabeza, dolor crónico, dificultad para concentrarse.",
      "Si no existe causa física que explique el dolor de cabeza del que informa el sujeto, valore la posible presencia de trastornos somatomorfos.",
      "Objetivo terapéutico: manejo del dolor para las quejas de dolor de cabeza."
    ]
  } else {
    dataFinal.HPC = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.NUC >= 90) {
    dataFinal.NUC = [
      "≥90",
      "Informa de un gran número de quejas neurológicas (p. ej., mareos, pérdida de equilibrio, adormecimiento, debilidad, parálisis y falta de control del movimiento, incluidos los movimientos involuntarios).",
      "Presenta múltiples quejas somáticas. - Le preocupan los problemas de salud física. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Es probable que presente mareos, problemas de coordinación, problemas sensoriales.",
      `Si se descarta el origen físico de la queja neurológica, valore la posible presencia de un trastorno somatomorfo. ${datos.RC3 <= 39 && datos.SHY <= 39 ? "Quizá un trastorno de conversión porque RC3 ≤ 39 y SHY ≤ 39)." : ""}`,
      "Si se determina que existe una causa física para las quejas neurológicas, remita al sujeto a tratamiento médico o conductual."
    ]
  } else if(datos.NUC >= 65 && datos.NUC <= 89) {
    dataFinal.NUC = [
      "65-89",
      "Informa de distintos quejas neurológicas vagos.",
      "Presenta múltiples quejas somáticas. - Le preocupan los problemas de salud física. - Es propenso a desarrollar síntomas físicos como respuesta al estrés. - Es probable que presente mareos, problemas de coordinación, problemas sensoriales.",
      `Si se descarta el origen físico de la queja neurológica, valore la posible presencia de un trastorno somatomorfo. ${datos.RC3 <= 39 && datos.SHY <= 39 ? "Quizá un trastorno de conversión porque RC3 ≤ 39 y SHY ≤ 39)." : ""}`,
      "Si se determina que existe una causa física para las quejas neurológicas, remita al sujeto a tratamiento médico o conductual."
    ]
  } else {
    dataFinal.NUC = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.COG >= 80) {
    dataFinal.COG = [
      "≥80",
      "Informe de un patrón difuso de dificultades cognitivas, que incluye problemas de memoria, dificultades para concentrarse, lentitud en el pensamiento y confusión.",
      "Se queja de problemas de memoria. - Tiene un bajo nivel de tolerancia a la frustración. - Tiene dificultades para concentrarse.",
      "Ninguna.",
      "Debería explorarse el origen de las quejas cognitivas, lo que podría requerir una evaluación neuropsicológica del sujeto evaluado."
    ]
  } else if(datos.COG >= 65 && datos.COG <= 79) {
    dataFinal.COG = [
      "65-79",
      "Informe de un patrón difuso de dificultades cognitivas.",
      "Se queja de problemas de memoria. - Tiene un bajo nivel de tolerancia a la frustración. - Tiene dificultades para concentrarse.",
      "Ninguna.",
      "Debería explorarse el origen de las quejas cognitivas, lo que podría requerir una evaluación neuropsicológica del sujeto evaluado."
    ]
  } else {
    dataFinal.COG = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.SUI >= 80) {
    dataFinal.SUI = [
      "≥80",
      "Informa tener ideas de suicidio en la actualidad y tener un historial de ideas e intentos de suicidio.",
      `Está preocupado por el suicidio y la muerte. - Está en riesgo de cometer un intento de suicidio (${datos.BXD >= 65 || datos.RC4 >= 65 || datos.RC9 >= 65 || datos.DISC_r >= 65 ? "este riesto se exarcerbado por un pobre de control de los impulsos porque: " : ""} ${datos.BXD >= 65 ? "BXD " : ""}${datos.RC4 >= 65 ? "RC4 " : ""}${datos.RC9 >= 65 ? "RC9 " : ""}${datos.DISC_r >= 65 ? "DISC_r " : ""}>=65. ${datos.SUB >= 65 ? "o por el abuso de sustancias porque SUB>=65" : ""}) - Puede haber cometido intentos recientes de suicidio. - Indefensión y desesperanza.`,
      "Ninguna.",
      "Debería valorarse inmediatamente el riesgo de suicidio."
    ]
  } else if(datos.SUI >= 65 && datos.SUI <= 79) {
    dataFinal.SUI = [
      "65-79",
      "Informa de un historial de ideas o intentos de suicidio.",
      "Informa tener ideas de suicidio en la actualidad y tener un historial de ideas e intentos de suicidio.",
      `Está preocupado por el suicidio y la muerte. - Está en riesgo de cometer un intento de suicidio (${datos.BXD >= 65 || datos.RC4 >= 65 || datos.RC9 >= 65 || datos.DISC_r >= 65 ? "este riesto se exarcerbado por un pobre de control de los impulsos porque: " : ""} ${datos.BXD >= 65 ? "BXD " : ""}${datos.RC4 >= 65 ? "RC4 " : ""}${datos.RC9 >= 65 ? "RC9 " : ""}${datos.DISC_r >= 65 ? "DISC_r " : ""}>=65. ${datos.SUB >= 65 ? "o por el abuso de sustancias porque SUB>=65" : ""}) - Puede haber cometido intentos recientes de suicidio. - Indefensión y desesperanza.`,
      "Ninguna.",
      "Debería valorarse inmediatamente el riesgo de suicidio."
    ]
  } else {
    dataFinal.SUI = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.HLP === 78) {
    dataFinal.HLP = [
      "=78",
      "Informa ser incapaz de cambiar y superar sus problemas así como de alcanzar sus metas en la vida.",
      "Se siente desesperanzado y pesimista. - Se siente agobiado y siente que la vida es una dura carga. - Cree que nadie ni nadie puede ayudarle. - Cree que la vida es injusta con él. - Carece de motivación para cambiar.",
      "Ninguna.",
      "Objetivos iniciales de la intervención: reducir la falta de esperanza y los sentimientos de desesperación."
    ]
  } else if(datos.HLP >= 65 && datos.HLP <= 77) {
    dataFinal.HLP = [
      "65-77",
      "Informa sentirse desesperanzado y pesimista.",
      "Se siente desesperanzado y pesimista. - Se siente agobiado y siente que la vida es una dura carga. - Cree que nadie ni nadie puede ayudarle. - Cree que la vida es injusta con él. - Carece de motivación para cambiar.",
      "Ninguna.",
      "Objetivos iniciales de la intervención: reducir la falta de esperanza y los sentimientos de desesperación."
    ]
  } else {
    dataFinal.HLP = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.SFD >= 65) {
    dataFinal.SFD = [
      "≥65",
      "Informa sentirse inútil y sin confianza en sí mismo.",
      "Se siente inferior e inseguro. - Se menosprecia a sí mismo. - Tiende al pensamiento circular y repetitivo. - Es muy introvertido. - Se siente inútil y sin confianza en sí mismo.",
      "Ninguna.",
      "Objetivos terapéuticos: mejorar la baja autoestima y otras manifestaciones de inseguridad en sí mismo."
    ]
  } else {
    dataFinal.SFD = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.NFC === 74) {
    dataFinal.NFC = [
      "=74",
      "Afirma ser muy indeciso e ineficaz, ser incapaz de tomar decisiones y de manejar eficazmente los conflictos, y tener dificultades para enfrentarse a cuestiones menores sin graves consecuencias.",
      "No suele confiar en sí mismo, y es pasivo.",
      "Ninguna.",
      "La indecisión puede interferir en la fijación de objetivos del tratamiento y en el progreso del mismo."
    ]
  } else if(datos.NFC >= 65 && datos.NFC <= 73) {
    dataFinal.NFC = [
      "65-73",
      "Afirma ser pasivo, indeciso e ineficaz, y creerse incapaz de manejar sus problemas actuales.",
      "No suele confiar en sí mismo, y es pasivo.",
      "Ninguna.",
      "La indecisión puede interferir en la fijación de objetivos del tratamiento y en el progreso del mismo."
    ]
  } else if(datos.NFC < 39) {
    dataFinal.NFC = [
      "<39",
      "No informa de falta de decisión y eficacia.",
      "Suele confiar en sí mismo y estar orientado hacia el poder.",
      "",
      ""
    ]
  } else {
    dataFinal.NFC = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.STW === 76) {
    dataFinal.STW = [
      "=76",
      "Informa de múltiples problemas relacionados con experiencias de estrés y preocupación, entre ellas preocuparse por las decepciones, no funcionar bien bajo presión y angustiarse por cuestiones específicas relacionadas con desgracias y con finanzas.",
      "Es reactivo al estrés. - Se propone o preocuparse. - Tiene pensamientos obsesivos.",
      "Valore la posible presencia de trastornos que impliquen un nivel de estrés y de preocupación excesivo tales como el trastorno obsesivo-compulsivo.",
      "Objetivos terapéuticos: gestión del estrés y de las preocupaciones y reducción del pensamiento circular y repetitivo."
    ]
  } else if(datos.STW >= 65 && datos.STW <= 75){
    dataFinal.STW = [
      "65-75",
      "Informa de un nivel de estrés y preocupación por encima de la media.",
      "Es reactivo al estrés. - Se propone o preocuparse. - Tiene pensamientos obsesivos.",
      "Valore la posible presencia de trastornos que impliquen un nivel de estrés y de preocupación excesivo tales como el trastorno obsesivo-compulsivo.",
      "Objetivos terapéuticos: gestión del estrés y de las preocupaciones y reducción del pensamiento circular y repetitivo."
    ]
  } else if(datos.STW < 39) {
    dataFinal.STW = [
      "<39",
      "Informa de un nivel de estrés o preocupación por debajo de la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.STW = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.AXY >= 80) {
    dataFinal.AXY = [
      "≥80",
      "Informa sentir ansiedad constantemente, tener la sensación frecuente de que algo horrible está a punto de pasar, sentir temor por algo cada día y tener a menudo pesadillas.",
      "Experimenta un importante nivel de ansiedad y de problemas relacionados con la ansiedad. - Ideación intrusiva. - Problemas de sueño, incluidos pesadillas. - Malestar postraumático.",
      "Valore la posible presencia de trastornos relacionados con la ansiedad, incluyendo el trastorno de estrés postraumático (TEPT).",
      "Debería valorarse la necesidad de medicación ansiolítica. - Objetivo terapéutico: reducir la ansiedad."
    ]
  } else if(datos.AXY >= 65 && datos.AXY <= 79){
    dataFinal.AXY = [
      "65-79",
      "Informa sentir ansiedad.",
      "Experimenta un importante nivel de ansiedad y de problemas relacionados con la ansiedad. - Ideación intrusiva. - Problemas de sueño, incluidos pesadillas. - Malestar postraumático.",
      "Valore la posible presencia de trastornos relacionados con la ansiedad, incluyendo el trastorno de estrés postraumático (TEPT).",
      "Objetivo terapéutico: reducir la ansiedad."
    ]
  } else {
    dataFinal.AXY = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.ANP === 75) {
    dataFinal.ANP = [
      "=75",
      "Informa molestarse fácilmente, perder la paciencia con los demás, irritarse por pequeños casos y algunas veces sentir que la furia le desborda.",
      "Tiene problemas de: - Ira. - Irritabilidad. - Baja nivel de tolerancia a la frustración. - Es rencoroso. - Tiene estallidos de mal genio. - Es propenso a discutir.",
      "Valore la posible presencia de trastornos relacionados con la ira.",
      "Objetivo terapéutico: manejo de la ira."
    ]
  } else if (datos.ANP >= 65 && datos.ANP <= 74) {
    dataFinal.ANP = [
      "65-74",
      "Informar ser propenso al enfado.",
      "Tiene problemas de: - Ira. - Irritabilidad. - Baja nivel de tolerancia a la frustración. - Es rencoroso. - Tiene estallidos de mal genio. - Es propenso a discutir.",
      "Valore la posible presencia de trastornos relacionados con la ira.",
      "Objetivo terapéutico: manejo de la ira."
    ]
  } else {
    dataFinal.ANP = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.BRF >= 80){
    dataFinal.BRF = [
      "≥80",
      "Informar tener miedos múltiples que restringen significativamente las actividades normales dentro y fuera del hogar, entre ellos están el miedo a salir de casa, a los espacios abiertos, a los espacios pequeños, a la oscuridad, a la suciedad y a los objetos afilados.",
      "Agorafobia. - Tiende a ser temeroso.",
      "Valore la posible presencia de trastornos de ansiedad, particularmente agorafobia.",
      "Objetivos terapéuticos: miedos restrictivos del comportamiento."
    ]
  } else if(datos.BRF >= 65 && datos.BRF <= 79) {
    dataFinal.BRF = [
      "65-79",
      "Informar tener miedos múltiples que restringen significativamente las actividades normales dentro y fuera del hogar.",
      "Agorafobia. - Tiende a ser temeroso.",
      "Valore la posible presencia de trastornos de ansiedad, particularmente agorafobia.",
      "Objetivos terapéuticos: miedos restrictivos del comportamiento."
    ]
  } else {
    dataFinal.BRF = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.MSF === 78) {
    dataFinal.MSF = [
      "=78",
      "Informa de múltiples miedos específicos, por ejemplo, a la sangre, al fuego, a los relámpagos, al agua, a los desastres naturales, a las arañas, a los ratones y a otros animales.",
      "Siente aversión al riesgo. - Tiende a evitar daños.",
      "Valore la posible presencia de fobias específicas.",
      "Objetivos terapéuticos: reducir los miedos específicos."
    ]
  } else if(datos.MSF >= 65 && datos.MSF <= 77) {
    dataFinal.MSF = [
      "65-77",
      "Informa de múltiples miedos específicos a ciertos animales y eventos naturales.",
      "Siente aversión al riesgo. - Tiende a evitar daños.",
      "Valore la posible presencia de fobias específicas.",
      "Objetivos terapéuticos: reducir los miedos específicos."
    ]
  } else if(datos.MSF < 39) {
    dataFinal.MSF = [
      "<39",
      "Informa de un número de miedos específicos inferior a la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.MSF = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.JCP >= 75){
    dataFinal.JCP = [
      "≥75",
      "Informan tener un historial de problemas de conducta tales como comportamiento conflictivo en la escuela, robar y dejarse influenciar negativamente por sus iguales.",
      "Tiene un historial de delincuencia juvenil y de comportamiento criminal y antisocial. - Mantiene relaciones interpersonales conflictivas. - Presenta comportamientos impulsivos. - Tiene dificultades en el trato con la autoridad. - Tiene problemas para confiar en los demás.",
      "Valore la posible presencia de trastornos externalizados, particularmente trastorno antisocial de la personalidad.",
      "Ninguna."
    ]
  } else if(datos.JCP >= 65 && datos.JCP <= 74) {
    dataFinal.JCP = [
      "65-74",
      "Informan tener un historial de conductas conflictivas en la escuela.",
      "Tiene un historial de delincuencia juvenil y de comportamiento criminal y antisocial. - Mantiene relaciones interpersonales conflictivas. - Presenta comportamientos impulsivos. - Tiene dificultades en el trato con la autoridad. - Tiene problemas para confiar en los demás.",
      "Valore la posible presencia de trastornos externalizados, particularmente trastorno antisocial de la personalidad.",
      "Ninguna."
    ]
  } else {
    dataFinal.JCP = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.SUB > 80) {
    dataFinal.SUB = [
      ">80",
      `Un historial significativo de abuso de sustancias tanto en el pasado como en el presente. - Consumir alcohol y drogas con frecuencia. - Consumir alcohol para "relajarse y desinhibirse".`,
      "Tiene un historial de problemas con el consumo de alcohol y drogas. - Ha tenido problemas legales como resultado del abuso de sustancias. - Muestra una tendencia a la búsqueda de sensaciones.",
      "Valorar la posible presencia de trastornos relacionados con el consumo de sustancias.",
      "Objetivo terapéutico: restricción o eliminación del consumo abusivo de sustancias."
    ]
  } else if(datos.SUB >= 65 && datos.SUB <= 80) {
    dataFinal.SUB = [
      "65-80",
      "Informa de un abuso de sustancias significativo en el pasado y en el presente.",
      "Tiene un historial de problemas con el consumo de alcohol y drogas. - Ha tenido problemas legales como resultado del abuso de sustancias. - Muestra una tendencia a la búsqueda de sensaciones.",
      "Valorar la posible presencia de trastornos relacionados con el consumo de sustancias.",
      "Objetivo terapéutico: restricción o eliminación del consumo abusivo de sustancias."
    ]
  } else {
    dataFinal.SUB = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.AGG >= 79) {
    dataFinal.AGG = [
      "≥79",
      "Afirma disfrutar intimidando a los demás y ser propenso a la agresividad física y a tener comportamientos violentos, entre ellos ataques de furia y altercados físicos.",
      "Tiene un historial de comportamiento violento hacia los demás. - Es ofensivo. - Tiene problemas con el manejo de la ira.",
      "Valore la posible presencia de trastornos asociados a la agresividad interpersonal.",
      "Objetivo terapéutico: reducción de los comportamientos agresivos en las relaciones interpersonales."
    ]
  } else if(datos.AGG >= 65 && datos.AGG <= 78) {
    dataFinal.AGG = [
      "65-78",
      "Afirma ser propenso a la agresividad física, a presentar comportamientos violentos y a perder el control.",
      "Tiene un historial de comportamiento violento hacia los demás. - Es ofensivo. - Tiene problemas con el manejo de la ira.",
      "Valore la posible presencia de trastornos asociados a la agresividad interpersonal.",
      "Objetivo terapéutico: reducción de los comportamientos agresivos en las relaciones interpersonales."
    ]
  } else if(datos.AGG < 39) {
    dataFinal.AGG = [
      "<39",
      "Informa de un nivel de comportamiento agresivo inferior a la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.AGG = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.ACT === 78) {
    dataFinal.ACT = [
      "=78",
      "Informa tener episodios de marcada activación y energía, cambios de estado de ánimo incontrolables y falta de sueño.",
      "Presenta un nivel de activación excesivo. - Tiene un historial de episodios maníacos o hipomaníacos (porque ACT ≥ 75).",
      "Valore la posible presencia de episodios maníacos o hipomaníacos u otras condiciones asociadas al exceso de energía y activación.",
      "Valore la necesidad de tratamiento farmacológico de estabilización anímica. - Su excesiva activación conductual puede interferir en el tratamiento."
    ]
  } else if(datos.ACT >= 65 && datos.ACT <= 77) {
    dataFinal.ACT = [
      "65-77",
      "Informa tener episodios de marcada activación y energía.",
      `Presenta un nivel de activación excesivo. - ${datos.ACT >= 75 ? 'Tiene un historial de episodios maníacos o hipomaníacos (porque ACT ≥ 75).' : ''}`,
      "Valore la posible presencia de episodios maníacos o hipomaníacos u otras condiciones asociadas al exceso de energía y activación.",
      "Valore la necesidad de tratamiento farmacológico de estabilización anímica. - Su excesiva activación conductual puede interferir en el tratamiento."
    ]
  } else if(datos.ACT < 39) {
    dataFinal.ACT = [
      "<39",
      "Informa tener un nivel de energía y activación inferior a la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.ACT = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.FML >= 79) {
    dataFinal.FML = [
      "≥79",
      "Indica que sus relaciones familiares son conflictivas y carece del apoyo del resto de miembros de su familia. Las experiencias y actitudes negativas de las últimas semanas incluyen riñas frecuentes, aversión u odio hacia los miembros de su familia y la percepción de no ser querido y no poder contar con los miembros de su familia cuando se les necesita.",
      "Tiene conflictos familiares. - Funcionamiento familiar deficiente. - Tiene fuertes sentimientos negativos hacia los miembros de su familia. - Culpa a los miembros de su familia de sus problemas.",
      "Ninguna.",
      "Objetivo terapéutico: abordar problemas familiares."
    ]
  } else if(datos.FML >= 65 && datos.FML <= 78) {
    dataFinal.FML = [
      "65-78",
      "Indica que sus relaciones familiares son conflictivas y carece del apoyo del resto de miembros de su familia.",
      "Tiene conflictos familiares. - Funcionamiento familiar deficiente. - Tiene fuertes sentimientos negativos hacia los miembros de su familia. - Culpa a los miembros de su familia de sus problemas.",
      "Ninguna.",
      "Objetivo terapéutico: abordar problemas familiares."
    ]
  } else if(datos.FML < 39) {
    dataFinal.FML = [
      "<39",
      "Informa de un entorno familiar relativamente libre de conflictos tanto en el presente como el pasado.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.FML = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.IPP >= 80) {
    dataFinal.IPP = [
      "≥80",
      "Indica ser sumiso y poco asertivo, no gustarle estar al mando, ser incapaz de hacerse valer y ser propenso a ceder ante los demás.",
      "",
      "Valorar la posible presencia de trastornos caracterizados por comportamientos pasivo-sumisos tales como el trastorno de personalidad por dependencia.",
      "Objetivo terapéutico: reducción del comportamiento pasivo y sumiso."
    ]
  } else if(datos.IPP >= 65 && datos.IPP <= 79) {
    dataFinal.IPP = [
      "65-79",
      "Afirma ser poco asertivo.",
      "",
      "Valorar la posible presencia de trastornos caracterizados por comportamientos pasivo-sumisos tales como el trastorno de personalidad por dependencia.",
      "Objetivo terapéutico: reducción del comportamiento pasivo y sumiso."
    ]
  } else if(datos.IPP >= 41 && datos.IPP <= 64) {
    dataFinal.IPP = [
      "41-64",
      "",
      "Es pasivo y sumiso en sus relaciones interpersonales. Adolece de exceso de control.",
      "",
      "Objetivo terapéutico: reducción del comportamiento pasivo y sumiso."
    ]
  } else if(datos.IPP < 39) {
    dataFinal.IPP = [
      "<39",
      "Se describe a sí mismo como una persona que tiene opiniones sólidas y claras, se hace valer, es asertiva y directa, capaz de dirigir a los demás.",
      "Cree tener capacidades de liderazgo, pero tiende a ser visto por los demás como dominante, egocéntrico y posiblemente petulante y presuntuoso.",
      "Valorar la posible presencia de rasgos asociados al trastorno narcisista de la personalidad.",
      ""
    ]
  } else {
    dataFinal.IPP = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.SAV >= 80) {
    dataFinal.SAV = [
      "≥80",
      "Afirma no disfrutar con los actos sociales y rehuir las situaciones sociales, tales como las fiestas y otros acontecimientos que suelen reunir grandes multitudes.",
      "Es introvertido. Tiene dificultades para establecer relaciones afectivas. Es reservado emocionalmente.",
      "Valorar la posible presencia de trastornos asociados a la evitación social como el trastorno de personalidad por evitación.",
      "Objetivo terapéutico: tratar los problemas asociados a la evitación social."
    ]
  } else if(datos.SAV >= 65 && datos.SAV <= 79) {
    dataFinal.SAV = [
      "65-79",
      "Afirma no disfrutar con los actos y las situaciones sociales y rehuirlos.",
      "Es introvertido. Tiene dificultades para establecer relaciones afectivas. Es reservado emocionalmente.",
      "Valorar la posible presencia de trastornos asociados a la evitación social como el trastorno de personalidad por evitación.",
      "Objetivo terapéutico: tratar los problemas asociados a la evitación social."
    ]
  } else if(datos.SAV < 39) {
    dataFinal.SAV = [
      "<39",
      "Afirma disfrutar con las situaciones y los actos sociales.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.SAV = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.SHY >= 65) {
    dataFinal.SHY = [
      "≥65",
      "Afirma ser tímido, avergonzarse fácilmente y no sentirse cómodo en presencia de los demás.",
      "Es socialmente introvertido e inhibido. - Siente ansiedad y nerviosismo en situaciones sociales. - Suele sentir ansiedad.",
      "Valore la posible presencia de fobia social.",
      "Objetivo terapéutico: reducir la ansiedad en situaciones sociales."
    ]
  } else if(datos.SHY < 39) {
    dataFinal.SHY = [
      "<39",
      "Informa de poca o ninguna ansiedad social.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.SHY = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.DSF >= 85) {
    dataFinal.DSF = [
      "≥85",
      "Afirma no gustarle la gente ni estar rodeado de ella, preferir estar solo y no haber tenido nunca una relación afectiva con nadie.",
      "Es asocial.",
      `${datos.DSF > 85 ? "Valore la posible presencia de un trastorno esquizoide de la personalidad(Porque DSF > 85)." : ""}`,
      "Su aversión hacia el establecimiento de relaciones afectivas puede dificultar el establecimiento de un vínculo con el terapeuta e interferir en el progreso del tratamiento."
    ]
  } else if(datos.DSF >= 71 && datos.DSF <= 84) {
    dataFinal.DSF = [
      "71-84",
      "Afirma no gustarle la gente ni estar rodeado de gente y prefiere estar solo.",
      "Es asocial.",
      "",
      "Su aversión hacia el establecimiento de relaciones afectivas puede dificultar el establecimiento de un vínculo con el terapeuta e interferir en el progreso del tratamiento."
    ]
  } else if(datos.DSF >= 65 && datos.DSF <= 70) {
    dataFinal.DSF = [
      "65-70",
      "Muestra falta de interés por la gente o por estar cerca de los demás.",
      "Es asocial.",
      "",
      "Su aversión hacia el establecimiento de relaciones afectivas puede dificultar el establecimiento de un vínculo con el terapeuta e interferir en el progreso del tratamiento."
    ]
  } else {
    dataFinal.DSF = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }
  
  if(datos.AES >= 65) {
    dataFinal.AES = [
      "≥65",
      "Muestra un interés superior a la media por actividades u ocupaciones de naturaleza estética o literaria (como la escritura, la música o el teatro).",
      "Es empático. - Es sensible.",
      "Ninguna.",
      ""
    ]
  } else if(datos.AES < 39) {
    dataFinal.AES = [
      "<39",
      "No indica ningún interés por actividades u ocupaciones de naturaleza estética o literaria (como la escritura, la música o el teatro).",
      "",
      "",
      `${datos.AES < 39 && datos.MEC < 39 ? "La interverción deberá ir dirigida a tratar la carencia de intereses externos(Porque AES y MEC son inferiores )" : ""}`
    ]
  } else {
    dataFinal.AES = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.MEC >= 80) {
    dataFinal.MEC = [
      "≥80",
      "Muestra un interés muy superior a la media por actividades u ocupaciones de naturaleza mecánica o física (tales como arreglar o construir cosas, hacer cosas al aire libre o practicar deporte).",
      "Busca aventuras. - Busca sensaciones.",
      "Ninguna.",
      ""
    ]
  } else if(datos.MEC >= 65 && datos.MEC <= 79) {
    dataFinal.MEC = [
      "65-79",
      "Muestra un interés superior a la media por actividades u ocupaciones de naturaleza mecánica o física (tales como arreglar o construir cosas, hacer cosas al aire libre o practicar deporte).",
      "Busca aventuras. - Busca sensaciones.",
      "Ninguna.",
      ""
    ]
  } else if(datos.MEC < 39) {
    dataFinal.MEC = [
      "<39",
      "No indica ningún interés por actividades u ocupaciones de naturaleza mecánica o física (tales como arreglar o construir cosas, hacer cosas al aire libre o practicar deporte).",
      "",
      "",
      `Si las puntuaciones T de las dos escalas de intereses (AES y MEC) son inferiores a 39, entonces la intervención deberá ir dirigida a tratar la carencia de intereses externos${datos.AES < 39 && datos.MEC < 39 ? "(Las puntuaciones AES y MEC SI son menores a 39)" : ""}.`
    ]
  } else {
    dataFinal.MEC = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.AGGR_r >= 65) {
    dataFinal.AGGR_r = [
      "≥65",
      "Afirma ser agresivo y asertivo en sus relaciones personales.",
      "Es extremadamente asertivo y socialmente dominante. Muestra comportamientos de agresividad instrumental. Cree poseer cualidades de líder. Es visto por los demás como dominante.",
      "Valore la posible presencia de trastornos de la personalidad del grupo B.",
      "Objetivo terapéutico: reducción de los comportamientos agresivos en las relaciones interpersonales."
    ]
  } else if(datos.AGGR_r < 39) {
    dataFinal.AGGR_r = [
      "<39",
      "Afirma ser pasivo y sumiso en sus relaciones personales.",
      "Es pasivo y sumiso en sus relaciones interpersonales.",
      "",
      ""
    ]
  } else {
    dataFinal.AGGR_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.PSYC_r >= 65){
    dataFinal.PSYC_r = [
      "≥65",
      "Indica haber tenido diversas experiencias relacionadas con distorsiones y alteraciones del pensamiento.",
      "Tiene pensamientos y fenómenos perceptivos inusuales. - Se siente aislado de los demás. - Tiene pensamientos irreales o distorsionados. - Presenta una deteriorada capacidad de percepción de la realidad.",
      "Valore la posible presencia de trastornos de la personalidad del grupo A.",
      "Objetivo terapéutico: tratar la alteración del pensamiento."
    ]
  } else if(datos.PSYC_r < 39) {
    dataFinal.PSYC_r = [
      "<39",
      "No indica experimentar alteraciones o distorsiones en su pensamiento.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.PSYC_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.DISC_r >= 65) {
    dataFinal.DISC_r = [
      "≥65",
      "Informa de diversas manifestaciones de conducta incontrolada.",
      "Adolece de falta de control conductual. - Presenta comportamientos impulsivos. - Actúa de forma descontrolada e impulsiva, fuera de tono. - Muestra una tendencia a la búsqueda de sensaciones y emociones.",
      "Valore la posible presencia de trastornos de la personalidad del grupo B.",
      "Es improbable que esté motivado internamente para el tratamiento. - Existe riesgo significativo de que el sujeto no cumpla el tratamiento. - Objetivo terapéutico: nivel inadecuado de control de los impulsos."
    ]
  } else if(datos.DISC_r < 39) {
    dataFinal.DISC_r = [
      "<39",
      "Informa tener una conducta extremadamente controlada.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.DISC_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.NEGE_r >= 65) {
    dataFinal.NEGE_r = [
      "≥65",
      "Afirma experimentar diversas emociones negativas.",
      "Experimenta diversas emociones negativas, entre ellas: Ansiedad, Inseguridad, Preocupación. - Se inhibe en su comportamiento por la presencia de las emociones negativas. - Es autocrítico y propenso a sentirse culpable. - Tiene ideas irracionales.",
      "Valore la posible presencia de trastornos de la personalidad de grupo C.",
      "Ciertas dificultades emocionales pueden conducir a iniciar un tratamiento. - Debería valorarse la necesidad de medicación ansiolítica. - Objetivo terapéutico: modificar la focalización del sujeto en la información negativa."
    ]
  } else if(datos.NEGE_r < 39) {
    dataFinal.NEGE_r = [
      "<39",
      "Informa experimentar un menor número de emociones negativas que la media.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.NEGE_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  if(datos.INTR_r >= 65) {
    dataFinal.INTR_r = [
      "≥65",
      "Informa no experimentar emociones positivas y evitar las situaciones sociales.",
      "Carece de experiencias emocionales positivas. - Tiene problemas significativos de anhedonia. - Manifiesta estar deprimido. - Carece de intereses. - Es pesimista. - Es socialmente introvertido.",
      "Valorar la posible presencia de trastornos de la personalidad del grupo C.",
      "Debe valorarse la necesidad de medicación antidepresiva. - La falta de emociones positivas puede interferir en su implicación en el tratamiento."
    ]
  } else if(datos.INTR_r < 39){
    dataFinal.INTR_r = [
      "<39",
      "Informa sentirse lleno de energía y experimentar múltiples emociones positivas.",
      "",
      "",
      ""
    ]
  } else {
    dataFinal.INTR_r = [
      "",
      "No hay indicaciones para ésta puntuación.",
      "",
      "",
      ""
    ]
  }

  return dataFinal;
};

module.exports = {interpretarDatos, nombres};
