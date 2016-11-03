require 'test_helper'

class InfiniteControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get infinite_index_url
    assert_response :success
  end

end
