document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.hash !== '') {
                event.preventDefault();
                const hash = link.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example interactive functionality
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, index * 200);
    });

    // Chatbot functionality
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotBtn = document.getElementById('open-chatbot-btn');
    const closeChatbotBtn = document.getElementById('close-chatbot');

    openChatbotBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex';
        openChatbotBtn.style.display = 'none';
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
        openChatbotBtn.style.display = 'block';
    });

    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const userMessage = event.target.value;
            const messageElement = document.createElement('div');
            messageElement.textContent = userMessage;
            messageElement.style.backgroundColor = '#f1f1f1';
            messageElement.style.padding = '5px';
            messageElement.style.margin = '5px 0';
            messageElement.style.borderRadius = '5px';
            chatbotMessages.appendChild(messageElement);
            event.target.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botMessageElement = document.createElement('div');
                botMessageElement.textContent = 'This is a bot response.';
                botMessageElement.style.backgroundColor = '#e0e0e0';
                botMessageElement.style.padding = '5px';
                botMessageElement.style.margin = '5px 0';
                botMessageElement.style.borderRadius = '5px';
                chatbotMessages.appendChild(botMessageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 1000);
        }
    });
});
