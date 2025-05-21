<h1 align="center">🌟 Angular Multi-Project Workspace 🚀</h1>

<p align="center">
  <b>The ultimate Angular playground!<br>Learn, build, and have fun with these hands-on projects.</b>
</p>

> **Why this workspace?** Master Angular through practical, real-world projects organized by difficulty level. Perfect for beginners and experienced developers alike. Start small and progressively tackle more complex concepts!

<p align="center">
  <a href="https://angular.io/" target="_blank"><img src="https://img.shields.io/badge/Angular-v19-red?logo=angular&logoColor=white" alt="Angular Version"/></a>
  <a href="other-resources/angular-course-slides.pdf"><img src="https://img.shields.io/badge/Course%20Slides-PDF-green" alt="Course Slides"/></a>
</p>

## 📑 Table of Contents

- [✨ Workspace Features](#-workspace-features)
- [🛠️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [📦 Projects Overview](#-projects-overview)
- [🔍 Quick Reference Card](#-quick-reference-card)
- [🧠 Key Concepts by Project](#-key-concepts-by-project)
- [💻 Development Commands](#-development-commands)
- [🎓 Recommended Learning Path](#-recommended-learning-path)
- [❓ Troubleshooting Common Issues](#-troubleshooting-common-issues)
- [🎓 Featured Course & Resources](#-featured-course--resources)
- [📚 Support & Resources](#-support--resources)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## ✨ Workspace Features

- 🧩 Multiple real-world Angular projects in one place
- 🎨 Modern, consistent UI/UX across all demos
- 📚 Ready-to-use code for learning and reference
- 🚀 Quick setup and easy navigation

## 🛠️ Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- [npm](https://www.npmjs.com/) (v9.0.0 or later)
- [Angular CLI](https://angular.io/cli) (v19.0.0 or later)

```bash
npm install -g @angular/cli
```

## 🚀 Getting Started

1. **Pick a project from the Projects Overview below.**
2. **Open a terminal in that project folder.**
3. **Install dependencies:**
   ```cmd
   npm install
   ```
4. **Run the app:**
   ```cmd
   npm start
   ```
   or
   ```cmd
   ng serve
   ```
5. **Open your browser at:** [http://localhost:4200](http://localhost:4200)

## 📦 Projects Overview

### 🟢 Beginner Projects

#### <a href="./Beginner/EasyTask/README.md"><img src="Beginner/EasyTask/src/assets/task-management-logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#7C3AED"><b><a href="./Beginner/EasyTask">EasyTask</a></b></span>

> <i>A simple, stylish task manager</i>

- 📝 Create & manage tasks
- 👤 User management with avatars
- ✨ Modern UI & reusable components

#### <a href="./Beginner/InvestmentCalculator/README.md"><img src="Beginner/InvestmentCalculator/public/investment-calculator-logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#059669"><b><a href="./Beginner/InvestmentCalculator/README.md">Investment Calculator</a></b></span>

> <i>Visualize your investment growth!</i>

- 💰 Input your investment details
- ⚡ Instant calculation of returns
- 📊 Beautiful, interactive results

### 🟡 Intermediate Projects

#### <a href="./Intermediate/Components/README.md"><img src="Intermediate/Components/public/logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#3B82F6"><b><a href="./Intermediate/Components/README.md">CMP Dashboard</a></b></span>

> <i>Your control center for servers, tickets, and traffic</i>

- 🖥️ Server status monitoring
- 🎫 Ticket management
- 📈 Traffic analytics

#### <a href="./Intermediate/LifeCycle/README.md">🔃</a> <span style="color:#F59E42"><b><a href="./Intermediate/LifeCycle/README.md">LifeCycle Explorer</a></b></span>

> <i>Deep dive into Angular component lifecycle hooks</i>

- 🔬 Explore Angular lifecycle hooks in action
- 🧩 Modular component structure
- 📈 Real-time updates and visual feedback

#### <a href="./Intermediate/Directives/README.md">🏷️</a> <span style="color:#A21CAF"><b><a href="./Intermediate/Directives/README.md">Directives Playground</a></b></span>

> <i>Master custom Angular directives with hands-on demos</i>

- 🏷️ Custom attribute and structural directives
- 🔒 Safe link directive for secure navigation
- 📝 Logging directive for debugging

#### <a href="./Intermediate/Forms/README.md"><img src="Intermediate/Forms/public/logo.jpg" width="32" style="vertical-align:middle; border-radius: 50%;"/></a> <span style="color:#F43F5E"><b><a href="./Intermediate/Forms/README.md">Forms Workshop</a></b></span>

> <i>Master Angular forms with interactive examples</i>

- 📋 Reactive and template-driven forms
- 🔄 Dynamic form controls and validation
- 🎨 Custom form components and styling

#### <a href="./Intermediate/Pipes/README.md"><img src="Intermediate/Pipes/public/temp-icon.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#F43F5E"><b><a href="./Intermediate/Pipes/README.md">Pipes Lab</a></b></span>

> <i>Transform and format data with custom Angular pipes</i>

- 🧪 Custom and built-in pipes
- 🔤 Data formatting and transformation
- ⚡ Real-time display updates

#### <a href="./Intermediate/Services/README.md">🔗</a> <span style="color:#0EA5E9"><b><a href="./Intermediate/Services/README.md">Services Central</a></b></span>

> <i>Master Angular services, dependency injection, and data sharing</i>

- 🔗 Reusable Angular services
- 🔄 Dependency injection best practices
- 📡 HTTP & API integration demos

#### <a href="./Intermediate/EasyTask(deployment)/README.md"><img src="Intermediate/EasyTask(deployment)/public/task-management-logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#F59E42"><b><a href="./Intermediate/EasyTask(deployment)/README.md">EasyTask(Deployment)</a></b></span>

> <i>Manage tasks with user-based routing and deployment-ready SSR support</i>

- 🗂️ User-based task management (dynamic routes)
- 🔀 Angular routing & navigation
- 🚀 Server-side rendering (SSR) for deployment
- 👤 Modern UI with avatars

#### <a href="./Intermediate/LazyLoading/README.md"><img src="Intermediate/LazyLoading/public/angular-logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#2563EB"><b><a href="./Intermediate/LazyLoading/README.md">Lazy Loading & Defer</a></b></span>

> <i>Explore Angular's lazy loading and <code>defer</code> features for blazing-fast apps</i>

- ⏳ Angular <code>defer</code> for on-demand component loading
- ⚡ Optimized performance and user experience
- 🖼️ Demo: Welcome screen & offer preview
- 🧩 Modular, modern app structure

### 🔴 Advanced Projects

#### <a href="./Advanced/ChangeDetection/README.md">🏷️</a> <span style="color:#A21CAF"><b><a href="./Advanced/ChangeDetection/README.md">ChangeDetection Mastery</a></b></span>

> <i>Unlock Angular's change detection secrets!</i>

- ⚡ Explore default & OnPush strategies
- 🔍 Visualize change detection cycles
- 🚀 Performance optimization tips

#### <a href="./Advanced/RxJs/README.md"><img src="Advanced/RxJs/public/rxjs-logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#0EA5E9"><b><a href="./Advanced/RxJs/README.md">RxJS Playground</a></b></span>

> <i>Reactive programming unleashed!</i>

- 🔄 Hands-on RxJS demos (observables, subjects, operators)
- ⚡ Real-time data streams and UI updates
- 🚀 Performance and best practices

#### <a href="./Advanced/PlacePicker/README.md"><img src="Advanced/PlacePicker/public/logo.png" width="32" style="vertical-align:middle;"/></a> <span style="color:#F59E42"><b><a href="./Advanced/PlacePicker/README.md">Place Picker</a></b></span>

> <i>Angular HTTP & REST API integration</i>

- 🌐 Fetch, create, update, and delete data via HTTP
- 🛠️ Node.js/Express backend included
- ⚡ Error handling and loading states
- 📡 Real-world API demo

---

## 🔍 Quick Reference Card

| Concept            | Project Example                                             | Difficulty |
| ------------------ | ----------------------------------------------------------- | ---------- |
| Components         | [EasyTask](Beginner/EasyTask)                               | 🟢         |
| Input/Output       | [Investment Calculator](Beginner/InvestmentCalculator)      | 🟢         |
| Services & DI      | [Services Central](Intermediate/Services)                   | 🟡         |
| Forms & Validation | [Forms Workshop](Intermediate/Forms)                        | 🟡         |
| Directives         | [Directives Playground](Intermediate/Directives)            | 🟡         |
| Routing            | [EasyTask(Deployment)](<Intermediate/EasyTask(deployment)>) | 🟡         |
| Pipes              | [Pipes Lab](Intermediate/Pipes)                             | 🟡         |
| Lifecycle          | [LifeCycle Explorer](Intermediate/LifeCycle)                | 🟡         |
| Lazy Loading/Defer | [Lazy Loading & Defer](Intermediate/LazyLoading)            | 🟡         |
| Change Detection   | [ChangeDetection Mastery](Advanced/ChangeDetection)         | 🔴         |
| RxJS/Observables   | [RxJS Playground](Advanced/RxJs)                            | 🔴         |
| HTTP/API           | [Place Picker](Advanced/PlacePicker)                        | 🔴         |

---

## 🧠 Key Concepts by Project

<details>
<summary>Expand for a reverse lookup by Angular concept</summary>

- **Component Communication**: [EasyTask](Beginner/EasyTask), [CMP Dashboard](Intermediate/Components)
- **Forms & Validation**: [Forms Workshop](Intermediate/Forms), [Investment Calculator](Beginner/InvestmentCalculator)
- **Services & Dependency Injection**: [Services Central](Intermediate/Services), [Place Picker](Advanced/PlacePicker)
- **Routing & Navigation**: [EasyTask(Deployment)](<Intermediate/EasyTask(deployment)>), [Lazy Loading & Defer](Intermediate/LazyLoading)
- **HTTP & REST APIs**: [Place Picker](Advanced/PlacePicker), [Services Central](Intermediate/Services)
- **Directives**: [Directives Playground](Intermediate/Directives)
- **Pipes**: [Pipes Lab](Intermediate/Pipes)
- **Lifecycle Hooks**: [LifeCycle Explorer](Intermediate/LifeCycle)
- **Observables & RxJS**: [RxJS Playground](Advanced/RxJs), [Services Central](Intermediate/Services)
- **Performance Optimization**: [ChangeDetection Mastery](Advanced/ChangeDetection), [Lazy Loading & Defer](Intermediate/LazyLoading)
</details>

---

## 💻 Development Commands

```bash
# Generate a new component
ng generate component my-component

# Generate a new service
ng generate service my-service

# Build for production
ng build --prod

# Run the development server
ng serve

# Run tests
ng test

# Run linting
ng lint
```

---

## 🎓 Recommended Learning Path

> **New to Angular?** Follow this structured path to build your skills progressively

### 1️⃣ First Steps

- [**EasyTask**](Beginner/EasyTask) - Components and basic binding
- [**Investment Calculator**](Beginner/InvestmentCalculator) - Input/output and event handling

### 2️⃣ Level Up

- [**CMP Dashboard**](Intermediate/Components) - Component composition
- [**LifeCycle Explorer**](Intermediate/LifeCycle) - Component lifecycle hooks
- [**Directives Playground**](Intermediate/Directives) - Angular directives

### 3️⃣ Become an Expert

- [**Forms Workshop**](Intermediate/Forms) - Form handling
- [**Services Central**](Intermediate/Services) - Dependency injection
- [**RxJS Playground**](Advanced/RxJs) - Reactive programming
- [**ChangeDetection Mastery**](Advanced/ChangeDetection) - Performance optimization

<details>
<summary><b>❓ Troubleshooting Common Issues</b></summary>

### Node.js Version Conflicts

```bash
# Check your Node.js version
node -v
# If needed, use nvm to switch versions
nvm use 18
```

### Angular CLI Commands Not Working

Ensure Angular CLI is properly installed globally:

```bash
npm uninstall -g @angular/cli
npm cache clean --force
npm install -g @angular/cli
```

### Project Won't Start

If ng serve fails:

- Check for port conflicts (default is 4200)
- Try clearing npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

</details>

## 🎓 Featured Course & Resources

Take your Angular skills to the next level with this highly recommended course and its official resources:

- [Udemy: The Complete Guide to Angular (2024+)](https://www.udemy.com/course/the-complete-guide-to-angular-2/?couponCode=CP130525)  
  <sub>By Maximilian Schwarzmüller – covers everything from basics to advanced topics, with hands-on projects.</sub>
- [Official Course GitHub Repository](https://github.com/mschwarzmueller/angular-complete-guide-course-resources)

## 📚 Support & Resources

- 📄 [Angular Course Slides (PDF)](./other-resources/angular-course-slides.pdf)
- 📖 [Angular Official Documentation](https://angular.dev/overview)
- 💬 [Angular Community](https://angular.dev/overview#a-thriving-community)
- 📺 [YouTube Tutorials](https://www.youtube.com/@AngularUniversity)

## 🤝 Contributing

Want to help? Here’s how you can contribute:

- ⭐ Star this repository to show your support.
- 🐛 [Report bugs or request features](https://github.com/Kira262/Angular/issues).
- 🔀 Fork the repo and submit a pull request.
- 📄 See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📝 License

This workspace is for educational purposes. See individual project folders for specific licensing details if applicable.

<p align="center">
  <b>🌈 Explore. Build. Master Angular!</b>
</p>
