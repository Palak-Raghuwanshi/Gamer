function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((tab) => {
      tab.classList.remove('show');
    });
  
    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });
  
    // Show the selected tab content and activate the button
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('show');
  
    const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    selectedButton.classList.add('active');
  }
  