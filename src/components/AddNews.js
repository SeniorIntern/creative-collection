import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../assets/styles/AddNews.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/AddNews.css';

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

export default function AddNews() {
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

  const handleSubmit = (e) => {
    // prevent default behaviour of browser
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
    }
    e.preventDefault();
    axios
      .post('http://localhost:5001/news/post', {
        title,
        firstImageUrl,
        secondImageUrl,
        thirdImageUrl,
        FourthImageUrl,
        firstDesc,
        secondDesc,
        thirdDesc,
      })
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
    // .catch((err) => alert(err.response.data));
    toast.success('News Added Sucessfully', {
      position: 'top-center',
    });
  };

  const handleInputChange = (e) => {
    // destruct name and value
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
      <div className="addNews_Container">
        <h4>Add News</h4>
        <form
          className="formToAddNews"
          style={{
            padding: '.2em',
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
            e={title}
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
            e={firstImageUrl}
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
            e={secondImageUrl}
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
            e={thirdImageUrl}
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
            e={FourthImageUrl}
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
            e={firstDesc}
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
            e={secondDesc}
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
            e={thirdDesc}
            onChange={handleInputChange}
            minLength={20}
            maxLength={220}
            value={thirdDesc || ''}
          />

          <input type="submit" value="SAVE" />
        </form>
      </div>
    </div>
  );
}
