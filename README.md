# Vivek Yadav — Professional Developer Portfolio

A modern, responsive, and recruiter-focused developer portfolio website built for **Vivek Yadav**, a 2026 Information Technology graduate seeking entry-level Software Developer / Java Developer opportunities.

## 🚀 Projects Showcased

1. **Stock Mentor - Smart Investment Learning Platform**
   - **Repository:** [https://github.com/withvivek/Stock-Mentor](https://github.com/withvivek/Stock-Mentor)
   - **Stack:** Java, Spring Boot, Spring Data JPA, React.js, MongoDB Atlas, Groq AI, Alpha Vantage API
   - **Overview:** Full-stack stock analysis application with real-time and historical market data integration and Groq AI-powered stock insights.

2. **LifeSpring Care – Healthcare Appointment Booking System**
   - **Repository:** [https://github.com/withvivek/LifeSpring-Care-SmartHealthCare](https://github.com/withvivek/LifeSpring-Care-SmartHealthCare)
   - **Stack:** Java, Spring Boot, Spring Data JPA (Hibernate), MySQL, JSP
   - **Overview:** Full-stack healthcare system featuring patient, doctor, and admin portals, appointment workflow with slot validation, and hospital/department management.

---

## 📞 Personal Contact & Verified Credentials

- **Email:** [vivekyadav.11v@gmail.com](mailto:vivekyadav.11v@gmail.com)
- **Phone:** [+91 9450646646](tel:+919450646646)
- **GitHub:** [https://github.com/withvivek](https://github.com/withvivek)
- **LinkedIn:** [https://www.linkedin.com/in/vivekydv09/](https://www.linkedin.com/in/vivekydv09/)
- **Resume:** [Google Drive Resume](https://drive.google.com/file/d/1FmAqDbBdh0Iga1UwC1hkuFxSm9ugHEQO/view?usp=sharing)

---

## 📜 Certifications

1. **Java Programming: Arrays, Lists and Structured Data** — Coursera ([Credential](https://coursera.org/share/e73ee14aebcc090f775bdb2bf24e5d59))
2. **Object Oriented Programming in Java** — Coursera ([Credential](https://coursera.org/share/2e7abc48df5be4e9b3210834543e644f))
3. **Python Basics** — Coursera ([Credential](https://coursera.org/share/c95400c22d7807727f0349e1b0cd7c34))
4. **Database Management System** — Infosys SpringBoard

---

## 🛠️ Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Modern SVG favicon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Icons.jsx        # SVG icons for GitHub & LinkedIn
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolioData.js # Single source of truth (contact, projects, skills, education, certs)
│   ├── sections/            # Portfolio page sections
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Education.jsx / Education.css
│   │   ├── Certifications.jsx / Certifications.css
│   │   └── Contact.jsx / Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css            # Dark mode design tokens & utilities
│   └── main.jsx
├── index.html               # SEO metadata, title, and OpenGraph tags
├── vercel.json              # Vercel deployment configuration
└── package.json
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview build:**
   ```bash
   npm run preview
   ```

---

## 🚢 Deploying to Vercel
1. Push repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete resume-aligned portfolio"
   git branch -M main
   git remote add origin https://github.com/withvivek/<repo-name>.git
   git push -u origin main
   ```
2. In Vercel, import the repo — Vite will be automatically recognized. Click **Deploy**.
