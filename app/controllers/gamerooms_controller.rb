class GameroomsController < ApplicationController

def create
    
    game= Gameroom.create({rounds: 0, playersnum: 1 })
    user = User.create({name: request.params['name'], points: 0, gameroom_id: game.id})
    game.update({player_id: user.id})

    render json: game 
end

def join
    game = Gameroom.find_by(id: params[:id])
    
        if game
            user = User.create({name: request.params['name'], points: 0, gameroom_id: game.id})
            game.update({player_id: user.id})
            render json: game
        else
            render json: {error: "that game is unavailable"}
        end
end






end
