/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

export const Rating = () => {
  const ratedStar = "https://img.icons8.com/ios-filled/50/star--v1.png";
  const unratedStar = "https://img.icons8.com/ios/50/star--v1.png";

  return (
    <div id="rating">
      <span>
        <img width="24" height="24" src={unratedStar} alt="star--v1" />
      </span>
      <span>
        <img width="24" height="24" src={unratedStar} alt="star--v1" />
      </span>
      <span>
        <img width="24" height="24" src={unratedStar} alt="star--v1" />
      </span>
      <span>
        <img width="24" height="24" src={unratedStar} alt="star--v1" />
      </span>
      <span>
        <img width="24" height="24" src={unratedStar} alt="star--v1" />
      </span>
    </div>
  );
};
