import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './header/header';
import Activity from './activity/activity';
import Project from './project/project';
import Project11 from './project/project11';
import Project12 from './project/project12';
import Apply from './apply/apply';
import Question from './qna/question';
import Login from './login/login';
import Qnalist from './qna/qnalist';
import Qnacontent from './qna/qnacontent';
import EleventhProject from './eleventhproject/eleventhproject';
import Overlay from './overlay/Overlay';
import { useState, useEffect } from 'react';
import Footer from './footer/footer';
const Wrapper = styled.div`
  margin: 0 auto; /* 가운데 정렬 */
  min-width: 100%; /* 전체 너비 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  position: relative;
`;

// const Overlay = styled.div`
//   display: ${(props) => (props.showMenu ? 'block' : 'none')};
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4);
//   z-index: 1;
// `;

const LocationWatcher = ({ setShowMenu }) => {
  let location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return null;
};

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const closeShowMenu = () => {
    setShowMenu(false);
  };

  return (
    <Router>
      <GlobalStyle />
      <Overlay showMenu={showMenu} closeShowMenu={closeShowMenu} />
      <Wrapper>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Project11" element={<Project11 />} />
          <Route path="/Project12" element={<Project12 />} />
          <Route path="/Apply" element={<Apply />} />
          <Route
            path="/Question"
            element={<Question addQuestion={addQuestion} />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Qnalist" element={<Qnalist questions={questions} />} />
          <Route path="/Qnacontent/:postId" element={<Qnacontent />} />
          <Route path="/Eleven" element={<EleventhProject />} />
        </Routes>
        <LocationWatcher setShowMenu={setShowMenu} />
      </Wrapper>
    </Router>
  );
}

export default App;
