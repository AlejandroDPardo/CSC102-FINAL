document.getElementById('highlightButton').addEventListener('click', function() {
    // Get all table rows from tbody
    const rows = document.querySelectorAll('#peopleTable tbody tr');
    
    // Loop through rows to check age
    rows.forEach(row => {
        const age = parseInt(row.cells[2].innerText); // Age is in the 3rd cell (index 2)
        
        if (age > 25) {
            // Highlight row with a background color
            row.style.backgroundColor = '#ffcc80';
        }
    });
});
