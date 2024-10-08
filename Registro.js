const $form = document.querySelector('.contact-form');
const $submitButton = document.querySelector('.submit-button');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    
    // Deshabilitar el botón de envío y cambiar su texto
    $submitButton.disabled = true;
    $submitButton.textContent = 'Enviando...';

    const form = new FormData(this);
    
    try {
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Limpiar el formulario
            this.reset();
            
            // Mostrar mensaje de éxito
            showMessage('Gracias por contactarnos.', 'success');
        } else {
            // Mostrar mensaje de error
            showMessage('Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
        }
    } catch (error) {
        // Mostrar mensaje de error en caso de fallo en la conexión
        showMessage('Error de conexión. Por favor, verifica tu internet y vuelve a intentar.', 'error');
    } finally {
        // Rehabilitar el botón de envío y restaurar su texto original
        $submitButton.disabled = false;
        $submitButton.textContent = 'Enviar';
    }
}

function showMessage(message, type) {
    // Crear elemento para el mensaje
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    
    // Insertar el mensaje después del formulario
    $form.parentNode.insertBefore(messageElement, $form.nextSibling);
    
    // Remover el mensaje después de 5 segundos
    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}