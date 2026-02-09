document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    // Gestion du menu burger pour mobile
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Fermer le menu burger quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav) {
                nav.classList.remove('active');
            }
        });
    });

    // Gestion du formulaire WhatsApp
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        // Configuration de la date minimum pour le formulaire (aujourd'hui)
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);

        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;
            
            // Formatage de la date en français
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Création du message WhatsApp
            const whatsappMessage = `Bonjour, je souhaite réserver une table au restaurant Gusteau's.%0A%0A` +
                                   `*Nom:* ${name}%0A` +
                                   `*Téléphone:* ${phone}%0A` +
                                   `*Date souhaitée:* ${formattedDate}%0A` +
                                   `*Heure souhaitée:* ${time}%0A` +
                                   `*Nombre de personnes:* ${guests}%0A` +
                                   `*Message:* ${message || 'Aucun message supplémentaire'}`;
            
            // Numéro de téléphone du restaurant (remplacez par le vrai numéro)
            const restaurantPhone = '242067865283'; // Format international: 33123456789 pour la France
            
            // Création du lien WhatsApp
            const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${whatsappMessage}`;
            
            // Ouverture de WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Réinitialisation du formulaire
            whatsappForm.reset();
        });
    }
});