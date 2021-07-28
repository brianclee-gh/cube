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


     [] - Read (#) of Reviews Component
     [x]      - speak with edrick about the star component
            - implement it based on average reviews for current product selected
           - use Function for calculcated star number
             - need meta data
             - implement function with meta data
             - set star rating in local state
               - pass to star component



      [] - Add to Cart
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

