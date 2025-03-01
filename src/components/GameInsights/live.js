//soccer
export const liveFixtures = {
    "success": true,
    "message": "Live fixtures fetched and updated successfully",
    "data": [
        {
            "fixture": {
                "id": 1206332,
                "referee": null,
                "timezone": "UTC",
                "date": "2025-02-26T16:00:00+00:00",
                "timestamp": 1740585600,
                "periods": {
                    "first": 1740585600,
                    "second": null
                },
                "venue": {
                    "id": 18676,
                    "name": "Stadion Radomir Antić",
                    "city": "Užice"
                },
                "status": {
                    "long": "First Half",
                    "short": "1H",
                    "elapsed": 36,
                    "extra": null
                }
            },
            "league": {
                "id": 287,
                "name": "Prva Liga",
                "country": "Serbia",
                "logo": "https://media.api-sports.io/football/leagues/287.png",
                "flag": "https://media.api-sports.io/flags/rs.svg",
                "season": 2024,
                "round": "Regular Season - 23",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 2641,
                    "name": "Sloboda Uzice",
                    "logo": "https://media.api-sports.io/football/teams/2641.png",
                    "winner": null
                },
                "away": {
                    "id": 12329,
                    "name": "OFK Vršac",
                    "logo": "https://media.api-sports.io/football/teams/12329.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 0,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [
                {
                    "time": {
                        "elapsed": 32,
                        "extra": null
                    },
                    "team": {
                        "id": 2641,
                        "name": "Sloboda Uzice",
                        "logo": "https://media.api-sports.io/football/teams/2641.png"
                    },
                    "player": {
                        "id": 337694,
                        "name": "D. Vrbic"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                }
            ],
            "lineups": [],
            "statistics": [],
            "players": [],
            "inPlayOdds": [
                {
                    "fixture": {
                        "id": 1206332,
                        "status": {
                            "long": "First Half",
                            "elapsed": 35,
                            "seconds": "34:43"
                        }
                    },
                    "league": {
                        "id": 287,
                        "season": 2024
                    },
                    "teams": {
                        "home": {
                            "id": 2641,
                            "goals": 0
                        },
                        "away": {
                            "id": 12329,
                            "goals": 0
                        }
                    },
                    "status": {
                        "stopped": false,
                        "blocked": false,
                        "finished": false
                    },
                    "update": "2025-02-26T16:34:30+00:00",
                    "odds": [
                        {
                            "id": 16,
                            "name": "How many goals will Away Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "name": "Asian Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.45",
                                    "handicap": "0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.675",
                                    "handicap": "0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "6.6",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.1",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "4",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.21",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "name": "1x2 (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "1.166",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "9.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "name": "3-Way Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.025",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "21",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "51",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.142",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "6",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "17",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "41",
                                    "handicap": "-3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "21",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.025",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "15",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "7.5",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.09",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "6",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3.25",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.533",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 23,
                            "name": "Final Score",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "3.6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-0",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-1",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-2",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-0",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-2",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "5-0",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "5-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-3",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-2",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-3",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-3",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-3",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-4",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-4",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 25,
                            "name": "Match Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "2.75",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.4",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "7",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.083",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "12",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.015",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.444",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.625",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 26,
                            "name": "European Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "81",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "7",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.1",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.04",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "13",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "101",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 27,
                            "name": "Home Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.666",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 28,
                            "name": "Home Team  to Score in Both Halves",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.04",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "name": "Result / Both Teams To Score",
                            "values": [
                                {
                                    "value": "Home/Yes",
                                    "odd": "19",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/Yes",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/Yes",
                                    "odd": "9.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home/No",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/No",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/No",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 33,
                            "name": "Asian Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.85",
                                    "handicap": "-0.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.95",
                                    "handicap": "0.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.825",
                                    "handicap": "-0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.375",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.25",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.575",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.375",
                                    "handicap": "0",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.825",
                                    "handicap": "-0",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.23",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "3.8",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 35,
                            "name": "To Win 2nd Half",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "1.952",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 39,
                            "name": "Away Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "9",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.04",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 43,
                            "name": "Both Teams To Score (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "7",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.083",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "name": "Over/Under Line",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "1.425",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.625",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.825",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.375",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.575",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.25",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.975",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.825",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.35",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.525",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 48,
                            "name": "Draw No Bet",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 55,
                            "name": "Correct Score (1st Half)",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "7",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "3-0",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "3-1",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "1.181",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-0",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 49,
                            "name": "Over/Under (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "4.5",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.181",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 57,
                            "name": "Away Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 58,
                            "name": "Home Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "10",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.03",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "4.5",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.166",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 59,
                            "name": "Fulltime Result",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 62,
                            "name": "Last Team to Score (3 way)",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "2.05",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 64,
                            "name": "Half Time/Full Time",
                            "values": [
                                {
                                    "value": "1/1",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/X",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/2",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/1",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/X",
                                    "odd": "2.3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/2",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/1",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/X",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/2",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 66,
                            "name": "Home Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 67,
                            "name": "How many goals will Home Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "10",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 68,
                            "name": "Goals Odd/Even",
                            "values": [
                                {
                                    "value": "Odd",
                                    "odd": "2.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Even",
                                    "odd": "1.666",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 69,
                            "name": "Both Teams to Score",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.125",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 70,
                            "name": "Away Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 24,
                            "name": "Over/Under Line (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "4.5",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.19",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 72,
                            "name": "Double Chance",
                            "values": [
                                {
                                    "value": "Home or Draw",
                                    "odd": "1.142",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away or Draw",
                                    "odd": "1.533",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home or Away",
                                    "odd": "1.615",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 73,
                            "name": "Which team will score the 1st goal?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "2.05",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "fixture": {
                "id": 1206335,
                "referee": null,
                "timezone": "UTC",
                "date": "2025-02-26T16:00:00+00:00",
                "timestamp": 1740585600,
                "periods": {
                    "first": 1740585600,
                    "second": null
                },
                "venue": {
                    "id": 10501,
                    "name": "Stadion Ivanjica",
                    "city": "Ivanjica"
                },
                "status": {
                    "long": "First Half",
                    "short": "1H",
                    "elapsed": 34,
                    "extra": null
                }
            },
            "league": {
                "id": 287,
                "name": "Prva Liga",
                "country": "Serbia",
                "logo": "https://media.api-sports.io/football/leagues/287.png",
                "flag": "https://media.api-sports.io/flags/rs.svg",
                "season": 2024,
                "round": "Regular Season - 23",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 2653,
                    "name": "Javor",
                    "logo": "https://media.api-sports.io/football/teams/2653.png",
                    "winner": null
                },
                "away": {
                    "id": 12312,
                    "name": "Dubočica",
                    "logo": "https://media.api-sports.io/football/teams/12312.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 0,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [
                {
                    "time": {
                        "elapsed": 17,
                        "extra": null
                    },
                    "team": {
                        "id": 2653,
                        "name": "Javor",
                        "logo": "https://media.api-sports.io/football/teams/2653.png"
                    },
                    "player": {
                        "id": null,
                        "name": "N. Krstic"
                    },
                    "assist": {
                        "id": 135808,
                        "name": "L. Bayere Junior"
                    },
                    "type": "subst",
                    "detail": "Substitution 1",
                    "comments": null
                }
            ],
            "lineups": [],
            "statistics": [],
            "players": [],
            "inPlayOdds": [
                {
                    "fixture": {
                        "id": 1206335,
                        "status": {
                            "long": "First Half",
                            "elapsed": 33,
                            "seconds": "33:13"
                        }
                    },
                    "league": {
                        "id": 287,
                        "season": 2024
                    },
                    "teams": {
                        "home": {
                            "id": 2653,
                            "goals": 0
                        },
                        "away": {
                            "id": 12312,
                            "goals": 0
                        }
                    },
                    "status": {
                        "stopped": false,
                        "blocked": false,
                        "finished": false
                    },
                    "update": "2025-02-26T16:34:30+00:00",
                    "odds": [
                        {
                            "id": 26,
                            "name": "European Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "21",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3.4",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.3",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "67",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "21",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.02",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.04",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "13",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "101",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 27,
                            "name": "Home Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "name": "3-Way Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.012",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "34",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "67",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.05",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "11",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "29",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "9.5",
                                    "handicap": "-3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "7",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.166",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "4.5",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "4",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.533",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.3",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3.2",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.75",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 35,
                            "name": "To Win 2nd Half",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.533",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.875",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 73,
                            "name": "Which team will score the 1st goal?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "1.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "name": "Over/Under Line",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "1.6",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.2",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.05",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.675",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.8",
                                    "handicap": "1.75",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2",
                                    "handicap": "1.75",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.4",
                                    "handicap": "2.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.5",
                                    "handicap": "2.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.4",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.725",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 58,
                            "name": "Home Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "7.5",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.071",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "3.75",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.25",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "12",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.015",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.909",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.8",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 48,
                            "name": "Draw No Bet",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 33,
                            "name": "Asian Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.425",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.625",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.525",
                                    "handicap": "-0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.35",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.975",
                                    "handicap": "-1.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.725",
                                    "handicap": "1.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.3",
                                    "handicap": "-1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.55",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.75",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.05",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "name": "How many goals will Away Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "name": "Result / Both Teams To Score",
                            "values": [
                                {
                                    "value": "Home/Yes",
                                    "odd": "7",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/Yes",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/Yes",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home/No",
                                    "odd": "1.666",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/No",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/No",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 24,
                            "name": "Over/Under Line (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "3.6",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.25",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.6",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.475",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 57,
                            "name": "Away Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.222",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 49,
                            "name": "Over/Under (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "15",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.03",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.625",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.444",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 30,
                            "name": "Both Teams To Score (1st Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.004",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 25,
                            "name": "Match Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "1.615",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.2",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.125",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "5.5",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "5.5",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.125",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "15",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.01",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.625",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.444",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "9",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.04",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "name": "Asian Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.16",
                                    "handicap": "0",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "4.8",
                                    "handicap": "0",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "4.6",
                                    "handicap": "-0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.17",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.25",
                                    "handicap": "-0.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.625",
                                    "handicap": "0.25",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "3.075",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.325",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 59,
                            "name": "Fulltime Result",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3.6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "8.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 66,
                            "name": "Home Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 43,
                            "name": "Both Teams To Score (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.142",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 70,
                            "name": "Away Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 39,
                            "name": "Away Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "9",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.04",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 68,
                            "name": "Goals Odd/Even",
                            "values": [
                                {
                                    "value": "Odd",
                                    "odd": "1.909",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Even",
                                    "odd": "1.8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 55,
                            "name": "Correct Score (1st Half)",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-0",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-1",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-0",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-1",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "5-0",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "1.444",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "name": "1x2 (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "3.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "1.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 64,
                            "name": "Half Time/Full Time",
                            "values": [
                                {
                                    "value": "1/1",
                                    "odd": "3.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/X",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/2",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/1",
                                    "odd": "2.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/X",
                                    "odd": "4.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/2",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/1",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/X",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/2",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 23,
                            "name": "Final Score",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "4.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-0",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-1",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-2",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-0",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-1",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-0",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-1",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-2",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "6-0",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "6-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "7-0",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "9.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-2",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-3",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "4-3",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "7-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "8-0",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 67,
                            "name": "How many goals will Home Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "2.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "3.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 72,
                            "name": "Double Chance",
                            "values": [
                                {
                                    "value": "Home or Draw",
                                    "odd": "1.05",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away or Draw",
                                    "odd": "2.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home or Away",
                                    "odd": "1.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 62,
                            "name": "Last Team to Score (3 way)",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "1.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 69,
                            "name": "Both Teams to Score",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 28,
                            "name": "Home Team  to Score in Both Halves",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "4.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "fixture": {
                "id": 1286507,
                "referee": null,
                "timezone": "UTC",
                "date": "2025-02-26T16:00:00+00:00",
                "timestamp": 1740585600,
                "periods": {
                    "first": 1740585600,
                    "second": null
                },
                "venue": {
                    "id": 7771,
                    "name": "Kaitaba Stadium",
                    "city": "Bukoba"
                },
                "status": {
                    "long": "First Half",
                    "short": "1H",
                    "elapsed": 34,
                    "extra": null
                }
            },
            "league": {
                "id": 567,
                "name": "Ligi kuu Bara",
                "country": "Tanzania",
                "logo": "https://media.api-sports.io/football/leagues/567.png",
                "flag": "https://media.api-sports.io/flags/tz.svg",
                "season": 2024,
                "round": "Regular Season - 22",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 12191,
                    "name": "Kagera Sugar",
                    "logo": "https://media.api-sports.io/football/teams/12191.png",
                    "winner": null
                },
                "away": {
                    "id": 8061,
                    "name": "KMC",
                    "logo": "https://media.api-sports.io/football/teams/8061.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 0,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [],
            "lineups": [],
            "statistics": [],
            "players": [],
            "inPlayOdds": [
                {
                    "fixture": {
                        "id": 1286507,
                        "status": {
                            "long": "First Half",
                            "elapsed": 34,
                            "seconds": "33:47"
                        }
                    },
                    "league": {
                        "id": 567,
                        "season": 2024
                    },
                    "teams": {
                        "home": {
                            "id": 12191,
                            "goals": 0
                        },
                        "away": {
                            "id": 8061,
                            "goals": 0
                        }
                    },
                    "status": {
                        "stopped": false,
                        "blocked": false,
                        "finished": false
                    },
                    "update": "2025-02-26T16:35:01+00:00",
                    "odds": [
                        {
                            "id": 16,
                            "name": "How many goals will Away Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "10",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 17,
                            "name": "Asian Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.825",
                                    "handicap": "0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.975",
                                    "handicap": "0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.21",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "4",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "5.6",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.125",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "3.7",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.24",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.115",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "6",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "name": "1x2 (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "1.3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "name": "3-Way Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.071",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "11",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "21",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.363",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "4.333",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "7.5",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "41",
                                    "handicap": "-3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "23",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.025",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "19",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "9.5",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.09",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "6.5",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "4",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.4",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 23,
                            "name": "Final Score",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "10",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-0",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-1",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-2",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-0",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-1",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-2",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "5-0",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "5-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-3",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-2",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-3",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-3",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-3",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-4",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-4",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-4",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-5",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-5",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 25,
                            "name": "Match Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "2",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.727",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "4",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.222",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "13",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.012",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "8",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.062",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.222",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "4",
                                    "handicap": "0.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 26,
                            "name": "European Handicap (1st Half)",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "41",
                                    "handicap": "-1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "6",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.125",
                                    "handicap": "1",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.111",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "6.5",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "41",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 27,
                            "name": "Home Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.727",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 28,
                            "name": "Home Team  to Score in Both Halves",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.05",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "name": "Result / Both Teams To Score",
                            "values": [
                                {
                                    "value": "Home/Yes",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/Yes",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/Yes",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home/No",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/No",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/No",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 30,
                            "name": "Both Teams To Score (1st Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.004",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 33,
                            "name": "Asian Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.2",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.6",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.35",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.95",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.625",
                                    "handicap": "-0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.425",
                                    "handicap": "0.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.8",
                                    "handicap": "0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2",
                                    "handicap": "-0",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.5",
                                    "handicap": "0.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.4",
                                    "handicap": "-0.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 35,
                            "name": "To Win 2nd Half",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.875",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "3.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 38,
                            "name": "Away Team to Score in Both Halves",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.04",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 39,
                            "name": "Away Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "4.5",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.166",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "10",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.03",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 24,
                            "name": "Over/Under Line (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "4.45",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.18",
                                    "handicap": "0.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "3.1",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.35",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 43,
                            "name": "Both Teams To Score (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.166",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 48,
                            "name": "Draw No Bet",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.909",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "name": "Over/Under Line",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "2.025",
                                    "handicap": "1.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.775",
                                    "handicap": "1.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.4",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.725",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.7",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.35",
                                    "handicap": "1.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.525",
                                    "handicap": "1.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "3.075",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.325",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 49,
                            "name": "Over/Under (1st Half)",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "21",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.015",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "3.25",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.333",
                                    "handicap": "0.5",
                                    "main": true,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 55,
                            "name": "Correct Score (1st Half)",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "3-0",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "3-1",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "1.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-1",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-2",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1-2",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 57,
                            "name": "Away Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.727",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 58,
                            "name": "Home Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "9",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.04",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "4.333",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.2",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 59,
                            "name": "Fulltime Result",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 62,
                            "name": "Last Team to Score (3 way)",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "2.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 64,
                            "name": "Half Time/Full Time",
                            "values": [
                                {
                                    "value": "1/1",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/X",
                                    "odd": "23",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1/2",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/1",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/X",
                                    "odd": "2.875",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "X/2",
                                    "odd": "4.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/1",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/X",
                                    "odd": "23",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2/2",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 66,
                            "name": "Home Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 67,
                            "name": "How many goals will Home Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 68,
                            "name": "Goals Odd/Even",
                            "values": [
                                {
                                    "value": "Odd",
                                    "odd": "2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Even",
                                    "odd": "1.727",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 69,
                            "name": "Both Teams to Score",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 70,
                            "name": "Away Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.666",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 72,
                            "name": "Double Chance",
                            "values": [
                                {
                                    "value": "Home or Draw",
                                    "odd": "1.363",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away or Draw",
                                    "odd": "1.4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home or Away",
                                    "odd": "1.444",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 73,
                            "name": "Which team will score the 1st goal?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "2.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

//american-football
export const AFliveFixtures = {
    "success": true,
    "message": "live games retrieved successfully",
    "data": [
        {
            "leagueName": "NCAA",
            "season": 2024,
            "liveGames": [
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-21T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1737419400
                    },
                    "venue": {
                        "name": null,
                        "city": null
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        },
                        "away": {
                            "name": "Ohio State",
                            "logo": "https://media.api-sports.io/american-football/teams/107.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 0,
                            "quarter_3": 8,
                            "quarter_4": 8,
                            "overtime": null,
                            "total": 23
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 21,
                            "quarter_3": 10,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 34
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3135",
                    "gameId": 14353,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-11T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1736555400
                    },
                    "venue": {
                        "name": "AT&T Stadium",
                        "city": "Arlington"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Texas",
                            "logo": "https://media.api-sports.io/american-football/teams/195.png"
                        },
                        "away": {
                            "name": "Ohio State",
                            "logo": "https://media.api-sports.io/american-football/teams/107.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 14
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 28
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3134",
                    "gameId": 14352,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-10T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1736469000
                    },
                    "venue": {
                        "name": "Hard Rock Stadium",
                        "city": "Miami Gardens"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Penn State",
                            "logo": "https://media.api-sports.io/american-football/teams/78.png"
                        },
                        "away": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 10,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 24
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 17,
                            "overtime": null,
                            "total": 27
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3133",
                    "gameId": 14351,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-07T00:00:00.000Z",
                        "time": "00:00",
                        "timestamp": 1736208000
                    },
                    "venue": {
                        "name": "Toyota Stadium",
                        "city": "Frisco"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Montana State",
                            "logo": "https://media.api-sports.io/american-football/teams/253.png"
                        },
                        "away": {
                            "name": "North Dakota State",
                            "logo": "https://media.api-sports.io/american-football/teams/254.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 15,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 32
                        },
                        "away": {
                            "quarter_1": 14,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 35
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3132",
                    "gameId": 15081,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FCS (Division I-AA)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-06T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736125200
                    },
                    "venue": {
                        "name": "Shell Energy Stadium",
                        "city": "Houston"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "North Central College",
                            "logo": "https://media.api-sports.io/american-football/teams/860.png"
                        },
                        "away": {
                            "name": "Mount Union",
                            "logo": "https://media.api-sports.io/american-football/teams/520.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 20,
                            "overtime": null,
                            "total": 41
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 8,
                            "overtime": null,
                            "total": 25
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3131",
                    "gameId": 17274,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "All Division II/III",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-04T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1735950600
                    },
                    "venue": {
                        "name": "Bank of America Stadium",
                        "city": "Charlotte"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Virginia Tech",
                            "logo": "https://media.api-sports.io/american-football/teams/97.png"
                        },
                        "away": {
                            "name": "Minnesota",
                            "logo": "https://media.api-sports.io/american-football/teams/85.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 0,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 10
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 21,
                            "quarter_3": 0,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 24
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312e",
                    "gameId": 14349,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-04T00:00:00.000Z",
                        "time": "16:00",
                        "timestamp": 1736006400
                    },
                    "venue": {
                        "name": "Thomas A. Robinson National Stadium",
                        "city": "Nassau"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Liberty",
                            "logo": "https://media.api-sports.io/american-football/teams/179.png"
                        },
                        "away": {
                            "name": "Buffalo State",
                            "logo": "https://media.api-sports.io/american-football/teams/141.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 0,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 7
                        },
                        "away": {
                            "quarter_1": 6,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 26
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312f",
                    "gameId": 14350,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-03T00:00:00.000Z",
                        "time": "21:00",
                        "timestamp": 1735938000
                    },
                    "venue": {
                        "name": "Gerald J. Ford Stadium",
                        "city": "Dallas"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Texas State",
                            "logo": "https://media.api-sports.io/american-football/teams/165.png"
                        },
                        "away": {
                            "name": "North Texas",
                            "logo": "https://media.api-sports.io/american-football/teams/58.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 6,
                            "quarter_2": 10,
                            "quarter_3": 7,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 30
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 28
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312d",
                    "gameId": 17269,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-03T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1735866000
                    },
                    "venue": {
                        "name": "EverBank Stadium",
                        "city": "Jacksonville"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Ole Miss",
                            "logo": "https://media.api-sports.io/american-football/teams/131.png"
                        },
                        "away": {
                            "name": "Duke",
                            "logo": "https://media.api-sports.io/american-football/teams/99.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 14,
                            "quarter_2": 10,
                            "quarter_3": 14,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 52
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 13,
                            "overtime": null,
                            "total": 20
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312c",
                    "gameId": 14348,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-02T00:00:00.000Z",
                        "time": "21:00",
                        "timestamp": 1735851600
                    },
                    "venue": {
                        "name": "Caesars Superdome",
                        "city": "New Orleans"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Georgia",
                            "logo": "https://media.api-sports.io/american-football/teams/109.png"
                        },
                        "away": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 10
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 13,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312b",
                    "gameId": 14347,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                }
            ]
        },
        {
            "leagueName": "NFL",
            "season": 2024,
            "liveGames": [
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-02-09T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1739143800
                    },
                    "venue": {
                        "name": "Caesars Superdome",
                        "city": "New Orleans"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 17,
                            "quarter_3": 10,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 40
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 6,
                            "quarter_4": 16,
                            "overtime": null,
                            "total": 22
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3284",
                    "gameId": 13466,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Super Bowl"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-26T00:00:00.000Z",
                        "time": "20:00",
                        "timestamp": 1737921600
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 14,
                            "quarter_2": 13,
                            "quarter_3": 7,
                            "quarter_4": 21,
                            "overtime": null,
                            "total": 55
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 12,
                            "quarter_3": 8,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3281",
                    "gameId": 13465,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Conference Championships"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-26T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1737934200
                    },
                    "venue": {
                        "name": "GEHA Field at Arrowhead Stadium",
                        "city": "Kansas City"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        },
                        "away": {
                            "name": "Buffalo Bills",
                            "logo": "https://media.api-sports.io/american-football/teams/20.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 0,
                            "quarter_4": 11,
                            "overtime": null,
                            "total": 32
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 13,
                            "quarter_3": 6,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 29
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3282",
                    "gameId": 13464,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Conference Championships"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1737329400
                    },
                    "venue": {
                        "name": "Highmark Stadium",
                        "city": "Orchard Park"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Buffalo Bills",
                            "logo": "https://media.api-sports.io/american-football/teams/20.png"
                        },
                        "away": {
                            "name": "Baltimore Ravens",
                            "logo": "https://media.api-sports.io/american-football/teams/5.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 0,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 27
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 9,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 25
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3280",
                    "gameId": 13462,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1737248400
                    },
                    "venue": {
                        "name": "Ford Field",
                        "city": "Detroit"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Detroit Lions",
                            "logo": "https://media.api-sports.io/american-football/teams/7.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 31
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 28,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 45
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327e",
                    "gameId": 13461,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "20:00",
                        "timestamp": 1737316800
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Los Angeles Rams",
                            "logo": "https://media.api-sports.io/american-football/teams/31.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 13,
                            "quarter_2": 0,
                            "quarter_3": 3,
                            "quarter_4": 12,
                            "overtime": null,
                            "total": 28
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 5,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 22
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327f",
                    "gameId": 13463,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-18T00:00:00.000Z",
                        "time": "21:30",
                        "timestamp": 1737235800
                    },
                    "venue": {
                        "name": "GEHA Field at Arrowhead Stadium",
                        "city": "Kansas City"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        },
                        "away": {
                            "name": "Houston Texans",
                            "logo": "https://media.api-sports.io/american-football/teams/26.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 6,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 23
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 3,
                            "quarter_3": 6,
                            "quarter_4": 2,
                            "overtime": null,
                            "total": 14
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327d",
                    "gameId": 13460,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-14T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736816400
                    },
                    "venue": {
                        "name": "State Farm Stadium",
                        "city": "Glendale"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Los Angeles Rams",
                            "logo": "https://media.api-sports.io/american-football/teams/31.png"
                        },
                        "away": {
                            "name": "Minnesota Vikings",
                            "logo": "https://media.api-sports.io/american-football/teams/32.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 10,
                            "quarter_2": 14,
                            "quarter_3": 3,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 27
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 6,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 9
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327c",
                    "gameId": 17278,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-13T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736730000
                    },
                    "venue": {
                        "name": "Raymond James Stadium",
                        "city": "Tampa"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Tampa Bay Buccaneers",
                            "logo": "https://media.api-sports.io/american-football/teams/24.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 3,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 20
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 10,
                            "quarter_3": 3,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327b",
                    "gameId": 13459,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-12T00:00:00.000Z",
                        "time": "21:30",
                        "timestamp": 1736717400
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Green Bay Packers",
                            "logo": "https://media.api-sports.io/american-football/teams/15.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 10,
                            "quarter_2": 0,
                            "quarter_3": 6,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 22
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 3,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 10
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327a",
                    "gameId": 17277,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                }
            ]
        }
    ]
}