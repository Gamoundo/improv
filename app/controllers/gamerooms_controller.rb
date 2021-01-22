class GameroomsController < ApplicationController

def create
    solution = Solution.all.sample
    emotion = Emotion.all.sample
    situation = Situation.all.sample
    
    game= Gameroom.create({rounds: 0, playersnum: 1, emotion_id: emotion.id, situation_id: situation.id, solution_id: solution.id })
    
    user = User.create({name: request.params['name'], points: 0, gameroom_id: game.id})
    game.update({player_id: user.id})

    render json: {game: GameroomSerializer.new(game), currentUser: user} 
end

def join
    game = Gameroom.find_by(id: params[:id])
    
        if game
            user = User.create({name: request.params['name'], points: 0, gameroom_id: game.id})
            # game.update({player_id: user.id})
            render json: {game: GameroomSerializer.new(game) , currentUser: user}
        else
            render json: {error: "that game is unavailable"}
        end
end

def vote
    game = Gameroom.find_by(id: params[:gameId])
    user = User.find_by(id: params[:playerId])
    if game.emotion_id == params[:vote] 
        user.update({points: user.points + 1})
    end
    
    
    render json: {game: GameroomSerializer.new(game) , currentUser: user}

end
def index
    games = Gameroom.all
    render json: games
end





end
