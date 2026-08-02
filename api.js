const App = {
    addButton: function(text, url, imageUrl = null) {
        const container = document.getElementById('buttons-container');
        if (!container) return;

        const btn = document.createElement('a');
        btn.href = url;
        btn.className = 'custom-btn';
        btn.target = '_blank';
        
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.className = 'btn-icon';
            img.alt = '';
            btn.appendChild(img);
        }
        
        const btnText = document.createTextNode(text);
        btn.appendChild(btnText);
        container.appendChild(btn);
    }
};
