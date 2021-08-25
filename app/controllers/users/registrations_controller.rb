class Users::RegistrationsController < Devise::RegistrationsController
  protect_from_forgery with: :null_session
  skip_before_action :require_no_authentication
  respond_to :json
  private
  def sign_up_params
    params.require(:user).permit(:company, :name, :position, :email,:password,:password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:company, :name, :position, :email,:password,:password_confirmation, :current_password)
  end

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?
    register_failed
  end

  def register_success
    render json: { message: 'Signed up successfully!' }
  end

  def register_failed
    render json: { message: "Something went wrong." }
  end
end
