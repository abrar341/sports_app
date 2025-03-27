export const data = {
    "_id": {
        "$oid": "67e27922316964759f94fb4f"
    },
    "fixtureId": 1208316,
    "__v": 0,
    "createdAt": {
        "$date": "2025-03-25T09:36:34.725Z"
    },
    "match": {
        "homeTeam": {
            "id": 65,
            "name": "Nottingham Forest"
        },
        "awayTeam": {
            "id": 33,
            "name": "Manchester United"
        },
        "date": {
            "$date": "2025-04-01T19:00:00.000Z"
        },
        "league": {
            "id": 39,
            "name": "Premier League"
        }
    },
    "predictions": {
        "matchOutcome": {
            "win": {
                "home": 50,
                "away": 30,
                "draw": 20
            },
            "correctScore": {
                "home": 2,
                "away": 1
            },
            "halftimeFulltime": {
                "halftime": "Draw",
                "fulltime": "Nottingham Forest"
            },
            "firstToScore": "Nottingham Forest",
            "lastToScore": "Nottingham Forest",
            "marginOfVictory": 1
        },
        "playerPerformance": [
            {
                "player": {
                    "id": 1234,
                    "name": "Chris Wood",
                    "team": "Nottingham Forest"
                },
                "goals": {
                    "anytime": true,
                    "first": true,
                    "last": false
                },
                "assists": 1,
                "shots": {
                    "total": 4,
                    "onTarget": 2
                },
                "cards": {
                    "yellow": false,
                    "red": false
                },
                "manOfTheMatch": true,
                "_id": {
                    "$oid": "67e27922a5beab3c3e503c5a"
                }
            },
            {
                "player": {
                    "id": 5678,
                    "name": "Bruno Fernandes",
                    "team": "Manchester United"
                },
                "goals": {
                    "anytime": true,
                    "first": false,
                    "last": true
                },
                "assists": 0,
                "shots": {
                    "total": 3,
                    "onTarget": 2
                },
                "cards": {
                    "yellow": true,
                    "red": false
                },
                "manOfTheMatch": false,
                "_id": {
                    "$oid": "67e27922a5beab3c3e503c5b"
                }
            }
        ],
        "teamPerformance": {
            "totalGoalsOverUnder": {
                "threshold": 2.5,
                "over": true
            },
            "cleanSheet": {
                "home": false,
                "away": false
            },
            "bothTeamsToScore": true,
            "totalCorners": 11,
            "totalFouls": {
                "home": 12,
                "away": 14
            }
        },
        "bettingOdds": {
            "bestValueBets": [
                "Nottingham Forest to win",
                "Over 2.5 goals"
            ],
            "safeBets": [
                "Both teams to score"
            ],
            "highRiskBets": [
                "Chris Wood to score first"
            ],
            "arbitrageOpportunities": [],
            "liveBettingSuggestions": [
                "Back Nottingham Forest if they go behind early"
            ]
        },
        "gameSpecific": {
            "penaltyAwarded": false,
            "penaltyConverted": false,
            "substitutionImpact": "High",
            "injuryTimeGoalsProbability": 20
        },
        "streakAndForm": {
            "teamWinningStreak": {
                "home": 3,
                "away": 0
            },
            "headToHeadComparison": "Nottingham Forest have won 2 of the last 3 meetings",
            "homeAwayPerformance": {
                "home": "Strong",
                "away": "Poor"
            }
        },
        "weatherInfluence": {
            "temperature": 12,
            "condition": "Light rain",
            "impactOnGame": "Slight advantage to Nottingham Forest"
        }
    },
    "updatedAt": {
        "$date": "2025-03-25T09:36:34.725Z"
    }
}