# 🌦️ Weather App

A simple weather application built using **React.js**, **Node.js**, and **Express.js**, with Tailwind CSS for styling.

## 🚀 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API
- **Deployment:** Vite (for frontend bundling)

---

## 📌 Setup Instructions

### **1️⃣ Clone the Repository**

Open the terminal and run:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

### **2️⃣ Install Dependencies**

#### **Frontend Setup:**

```bash
cd frontend
npm install
```

#### **Backend Setup:**

```bash
cd backend
npm install
```

---

### **3️⃣ Configure Environment Variables**

1. **Navigate to the backend folder:**

   ```bash
   cd backend
   ```

2. **Create a **``** file** in the backend folder and add:

   ```env
   PORT=8006
   WEATHER_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual OpenWeatherMap API key.

---

### **4️⃣ Start the Servers**

#### **Start Backend Server:**

```bash
cd backend
node server.js
```

(Use `nodemon server.js` if `nodemon` is installed for auto-restart on changes.)

#### **Start Frontend Server:**

```bash
cd frontend
npm run dev
```

The application should now be running at [**http://localhost:5173/**](http://localhost:5173/) (default Vite port).

---

## 🌍 API Integration Details

### **Weather API: OpenWeatherMap**

- API Provider: [**OpenWeatherMap**](https://api.openweathermap.org)
- API Key Required: **Yes** (`WEATHER_API_KEY`)
- **Rate Limits:**
  - Free Tier: **60 requests/minute**
  - Pro Tier: **Higher request limits**

### **Example API Call:**

```bash
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
```

### **Response Format (JSON Example):**

```json
{
  "weather": [{ "description": "clear sky" }],
  "main": { "temp": 289.92, "humidity": 78 },
  "wind": { "speed": 3.1 },
  "name": "London"
}
```

---

## 🔗 Contact

- **GitHub:** [GitHub Profile](https://github.com/Akshat1224)
- **Email:** [My Email](mailto\:akshatkushwaha7oct2003@gmail.com)

---

### **📌 How to Add This File to GitHub**

1. Open the terminal and navigate to your project directory.
2. Run the following commands:

```bash
git add README.md
git commit -m "Added complete README file"
git push origin main
```

