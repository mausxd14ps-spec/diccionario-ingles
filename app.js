const verbsData = [
    // --- A ---
    {
        verb: "Accept",
        translation: "Aceptar",
        type: "regular",
        popular: false,
        forms: { base: "accept", past: "accepted", participle: "accepted", gerund: "accepting", third: "accepts" },
        definition: "Recibir de forma voluntaria algo que se ofrece, o estar de acuerdo con una idea o situación.",
        usage: "Se usa al recibir invitaciones, propuestas, regalos o asumir realidades.",
        examples: [
            { form: "Base / Infinitive", en: "I am ready to accept the challenge.", es: "Estoy listo para aceptar el reto." },
            { form: "Past Simple", en: "She accepted the job offer.", es: "Ella aceptó la oferta de trabajo." },
            { form: "Past Participle", en: "The terms have been accepted.", es: "Los términos han sido aceptados." },
            { form: "Gerund (-ing)", en: "Accepting criticism helps growth.", es: "Aceptar las críticas ayuda a crecer." },
            { form: "Third Person (-s)", en: "He accepts credit cards.", es: "Él acepta tarjetas de crédito." }
        ]
    },
    {
        verb: "Ask",
        translation: "Preguntar / Pedir",
        type: "regular",
        popular: false,
        forms: { base: "ask", past: "asked", participle: "asked", gerund: "asking", third: "asks" },
        definition: "Requerir información a alguien o solicitar que se haga algo.",
        usage: "Se usa para formular preguntas en una conversación o solicitar un favor u objeto.",
        examples: [
            { form: "Base / Infinitive", en: "Feel free to ask any question.", es: "Siéntete libre de hacer cualquier pregunta." },
            { form: "Past Simple", en: "She asked me for help.", es: "Ella me pidió ayuda." },
            { form: "Past Participle", en: "I have asked about the prices.", es: "He preguntado sobre los precios." },
            { form: "Gerund (-ing)", en: "Asking for directions is normal.", es: "Preguntar direcciones es normal." },
            { form: "Third Person (-s)", en: "He always asks intelligent questions.", es: "Él siempre hace preguntas inteligentes." }
        ]
    },
    // --- B ---
    {
        verb: "Be",
        translation: "Ser / Estar",
        type: "irregular",
        popular: true,
        forms: { base: "be", past: "was / were", participle: "been", gerund: "being", third: "is" },
        definition: "Indica existencia, identidad, estado o condición de una persona o cosa. Es el verbo auxiliar y principal más importante del inglés.",
        usage: "Se usa para hablar de profesiones, nacionalidades, estados de ánimo, edades y como auxiliar en tiempos continuos.",
        examples: [
            { form: "Base / Infinitive", en: "I want to be a great programmer.", es: "Quiero ser un gran programador." },
            { form: "Past Simple", en: "She was very happy yesterday.", es: "Ella estaba muy feliz ayer." },
            { form: "Past Participle", en: "Have you ever been to London?", es: "¿Alguna vez has estado en Londres?" },
            { form: "Gerund (-ing)", en: "Being honest is essential.", es: "Ser honesto es fundamental." },
            { form: "Third Person (-s)", en: "He is studying in his room.", es: "Él está estudiando en su habitación." }
        ]
    },
    {
        verb: "Begin",
        translation: "Empezar / Comenzar",
        type: "irregular",
        popular: false,
        forms: { base: "begin", past: "began", participle: "begun", gerund: "beginning", third: "begins" },
        definition: "Dar inicio a una acción, proceso, evento o actividad.",
        usage: "Se usa para reuniones, clases, proyectos o cambios de estado.",
        examples: [
            { form: "Base / Infinitive", en: "Let's begin the class.", es: "Comencemos la clase." },
            { form: "Past Simple", en: "The movie began at 8 PM.", es: "La película comenzó a las 8 PM." },
            { form: "Past Participle", en: "The project has already begun.", es: "El proyecto ya ha comenzado." },
            { form: "Gerund (-ing)", en: "Beginning is always the hardest part.", es: "Empezar siempre es la parte más difícil." },
            { form: "Third Person (-s)", en: "Spring begins in March.", es: "La primavera comienza en marzo." }
        ]
    },
    {
        verb: "Break",
        translation: "Romper / Quebrar",
        type: "irregular",
        popular: false,
        forms: { base: "break", past: "broke", participle: "broken", gerund: "breaking", third: "breaks" },
        definition: "Separar algo en pedazos por la fuerza, interrumpir el funcionamiento o violar una regla.",
        usage: "Se usa con objetos físicos, récords, promesas o leyes.",
        examples: [
            { form: "Base / Infinitive", en: "Be careful not to break the glass.", es: "Ten cuidado de no romper el vaso." },
            { form: "Past Simple", en: "He broke the world record.", es: "Él rompió el récord mundial." },
            { form: "Past Participle", en: "My phone screen is broken.", es: "La pantalla de mi teléfono está rota." },
            { form: "Gerund (-ing)", en: "Breaking rules has consequences.", es: "Romper las reglas tiene consecuencias." },
            { form: "Third Person (-s)", en: "This machine breaks easily.", es: "Esta máquina se rompe fácilmente." }
        ]
    },
    {
        verb: "Bring",
        translation: "Traer / Llevar",
        type: "irregular",
        popular: false,
        forms: { base: "bring", past: "brought", participle: "brought", gerund: "bringing", third: "brings" },
        definition: "Transportar o conducir algo o a alguien hacia el lugar donde está el hablante.",
        usage: "Se usa para objetos, comida, documentos o invitados a un sitio.",
        examples: [
            { form: "Base / Infinitive", en: "Can you bring some water?", es: "¿Puedes traer un poco de agua?" },
            { form: "Past Simple", en: "She brought a delicious dessert.", es: "Ella trajo un postre delicioso." },
            { form: "Past Participle", en: "What have you brought for me?", es: "¿Qué me has traído?" },
            { form: "Gerund (-ing)", en: "Bringing your laptop is necessary.", es: "Traer tu laptop es necesario." },
            { form: "Third Person (-s)", en: "He brings good news.", es: "Él trae buenas noticias." }
        ]
    },
    {
        verb: "Buy",
        translation: "Comprar",
        type: "irregular",
        popular: false,
        forms: { base: "buy", past: "bought", participle: "bought", gerund: "buying", third: "buys" },
        definition: "Adquirir un producto o servicio a cambio de dinero.",
        usage: "Se usa en transacciones comerciales, tiendas, supermercados o comercio electrónico.",
        examples: [
            { form: "Base / Infinitive", en: "I want to buy a new car.", es: "Quiero comprar un auto nuevo." },
            { form: "Past Simple", en: "She bought groceries yesterday.", es: "Ella compró víveres ayer." },
            { form: "Past Participle", en: "The tickets have been bought.", es: "Los boletos han sido comprados." },
            { form: "Gerund (-ing)", en: "Buying online is very fast.", es: "Comprar en línea es muy rápido." },
            { form: "Third Person (-s)", en: "He buys fresh fruit every week.", es: "Él compra fruta fresca cada semana." }
        ]
    },
    // --- C ---
    {
        verb: "Call",
        translation: "Llamar",
        type: "regular",
        popular: false,
        forms: { base: "call", past: "called", participle: "called", gerund: "calling", third: "calls" },
        definition: "Emitir sonidos para atraer a alguien, comunicarse por teléfono o nombrar a alguien de cierta forma.",
        usage: "Se utiliza en llamadas telefónicas, gritos de atención o asignación de nombres.",
        examples: [
            { form: "Base / Infinitive", en: "I will call you later.", es: "Te llamaré más tarde." },
            { form: "Past Simple", en: "She called me yesterday.", es: "Ella me llamó ayer." },
            { form: "Past Participle", en: "Have you called a taxi?", es: "¿Has llamado a un taxi?" },
            { form: "Gerund (-ing)", en: "Stop calling me names.", es: "Deja de insultarme (ponerme apodos)." },
            { form: "Third Person (-s)", en: "My mom calls every Sunday.", es: "Mi mamá llama todos los domingos." }
        ]
    },
    {
        verb: "Change",
        translation: "Cambiar / Modificar",
        type: "regular",
        popular: false,
        forms: { base: "change", past: "changed", participle: "changed", gerund: "changing", third: "changes" },
        definition: "Hacer que algo deje de ser lo que era, transformarlo o reemplazarlo por otra cosa.",
        usage: "Se usa para ropa, planes, código, mentalidad o divisas.",
        examples: [
            { form: "Base / Infinitive", en: "We need to change our strategy.", es: "Necesitamos cambiar nuestra estrategia." },
            { form: "Past Simple", en: "The weather changed suddenly.", es: "El clima cambió repentinamente." },
            { form: "Past Participle", en: "My life has completely changed.", es: "Mi vida ha cambiado por completo." },
            { form: "Gerund (-ing)", en: "Changing habits takes time.", es: "Cambiar hábitos toma tiempo." },
            { form: "Third Person (-s)", en: "He changes his mind too often.", es: "Él cambia de opinión muy seguido." }
        ]
    },
    {
        verb: "Choose",
        translation: "Elegir / Escoger",
        type: "irregular",
        popular: false,
        forms: { base: "choose", past: "chose", participle: "chosen", gerund: "choosing", third: "chooses" },
        definition: "Seleccionar una opción entre varias posibilidades disponibles.",
        usage: "Se usa al tomar decisiones importantes, carreras, opciones o menús.",
        examples: [
            { form: "Base / Infinitive", en: "Help me choose a color.", es: "Ayúdame a elegir un color." },
            { form: "Past Simple", en: "She chose the best option.", es: "Ella escogió la mejor opción." },
            { form: "Past Participle", en: "The winner has been chosen.", es: "El ganador ha sido elegido." },
            { form: "Gerund (-ing)", en: "Choosing a career is crucial.", es: "Elegir una carrera es crucial." },
            { form: "Third Person (-s)", en: "He always chooses wisely.", es: "Él siempre elige sabiamente." }
        ]
    },
    {
        verb: "Come",
        translation: "Venir",
        type: "irregular",
        popular: false,
        forms: { base: "come", past: "came", participle: "come", gerund: "coming", third: "comes" },
        definition: "Moverse hacia el lugar donde está el hablante o hacia un punto de referencia.",
        usage: "Se usa para invitaciones, llegadas a sitios o procedencia.",
        examples: [
            { form: "Base / Infinitive", en: "Come here, please.", es: "Ven aquí, por favor." },
            { form: "Past Simple", en: "They came to the party.", es: "Ellos vinieron a la fiesta." },
            { form: "Past Participle", en: "He has come back home.", es: "Él ha regresado a casa." },
            { form: "Gerund (-ing)", en: "Winter is coming.", es: "El invierno se acerca." },
            { form: "Third Person (-s)", en: "She comes from Venezuela.", es: "Ella viene de Venezuela." }
        ]
    },
    {
        verb: "Create",
        translation: "Crear",
        type: "regular",
        popular: false,
        forms: { base: "create", past: "created", participle: "created", gerund: "creating", third: "creates" },
        definition: "Producir algo nuevo, dar existencia a algo a partir de la imaginación o el ingenio.",
        usage: "Se usa en arte, programación, contenido, empresas o proyectos.",
        examples: [
            { form: "Base / Infinitive", en: "I want to create a video game.", es: "Quiero crear un videojuego." },
            { form: "Past Simple", en: "She created a stunning website.", es: "Ella creó un sitio web impresionante." },
            { form: "Past Participle", en: "This app was created in 2026.", es: "Esta aplicación fue creada en 2026." },
            { form: "Gerund (-ing)", en: "Creating art relieves stress.", es: "Crear arte alivia el estrés." },
            { form: "Third Person (-s)", en: "He creates innovative solutions.", es: "Él crea soluciones innovadoras." }
        ]
    },
    // --- D ---
    {
        verb: "Decide",
        translation: "Decidir",
        type: "regular",
        popular: false,
        forms: { base: "decide", past: "decided", participle: "decided", gerund: "deciding", third: "decides" },
        definition: "Tomar una determinación definitiva tras sopesar opciones.",
        usage: "Se usa al resolver dilemas, metas o rumbos a tomar.",
        examples: [
            { form: "Base / Infinitive", en: "You need to decide now.", es: "Necesitas decidir ahora." },
            { form: "Past Simple", en: "We decided to stay home.", es: "Decidimos quedarnos en casa." },
            { form: "Past Participle", en: "Nothing has been decided yet.", es: "Nada se ha decidido aún." },
            { form: "Gerund (-ing)", en: "Deciding quickly is hard.", es: "Decidir rápido es difícil." },
            { form: "Third Person (-s)", en: "She decides everything.", es: "Ella decide todo." }
        ]
    },
    {
        verb: "Do",
        translation: "Hacer / Realizar",
        type: "irregular",
        popular: true,
        forms: { base: "do", past: "did", participle: "done", gerund: "doing", third: "does" },
        definition: "Se refiere a la ejecución de una acción general, tarea o actividad. También funciona como auxiliar gramatical para preguntas y negaciones.",
        usage: "Se usa con tareas genéricas, deberes, trabajos o para dar énfasis.",
        examples: [
            { form: "Base / Infinitive", en: "I want to do my best.", es: "Quiero dar lo mejor de mí." },
            { form: "Past Simple", en: "He did his homework quickly.", es: "Él hizo su tarea rápidamente." },
            { form: "Past Participle", en: "It is already done.", es: "Ya está hecho." },
            { form: "Gerund (-ing)", en: "What are you doing now?", es: "¿Qué estás haciendo ahora?" },
            { form: "Third Person (-s)", en: "She does yoga every morning.", es: "Ella hace yoga todas las mañanas." }
        ]
    },
    {
        verb: "Drink",
        translation: "Beber / Tomar",
        type: "irregular",
        popular: false,
        forms: { base: "drink", past: "drank", participle: "drunk", gerund: "drinking", third: "drinks" },
        definition: "Ingerir un líquido.",
        usage: "Se usa para agua, jugos, café, refrescos u otras bebidas.",
        examples: [
            { form: "Base / Infinitive", en: "Remember to drink water.", es: "Recuerda beber agua." },
            { form: "Past Simple", en: "He drank a cup of coffee.", es: "Él bebió una taza de café." },
            { form: "Past Participle", en: "Have you ever drunk coconut water?", es: "¿Alguna vez has tomado agua de coco?" },
            { form: "Gerund (-ing)", en: "Drinking soda is unhealthy.", es: "Beber refresco es poco saludable." },
            { form: "Third Person (-s)", en: "She drinks tea every night.", es: "Ella bebe té todas las noches." }
        ]
    },
    {
        verb: "Drive",
        translation: "Conducir / Manejar",
        type: "irregular",
        popular: false,
        forms: { base: "drive", past: "drove", participle: "driven", gerund: "driving", third: "drives" },
        definition: "Operar y guiar un vehículo de motor (como un auto, autobús o camión).",
        usage: "Se usa al hablar de transporte por carretera, licencias y viajes en coche.",
        examples: [
            { form: "Base / Infinitive", en: "I am learning to drive.", es: "Estoy aprendiendo a conducir." },
            { form: "Past Simple", en: "He drove all night to get home.", es: "Él condujo toda la noche para llegar a casa." },
            { form: "Past Participle", en: "This car has been driven 50k miles.", es: "Este auto ha sido conducido 50 mil millas." },
            { form: "Gerund (-ing)", en: "Driving fast is dangerous.", es: "Manejar rápido es peligroso." },
            { form: "Third Person (-s)", en: "She drives to work daily.", es: "Ella conduce al trabajo diariamente." }
        ]
    },
    // --- E ---
    {
        verb: "Eat",
        translation: "Comer",
        type: "irregular",
        popular: false,
        forms: { base: "eat", past: "ate", participle: "eaten", gerund: "eating", third: "eats" },
        definition: "Ingerir alimentos sólidos para nutrirse.",
        usage: "Se usa en cualquier contexto relacionado con comidas, dietas o restaurantes.",
        examples: [
            { form: "Base / Infinitive", en: "What do you want to eat?", es: "¿Qué quieres comer?" },
            { form: "Past Simple", en: "I ate pizza last night.", es: "Comí pizza anoche." },
            { form: "Past Participle", en: "I have already eaten sushi.", es: "Ya he comido sushi." },
            { form: "Gerund (-ing)", en: "He is eating an apple.", es: "Él está comiendo una manzana." },
            { form: "Third Person (-s)", en: "She eats healthy food.", es: "Ella come comida saludable." }
        ]
    },
    // --- F ---
    {
        verb: "Fall",
        translation: "Caer / Caerse",
        type: "irregular",
        popular: false,
        forms: { base: "fall", past: "fell", participle: "fallen", gerund: "falling", third: "falls" },
        definition: "Moverse desde arriba hacia abajo debido a la gravedad, o perder el equilibrio.",
        usage: "Se usa para caídas físicas, precios, hojas de árboles o temperaturas.",
        examples: [
            { form: "Base / Infinitive", en: "Be careful not to fall.", es: "Ten cuidado de no caer." },
            { form: "Past Simple", en: "The leaves fell in autumn.", es: "Las hojas cayeron en otoño." },
            { form: "Past Participle", en: "The price has fallen significantly.", es: "El precio ha bajado significativamente." },
            { form: "Gerund (-ing)", en: "Falling in love is wonderful.", es: "Enamorarse es maravilloso." },
            { form: "Third Person (-s)", en: "Snow falls in winter.", es: "La nieve cae en invierno." }
        ]
    },
    {
        verb: "Feel",
        translation: "Sentir / Sentirse",
        type: "irregular",
        popular: false,
        forms: { base: "feel", past: "felt", participle: "felt", gerund: "feeling", third: "feels" },
        definition: "Experimentar sensaciones físicas, emociones o estados de ánimo.",
        usage: "Se usa con emociones (feliz, cansado, triste) o texturas al tacto.",
        examples: [
            { form: "Base / Infinitive", en: "How do you feel today?", es: "¿Cómo te sientes hoy?" },
            { form: "Past Simple", en: "I felt very tired yesterday.", es: "Me sentí muy cansado ayer." },
            { form: "Past Participle", en: "The impact was deeply felt.", es: "El impacto se sintió profundamente." },
            { form: "Gerund (-ing)", en: "Feeling anxious is normal sometimes.", es: "Sentirse ansioso es normal a veces." },
            { form: "Third Person (-s)", en: "He feels better now.", es: "Él se siente mejor ahora." }
        ]
    },
    {
        verb: "Find",
        translation: "Encontrar / Hallar",
        type: "irregular",
        popular: false,
        forms: { base: "find", past: "found", participle: "found", gerund: "finding", third: "finds" },
        definition: "Dar con algo o alguien que se buscaba, o descubrir una información u opinión.",
        usage: "Útil al localizar objetos perdidos o descubrir soluciones.",
        examples: [
            { form: "Base / Infinitive", en: "I need to find my keys.", es: "Necesito encontrar mis llaves." },
            { form: "Past Simple", en: "We found a great restaurant.", es: "Encontramos un gran restaurante." },
            { form: "Past Participle", en: "The lost dog was found.", es: "El perro perdido fue encontrado." },
            { form: "Gerund (-ing)", en: "Finding solutions is our goal.", es: "Encontrar soluciones es nuestra meta." },
            { form: "Third Person (-s)", en: "He always finds a way.", es: "Él siempre encuentra la manera." }
        ]
    },
    {
        verb: "Fly",
        translation: "Volar",
        type: "irregular",
        popular: false,
        forms: { base: "fly", past: "flew", participle: "flown", gerund: "flying", third: "flies" },
        definition: "Moverse por el aire usando alas o aparatos voladores (aviones, drones).",
        usage: "Se usa para aves, insectos, viajes en avión o el paso veloz del tiempo.",
        examples: [
            { form: "Base / Infinitive", en: "Birds can fly high.", es: "Las aves pueden volar alto." },
            { form: "Past Simple", en: "She flew to Spain last week.", es: "Ella voló a España la semana pasada." },
            { form: "Past Participle", en: "I have flown many times.", es: "He volado muchas veces." },
            { form: "Gerund (-ing)", en: "Flying in a plane is exciting.", es: "Volar en un avión es emocionante." },
            { form: "Third Person (-s)", en: "Time flies when you code.", es: "El tiempo vuela cuando programas." }
        ]
    },
    {
        verb: "Forget",
        translation: "Olvidar / Olvidarse",
        type: "irregular",
        popular: false,
        forms: { base: "forget", past: "forgot", participle: "forgotten", gerund: "forgetting", third: "forgets" },
        definition: "Dejar de recordar información, un evento o un objeto.",
        usage: "Se usa con nombres, fechas, contraseñas o tareas pendientes.",
        examples: [
            { form: "Base / Infinitive", en: "Don't forget your password.", es: "No olvides tu contraseña." },
            { form: "Past Simple", en: "I forgot my wallet at home.", es: "Olvidé mi billetera en casa." },
            { form: "Past Participle", en: "That mistake is forgotten.", es: "Ese error está olvidado." },
            { form: "Gerund (-ing)", en: "Forgetting details is common.", es: "Olvidar detalles es común." },
            { form: "Third Person (-s)", en: "He always forgets things.", es: "Él siempre olvida las cosas." }
        ]
    },
    // --- G ---
    {
        verb: "Get",
        translation: "Obtener / Conseguir / Llegar",
        type: "irregular",
        popular: false,
        forms: { base: "get", past: "got", participle: "gotten (UK: got)", gerund: "getting", third: "gets" },
        definition: "Verbo comodín en inglés que indica adquirir, recibir, alcanzar o volverse.",
        usage: "Muy versátil: conseguir empleo, comprar algo, llegar a un sitio ('get home') o cambiar de estado ('get angry').",
        examples: [
            { form: "Base / Infinitive", en: "I want to get a new job.", es: "Quiero conseguir un nuevo trabajo." },
            { form: "Past Simple", en: "She got a promotion.", es: "Ella obtuvo un ascenso." },
            { form: "Past Participle", en: "We have got everything ready.", es: "Hemos conseguido todo listo." },
            { form: "Gerund (-ing)", en: "Getting up early is healthy.", es: "Levantarse temprano es saludable." },
            { form: "Third Person (-s)", en: "He gets better every day.", es: "Él mejora (se pone mejor) cada día." }
        ]
    },
    {
        verb: "Give",
        translation: "Dar / Entregar",
        type: "irregular",
        popular: false,
        forms: { base: "give", past: "gave", participle: "given", gerund: "giving", third: "gives" },
        definition: "Ofrecer o entregar algo a alguien de forma gratuita o como transacción.",
        usage: "Se usa para regalos, favores, opiniones o explicaciones.",
        examples: [
            { form: "Base / Infinitive", en: "Can you give me a hand?", es: "¿Me puedes dar una mano?" },
            { form: "Past Simple", en: "She gave me a wonderful gift.", es: "Ella me dio un regalo maravilloso." },
            { form: "Past Participle", en: "A second chance was given.", es: "Se dio una segunda oportunidad." },
            { form: "Gerund (-ing)", en: "Giving is better than receiving.", es: "Dar es mejor que recibir." },
            { form: "Third Person (-s)", en: "He gives great advice.", es: "Él da excelentes consejos." }
        ]
    },
    {
        verb: "Go",
        translation: "Ir / Dirigirse",
        type: "irregular",
        popular: true,
        forms: { base: "go", past: "went", participle: "gone", gerund: "going", third: "goes" },
        definition: "Indica desplazamiento o movimiento de un lugar a otro.",
        usage: "Se utiliza para hablar de viajes, salidas, planes o rutinas hacia destinos específicos.",
        examples: [
            { form: "Base / Infinitive", en: "Let's go to the park.", es: "Vayamos al parque." },
            { form: "Past Simple", en: "They went to the beach yesterday.", es: "Ellos fueron a la playa ayer." },
            { form: "Past Participle", en: "She has gone to work.", es: "Ella se ha ido a trabajar." },
            { form: "Gerund (-ing)", en: "I love going for a walk.", es: "Me encanta ir a dar un paseo." },
            { form: "Third Person (-s)", en: "He goes to school by bus.", es: "Él va a la escuela en autobús." }
        ]
    },
    {
        verb: "Grow",
        translation: "Crecer / Cultivar",
        type: "irregular",
        popular: false,
        forms: { base: "grow", past: "grew", participle: "grown", gerund: "growing", third: "grows" },
        definition: "Aumentar de tamaño, desarrollo o madurez (personas, plantas, negocios).",
        usage: "Se usa en biología, desarrollo personal y crecimiento económico.",
        examples: [
            { form: "Base / Infinitive", en: "Children grow up so fast.", es: "Los niños crecen muy rápido." },
            { form: "Past Simple", en: "The company grew rapidly.", es: "La empresa creció rápidamente." },
            { form: "Past Participle", en: "These vegetables are homegrown.", es: "Estas verduras son cultivadas en casa." },
            { form: "Gerund (-ing)", en: "Growing plants requires patience.", es: "Cultivar plantas requiere paciencia." },
            { form: "Third Person (-s)", en: "He grows flowers in his garden.", es: "Él cultiva flores en su jardín." }
        ]
    },
    // --- H ---
    {
        verb: "Have",
        translation: "Tener / Haber",
        type: "irregular",
        popular: true,
        forms: { base: "have", past: "had", participle: "had", gerund: "having", third: "has" },
        definition: "Expresa posesión, pertenencia, relaciones o se usa como verbo auxiliar para formar los tiempos perfectos.",
        usage: "Se emplea al hablar de posesiones materiales, características físicas, obligaciones ('have to') y experiencias.",
        examples: [
            { form: "Base / Infinitive", en: "I need to have a new computer.", es: "Necesito tener una computadora nueva." },
            { form: "Past Simple", en: "We had a wonderful time.", es: "Tuvimos un tiempo maravilloso." },
            { form: "Past Participle", en: "I have finished my homework.", es: "He terminado mi tarea." },
            { form: "Gerund (-ing)", en: "Having patience is key.", es: "Tener paciencia es clave." },
            { form: "Third Person (-s)", en: "She has a nice dog.", es: "Ella tiene un perro simpático." }
        ]
    },
    {
        verb: "Hear",
        translation: "Oír / Escuchar",
        type: "irregular",
        popular: false,
        forms: { base: "hear", past: "heard", participle: "heard", gerund: "hearing", third: "hears" },
        definition: "Percibir sonidos a través de los oídos de manera involuntaria.",
        usage: "Diferente a 'listen' (escuchar con atención); se refiere a la capacidad auditiva o recibir ruidos.",
        examples: [
            { form: "Base / Infinitive", en: "Can you hear that noise?", es: "¿Puedes oír ese ruido?" },
            { form: "Past Simple", en: "I heard a strange sound last night.", es: "Oí un sonido extraño anoche." },
            { form: "Past Participle", en: "I have heard that story before.", es: "He oído esa historia antes." },
            { form: "Gerund (-ing)", en: "Hearing is one of our five senses.", es: "La audición es uno de nuestros cinco sentidos." },
            { form: "Third Person (-s)", en: "She hears music from next door.", es: "Ella oye música de la puerta de al lado." }
        ]
    },
    {
        verb: "Help",
        translation: "Ayudar",
        type: "regular",
        popular: false,
        forms: { base: "help", past: "helped", participle: "helped", gerund: "helping", third: "helps" },
        definition: "Prestar asistencia o colaboración a alguien para que logre algo.",
        usage: "Común en solicitudes de favor, asistencia técnica o soporte social.",
        examples: [
            { form: "Base / Infinitive", en: "I can help you with your code.", es: "Puedo ayudarte con tu código." },
            { form: "Past Simple", en: "She helped me study for the exam.", es: "Ella me ayudó a estudiar para el examen." },
            { form: "Past Participle", en: "You have helped me a lot.", es: "Me has ayudado mucho." },
            { form: "Gerund (-ing)", en: "Helping others brings joy.", es: "Ayudar a los demás trae alegría." },
            { form: "Third Person (-s)", en: "This tool helps a lot.", es: "Esta herramienta ayuda mucho." }
        ]
    },
    {
        verb: "Hate",
        translation: "Odiar / Detestar",
        type: "regular",
        popular: false,
        forms: { base: "hate", past: "hated", participle: "hated", gerund: "hating", third: "hates" },
        definition: "Sentir aversión intensa o rechazo hacia alguien o algo.",
        usage: "Se usa para expresar fuerte disgusto hacia hábitos, comidas o situaciones.",
        examples: [
            { form: "Base / Infinitive", en: "I hate waking up early.", es: "Odio levantarme temprano." },
            { form: "Past Simple", en: "He hated eating vegetables as a kid.", es: "Él odiaba comer verduras de niño." },
            { form: "Past Participle", en: "That task is universally hated.", es: "Esa tarea es universalmente odiada." },
            { form: "Gerund (-ing)", en: "Hating doesn't solve anything.", es: "Odiar no resuelve nada." },
            { form: "Third Person (-s)", en: "She hates rainy days.", es: "A ella le disgustan los días lluviosos." }
        ]
    },
    {
        verb: "Hope",
        translation: "Esperar / Tener esperanza",
        type: "regular",
        popular: false,
        forms: { base: "hope", past: "hoped", participle: "hoped", gerund: "hoping", third: "hopes" },
        definition: "Desear que ocurra algo positivo o favorable en el futuro.",
        usage: "Diferente a 'wait' (esperar de tiempo/lugar); 'hope' es un deseo o ilusión.",
        examples: [
            { form: "Base / Infinitive", en: "I hope you pass the exam.", es: "Espero que apruebes el examen." },
            { form: "Past Simple", en: "We hoped for better weather.", es: "Esperábamos mejor clima." },
            { form: "Past Participle", en: "It was heavily hoped for.", es: "Se esperaba con muchas ansias." },
            { form: "Gerund (-ing)", en: "Hoping for success is not enough.", es: "Esperar el éxito no es suficiente." },
            { form: "Third Person (-s)", en: "She hopes to travel soon.", es: "Ella espera viajar pronto." }
        ]
    },
    // --- K ---
    {
        verb: "Keep",
        translation: "Guardar / Mantener / Conservar",
        type: "irregular",
        popular: false,
        forms: { base: "keep", past: "kept", participle: "kept", gerund: "keeping", third: "keeps" },
        definition: "Retener algo en posesión, mantener un estado o continuar haciendo una acción.",
        usage: "Se usa en expresiones como 'keep going' (sigue adelante) o guardar secretos/objetos.",
        examples: [
            { form: "Base / Infinitive", en: "Keep practicing your English.", es: "Sigue practicando tu inglés." },
            { form: "Past Simple", en: "She kept my secret safe.", es: "Ella mantuvo mi secreto a salvo." },
            { form: "Past Participle", en: "The room is well kept.", es: "La habitación está bien conservada." },
            { form: "Gerund (-ing)", en: "Keeping focused is vital.", es: "Mantenerse concentrado es vital." },
            { form: "Third Person (-s)", en: "He keeps his desk clean.", es: "Él mantiene su escritorio limpio." }
        ]
    },
    {
        verb: "Know",
        translation: "Saber / Conocer",
        type: "irregular",
        popular: false,
        forms: { base: "know", past: "knew", participle: "known", gerund: "knowing", third: "knows" },
        definition: "Tener conocimiento o información sobre algo, o estar familiarizado con una persona o lugar.",
        usage: "Se usa para datos, hechos, habilidades y amistades.",
        examples: [
            { form: "Base / Infinitive", en: "I want to know the truth.", es: "Quiero saber la verdad." },
            { form: "Past Simple", en: "She knew the answer instantly.", es: "Ella supo la respuesta al instante." },
            { form: "Past Participle", en: "He is well known in the city.", es: "Él es muy conocido en la ciudad." },
            { form: "Gerund (-ing)", en: "Knowing English opens doors.", es: "Saber inglés abre puertas." },
            { form: "Third Person (-s)", en: "He knows how to fix computers.", es: "Él sabe cómo arreglar computadoras." }
        ]
    },
    // --- L ---
    {
        verb: "Learn",
        translation: "Aprender",
        type: "regular",
        popular: false,
        forms: { base: "learn", past: "learned / learnt", participle: "learned / learnt", gerund: "learning", third: "learns" },
        definition: "Adquirir el conocimiento de algo por medio del estudio, el ejercicio o la experiencia.",
        usage: "Se usa al estudiar idiomas, habilidades, programación o lecciones de vida.",
        examples: [
            { form: "Base / Infinitive", en: "I want to learn JavaScript.", es: "Quiero aprender JavaScript." },
            { form: "Past Simple", en: "She learned to swim last year.", es: "Ella aprendió a nadar el año pasado." },
            { form: "Past Participle", en: "We have learned valuable lessons.", es: "Hemos aprendido valiosas lecciones." },
            { form: "Gerund (-ing)", en: "Learning is a lifelong process.", es: "Aprender es un proceso de por vida." },
            { form: "Third Person (-s)", en: "He learns languages quickly.", es: "Él aprende idiomas rápidamente." }
        ]
    },
    {
        verb: "Leave",
        translation: "Dejar / Irse / Salir",
        type: "irregular",
        popular: false,
        forms: { base: "leave", past: "left", participle: "left", gerund: "leaving", third: "leaves" },
        definition: "Partir de un lugar, o dejar un objeto en un sitio determinado.",
        usage: "Se usa al salir de casa, despedirse o dejar pertenencias.",
        examples: [
            { form: "Base / Infinitive", en: "What time do you leave home?", es: "¿A qué hora sales de casa?" },
            { form: "Past Simple", en: "He left his jacket at the office.", es: "Él dejó su chaqueta en la oficina." },
            { form: "Past Participle", en: "Everyone has already left.", es: "Todos ya se han ido." },
            { form: "Gerund (-ing)", en: "Leaving early avoids traffic.", es: "Salir temprano evita el tráfico." },
            { form: "Third Person (-s)", en: "The train leaves at 5 PM.", es: "El tren sale a las 5 PM." }
        ]
    },
    {
        verb: "Like",
        translation: "Gustar",
        type: "regular",
        popular: false,
        forms: { base: "like", past: "liked", participle: "liked", gerund: "liking", third: "likes" },
        definition: "Sentir agrado, placer o simpatía por algo o alguien.",
        usage: "Muy frecuente al expresar preferencias personales, hobbies o afinidades.",
        examples: [
            { form: "Base / Infinitive", en: "Do you like coffee?", es: "¿Te gusta el café?" },
            { form: "Past Simple", en: "I liked the movie a lot.", es: "Me gustó mucho la película." },
            { form: "Past Participle", en: "Her design was widely liked.", es: "Su diseño fue muy del agrado de todos." },
            { form: "Gerund (-ing)", en: "I like coding in the evening.", es: "Me gusta programar por la noche." },
            { form: "Third Person (-s)", en: "She likes reading books.", es: "A ella le gusta leer libros." }
        ]
    },
    {
        verb: "Listen",
        translation: "Escuchar",
        type: "regular",
        popular: false,
        forms: { base: "listen", past: "listened", participle: "listened", gerund: "listening", third: "listens" },
        definition: "Prestar atención voluntaria a un sonido o lo que alguien dice.",
        usage: "Diferente a 'hear' (oír); implica concentración activa (ej: escuchar música, escuchar consejos).",
        examples: [
            { form: "Base / Infinitive", en: "Listen to my advice.", es: "Escucha mi consejo." },
            { form: "Past Simple", en: "He listened to music all day.", es: "Él escuchó música todo el día." },
            { form: "Past Participle", en: "Have you listened to this song?", es: "¿Has escuchado esta canción?" },
            { form: "Gerund (-ing)", en: "Listening is an essential skill.", es: "Escuchar es una habilidad esencial." },
            { form: "Third Person (-s)", en: "She listens carefully.", es: "Ella escucha atentamente." }
        ]
    },
    {
        verb: "Live",
        translation: "Vivir",
        type: "regular",
        popular: false,
        forms: { base: "live", past: "lived", participle: "lived", gerund: "living", third: "lives" },
        definition: "Tener vida, residir en un lugar o pasar la existencia de cierta manera.",
        usage: "Se usa para hablar de domicilios, ciudades de residencia y estilos de vida.",
        examples: [
            { form: "Base / Infinitive", en: "Where do you want to live?", es: "¿Dónde quieres vivir?" },
            { form: "Past Simple", en: "They lived in Spain for 3 years.", es: "Vivieron en España durante 3 años." },
            { form: "Past Participle", en: "He has lived a great life.", es: "Él ha vivido una gran vida." },
            { form: "Gerund (-ing)", en: "Living abroad is an adventure.", es: "Vivir en el extranjero es una aventura." },
            { form: "Third Person (-s)", en: "She lives in Margarita.", es: "Ella vive en Margarita." }
        ]
    },
    {
        verb: "Look",
        translation: "Mirar / Ver",
        type: "regular",
        popular: false,
        forms: { base: "look", past: "looked", participle: "looked", gerund: "looking", third: "looks" },
        definition: "Dirigir la vista hacia algo, o tener una apariencia determinada.",
        usage: "Se usa para llamar la atención visual ('look!') o describir cómo se ve algo/alguien.",
        examples: [
            { form: "Base / Infinitive", en: "Look at the screen.", es: "Mira a la pantalla." },
            { form: "Past Simple", en: "He looked for his glasses everywhere.", es: "Él buscó sus lentes por todas partes." },
            { form: "Past Participle", en: "Everything has been looked at.", es: "Todo ha sido revisado." },
            { form: "Gerund (-ing)", en: "What are you looking at?", es: "¿Qué estás mirando?" },
            { form: "Third Person (-s)", en: "She looks happy today.", es: "Ella se ve feliz hoy." }
        ]
    },
    // --- M ---
    {
        verb: "Make",
        translation: "Hacer / Fabricar / Crear",
        type: "irregular",
        popular: true,
        forms: { base: "make", past: "made", participle: "made", gerund: "making", third: "makes" },
        definition: "Implica crear, construir, elaborar algo físico o intangible a partir de elementos previos, o causar un efecto.",
        usage: "Se usa para manualidades, comida, decisiones, llamadas telefónicas o cuando produces un resultado.",
        examples: [
            { form: "Base / Infinitive", en: "I want to make a web app.", es: "Quiero hacer una aplicación web." },
            { form: "Past Simple", en: "She made a delicious cake.", es: "Ella hizo un pastel delicioso." },
            { form: "Past Participle", in: "This phone was made in Japan.", es: "Este teléfono fue hecho en Japón." },
            { form: "Gerund (-ing)", en: "Making mistakes helps you learn.", es: "Cometer errores te ayuda a aprender." },
            { form: "Third Person (-s)", en: "He makes me laugh.", es: "Él me hace reír." }
        ]
    },
    {
        verb: "Meet",
        translation: "Conocer / Encontrarse con",
        type: "irregular",
        popular: false,
        forms: { base: "meet", past: "met", participle: "met", gerund: "meeting", third: "meets" },
        definition: "Tener un encuentro con alguien por primera vez o de forma planeada.",
        usage: "Se usa en saludos ('Nice to meet you') y reuniones de trabajo o amigos.",
        examples: [
            { form: "Base / Infinitive", en: "Nice to meet you.", es: "Mucho gusto en conocerte." },
            { form: "Past Simple", en: "We met at university.", es: "Nos conocimos en la universidad." },
            { form: "Past Participle", en: "Have you met my brother?", es: "¿Has conocido a mi hermano?" },
            { form: "Gerund (-ing)", en: "Meeting new people is exciting.", es: "Conocer gente nueva es emocionante." },
            { form: "Third Person (-s)", en: "He meets clients on Mondays.", es: "Él se reúne con clientes los lunes." }
        ]
    },
    {
        verb: "Move",
        translation: "Mover / Moverse / Mudarse",
        type: "regular",
        popular: false,
        forms: { base: "move", past: "moved", participle: "moved", gerund: "moving", third: "moves" },
        definition: "Cambiar de lugar o posición un objeto, el cuerpo, o cambiar de residencia.",
        usage: "Se usa para mudanzas de casa, movimiento físico o control de interfaz.",
        examples: [
            { form: "Base / Infinitive", en: "We need to move this table.", es: "Necesitamos mover esta mesa." },
            { form: "Past Simple", en: "They moved to a new city.", es: "Se mudaron a una nueva ciudad." },
            { form: "Past Participle", en: "The furniture has been moved.", es: "Los muebles han sido movidos." },
            { form: "Gerund (-ing)", en: "Moving takes a lot of effort.", es: "Mudarse toma mucho esfuerzo." },
            { form: "Third Person (-s)", en: "He moves fast.", es: "Él se mueve rápido." }
        ]
    },
    // --- P ---
    {
        verb: "Play",
        translation: "Jugar / Tocar (instrumento)",
        type: "regular",
        popular: false,
        forms: { base: "play", past: "played", participle: "played", gerund: "playing", third: "plays" },
        definition: "Realizar una actividad recreativa, deporte, videojuego o interpretar un instrumento musical.",
        usage: "Se usa en deportes (play football), videojuegos (play Minecraft) y música (play guitar).",
        examples: [
            { form: "Base / Infinitive", en: "Do you want to play chess?", es: "¿Quieres jugar ajedrez?" },
            { form: "Past Simple", en: "We played football yesterday.", es: "Jugamos fútbol ayer." },
            { form: "Past Participle", en: "The match was played in the rain.", es: "El partido se jugó bajo la lluvia." },
            { form: "Gerund (-ing)", en: "Playing video games is fun.", es: "Jugar videojuegos es divertido." },
            { form: "Third Person (-s)", en: "He plays the guitar well.", es: "Él toca la guitarra muy bien." }
        ]
    },
    // --- R ---
    {
        verb: "Read",
        translation: "Leer",
        type: "irregular",
        popular: false,
        forms: { base: "read", past: "read (pron. red)", participle: "read (pron. red)", gerund: "reading", third: "reads" },
        definition: "Interpretar símbolos escritos o texto para comprender su significado.",
        usage: "Se usa para libros, artículos, código fuente o mensajes.",
        examples: [
            { form: "Base / Infinitive", en: "I like to read books.", es: "Me gusta leer libros." },
            { form: "Past Simple", en: "She read a great novel last week.", es: "Ella leyó una gran novela la semana pasada." },
            { form: "Past Participle", en: "I have read that documentation.", es: "He leído esa documentación." },
            { form: "Gerund (-ing)", en: "Reading improves vocabulary.", es: "Leer mejora el vocabulario." },
            { form: "Third Person (-s)", en: "He reads the news every morning.", es: "Él lee las noticias todas las mañanas." }
        ]
    },
    {
        verb: "Run",
        translation: "Correr / Funcionar (programa)",
        type: "irregular",
        popular: false,
        forms: { base: "run", past: "ran", participle: "run", gerund: "running", third: "runs" },
        definition: "Desplazarse rápidamente con las piernas, o ejecutar un proceso o software.",
        usage: "Se usa en deportes, ejercicio aeróbico y ejecución de programas informáticos ('run a script').",
        examples: [
            { form: "Base / Infinitive", en: "I like to run in the morning.", es: "Me gusta correr por la mañana." },
            { form: "Past Simple", en: "He ran a marathon last year.", es: "Él corrió un maratón el año pasado." },
            { form: "Past Participle", en: "The program has already run.", es: "El programa ya se ha ejecutado." },
            { form: "Gerund (-ing)", en: "Running is great cardio.", es: "Correr es un excelente ejercicio cardiovascular." },
            { form: "Third Person (-s)", en: "She runs a tech company.", es: "Ella dirige (administra) una empresa de tecnología." }
        ]
    },
    // --- S ---
    {
        verb: "Say",
        translation: "Decir / Expresar",
        type: "irregular",
        popular: false,
        forms: { base: "say", past: "said", participle: "said", gerund: "saying", third: "says" },
        definition: "Pronunciar palabras, expresar opiniones o transmitir un mensaje verbal.",
        usage: "Se usa para citas textuales y opiniones directas.",
        examples: [
            { form: "Base / Infinitive", en: "What did you say?", es: "¿Qué dijiste?" },
            { form: "Past Simple", en: "She said she was tired.", es: "Ella dijo que estaba cansada." },
            { form: "Past Participle", en: "As I have said before...", es: "Como he dicho antes..." },
            { form: "Gerund (-ing)", en: "Actions are louder than saying things.", es: "Las acciones hablan más fuerte que las palabras." },
            { form: "Third Person (-s)", en: "He always says the truth.", es: "Él siempre dice la verdad." }
        ]
    },
    {
        verb: "See",
        translation: "Ver",
        type: "irregular",
        popular: false,
        forms: { base: "see", past: "saw", participle: "seen", gerund: "seeing", third: "sees" },
        definition: "Percibir objetos o el entorno a través de los ojos, o comprender algo.",
        usage: "Uso visual general, encuentros y comprensión ('I see').",
        examples: [
            { form: "Base / Infinitive", en: "I want to see the new movie.", es: "Quiero ver la nueva película." },
            { form: "Past Simple", en: "I saw a shooting star last night.", es: "Vi una estrella fugaz anoche." },
            { form: "Past Participle", en: "Have you ever seen snow?", es: "¿Has visto alguna vez la nieve?" },
            { form: "Gerund (-ing)", en: "Seeing is believing.", es: "Ver es creer." },
            { form: "Third Person (-s)", en: "She sees things differently.", es: "Ella ve las cosas de manera diferente." }
        ]
    },
    {
        verb: "Speak",
        translation: "Hablar / Conversar",
        type: "irregular",
        popular: false,
        forms: { base: "speak", past: "spoke", participle: "spoken", gerund: "speaking", third: "speaks" },
        definition: "Producir sonidos articulados o comunicarse en un idioma.",
        usage: "Se usa para idiomas (speak English), conferencias y conversaciones formales.",
        examples: [
            { form: "Base / Infinitive", en: "Can you speak slower, please?", es: "¿Puedes hablar más lento, por favor?" },
            { form: "Past Simple", en: "He spoke at the conference.", es: "Él habló en la conferencia." },
            { form: "Past Participle", en: "English is spoken worldwide.", es: "El inglés se habla en todo el mundo." },
            { form: "Gerund (-ing)", en: "Speaking in public is easy with practice.", es: "Hablar en público es fácil con práctica." },
            { form: "Third Person (-s)", en: "She speaks three languages.", es: "Ella habla tres idiomas." }
        ]
    },
    {
        verb: "Study",
        translation: "Estudiar",
        type: "regular",
        popular: false,
        forms: { base: "study", past: "studied", participle: "studied", gerund: "studying", third: "studies" },
        definition: "Aplicar la inteligencia y el esfuerzo para adquirir conocimientos sobre una materia.",
        usage: "Se usa en contextos académicos, profesionales o de investigación.",
        examples: [
            { form: "Base / Infinitive", en: "I need to study for the exam.", es: "Necesito estudiar para el examen." },
            { form: "Past Simple", en: "She studied computer science.", es: "Ella estudió informática." },
            { form: "Past Participle", en: "The case has been carefully studied.", es: "El caso ha sido estudiado cuidadosamente." },
            { form: "Gerund (-ing)", en: "Studying everyday guarantees success.", es: "Estudiar todos los días garantiza el éxito." },
            { form: "Third Person (-s)", en: "He studies math at university.", es: "Él estudia matemáticas en la universidad." }
        ]
    },
    // --- T ---
    {
        verb: "Take",
        translation: "Tomar / Llevar / Coger",
        type: "irregular",
        popular: true,
        forms: { base: "take", past: "took", participle: "taken", gerund: "taking", third: "takes" },
        definition: "Agarrar, aceptar, transportar algo o a alguien, o requerir un tiempo determinado.",
        usage: "Común en expresiones con transporte, tiempo, fotos, decisiones o medicamentos.",
        examples: [
            { form: "Base / Infinitive", en: "You need to take a break.", es: "Necesitas tomar un descanso." },
            { form: "Past Simple", en: "He took my phone by mistake.", es: "Él tomó mi teléfono por error." },
            { form: "Past Participle", en: "Someone has taken my seat.", es: "Alguien ha tomado mi asiento." },
            { form: "Gerund (-ing)", en: "Taking photos is my hobby.", es: "Tomar fotos es mi pasatiempo." },
            { form: "Third Person (-s)", en: "It takes 20 minutes to arrive.", es: "Toma 20 minutos llegar." }
        ]
    },
    {
        verb: "Think",
        translation: "Pensar / Creer",
        type: "irregular",
        popular: false,
        forms: { base: "think", past: "thought", participle: "thought", gerund: "thinking", third: "thinks" },
        definition: "Formar ideas, reflexionar, opinar o procesar información mentalmente.",
        usage: "Se usa para expresar opiniones ('I think...') y procesos de razonamiento.",
        examples: [
            { form: "Base / Infinitive", en: "Think before you speak.", es: "Piensa antes de hablar." },
            { form: "Past Simple", en: "I thought it was a great idea.", es: "Pensé que era una gran idea." },
            { form: "Past Participle", en: "It was well thought out.", es: "Estaba bien pensado." },
            { form: "Gerund (-ing)", en: "Thinking positively changes your day.", es: "Pensar en positivo cambia tu día." },
            { form: "Third Person (-s)", en: "She thinks about her future.", es: "Ella piensa en su futuro." }
        ]
    },
    // --- W ---
    {
        verb: "Work",
        translation: "Trabajar / Funcionar",
        type: "regular",
        popular: false,
        forms: { base: "work", past: "worked", participle: "worked", gerund: "working", third: "works" },
        definition: "Desempeñar una labor profesional, o hacer que un mecanismo u objeto funcione correctamente.",
        usage: "Se usa para empleos, tareas y funcionamiento de aparatos o código.",
        examples: [
            { form: "Base / Infinitive", en: "I want to work remotely.", es: "Quiero trabajar de forma remota." },
            { form: "Past Simple", en: "He worked hard all week.", es: "Él trabajó duro toda la semana." },
            { form: "Past Participle", en: "She has worked here for 5 years.", es: "Ella ha trabajado aquí por 5 años." },
            { form: "Gerund (-ing)", en: "Working in a team is rewarding.", es: "Trabajar en equipo es gratificante." },
            { form: "Third Person (-s)", en: "My code finally works!", es: "¡Mi código por fin funciona!" }
        ]
    },
    {
        verb: "Write",
        translation: "Escribir",
        type: "irregular",
        popular: false,
        forms: { base: "write", past: "wrote", participle: "written", gerund: "writing", third: "writes" },
        definition: "Representar palabras o ideas mediante letras o signos en una superficie o medio digital.",
        usage: "Se usa para cartas, libros, código, correos electrónicos o mensajes.",
        examples: [
            { form: "Base / Infinitive", en: "I need to write an email.", es: "Necesito escribir un correo electrónico." },
            { form: "Past Simple", en: "She wrote a beautiful poem.", es: "Ella escribió un hermoso poema." },
            { form: "Past Participle", en: "The book was written in 2020.", es: "El libro fue escrito en 2020." },
            { form: "Gerund (-ing)", en: "Writing clean code is important.", es: "Escribir código limpio es importante." },
            { form: "Third Person (-s)", en: "He writes articles for a blog.", es: "Él escribe artículos para un blog." }
        ]
    }
];

