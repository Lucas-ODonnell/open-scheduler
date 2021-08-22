class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable, :jwt_authenticatable, 
    jwt_revocation_strategy: JwtDenylist
  self.skip_session_storage = [:http_auth, :params_auth]
  validates :name, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false
end
