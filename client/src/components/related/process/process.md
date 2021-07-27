# Related Items and Comparison
## Overview
- Two sets of related products
  - List of products that are related to current product
  - Custom list created by user of products which user has grouped into an outfit

## Related Product Cards
- [x] Clickable, navigates to detail page of that product
- [ ] Product information
  - [x] Product category
  - [x] Product name
  - [x] Price, derived from default style
    - [x] Needs to reflect sale prices (red, strike through)
  - [ ] Star rating
    - [x] Calculate star rating
    - [ ] 5 stars, filled in rounded to nearest 1/4
  - [ ] Product preview image
    - [x] Default to primary image
    - [ ] Use Image CDN to resize images for loading
  - [ ] Action button
- [ ] Carousel
  - [ ] Any product cards that do not fit on screen should appear offscreen on the carousel
  - [ ] Center list so that first product is on left hand side
  - [ ] Navigation arrows
- [ ] Tests
  - [ ] Does clicking a card navigate the user to the detail page of that product?
  - [ ] Does the image scale correctly?
  - [ ] Does the card display the correct category, name, and price information?
  - [ ] Does the sale price show correctly?
  - [ ] Does the star component correctly reflect its rating?

## Related Products List
- [x] User interactions will NOT modify this list
- [ ] Action button
  - [ ] Star icon
  - [ ] Opens a comparison modal
    - [ ] Titled "Comparing"
    - [ ] 3 column table
    - [ ] 1st column: product for current page
    - [ ] 2nd column: characteristic
    - [ ] 3rd column: compared product
    - [ ] Display specific quality or checkmark if "true"
    - [ ] Make scrollable if too long, with product names fixed at top
  - [ ] Tests
    - [ ] Renders correctly?
    - [ ] Is the list the same across multiple users?
    - [ ] Does it successfully display the comparison modal?
    - [ ] Does the table show successfully on the modal?
    - [ ] Is the modal scrollable?
    - [ ] Does clicking the star scucessfully open the comparison modal?
    - [ ] Is the user able to scroll the card carousel?

## Your Outfit List
- [ ] Contains products that user has selected
- [ ] Unique to each user
- [ ] First product
  - [ ] Diplays a "+" icon
  - [ ] A button that adds currently viewed product to the outfit list
- [ ] By default, empty
- [ ] Only add a specific product once
- [ ] No max to # items
- [ ] Persist thru navigation
- [ ] Persist even when navigating (ls?)
- [ ] Action button is 'x', removes from list
- [ ] Tests
  - [ ] Renders correctly?
  - [ ] Does the outfit list start out empty?
  - [ ] Does adding an item successfully show in state?
  - [ ] Does removing an item from the outfit show in state?
  - [ ] Does it successfully prevent adding the same product more than once?
  - [ ] Does it persist across refreshing?
  - [ ] Is it unique to each user?
  - [ ] Does clicking the '+' button add the product to the list?
  - [ ] Does clicking the 'X' button remove the product from the list?