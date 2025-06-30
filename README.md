# 🌦️ Weather App

A simple full-stack weather application using **Spring Boot** and **React + Vite**.

---

## 📁 Project Structure

```
weather-app/
├── backend/      → Spring Boot 3 project
├── frontend/     → React + Vite project
└── README.md
```

---

## 🌐 Frontend

- ⚛️ React (Vite)
- 📡 Axios for API calls
- 💡 Popup UI with close button
- 🎨 Custom CSS styling

---

## 🔙 Backend

- 🚀 Spring Boot 3.5
- 🔄 WebClient for HTTP requests
- 🌍 CORS enabled for React frontend
- 🔐 Connects to OpenWeatherMap API

---

## 🚀 How to Run This Project

### 🧩 Prerequisites

- Node.js & npm
- Java 17+ or 21
- Maven (or use `./mvnw`)
- Git

---

### 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/Mohammed-Haarish/weather-app.git
cd weather-app
```

---

### 🔧 Step 2: Run Backend

```bash
cd backend
./mvnw spring-boot:run
```

> OR open in IntelliJ / Eclipse and run `WeatherApplication.java`

🖥️ **Backend URL:** `http://localhost:8080`

📸 _Example screenshot:_  
![Backend Running](screenshots/backend-running.png)

---

### 🔧 Step 3: Run Frontend

```bash
cd ../frontend
npm install
npm run dev
```

🖥️ **Frontend URL:** `http://localhost:5173`

📸 _Example screenshot:_  
![Screenshot 2025-06-30 234639](https://github.com/user-attachments/assets/3be13697-25ad-4a45-8cfc-7fcd3a0b1bec)


---

### 🔍 How It Works

1. Enter a city name
2. React frontend calls: `http://localhost:8080/api/weather/{city}`
3. Spring Boot fetches data from OpenWeatherMap
4. Popup appears showing temperature, humidity & weather

📸 _Example popup:_  
![Screenshot 2025-06-30 234806](https://github.com/user-attachments/assets/a235f1cd-0604-4fef-9f99-39f10d750ed9)


---


---

## 🌈 Features

- Responsive design
- Modern CSS popup with close ❌
- Cross-origin enabled (`@CrossOrigin`)
- Fast Vite frontend + async WebClient backend

---

## 🧠 Future Enhancements

- Country flags
- °C/°F toggle switch
- 5-day forecast view
- Hosting with Netlify + Render

---

## 🧑‍💻 Author

**Mohammed Haarish**  
GitHub: [@Mohammed-Haarish](https://github.com/Mohammed-Haarish)

---

## 📄 License

MIT License
