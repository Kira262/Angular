<h1 align="center">Angular Multi-Project Workspace</h1>

<p align="center">
  <b>A comprehensive Angular workspace featuring a suite of hands-on, real-world mini-projects.<br>
  Learn, build, and master Angular with practical examples and best practices.</b>
</p>

---

## Table of Contents

- [What’s Inside?](#-whats-inside)
- [Badges & Status](#-badges--status)
- [Project Details](#-project-details)
- [Getting Started](#-getting-started)
- [Requirements](#-requirements)
- [Why This Workspace?](#-why-this-workspace)
- [Contributing](#-contributing)
- [Project Structure](#project-structure)
- [How to Add a New Project](#how-to-add-a-new-project)
- [Testing](#testing)
- [Troubleshooting / FAQ](#troubleshooting--faq)
- [Contact / Support](#contact--support)
- [Changelog](#changelog)
- [Acknowledgements](#acknowledgements)

---

## 📚 What’s Inside?

This is a monorepo-style Angular workspace containing multiple standalone Angular applications. Each folder is a focused project designed to help you understand and apply core Angular concepts in real-world scenarios.

| Project                 | Description                                                                                                                   | Link                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| EasyTask                | Task management app with user avatars and a modern UI. Learn about components, state management, and user flows.              | [EasyTask](./1-EasyTask)                         |
| Investment Calculator   | Visualize investment growth with instant calculations and interactive charts. Practice forms, data binding, and calculations. | [InvestmentCalculator](./2-InvestmentCalculator) |
| CMP Dashboard           | CMP Dashboard for server status, tickets, and analytics. Master component communication and dashboard layouts.                | [Components](./3-Components)                     |
| LifeCycle Explorer      | Explore Angular’s lifecycle hooks with live demos. See how hooks work in real time.                                           | [LifeCycle](./4-LifeCycle)                       |
| Directives Playground   | Build and use custom attribute and structural directives. Includes security and logging examples.                             | [Directives](./5-Directives)                     |
| Pipes Lab               | Transform and format data with custom and built-in pipes. See real-time updates in action.                                    | [Pipes](./6-Pipes)                               |
| Services Central        | Learn dependency injection, reusable services, and HTTP/API integration.                                                      | [Services](./7-Services)                         |
| ChangeDetection Mastery | Visualize and optimize Angular’s change detection strategies for maximum performance.                                         | [ChangeDetection](./8-ChangeDetection)           |
| RxJS Playground         | Get hands-on with RxJS—observables, subjects, operators, and real-time data streams.                                          | [RxJs](./9-RxJs)                                 |

---

## 🏷️ Badges & Status

![Angular](https://img.shields.io/badge/Angular-v17%2B-red)
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 💼 Project Details

### <img src="1-EasyTask/src/assets/task-management-logo.png" width="32" style="vertical-align:middle;"/> <span style="color:#7C3AED"><b>EasyTask</b></span>

> <i>Task management application with user management and a modern interface.</i>

- 📝 Create & manage tasks
- 👤 User management with avatars
- ✨ Modern, reusable UI components
- <b>Learn:</b> Components, state management, modular design

---

### <img src="2-InvestmentCalculator/public/investment-calculator-logo.png" width="32" style="vertical-align:middle;"/> <span style="color:#059669"><b>Investment Calculator</b></span>

> <i>Visualize your investment growth with interactive charts and instant calculations.</i>

- 💰 Input investment details
- ⚡ Instant calculation of returns
- 📊 Interactive, visual results
- <b>Learn:</b> Forms, data binding, calculation logic

---

### <img src="3-Components/public/logo.png" width="32" style="vertical-align:middle;"/> <span style="color:#3B82F6"><b>CMP Dashboard</b></span>

> <i>Dashboard for server status, ticket management, and analytics.</i>

- 🖥️ Server status monitoring
- 🎫 Ticket management
- 📈 Analytics and reporting
- <b>Learn:</b> Component communication, dashboard layouts

---

### 🔃 <span style="color:#F59E42"><b>LifeCycle Explorer</b></span>

> <i>Explore Angular component lifecycle hooks with live demonstrations.</i>

- 🔬 Interactive exploration of lifecycle hooks
- 🧩 Modular component structure
- 📈 Real-time updates and feedback
- <b>Learn:</b> Lifecycle hooks, debugging, modularity

---

### 🏷️ <span style="color:#A21CAF"><b>Directives Playground</b></span>

> <i>Master custom Angular directives with practical examples.</i>

- 🏷️ Custom attribute and structural directives
- 🔒 Safe link directive for secure navigation
- 📝 Logging directive for debugging
- <b>Learn:</b> Custom directives, security, debugging

---

### <img src="6-Pipes/public/temp-icon.png" width="32" style="vertical-align:middle;"/> <span style="color:#F43F5E"><b>Pipes Lab</b></span>

> <i>Transform and format data using custom and built-in Angular pipes.</i>

- 🧪 Custom and built-in pipes
- 🔤 Data formatting and transformation
- ⚡ Real-time display updates
- <b>Learn:</b> Pipes, data transformation, formatting

---

### 🔗 <span style="color:#0EA5E9"><b>Services Central</b></span>

> <i>Master Angular services, dependency injection, and data sharing.</i>

- 🔗 Reusable Angular services
- 🔄 Dependency injection best practices
- 📡 HTTP & API integration demos
- <b>Learn:</b> Services, dependency injection, HTTP

---

### ⚡ <span style="color:#F59E42"><b>ChangeDetection Mastery</b></span>

> <i>Understand and optimize Angular's change detection strategies.</i>

- ⚡ Explore default & OnPush strategies
- 🔍 Visualize change detection cycles
- 🚀 Performance optimization tips
- <b>Learn:</b> Change detection, performance optimization

---

### <img src="9-RxJs/public/rxjs-logo.png" width="32" style="vertical-align:middle;"/> <span style="color:#0EA5E9"><b>RxJS Playground</b></span>

> <i>Hands-on RxJS demos for reactive programming in Angular.</i>

- 🔄 RxJS demos (observables, subjects, operators)
- ⚡ Real-time data streams and UI updates
- 🚀 Performance and best practices
- <b>Learn:</b> RxJS, observables, subjects, operators

---

## 🚀 Getting Started

To get started with any project in this workspace, follow these steps:

1. <b>Navigate to the desired project folder</b>
   - Example: <code>cd 1-EasyTask</code>
2. <b>Install the project dependencies</b>
   - Run: <pre>npm install</pre>
3. <b>Start the development server</b>
   - Run: <pre>npm start</pre>
   - Or, if you prefer using Angular CLI: <pre>ng serve</pre>
4. <b>Open your browser and go to</b> <code>http://localhost:4200</code> (or the port specified in the terminal)

Each project is independent and can be run separately. Make sure you have the required Node.js, npm, and Angular CLI versions installed (see Requirements section below).

---

## 🛠️ Requirements

- <b>Node.js</b> (v18+ recommended)
- <b>npm</b> (v9+ recommended)
- <b>Angular CLI</b> (v17+ recommended)

---

## 🤔 Why This Workspace?

- Learn Angular with real-world, focused projects
- See best practices and patterns in action
- Build, experiment, and master Angular concepts

---

<p align="center">
  <b>Explore. Build. Master Angular.</b>
</p>

---

## 🤝 Contributing

Contributions are welcome! Please see the [Contribution Guidelines](./CONTRIBUTING.md) for more information.

---

## Project Structure

This workspace uses a monorepo approach. Each numbered folder (e.g., `1-EasyTask`, `2-InvestmentCalculator`, etc.) is a standalone Angular project with its own configuration and source code. Shared resources, if any, are placed in the `other-resources/` directory.

Example structure:

```
Angular/
├── 1-EasyTask/
├── 2-InvestmentCalculator/
├── ...
├── other-resources/
├── CONTRIBUTING.md
├── README.md
```

---

## How to Add a New Project

1. Create a new folder in the root directory (e.g., `10-YourProjectName`).
2. Scaffold a new Angular project inside that folder using Angular CLI:
   <pre>ng new 10-YourProjectName --directory ./10-YourProjectName</pre>
3. Follow the same structure and naming conventions as the other projects.
4. Add your project to the main README table for visibility.

---

## Testing

To run tests for any project:

1. Navigate to the project folder (e.g., `cd 1-EasyTask`).
2. Run:
   <pre>npm test</pre>
   or
   <pre>ng test</pre>

---

## Troubleshooting / FAQ

- **Port already in use?** Stop any running Angular servers or use a different port: <pre>ng serve --port 4300</pre>
- **Dependency issues?** Delete `node_modules` and `package-lock.json`, then run <pre>npm install</pre> again.
- **Other issues?** Check the project-specific README or open an issue.

---

## Contact / Support

For questions, suggestions, or support, please open an issue on GitHub or contact the repository maintainer.

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a history of major changes and updates.

---

## Acknowledgements

- Thanks to the Angular community and open-source contributors.
- Inspired by various Angular tutorials and real-world projects.

---
