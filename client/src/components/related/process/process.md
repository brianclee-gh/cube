# Related Items and Comparison
## Overview
- Two sets of related products
  - List of products that are related to current product
  - Custom list created by user of products which user has grouped into an outfit

## Click Reporting
- [x] Should be active on every component
- [x] Should utilize HOC
- [x] Reports clicked element, component name, time stamp at time of click

## Related Product Cards
- [x] Clickable, navigates to detail page of that product
- [x] Product information
  - [x] Product category
  - [x] Product name
  - [x] Price, derived from default style
    - [x] Needs to reflect sale prices (red, strike through)
  - [x] Star rating
    - [x] Calculate star rating
    - [x] 5 stars, filled in rounded to nearest 1/4
  - [x] Product preview image
    - [x] Default to primary image
    - [x] Use Unsplash URL to resize images for loading
  - [x] Action button => Modal
- [x] Carousel
  - [x] Any product cards that do not fit on screen should appear offscreen on the carousel
  - [x] Center list so that first product is on left hand side
  - [x] Navigation arrows
- [ ] Tests
  - [ ] Does clicking a card navigate the user to the detail page of that product?
  - [ ] Does the image scale correctly?
  - [ ] Does the card display the correct category, name, and price information?
  - [ ] Does the sale price show correctly?
  - [ ] Does the star component correctly reflect its rating?

## Related Products List
- [x] User interactions will NOT modify this list
- [x] Action button
  - [x] Star icon
  - [x] Opens a comparison modal
    - [x] Titled "Comparing"
    - [x] 3 column table
    - [x] 1st column: product for current page
    - [x] 2nd column: characteristic
    - [x] 3rd column: compared product
    - [x] Display specific quality or checkmark if "true"
    - [x] Make scrollable if too long, with product names fixed at top
  - [ ] Inner carousel
    - [ ] Shows additional product/style photos on hover
    - [ ] Can scroll/navigate through
  - [ ] Tests
    - [ ] Renders correctly?
    - [ ] Is the list the same across multiple users?
    - [ ] Does it successfully display the comparison modal?
    - [ ] Does the table show successfully on the modal?
    - [ ] Is the modal scrollable?
    - [ ] Does clicking the star scucessfully open the comparison modal?
    - [ ] Is the user able to scroll the card carousel?

## Your Outfit List
- [x] Contains products that user has selected
- [x] Unique to each user
- [x] First product
  - [x] Diplays a "+" icon
  - [x] A button that adds currently viewed product to the outfit list (used objects)
  - [x] Renders new card on new product load
- [x] By default, empty
- [x] Only add a specific product once
- [x] No max to # items
- [x] Persist even when navigating (ls?)
- [x] Action button is 'x', removes from list
- [ ] Tests
  - [x] Renders correctly?
  - [ ] Does the outfit list start out empty?
  - [ ] Does adding an item successfully show in state?
  - [ ] Does removing an item from the outfit show in state?
  - [ ] Does it successfully prevent adding the same product more than once?
  - [ ] Does it persist across refreshing?
  - [ ] Is it unique to each user?
  - [ ] Does clicking the '+' button add the product to the list?
  - [ ] Does clicking the 'X' button remove the product from the list?