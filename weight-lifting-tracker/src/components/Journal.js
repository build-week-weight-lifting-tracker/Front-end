import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import DaysOfWeek from './DaysOfWeek'
import Equipment from './Equipment'
import Category from './Category'
import Exercise from './Exercise'
import TargetArea from './TargetArea'
import Header from './Header2'
import Footer from './Footer'

const api = "https://wger.de/api/v2/"

function WeightForm({values, touched, errors}){
    const [exerciseLog, setExerciseLog] = useState([])
    useEffect(()=>{
        axios
        .get(api)
        .then(response => {setExerciseLog(response.data);
        console.log(response.data.muscle)
        })
        .catch(err => console.log(`Error: ${err}`))
    }, [])
  

    return(
        <>
        <Header />
        <Form>
            <div>
            <Field component='select' name='daysOfWeek' placeholder='Select Day of The Week'>
                <option>Select Day of The Week'</option>
                {/*exerciseLog.daysofweek.results.map(dayOfWeek => <DaysOfWeek DOW={dayOfWeek.day_of_week}/>)*/}
            </Field>
            </div>
            <div>
            <Field component='select' name='category' placeholder='Select Category'>
                <option>Select Category</option>
                {/*exerciseLog.exercisecategory.results.map(cat => <Equipment name={cat.name}/>)*/}
            </Field>
            </div>
            <div>
            <Field component='select' name="bodyPart" placeholder='Select Body Part Targeted'>
                <option>Select Body Part Targeted</option>
                {/*exerciseLog.muscle.results.map(part => <TargetArea name={part.name}/>)*/}
            </Field>
            </div>
            <div>
            <Field component='select' name="exercise" placeholder='Select Exercise Performed'>
                <option>Select Exercise Performed</option>
                {/*exerciseLog.exercise.results.map(movement => <Exercise name={movement.name}/>)*/}
            </Field>
            </div>
            <div>
            <Field component='select' name='equipmentUsed' placeholder='Select Type of Equipment Used'>
                <option>Equipment Used</option>
                {/*exerciseLog.equipment.results.map(type => <Category name={type.name}/>)*/}
            </Field>
            </div>
            <div>
             <label>Enter # of Sets: 
            <Field type='text' name='numSets'></Field></label><br/>
            <label>Enter # of Reps Completed
            <Field type='text' name='numReps'></Field></label><br/>
            <label>Enter Amount of Weight Used (lbs)
            <Field type='text'name="amountWeight"></Field></label>
            </div>
            <button>Submit</button>       
        </Form>
        <Footer />
        </>
    )
}

const FormikWeightForm = withFormik({

    mapPropsToValues({bodyPart, exercise, category, equipmentUsed, daysOfWeek, numSets, numReps, amountWeight}) {
      return {
          bodyPart: bodyPart || ' ',
          exercise: exercise || ' ',
          category: category || ' ',
          equipmentUsed: equipmentUsed || ' ',
          daysOfWeek: daysOfWeek || ' ',
          numSets: numSets || 1,
          numReps: numReps || 1,
          amountWeight: amountWeight || 0
        
      }
    }, 
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values, {setStatus}){
        console.log(values)
        axios
        .post(api, values)
        .then(response => setStatus(response.data))
        .catch(err => console.log('Errors: made', err))
    }
    })(WeightForm);
  
    export default FormikWeightForm;
