import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'semantic-ui-react';
import styled from "styled-components";

const AppBox = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PageButtons = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
  align-items: center;
  height: 25px;
`;

const ButtonPrevious = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 3px 5px 6px #c2b280;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 5px 6px #c2b280;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 5px 6px #c2b280;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  font-size: 15px;
  margin-right: 125px;
`;

const ButtonNext = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 3px 5px 6px #c2b280;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 5px 6px #c2b280;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 5px 6px #c2b280;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  font-size: 15px;
`;

export default function ExerciseList(props) {
  console.log(props);

  const [exercise, setExercise] = useState([]);
  const [page, setPage] = useState(2);

  const id = useEffect(() => {
    const getExercise = () => {
      {/* https://wger.de/api/v2/exercise/?page=${page} */}
      {/* https://weightlifting-tracker-bw.herokuapp.com/api/exercises */}
      axios.get(`https://weightlifting-tracker-bw.herokuapp.com/api/exercises`)
        .then(res => {
          console.log("Response Value", res);
          setExercise(res.data);
        })
        .catch(err => {
          console.log('ERROR', err);
        })
    }
    getExercise();
  }, [page]);

  console.log(exercise);
  console.log(page);
  console.log(page.length);

  return (
    <div className='exercise-list grid-view'>
      <PageButtons>
        {page === 2 ? null : <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>}

        {page === page.length ? null : <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>}
      </PageButtons>
      <AppBox>
        {exercise.map((exercise, index) => (
          <ExerciseDetails key={index} exercise={exercise} />
        ))}
      </AppBox>
      <PageButtons>
        {page === 2 ? null : <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>}

        {page === page.length ? null : <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>}
      </PageButtons>
    </div>
  );
}

function ExerciseDetails({exercise}) {
  const muscleArr = [];
  const secondaryMuscleArr = [];

  function stripHTML(text) {
    return text.replace(/<.*?>/gm, '');
  }

  return (
    <Card className='exercise-card'>
      <Card.Content>

        <Card.Header>{exercise.id}</Card.Header>
        <Card.Description>Name: {exercise.exercise}</Card.Description>
      </Card.Content>
    </Card>
  );
}
