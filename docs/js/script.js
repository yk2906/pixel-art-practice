window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const totalImages = 2; 
  
    for (let i = 1; i <= totalImages; i++) {
      const card = document.createElement('div');
      card.className = 'art-card';
      card.innerHTML = `
        <figure>
          <img src="images/practice_${i}.png" alt="作品${i}">
        </figure>
        <div class="info">
          <h3>Practice #${i.toString().padStart(2, '0')}</h3>
        </div>
      `;
      gallery.appendChild(card);
    }
  });