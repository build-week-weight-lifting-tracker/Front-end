import React from 'react'
import styled from 'styled-components'
import GymInfo from './GymInfo'
import {Card, Image, Grid }  from 'semantic-ui-react'

const Main = styled.main`
    display: flex;
    
`
const LeftPane = styled.section`
    width: 35%;
    background-color: rgb();
    padding: 3%;
    margin: 2%;
`
const RightPane = styled.section`
    width: 60%;
    background-color: rgb();
    margin: 2%; 
`
//Activity Level Factor
const sedentary = 1.2
const lightActive = 1.375
const modActive = 1.55
const veryActive = 1.725
const extActive = 1.9

export default function PersonDetails({image = "https://via.placeholder.com/150", 
    name = 'John Doe', 
    age = 18, gender = 'M', 
    email="abcd@efgh.com",
    DOB = '8/1/2001', 
    location = 'OneTown, CA', 
    experience = 'Beginner',
    height = 72, 
    weight = 180,
    goals = ['To increase cardio', 'To increase muscle mass'],
    description = 'Large and in charge',
    act_level = 'Moderately Active',
    gymLoc = 'OneTown, CA'}){
    const MHR = 220 - age;
    let caloricExp = 0;
    if(gender === 'M'){
        switch(act_level){
            case 'Lightly Active':
                caloricExp = lightActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break; 
            case 'Moderately Active':
                caloricExp = modActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break;
            case 'Very Active':
                caloricExp = veryActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
                break;
            case 'Extremely Active':
                caloricExp = extActive * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);         
                break;
            default:
                caloricExp = sedentary * ( (6.25 * weight) + (12.7 * height) - (6.76 * age) + 66);
        }
    }
    else {
        switch(act_level){
            case 'Lightly Active':
                caloricExp = lightActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break; 
            case 'Moderately Active':
                caloricExp = modActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break;
            case 'Very Active':
                caloricExp = veryActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
                break;
            case 'Extremely Active':
                caloricExp = extActive * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);         
                break;
            default:
                caloricExp = sedentary * ( (4.35 * weight) + (4.7 * height) - (4.68 * age) + 655);
        }
    }
    return (
        <Main>
            <LeftPane>
                <Card>
                    <Image src={image} wrapped ui={false}/>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>
                        <div><p>Age: {age}</p><br />
                            <p>Gender: {gender}</p><br />
                            <p>Description: {description}</p><br />
                            <p>Date of Birth: {DOB}</p>
                        </div>
                    </Card.Description>
                </Card>
               
                
            </LeftPane>
            <RightPane>
                <Grid>
                    <Grid.Row>
                        <Grid.Column> Height: </Grid.Column>
                        <Grid.Column>{height}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Current Weight:  </Grid.Column>
                        <Grid.Column>{weight}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Experience Level: </Grid.Column>
                        <Grid.Column>{experience}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Goals: </Grid.Column>
                        <Grid.Column>{goals.map(goal => <p>{goal}</p>)}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Gym Location:  </Grid.Column>
                        <Grid.Column><GymInfo location={gymLoc} /></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Activity Level: </Grid.Column>
                        <Grid.Column>{act_level}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Maximum Heart Rate: </Grid.Column>
                        <Grid.Column>{MHR}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Daily Caloric Expenditure</Grid.Column>
                        <Grid.Column>{caloricExp}</Grid.Column>
                    </Grid.Row>
                </Grid>
               
            </RightPane>
        </Main>

        
    )
}