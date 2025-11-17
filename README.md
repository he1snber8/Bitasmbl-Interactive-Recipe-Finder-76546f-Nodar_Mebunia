# Bitasmbl-Interactive-Recipe-Finder-76546f-Nodar_Mebunia

## Description
Build a responsive web application that allows users to search for recipes, filter by ingredients or dietary preferences, and view detailed recipe steps. The project focuses on dynamic UI rendering, API consumption, and interactive filtering.

## Tech Stack
- Vue.js

## Requirements
- Make the application responsive and visually appealing
- Fetch and display data from an external source
- Handle user input and events efficiently
- Implement dynamic rendering of components based on user input or API data

## Installation
Follow these steps to set up the project locally:

1. Clone the repository (replace remote URL if different):
   git clone https://github.com/he1snber8/Bitasmbl-Interactive-Recipe-Finder-76546f-Nodar_Mebunia.git
2. Change into the project directory:
   cd Bitasmbl-Interactive-Recipe-Finder-76546f-Nodar_Mebunia
3. Install dependencies:
   npm install

Environment variables (optional):
- If the app consumes an external API and you prefer to configure a base URL via environment variables, create a .env file in the project root and add a variable such as:
  VUE_APP_API_BASE_URL=https://api.example.com

Note: Vue.js projects commonly read environment variables prefixed with VUE_APP_. Only add variables your implementation requires.

## Usage
Start the development server:

1. Run the development script (depending on scaffolding, one of the following):
   npm run dev
   OR
   npm run serve

2. Open the development server URL shown in the terminal (commonly http://localhost:5173 or http://localhost:8080).

Build for production:

1. Create a production build:
   npm run build

2. Serve the built assets with a static server of your choice.

## Implementation Steps
1. Clone the repository and install project dependencies with npm install.
2. Scaffold the Vue.js application structure (if not already scaffolded) and ensure a single-page layout that supports responsive breakpoints using CSS Grid or Flexbox.
3. Create core components:
   - SearchBar.vue: capture user search queries and emit search events.
   - Filters.vue: provide UI controls for filtering by ingredients and dietary preferences and emit filter change events.
   - RecipeList.vue: render a list of recipe summary cards based on fetched data and active filters.
   - RecipeCard.vue: display brief recipe info (title, image, key ingredients) and allow selection.
   - RecipeDetail.vue: display detailed recipe steps and full ingredient list when a recipe is selected.
4. Implement a lightweight API service module using the browser fetch API to request recipe data from the external source. Abstract requests into functions (e.g., fetchRecipes(query, filters), fetchRecipeById(id)).
5. Wire component communication using props and events: keep shared state (search query, selected filters, recipe list, selected recipe) in a parent view or root component and pass data down to children.
6. Implement filtering logic client-side: apply ingredient and dietary preference filters to the fetched recipe list before rendering. Ensure filters can be combined and updated reactively.
7. Implement search behavior: debounce input in SearchBar to avoid excessive API calls, call fetchRecipes with the query and update displayed results.
8. Implement dynamic rendering for recipe details: when a recipe is selected, render RecipeDetail with step-by-step instructions and allow returning to the list view.
9. Handle loading and error states: show loading indicators while fetching and user-friendly error messages if API requests fail or return no results.
10. Make the UI responsive and visually appealing: use responsive CSS, media queries, and accessible HTML semantics to ensure the app works across device sizes.
11. Test interactive flows: validate search, filtering, selection of recipe details, and edge cases (empty results, network errors).

## API Endpoints (Optional)
This project consumes an external data source for recipes. No backend API endpoints are defined in this repository by default.