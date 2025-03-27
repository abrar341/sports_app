import React from "react";
import { useOutletContext } from "react-router-dom";

const MatchStatistics = () => {
    const { statistics } = useOutletContext();
    console.log("statistics", statistics);

    if (!statistics || statistics.length !== 2) return <p className="text-center text-lg font-semibold text-gray-300">No data available</p>;

    return (
        <div className="py-4 mx-auto bg-secondary shadow-lg rounded-xl text-white">
            <div className="flex justify-between items-center bg-secondary text-white p-4 rounded-t-lg">
                <div className="w-1/3 flex justify-center gap-6 items-center items-center">
                    <img src={statistics[0].team.logo} alt={statistics[0].team.name} className="w-12 h-12 mb-2" />
                </div>
                <div className="w-1/3 text-center text-2xl font-bold">VS</div>
                <div className="w-1/3 flex justify-center items-center items-center">
                    <img src={statistics[1].team.logo} alt={statistics[1].team.name} className="w-12 h-12 mb-2" />
                </div>
            </div>


            <div className="grid grid-cols-3">
                {statistics[0].statistics.map((stat, index) => (
                    <React.Fragment key={stat.type}>
                        <div className="text-center py-3 text-base font-semibold">{statistics[0].statistics[index].value || 0}</div>
                        <div className="text-center text-base py-3 bg-secondary text-white font-semibold uppercase">{stat.type}</div>
                        <div className="text-center py-3 text-base font-semibold">{statistics[1].statistics[index].value || 0}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MatchStatistics;