require 'json'
pjson = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name            = 'RNPassKit'
  s.version         = pjson["version"]
  s.homepage        = "https://github.com/Dimentar/ynpasskit"
  s.summary         = pjson["description"]
  s.license         = pjson["license"]
  s.author          = { "Alex Moisei" => "dimentar@gmail.com" }
  s.platform        = :ios, "9.0"
  s.source          = { :git => "https://github.com/Dimentar/ynpasskit.git", :tag => "#{s.version}" }
  s.source_files    = 'ios/RNPassKit/*.{h,m,swift}'

  s.dependency 'React'

end
