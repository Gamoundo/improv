class SituationsController < ApplicationController

    def index
        situations = Situation.all
        render json: situations
    end
end
