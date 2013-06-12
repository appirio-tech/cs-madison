class RequirementsController < ApplicationController
  respond_to :json

  def index
    if params[:challenge_id]
      respond_with Requirement.where("challenge_id = ?", params[:challenge_id])
    else
      respond_with Requirement.all
    end
  end

  def library
    respond_with Requirement.where("library = ?", params[:q])
  end  

  def create
    puts params.to_yaml
    requirement = Requirement.new(params[:requirement])
    if requirement.save
      respond_with requirement
    else
      respond_with requirement.errors
    end    
  end   

  def update
    client.update!('Account', Id: params[:account][:Id], Name: params[:account][:Name], Type: params[:account][:Type])
    respond_with client.query("select id, name from account where id ='#{params[:account][:Id]}'")
  end   

  def destroy
    puts "======== called destroy!! #{params}"
  end  

end
