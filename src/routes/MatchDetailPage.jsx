import React from "react";

const MatchDetailPage = ({ }) => {
    const match = {
        fixtureId: 123456,
        teams: {
            home: "Team A",
            away: "Team B"
        },
        bettingOdds: {
            bookmakers: [
                {
                    id: 6,
                    name: "Bwin",
                    bets: [
                        {
                            id: 1,
                            name: "Match Winner",
                            values: [
                                { value: "Home", odd: "2.05" },
                                { value: "Draw", odd: "3.75" },
                                { value: "Away", odd: "3.30" }
                            ]
                        },
                        {
                            id: 5,
                            name: "Goals Over/Under",
                            values: [
                                { value: "Over 2.5", odd: "1.57" },
                                { value: "Under 2.5", odd: "2.25" }
                            ]
                        }
                    ]
                },
                {
                    id: 27,
                    name: "NordicBet",
                    bets: [
                        {
                            id: 1,
                            name: "Match Winner",
                            values: [
                                { value: "Home", odd: "2.10" },
                                { value: "Draw", odd: "3.90" },
                                { value: "Away", odd: "3.35" }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Match Details</h2>
            <p><strong>Fixture ID:</strong> {match.fixtureId}</p>
            <p><strong>Teams:</strong> {match.teams.home} vs {match.teams.away}</p>

            <h3>Betting Odds</h3>
            {match.bettingOdds?.bookmakers?.length > 0 ? (
                match.bettingOdds.bookmakers.map((bookmaker) => (
                    <div key={bookmaker.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h4>{bookmaker.name}</h4>
                        {bookmaker.bets.map((bet) => (
                            <div key={bet.id} style={{ marginTop: "10px" }}>
                                <strong>{bet.name}:</strong>
                                <ul>
                                    {bet.values.map((value, index) => (
                                        <li key={index}>
                                            {value.value}: <strong>{value.odd}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No betting odds available.</p>
            )}
        </div>
    );
};

export default MatchDetailPage;
