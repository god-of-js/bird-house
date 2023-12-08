# Birdhouse App: A Feathered Venture into Code Nesting

In the bustling realm of software engineering, I found myself in an unexpected haven—building an application for housing birds. This unique endeavor led me to craft the Birdhouse App, a project that not only provides shelter for our feathered friends but also embraces sound architectural practices and thoughtful design decisions.

## How to run the project

It is advised to use `pnpm` to avoid dependency issues.
To run this project use the command

```
pnpm i
pnpm run dev
```

## How to run the using Docker

To  run the project using docker

```
docker build -t frontend-app .
docker run -p 8080:80 frontend-app
```

## How to test

To test the project use the command

```
pnpm run test
```

## Directories and Thought Process

This section gives an explanation of certain concepts that were employed in the development of this project

### API Directory: Repository-Based Patterns Soar

At the heart of the application lies the API directory, where I've adopted the repository-based pattern to interact seamlessly with the backend. This approach introduces an additional layer of abstraction, enhancing readability and maintainability. A key advantage surfaces when contemplating changes in underlying technologies. For instance, transitioning from Firebase to a custom Node.js server was remarkably smooth, thanks to the clarity and separation of concerns facilitated by this pattern.

### Components Directory: Iconic Flexibility

The Components directory stands as a testament to modularity, housing essential components like `TheIcon.vue`. This particular component acts as a wrapper for SVG icons, providing an abstraction that simplifies the process of changing icons. A notable experience from a previous project, where a shift to a premium icon set was mandated, highlighted the convenience of altering icons in one centralized location. Embracing this wrapper component approach ensures adaptability to varying icon sets and fosters collaborative contributions.

Other foundational components, such as `ThePaginator`, `TheTabs`, and `TheButton`, reside in this directory. Each of these base components undergoes rigorous testing, ensuring reliability and consistency across the application. These components were also made to adhere to the best accessibility rules like tabbing for keyboard accessibility.

### Layout Directory: Crafting Universal Aesthetics

The Layout directory serves as a canvas for universal code. Here, I incorporate components that span entire dashboards, such as global sidebars or network request indicators. This centralized approach simplifies the maintenance of common visual elements across the application.

### Modules Directory: Store Management Simplified

The Modules directory encapsulates the application's store. Given the scale of the Birdhouse App, a single store file suffices to manage the state efficiently. This decision streamlines state management, fostering clarity and ease of navigation.

### Pages Directory: Routing through Birdsong

The Pages directory is the gateway to the application's navigable terrain. Pages, accessible through the router, bear the pragmatic suffix "Page" for seamless IDE searches. This simple convention enhances developer experience, allowing for swift page discovery.

### Types Directory: Global Harmony in Definitions

In the Types directory, I house global type definitions. This centralized repository ensures consistent and coherent typing throughout the application, fostering clarity and maintainability.

## Conclusion: Navigating the Skies of Code

The Birdhouse App takes flight as a harmonious symphony of well-thought-out architectural choices, modular design principles, and a touch of playful creativity. As we navigate the skies of code, this avian-inspired venture stands as a testament to the adaptability and resilience embedded in thoughtful software engineering practices.
