function changePage(step) {
  const prevPage = document.getElementById(`page${currentPage}`);
  prevPage.classList.remove('active');
  prevPage.classList.remove('fade-in');

  currentPage += step;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  const nextPage = document.getElementById(`page${currentPage}`);
  nextPage.classList.add('active');
  nextPage.classList.add('fade-in');
}
