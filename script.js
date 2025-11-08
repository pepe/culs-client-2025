// Ensure the script runs only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* --- DOM ELEMENT SELECTIONS --- */
    
    // Interactive Section (Color Toggle)
    const interactionBox = document.querySelector('.interaction-box');
    const messageArea = document.getElementById('messageArea');
    const colorChangeBtn = document.getElementById('colorChangeBtn');

    // Modal Elements (The new parts)
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const simpleModal = document.getElementById('simpleModal'); // The modal overlay

    // Form Elements
    const dataForm = document.getElementById('dataForm');
    const formFeedback = document.getElementById('formFeedback');


    /* --- 1. MODAL FUNCTIONALITY --- */

    // Function to open the modal
    const openModal = () => {
        // Adds the 'is-visible' class, which sets display: flex in CSS
        simpleModal.classList.add('is-visible');
    };

    // Function to close the modal
    const closeModal = () => {
        // Removes the 'is-visible' class, reverting to display: none
        simpleModal.classList.remove('is-visible');
    };

    // Attach event listeners for modal buttons
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Optional: Close modal if user clicks outside of the modal content
    simpleModal.addEventListener('click', (e) => {
        if (e.target === simpleModal) {
            closeModal();
        }
    });


    /* --- 2. FORM SUBMISSION FUNCTIONALITY --- */
    
    dataForm.addEventListener('submit', (e) => {
        // Prevent the default browser submission behavior (page reload)
        e.preventDefault(); 
        
        // Get form data (you'd send this to a server in a real app)
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        
        // Display feedback and open the modal
        formFeedback.textContent = `Data submitted! User: ${username}, Email: ${email}`;
        formFeedback.style.color = 'green';
        
        // Open the modal to confirm submission
        openModal();

        // Clear the form after submission
        dataForm.reset(); 
    });


    /* --- 3. COLOR TOGGLE FUNCTIONALITY (from previous steps) --- */

    const handleButtonClick = () => {
        interactionBox.classList.toggle('state-yellow');
        interactionBox.classList.toggle('state-green');

        const isGreen = interactionBox.classList.contains('state-green');
        messageArea.textContent = isGreen
            ? "Background is now Green! Click again."
            : "Background is now Yellow! Click again.";
    };

    // Initialize state and attach event listener
    interactionBox.classList.add('state-yellow');
    colorChangeBtn.addEventListener('click', handleButtonClick);

});