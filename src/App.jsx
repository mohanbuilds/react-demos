import React from 'react'
import Form from './components/Form';
// import Accordion from './components/Accordion'
// import { accordionData } from './utils/content'
// import Testimonials from './components/Testimonials'
// import HiddenSearchBar from './components/HiddenSearchBar'
// import ToggleBackGroundColor from './components/ToggleBackGroundColor'
// import Calculator from './components/Calculator'


const App = () => {
  return (
    <div>
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
        ))}
      </div> */}

      <Form />
    </div>
  );
};

export default App;
