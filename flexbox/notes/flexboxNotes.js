/**
 * Notes:
 *  'a guide to flexbox':
 *    - src: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 *  'Axis':
 *    - 'Main Axis': default left to right
 *    - 'Cross Axis': default from top to bottom
 *
 * 'align-content: flex-start | flex-end | center | space-between | space-around | stretch;':
 *    - align-content justifies cross-axis top to bottom
 *    - This aligns a flex container's lines within when there is extra space in
 *      the cross-axis, similar to how justify-content aligns individual items
 *      within the main-axis
 *    - flex-start: lines packed to the start of the container
 *    - flex-end: lines packed to the end of the container
 *    - center: lines packed to the center of the container
 *    - space-between: lines evenly distributed; the first line is at the start
 *      of the container while the last one is at the end
 *    - space-around: lines evenly distributed with equal space around each line
 *    - stretch (default): lines stretch to take up the remaining space
 *
 * 'align-items: flex-start | flex-end | center | baseline | stretch;':
 *    - This defines the default behaviour for how flex items are laid out along
 *      the cross axis on the current line. Think of it as the justify-content
 *      version for the cross-axis (perpendicular to the main-axis).
 *    - 'flex-start': cross-start margin edge of the items is placed on the cross-start line
 *    - 'flex-end': cross-end margin edge of the items is placed on the cross-end line
 *    - 'center': items are centered in the cross-axis
 *    - 'baseline': font items are aligned as baselines
 *    - 'stretch' (default): stretch to fill the container (still respect min-width/max-width)
 *
 *  'align-self: auto | flex-start | flex-end | center | baseline | stretch;':
 *    - This allows the default alignment (or the one specified by align-items)
 *      to be overridden for individual flex items. Please see the align-items
 *      explanation to understand the available values
 *    - Note that float, clear and vertical-align have no effect on a flex item
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
 *  'flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]':
 *    - takes all the widths of each element and evenly distributes amongst each other
 *    - This is the shorthand for 'flex-grow', 'flex-shrink' and 'flex-basis'
 *      combined. The second and third parameters (flex-shrink and flex-basis)
 *      are optional. Default is 0 1 auto.
 *    - flex which has 'flex-grow', 'flex-shrink' and 'flex-basis' built in as
 *      default. First is grow, second is shrink, and third is basis
 *
 *  'flex-direction: row | row-reverse | column | column-reverse;':
 *    - This establishes the 'main axis', thus defining the direction flex items
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
 *  'flex-basis: <length> | auto; | default auto':
 *    - This defines the default size of an element before the remaining space
 *      is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.
 *      The auto keyword means "look at my width or height property" (which was
 *      temporarily done by the main-size keyword until deprecated). The content
 *      keyword means "size it based on the item's content" - this keyword isn't
 *      well supported yet, so it's hard to test and harder to know what its
 *      brethren max-content, min-content, and fit-content do
 *    - If set to '0', the extra space around content isn't factored in. If set
 *      to auto, the extra space is distributed based on its 'flex-grow' value.
 *
 *  'flex-grow: <number>; | default 0':
 *    - how we deal with the extra space available
 *    - This defines the ability for a flex item to grow if necessary. It accepts
 *      a unitless value that serves as a proportion. It dictates what amount of
 *      the available space inside the flex container the item should take up
 *    - If all items have flex-grow set to 1, the remaining space in the container
 *      will be distributed equally to all children. If one of the children a
 *      value of 2, the remaining space would take up twice as much space as the
 *      others (or it will try to, at least
 *
 *  'flex-shrink: <number>; | default 1':
 *    - how we deal with there is no extra space available
 *    - This defines the ability for a flex item to shrink if necessary
 *    - Negative numbers are invalid
 *
 *  'flex-wrap: nowrap | wrap | wrap-reverse;':
 *    - By default, flex items will all try to fit onto one line. You can
 *      change that and allow the items to wrap as needed with this property.
 *      Direction also plays a role here, determining the direction new lines
 *      are stacked in
 *    - 'nowrap' (default): single-line / left to right in 'ltr'; right to
 *      left in 'rtl'
 *    - 'wrap': multi-line / left to right in 'ltr'; right to left in 'rtl'
 *    - 'wrap-reverse': multi-line / right to left in 'ltr'; left to right in 'rtl'
 *
 * 'justify-content: flex-start | flex-end | center | space-between | space-around;':
 *    - justifies main axis left to right
 *    - 'flex-start' (default): items are packed toward the start line
 *    - 'flex-end': items are packed toward to end line
 *    - 'center': items are centered along the line
 *    - 'space-between': items are evenly distributed in the line; first item is
 *      on the start line, last item on the end line
 *    - 'space-around': items are evenly distributed in the line with equal space
 *      around them. Note that visually the spaces aren't equal, since all the
 *      items have equal space on both sides. The first item will have one unit
 *      of space against the container edge, but two units of space between the
 *      next item because that next item has its own spacing that applies
 *
 *  'order: <interger>':
 *    - By default, flex items are laid out in the source order. However, the order
 *      property controls the order in which they appear in the flex container
 *
 *  'vh':
 *    - stands for view height and has nothing to do with flexbox, gives it
 *      100% view height
 *
 */
