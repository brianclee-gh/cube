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
    [x]    - needs to update price on productInfo State  (original + sale)
             - Added onClick to set current price to sale if exists else original, added conditional className if there is a sale strikethrough original, list sale as red color
