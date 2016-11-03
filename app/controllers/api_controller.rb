class ApiController < ApplicationController

  def store_get_list_chat_user
    result = []
    obj_room = Room.where(:store => params[:store])
    obj_room.each do |room|
      my_list = {
          :user => room.user,
      }
      result.push(my_list)
    end
    render json: result.to_json
  end

  def validate_generate_room
    result = []
    get_room = Room.where(:store => params[:store], :user => params[:user])
    if get_room.count == 0
      obj_room = Room.create(:room_name => params[:store]+'|'+params[:user], :user => params[:user], :store => params[:store])
      result = {
          :room_id => obj_room.id,
          :room_name => obj_room.room_name
      }
    else
      result = {
          :room_id => get_room[0].id,
          :room_name => get_room[0].room_name
      }
    end
    render json: result.to_json
  end

  def get_load_message
    result = []
    get_room = Room.where(:store => params[:store], :user => params[:user])

    if get_room.count > 0
        obj_message = Message.where(:room_id => get_room[0].id).order_by(:id => 'desc').paginate(:page => 1, :limit => 3)
        puts "###################"
        puts obj_message.count
        if obj_message.count > 0
          obj_message.to_a.reverse.each do |msg|
            my_msg = {
                :user => msg.user,
                :store => msg.store,
                :message => msg.message,
                :send_form => msg.send_form
            }
            result.push(my_msg)
          end
        end
    end
    render json: result.to_json
  end

  def get_load_message_by_page
    result = []
    get_room = Room.where(:store => params[:store], :user => params[:user])

    if get_room.count > 0
      obj_message = Message.where(:room_id => get_room[0].id).order_by(:id => 'desc').paginate(:page => params[:page], :limit => 3)
      puts "###################"
      puts obj_message.count
      if obj_message.count > 0
        obj_message.each do |msg|
          my_msg = {
              :user => msg.user,
              :store => msg.store,
              :message => msg.message,
              :send_form => msg.send_form
          }
          result.push(my_msg)
        end
      end
    end
    render json: result.to_json
  end

end
