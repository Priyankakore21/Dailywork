class Bar
	def initialize(*args)
	@args=args
	if args.size==3
		foo
	else
		calculate
	end
	end
	def foo
		@total=@args.inject(:+)
	end
	def calculate
		total=0
		@args.each{|el|total+=el if el%2==0}
		@total=total
	end
	def total
		@total
	end
end

bar=Bar.new(1,2,3)
puts bar.total

bar=Bar.new(1,2,3,4,5)
puts bar.total

bar=Bar.new(1,2,3,1)
puts bar.total

bar=Bar.new(3,2,3)
puts bar.total
