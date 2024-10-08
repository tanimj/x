function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');
    
    if (commentInput.value.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <p>${commentInput.value}</p>
            <button onclick="addReply(this)">Responder</button>
        `;
        commentsContainer.prepend(commentDiv);
        commentInput.value = '';
    }
}

function addReply(button) {
    const replyInput = document.createElement('textarea');
    replyInput.rows = 2;
    replyInput.placeholder = 'Escribe tu respuesta aquí...';
    
    const sendReplyButton = document.createElement('button');
    sendReplyButton.textContent = 'Enviar Respuesta';
    sendReplyButton.onclick = function() {
        if (replyInput.value.trim() !== '') {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'reply';
            replyDiv.innerHTML = `<p>${replyInput.value}</p>`;
            button.parentElement.appendChild(replyDiv);
            replyInput.remove();
            sendReplyButton.remove();
        }
    };
    
    button.parentElement.appendChild(replyInput);
    button.parentElement.appendChild(sendReplyButton);
    button.disabled = true;
}
