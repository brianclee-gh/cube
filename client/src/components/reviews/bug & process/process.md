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


Rating Breakdown (Filtering)
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
