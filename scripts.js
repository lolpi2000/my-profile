document.addEventListener('DOMContentLoaded', function() {
    // Liste des skins avec leurs images
       const skins = [
    { name: "Peely", img: "https://th.bing.com/th/id/OIP.AVZa-8KkLoc7jgRawKNrNAHaEK?cb=iwp1&rs=1&pid=ImgDetMain" },
    { name: "Raven", img: "https://th.bing.com/th/id/R.ac2d58bff243b8d6721c7b3db0e2f295?rik=hIo73F695UXsgg&pid=ImgRaw&r=0" },
    { name: "Midas", img: "https://th.bing.com/th/id/OIP.xqOFzUu3PanqSDX0_P1PPAHaMR?cb=iwp1&rs=1&pid=ImgDetMain" }
];


    // Récupérer l'élément de la galerie de skins
    const skinsGallery = document.getElementById('skins-gallery');

    // Ajouter les skins dynamiquement
    skins.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.classList.add('skin');
        skinElement.innerHTML = `
            <img src="${skin.img}" alt="${skin.name}">
            <p>${skin.name}</p>
        `;
        skinsGallery.appendChild(skinElement);
    });

    // Exemple pour afficher des actualités (simples données en dur)
    const news = [
        "Nouvelle maps de jeu disponible !",
        "Des skin de la saison 1 sont de retour.",
        "Mise à jour importante dans la saison 3 OG."
    ];

    const newsFeed = document.getElementById('news-feed');
    news.forEach(article => {
        const newsItem = document.createElement('p');
        newsItem.textContent = article;
        newsFeed.appendChild(newsItem);
    });
});
