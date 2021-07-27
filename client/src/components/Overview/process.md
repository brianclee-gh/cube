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
     [] - Read (#) of Reviews Component
            - speak with edrick about the star component
            - implement it based on average reviews for current product selected

      [x] - Add to Cart
          - Skus are based on style selected
          - pass sku's object to Add To Cart Component
            - Size Drop Down First
              - should list all available sizes that have quantity >0
              - if no sizes have quantities - button should disappear and read 'Out of Stock'
              - Options Buton?
              - Default says Select Size
             - Quantity Drop Down Second
              - 1 to max capped at 15
              - if Size not selected '-' will be displayed in quantity and drop down disabeled
              - Once Size Selected drop down defaults to 1


