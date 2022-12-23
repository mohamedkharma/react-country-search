**Due date: Wednesday, December 21 @ 11:59PM EST.**

**Submit via BlackBoard**

# React Country Search

For this assignment, you are provided with code (generated mainly by [create-react-app](https://create-react-app.dev/)) to create a small application that allows users to search for countries and view country data. Please check out the attached images and gifs below to see the output of a working solution.

For this assignment, you will use the [REST Countries API](https://restcountries.com/) to retrieve information for countries.

To search for a country, you will want to send a request to the following URL: 
```
https://restcountries.com/v3.1/name/countryNameGoesHere
```

Please note that you will have to replace `countryNameGoesHere` with the country name that the user provides.

## Requirements

- When a user types a valid country name, the application will retrieve associated information from an API.
- When the user types an invalid country name, the application should display `No results found.`
- A complete solution will reduce unnecessary API calls.

## Mockups

Add an input field where the user can enter a country name, like in the following image:

![Input field For Searching Countries](input_field.png)

Use the user input to search against the REST Countries API. The API will respond with an object for each country if the country name is valid. Use that response to display each country in a separate div like in the following image:

![Display Country Results](search_results.png)

Below you will find a small demo of a working solution.
![Working Solution Demo](demo.gif)

> NOTE: Your styles (colors and look) don't have to be exact. I will only grade you for the functionality.

## Submission

**Please make sure only to submit the App.js file via Blackboard.**

The assignment's grading is as follows:
  - 50% for retrieving data from the API.
  - 30% for surfacing data from the API.
  - 10% for handling errors and no results from the API.
  - 10% for reducing the amount of API calls made.