let currentFilterType = 'all';
let currentLetter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    renderPopularVerbs();
    renderAlphabetNav();
    renderVerbs();

    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        currentLetter = 'all';
        renderVerbs();
    });
});

function renderPopularVerbs() {
    const container = document.getElementById('popularVerbsContainer');
    const populars = verbsData.filter(v => v.popular);
    
    container.innerHTML = populars.map(v => `
        <button onclick="selectVerbDirectly('${v.verb}')" class="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700/80 hover:border-indigo-500 text-xs font-semibold text-slate-200 transition-all flex items-center gap-1.5 shadow-sm">
            <span class="text-indigo-400 font-bold">${v.verb}</span>
            <span class="text-slate-400 text-[10px]">(${v.translation})</span>
        </button>
    `).join('');
}

function renderAlphabetNav() {
    const nav = document.getElementById('alphabetNav');
    const letters = ['all', ...Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))];

    nav.innerHTML = letters.map(l => `
        <button onclick="setAlphabetFilter('${l}')" id="alpha-${l}" class="px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${currentLetter === l ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700 hover:text-slate-200'}">
            ${l === 'all' ? 'TODOS' : l}
        </button>
    `).join('');
}

function setFilterType(type) {
    currentFilterType = type;
    
    document.getElementById('btnFilterAll').className = `px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${type === 'all' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`;
    document.getElementById('btnFilterReg').className = `px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${type === 'regular' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`;
    document.getElementById('btnFilterIrreg').className = `px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${type === 'irregular' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`;

    const badgeText = type === 'all' ? 'Mostrando todos los verbos' : (type === 'regular' ? 'Mostrando solo verbos regulares' : 'Mostrando solo verbos irregulares');
    document.getElementById('activeFilterBadge').innerText = badgeText;

    renderVerbs();
}

