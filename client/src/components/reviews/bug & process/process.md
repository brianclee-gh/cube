[x] Create star component
  [x] create rating star component
    [x] make 5 stars with input method
    [x] once clicked, it should create event with number between 1~5
    [x] use star images on the inputs
    [x] make star change color while hovering over the stars
    [x] chain stars together as it goes up the value
  [x] create review star component
    [x] for review star component, create 5 stars that will reflect rating of the item.
    [x] change color according to the rating of the item
    [x] receive state and update the star rating


[ ] View List
  [x] Successfully Retrieve review list data
  [x] Display 2 tiles at a time.
  [x] Display imgs as thumbnail
  [ ] Receive data according to its sorted by type
  [ ] If there are more than 2 reviews, create a button for “more reviews”
  [ ] If there are less than 2, no button
  [ ] Clicking button loads 2 more reviews below current 2
  [ ] Once review becomes long, it shouldn’t extend the page but become scrollable module
  [ ] Able to change order of reviews
  [ ] If no reviews, show ‘submit a new review’ button on the top of the review module

[x] Rating List
  [x] Successfully retrieve meta rate data
  [x] Display average star
  [x] Display average star with star component
  [x] Display % of recommendation
  [x] Display how many stars it received for each stars
  [x] Display types & its ratings

----------------------------------------------------------------------

[ ] Reviews List
  [x] The heart of the Ratings and Reviews module will be the list of reviews available for the user to read. This list will display all the reviews that have been submitted for the product being viewed.
  [ ] The reviews within this list will be displayed on tiles of a standard size (the contents of this tile are described in section 1.2.2).
  [x] The list should display 2 tiles at a time. If there are more than 2 reviews that have been written for the given product, a button for “More Reviews” will appear below the list.
  [x] If there are 2 or less reviews for the given product, then the button will not appear.
  [x] Clicking this button will cause up to 2 additional reviews to appear. The list should expand, and the review tiles should show in order below the previously loaded questions.
  [x] As long as there are still unloaded reviews, the button will remain below the list.  Once all of the reviews for the product have been loaded, the button should no longer appear.
  [ ] After several loads, the length of the list will become very long.  In order to keep the page manageable, the maximum height of the questions list should be capped such that the entire Reviews module should fit on a single screen.   The reviews list should become scrollable. The sort dropdown and buttons should remain fixed outside of the scrollable list.
  [ ] The order in which the reviews appear, as well as whether all or a filtered subset of the reviews appear will be changeable.
  [ ] If no reviews have been submitted for this product, then the list will collapse, and the button to submit a new review (section 1.2.7) will appear near the top of the module.
  [ ] Future Enhancement - Instead of incrementally loading 2 reviews at a time, clicking the “More Reviews” button should immediately expand the list to its maximum height.  The reviews appearing within should no longer need to be explicitly loaded.  Instead, the list should load in an ‘infinite scroll’, where as the user nears the end of the list, additional questions tack on to the bottom.

