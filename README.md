# 👤 Random User Generator Web App  
This project implements a dynamic, responsive web application for generating and displaying random user profiles using the randomuser.me API. It enables users to customize the number of profiles, filter by nationality, and choose which personal details to display, making it a flexible and engaging frontend experience.

---

## 🚀 Features  
🔢 Select how many user profiles to generate (range: 15–30)  
🌍 Filter by nationality (e.g., US, GB, FR, DE, ES)  
👁️ Choose which details to show: Name, Gender, Email, Picture, and Location  
✅ Form validation with meaningful error messages  
🔄 Loading animation while data is fetched  
🧱 Grid layout to display user cards responsively  
🎯 Per-user action buttons:  
  • **Report** – Flag a user  
  • **Keep** – Save for later  
  • **Reset** – Clear selection  

---

## 🧰 Technologies Used  
- **HTML5** – Structural elements and semantic tags  
- **CSS3** – Flexbox, Grid, responsive styling, and animations  
- **JavaScript** – API integration, DOM manipulation, and stateful UI logic  

---

## 📂 Project Structure  
- `README.md` – Project documentation
- `index.html` – Primary HTML layout and form
- `script.js` – Handles validation, fetch logic, error display, and dynamic UI updates  
- `styles.css` – Styling for the form, layout, animations, and user cards  

---

## 📡 API Used  
User data is retrieved from the public API:  
🔗 https://randomuser.me/api  

The API supports:  
- Batch generation of random users  
- Nationality filtering  
- Detailed personal data (name, gender, picture, location, etc.)

---

## 🛠️ How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-user-generator.git
   ```

2. Navigate into the project folder:
   ```bash
   cd random-user-generator
   ```

3. Open `index.html` in your web browser:
   - You can simply double-click `index.html`, or
   - Use a local development server (optional):
     ```bash
     python3 -m http.server
     # Then open http://localhost:8000 in your browser
     ```

4. Interact with the form to generate user profiles.

---

## 📝 Conclusion  
The Random User Generator Web App demonstrates how to build a customizable data-driven frontend using public APIs. It highlights good practices in asynchronous JavaScript, user input validation, dynamic rendering, and responsive UI design.

---

This project was completed for the User Interface Design course, as part of my studies at the Technical University of Cluj-Napoca (UTCN) 🎓.
