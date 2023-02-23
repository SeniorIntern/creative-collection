import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/NewsAction.css';

const initialState = {
  title: '',
  firstImageUrl: '',
  secondImageUrl: '',
  thirdImageUrl: '',
  FourthImageUrl: '',
  firstDesc: '',
  secondDesc: '',
  thirdDesc: '',
};

export default function NewsAction() {
  const [state, setState] = useState(initialState);

  // destructuring from state
  const {
    title,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    FourthImageUrl,
    firstDesc,
    secondDesc,
    thirdDesc,
  } = state;

  // for updating data by id
  const { id } = useParams();

  // only after getting id
  useEffect(() => {
    axios
      .get(`http://localhost:5001/news/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    // prevent default behaviour of browser
    e.preventDefault();

    if (
      !title ||
      !firstImageUrl ||
      !secondImageUrl ||
      !thirdImageUrl ||
      !FourthImageUrl ||
      !firstDesc ||
      !secondDesc ||
      !thirdDesc
    ) {
      toast.error('Please provide values');
    } else {
      axios
        .put(`http://localhost:5001/news/put/${id}`, {
          title,
          firstImageUrl,
          secondImageUrl,
          thirdImageUrl,
          FourthImageUrl,
          firstDesc,
          secondDesc,
          thirdDesc,
        })
        // clear input fields after use submits the value
        .then(() => {
          setState({
            title: '',
            firstImageUrl: '',
            secondImageUrl: '',
            thirdImageUrl: '',
            FourthImageUrl: '',
            firstDesc: '',
            secondDesc: '',
            thirdDesc: '',
          });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success('News Updated Sucessfully', {
        position: 'top-center',
      });
    }
  };

  const handleInputChange = (e) => {
    // destructure name and value
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="addNews">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="addNews__Container">
        <h4>Fill Event News' New Details</h4>
        <form
          className="addNews__form"
          style={{
            padding: '0.2em',
            alignContent: 'center',
            textAlign: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="News Title"
            onChange={handleInputChange}
            required
            minLength={4}
            maxLength={25}
            value={title || ''}
          />

          <input
            type="text"
            name="firstImageUrl"
            id="firstImageUrl"
            placeholder="First Image Url"
            onChange={handleInputChange}
            required
            minLength={4}
            maxLength={40}
            value={firstImageUrl || ''}
          />

          <input
            type="text"
            name="secondImageUrl"
            id="secondImageUrl"
            placeholder="Second Image Url"
            onChange={handleInputChange}
            minLength={4}
            maxLength={40}
            value={secondImageUrl || ''}
          />

          <input
            type="text"
            name="thirdImageUrl"
            id="thirdImageUrl"
            placeholder="Third Image Url"
            onChange={handleInputChange}
            minLength={4}
            maxLength={40}
            value={thirdImageUrl || ''}
          />

          <input
            type="text"
            name="FourthImageUrl"
            id="FourthImageUrl"
            placeholder="Fourth Image Url"
            onChange={handleInputChange}
            minLength={4}
            maxLength={25}
            value={FourthImageUrl || ''}
          />

          <textarea
            name="firstDesc"
            id="firstDesc"
            placeholder="First Description"
            cols="30"
            rows="8"
            onChange={handleInputChange}
            required
            minLength={20}
            maxLength={220}
            value={firstDesc || ''}
          ></textarea>

          <textarea
            name="secondDesc"
            id="secondDesc"
            placeholder="Second Description"
            cols="30"
            rows="8"
            onChange={handleInputChange}
            minLength={20}
            maxLength={220}
            value={secondDesc || ''}
          />

          <textarea
            name="thirdDesc"
            id="thirdDesc"
            placeholder="Third Description"
            cols="30"
            rows="8"
            onChange={handleInputChange}
            minLength={20}
            maxLength={220}
            value={thirdDesc || ''}
          />
          <input type="submit" value="UPDATE" />
        </form>
      </div>
    </div>
  );
}
