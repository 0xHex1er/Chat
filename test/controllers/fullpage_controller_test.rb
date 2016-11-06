require 'test_helper'

class FullpageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fullpage_index_url
    assert_response :success
  end

end
