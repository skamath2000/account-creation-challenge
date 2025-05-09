require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "should not save user without username" do
    user = User.new(password: '123')
    assert_not user.save
  end

  test "should not save user without password" do
    user = User.new(username: '123')
    assert_not user.save
  end

  test "should save user" do
    user = User.new(username: '123', password: '123')
    assert user.save
  end

  test "should validate username" do
    assert_raises(ArgumentError) do User.validate_username('123456789') end
    assert User.validate_username('1234567890')
    assert User.validate_username('12345678901234567890123456789012345678901234567890')
    assert_raises(ArgumentError) do  User.validate_username('123456789012345678901234567890123456789012345678901') end
  end

  test "should validate password" do
    assert_raises(ArgumentError) do User.validate_password('123456789012345678a') end
    assert User.validate_password('123456789!!0123456789a!!')
    assert User.validate_password('1234567890123456!!78901234567890!!12345678aa')
    assert_raises(ArgumentError) do  User.validate_password('123456789012345678901234567890123456789012345678901a') end
  end
end
