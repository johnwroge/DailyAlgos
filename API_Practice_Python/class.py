
class Person: 
    def __init__(self, age, first_name, last_name, catch_phrase) -> None:
        self.age = age
        self.first_name = first_name
        self.last_name = last_name
        self.catch_phrase = catch_phrase
    def print(self):
        return print(f'{self.age}, {self.first_name}, {self.last_name}, {self.catch_phrase}')
    
# user = Person(25, "john","wroge","howdy")
# user.print()


class Programmer:
    def __init__(self, hobby, language, specialty) -> None:
        self.hobby = hobby
        self.language = language
        self.specialty = specialty
    def print(self):
        return print(f'Programmer = hobby: {self.hobby},language: {self.language},specialty: {self.specialty}')

# earl = Programmer('guitar','python', 'OOP')
# earl.print()


# Building API Client 


