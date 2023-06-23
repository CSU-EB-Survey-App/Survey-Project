# Survey-Project
1. Project Title and Authors

Project title: “PioneerPolls” Application

Authors: Marc Jamilano, Khalil Cato, Christian Leon, David Ha, Stephen Klein, Apurva Singh

2. Preface
This document serves as the System Requirements Document for the development of the PioneerPolls app designed specifically for CSUEB students. It outlines the functional and non-functional requirements of the app, and provides an understanding of the system’s capabilities and constraints. It is intended to be used by developers, designers, project managers, stakeholders, and any individuals involved in the development and implementation of the app.
Version 1.0 (Initial Release):The initial version of this document is created to establish a clear understanding of the system requirements for the development team and stakeholders. It serves as a baseline for all subsequent development activities. This version outlines the core features of the app, including user registration and authentication, entity management, search and browse functionality, entity voting and rating, useful marking, lifetime management, sharing and unique links, and non-functional requirements.
3. Introduction

	This document outlines the development plan for "PioneerPolls", a mobile app targeted towards the students of California State University, East Bay (CSUEB). The app will provide a platform for students to rate and vote on various aspects of campus life, including courses, professors, events, and dining options. The goal of this document is to clearly communicate the app's purpose, features, and functionalities to all parties involved: developers, project stakeholders, and end-users. This concise guide will serve as a blueprint for the development team and provide a transparent overview of the system's design and architecture for stakeholders. Our aim is to enrich campus life by fostering a community-driven decision-making environment. By creating a digital space for sharing experiences, we hope to empower students to make more informed decisions based on collective reviews and ratings.

Product Vision

“PioneerPolls” will be a platform built to appeal to students and faculty to create a community to anonymously share opinions and feedback on the quality of classes, professors, restaurants, and school services on the CSUEB campus. This will help students get the most out of their college experience and will allow professors and administration to easily receive feedback and identify areas of excellence or areas that could use improvement.



4. Glossary

	CSUEB: California State University, East Bay
ID: Identification (in the context of a CSUEB student ID number)
API: Application Programming Interface

5. User Requirements Definition

User Stories:

John Doe is a newly registered student who is unaware of what his school has to offer. His first day of lecture presents an overwhelming feeling as the numerous buildings, hidden shortcuts, and unfamiliar pathways present a challenge for new students. In passing , John hears two students talking about a new app that could potentially solve his problem. After a quick search through the app store, John discovers “PioneerPolls”. John is greeted with a friendly interface and personalized login process. Within moments, John is provided a detailed map of all campus interests. The app displays popular buildings and landmarks, but it also shows various points of interest, such as the library, recreational facilities, and coffee shops. Armed with his smartphone and PioneerPolls, John sets off on his first adventure to find hidden gems. 

Jane, a CSUEB student, is registering for classes and is wondering if she should take CS401 in her next semester. She logs into PioneerPolls to see what her peers and fellow students have rated the course. She does a quick search of the ongoing polls and finds that CS401 has a rating of 5 stars. She quickly votes that the poll is helpful in order for the poll to gain popularity. She then proceeds to add the course for her next semester and logs off the app happy with her decision. 

Optimus Prime is curious about what professor to take for their klingon language class. They decide to use the app to create a poll question for a limited time asking who is the best teacher for this class. The poll contains multiple choices that other students could choose to decide on who is the best teacher. By the end of the poll date Optimus was able to see who was the most popular professor and who was the least popular. 

Margit is president of the science club. She has noticed that turnout is low in recent meetings, and suspects it is because the time slot when the meeting takes place is at an inconvenient time for students. To determine the club members’ availability, she creates a poll on PioneerPolls where users are able to vote on their preferred time slot for club meetings. Using this information, the club meetings are held when more people are available and club attendance improves.

Sarah, a freshman at CSU East Bay, is taking too many classes and has too little time to decide what she wants to eat each day. Deciding what to eat was a challenge, but making sure she actually enjoyed her food was impossible. Using PioneerPolls, she was able to easily figure out what to eat on campus. She was also able to determine when the line at the campus Starbucks was at its shortest, so she could get back to her studies quickly. She also discovered that when she did have the time to explore food options on her own, she enjoyed sharing her finds with others. PioneerPolls made it possible for Sarah to not only decide what to eat, but to also be a part of the community.

Sophia is a member of the CSUEB soccer team and wants to gather feedback from her teammates regarding potential jersey designs for the upcoming season. She creates a poll on PioneerPolls with images of different jersey designs and asks her teammates to vote for their favorite. The poll helps Sophia gather valuable insights and preferences, allowing her to make an informed decision about the team's jerseys.

