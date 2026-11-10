<?php include "header.php"; ?>
    <main>
        <section class="portada contenedor">
            <h1>El auténtico sabor de la pizza artesanal a tu mesa</h1>
            <p>Horneadas a la piedra con ingredientes 100% frescos y naturales</p>
            <a href="servicios.php" class="boton">Ver Menú</a>
        </section>

        <section class="servicio contenedor">
            <h2>Especialidades de la Casa</h2>
            <div class="cards" id="cards">
                <!-- Las cards se inyectan dinámicamente con JavaScript -->
            </div>
        </section>

        <section class="preguntas contenedor">
          <h2>Preguntas Frecuentes</h2>
          <div class="accordion">
            <div class="item">
              <button class="titulo">¿De qué tamaño son las pizzas familiares?</button>
              <div class="contenido"><p>Nuestras pizzas familiares tienen un diámetro de 35 centímetros y rinden perfectamente para 4 o 5 personas.</p></div>
            </div>
            <div class="item">
              <button class="titulo">¿Tienen servicio express disponible?</button>
              <div class="contenido"><p>Sí, realizamos entregas a domicilio en toda la zona local con empaques térmicos para que llegue caliente.</p></div>
            </div>
            <div class="item">
              <button class="titulo">¿Puedo personalizar los ingredientes?</button>
              <div class="contenido"><p>Claro que sí, puedes armar tu pizza con tus ingredientes favoritos desde nuestra sección de pedidos.</p></div>
            </div>
          </div>
        </section>

        <?php include "galeria.php"; ?>
    </main> 
<?php include "footer.php"; ?>