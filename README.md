<h1 align="center">Angular Multi-Project Workspace</h1>

<p align="center">
  <b>A comprehensive Angular workspace featuring a suite of hands-on, real-world mini-projects.<br>
  Learn, build, and master Angular with practical examples and best practices.</b>
</p>

![Angular](https://img.shields.io/badge/Angular-v17%2B-red)
![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Table of Contents
- [What’s Inside?](#-whats-inside)
- [Project Details](#-project-details)
- [Getting Started](#-getting-started)
- [Project Structure & Adding New Projects](#-project-structure--adding-new-projects)
- [Troubleshooting / FAQ](#troubleshooting--faq)
- [Acknowledgements](#acknowledgements)

---

## 📚 What’s Inside?

This workspace contains multiple standalone Angular applications, each focused on a core concept to help you learn and apply Angular in real-world scenarios.

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

## 💼 Project Details

### EasyTask
- Task management with user avatars and a modern UI
- Learn: Components, state management, modular design

### Investment Calculator
- Visualize investment growth with interactive charts
- Learn: Forms, data binding, calculation logic

### CMP Dashboard
- Server status, ticket management, analytics
- Learn: Component communication, dashboard layouts

### LifeCycle Explorer
- Explore Angular lifecycle hooks with live demos
- Learn: Lifecycle hooks, debugging, modularity

### Directives Playground
- Custom attribute and structural directives, security, logging
- Learn: Custom directives, security, debugging

### Pipes Lab
- Transform and format data using custom and built-in pipes
- Learn: Pipes, data transformation, formatting

### Services Central
- Reusable Angular services, dependency injection, HTTP/API
- Learn: Services, dependency injection, HTTP

### ChangeDetection Mastery
- Visualize and optimize Angular's change detection
- Learn: Change detection, performance optimization

### RxJS Playground
- Hands-on RxJS demos for reactive programming
- Learn: RxJS, observables, subjects, operators

---

## 🚀 Getting Started

To run any project:
1. Open a terminal and navigate to the desired project folder (e.g., <code>cd 1-EasyTask</code>).
2. Install dependencies:
   <pre>npm install</pre>
3. Start the development server:
   <pre>npm start</pre>
   or
   <pre>ng serve</pre>
4. Open your browser to <code>http://localhost:4200</code> (or the port shown in the terminal).

---

## 🛠️ Project Structure & Adding New Projects

- Each numbered folder (e.g., <code>1-EasyTask</code>, <code>2-InvestmentCalculator</code>) is a standalone Angular project.
- Shared resources, if any, are in <code>other-resources/</code>.

To add a new project:
1. Create a new folder in the root directory (e.g., <code>10-YourProjectName</code>).
2. Scaffold a new Angular project inside that folder using Angular CLI:
   <pre>ng new 10-YourProjectName --directory ./10-YourProjectName</pre>
3. Follow the same structure and naming conventions as the other projects.
4. Add your project to the main README table for visibility.

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

## Troubleshooting / FAQ

- **Port already in use?** Stop any running Angular servers or use a different port: <pre>ng serve --port 4300</pre>
- **Dependency issues?** Delete <code>node_modules</code> and <code>package-lock.json</code>, then run <pre>npm install</pre> again.
- **Other issues?** Check the project-specific README or open an issue.

---

## Acknowledgements

- Thanks to the Angular community and open-source contributors.
- Inspired by various Angular tutorials and real-world projects.

---
