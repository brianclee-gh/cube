[x] - Set up Skeleton
      - Create Main component to be outer most bucket
          - Create Description Component
          - Create Product Info Component
          - Create Image Component

[] - Set up Product Info Component
    - Component Tree
      - Product Info (Component)
        -Name
        -Price (if sale strikeout show sale price in red)
        -Category
        -Read # of Reviews (link clickable brings to reviews piece of html)
      - Style (Component)
        - Style Title
          - Style Thumbnails in rows of 4
            - When clicked they update current product price in Product Info
            -also update quantity and size for cart
      -Cart (Component)
        - Select Size Button (based on sku)
        - Select Qty (based on sku)
        - Add to Bag Button (inserts into cart)
        - Button for 'like'

    - Product Info (Component)
      - Store Style Index #
        - When clicking the style
          - needs to store skus object in product info state
          - needs to send image array to Main
    [x]   -Onclick to update Current Selected Syle
             - Updates Price
                -Sets original and sale price if sale price isn't null
                  - conditional strikethrough on price if sale exists
                  - sale price becomes red if exists
             - sets current style product skus in product info state for Cart to use
             - sets style title based on selected style

     [x]        - Create Checkmark on selected style
     [x]        - Toggle State of selected to show checkmark
     [x]        - store currently selected in state, toggle will change active selection


     [x] - Read (#) of Reviews Component
     [x]      - speak with edrick about the star component
            - implement it based on average reviews for current product selected
           - use Function for calculcated star number
            - Create sub star component to seperate concerns
            - useEffect to populate meta data based on current Id
            - render if metaData available - use function created in context to calculcate star value
            - take the total reviews to an outside varibale to be access in the anchor to reviews (once widget added to project)



      [x] - Add to Cart
          - Skus are based on style selected
          - pass sku's object to Add To Cart Component
      [x]     - Size Drop Down First
              - should list all available sizes that have quantity >0
      [x]       - if no sizes have quantities - button should disappear and read 'Out of Stock'
      [x]      - Options Buton?
      [x]      - Default says Select Size
      [x]    - Quantity Drop Down Second
      [x]     - 1 to max capped at 15
      [x]    - if Size not selected '-' will be displayed in quantity and drop down disabeled
              - Once Size Selected drop down defaults to 1
      []   - Add to Cart Button
              - if "select size" is selected, this button will open the size dropdown, message appear above dropdown stating "please select size"
              -onClick handler to track this in state "boolean"
                -if state value is true
                - open text above button- open drop down

      [x]      - if no stock this button is hidden
              - if both valid size and quantity it will add to cart


       Image Component
       [x]   - Load on default Style
       [x]    - needs to accept the selected style image array
       [x]   - First Photo default display
       [x]     - Other photos as thumbnails on the left hand side
       [x]     - on Click on thumbnails to update default display

        [x]    -create active/inactive class css for thumbnail wrappers to display selection

         [x]     - determine how to handle photos of different sizes (currently set a max size)
              - Create left and right button
          [x    - track index of currently seelected thumbnail,
                if end of thumbnail list start from beginning for next button
                if at beginning of thumbnail list start from end of thumbnail list with back button

        [x]    - Link styles that come into image component to style selection in product info.
               - Since Image and Product Info were siblings, I had to create a function in the Parent "main" and pass this function to the child component to get the active style. When calling the function I was able to get that data similar to a callback on the parent level to pass it into local state. From there I was able to pass it down to the image component.

               - Image Default Functionality
         [x]      - First thumbnail needs default highlight
         [x]      -arrows for scrolling thumbnails
         [x]     -arrows for scrolling image
         [x]     -hide left arrow on index = 0
         [x]     -hide right arrow on index = length
         [x]      - switching styles should remember index


         Product Info Wrap Up
        [x] - FaceBook, Twitter, Pinterest Buttons
        [x]  - Add to Cart opens up Size Drop Down and text to say select a size
        [x]   - Reset quantity on style change
             - Check for more than 8 product styles
        [x]    - style buttons for cart

          Photo Zoom
        []  - click to expand
            - hover to zoom (on mouse move)
            - click to exit zoom
            - need a close for expanded

        Cart-Post
          [x]  - Add server route
          [x]  -Test server route
          [x]     -add axios post to submit function, check for size and quantity before allowing submit
          [x]  - call function on submit of cart


       Outstanding Items
           - Social Media Share
        [x]- Star link to Review Page
        [x] - Zoom
            - Accessibility
            - Optimization
