# frozen_string_literal: true

class ApiController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        logger.info("Creating user with params: #{user_params.inspect}")
        logger.info("user: #{@user.inspect}")
        if @user.save
            render json: { message: 'Account created successfully' }, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
