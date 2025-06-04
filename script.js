document.getElementById("generate-users").addEventListener("click", async () => { // Generarea utilizatorilor la clic
    const numUsers = document.getElementById("num-users").value;
    const nationalities = Array.from(document.querySelectorAll("input[name='nationality']:checked"));
    const details = Array.from(document.querySelectorAll("input[name='detail']:checked")).map(det => det.value);
  
    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.remove());
  
    let isValid = true;
  
    // Validate Number of Users
    if (numUsers < 15 || numUsers > 30) {
      isValid = false;
      displayError("Number of users must be between 15 and 30.", "num-users");
    }
  
    // Validate Nationalities
    if (nationalities.length < 2) {
      isValid = false;
      displayError("Please select at least two nationalities.", "nationalities");
    }
  
    // Validate Details
    if (details.length < 3 || !details.includes("picture")) {
      isValid = false;
      displayError("Please select at least three details, including 'Picture'.", "details");
    }
  
    if (!isValid) {
      return;
    }
  
    // Hide the form and show the loading animation
    document.getElementById("user-form").style.display = "none";
    showLoadingAnimation();
  
    // Simulate a loading delay of 2 seconds
    setTimeout(async () => {
      // Fetch data
      const natParam = nationalities.map(nat => nat.value).join(",");
      const response = await fetch(`https://randomuser.me/api/?results=${numUsers}&nat=${natParam}`);
      const data = await response.json();
  
      // Hide loading animation and display results
      hideLoadingAnimation();
      displayResults(data.results, details);
    }, 2000);
  });
  
  // Function to display the loading animation
  function showLoadingAnimation() {
    const loadingDiv = document.createElement("div");
    loadingDiv.id = "loading";
    loadingDiv.innerHTML = `
      <div class="loading-spinner"></div>
      <p>Loading records. Please wait...</p>
    `;
    document.body.appendChild(loadingDiv);
  }
  
  // Function to hide the loading animation
  function hideLoadingAnimation() {
    const loadingDiv = document.getElementById("loading");
    if (loadingDiv) {
      loadingDiv.remove();
    }
  }
  
  // Function to display error messages
  function displayError(message, field) {
    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.style.color = "red";
    errorElement.textContent = message;
  
    if (field === "num-users") {
      document.getElementById("num-users").insertAdjacentElement("afterend", errorElement);
    } else if (field === "nationalities") {
      const fieldset = document.querySelector("fieldset:nth-of-type(1)");
      fieldset.insertAdjacentElement("afterend", errorElement);
    } else if (field === "details") {
      const fieldset = document.querySelector("fieldset:nth-of-type(2)");
      fieldset.insertAdjacentElement("afterend", errorElement);
    }
  }
   // Afișarea rezultatelor
  function displayResults(users, details) {
    const userResults = document.getElementById("user-results");
    userResults.innerHTML = ""; // Clear previous results
    userResults.style.display = "grid";
    userResults.style.gridTemplateColumns = "repeat(3, 500px)";
    userResults.style.justifyContent = "center";
    userResults.style.gap = "20px";
  
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.style.border = "1px solid #ccc";
      userCard.style.padding = "15px";
      userCard.style.borderRadius = "8px";
      userCard.style.position = "relative";
  
      if (details.includes("picture")) {
        const img = document.createElement("img");
        img.src = user.picture.medium;
        img.style.display = "block";
        img.style.margin = "0 auto 10px";
        img.style.borderRadius = "50%";
        userCard.appendChild(img);
      }
  
      if (details.includes("name")) {
        const name = document.createElement("p");
        name.textContent = `Name: ${user.name.first} ${user.name.last}`;
        name.style.textAlign = "center";
        userCard.appendChild(name);
      }
  
      if (details.includes("gender")) {
        const gender = document.createElement("p");
        gender.textContent = `Gender: ${user.gender}`;
        gender.style.textAlign = "center";
        userCard.appendChild(gender);
      }
  
      if (details.includes("location")) {
        const location = document.createElement("p");
        location.textContent = `Location: ${user.location.city}, ${user.location.country}`;
        location.style.textAlign = "center";
        userCard.appendChild(location);
      }
  
      if (details.includes("email")) {
        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        email.style.textAlign = "center";
        userCard.appendChild(email);
      }
  
      // Add action buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.justifyContent = "space-between";
      buttonContainer.style.position = "absolute";
      buttonContainer.style.bottom = "10px";
      buttonContainer.style.left = "10px";
      buttonContainer.style.right = "10px";
  
      const reportButton = document.createElement("button");
      reportButton.textContent = "Report record";
      reportButton.style.flex = "1";
      reportButton.style.marginRight = "5px";
  
      const keepButton = document.createElement("button");
      keepButton.textContent = "Keep record";
      keepButton.style.flex = "1";
      keepButton.style.marginRight = "5px";
  
      const resetButton = document.createElement("button");
      resetButton.textContent = "Reset record";
      resetButton.style.flex = "1";
  
      buttonContainer.appendChild(reportButton);
      buttonContainer.appendChild(keepButton);
      buttonContainer.appendChild(resetButton);
  
      userCard.appendChild(buttonContainer);
      userResults.appendChild(userCard);
    });
  }
  