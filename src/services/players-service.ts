import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository"
import { noContent, ok , badRequest, created} from "../utils/http-helper"
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null
    if(data){
        response = await ok(data)
    } else{
        response = await noContent()
    }
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id)
    let response = null;

    if(data){
        response = await ok(data)
    }else{
        response = await noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player)
        response = await created()
    }else{
        response = await badRequest();
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    const isDeleted = await PlayerRepository.deleteOnePlayer(id)
    let response = null

    if(!isDeleted){
        response = await badRequest();
    } else {
        response = await ok({message: "deleted"})
    }
    return response
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => { 
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics)
    let response = null

    if(Object.keys(data).length === 0){
        response = await badRequest();
    } else{
        response = await ok(data)
    }
    return response
}