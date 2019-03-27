# # loops
# # each
# # each_with_index
# # Collect /map
# # select
# # Reject
# # Inject
# # Upto
# # downto


# puts "with each loop"
# (1..10).to_a.each do |i|
#     puts "value #{i}"
# end 

# puts "each with index"
# (1..10).to_a.each_with_index do |i,index|
#     puts "value #{i} and index is #{index}"
# end 

# puts "select"
# arr=(1..10).to_a.select do |i|
#     i % 2==0
# end
# puts arr

# puts "reject"
# arr=(1..10).to_a.reject do |i|
#     i % 2==0
# end
# puts arr

# puts "hi"*3
# puts "upto"

# arr=(1..10).to_a.each do |i|
#     puts "*"*i 
# end

# arr=(1..100).to_a.select do |i|
#     i%3==0 && i%5==0 
# end
# puts "array #{arr}"

# a="123"
# b=a.reverse()
# if b==a
#     puts "pallindrome"
# else
#     puts " not pallindrome"   
# end  

# puts 'collect'
# arr =(1..10).to_a.collect do |i|
#     i*2
# end
# puts arr  


# puts 'each'
# arr=[]
# (1..10).to_a.each do |i|
#    arr.push(i*2)
# end
# puts "each value #{arr}" 


# puts 'map'
# arr =(1..10).to_a.map do |i|
#     i*2
# end
# puts arr


# puts "addition of 1 to 10 is #{(1..10).inject(:+)}"
# (1..10).to_a.inject(0) do |sum,i|
#    sum+=i
# end


puts "pallindrome is or not"
arr=[]
(1..100).to_a.each do |i|
    (1..100).to_a.each do |j|
        if (i*j).to_s== (i*j).to_s.reverse()
   arr.push(i*j)
        end
    end
end
# puts "each value #{arr}"
puts "max value  #{arr.max}"


puts 'sum of the square of first ten natural numbers'
sum=0
arr=[]
(1..10).to_a.each do |i|
    sum=sum+(i*i)
end
puts "total sum #{sum}"

puts 'the square of sum of the first ten natural numbers'
sum=0
sum1=0
arr=[]
(1..10).to_a.each do |i|
    sum=sum+i
    sum1=sum*sum
end
puts "total sum #{sum1}"

puts 'the difference between above two'
sum=0
sum1=0
sum2=0
arr=[]
(1..10).to_a.each do |i|
    sum=sum+i
    sum1=sum*sum
end
# puts "total sum #{sum1}"

sum2=0
arr=[]
diff=0
(1..10).to_a.each do |i|
    sum2=sum2+(i*i)
end
# puts "total sum #{sum2}"

diff=sum1-sum2
puts diff



