#  Client-Side Dynamic CV Builder

A lightweight, high-performance **Single Page Application (SPA)** built with **Vue 3** and **Vite** that allows users to create, preview, and export professional resumes instantly. The application runs entirely on the client side, ensuring 100% data privacy with zero database dependencies.


##  Key Features

* **Reactive Form Workspace:** Powered by Vue’s two-way data binding (`v-model`) for seamless real-time data input.
* **Dynamic Component Arrays:** Users can add or remove multiple work experience blocks and professional skills dynamically using inline controls.
* **Zero-Data Loss Navigation:** Integrated with Web `SessionStorage` API to cache form data. If a user goes back from the Preview page to edit details, the state is fully restored without resetting the fields.
* **International Phone Input:** Embedded with `vue-tel-input` to provide an automated country dialing code dropdown complete with national flag icons.
* **Dual-Format Export Engine:**
    * **PDF Export:** Utilizes native browser print pipelines via optimized CSS `@media print` rules to instantly generate clean A4 resume PDFs without UI buttons.
    * **Word (.docx) Export:** Integrates the `docx` library to compile reactive user data into a standard Microsoft Word document binary stream directly in the browser.



## Tech Stack & Dependencies

* **Core Framework:** Vue 3 (Composition API)
* **Build Tool:** Vite
* **Routing:** Vue Router
* **State & Persistence:** SessionStorage & LocalStorage Web APIs
* **Libraries:** `vue-tel-input` (International Phone UI), `docx` (Word File Compiler)

---

##  Repository Directory Structure

```text
├── index.html          # Root entry point & single-page DOM mounting node
├── src/
│   ├── main.js         # App bootstrapper; registers router & global plugins
│   ├── style.css       # Unified design system and print stylesheet overrides
│   ├── router/
│   │   └── index.js    # Vue Router matrix configuration (Home, Builder, Preview)
│   └── views/
│       ├── HomeView.vue       # Interactive Landing/Welcome page
│       ├── BuilderView.vue    # Form workspace with dynamic list scaling loops
│       └── PreviewView.vue    # Specialized layout preview and file delivery sheet
└── package.json        # Dependencies tracking and script configurations