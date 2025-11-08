
# Portfolio Website - Vikas Bhatt

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring a dark elegant theme with gradient accents.


## 🚀 Features

- Modern Design: Dark theme with gradient highlights and elegant animations

- Multi-page Routing: Home, Projects, and Resume pages

- Responsive Layout: Optimized for all devices

- Smooth Animations: Powered by Framer Motion

- Professional Typography: Inter and Poppins font pairing

- Project Showcase: Featured projects on homepage with full portfolio page

- Interactive Resume: Downloadable PDF resume with detailed experience

- Contact Integration: Easy-to-access contact information




## 🛠️ Tech Stack

- Frontend Framework: React 18

- Build Tool: Vite

- Styling: Tailwind CSS

- Animations: Framer Motion

- Icons: Lucide React

- Routing: React Router DOM

- Fonts: Inter & Poppins (Google Fonts)
## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── profile.jpg          # Profile image
│   ├── project1.jpg         # Project images
│   ├── project2.jpg
│   ├── project3.jpg
|
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Introduction section
│   │   ├── FeaturedProjects.jsx # Homepage projects
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Contact.jsx      # Contact information
│   │   └── ScrollToTop.jsx  # Route scroll management
│   ├── pages/
│   │   ├── Home.jsx         # Main landing page
│   │   ├── Projects.jsx     # All projects showcase
│   │   └── Resume.jsx       # Resume page with download
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── vite.config.js

```
## 🎨 Design Features

- **Color Scheme**: Dark theme with purple-blue gradients

- **Typography**: Professional font pairing (Inter for body, Poppins for headings)

- **Animations**: Smooth page transitions and hover effects

- **Layout**: Centered design with proper white space

- **Interactive Elements**: Hover states and micro-interactions
## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)

- npm or yarn

### Installation
1. Clone the repository
```
git clone <repository-url>
cd portfolio-website
```
2. Install dependencies
```
npm install
```
3. Add your assets
- Place your profile image as public/profile.jpg

- Add project images as public/project1.jpg, project2.jpg, etc.

- Add your resume PDF as public/VikasBhatt.pdf

4. Customize content
- Update personal information in components

- Modify project details in FeaturedProjects.jsx and Projects.jsx

- Update resume content in Resume.jsx

- Replace social media links and contact information

5. Start development server
```
npm run dev
```

