class Student
    @@no_of_students=0
    attr_accessor :name,:age,:sub1,:sub2,:sub3,:avg,:per

    def initialize
        @@no_of_students+=1
    end

    def user_input
        puts "enter name"
        @name=gets.chomp
        puts "enter age"
        @age=gets.chomp
        puts "enter sub1 marks"
        @sub1=gets.chomp.to_i
        puts "enter sub2 marks"
        @sub2=gets.chomp.to_i
        puts "enter sub3 marks"
        @sub3=gets.chomp.to_i
    end

    def average
        @avg=(sub1+sub2+sub3)
    end

    def percentage
        @per=((@avg)/(300).to_f)
        @per=per.round(2)
    end

    def dispaly_info
        puts "student name #{@name}"
        puts "student age #{@age}"
        puts "subject marks #{@sub1},#{@sub2},#{@sub3}"
        puts "average marks #{@avg}"
        puts "percentage #{@per}"
    end
end


continue='y'
while continue=='y' do
    student = Student.new
    student.user_input
    student.average
    student.percentage
    student.dispaly_info
    puts "if you want to continue press y"
    continue=gets.chomp
end
if continue=='n'
    puts "total no of students #{no_of_students}"
end
