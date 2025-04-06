import React from 'react'
import SoccerMatchPrediction from './Predictions/SoccerMatchPrediction'
import { useParams } from 'react-router-dom';
import AFMatchPrediction from './Predictions/AFMatchPrediction';
import Loading from '../Shared/Loading';
import { useSelector } from 'react-redux';

const Prediction = () => {
    const { predictionLoading } = useSelector((state) => state.prediction);

    const { gameType } = useParams();
    const isSoccer = gameType === "soccer";

    return predictionLoading ? <Loading /> : (
        <>
            {
                isSoccer ?
                    <SoccerMatchPrediction /> :
                    <AFMatchPrediction />
            }
        </>
    )
}

export default Prediction
