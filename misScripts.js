document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('flipped');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('flipped');
    });

    card.addEventListener('click', () => {
      const url = card.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });
});
