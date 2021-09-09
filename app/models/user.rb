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

  def send_password_reset
    self.reset_password_token = generate_base64_token
    self.reset_password_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver_now
  end

  def password_token_valid?
    (self.reset_password_sent_at + 1.hour) > Time.zone.now
  end

  def reset_password(password)
    self.reset_password_token = nil
    self.password = password
    save!
  end

  private

  def build_profile
    Profile.create(user_id: self.id, position: "", bio: "", department: "")
  end

  def generate_base64_token
    SecureRandom.urlsafe_base64
  end
end
