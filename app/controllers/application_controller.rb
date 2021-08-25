class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json
 # around_action :set_time_zone

 # def set_time_zone
 #   logged_in = true
 #   if logged_in?
 #     Time.use_zone(current_user.time_zone) { yield }
 #   else
 #     yield
 #   end
 # end
end
