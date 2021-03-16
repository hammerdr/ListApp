require 'rails_helper'

RSpec.describe 'Items', type: :request do
  describe 'GET /' do
    before { create(:item) }

    it 'should respond to html' do
      expect(get('/items')).to render_template(:index)
    end

    it 'should response to json' do
      get('/items', headers: { 'Accept': 'application/json' })
      expect(JSON.parse(response.body).size).to eq 1
    end
  end
end
