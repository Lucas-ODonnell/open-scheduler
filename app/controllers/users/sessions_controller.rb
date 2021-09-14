class Users::SessionsController < Devise::SessionsController
  protect_from_forgery with: :null_session
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.valid?
      render json: { message: 'You are logged in.' }, status: 200
      else
      render json: { message: "That is not a valid account" }, status: 401
    end
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: { message: "You are logged out." }, status: 204
  end

  def log_out_failure
    render json: { message: "Hmm nothing happened."}, status: 401
  end
end
