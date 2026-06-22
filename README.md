# Calculator CI/CD Demo

Project Description
This project is a simple web-based calculator designed to demonstrate core JavaScript concepts, automated testing with Jest, and basic CI/CD principles.
It features both basic math operations (addition, subtraction, multiplication, and division) and advanced calculations like square and cube. The project is organized with a clear separation between mathematical logic and user interface interaction using a bridge pattern. (bridge pattern: I created uiAdd, uiSubtract, uiMultiply, uiDivide, uiSquare, uiCube functions to grab the input from index.html and perform the calculations using the math functions defined in calculator.js)

Key features include:
- **Math Operations**: Supports addition, subtraction, multiplication, and division, as well as advanced operations like square and cube.
- **Automated Testing**: Uses Jest to ensure all mathematical logic is accurate and reliable.
- **User Interface**: Features a clean web interface that connects to the underlying logic using a "Bridge" pattern, keeping the code organized and testable.
- **CI/CD Ready**: Configured with ESLint and GitHub Actions to maintain code quality and automate testing.

Technologies
- JavaScript
- NodeJS
- Git
- GitHub
- Jest
- ESLint
- GitHub Actions

Installation:
  npm install

Run Tests: 
  npm test
  or to run only specific tests:
  npm test -- -t add
  npm test -- -t subtract
  npm test -- -t multiply
  npm test -- -t divide
  npm test -- -t square
  npm test -- -t cube


Run ESLint:
  npm run lint

CI/CD Flow: (from ci.yml):
1. **Multi-Trigger**: Automation runs on every push/PR to `main`, every 5 minutes by schedule, or via a manual button.
2. **Build & Setup**: GitHub Actions initializes the environment and installs the project's dependencies.
3. **Quality Checks**: The system runs ESLint to check for style issues and Jest to verify math logic.
4. **Build Simulation**: A placeholder step that simulates the build process (currently runs an `echo` command).
5. **Deploy Simulation**: A placeholder step that simulates a deployment (currently runs an `echo` command).
6. **Nightly Reports**: A separate job that generates status reports during scheduled or manual runs. It will echo the trigger that caused the nightly report via github.event_name.
