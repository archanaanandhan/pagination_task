function generatePagination(currentPage, totalPages) {
    const paginationContainer = document.createElement('ol');
    paginationContainer.id = 'pagination-id';
    paginationContainer.className='pagination';

    document.body.appendChild(paginationContainer);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className='pagination-item';

        const pageLink = document.createElement('a');
        pageLink.href = 'https://developer.mozilla.org/en-US/docs/Web/CSS'; 
        pageLink.textContent = i;
        pageLink.className='pagination-link';

        if (i === currentPage) {
            pageLink.className='active';
        }

        pageLink.addEventListener('click', function () {
            // Handle pagination click event (e.g., load new content)
            alert(`click link sucessfuly redirect ${i} and achive you pagination task`)
        });

        pageItem.appendChild(pageLink);
        paginationContainer.appendChild(pageItem);
    }
}

generatePagination(6,10);