[ ] Individual Review Tile
  [x] Each review will be displayed on a single tile within the list.  The tile will display the following information:
  [x] Star Rating - This will be the rating given to the product by this individual review..  The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score.  A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
  [x] The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
  [x] Date of review - The date the review was written should appear in the format “Month DD, YYYY”
  [x] Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters.  On the review tile, this summary will appear in bold font above the full review.
  [x] Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
  [ ] The text submitted as part of the review will be between 50 and 1000 characters long.
  [ ] Users should be able to submit up to 5 images along with a single review.
  [x] By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
  [ ] Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.
  [ ] Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.
  [ ] Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.  However, if the user’s email is associated with a sale in the system then next to the username the text “Verified Purchaser” will appear.
  [ ] Response to Review - Our internal sales team has the ability to respond to any reviews written.  If the review has a corresponding response, this should appear below the reviewer name.  The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.
  [ ] Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Was this review helpful?” will precede two links “Yes (#)” and “No (#)”.   Following “Yes” and “No” will be the count of users that have selected that button.  Clicking either link should cast a vote for that selection.
  [ ] A user on the site does not need to be logged in to provide feedback on helpfulness.
  [ ] A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes” or “No” for a review, they should not be able to select another option again for that review.

[x] Sort Options
  [x] Users will be able to change this ordering.  A dropdown labeled “Sort on'' will contain options on sort order.
  [x] The options within the sort drop down should include
  [x] Helpful - This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
  [x] Newest - This is a straightforward sort based on the date the review was submitted.  The most recent reviews should appear first.
  [x] Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.  Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.
  [x] By default, the reviews in the list should appear in order of relevance.  The dropdown should display “Relevant” as the currently selected option.
  [x] Upon selecting any of the other options, the dropdown should update to display the current selection, and the list should refresh to show the first results for that sort order.
  [x] Changing the sort order will always refresh the reviews list.
  [x] The sort selected should persist even when filters are added or removed.

[ ] Rating Breakdown (Filtering)
  [ ] A breakdown of the ratings received for the product will double as the filtering options for the reviews list.  This breakdown will display at the top left corner of the Rating and Reviews module.
  [x] The top of the breakdown will simply display the average rating for the product.  The rating should be displayed both as a number value as well as represented by star icons.
  [x] The number displayed should be rounded to the nearest single decimal.
  [x] The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
  [x] The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.
  [x] Additionally, the count of total reviews should be listed.
  [x] Below the average rating, a section titled “Rating Breakdown” will appear.  Within this section, the rating distribution will be broken down.
  [x] 5 bars will appear; one for each of the star ratings that a customer can give to a product.  To the left of the bar, the star count will be explicitly stated in the form “# Stars”.
  [x] To the right of the bar, a label with the total number of reviews submitted with that particular rating will be shown.   Only the count will show.
  [ ] The bar itself will be two toned, green and grey.  The portion of the bar which is green will represent the percentage of total reviews which have been submitted that have that particular star rating.  For example, if a product has received 200 reviews and 150 are 5 stars, then the “5 stars” bar should be three quarters green.
  [ ] The green portion of the bar should always be left of the grey portion.
  [ ] If all the reviews submitted for a product are the same rating, then the bar for that star rating will be completely green and the other bars will be completely grey.
  [ ] Each rating breakdown, consisting of the label, the bar, and the count, will act as a filter. Clicking on the breakdown for a star count will filter the reviews list so that only reviews of that rating display.  Hovering over this breakdown will change the background color to indicate it is actionable.
  [ ] The filters will be additive.  If the list has already been filtered for 1 star reviews, clicking on the “2 star” breakdown will update the reviews list such that 1 and 2 star reviews are displayed.
  [ ] The filters will be toggled on and off with each click.  Clicking a second time on a rating breakdown will remove the filter for that rating type.  If this action removes the last or only filter, then the list should return to its default state and all reviews should be shown.
  [ ] Once one or more filters has been applied, a message will appear below the “Rating Breakdown” title.  It will state the filters that have been currently applied.   It will also include a link to “Remove all filters”.  Clicking on this link will remove any filters applied and return the list to the default state.
  [x] The percentage of reviews that ‘recommend’ the product will be displayed below the breakdown.

[ ] Product Breakdown (Factors)
  [ ] Reviews will provide ability to give feedback on specific characteristics of the product.   The characteristics include Size, Width, Comfort, Quality, Length, and Fit.   One or more of these may be relevant for a product.  In the Reviews module, the average feedback received will be displayed for all characteristics which apply to the product.
  [ ] Feedback for characteristics will be on a 5 point scale.  The range of this scale will depend on the characteristic in question.  For example, Size can range from (1) “too small” to (5) “too big”, with the middle option (3) being “perfect”.  Using the same 5 point scale for Quality, however, the scale would range from (1) “poor” to (5) “great”.
  [ ] Regardless of what the range of the scale represents, the 5 point scale will display the same for all of the characteristics of the product.  Each will appear as a grey bar similar to the rating breakdown.  Above the bar, a label will state the characteristic.  Below the bar, the meaning of the lowest selection (1) and the highest selection (5) will appear.   On the bar, a single icon will appear representing the average value received via reviews submitted.  The icon should appear horizontally from the left edge of the bar such that it represents the average input for the characteristic.  For example, if the average is 5, the icon should appear all the way to the right.  An average of 3 should appear in the middle.

[ ] Write New Review
  [ ] At the bottom of the Ratings & Reviews module, a button will appear allowing users to create new reviews for the product.   This button should always be available on any product page.
  [ ] Upon clicking the button a modal window should open, overlaying the product page.  The modal should be titled “Write Your Review” and subtitled “About the [Product Name Here]”.  The product name should be inserted into the subtitle.
  [ ] The following inputs should appear on the review form.  Each should be labelled as titled below.  Those indicated as mandatory should have an asterisk next to the title.
  [ ] The overall rating will be selected via five selectable star icons.  Initially, the stars will all be outlines, and none will be solid.  Clicking on a star will fill that star and all of the stars to the left of it with solid color.  Customers will not be able to select fractions of a star.  After selecting a star, text will appear to the right of the stars explaining the meaning of the selection.  The text will vary as follows:
	1 star - “Poor”
	2 stars - “Fair”
	3 stars - “Average”
	4 stars - “Good”
	5 stars - “Great”
  [ ] Recommendation will be captured via a radio button array of “Yes” and “No”.  Default radio button behavior will apply.
  [ ] Any characteristics designated as applicable for the current product will appear in this area.  For these inputs, the title will be the characteristic title.
  [ ] This input will appear as an array of five radio buttons.  The meaning of the lowest (1) and highest (5) selection will appear below the array of radio buttons.
  [ ] By default, no button will be selected.
  [ ] Above the five buttons, the meaning of the current selection will be explicitly presented.  The default will be “none selected”.  After making a selection, this should update as applicable for the given characteristic.   The meaning of the selections is outlined below:
  [ ] A text input allowing up to 60 characters.
  [ ] Placeholder text should read: “Example: Best purchase ever!”
  [ ] A text input allowing up to 1000 characters.
  [ ] Placeholder text should read: “Why did you like the product or not?”.
  [ ] The review must be over 50 characters long in order to be submitted.   If the user tries to submit a review shorter that 50 characters, then the submission should fail in the same manner as it would for a blank mandatory field.
  [ ] Below the input for the Review body, a counter should appear.  This counter should let the user know how many characters are needed to reach the 50 character minimum.  It should appear in the format “Minimum required characters left: [##]”.  As the user types, the count of characters should update.   After the user reaches 50 characters, the counter should be replaced by a message stating “Minimum reached”.
  [ ] A button will appear allowing users to upload their photos to the form.
  [ ] Clicking the button should open a separate window where the photo to be can be selected.
  [ ] After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
  [ ] A text input allowing up to 60 characters for the user’s display name.
  [ ] Placeholder text should read: “Example: jackson11!”.
  [ ] Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
  [ ] A text input allowing up to 60 characters.
  [ ] Placeholder text should read: “Example: jackson11@email.com”.
  [ ] Below this field, the text “For authentication reasons, you will not be emailed” will appear.
  [ ] A button by which the review can be submitted.
  [ ] Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
  [ ] This error will occur if:
  [ ] Any mandatory fields are blank
  [ ] The review body is less than 50 characters
  [ ] The email address provided is not in correct email format
  [ ] The images selected are invalid or unable to be uploaded.

[ ] Keyword search - Low Priority
  [ ] Above the reviews list, a search bar will allow the user to filter the reviews for any that contain text matching the search term.
  [ ] After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text.  The filter should continue to update as the user adds or removes characters.
  [ ] If the user clears the search term, or removes characters so that less than 3 remain, the list should return to the state where it is not filtered to matching text.
  [ ] The search filter should work with any other filters or sorts that have been applied, and narrow the results further.   Changes to the sort and rating filters should not remove the search term filter.
  [ ] Future Enhancement - If time allows, any matching text within the reviews should be highlighted as the search term changes and the list is filtered down.  The text should appear in the normal black font, surrounded by a yellow highlight.   This should only occur after 3 characters are entered, and the list results have been updated.
