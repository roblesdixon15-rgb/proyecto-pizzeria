<?php include "header.php"; ?>
    <main class="contenedor">
        <h1>Contacto y Pedidos</h1>
        <form action="enviar.php" method="POST" class="formulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="correo">Email:</label>
            <input type="email" id="correo" name="correo" required>

            <label for="mensaje">Mensaje o Pedido:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

            <button type="submit" class="boton">Enviar</button>
        </form>
        <p id="mensajes" style="color: red; margin-top: 1rem;"></p>
    </main> 
<?php include "footer.php"; ?>