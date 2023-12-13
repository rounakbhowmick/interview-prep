# 🚀 Software Engineering FAQs

### 1. What is Emmet? 🌟

- [x] Emmet is a set of tools and shortcuts that help developers write HTML and CSS code faster and more efficiently. It uses a unique syntax that allows for quick generation of code using abbreviations and snippets.

### 2. 📚 Library vs Framework

| Aspect         | Library                                         | Framework                                                               |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------- |
| Control        | You call the library where you need it.         | Framework calls your code, sets the flow.                               |
| Integration    | Easier to integrate into a part of a project.   | Often requires the entire project structure to conform.                 |
| Learning Curve | Generally lower, as you use only what you need. | Higher, as you need to understand the overall structure and principles. |
| Flexibility    | More flexible, can be used as needed.           | Less flexible, requires following specific patterns and rules.          |
| Purpose        | Provides specific functionality or utilities.   | Provides a skeleton or blueprint for applications.                      |
| Dependency     | You can choose which parts to use.              | Often comes as a whole, all-or-nothing approach.                        |
| Examples       | jQuery (JavaScript), NumPy (Python)             | Angular (JavaScript), Django (Python)                                   |

### 3. CDN: What & Why? 🌍

#### What is a CDN (Content Delivery Network)?

- [x] A network of servers distributed geographically, designed to deliver internet content more efficiently.
- [x] It works by caching content in multiple locations around the world, closer to the users.
- [x] CDNs not only distribute static content (like images and scripts) but also dynamic content by leveraging edge computing.

#### Why Use a CDN?

- [x] **Faster Content Delivery:** Reduces latency by serving content from the nearest server to the user's location.
- [x] **Improved Website Performance:** Enhances user experience through faster loading times, which can also contribute to higher SEO rankings.
- [x] **Scalability:** Easily handles high traffic loads and spikes, ensuring website stability.
- [x] **Security:** Offers additional security layers like DDoS protection and secure token authentication.
- [x] **Cost-Efficiency:** Reduces the burden on the origin server, potentially lowering hosting costs.

#### Ideal Use Cases

- [x] Websites with a global audience, where users are spread across different geographic locations.
- [x] High-traffic sites requiring efficient handling of spikes during events or promotions.
- [x] Content-rich sites (like media, e-commerce) needing fast load times for images, videos, and scripts.

### 4. Why 'React'? 💭

#### What is React?

- [x] React is a popular JavaScript library for building user interfaces, primarily for single-page applications.
- [x] It allows developers to create large web applications that can change data without reloading the page.
- [x] Known for its component-based architecture, React enables developers to build encapsulated components that manage their own state, then compose them to make complex UIs.

#### Key Features of React

- [x] **Declarative UI:** Simplifies the creation of interactive UIs. Developers can design views for each state in the application, and React efficiently updates and renders components as data changes.
- [x] **Component-Based Architecture:** Encourages building reusable UI components that manage their own state, leading to more manageable and scalable codebases.
- [x] **Virtual DOM:** Utilizes a virtual Document Object Model (DOM), allowing React to minimize direct manipulation of the DOM, optimize rendering, and improve app performance.
- [x] **JSX Syntax:** Uses JSX, a syntax extension for JavaScript, enabling developers to write HTML structures in the same file as JavaScript code.
- [x] **Unidirectional Data Flow:** Employs a one-way data binding model, which provides better control over the application and simplifies debugging.
- [x] **Hooks:** A feature that allows functional components to manage state and side effects, making them as powerful as class-based components.
- [x] **Context API:** Facilitates the sharing of values like themes and user authentication between components without passing props through every level of the tree.
- [x] **Extensive Ecosystem:** Offers a vast range of additional libraries and tools for routing, state management (like Redux), and more, enhancing its capabilities.
- [x] **Strong Community Support:** Backed by Facebook and a large developer community, ensuring continuous improvements and a rich set of resources for learning.

#### Why Use React?

- [x] **Responsive to Data Changes:** React is named for its reactivity to data changes, updating views automatically as the state of components changes.
- [x] **Efficient and Flexible:** React’s unique approach to updating the DOM allows for efficient and flexible rendering of UI components.
- [x] **Strong Community and Ecosystem:** Backed by Facebook and a large community of developers, React has a vast ecosystem of libraries and tools.
- [x] **Wide Adoption in the Industry:** Used by many large companies, React is a proven technology in large-scale applications.

#### Ideal Use Cases for React

- [x] Single-page applications (SPAs) where seamless user experience and dynamic content updates are essential.
- [x] Complex, interactive user interfaces with reusable components.
- [x] Projects where the flexibility to use other libraries and tools is a priority.

#### React in Practice

- [x] Examples of popular websites built with React include Facebook, Instagram, Airbnb, and Netflix.

### 5. `crossorigin` in React Script Tags 🔒

- [x] In React applications, the `crossorigin` attribute in `<script>` tags is crucial for controlling how scripts from different origins (like CDNs) are loaded, enhancing security and improving error handling.

#### Example

- [x] When integrating an external JavaScript library hosted on a CDN in your React app, you might use: `<script src="https://cdn.example.com/library.js" crossorigin="anonymous"></script>`. This ensures that the browser fetches the script without sending user credentials and provides more detailed error information, which is especially useful for debugging in a development environment.

### 6. React vs ReactDOM 🤔

- **React:** Core library for UI components.
- **ReactDOM:** Handles rendering of components in the web environment.This manages dom

#### Key Differences

- [x] While React provides the framework for building and managing UI components, ReactDOM acts as the bridge between these React components and the actual rendering in the web environment.
- [x] React can be paired with other rendering libraries for different platforms (like React Native for mobile apps), but ReactDOM is specific to web development.

### 7. CDN Files: Development vs Production 🛠️🚀

- **Development (`react.development.js`):** Includes detailed warnings, not optimized.
- **Production (`react.production.js`):**

### 8. `async` vs `defer` in Script Loading 📊

#### `async`

- [x] **Asynchronous Loading:** The `async` attribute allows the script to be downloaded asynchronously while the HTML document is being parsed.
- [x] **Immediate Execution:** Once the script is downloaded, it's executed immediately, which might interrupt HTML parsing.
- [x] **Use Case:** Ideal for scripts that don't depend on other scripts and don't have actions that need to wait for the HTML parsing to complete.

#### `defer`

- [x] **Deferred Execution:** With `defer`, the script is also downloaded asynchronously during HTML parsing, but it's executed only after the parsing is fully completed.
- [x] **Ordered Execution:** Scripts with `defer` are executed in the order they appear in the document, maintaining script execution order.
- [x] **Use Case:** Best for scripts that need the full HTML document to be parsed (like manipulating the DOM), or for scripts that depend on other scripts loaded with `defer`.

#### Key Differences

- [x] The main difference lies in the timing of the execution: `async` scripts execute as soon as they’re downloaded, which can be during HTML parsing, while `defer` delays script execution until after the HTML parsing is complete.
- [x] `async` is suitable for independent scripts, whereas `defer` is more appropriate for scripts that need the whole page to be available or rely on the order of script execution.

---
