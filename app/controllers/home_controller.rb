require 'one_push'
require 'httparty'

class HomeController < ApplicationController
	
  
  def index
  	# Getting content from api 
  	api = OnePushApi.new()
  	@websites = api.websites

  	# Getting parameters from the tag
  	@title = params['title']
  	@url = params['url']
  	@tag = params['tag']

  	@party_options = {:body => {
  			:title => @title,
  			:url => @url,
  			:tag => @tag
  		}.to_json}

  	begin
      # Do a HTTP Post with Http Party
      @contribute = HTTParty.post("someurl", @party_options)
    rescue StandardError => e
      # When something goes wrong create a fallback message
      @contribute = OpenStruct.new(:code => e.to_s, :message => "Domain not found")
    end
  	
  	
  end


  private

  
end
