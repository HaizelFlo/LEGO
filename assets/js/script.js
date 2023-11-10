/*----------- soltar y arrarstar-----------------------*/
var draggedImageCount = 0;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var target = ev.target;

  // Obtener el elemento arrastrado
  var draggedElement = document.getElementById(data);

  // Verificar si el elemento tiene la clase deseada y si el destino es uno de los contenedores
  if (
    draggedElement &&
    (target.classList.contains('zona-arrastables') || target.classList.contains('zona-arrastables2'))
  ) {
    // Verificar si el contenedor ya tiene una imagen antes de permitir agregar otra
    if (target.children.length === 0) {
      // Agregar el elemento arrastrado al destino del evento
      target.appendChild(draggedElement);

      // Incrementar el contador de imágenes arrastradas
      draggedImageCount++;

      // Mostrar el botón solo si hay al menos una imagen en ambos contenedores
      showButtons();
    } else {
      console.log('El contenedor ya contiene una imagen.');
    }
  }

  // Verificar si hay al menos una imagen en ambos divs
  if (
    document.getElementById('div1').getElementsByTagName('img').length > 0 &&
    document.getElementById('div2').getElementsByTagName('img').length > 0
  ) {
    // Habilitar la lógica para mostrar el botón de creación (puedes agregarlo según tu estructura)
    showCreateButton();
  } else {
    console.log('Se requiere al menos una imagen en cada div.');
  }
}

function showButtons() {
  // Mostrar los botones si hay al menos una imagen en ambos contenedores
  if (
    document.getElementById('div1').getElementsByTagName('img').length > 0 &&
    document.getElementById('div2').getElementsByTagName('img').length > 0
  ) {
    document.getElementById('remove-images').style.display = 'inline-block';
    document.getElementById('create-aleb').style.display = 'inline-block';
  }
}

function hideButtons() {
  // Ocultar los botones
  document.getElementById('remove-images').style.display = 'none';
  document.getElementById('create-aleb').style.display = 'none';
}

function showCreateButton() {
  // Lógica para mostrar el botón de creación
  document.getElementById('create-aleb').style.display = 'inline-block';
}

function removeImages() {
  // Limpiar las imágenes en ambos contenedores
  var containerIds = ['div1', 'div2'];
  containerIds.forEach(function(containerId) {
    var container = document.getElementById(containerId);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    document.getElementById('arrastrables').innerHTML =`
            <div class="row">
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true" >
                <img id="animal1" src="assets/img/animales/ARDILLA.png" ddraggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="ARDILLA"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal2" src="assets/img/animales/BUHO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="BUHO"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal3" src="assets/img/animales/DINOSAURIO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="DINOSAURIO"/>
              </div>
          
              <div class="w-100"></div>
  
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal4" src="assets/img/animales/CONEJO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="CONEJO"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal5" src="assets/img/animales/LEON.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="LEON"/>
              </div>
             <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal6" src="assets/img/animales/ZORRO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="ZORRO"/>
              </div>
              
              <div class="w-100"></div>
  
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal7" src="assets/img/animales/PATO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PATO"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal8" src="assets/img/animales/PEZ.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PEZ"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal9" src="assets/img/animales/UNICORNIO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="UNICORNIO"/>
              </div>
  
              <div class="w-100"></div>
  
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal10" src="assets/img/animales/PULPO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PULPO"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal11" src="assets/img/animales/SAPO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="SAPO"/>
              </div>
              <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
                <img id="animal12" src="assets/img/animales/COCODRILO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="COCODRILO"/>
              </div>
            </div> `
  });

  // Ocultar los botones después de eliminar las imágenes
  hideButtons();

  // Reiniciar el contador de imágenes arrastradas
  draggedImageCount = 0;
}

function removeDrop(ev) {
  // Lógica para quitar el estilo o realizar otras acciones al dejar de arrastrar
}


/*----------------- loaging--------------------------*/

tl = gsap.timeline({
	defaults: {
		duration: 1.0,
		ease: "expo.inOut"
	}
});

tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });

