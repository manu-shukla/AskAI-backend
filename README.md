# AskAI Backend API

This repository serves as the backend for the AskAI Chrome Extension, integrating the Hugging Face model OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5. The Chrome Extension's build link can be found in the [AskAI Chrome Extension repo](https://github.com/manu-shukla/AskAI-chrome-extension)

## Installation

1. Clone the repository:

2. Navigate to the project directory and install dependencies:

    ```bash
    cd AskAI-backend
    npm install
    ```

3. Run the development server of NextJS API:

    ```bash
    npm run next
    ```

    Ensure that port 3000 is available to avoid errors.

4. Check if the API is running by visiting [http://localhost:3000/api/status](http://localhost:3000/api/status).

5. Refer to the installation steps in the [AskAI Chrome Extension repo](https://github.com/manu-shukla/AskAI-chrome-extension) for further setup.

## Extension Codebase

This repository also includes the codebase for the Chrome Extension. To build the extension, run the following command in the terminal:

```bash
npm run dev
```

This will create a development build for the extension, allowing you to install and test it.

Feel free to reach out if you have any questions or need further assistance!
