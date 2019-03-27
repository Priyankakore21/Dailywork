a = 10
puts a.object_id
puts "class of a  is #{a.class}"
puts 'class of a  is #{a.class}'

price = 99.92
puts price.object_id
puts price.class


array = [1,2,"d",4,7.5,'ddd']
puts array.object_id
puts array.class
puts "value of array [0] is #{array[0]}"
puts "value of array [-1] is #{array[-1]}"


hash = {:language => 'ruby',"framework"=>"rails"}
puts "hash value #{hash}"
puts "hash keys #{hash.keys}"
puts "hash values #{hash.values}"
puts "language #{hash[:language]}"
puts "framework #{hash["framework"]}"

range=(1..10)
puts "range value is #{range.to_a}"