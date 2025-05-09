
    document.addEventListener('DOMContentLoaded', () => {
      const questions = [
"¿Cuál ha sido tu peor cita y cómo escapaste de ella? Si no quieres responder, canta una canción ridículamente romántica.",
"¿Has tenido un crush con un profesor/a o jefe/a? ¿Qué hiciste al respecto? Si no quieres responder, haz un brindis por tus secretos.",
"¿Alguna vez stalkeaste tanto a alguien que te descubrieron? ¿Cómo fue? Si no quieres responder, deja que alguien publique un emoji aleatorio en tu historia.",
"¿Qué mentira inocente dijiste para gustarle a alguien? Si no quieres responder, haz una imitación ridícula de un famoso.",
"¿Has enviado un mensaje comprometedor a la persona equivocada? ¿Cuál fue? Si no quieres responder, muestra tu última búsqueda en Google.",
"¿Qué es lo más ridículo que hiciste por amor? Si no quieres responder, baila una canción lenta sin música.",
"¿Has sido víctima del peor beso de tu vida? ¿Cómo fue? Si no quieres responder, deja que alguien te maquille.",
"¿Cuál ha sido tu peor excusa para evitar una cita? Si no quieres responder, deja que alguien revise tu cámara frontal.",
"¿Te han hecho ghosting de forma épica? ¿Cómo reaccionaste? Si no quieres responder, haz una cara dramática durante 30 segundos.",
"¿Cuál fue tu última conversación incómoda con alguien que te gustaba? Si no quieres responder, recita un poema improvisado.",
"¿Te han pillado viendo algo vergonzoso en el celular? Si no quieres responder, cuenta en voz alta tu contraseña del celular.",
"¿Cuál ha sido tu peor momento de celos? Si no quieres responder, déjate peinar por alguien más.",
"¿Has llorado por alguien que ni siquiera fue tu pareja? ¿Por qué? Si no quieres responder, haz una escena de telenovela.",
"¿Has mandado un mensaje de “me gustas” y te dejaron en visto? Si no quieres responder, haz una coreografía con alguien.",
"¿Qué frase usaste para coquetear y luego te arrepentiste? Si no quieres responder, haz 10 abdominales.",
"¿Te ha gustado el ex de un amigo o amiga? ¿Qué hiciste? Si no quieres responder, di en voz alta el último sticker que usaste.",
"¿Cuál ha sido tu peor outfit para una cita? Si no quieres responder, deja que te pongan algo ridículo.",
"¿Has soñado con alguien del grupo? ¿Qué soñaste? Si no quieres responder, deja que alguien vea tu pantalla de inicio.",
"¿Has sido víctima de un malentendido romántico? ¿Cuál fue? Si no quieres responder, ponte un apodo que el grupo elija.",
"¿Cuál ha sido la confesión amorosa más inesperada que recibiste? Si no quieres responder, deja que alguien te pinte un corazón en la cara.",
"¿Cuál fue el beso más inesperado y cómo sucedió? Si no quieres responder, besa a alguien en la mejilla sin avisar.",
"¿Has seducido a alguien solo por diversión? ¿Cómo fue? Si no quieres responder, deja que alguien te haga una pregunta incómoda.",
"¿Cuál fue tu peor “cita hot fallida”? ¿Qué salió mal? Si no quieres responder, actúa cómo fue frente al grupo.",
"¿Has mandado un mensaje subido de tono por error? ¿Qué decía? Si no quieres responder, deja que alguien escriba una frase en tu celular.",
"¿Qué secreto hot nunca le has contado a nadie? Si no quieres responder, da un beso con los ojos cerrados a quien el grupo elija.",
"¿Qué dijiste mientras coqueteabas y fue demasiado? Si no quieres responder, muerde un objeto como si fuera alguien que te gusta.",
"¿Te gustó alguien en pareja? ¿Qué hiciste? Si no quieres responder, envía una selfie sensual a alguien del grupo.",
"¿Has hecho sexting? ¿Qué escribiste? Si no quieres responder, haz una pose provocativa por 10 segundos.",
"¿Te arrepientes de no haber besado a alguien? ¿Por qué? Si no quieres responder, di quién del grupo te genera más curiosidad.",
"¿Has provocado a alguien sin intención de seguir? ¿Qué pasó? Si no quieres responder, deja que alguien te acaricie la cara.",
"¿Qué pensamiento hot has tenido en una situación normal? Si no quieres responder, finge estar excitado por algo ridículo.",
"¿Has usado una excusa para tocar a alguien que te gustaba? ¿Cuál? Si no quieres responder, recibe un abrazo de 30 segundos.",
"¿Has sentido deseo por un desconocido en público? ¿Qué pasó? Si no quieres responder, haz contacto visual intenso 15 segundos.",
"¿Has fantaseado con alguien que no deberías? ¿Quién y por qué? Si no quieres responder, recibe un castigo suave.",
"¿Alguna vez deseaste a un amigo/a? ¿Qué hiciste? Si no quieres responder, siéntate en sus piernas durante un turno.",
"¿Cuál fue tu momento más 'esto no debería pasar'? Si no quieres responder, da un beso en la mano mientras dices 'te deseo'.",
"¿Has seducido con miradas? ¿Qué pasó después? Si no quieres responder, haz una pasarela de seducción.",
"¿Te arrepentiste de un beso en una fiesta? ¿Qué pasó? Si no quieres responder, baila sensual con la persona más cercana.",
"¿Has dejado con ganas a alguien solo por juego? Si no quieres responder, deja que escriban un piropo en tu Instagram.",
"¿Has ocultado que te gustaba alguien por orgullo? ¿Qué pasó? Si no quieres responder, besa un objeto como si fuera esa persona.",
"¿Cuál ha sido el lugar más atrevido donde tuviste sexo? Si no quieres responder, simula la escena con un cojín.",
"¿Has mandado nudes? ¿Cómo fue y qué causó? Si no quieres responder, posa como si fueras a tomarte una ahora.",
"¿Qué hiciste con alguien que apenas conocías y fue hot? Si no quieres responder, besa el cuello de quien tú elijas.",
"¿Has tenido sexo en casa ajena? ¿Quién vivía ahí? Si no quieres responder, recibe una nalgada suave.",
"¿Qué fantasía sexual cumpliste y fue inolvidable? Si no quieres responder, haz un striptease de una prenda.",
"¿Cuál es tu frase más sucia durante el sexo? Si no quieres responder, deja que alguien te la susurre.",
"¿Has tenido un 'rapidito' inolvidable? ¿Dónde fue? Si no quieres responder, finge uno frente al grupo.",
"¿Qué oral te hicieron que jamás olvidarás? ¿Por qué? Si no quieres responder, besa el dorso de tu mano.",
"¿Qué objeto cotidiano usarías como juguete sexual? Si no quieres responder, simula cómo lo usarías.",
"¿Has dicho un nombre equivocado en la cama? ¿Qué pasó? Si no quieres responder, cambia tu nombre por un turno.",
"¿Te has grabado teniendo sexo? ¿Cómo fue? Si no quieres responder, actúa como si grabaras uno ahora.",
"¿Has estado con un amigo/a íntimamente? ¿Cómo ocurrió? Si no quieres responder, besa a alguien donde el grupo decida.",
"¿Has tenido sexo mientras otra persona dormía cerca? Si no quieres responder, deja que alguien juegue con tu cabello.",
"¿Has sorprendido a alguien con lo que hiciste en la cama? Si no quieres responder, actúa ese momento.",
"¿Qué parte del cuerpo usas más en el sexo y por qué? Si no quieres responder, deja que alguien la toque.",
"¿Qué posición juraste nunca hacer y ahora te encanta? Si no quieres responder, dibújala en el aire.",
"¿Qué experiencia te hizo decir 'esto fue demasiado'? Si no quieres responder, adivina con los ojos vendados quién te toca.",
"¿Qué fantasía te mueres por cumplir? Si no quieres responder, actúala en mímica.",
"¿Has sido infiel por deseo físico? ¿Cómo fue? Si no quieres responder, besa a quien más te atraiga.",
"¿Cuál ha sido tu encuentro sexual más ruidoso? ¿Por qué? Si no quieres responder, imítalo por 5 segundos.",
"¿Has hecho un trío? Cuenta todo. Si no quieres responder, besa a dos personas en lugares distintos.",
"¿Has tenido sexo en un carro en movimiento? ¿Cómo fue? Si no quieres responder, simúlalo en una silla.",
"¿Te dieron oral mientras hablabas con alguien? Si no quieres responder, carga a alguien por 10 segundos.",
"¿Has usado comida en el sexo? ¿Cuál y cómo fue? Si no quieres responder, lame algo del cuerpo de alguien.",
"¿Cuál es tu video sexual favorito propio? Si no quieres responder, actúa como si lo grabaras ahora.",
"¿Has sido dominante o sumiso/a? ¿Qué hiciste? Si no quieres responder, recibe una orden hot del grupo.",
"¿Cuál fue tu encuentro sexual más largo? ¿Cuántas horas? Si no quieres responder, gime rendido/a.",
"¿Te has masturbado pensando en alguien aquí? ¿Quién? Si no quieres responder, deja que alguien te rete.",
"¿Has tenido sexo con alguien durmiendo cerca? Si no quieres responder, juega con el cabello de alguien.",
"¿Qué fue tan salvaje que aún no lo crees? Si no quieres responder, simula un orgasmo al oído de alguien.",
"¿Has estado con alguien del mismo sexo? ¿Cómo fue tu primera vez? Si no quieres responder, besa a alguien de tu mismo género en la boca o cuello.",
"¿Has hecho sexting tan intenso que terminó en un encuentro sexual? Relata todo. Si no quieres responder, muestra tu mensaje más hot sin decir a quién era.",
"¿Qué parte del cuerpo de una persona te excita más y por qué? Si no quieres responder, acaricia lentamente esa parte en alguien (con consentimiento).",
"¿Has sido grabado teniendo sexo sin darte cuenta? ¿Qué hiciste al saberlo? Si no quieres responder, graba un audio gemido y mándalo a alguien.",
"¿Te gusta que te dominen o dominar? ¿Cuál ha sido tu mejor experiencia en eso? Si no quieres responder, actúa el rol contrario durante 30 segundos.",
"¿Cuál es tu fantasía más tabú? ¿Qué la hace tan excitante? Si no quieres responder, deja que alguien escriba algo en tu piel con marcador.",
"¿Has tenido sexo en una piscina, playa o lugar poco higiénico? ¿Cómo fue? Si no quieres responder, bájate una prenda (ropa interior no obligatoria).",
"¿Alguna vez tuviste que escapar después de tener sexo? ¿Por qué? Si no quieres responder, actúa cómo escapaste mientras alguien te persigue.",
"¿Qué fue lo más salvaje que dijiste durante el sexo? Si no quieres responder, repite en voz alta una frase sexual inventada.",
"¿Has tenido sexo en un lugar público con alto riesgo? ¿Dónde y cómo fue? Si no quieres responder, deja que alguien finja pillarte y actúen juntos.",
"¿Has tenido sexo por venganza? ¿Cómo fue? Si no quieres responder, besa a alguien donde nunca besarías normalmente.",
"¿Has mezclado drogas o alcohol con sexo y fue épico? ¿Cómo fue? Si no quieres responder, simula la escena completamente ebrio/a.",
"¿Te ha excitado ver a otros teniendo sexo? ¿Qué hiciste? Si no quieres responder, haz que alguien te susurre algo sucio sin reírse.",
"¿Has probado prácticas BDSM? ¿Qué hiciste y cómo lo viviste? Si no quieres responder, ponte de rodillas y di 'haz conmigo lo que quieras'.",
"¿Cuál fue tu peor cita sexual? ¿Qué fue lo más incómodo? Si no quieres responder, haz una escena porno en modo comedia.",
"¿Has sentido placer con dolor? ¿Qué tipo y con quién? Si no quieres responder, deja que alguien te dé un azote con la mano.",
"¿Qué harías si ahora tuvieras 5 minutos a solas con quien más te gusta del grupo? Si no quieres responder, susurra al oído de esa persona lo que harías.",
"¿Alguna vez el sexo fue tan fuerte que te dolió después? ¿Qué pasó? Si no quieres responder, ponte en una posición sexual frente al grupo.",
"¿Qué objeto has usado como juguete sexual? ¿Cómo fue? Si no quieres responder, actúa cómo lo hiciste mientras todos adivinan.",
"¿Has sentido deseo por más de una persona al tiempo? ¿Qué hiciste con eso? Si no quieres responder, simula una escena de seducción grupal.",
"¿Has pagado o te han ofrecido dinero por sexo? ¿Qué hiciste? Si no quieres responder, deja que alguien te ofrezca “algo” y tú aceptas sensualmente.",
"¿Te han pedido algo sexual extremo? ¿Qué fue y lo hiciste? Si no quieres responder, deja que alguien te dé una orden arriesgada.",
"¿Tuviste un despertar sexual con alguien inesperado? ¿Cómo fue? Si no quieres responder, besa a la persona que te atrae sin decir palabra.",
"¿Cuál fue tu peor confesión hot? ¿Cómo reaccionó la otra persona? Si no quieres responder, recrea la escena con alguien del grupo.",
"¿Has sentido celos sexuales por alguien que no era tu pareja? ¿Qué hiciste? Si no quieres responder, grita 'mío' y abraza a quien más te gusta.",
"¿Qué harías si fueras invisible y pudieras estar con quien quieras? Si no quieres responder, descríbelo susurrando a alguien.",
"¿Cuál es el video porno más raro que viste y te gustó? Si no quieres responder, describe la categoría y deja que adivinen.",
"¿Qué experiencia sexual te hizo sentir más poderoso/a? Si no quieres responder, actúa como si fueras el/la mejor amante del mundo.",
"¿Has tenido sexo frente a un espejo? ¿Qué viste que más te excitó? Si no quieres responder, simula tu mejor mirada frente al espejo.",
"¿Cuál es tu límite sexual y por qué nunca lo cruzarías? Si no quieres responder, deja que alguien intente tentarte a cruzarlo (sin tocarte)."
      ];

      let players = [];
      let turn = 0;

      const playerInputs = document.getElementById('player-inputs');
      const addBtn = document.getElementById('add-player-btn');
      const startBtn = document.getElementById('start-btn');
      const registerScreen = document.getElementById('register-screen');
      const gameArea = document.getElementById('game-area');
      const turnDisplay = document.getElementById('turn-display');
      const cardEl = document.getElementById('card');
      const turnInfo = document.getElementById('turn-info');
      const questionEl = document.getElementById('question');
      const drinkEl = document.getElementById('drink-penalty');

      addBtn.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'player-input';
        input.placeholder = 'Nombre del jugador';
        playerInputs.appendChild(input);
      });

      startBtn.addEventListener('click', () => {
        players = Array.from(document.querySelectorAll('.player-input'))
          .map(i => i.value.trim())
          .filter(n => n);
        if (players.length < 2) {
          alert('Ingresa al menos dos jugadores.');
          return;
        }
        registerScreen.style.display = 'none';
        gameArea.style.display = 'flex';
        updateTurn();
      });

      cardEl.addEventListener('click', () => {
        if (!cardEl.classList.contains('flipped')) {
          turnInfo.innerText = `Turno de: ${players[turn]}`;
          questionEl.innerText = questions[Math.floor(Math.random() * questions.length)];
          drinkEl.innerText = `Si no quieres, tómate ${Math.floor(Math.random() * 7) + 2} tragos.`;
          turn = (turn + 1) % players.length;
          updateTurn();
        }
        cardEl.classList.toggle('flipped');
      });

      function updateTurn() {
        turnDisplay.innerText = `Siguiente: ${players[turn]}`;
      }
    });