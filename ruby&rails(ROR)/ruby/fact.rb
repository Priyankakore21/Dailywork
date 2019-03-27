number = 10;  

fact = 1;

(1..number).each do |i|
    fact = fact*i
end

print "Factorial of ", number ," is: ", fact