# Quiz My Art 

(By Laura Kondrataite)

![Quiz My Art responsiveness on various screens](assets/documentation/features-images/am-i-responsive.webp)

Quiz My Art is an interactive quiz website that tests the user's art history knowledge. It is an image-based quiz which provides a more engaging and visual appeal to the user.

The user will choose from three different categories, and answer image-based questions based on different question/task prompts. After completing the quiz, they will be taken to a final page screen which will show their total score. 

Quiz My Art game is created for educational purposes only as part of Code Institute's Web Development Diploma course for JavaScript portfolio project.

Link to live page: [Quiz My Art](https://laurakond.github.io/quiz-my-art/)


## Table of Contents

[Design](#design)
- [Target audience](#target-audience)
- [User Stories](#user-stories)
- [Website Structure](#website-structure)
- [Wireframes](#wireframes)
- [Color palette](#color-palette)
- [Font styles](#font-styles)
[Features](#features)
- [Existing features](#existing-features)
- [Features Left to Implement](#features-left-to-implement)
[Tools and Technologies](#tools-and-technologies)
- [Languages used](#languages-used)
- [Frameworks, Libraries and Programs used](#frameworks-libraries-and-programs-used)
[Deployment](#deployment)
- [Local Development](#local-development)
	- [How to Fork](#how-to-fork)
	- [How to Clone](#how-to-clone)
[Testing](#testing)  
[Credits](#credits)
- [Content](#content)
- [Used Code](#used-code)
- [Media](#media)
- [General resources](#general-resources)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Design

### Target audience

This quiz game is aimed towards anyone who enjoys participating in quiz games, wants to learn something new and enjoys their time answering questions to varying degrees of difficulty:

- People who are interested in and like art, art history and history.
- People who want to test their art history knowledge.
- People who would like to learn something new while taking part in an interactive quiz game.
- People who are interested in quizzes and trivia games.


### User Stories

**As a first time user, I want to:**
- Clearly understand how the quiz works and what it is about. 
- Be able to read instructions before the start of the quiz.
- Be able to start the quiz when I am ready.

**As a user I want to:**
- Test my art history knowledge by completing a quiz.
- Choose a category or difficulty of the quiz.
- Have multiple choice questions to pick from.
- See how many questions there are in total per round and which question I am at.
- Instantly see if my choice was correct.
- Find out my final score.
- Be able to take the quiz again after the completion.
- Have a variety of questions that do not repeat.
- Challenge myself by answering the questions without multiple choice options.

### Website Structure

The website follows a one-page structure with multiple sections that are accessible by applying JavaScript functionality. Upon loading the screen, the user is taken to a Home or landing page that offers three different categories to choose from. The page shows and, or hides specific sections dependent on button prompts.

### Wireframes
The following wireframe mockups show the initial idea of how the website would look on three different devices: mobile, tablet/iPad and laptop/desktops. They also convey an idea of how the user will navigate between different sections of the page which are prompted using JavaScript.

The final version bears slight differences to the wireframes:
- One of the categories was initially planned to be text based. However, upon further reflection, I decided to have three image categories in order to provide consistency to the quiz. The topic of the category was adapted to focus on art movements and periods instead of the time when the artists lived.
- I decided to adjust the logo of the website to display one letter "Q" on smaller devices such as smaller mobile phones. This feature is visible inside each category upon selection of the quiz theme (shown in the features section below).
- I decided to keep the header displaying the main Logo throughout the game.
- I decided to include a "next button" below the answer choice buttons.
- The Bonus round was not implemented due to time constraints and was moved to the future development stage.
- I changed the display of the landing page for the tablet and desktop screens.

#### Mobile 

**Landing page**

![mobile-landing-page-wireframe](assets/documentation/wireframes/mobile-landing-page-wireframe.webp)

**Each quiz category page**:

![mobile-artist-category-wireframe](assets/documentation/wireframes/mobile-artist-category-wireframe.webp)

![mobile-period-category-wireframe](assets/documentation/wireframes/mobile-period-category-wireframe.webp)

![mobile-painting-category-wireframe](assets/documentation/wireframes/mobile-painting-category-wireframe.webp)

**Score page**

![mobile-score-page-wireframe](assets\documentation\wireframes\mobile-score-display-wireframe.webp)

**404 page**

![mobile-404-wireframe](assets/documentation/wireframes/mobile-404-wireframe.webp)

#### Tablet

**Landing page**

![tablet-landing-page-wireframe](assets/documentation/wireframes/tablet-landing-page-wireframe.webp)

**Quiz category**

![tablet-quiz-category-wireframe](assets/documentation/wireframes/tablet-quiz-category-wireframe.webp)
  
#### Laptop/Desktop

**Landing page**

![desktop-landing-page-wireframe](assets/documentation/wireframes/desktop-landing-page-wireframe.webp)

**Quiz category**

![dekstop-quiz-category-wireframe](assets/documentation/wireframes/desktop-quiz-category-wireframe.webp)

### Color palette

The following palette was used to ensure contrast is achieved between the main parts of the website:

- #F3F7F5 - Seasalt - for main background, header color, default inner button color for "categories" buttons, "Play again" button, and "Return to Home page" button on error page. It was also used as a button font for the hover effect on larger devices.
- #100007 - Licorice - for all fonts excluding the Logo.
	- rgba color hex (16, 0, 7) of Licorice was used for the button shadow effect to make them pop.
- #002A32 - Gunmetal - for the backdrop of the image container, and for the correct button shadow effect.
- #7B5214 - Field drab - for the image container ridge border.
- #E09F3E - Hunyandi yellow - for the footer, main categories' container, answer choice buttons, score section container, and error page message container.
- #9E2A2B - Auburn - for the box shadow effect around the above-mentioned container areas, the header shadow for smaller devices, and for the incorrect button shadow effect.
- #540B0E - Chocolate cosmos - for the font color of the Logo and as a button background color for hover effect on larger devices.

![color-palette](assets/documentation/features-images/pp2-color-palette.webp)

### Font styles

I used [Google fonts](https://fonts.google.com/) to source fonts for the website. These are:

- Cormorant Garamond, serif by [Christian Thalmann](https://fonts.google.com/?query=Christian%20Thalmann)- was used as the Logo font.
- Roboto, sans-serif by [Christian Robertson](https://fonts.google.com/?query=Christian%20Robertson) - was used as the main content font.
 
 [Return to Table of Contents](#table-of-contents)

## Features

The website offers three themes/topics to choose from:
- Name the artist
- Name the art movement or period
- Name the painting

There is also a Score page section that is visible upon completion of the game, and a 404 Error page, which is only visible when a wrong website address is entered or an error occurs.

All features are fully responsive on mobiles, tablets/iPads, laptops and desktops. 

### Existing features

**The Header**

![header-feature-mobile](assets/documentation/features-images/mobile/mobile-header-landing-page-feature.webp)

- Featured in all pages, the header is fully responsive and displays the website's logo. Once inside the quiz, it transitions into a shortened version displaying the letter "Q" so as to not occupy the entire space.
	- This feature is only available on the smallest phones up to 375px (the latter not included).
- The header allows the user to return to the Home page by clicking the Logo or the letter "Q".
- A header border shadow is applied once the user is inside each quiz category, and reverts back to regular display when on the score page. 
	- This feature is only availabe on devices up to 675px (the latter not included).
	
![header-shadow-effect](assets/documentation/features-images/mobile/header-shadow-effect.webp)

<br>

**The Footer**

![enter image description here](link)

- Featured in all the pages, the footer section displays the name of the creator, and on larger screens also shows that it is created for educational purposes only as part of Code Institute Web development programme. It also contains links to the developer's social media sites. Both links open in a new tab to allow easy navigation for the user.

<br>

**The Home page**

- The Homepage is simple and displays three different categories:
	- "Who painted it?" 
	- "Name that Painting?" 
	- "When was it created?". 
The names of the categories are simple, allowing the user to identify the topic of the quiz straight away.

<br>  

**Three Quiz Categories** 

- Each category displays ten questions that are randomly selected from three different question pools. This prevents repetition of questions in case the user goes to the same category again.  
- Each category's question is displayed once the page is loaded with a quick explanation of how to play just underneath it. 
- A question count is displayed just above the image of the art work which allows the user to follow their progress and know which question prompt they are at. 
- Below the displayed question image, the user will find a hint whether it is a title, an artist's name or a full title, artist's name and the date of the painting depending on the category that is selected. 
- The four answer options below the image question image and a prompt are generated using JavaScript, and allows the user to select only one answer. Upon selection of the answer, the game will automatically accept it as a final answer and will block the user from changing their answer choice.
- The button will automatically change color dependent whether the answer choice was correct or not. If the user's guess was incorrect, the correct answer will be highlighted allowing for the user to find out what it was.

<br>

**Next Button** 
- The Next button is hidden until the answer is selected, and then displays at the bottom of the screen just above the footer of the page. Once clicked it will take the user to the next question and hide again until the next answer is selected. 

  ![history section](assets/documentation/features/history-page/history-section.jpg)

<br>

**The Score Page** 
- Following the history section, this section gives a general overview of different aspects to consider when starting to cross-stitch. 

  ![technique section](assets/documentation/features/history-page/technique-section.jpg)

- **The five-step cross-stitch list**. This sub-section provides the user with a detailed break down list of how to start cross-stitching and gives tips for best practices. The list is interactive and can be expanded and minimized by clicking on a "Click here" arrow which provides further engagement with the content.

<br>

**Portfolio Gallery** page is divided into two sections that allow the user to easily identify the type of cross-stitch projects are currently underway and which are completed. 


<br>

**404 Error page** has been included in case there are any bugs that prevent the website or links from working properly. 
- The page has a stylised link that clearly indicates interactivity and takes the user back to the Home page of the website. 

  ![ 404 error page](link)

### Features Left to Implement


### Accessibility

  - I have followed good standard accessibility practices by including the following:
	  - I used semantic HTML.
	  - I included descriptive atl attributes to used images. 
	  - I marked the current page with the "current" attribute to ensure that screen readers indicate it to the users.
	  - I provided descriptive information for the screen readers where icons were used.
	  - I ensured that sufficient color contrast is provided when choosing the color palette.    

 [Return to Table of Contents](#table-of-contents)

## Tools and Technologies

### Languages used

- HTML, CSS and JavaScript languages were used for creating this website.
- Markdown language was used for creating the README file.

### Frameworks, Libraries and Programs used

The following resources were used to help implement the website:
- [Basamiq](https://balsamiq.com/) for creating wireframes
- [GitHub](https://github.com/) for creating and storing files and folders of the website
- Git was used for version control
- VScode editor for writing the code
- [Font Awesome](https://fontawesome.com/) for providing iconography for the website
- [Google Fonts](https://fonts.google.com/) for choosing appropriate fonts
- [Favicon](https://favicon.io/) for generating a favicon
- Google Chrome DevTools for testing, troubleshooting and brainstorming code solutions
- [Am I Responsive?](https://ui.dev/amiresponsive) website for showing the website's responsiveness on different devices
- [Pixelied](https://pixelied.com/), [ILoveIMG](https://www.iloveimg.com/), Gimp, for resizing, compressing and editing images
- [Coolors](https://coolors.co/) for generating the color palette
- WCAG color contrast checker for website accessibilty

 [Return to Table of Contents](#table-of-contents)

## Deployment

This website was deployed using GitHub pages. The steps to deploy are as follows:

1. Login to GitHub and navigate to the repository page (quiz-my-art), click on the chosen repository.
2. Once inside the repository, click on the "Settings" tab above the repository title.
3. Select "Pages" tab on the left side navigation menu.
4. In the "Source" section (middle of the screen), select "main" or "master" branch, then "root" folder and click "save" button.
5. The GitHub page site will be deployed. 

It might take a few minutes to generate the "live" website link.

The live link to Cross Stitch Art can be found here: [Quiz My Art](link).

 [Return to Table of Contents](#table-of-contents)


## Testing 

The website has been tested on Mozilla Firefox desktop, Internet Explorer desktop, Safari mobile, Google Chrome desktop and mobile. 

###  W3C Validator Testing

All HTML pages and CSS file were tested against W3C Markup and CSS validation services.

**HTML**
- The final run of the blank page through the W3C validator returned no errors. 
- Screenshots of all the test results can be seen below:
	- [page name](link) 
	- [page name](link)
	- [page name](link)
	- [404.html](link)

**CSS**

- No errors were found when passing through the official W3C CSS validator. Screenshot of the test result can be seen [here](link). 

### Unfixed Bugs



### Lighthouse


#### The Home page

	- **Desktop test score:**

      ![Home page desktop](link)

	- **Mobile test score:**
  
      ![Home page mobile](link)

#### Blank page

  
	- **Desktop test score:**
	
      ![History page desktop](link)

	- **Mobile test score:**

      ![History page mobile](link)

#### Blank page


	- **Desktop test score:**

	    ![Portfolio page desktop](link)

	- **Mobile test score:**

	    ![Portfolio page mobile](link)

#### 404 page



  - **Desktop test score:**
  
    ![error page desktop](link)

  - **Mobile test score:**
    
    ![error page mobile](link)

 [Return to Table of Contents](#table-of-contents)

## Credits

The following resources have been used in preparation to and while creating the Quiz My Art website.

- Web Dev Simplified: https://www.youtube.com/watch?v=riDzcEQbX6k
- GreatStack: https://www.youtube.com/watch?v=PBcqGxrr9g8
- How to Become a Developer: https://www.youtube.com/watch?v=MgeQa7qXIwI 
- James Q Quick: https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5



### Content



### Used code
https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/circle

### Media

#### Images

- Images were sourced from wikipedia.org website.
- Favicon and error page image were taken from Pexels.com

### General resources




### Acknowledgments

My thanks goes to my mentor, [Martina Terlevic](https://github.com/SephTheOverwitch), for providing guidance, and support on all things code and project.

A big shout-out to [Vernell Clark](https://github.com/VCGithubCode) for his increadible patience, support and guidance on how to work with JavaScript.

Also a bit thanks goes to [Jamie Connell](https://github.com/GreenNinjaBoy) for helping out with sticky bits when creating the game.

A big thank you goes to the Code Institute Tutor support & Slack community who provided the energy and kept my morale up.



### Code inspiration

 

 [Return to Table of Contents](#table-of-contents)