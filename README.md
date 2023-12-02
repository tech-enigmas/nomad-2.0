# nomad-frontend

## Nomad

## Authors: Jaye, Emily, Josh

## Version: 1.0.0

## Overview

The vision of this project is to create a web-based app that has functionality to plan a route on
a map, check local camping/air bnb lodging, and sign in to save your content. Also to be able
to check the weather at the destination, as to be able to plan accordingly. This is an all-in-one road trip app.

This app allows individuals to organize and plan a roadtrip to alleviate stress on which way to go and where they will stay.
Make the most out of your vacation!

## Getting Started

To run project:

`npm install`

`npm start`

Open <http://localhost:3000> to view it in your browser.

## Architecture

This project was built in React using languages: JSX, JavaScript, CSS, and utilizes Auth0,
the Google Maps, RIBD Recreation.gov campsite, and Airbnb from RapidAPI.com APIs.

## Changelog

- 06-15-2023 (1.0.0) - Functional site where user can save trip with campsite and Airbnb

## Project Resources

Website reference for google-maps:

https://udarax.me/technology/how-to-draw-directions-between-2-points-in-the-google-maps-using-react-js/

APIs:

- [JavaScript Google Maps API](https://developers.google.com/maps/documentation/javascript)
- [RIDB Recreation.gov API](https://ridb.recreation.gov/docs#/Facilities/getFacilities)
- [Airbnb API by RapidAPI.com](https://rapidapi.com/3b-data-3b-data-default/api/airbnb13/)

Images:

- [Default trip image](https://cdn.pixabay.com/photo/2017/04/05/01/13/trip-2203682_1280.jpg)
- [Campsite default image](https://openclipart.org/download/325701/tent-0032588nahxbh.svg)

Other:

- [Fancy button CSS](https://www.sliderrevolution.com/resources/css-button-hover-effects/)
- [FontAwesome CSS](https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css)

## Travel Routes API Documentation

### GET

Get all user's trips (needs to create a trip first)  

<http://domain/travel-routes/>

Example response:

``` json
[
  {
    "_id": "6488be4dfvdfbfs35345",
    "email": "email@email.com",
    "location": "Seattle to Paris",
    "airbnb": {
      "url": "https://www.airbnb.com/rooms/49651214",
      "city": "Neuilly-sur-Seine",
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e3027851-9df1-4d2b-bdcf-f405a7234994.jpg?aki_policy=profile_x_medium",
      "persons": 1,
      "reviewsCount": 89,
      "rating": 4.34,
      "address": "Neuilly-sur-Seine, Île-de-France, France",
      "price": {
        "rate": 68,
        "currency": "USD",
        "total": 68,
        "priceItems": [
          {
            "amount": 55
          },
          {
            "amount": 1
          },
          {
            "amount": 9
          },
          {
            "amount": 3
          }
        ]
      },
      "previewAmenities": [
        "Wifi",
        "Kitchen"
      ],
      "name": "Small apartment close to subway 1",
      "bathrooms": 1,
      "bedrooms": 1,
      "bed": 1,
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/81b8b8d4-5d70-4ade-94c0-d1602a1476cf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/21f5e545-d697-4f72-a5b7-c84b65b25571.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/58dde851-36a5-4e26-acd1-2688c02a6719.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/37abf6a9-c134-40b9-89f5-c22f0184e4b2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/582c2594-aec6-41b5-8c4d-80c20d13ea4e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e4eeb59e-ba4b-4d56-8323-d14a2e34d013.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/f71b4dde-6303-4266-aa83-72603d1e9d16.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/cbc4659f-e28f-4308-957b-3ae2c199d5a9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/eda298f3-7377-4abf-ba44-da9948529489.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e9466602-4c66-4380-a244-f50ef5bb348b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/9531680d-a8f9-448d-8151-18e9743b275d.jpeg?im_w=720"
      ]
    },
    "dateCreated": "2023-06-13T18:58:01.940Z",
    "__v": 0,
    "campsite": {
      "site": "OHAVER LAKE",
      "fee": "",
      "description": "Campground",
      "image": [
        {
          "Credits": "Salida Ranger District",
          "Description": "Day Use area with picnic tables",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "2569591",
          "EntityType": "Facility",
          "Height": 360,
          "IsGallery": true,
          "IsPreview": false,
          "IsPrimary": false,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Picnic tables near lake with mountains in background",
          "URL": "https://cdn.recreation.gov/public/images/63213.jpg",
          "Width": 540
        },
        {
          "Credits": "Salida Ranger District",
          "Description": "Day Use Parking Area",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "e1965f71-ed14-48c8-bab1-a3d913584894",
          "EntityType": "Facility",
          "Height": 525,
          "IsGallery": true,
          "IsPreview": false,
          "IsPrimary": false,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Gravel parking area next to lake with snow covered mountain in background.",
          "URL": "https://cdn.recreation.gov/public/2023/05/02/22/10/231870_364c8153-6673-46c6-b7a6-8f32494ce032_700.jpeg",
          "Width": 700
        },
        {
          "Credits": "Salida Ranger District",
          "Description": "O'Haver Lake",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "56b0772a-796a-4469-bf09-13765933b8c9",
          "EntityType": "Facility",
          "Height": 810,
          "IsGallery": false,
          "IsPreview": false,
          "IsPrimary": true,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Wooden sign surrounded by aspen trees in camping area.",
          "URL": "https://cdn.recreation.gov/public/2023/05/02/21/44/231870_497b9f90-bb11-4820-9f83-434f8ff26f07_1440.jpeg",
          "Width": 1440
        },
        {
          "Credits": "Salida Ranger District",
          "Description": "Campsite near lake",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "9fac3429-9e39-4d10-850c-cacdfc3979a2",
          "EntityType": "Facility",
          "Height": 525,
          "IsGallery": false,
          "IsPreview": true,
          "IsPrimary": false,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Tent, picnic table with mountains and lake in backgorund",
          "URL": "https://cdn.recreation.gov/public/2023/01/06/17/19/231870_01962a93-c1b8-433f-b14d-f072caf9aeea_700.jpg",
          "Width": 700
        },
        {
          "Credits": "Salida Ranger District",
          "Description": "Fishing pier across from Site 011.",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "7cb40c57-f5a0-4795-b639-7f825aa9a747",
          "EntityType": "Facility",
          "Height": 525,
          "IsGallery": true,
          "IsPreview": false,
          "IsPrimary": false,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Wooden fishing pier on a lake.",
          "URL": "https://cdn.recreation.gov/public/2023/05/02/21/47/231870_53aaad20-5dc7-4c7c-b91a-951d466d320e_700.jpeg",
          "Width": 700
        },
        {
          "Credits": "Salida Ranger District",
          "Description": "Photo of O'Haver Lake",
          "EmbedCode": "",
          "EntityID": "231870",
          "EntityMediaID": "2569593",
          "EntityType": "Facility",
          "Height": 360,
          "IsGallery": true,
          "IsPreview": false,
          "IsPrimary": false,
          "MediaType": "Image",
          "Subtitle": "",
          "Title": "Lake surrounded by hills and trees",
          "URL": "https://cdn.recreation.gov/public/images/63215.jpg",
          "Width": 540
        }
      ]
    }
  }
]
```

Get single trip the user made (requires trip id)
domain/travel-routes/${id}

### POST

Create a trip  

<http://domain/travel-routes/>

### PATCH

Edit a trip (requires trip id)  

<http://domain/travel-routes/${id}>

### DELETE

Delete a trip (requires trip id)  

<http://domain/travel-routes/${id}>

## Figma Board

<https://www.figma.com/file/JYOaHiT7e9v54nR9cIPoPk/Untitled?type=whiteboard&node-id=0-1&t=aqNKd0dkZzRnxe1j-0>

## Project Prep

### What are the key strengths of each person on the team?

Jaye - Attention to details. Top tier logic and problem solving.
Emily - Backend building servers and databases. Godlike CSS Skills.
Josh - Awesome support, teamplayer, hype-train

### How can you best utilize these strengths in the execution of your project?

Jaye - Attention to details.
Emily - Backend building servers and databases.
Josh - Support teammates. create things

### In which professional competencies do you each want to develop greater strength?

Jaye - Looking to grow in all areas.
Emily - Craft competency
Josh - Looking to grow in software knowledge

### Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

Team meeting, decide tasks, execute.

### What will be your group’s process to resolve conflict, when it arises?

Communication. Be nice about it, but not like.... you know... if you ahve problems, adress them.

### What will your team do if one person is taking over the project and not letting the other members contribute?

Call em out!

### How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

Help eachother understand, call a TA if it is not working out explaining.

### How will you raise concerns to members who are not adequately contributing? How and when will you escalate the conflict if your resolution attempts are unsuccessful?

Call em out! Communicate

### What hours will you be available to communicate?

Daytime hours - No Sundays

### What platforms will you use to communicate (ie. Slack, phone …)?

Slack, text

### How often will you take breaks?

As needed

### What is your plan if you start to fall behind?

Work harder, plan better

### How will you communicate after hours and on the weekend?

Text, slack

### What is your strategy for ensuring everyone’s voice is heard?

ask everyone

### How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

Check in with eachother, make sure everyone is feeling heard.

### How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

outline the project, dig deeper into the components of the project, list tasks and pick/choose. keep proper git-flow.

### What project management tool will be used?

Trello

### What components of your project will live on GitHub?

All of them? except .env

### How will you share the repository with your teammates?

made an organization on github and we are all admins

### What is your Git flow?

goood communication - ACP often, pull before working.

### Will you be using a PR review workflow? If so, consider: How many people must review a PR?

we will have main branch protection, but anyone can complete pull requests.

### Who merges PRs?

individuals

### How often will you merge?

end of the night, merge current work. then pull it back down for the next day

### How will you communicate that it’s time to merge?

sound the alarms

## Nomad 2.0


Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.

Describe at least:

What are the key strengths of each person on the team?
How can you best utilize these strengths in the execution of your project?
In which professional competencies do you each want to develop greater strength?
Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?
NOTE: Undoing, Redoing, Replacing, or otherwise steamrolling the project as an individual is considered to be unacceptable. Account for the inevitable divergence of ideas, execution tasks, and assignments of duties here.

Conflict Plan
Your team should agree on a process for handing disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary.

Describe at least:

What will be your group’s process to resolve conflict, when it arises?
What will your team do if one person is taking over the project and not letting the other members contribute?
How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?
How will you raise concerns to members who are not adequately contributing?
How and when will you escalate the conflict if your resolution attempts are unsuccessful?
Communication Plan
Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up.

Describe at least:

What hours will you be available to communicate?
What platforms will you use to communicate (ie. Slack, phone …)?
How often will you take breaks?
What is your plan if you start to fall behind?
How will you communicate after hours and on the weekend?
What is your strategy for ensuring everyone’s voice is heard?
How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?
Work Plan
Explain your work plan to track whether everyone is contributing equally to all parts of the project, and that each person is working on “meaty” problems. This should prevent “lone wolf” efforts and “siloed” efforts.

NOTE: While researching and experimentation is always encouraged, writing and/or committing code to the project on your own during non-working hours or over the weekend is never acceptable. This puts the entire project at risk. Be explicit in calling out your work hours and the distribution of tasks.

Describe at least:

How you will identify tasks, assign tasks, know when they are complete, and manage work in general?
What project management tool will be used?
Presentation Deck
Make a single copy of the Presentation Deck Template. Share your copy will all team members, so everyone is working from the same file.

Link to the shared doc in your project plan.

Schedule your practice session
Work with your instructor to pre-schedule an date and time for your “practice run” of your presentation. This should either be an exact time, or a short window of time designated by your instructor. Plan for a 30-45 minute meeting during the class session before your actual presentation to allow time for both your practice run and feedback from the instructional team.

Reminder as you work on and practice your presentations:

Expressions of gratitude should be heartfelt.
When not presenting, team members should make strong eye contact with the “audience” / camera.
Be positive, no matter how tired or burned out you may feel … “Your smiles can be heard over the phone”
Git Process
Plan out what your team’s Git workflow looks like for coding tasks.

Describe at least:

What components of your project will live on GitHub?
How will you share the repository with your teammates?
What is your Git flow?
Will you be using a PR review workflow? If so, consider:
How many people must review a PR?
Who merges PRs?
How often will you merge?
How will you communicate that it’s time to merge?