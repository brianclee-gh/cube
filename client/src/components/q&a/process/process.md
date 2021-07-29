Questions & Answers

Functionality:
1. View questions
2. Search for a question
3. Asking a question
4. Answering a question

Questions List
- [x] List of questions that have been asked about the given product
- [] Displayed in an expanding and collapsing accordion
    - [] By default, on page load up to 4 questions should be displayed
    - [] Up to 2 answers should display for each question
    - [] Remaining q&a’s should be hidden until user clicks “More Answered Questions” button
- [] Should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful
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
        - [] Clicking on this link should increase the count for that response
        - [] A customer should not be able to vote more than once for this selection***
    - [x] Next to “Helpful?” link, a second link named “Report” should be there. 
        - [] Clicking on this link will mark the answer for internal review***
        - [] User should not be able to report an answer more than once***
        - [] After clicking, the “Report” link should change to static text that reads “Reported”
        - [] Answers that have been reported should be marked as such in the system for further action to be taken
    - [] Answers should appear in the order of ‘helpfulness’
        - [] HOWEVER, any answers from the seller should appear at the top of the list
        - [] There should be no other sort order for answers
    - [] By default, only 2 answers will show
        - [] The rest should be hidden
        - [] If more than 2 answers exist for the question, a link to “See more answers” should display below the list
            - [] Clicking on this link should expand the area below the question and display the remainder of the list
            - [] View for the full list of answers should be confined to half the screen
            - [] List should be scrollable 
            - [] When expanded, button for “See more answers” should change to read “Collapse answers”
    - [] Another link should appear next in line with each question titled “Add Answer”
        - [] Clicking on this link should open up a modal window containing a dorm through which answers can be submitted

Search Questions
- [] Search bar will appear above the questions list
- [] Search terms entered in this text input will filter the list for matching results
    - [] After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text
    - [] Filter should continue to update as the user adds or removes characters
- [] Placeholder: “Have a question? Search for answers…”
- [] If the user clears the search term or has less then 3 characters remaining, the list should return to the state where t is not filtered to matching text
- [] Search filter should work with any other filters or sorts that have been applied, and narrow the results further
    - [] Changes to the short and rating filters should not remove the search term filter

More Answered Questions
- [] Default: Display up to 2 questions asked
- [] If there are more than 2 questions that have been asked about a product, a button for “More Answered Questions” will appear below the list
    - [] If there are 2 or less questions, then the button will not appear
    - [] Clicking this button will cause up to 2 additional questions to appear
        - [] List should expand and the questions should show in order below the previously loaded questions
        - [] As long as there are still unloaded questions, the button will remain below the list
        - [] Only when there are no more questions, the burrow should no longer appear
- [] After several loads, the length of the list will become very long. 
    - [] In order to keep the page manageable, the max height of the questions list should be capped such that the entire q&a module should fit on a single screen
    - [] The questions should become scrollable
    - [] The search bar and button should remain fixed outside of the scrollable list

Add a Question
- [] At the bottom of the Q&A module, a button will appear allowing users to create a new question for the product. 
    - [] This button should always be available on any product page
- [] Upon clicking the button, a modal window should open, overlaying the product page
- [] Should be titled “Ask your Question” and subtitled “About the [Product Name Here]”
    -[] Product name should be inserted into subtitle
- [] Following inputs should appear on the question form:
    - [] Those indicated as mandatory should have an asterisk next to the title
    - [] Your Question*
        - [] Should be a larger text window allowing up to 1000 character
    - [] What is your nickname*
        - [] Allowing up to 60 char for the user’s display name
        - [] Placeholder: “Example: jackson11!”
        - [] Below this field, there should be a “For privacy reasons, do not use your full name or email address”
    - [] Your email*
        - [] 60 char
        - [] Placeholder: “Why did you like the product or not?”
        - [] Below this field: “For authentication reasons, you will not be emailed”
    - [] Submit questions(button)
        - [] Upon selecting this button, the form’s inputs should be validated
        - [] If there are any invalid entries, the submission should be prevented, and a warning message will appear
            - [] Message Title: “You must enter the following:”
            - [] This error will occur if:
                - 1. [] Any mandatory fields are blank
                - 2. [] The email address provided is not in correct email format

Add an Answer Modal
- [] Though the link provided on each questions list, users will be allowed to submit an answer for the product
- [] Upon clicking the button, a modal window should open, overlaying the product page
    - [] Modal should be titled: “Submit your Answer”
    - [] Subtitle: “[Product Name]: [Question Body]”
    - [] The appropriate product name and question body should be inserted into the subtitle
- [] Following inputs should appear on the answer form:
    - [] Those indicated as mandatory should have an asterisk next to the title
    - [] Your Answer*
        - [] Should be a larger text window allowing up to 1000 character
    - [] What is your nickname*
        - [] Allowing up to 60 char for the user’s display name
        - [] Placeholder: “Example:jack543!”
        - [] Below this field, there should be a “For privacy reasons, do not use your full name or email address”
    - [] Your email*
        - [] 60 char
        - [] Placeholder: “Example: jack@gmail.com”
        - [] Below this field: “For authentication reasons, you will not be emailed”
    - [] Upload your photos
        - [] Button allowing users to upload their photos to the form
        - [] Up to 5 photos should be allowed for each answer
        - [] Clicking the button should open a separate window where the photo can be selected
        - [] After the first image is uploaded, a thumbnail showing the image should appear
            - [] A user should be able to add up to 5 images before the button to add disappears, preventing further additions
    - [] Submit answer (button)
        - [] Upon selecting this button, the form’s inputs should be validated
        - [] If there are any invalid entries, the submission should be prevented, and a warning message will appear
            - [] Message Title: “You must enter the following:”
            - [] This error will occur if:
                - 1. [] Any mandatory fields are blank
                - 2. [] The email address provided is not in correct email format
                - 3. [] The images selected are invalid or unable to be uploaded
