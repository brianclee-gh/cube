Questions & Answers

Functionality:
1. View questions
2. Search for a question
3. Asking a question
4. Answering a question

Questions List
- [x] List of questions that have been asked about the given product
- [x] Displayed in an expanding and collapsing accordion
    - [x] By default, on page load up to 4 questions should be displayed
    - [x] Up to 2 answers should display for each question
    - [x] Remaining q&a’s should be hidden until user clicks “More Answered Questions” button
- [X] Should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful
- [] Have the potential to be filtered to a subset based on user searches
- [] If no questions have been submitted for the product, then the list will collapse and the button to submit a new question will appear near the top of the module**

Individual Question
- QUESTION:
    - [x] The question will display at the top, preceded by “Q:”
- ANSWERS LIST
    - [x] A list of answers will appear below the question. The entire list will be title “A:”
    - [x] Each answer will start on a new line, where the text body of the answer will display
    - [x] Below the answer, the username of answerer and the date the answer was written will be shown
        - [x] Format: “by [username], Month DD, YYYY”
        - [] If the answer is from the seller, then the username should display “Seller” in BOLD
    - [x] A link should appear next to the text “Helpful?” Reading “Yes (#)” with the count of selections for that answer
        - [x] Clicking on this link should increase the count for that response
        - [x] A customer should not be able to vote more than once for this selection***
    - [x] Next to “Helpful?” link, a second link named “Report” should be there. 
        - [] Clicking on this link will mark the answer for internal review***
        - [x] User should not be able to report an answer more than once***
        - [x] After clicking, the “Report” link should change to static text that reads “Reported”
        - [] Answers that have been reported should be marked as such in the system for further action to be taken
    - [x] Answers should appear in the order of ‘helpfulness’
        - [] HOWEVER, any answers from the seller should appear at the top of the list
        - [x] There should be no other sort order for answers
    - [x] By default, only 2 answers will show
        - [x] The rest should be hidden
        - [x] If more than 2 answers exist for the question, a link to “See more answers” should display below the list
            - [x] Clicking on this link should expand the area below the question and display the remainder of the list
            - [x] View for the full list of answers should be confined to half the screen
            - [x] List should be scrollable 
            - [x] When expanded, button for “See more answers” should change to read “Collapse answers”
    - [x] Another link should appear next in line with each question titled “Add Answer”
        - [x] Clicking on this link should open up a modal window containing a dorm through which answers can be submitted

Search Questions
- [x] Search bar will appear above the questions list
- [] Search terms entered in this text input will filter the list for matching results
    - [] After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text
    - [] Filter should continue to update as the user adds or removes characters
- [x] Placeholder: “Have a question? Search for answers…”
- [] If the user clears the search term or has less then 3 characters remaining, the list should return to the state where t is not filtered to matching text
- [] Search filter should work with any other filters or sorts that have been applied, and narrow the results further
    - [] Changes to the short and rating filters should not remove the search term filter

More Answered Questions
- [x] Default: Display up to 2 questions asked
- [x] If there are more than 2 questions that have been asked about a product, a button for “More Answered Questions” will appear below the list
    - [x] If there are 2 or less questions, then the button will not appear
    - [x] Clicking this button will cause up to 2 additional questions to appear
        - [x] List should expand and the questions should show in order below the previously loaded questions
        - [x] As long as there are still unloaded questions, the button will remain below the list
        - [x] Only when there are no more questions, the burrow should no longer appear
- [x] After several loads, the length of the list will become very long. 
    - [x] In order to keep the page manageable, the max height of the questions list should be capped such that the entire q&a module should fit on a single screen
    - [x] The questions should become scrollable
    - [x] The search bar and button should remain fixed outside of the scrollable list

Add a Question
- [x] At the bottom of the Q&A module, a button will appear allowing users to create a new question for the product. 
    - [x] This button should always be available on any product page
- [] Upon clicking the button, a modal window should open, overlaying the product page
- [x] Should be titled “Ask your Question” and subtitled “About the [Product Name Here]”
    -[] Product name should be inserted into subtitle
- [x] Following inputs should appear on the question form:
    - [x] Those indicated as mandatory should have an asterisk next to the title
    - [x] Your Question*
        - [x] Should be a larger text window allowing up to 1000 character
    - [x] What is your nickname*
        - [x] Allowing up to 60 char for the user’s display name
        - [x] Placeholder: “Example: jackson11!”
        - [x] Below this field, there should be a “For privacy reasons, do not use your full name or email address”
    - [x] Your email*
        - [x] 60 char
        - [x] Placeholder: “Why did you like the product or not?”
        - [x] Below this field: “For authentication reasons, you will not be emailed”
    - [x] Submit questions(button)
        - [x] Upon selecting this button, the form’s inputs should be validated
        - [x] If there are any invalid entries, the submission should be prevented, and a warning message will appear
            - [x] Message Title: “You must enter the following:”
            - [x] This error will occur if:
                - 1. [x] Any mandatory fields are blank
                - 2. [x] The email address provided is not in correct email format

Add an Answer Modal
- [x] Though the link provided on each questions list, users will be allowed to submit an answer for the product
- [] Upon clicking the button, a modal window should open, overlaying the product page
    - [x] Modal should be titled: “Submit your Answer”
    - [] Subtitle: “[Product Name]: [Question Body]”
    - [] The appropriate product name and question body should be inserted into the subtitle
- [] Following inputs should appear on the answer form:
    - [x] Those indicated as mandatory should have an asterisk next to the title
    - [x] Your Answer*
        - [x] Should be a larger text window allowing up to 1000 character
    - [x] What is your nickname*
        - [x] Allowing up to 60 char for the user’s display name
        - [x] Placeholder: “Example:jack543!”
        - [x] Below this field, there should be a “For privacy reasons, do not use your full name or email address”
    - [x] Your email*
        - [x] 60 char
        - [x] Placeholder: “Example: jack@gmail.com”
        - [x] Below this field: “For authentication reasons, you will not be emailed”
    - [] Upload your photos
        - [] Button allowing users to upload their photos to the form
        - [] Up to 5 photos should be allowed for each answer
        - [] Clicking the button should open a separate window where the photo can be selected
        - [] After the first image is uploaded, a thumbnail showing the image should appear
            - [] A user should be able to add up to 5 images before the button to add disappears, preventing further additions
    - [] Submit answer (button)
        - [] Upon selecting this button, the form’s inputs should be validated
        - [] If there are any invalid entries, the submission should be prevented, and a warning message will appear
            - [x] Message Title: “You must enter the following:”
            - [] This error will occur if:
                - 1. [x] Any mandatory fields are blank
                - 2. [x] The email address provided is not in correct email format
                - 3. [] The images selected are invalid or unable to be uploaded
