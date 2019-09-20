import React from 'react'
import styled from 'styled-components'
import GymInfo from './GymInfo'

const Main = styled.main`
    display: flex;
    
`

//Activity Level Factor
const sedentary = 1.2
const lightActive = 1.375
const modActive = 1.55
const veryActive = 1.725
const extActive = 1.9

export default function PersonDetails({image, name, age, gender, DOB, location, experience, height, weight, goals, description, act_level, gymLoc}){
    const MHR = 220 - age;
    if(gender === 'M'){
        switch(act_level){
            case 'Lightly Active':
                const caloricExp = lightActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break; 
            case 'Moderately Active':
                const caloricExp = modActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break;
            case 'Very Active':
                const caloricExp = veryActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break;
            case 'Extremely Active':
                const caloricExp = extActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);         
                break;
            default:
                const caloricExp = sedentary * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
        }
    }
    else {
        switch(act_level){
            case 'Lightly Active':
                const caloricExp = lightActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break; 
            case 'Moderately Active':
                const caloricExp = modActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break;
            case 'Very Active':
                const caloricExp = veryActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break;
            case 'Extremely Active':
                const caloricExp = extActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);         
                break;
            default:
                const caloricExp = sedentary * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
        }
    }
    return (
        <main>
            <section>
                <img src={image} />
                <div><p>>Name: </p><p>{name}</p></div>
                <div><p>Age: </p><p>{age}</p></div>
                <div><p>Gender: </p><p>{gender}</p></div>
                <div><p>Description: </p><p>{description}</p></div>
                <div><p>Date of Birth: </p><p>{DOB}</p></div>
            </section>
            <section>
                <div><p>>Height: </p><p>{height}</p></div>
                <div><p>Current Weight: </p><p>{weight}</p></div>
                <div><p>Experience: </p><p>{experience}</p></div>
                <div><p>>Goals: </p><p>{goals}</p></div>
                <div>
                    <GymInfo location={gymLoc} />
                </div>
                <div><p>Activity Level: </p><p>{act_level}</p></div>
                <div><p>Maximum Heart Rate</p><p>{MHR}</p></div>
                <div><p>Daily Caloric Expenditure</p><p>{caloricExp}</p></div>
            </section>
        </main>

        
    )
}