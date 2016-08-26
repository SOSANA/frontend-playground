/**
 * Notes:
 *  'a guide to flexbox':
 *    - src: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 *  'display: flex;':
 *    - display defines a flex container; inline or block depending on the
 *      given value. It enables a flex context for all its direct children
 *    - defines a container, you put aside floats, widths, and percentages
 *    - it will stretch across your screen, by setting this it automatically
 *      sets your child elements as 'flex items'
 *      - 'inline-flex', works like a inline or span elements where it only
 *        takes what it needs
 *
 *  'flex-direction: row | row-reverse | column | column-reverse;':
 *    - This establishes the main-axis, thus defining the direction flex items
 *      are placed in the flex container. Flexbox is (aside from optional
 *      wrapping) a single-direction layout concept. Think of flex items as
 *      primarily laying out either in horizontal rows or vertical columns
 *    - 'row' (default): left to right in 'ltr'; right to left in 'rtl'
 *      - refered to main axis as going from left to right
 *    - 'row-reverse': right to left in 'ltr'; left to right in 'rtl'
 *    - 'column': same as row but top to bottom
 *      - referd to main axis as going top to bottom
 *    - 'column-reverse': same as row-reverse but bottom to top
 *
 *  'flex-wrap: nowrap | wrap | wrap-reverse;':
 *    - By default, flex items will all try to fit onto one line. You can
 *      change that and allow the items to wrap as needed with this property.
 *      Direction also plays a role here, determining the direction new lines
 *      are stacked in
 *    - 'nowrap' (default): single-line / left to right in 'ltr'; right to
        left in 'rtl'
      - 'wrap': multi-line / left to right in 'ltr'; right to left in 'rtl'
      - 'wrap-reverse': multi-line / right to left in 'ltr'; left to right in 'rtl'
 *  'vh':
 *    - stands for view height and has nothing to do with flexbox, gives it
 *      100% view height
 *
 */
