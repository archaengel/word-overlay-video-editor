import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PAGE, COUNT_WORDS } from './actions';
import { getText } from './lib/api';
import { AppContainer } from './lib/components';
import { Editor, DragLayer, Toggles } from './sections';

function App() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  const { isSuccess: firstSuccess } = useQuery(['1'], getText, {
    onSuccess: (data) =>
      dispatch({ type: LOAD_PAGE, payload: { key: '1', data } }),
    cacheTime: Infinity,
  });

  const { isSuccess: secondSuccess } = useQuery(['2'], getText, {
    onSuccess: (data) =>
      dispatch({ type: LOAD_PAGE, payload: { key: '2', data } }),
    cacheTime: Infinity,
  });

  const { isSuccess: thirdSuccess } = useQuery(['3'], getText, {
    onSuccess: (data) =>
      dispatch({ type: LOAD_PAGE, payload: { key: '3', data } }),
    cacheTime: Infinity,
  });

  // count words once all documents have been retrieved
  useEffect(() => {
    if (firstSuccess && secondSuccess && thirdSuccess) {
      dispatch({ type: COUNT_WORDS, payload: { pages } });
    }
  }, [firstSuccess, secondSuccess, thirdSuccess, pages, dispatch]);

  return (
    <div className="App">
      {firstSuccess && secondSuccess && thirdSuccess ? (
        <AppContainer>
          <DragLayer />
          <Editor
            source="https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4"
            type="video/mp4"
          />
          <Toggles />
        </AppContainer>
      ) : null}
    </div>
  );
}

export default App;
