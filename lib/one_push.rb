require 'httparty'

class OnePushApi
	# include 'httparty'
	def websites
		response = HTTParty.get('https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites')
		json = JSON.parse(response.body)
		json['websites']
	end

	
end