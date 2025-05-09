class User < ApplicationRecord
  validates :username, presence: true
  validates :password, presence: true

  def self.validate_username(username)

    if username.blank? || username.length < 10 || username.length > 50
      raise ArgumentError, "Username must be between 10 and 50 characters."
    end

    if User.exists?(username: username)
      raise ArgumentError, "Username already exists."
    end

    return true
  end

  def self.validate_password(password)
    if password.blank? || password.length < 20 || password.length > 50
      raise ArgumentError, "Password must be between 20 and 50 characters."
    end

    unless password.match?(/\d/) && password.match?(/[a-zA-Z]/)
      raise ArgumentError, "Password must contain at least one letter and one number."
    end

    if Zxcvbn.test(password).score < 2
      raise ArgumentError, "Password is too weak. Please use a stronger password."
    end

    return true
  end
end