function setAlphabetFilter(letter) {
    currentLetter = letter;
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    renderAlphabetNav();
    renderVerbs();
}

function selectVerbDirectly(verbName) {
    searchQuery = verbName.toLowerCase();
    currentLetter = 'all';
    document.getElementById('searchInput').value = verbName;
    renderAlphabetNav();
    renderVerbs();
}

function toggleCard(cardId) {
    const details = document.getElementById(`details-${cardId}`);
    const icon = document.getElementById(`icon-${cardId}`);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        details.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

function renderVerbs() {
    const container = document.getElementById('verbsContainer');
    
    let filtered = verbsData.filter(v => {
        const matchesType = currentFilterType === 'all' || v.type === currentFilterType;
        const matchesLetter = currentLetter === 'all' || v.verb.toUpperCase().startsWith(currentLetter);
        const matchesSearch = searchQuery === '' || 
            v.verb.toLowerCase().includes(searchQuery) || 
            v.translation.toLowerCase().includes(searchQuery) ||
            v.definition.toLowerCase().includes(searchQuery);
        return matchesType && matchesLetter && matchesSearch;
    });

    document.getElementById('verbCount').innerText = `${filtered.length} verbo${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 bg-slate-900/30 border border-slate-800 rounded-2xl">
                <p class="text-slate-400 text-sm">No se encontraron verbos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map((v, index) => {
        const cardId = `verb-${index}`;
        const badgeColor = v.type === 'regular' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        
        return `
            <div class="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all shadow-md overflow-hidden">
                <div onclick="toggleCard('${cardId}')" class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                    <div class="flex items-start sm:items-center gap-4">
                        <div class="bg-indigo-600/10 border border-indigo-500/20 px-3.5 py-2 rounded-xl text-indigo-400 font-bold text-base tracking-wide">
                            ${v.verb}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h4 class="text-lg font-bold text-white">${v.translation}</h4>
                                <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${badgeColor}">${v.type}</span>
                            </div>
                            <p class="text-xs text-slate-400 mt-0.5 line-clamp-1">${v.definition}</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                        <span class="text-xs text-indigo-400 font-medium">Toca para abrir</span>
                        <div id="icon-${cardId}" class="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-300">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div id="details-${cardId}" class="hidden border-t border-slate-800/80 bg-slate-950/40 p-5 space-y-6">
                    <div>
                        <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">Formas Gramaticales</h5>
                        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                            <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                                <span class="block text-[10px] text-slate-400 uppercase font-semibold">Base / Inf</span>
                                <span class="text-sm font-bold text-slate-200">${v.forms.base}</span>
                            </div>
                            <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                                <span class="block text-[10px] text-slate-400 uppercase font-semibold">Past Simple</span>
                                <span class="text-sm font-bold text-slate-200">${v.forms.past}</span>
                            </div>
                            <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                                <span class="block text-[10px] text-slate-400 uppercase font-semibold">Past Participle</span>
                                <span class="text-sm font-bold text-slate-200">${v.forms.participle}</span>
                            </div>
                            <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                                <span class="block text-[10px] text-slate-400 uppercase font-semibold">Gerund (-ing)</span>
                                <span class="text-sm font-bold text-slate-200">${v.forms.gerund}</span>
                            </div>
                            <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center col-span-2 sm:col-span-1">
                                <span class="block text-[10px] text-slate-400 uppercase font-semibold">3rd Person (-s)</span>
                                <span class="text-sm font-bold text-slate-200">${v.forms.third}</span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                            <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5 flex items-center gap-1.5">
                                <span>📖</span> Definición
                            </h5>
                            <p class="text-xs text-slate-300 leading-relaxed">${v.definition}</p>
                        </div>
                        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                            <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1.5 flex items-center gap-1.5">
                                <span>💡</span> ¿Cuándo se usa?
                            </h5>
                            <p class="text-xs text-slate-300 leading-relaxed">${v.usage}</p>
                        </div>
                    </div>

                    <div>
                        <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">Ejemplos de Uso en Todas sus Formas</h5>
                        <div class="space-y-2">
                            ${v.examples.map(ex => `
                                <div class="bg-slate-900 border border-slate-800/80 p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div class="space-y-0.5">
                                        <span class="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 inline-block">${ex.form}</span>
                                        <p class="text-xs font-medium text-slate-200">${ex.en}</p>
                                    </div>
                                    <span class="text-xs text-slate-400 italic sm:text-right">${ex.es}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}