import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import { Form } from './UI';

const ReviewForm = styled(Form)`
    width: 100%;

    label,
    input {
        font-size: 1rem;
    }
    textarea {
        background-color: whitesmoke;
        color: #111010;
        max-width: 21rem;
        min-height: 5rem;
        width: 100%;
    }
`;

export const MovieReview = ({ movieTitle }) => {
    const [textValue, setTextValue] = useState('');
    const [review, setReview] = useState(null);

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReview(textValue);
    };

    return (
        <div className='details'>
            {review ? (
                <>
                    <h4>
                        My Review of <em>{movieTitle}</em>
                    </h4>
                    <p>{review}</p>
                </>
            ) : (
                <>
                    <h4>
                        Leave a Review for <em>{movieTitle}</em>
                    </h4>
                    <ReviewForm onSubmit={handleSubmit}>
                        <label>
                            Add a review
                            <textarea
                                onChange={handleChange}
                                value={textValue}
                            ></textarea>
                        </label>
                        <button type='submit'>Submit Review</button>
                    </ReviewForm>
                </>
            )}
        </div>
    );
};

MovieReview.propTypes = {
    movieTitle: PropTypes.string,
};
