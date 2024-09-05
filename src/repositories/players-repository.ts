import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norwegian",
        "position": "Center Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 89,
            "Shooting": 94,
            "Passing": 75,
            "Dribbling": 80,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 2,
        "name": "Kylian Mbappé",
        "club": "Real Madrid",
        "nationality": "French",
        "position": "Left Winger",
        "statistics": {
            "Overall": 92,
            "Pace": 97,
            "Shooting": 89,
            "Passing": 80,
            "Dribbling": 92,
            "Defending": 36,
            "Physical": 77
        }
    },
    {
        "id": 3,
        "name": "Vinícius Júnior",
        "club": "Real Madrid",
        "nationality": "Brazilian",
        "position": "Left Winger",
        "statistics": {
            "Overall": 89,
            "Pace": 95,
            "Shooting": 83,
            "Passing": 79,
            "Dribbling": 93,
            "Defending": 32,
            "Physical": 71
        }
    },
    {
        "id": 4,
        "name": "Jude Bellingham",
        "club": "Real Madrid",
        "nationality": "English",
        "position": "Central Midfielder",
        "statistics": {
            "Overall": 86,
            "Pace": 75,
            "Shooting": 76,
            "Passing": 82,
            "Dribbling": 85,
            "Defending": 79,
            "Physical": 82
        }
    },
    {
        "id": 5,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Polish",
        "position": "Center Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 78,
            "Shooting": 93,
            "Passing": 79,
            "Dribbling": 85,
            "Defending": 44,
            "Physical": 82
        }
    },
    {
        "id": 6,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentinian",
        "position": "Right Winger",
        "statistics": {
            "Overall": 90,
            "Pace": 82,
            "Shooting": 90,
            "Passing": 92,
            "Dribbling": 94,
            "Defending": 34,
            "Physical": 64
        }
    },
    {
        "id": 7,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgian",
        "position": "Central Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 74,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 87,
            "Defending": 64,
            "Physical": 77
        }
    },
    {
        "id": 8,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egyptian",
        "position": "Right Winger",
        "statistics": {
            "Overall": 89,
            "Pace": 93,
            "Shooting": 89,
            "Passing": 81,
            "Dribbling": 90,
            "Defending": 45,
            "Physical": 75
        }
    },
    {
        "id": 9,
        "name": "Karim Benzema",
        "club": "Al-Ittihad",
        "nationality": "French",
        "position": "Center Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 73,
            "Shooting": 88,
            "Passing": 82,
            "Dribbling": 87,
            "Defending": 42,
            "Physical": 78
        }
    },
    {
        "id": 10,
        "name": "Neymar Jr.",
        "club": "Al-Hilal",
        "nationality": "Brazilian",
        "position": "Left Winger",
        "statistics": {
            "Overall": 89,
            "Pace": 86,
            "Shooting": 83,
            "Passing": 86,
            "Dribbling": 93,
            "Defending": 37,
            "Physical": 61
        }
    },
    {
        "id": 11,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "English",
        "position": "Center Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 72,
            "Shooting": 91,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 47,
            "Physical": 82
        }
    },
    {
        "id": 12,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "German",
        "position": "Defensive Midfielder",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 73,
            "Passing": 88,
            "Dribbling": 85,
            "Defending": 84,
            "Physical": 76
        }
    },
    {
        "id": 13,
        "name": "Marc-André ter Stegen",
        "club": "Barcelona",
        "nationality": "German",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 89,
            "Pace": 43,
            "Shooting": 24,
            "Passing": 49,
            "Dribbling": 49,
            "Defending": 17,
            "Physical": 70
        }
    },
    {
        "id": 14,
        "name": "Jan Oblak",
        "club": "Atlético Madrid",
        "nationality": "Slovenian",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 90,
            "Pace": 45,
            "Shooting": 21,
            "Passing": 31,
            "Dribbling": 45,
            "Defending": 18,
            "Physical": 83
        }
    },
    {
        "id": 15,
        "name": "Rúben Dias",
        "club": "Manchester City",
        "nationality": "Portuguese",
        "position": "Center Back",
        "statistics": {
            "Overall": 89,
            "Pace": 67,
            "Shooting": 42,
            "Passing": 70,
            "Dribbling": 65,
            "Defending": 91,
            "Physical": 88
        }
    },
    {
        "id": 16,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Dutch",
        "position": "Center Back",
        "statistics": {
            "Overall": 90,
            "Pace": 70,
            "Shooting": 60,
            "Passing": 71,
            "Dribbling": 71,
            "Defending": 91,
            "Physical": 86
        }
    },
    {
        "id": 17,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatian",
        "position": "Central Midfielder",
        "statistics": {
            "Overall": 87,
            "Pace": 71,
            "Shooting": 78,
            "Passing": 89,
            "Dribbling": 88,
            "Defending": 70,
            "Physical": 62
        }
    },
    {
        "id": 18,
        "name": "Pedri",
        "club": "Barcelona",
        "nationality": "Spanish",
        "position": "Central Midfielder",
        "statistics": {
            "Overall": 86,
            "Pace": 80,
            "Shooting": 72,
            "Passing": 86,
            "Dribbling": 89,
            "Defending": 65,
            "Physical": 62
        }
    },
    {
        "id": 19,
        "name": "Bruno Fernandes",
        "club": "Manchester United",
        "nationality": "Portuguese",
        "position": "Attacking Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 75,
            "Shooting": 84,
            "Passing": 89,
            "Dribbling": 82,
            "Defending": 72,
            "Physical": 77
        }
    },
    {
        "id": 20,
        "name": "Rodri",
        "club": "Manchester City",
        "nationality": "Spanish",
        "position": "Defensive Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 65,
            "Shooting": 70,
            "Passing": 82,
            "Dribbling": 79,
            "Defending": 86,
            "Physical": 83
        }
    }
]


export const findAllPlayers = async(): Promise<PlayerModel[]> =>{
    return database;
}


export const findPlayerById = async(id:number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id===id)
}

export const insertPlayer = async(player: PlayerModel) => {
    database.push(player)
}