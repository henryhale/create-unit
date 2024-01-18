<div align=center>

<img src=https://github.com/henryhale/create-unit/raw/master/starter/src/public/favicon.png />

# Unit.js

focus - simplicity - productivity

</div>

## Overview

Unit.js is a lightweight HTML-first UI framework designed to bring focus, simplicity, and enhanced developer productivity to your projects.
Inspired by [Alpine.js](https://alpinejs.dev) and powered by [Vite](https://vitejs.dev), Unit.js encourages a streamlined development experience with a unique approach to components.

Define state and components once, reuse them wherever.

> Note: ⚠️ This project is still under development.

## Screenshot

![](https://github.com/henryhale/create-unit/blob/master/screenshot.png)

Demo link: [Click here](https://henryhale.github.io/unit.js/).

## Key Features

- [x] **Focus on Simplicity**: Unit.js embraces simplicity as a core principle, making it easy for developers to create and manage UI components effortlessly.

- [x] **File-based Components**: Components in Unit.js are represented as files ending with the `.unit` extension. This convention simplifies organization and encourages a modular structure in your project. You can import `.unit` files into another `.unit` file.

- [x] **Alpine.js Syntax**: Leverage the expressive syntax of Alpine.js within your components. Enjoy the power of declarative programming without unnecessary complexity.

- [x] **HTML Build Output**: Generate a fully-rendered page at build time (_Alpine.js will be injected_).

- [x] **Reactive by Default**: Components contain plain HTML code with Alpine.js syntax that is reactive during runtime.

> Note:
> Unit.js is powered by [Vite](https://vitejs.dev) and so most features
> can be used directly in your project for example asset handling.

## Preresquites

Basic understanding of HTML, CSS, JavaScript, [Alpine.js](https://alpinejs.dev/) and Node.js ([npm](https://npmjs.org) or [pnpm](https://pnpm.io)) is required.

## Getting Started

1. **Installation**

   Create a new project, `my_app` using your preferred package manager.

   ```sh
    npx create unit my_app
    # pnpm dlx create-unit my_app
    ```

    Navigate to your project and install dependencies

    ```sh
    cd my_app
    npm install
    # pnpm install
    ```

2. **Create Your First Component**
   
   Start building your UI component using [Alpine.js](https://alpinejs.dev/) syntax by simply create a new file `hello.unit` under the `src/components/` folder. 

   ```html
   <!-- hello.unit -->
   <div x-data="{ message: 'Hello, Unit.js!' }">
     <p x-text="message"></p>
   </div>
   ```

   Import it into the `src/pages/index.unit` and you're ready to go live.

   ```html
   <!-- index.unit -->
   import Hello from "../components/hello.unit";

   <Hello />
   ```

3. **Run the Development Server**
   
   Start the development server to see your changes in real-time.

   ```sh
   npm run dev
   # pnpm dev
   ```

4. **Build for Production**
   
   When you're ready to deploy your application, build for production to optimize and minimize your code.

   ```sh
   npm run build
   # pnpm build
   ```

5. **Deployment**
   
   After building your project, production files exist in the `dist` folder at the root of your project. Check out [Vite's deployment guide](https://vitejs.dev/guide/static-deploy.html).

## File Structure

- `.vscode/`: contains settings and recommended extensions for [Visual Studio Code](https://code.visualstudio.com/) users
- `src/`: all your project source files here
- `src/components/`: contains reusable `.unit` files
- `src/data/`: contains composable and state scripts
- `src/pages/`: contains only `.unit` files for corresponding html pages
- `src/public/`: contains assets to be served at the root like _favicon.png_
- `src/template.html`: used to generate html pages from every `.unit` file in `src/pages/` folder on build time
- `src/main.js`: common script for all pages place in the `src/template.html`. For a different script per page, create another script and add a script tag in the corresponding `.unit` file under the `src/pages/` folder
- `src/style.css`: Shared CSS styles

## Contributing

Contributions are welcome to make Unit.js even better! Feel free to open issues or submit pull requests.

## License

Unit.js is released under the [MIT License](https://github.com/henryhale/create-unit/blob/master/LICENSE.txt).

Copyright &copy; 2024-present, [Henry Hale](https://github.com/henryhale)

---

_Enjoy the focus, simplicity, and increased productivity that Unit.js brings to your UI development!_
