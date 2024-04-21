# Testing readme for "Quiz My Art" project
(By Laura Kondrataite)

## Contents

[Testing](#testing)

- [W3C Validator testing](#w3c-validator-testing)
- [JS Hint testing](#js-hint-testing)
- [Bugs](#bugs)
	- [Website development and related issues](#website-development-and-related-issues)
	- [Fixed bugs](#fixed-bugs)
	- [Unfixed bugs](#unfixed-bugs)
- [Lighthouse](#lighthouse)
- [User stories testing](#user-stories-testing)
- [Accessibility](#accessibility)
- [Browser testing](#browser-testing)
- [Responsiveness testing](#responsiveness-testing)
- [User testing](#user-testing)
- [Manual testing](#manual-testing)


## Testing

### W3C Validator Testing

- All HTML pages and CSS file were tested with W3C Markup and CSS validation services. 

#### HTML

**Index.html page**
- Initial run of the index.html returned an error indicating that the img element, which is being generated using JavaScript, was missing correct src and alt attributes (image of the test lost). 
	- I resolved this by using a "#" as a placeholder for both src and alt attributes, and ensured that the alt attribute is being generated together with the image src attribute.
- The final run of the **index.html page** through the W3C validator returned no errors.
	- The screenshot of the final test run can be found [here](assets/documentation/testing-images/w3school/w3c-index.webp).

**404 page**
- Initial run of 404 error html page returned an error for the aria-current atrribute for h1 element.
	- The screenshot of the test run with one displayed error can be found [here](assets/documentation/testing-images/w3school/w3c-404-with-error.webp).
	- I resolved this by adjusting the correct value to "page".
- The second error that was generated (image lost due to multiple corrections of the code) returned semantic error indicating that a button element cannot be stored inside an anchor tag. 
	- I had several attempts to try and connect the button area to the main index.html file. At the end I decided to keep the anchor tag and style it to look like a button. 
	- The screenshot of the final test run can be found [here](assets/documentation/testing-images/w3school/w3c-404-no-error.webp).


**CSS**
- No errors were found when passing through the official W3C CSS validator. The screenshot of the test result can be found [here](assets/documentation/testing-images/w3school/w3c-css.webp).

[Return to Table of Contents](#contents)


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


 
### Accessibility

  - I have followed good standard accessibility practices by including the following:
	  - I used semantic HTML.
	  - I included descriptive atl attributes to used images. 
	  - I marked the current page with the "current" attribute to ensure that screen readers indicate it to the users.
	  - I provided descriptive information for the screen readers where icons were used.
	  - I ensured that sufficient color contrast is provided when choosing the color palette.    

 [Return to Table of Contents](#table-of-contents)