/*-----descargar imagen ---------------------*/
$(".btnDescargarAdjunto").click(function () {
  var data = $(this).parent().parent().parent().find('img').attr("src")
  var ruta = data;
  var enlace = document.createElement('a');
  enlace.href = ruta;
  enlace.download = ruta;
  document.body.appendChild(enlace);
  enlace.click();
  enlace.parentNode.removeChild(enlace);

});

/*------ recargar seccion hasta el principio---*/

window.addEventListener('beforeunload', function () {
  // Almacenar la posición actual de desplazamiento en el almacenamiento local
  localStorage.setItem('scrollPosition', window.scrollY.toString());
});

window.addEventListener('load', function () {
  // Obtener el fragmento de la URL
  var urlFragment = window.location.hash;

  // Verificar si el fragmento es "#orange"
  if (urlFragment === '#orange') {
      // Desplazarse a la sección correspondiente (en este caso, "#orange")
      scrollToSection('orange');
  } else {
      // Desplazarse a la posición superior (posición 0)
      window.scrollTo(0, 0);
  }
});

/*-----------scroll total--------------*/
function scrollToSection(sectionId) {
  // Encontrar el elemento con el ID de la sección
  var sectionElement = document.getElementById(sectionId);

  // Verificar si el elemento existe
  if (sectionElement) {
    // Calcular la posición del elemento con respecto al documento
    var offsetTop = sectionElement.offsetTop;

    // Desplazar la ventana a la posición del elemento
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}


/*------------- SEGUNDO SCROLL PARTE FINAL A AZUL------------*/
function limpiarYScroll() {
  try {
    // Verificar si se proporcionó una lista de IDs de contenedores
    var containerIds = ['div1', 'div2'];
    if (containerIds && containerIds.length > 0) {
      containerIds.forEach(function(containerId) {
        // Obtener el contenedor específico según el ID proporcionado
        var container = document.getElementById(containerId);

        // Verificar si el contenedor existe
        if (container) {
          // Limpiar las imágenes en el contenedor
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          document.getElementById('arrastrables').innerHTML =`
          <div class="row">
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true" >
            <img id="animal1" src="assets/img/animales/ARDILLA.png" ddraggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="ARDILLA"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal2" src="assets/img/animales/BUHO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="BUHO"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal3" src="assets/img/animales/DINOSAURIO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="DINOSAURIO"/>
          </div>
      
          <div class="w-100"></div>

          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal4" src="assets/img/animales/CONEJO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="CONEJO"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal5" src="assets/img/animales/LEON.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="LEON"/>
          </div>
         <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal6" src="assets/img/animales/ZORRO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="ZORRO"/>
          </div>
          
          <div class="w-100"></div>

          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal7" src="assets/img/animales/PATO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PATO"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal8" src="assets/img/animales/PEZ.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PEZ"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal9" src="assets/img/animales/UNICORNIO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="UNICORNIO"/>
          </div>

          <div class="w-100"></div>

          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal10" src="assets/img/animales/PULPO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="PULPO"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal11" src="assets/img/animales/SAPO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="SAPO"/>
          </div>
          <div class="col-lg-4 col-sm-4 arrastrable" draggable="true">
            <img id="animal12" src="assets/img/animales/COCODRILO.png" draggable="true" ondragstart="drag(event)" class="img-responsive alebrije" name="COCODRILO"/>
          </div>

        </div> `;

          // Reiniciar el contador de imágenes arrastradas para el contenedor específico
          if (containerId === 'div1' || containerId === 'div2') {
            draggedImageCount = 0;
          }

          // Ocultar los botones si no hay imágenes en el contenedor
          if (container.getElementsByClassName('alebrije').length === 0) {
            hideButtons();
          }
        } else {
          console.error('El contenedor con el ID ' + containerId + ' no se encontró en el documento.');
        }
      });

      // Hacer scroll al panel blue
      scrollToSectionByClass('blue');
    } else {
      console.error('Se requiere al menos un ID de contenedor para eliminar imágenes.');
    }
  } catch (error) {
    console.error('Error en limpiarYScroll:', error);
  }
}

/*-------------- DRAG AND DROP MOVIL -------------*/

