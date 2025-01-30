function toggleMenu() {
    var navList = document.querySelector('#nav-list');
    navList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const filtersForm = document.getElementById('filters-form');
    const articles = document.querySelectorAll('.list article');
  
    filtersForm.addEventListener('change', function() {
      const selectedFilters = Array.from(filtersForm.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
  
      articles.forEach(article => {
        const articleCategory = article.getAttribute('data-category');
        if (selectedFilters.length === 0 || selectedFilters.includes(articleCategory)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
  