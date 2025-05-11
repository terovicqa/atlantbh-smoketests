# Navigator.ba Cypress Smoke-Test Suite

This repository contains smoke-test suite for the Navigator.ba web application, built with Cypress. 

It verifies the core user flows — search, category navigation, specific place navigation, and basic place creation

---

## Project Structure

## Prerequisites

- **Cypress**  
  Installed locally via:
  ```bash
  npm install cypress --save-dev

## Installation

1. **Clone this repository**  
   ```bash
   git clone https://github.com/terovicqa/atlantbh-smoketests.git
   cd <your-repo-name>

## Running the tests
1. **Interactive Mode (Cypress Test Runner)**  
   ```bash
   npx cypress open

- Launches the Cypress UI.

- Select smoketest.cy.js from the list to watch tests run in real time.

## Smoke-Test Coverage
1. Search for a valid location
2. Navigate by category
3. Navigate to a place’s detail page
4. Create place (error path)
