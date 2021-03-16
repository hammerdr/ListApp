class ItemsController < ApplicationController
  def index
    respond_to do |res|
      res.json { render json: Item.all }
      res.html { render template: 'items/index' }
    end
  end
end
