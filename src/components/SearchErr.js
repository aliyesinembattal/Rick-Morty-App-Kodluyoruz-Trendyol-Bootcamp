import noResultImg from '../images/no_results_img.png';
import '../stylesheets/_ErrorMessage.scss';

const SearchErr = () => {
  return (
    <>
      <img src={noResultImg} alt="Rick and Morty looking anxious" className="errorImg" />
      <p className="noResultMessage">Sorry, your search did not match any character in our list.</p>
    </>
  );
};

export default SearchErr;
