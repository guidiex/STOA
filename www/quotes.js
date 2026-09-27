// ======================================================
// STOA — BIBLIOTECA
// 100 ideas estoicas
// 20 por categoría
//
// Categorías:
// calma
// perspectiva
// acción
// disciplina
// tiempo
//
// type: "paraphrase"
// Indica que el texto es una adaptación contemporánea
// de una idea presente en la obra indicada.
// ======================================================

const quotes = [

  // ====================================================
  // CALMA — 20
  // ====================================================

  {
    text: "No te altera lo que sucede, sino el juicio que hacés sobre lo que sucede.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "calma",
    reflection: "Separá el hecho de la interpretación. ¿Qué queda?"
  },

  {
    text: "Antes de reaccionar, preguntate si esto depende realmente de vos.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué parte podés controlar ahora?"
  },

  {
    text: "El miedo crece cuando tratamos como presente algo que todavía no ocurrió.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Está pasando o solamente podría pasar?"
  },

  {
    text: "Muchas veces sufrimos primero por anticipación y después, quizá, por los hechos.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "calma",
    reflection: "No pagues dos veces por el mismo problema."
  },

  {
    text: "La tranquilidad empieza cuando dejamos de exigir que el mundo siga nuestros planes.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué expectativa podrías soltar?"
  },

  {
    text: "Aceptá el acontecimiento; elegí con cuidado tu respuesta.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "El hecho ya ocurrió. Tu respuesta todavía está en tus manos."
  },

  {
    text: "La mente puede conservar su equilibrio incluso cuando afuera hay desorden.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "Volvé al lugar interior desde donde decidís."
  },

  {
    text: "No entregues tu serenidad a la conducta de otra persona.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Por qué darle a otro el control de tu estado?"
  },

  {
    text: "Una ofensa necesita de tu juicio para convertirse en una herida interior.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Podés observar lo ocurrido sin agregarle combustible?"
  },

  {
    text: "Lo inevitable se vuelve más pesado cuando además discutimos mentalmente con ello.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué lucha interna ya no sirve?"
  },

  {
    text: "No todo pensamiento merece ser creído.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "Observá el pensamiento antes de obedecerlo."
  },

  {
    text: "Podés detener una impresión antes de convertirla en una conclusión.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "Esperá un instante antes de decidir qué significa esto."
  },

  {
    text: "La ira promete fuerza, pero muchas veces entrega el control.",
    author: "Séneca",
    work: "Sobre la ira",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué respuesta elegirías sin ira?"
  },

  {
    text: "Retrasar una reacción puede evitar una decisión que después lamentes.",
    author: "Séneca",
    work: "Sobre la ira",
    type: "paraphrase",
    category: "calma",
    reflection: "No toda respuesta necesita ser inmediata."
  },

  {
    text: "La serenidad no exige que desaparezca el problema.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "Podés estar tranquilo y seguir ocupándote."
  },

  {
    text: "Lo exterior puede incomodarte; no tiene por qué gobernarte.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "calma",
    reflection: "Recuperá el gobierno de tu respuesta."
  },

  {
    text: "Cuando algo te perturbe, examiná primero el relato que estás construyendo.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué sabés con certeza?"
  },

  {
    text: "Un problema futuro no necesita una angustia presente.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "calma",
    reflection: "Atendé lo que existe hoy."
  },

  {
    text: "La calma también es una forma de fortaleza.",
    author: "Séneca",
    work: "Sobre la tranquilidad del ánimo",
    type: "paraphrase",
    category: "calma",
    reflection: "No confundas intensidad con eficacia."
  },

  {
    text: "Volvé al presente: es el único lugar donde podés actuar.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "calma",
    reflection: "¿Qué requiere este momento, no el próximo?"
  },


  // ====================================================
  // PERSPECTIVA — 20
  // ====================================================

  {
    text: "Cambiar la forma de mirar una situación puede cambiar la situación que experimentás.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Probá describir el problema de otra manera."
  },

  {
    text: "Lo que hoy parece enorme puede verse pequeño desde una perspectiva más amplia.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Cómo verías esto dentro de cinco años?"
  },

  {
    text: "Recordá cuántas preocupaciones antiguas hoy ya no significan nada.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Quizá esta también cambie de tamaño."
  },

  {
    text: "No confundas una dificultad con una vida difícil.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Nombrá solamente el problema real."
  },

  {
    text: "Una pérdida puede enseñarte qué cosas nunca fueron realmente tuyas.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué estabas tratando como permanente?"
  },

  {
    text: "Las cosas externas tienen el valor que nuestra mente decide concederles.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Le estás dando demasiado poder a algo externo?"
  },

  {
    text: "No necesitás que todos comprendan tus decisiones para que sean correctas.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué elegirías sin necesidad de aprobación?"
  },

  {
    text: "Quien actúa mal suele hacerlo desde una comprensión equivocada de lo que considera bueno.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Comprender no significa justificar."
  },

  {
    text: "No juzgues toda tu vida desde el estado de ánimo de una tarde.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Esperá a que cambie el clima interior."
  },

  {
    text: "La reputación vive en la mente de otras personas; tu carácter vive en tus actos.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Cuál de las dos cosas merece más energía?"
  },

  {
    text: "No preguntes solamente qué perdiste; preguntá también qué aprendiste.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué información te dejó esta experiencia?"
  },

  {
    text: "La dificultad revela aspectos del carácter que la comodidad mantiene ocultos.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué está revelando esto sobre vos?"
  },

  {
    text: "No conviertas un error en una identidad.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Cometiste algo; no sos ese error."
  },

  {
    text: "La vida cambia constantemente; exigir permanencia es discutir con su naturaleza.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué cambio estás resistiendo?"
  },

  {
    text: "La comparación te hace olvidar las condiciones concretas de tu propio camino.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Volvé a tu propio recorrido."
  },

  {
    text: "Nada externo puede convertirte en alguien que no elegís ser.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué carácter querés mostrar acá?"
  },

  {
    text: "A veces no necesitás resolver el mundo; necesitás ordenar tu juicio sobre él.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "¿Qué conclusión podrías revisar?"
  },

  {
    text: "Mirado desde suficiente distancia, gran parte de nuestras disputas pierde importancia.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Alejate mentalmente de la escena."
  },

  {
    text: "No midas una buena vida solamente por cuántas cosas salieron según lo previsto.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Medila también por cómo respondiste."
  },

  {
    text: "La pregunta útil no siempre es '¿por qué me pasó?', sino '¿qué hago ahora con esto?'.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "perspectiva",
    reflection: "Cambiá explicación por dirección."
  },


  // ====================================================
  // ACCIÓN — 20
  // ====================================================

  {
    text: "No esperes sentirte preparado para empezar a comportarte como la persona que querés ser.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Cuál sería el primer acto coherente?"
  },

  {
    text: "El obstáculo también puede convertirse en material para avanzar.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Cómo podés trabajar con lo que hay?"
  },

  {
    text: "Hacé lo que corresponde delante tuyo y dejá para después lo que todavía no llegó.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Cuál es el siguiente paso concreto?"
  },

  {
    text: "La filosofía sirve poco si no modifica la manera en que actuamos.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Convertí una idea en una conducta."
  },

  {
    text: "No expliques demasiado tus principios; mostrálos en tus acciones.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué acción hablaría por vos?"
  },

  {
    text: "Una pequeña acción correcta vale más que una gran intención postergada.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "acción",
    reflection: "Hacé algo pequeño ahora."
  },

  {
    text: "Empezar reduce problemas que pensar indefinidamente vuelve enormes.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué podés iniciar en cinco minutos?"
  },

  {
    text: "No necesitás controlar el resultado para controlar la calidad de tu esfuerzo.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Concentrate en ejecutar bien."
  },

  {
    text: "La oportunidad de actuar bien existe precisamente porque la situación es difícil.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué virtud requiere este problema?"
  },

  {
    text: "Preguntarte qué haría una persona prudente sirve solamente si después lo hacés.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Ya sabés bastante. Ejecutá."
  },

  {
    text: "No pospongas lo correcto esperando condiciones perfectas.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué podés hacer con las condiciones actuales?"
  },

  {
    text: "Cada situación ofrece algún trabajo posible, aunque no sea el que habías planeado.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Encontrá el trabajo que sí está disponible."
  },

  {
    text: "Decidir también implica renunciar a seguir deliberando.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Ya tenés información suficiente?"
  },

  {
    text: "El carácter se construye en decisiones pequeñas repetidas muchas veces.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué repetición querés comenzar hoy?"
  },

  {
    text: "Cuando la dirección es correcta, incluso un paso corto cuenta.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "acción",
    reflection: "No confundas pequeño con insignificante."
  },

  {
    text: "Tu tarea no es garantizar el éxito; es actuar razonablemente con lo que sabés.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Separá responsabilidad de resultado."
  },

  {
    text: "La acción adecuada suele ser más simple que toda la historia mental que construimos alrededor.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Reducilo al próximo movimiento."
  },

  {
    text: "Cada día ofrece otra oportunidad para practicar aquello que decís valorar.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué valor podés practicar hoy?"
  },

  {
    text: "No hagas de la dificultad una excusa para abandonar una obligación justa.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "¿Qué sigue siendo necesario hacer?"
  },

  {
    text: "El progreso aparece cuando dejamos de esperar inspiración y empezamos a practicar.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "acción",
    reflection: "Practicá antes de sentirte listo."
  },


  // ====================================================
  // DISCIPLINA — 20
  // ====================================================

  {
    text: "La verdadera libertad empieza cuando aprendés a gobernar tus propios impulsos.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué impulso no necesitás obedecer?"
  },

  {
    text: "Elegí lo conveniente para tu carácter, no solamente lo agradable para este momento.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué elección agradecerás mañana?"
  },

  {
    text: "No necesitás satisfacer cada deseo que aparece.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Dejá pasar uno deliberadamente."
  },

  {
    text: "Acostumbrarte voluntariamente a pequeñas incomodidades reduce su poder sobre vos.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué comodidad podrías dejar hoy?"
  },

  {
    text: "Ser dueño de uno mismo exige práctica, no solamente buenas intenciones.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué práctica concreta necesitás repetir?"
  },

  {
    text: "No permitas que tu atención sea arrastrada por cualquier cosa que aparezca.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Elegí conscientemente dónde poner la atención."
  },

  {
    text: "Hacé cada tarea como si fuera digna de toda tu atención mientras la ejecutás.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Una cosa a la vez."
  },

  {
    text: "No abandones un principio solamente porque cumplirlo hoy resulta incómodo.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué principio está siendo puesto a prueba?"
  },

  {
    text: "Reducir necesidades puede darte más libertad que aumentar posesiones.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué necesidad es en realidad una preferencia?"
  },

  {
    text: "La constancia supera al entusiasmo cuando el entusiasmo desaparece.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Seguí aunque hoy no tengas ganas."
  },

  {
    text: "Tus hábitos cotidianos entrenan el carácter que usarás en los momentos difíciles.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué estás entrenando sin darte cuenta?"
  },

  {
    text: "No confundas libertad con hacer siempre lo que deseás.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "A veces la libertad consiste en poder decir que no."
  },

  {
    text: "El lujo repetido rápidamente deja de sentirse como lujo y empieza a sentirse necesario.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué comodidad se convirtió en exigencia?"
  },

  {
    text: "Una mente entrenada puede elegir antes de reaccionar.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Insertá una pausa entre impulso y respuesta."
  },

  {
    text: "Lo que repetís termina siendo más importante que lo que prometés.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Mirá tus repeticiones, no tus intenciones."
  },

  {
    text: "No busques parecer disciplinado; construí una vida que requiera menos demostraciones.",
    author: "Epicteto",
    work: "Enquiridión",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Que la conducta sea suficiente."
  },

  {
    text: "La moderación protege placeres que el exceso termina destruyendo.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Dónde un poco menos sería mejor?"
  },

  {
    text: "Entrená en días fáciles las respuestas que necesitarás en días difíciles.",
    author: "Epicteto",
    work: "Disertaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "La preparación ocurre antes de la prueba."
  },

  {
    text: "Tu atención es limitada; gastarla sin criterio también es una forma de desperdicio.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "¿Qué no merece tu atención hoy?"
  },

  {
    text: "La excelencia cotidiana suele parecer aburrida: hacer bien lo necesario una y otra vez.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "disciplina",
    reflection: "Volvé a lo básico y hacelo bien."
  },


  // ====================================================
  // TIEMPO — 20
  // ====================================================

  {
    text: "No tenemos tan poco tiempo como creemos; perdemos una gran parte sin advertirlo.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Dónde se está yendo tu tiempo hoy?"
  },

  {
    text: "Vivimos como si tuviéramos una reserva infinita de días.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué cambiarías si tomaras en serio que el tiempo es limitado?"
  },

  {
    text: "Mientras postergamos vivir, la vida continúa avanzando.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué estás esperando para empezar?"
  },

  {
    text: "Este momento es una parte irrepetible de tu vida.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "Tratala como algo que no vuelve."
  },

  {
    text: "Podés perder dinero y recuperarlo; el tiempo gastado no regresa.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué merece una hora de tu vida?"
  },

  {
    text: "No entregues a cualquiera horas que después decís no tener.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "Protegé tu calendario como protegés otras cosas valiosas."
  },

  {
    text: "Cada día usado con intención constituye una vida más completa.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué haría que hoy haya valido la pena?"
  },

  {
    text: "No esperes una vida futura para empezar a vivir según tus valores.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué valor podés practicar hoy?"
  },

  {
    text: "La muerte no vuelve inútil la vida; vuelve valioso su límite.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "El límite puede ayudarte a elegir."
  },

  {
    text: "Recordar que la vida termina puede aclarar qué cosas no merecen tanta energía.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué discusión se vuelve pequeña desde ahí?"
  },

  {
    text: "La agenda llena no demuestra necesariamente que una vida esté bien utilizada.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "Diferenciá movimiento de dirección."
  },

  {
    text: "Estar ocupado puede ser otra forma de evitar lo verdaderamente importante.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué tarea importante estás evitando con tareas menores?"
  },

  {
    text: "El futuro no está garantizado; utilizá razonablemente el día disponible.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "tiempo",
    reflection: "Trabajá con el día que sí tenés."
  },

  {
    text: "Una vida larga no depende solamente de cuántos años contiene, sino de cómo fueron usados.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué significa para vos usar bien un día?"
  },

  {
    text: "No desperdicies el presente reviviendo indefinidamente lo que ya terminó.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "El pasado puede enseñar sin ocupar todo el presente."
  },

  {
    text: "Tampoco desperdicies hoy habitando constantemente un mañana imaginario.",
    author: "Séneca",
    work: "Cartas a Lucilio",
    type: "paraphrase",
    category: "tiempo",
    reflection: "Volvé al día que está ocurriendo."
  },

  {
    text: "Cada tarea innecesaria ocupa un espacio que podría pertenecer a algo importante.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué podés eliminar?"
  },

  {
    text: "Preguntarte si algo es necesario puede devolverte una cantidad enorme de tiempo.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Esto necesita realmente hacerse?"
  },

  {
    text: "El día que estás viviendo también cuenta como tu vida; no es solamente preparación.",
    author: "Séneca",
    work: "Sobre la brevedad de la vida",
    type: "paraphrase",
    category: "tiempo",
    reflection: "No pongas toda la vida en espera."
  },

  {
    text: "Usá el recuerdo de la muerte para elegir mejor, no para vivir con miedo.",
    author: "Marco Aurelio",
    work: "Meditaciones",
    type: "paraphrase",
    category: "tiempo",
    reflection: "¿Qué decisión se vuelve más clara al recordar que el tiempo importa?"
  }

];