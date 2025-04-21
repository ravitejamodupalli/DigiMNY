# 💸 DigiMNY

DigiMNY is a web-based platform built to simplify and secure the way users manage their digital assets. Our goal is to provide a seamless and visually intuitive experience for tracking, analyzing, and organizing cryptocurrency investments.

## 🎯 Features

- 🔐 User Watchlist (Add, Edit, Remove Coins)
- 📊 Interactive Charts:
  - Line Chart
  - Area Chart
  - Bar Chart
  - Stepped Line Chart
  - Candlestick Chart *(planned)*
- 📁 Structured coin data
- 📌 Coin detail pages
- 👥 About section with team details and GitHub link
- 🧩 Logical Data Design Model 

## 🧱 Tech Stack

- HTML, CSS 
- JavaScript
  
## 📂 Folder Structure

```
DIGIMNY/
├── about/                      # About page (project mission, team, data model)
│   └── index.html
├── crypto/detail/             # Coin detail pages
│   └── index.html
├── data-points/               # JSON files for each cryptocurrency
│   ├── bitcoin.json
│   ├── ethereum.json
│   ├── solana.json
│   ├── tether.json
│   ├── usdc.json
│   └── xrp.json
├── images/                    # Logos, icons, and other media
├── scripts/                   # JavaScript files
│   ├── tailwind.config.js
│   └── viz.js
├── styles/                    # CSS files
│   └── index.css
├── watchlists/                # Watchlist pages (Create, Edit)
│   ├── create/
│   ├── edit/
│   └── index.html
├── index.html                 # Homepage with chart interface
└── ReadMe.md                  # Project documentation
```
## ⚙️ Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/ravitejamodupalli/DigiMNY
   ```

2. Open `index.html` in your browser to explore the platform.


## 📈 Logical Data Design

Our ER diagram models relationships between `Users`, `Coins`, and `Watchlists`. You can view the diagram in the **About us** section of the app.

## 👨‍💻 Team Members

- Raviteja Modupalli 
- Venkata Sai Kolla
- Srikar Kamatham
- Meghana Kandagatla 
