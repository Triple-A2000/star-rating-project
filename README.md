# 🌟 Star Rating App with Dialog

This is a simple, interactive React project that allows users to rate using stars (1 to 5) and displays text feedback such as "Bad", "Good", or "Very Good". It also includes a floating dialog button that toggles a pop-up message.

---

## 🖼 Preview

![screenshot](./src/images/image.png)

---

## ✨ Features

- ⭐ Interactive star rating (1–5)
- 📄 Rating description (e.g., “Average”, “Very Good”)
- 🧠 Dialog pop-up for messages
- 💡 Dynamic button text (“Show Dialog” / “Close Dialog”)
- 🎨 Clean, responsive UI with custom styles

---

## 🔧 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS3** (flex/grid layout, transitions)
- **React Icons** (`react-icons/fa` for stars)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/star-rating-app.git
cd star-rating-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open your browser and go to `http://localhost:3000` to view the app.

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Star.js              # Single star component
│   ├── StarRating.js        # Displays 5 stars
│   ├── StarRatingText.js    # Shows rating + text
│   └── DialogButton.js      # Floating button to toggle dialog
│
├── App.js                   # Main entry component
├── index.js                 # React DOM render
└── styles.css               # Project-wide styles
```

---

## 🧪 Customization Ideas

- Add hover previews for stars.
- Save rating data to local storage or backend.
- Replace dialog message with user input or a rating summary.

---

## 📝 License

This project is open source and free to use for learning or personal projects.
