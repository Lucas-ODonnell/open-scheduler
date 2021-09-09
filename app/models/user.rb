class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable, :jwt_authenticatable, 
    jwt_revocation_strategy: JwtDenylist
  self.skip_session_storage = [:http_auth, :params_auth]
  validates :name, :email, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false
  has_many :appointments, dependent: :destroy
  has_one :profile, dependent: :destroy

  after_create :build_profile

  private

  def build_profile
    Profile.create(user_id: self.id, position: "", bio: "", department: "")
  end
end
