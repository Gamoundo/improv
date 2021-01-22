class SolutionsController < ApplicationController
    def index
        solutions = Solution.all
        render json: solutions
    end
end
