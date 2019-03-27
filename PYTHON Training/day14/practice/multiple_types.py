def add_pet_tolist(pet, pets=[]):
    pets.append(pet)
    return pets


list_with_cat = add_pet_tolist('cat',[])
list_with_dog = add_pet_tolist('dog',[])

print(list_with_cat)
print(list_with_dog)
