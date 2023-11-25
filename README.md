# PropertyInvestmentScraper
#### 12th March 2023

A property investment search which allows users to filter by various values.
Built using React and TypeScript.

#### 12th March 2023

An application which searches for properties in the United Kingdom with a set of filters.
Allows for searching Freehold properties only.

## Deploy

- Frontend: 
  - npm run dev
- Backend: 
  - source venv/bin/activate
  - cd backend
  - node app.js

## FE Packages:

  - next
  - react
  - react-dom
  - @mui/material
  - @emotion/react
  - @emotion/styled
  - @mui/icons-material
  <!-- - react-number-format -->
  - axios
  - react-router-dom
  - mongdb
  - express
  - cors
  - dotenv

## BE Packages:

Create venv:
  - python3 -m venv venv

- pip install scrapy
- pip install requests
- pip install beautifulsoup4
- pip install scrapy-useragents
- pip install fake-useragent
- pip install user-agents
- pip install pymongo
- npm install express mongodb body-parser --save

## Folder Structure

/backend - Backend scrapers which provide property and rental price data
  /scrapers - Individual data scrapers.
/src - Frontend application
  /components
    /custom - Custom components.
    /general - Resuable components.
    /layouts - Reusable layouts.
  /data - Data functions and mock data.
  /pages - App screens.
  /server - Backend to frontend integration.
  /styles - General styles.
  /utils - Constants, enums, types & interfaces.

## References:

  - UK Towns & Cities: https://en.wikipedia.org/wiki/List_of_urban_areas_in_the_United_Kingdom
