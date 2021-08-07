# RFP54-FEC
> Front End Capstone Project for Galvanize SEI RFP-54

## Overview
Project Catwalk comprises a complete redesign of a clothing retail portal front-end website, intended to modernize and streamline the experience to improve user engagement and activity.

## Table of Contents
- Description
- Installation
- Technology Used
- Contributors

Users should be able to browse different styles and images for a selected product, view detailed product information, view and navigate to similar items, and see and post Q&A and reviews for the product.

## Description
This project is designed around serving a detailed single page website for each of its unique products. Each page is comprised of 4 main widgets or modules: overview, related products, questions and answers, and reviews.

### Overview
>The overview widget is to be seen first by the user. Users should be able to fluidly navigate through different images and views of the product using the photo carousel feature. The information bar should show users essential information: the product name, price, and category. Users should also be able to select different styles and have the widget update its content on demand. The add to cart button should add the product to the user's cart if a size and quantity are selected and valid.

![Alt text](/screenshots/overview.png?raw=true "Overview Widget")

### Related Items
>The related items widget is comprised of two major components. The first component should show the user products that are similar to the currently viewed product. These products should be displayed with their image and basic information (category, name, price, and rating). An action button should show the user a comparison modal between it and the current product. Clicking the product should navigate the user to the clicked product. The second component is an outfit creator. Users should be able to add the currently selected product to their outfit that persists through both navigation and refreshing.

![Alt text](/screenshots/related.png?raw=true "Overview Widget")

### Questions and Answers
>The question and answers widget should display questions and answers that other users have posted about the product. Users should be able to see this content, add their own questions and answers, and report or commend previously posted questions and answers. Each question or answer should track its user, time of posting, number of helpful commendations and reports.

![Alt text](/screenshots/qa.png?raw=true "Q and A Widget")

### Ratings and Reviews
>The rating and reviews widget should display a visual breakdown of the product's reviews and also the reviews themselves. The breakdown should show the average review metrics, the number of 1, 2, 3, 4 and 5 star reviews and also serve as a filter selector for said numbered-star reviews. Each individual review should load its ratings, date, content, and any images added by the user. Users should also be able to post their own reviews with options to upload images.

![Alt text](/screenshots/reviews.png?raw=true "Reviews Widget")

## Installation
Fork and clone this repo then run:

`npm install` in both root and /client folders

`npm run prod:react` in root to run webpack in the client

`npm start:prod` in root to start the server, default listening on port 3000

## Technology Used
- Dependencies: npm

- Linter: ESLint using AirBNB style guide

- Front-end: ReactJS, Babel, Webpack

- Icons: FontAwesome

- CSS Framework: CSS/SASS

- Server: ExpressJS

- Unit Testing: Jest

- Integration Testing: Enzyme

- End to End Testing: Puppeteer

- Deployment: Docker / AWS

## Contributors
- Edrick Ee (Team Goal Tracker)

- Ubin Jung (Team Mental Break Lead)

- Brian Lee (Technical Lead)

- Corey Robinson (Team Lead)

## License
(TBD)
