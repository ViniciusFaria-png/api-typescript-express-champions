import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository"
import { noContent, ok , badRequest, created} from "../utils/http-helper"

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
        response = ok(data)
    }else{
        response = noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player)
        response = created()
    }else{
        response = badRequest();
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    await PlayerRepository.deleteOnePlayer(id)

    response = ok({message: "deleted"})
    return response
}