David is a faculty member at CSUEB and wants to receive feedback on his teaching methods and course materials. He creates a poll on PioneerPolls for his students to rate their learning experience and provide comments on areas of improvement. The poll enables David to gauge student satisfaction, identify strengths and weaknesses in his teaching approach, and make necessary adjustments to enhance the learning environment for his students.

Emily is a student representative on the CSUEB Student Council and wants to gather input from the student body on potential changes to campus policies. She creates a series of polls on PioneerPolls, covering topics such as parking regulations, campus safety measures, and student support services. The polls allow students to voice their opinions and actively participate in the decision-making process, ensuring that their concerns and suggestions are taken into account by the Student Council.

User Requirements:

User Account Management:
Users should be able to create an account easily and securely.

Survey Creation and Design:
Users should be able to create surveys with various question types, including multiple choice, rating scales, open ended questions, and more.

Survey Response Collection:
Respondents should be able to access and complete surveys easily on different devices. The application should provide a user-friendly and intuitive interface for respondents to navigate through the survey questions.

Security and Data Privacy:
The application should implement appropriate security measures to protect survey data, ensuring the privacy and confidentiality of respondents. Users should have control over data access and permissions of their information


6. System Requirements Specification

a. Functional Requirements

a.1 User Authentication
The users will be able to login to the application using their school NetID and password. The system will then validate the information to check if it matches students' records. If it matches the user will gain access to the application.

a.2 Search Functionality
Create, read, update, and delete user owned stories.
The system will allow the users to search for completed and ongoing ratings.
The system will additionally  allow users to search for specific reviews/ratings with a search bar.

a.3 Entities (Polling/Voting)
There are two different types of entities:
1) Polling questions with any number of options.
For example: Which Café is best on campus?
a. Caffeine Cave
b. Jim Bean
c. Coffee Engineers
2) Rating questions with user-configurable point scales.
For example: How do you rate SCN-518?
(Rating could be on a 5-point scale)	
The User Should be able to create polls which allows the other users to choose an option on the poll. The system will keep track of how many users choose what specific poll option.
Every entity should have a unique link so that it can be shared.
Every entity can be markable which will be shown on top of searches. 
The System will keep track of which entity has been marked the most/best rating  and show them in top searches in the descending order of (most marked/has a rating of 5:top to least marked/rating of 1 to 0:bottom).

a.4 Lifetime of an entity
The creator of an entity can set start and end dates. If the number of useful votes for an entity exceeds a threshold (e.g., 50 positive votes), the entity stays open forever and will remain in the system. The result for this entity would be visible in perpetuity unless deleted by its creator.

b. Non-functional Requirements

b.1 Performance
System should be able to handle a large amount of users without performance degradation.

b.2 Usability
The user interface should be intuitive and easy to navigate for a seamless user experience.

b.3 Scalability
The platform should be designed to scale and to accommodate increased user traffic and database growth.

b.4 Security
The system should store student ID’s and passwords in a secure manner. The system should implement measures that protect and prevent unauthorized access. This includes password hashing, cross-site scripting, and SQL injection. 

b.5 Constraints
The system should be designed using NodeJS programming language and the React web framework. The platform should be hosted on Heroku’s cloud infrastructure.

b.6 Assumptions and Dependencies
The system assumes a reliable internet connection for users and developers. The system will depend on third-party packages for styles, database relational mapping, and server routing. 

c. UI Appearance Requirements

c.1 Color Scheme
Use a predefined color palette that aligns with the brand identity or desired visual style. Ensure appropriate color contrast between text and background for readability and accessibility.

c.2 Typography
Select appropriate fonts for headings, subheadings, and body text. Define font sizes and line heights to enhance legibility across various devices.

c.3 Layout and Grid
Implement a consistent grid system to create visual balance.

c.4 Icons	
Use clear and recognizable icons that communicate meaning effectively. Maintain consistency in icon style.

c.5  Accessibility 
Follow accessibility guidelines to ensure the UI is usable by people with disabilities. Provide alternate text for icons and images. Avoid relying solely on color cues for conveying information.

7. System Models

Context Diagram

![Context Map](./images/UserJourneyMapping.jpg?raw=true "Contect Map")

8. Use Case Model 

The use case model presents the main functionalities and interactions of the PioneerPolls application; actors, use cases, and actions.
Actors: 
User
Administrator
Use Cases:
User Registration/ Login
Create a Poll/Rating question
Vote on Poll/Rating question
View the Poll Results 
Search the Polls
Manager User Accounts 
Administer System
Relationships: 
Users can create polls, vote in polls, check poll results, search polls, and manage their user accounts.
Additional tools for system administration available to administrators include handling system configurations, user account management, and poll activity monitoring.



