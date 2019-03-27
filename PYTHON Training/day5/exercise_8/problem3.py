temperature = 0
if temperature < 0:
    print("Below freezing")
else:
    if temperature < 10:
        print("Very cold")
    else:
        if temperature < 20:
            print("Chilly")
        else:
            if temperature < 30:
                print("Warm")
            else:
                if temperature < 40:
                    print("Hot")
                else:
                    print("Too hot")
