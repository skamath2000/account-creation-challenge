# frozen_string_literal: true

class ApiController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        begin
            User.validate_username(user_params[:username])
            User.validate_password(user_params[:password])
            @user = User.new(user_params)
            if @user.save
                render json: { message: 'Account created successfully' }, status: :created
            else
                raise StandardError, "An unexpected error occurred. Please try again."
            end
        rescue ArgumentError => e
            render json: { message: e.message }, status: :bad_request
        rescue StandardError => e
            render json: { message: e.message }, status: :internal_server_error
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
