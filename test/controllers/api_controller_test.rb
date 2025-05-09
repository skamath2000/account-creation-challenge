class ApiControllerTest < ActionDispatch::IntegrationTest
  test "create_account fails with missing username" do
    post api_create_account_path, params: { user: { password: '123' } }
    assert_response(400)
    assert_equal JSON.parse(response.body)['message'], "Username must be between 10 and 50 characters."
  end

  test "create_account fails with missing password" do
    post api_create_account_path, params: { user: { username: '123' } }
    assert_response(400)
    assert_equal JSON.parse(response.body)['message'], "Username must be between 10 and 50 characters."
  end

  test "create_account fails with invalid username" do
    post api_create_account_path, params: { user: { username: '123456789', password: '1234567890123456789a'} }
    assert_response(400)
    assert_equal JSON.parse(response.body)['message'], "Username must be between 10 and 50 characters."
  end

  test "create_account fails with invalid password" do
    post api_create_account_path, params: { user: { username: '1234567890', password: '12345678901234567' } }
    assert_response(400)
    assert_equal JSON.parse(response.body)['message'], "Password must be between 20 and 50 characters."
  end

  test "create_account fails with weak password" do
    post api_create_account_path, params: { user: { username: '1234567890', password: 'hhhhhhhhhhhhhhhhhhhh1' } }
    assert_response(400)
    assert_equal JSON.parse(response.body)['message'], "Password is too weak. Please use a stronger password."
  end

  test "create_account succeeds with valid username and password" do
    post api_create_account_path, params: { user: {username: '1234567890', password: '1234567890123456789a!' } }
    assert_response :success
    assert_equal JSON.parse(response.body)['message'], "Account created successfully"
  end
end
